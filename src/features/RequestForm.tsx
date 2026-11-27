"use client";

import { useRef, useState } from "react";
import { Icon } from "@/components/Icon";
import { directory } from "@/content/directory";
import { mailto, makeRef, readStore, writeStore } from "@/lib/util";

export type FieldDef = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "select" | "textarea" | "file" | "checkbox";
  required?: boolean;
  options?: string[];
  placeholder?: string;
  help?: string;
  wide?: boolean;
};

export type FormConfig = {
  heading: string;
  intro?: string;
  prefix: string; // reference prefix, e.g. CMP
  kind: string; // label stored with the record, e.g. "Complaint"
  fields: FieldDef[];
  submitLabel: string;
  mailSubject: string;
  confidentialNote?: string;
  /** "directory": the field named `lookupField` is a membership number; a match in the member directory fills in the member's details. */
  lookup?: "directory";
  lookupField?: string;
};

export type StoredRecord = { ref: string; kind: string; createdAt: string; status: string; summary: string; sent?: boolean };

/**
 * Optional online delivery. Set NEXT_PUBLIC_FORM_ENDPOINT (for example a Formspree or Web3Forms URL, or the Secretariat's own API)
 * and submissions are posted there as JSON. Without it, the form falls back to email / copy / download so nothing is lost.
 */
const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT || "";
export const RECORDS_KEY = "pcpa-records";

/** Request form: validates, creates a reference number, delivers it online when an endpoint is configured and otherwise hands the details over by email, copy or download. */
export function RequestForm({ config, defaults = {} }: { config: FormConfig; defaults?: Record<string, string> }) {
  const [result, setResult] = useState<{ ref: string; href: string; text: string; sent: boolean; failed: boolean } | null>(null);
  const [busy, setBusy] = useState(false);
  const [copied, setCopied] = useState(false);
  const [match, setMatch] = useState<{ ok: boolean; text: string } | null>(null);
  const filled = useRef(false);

  const lookupName = config.lookupField ?? "membership";

  /** Builds PCPA-C-001 while the member types: the prefix and dashes are added for them (C unless they type A). */
  function formatMemberNo(value: string, deleting: boolean) {
    const raw = value.toUpperCase().replace(/[^A-Z0-9]/g, "");
    if (!raw || "PCPA".startsWith(raw)) return raw === "PCPA" && !deleting ? "PCPA-" : raw;
    const rest = raw.replace(/^PCPA/, "");
    const cls = /^[CA]/.test(rest) ? rest[0] : "C";
    const digits = rest.replace(/\D/g, "").slice(0, 3);
    if (!digits) return deleting ? `PCPA-${/^[CA]/.test(rest) ? cls : ""}` : `PCPA-${cls}-`;
    return `PCPA-${cls}-${digits}`;
  }

  function onMemberInput(e: React.ChangeEvent<HTMLInputElement>) {
    const deleting = (e.nativeEvent as InputEvent).inputType?.startsWith("delete") ?? false;
    e.target.value = formatMemberNo(e.target.value, deleting);
  }

  /** Leaving the field completes the number: PCPA-C-7 becomes PCPA-C-007. */
  function onMemberBlur(e: React.FocusEvent<HTMLInputElement>) {
    const m = e.target.value.match(/^(PCPA-[CA]-)(\d{1,2})$/);
    if (!m || !e.target.form) return;
    e.target.value = m[1] + m[2].padStart(3, "0");
    runLookup(e.target.form, e.target.value);
  }

  /** Membership number typed: look it up in the member directory and fill the related fields. */
  function onChange(e: React.FormEvent<HTMLFormElement>) {
    const t = e.target as HTMLInputElement;
    if (config.lookup !== "directory" || t.name !== lookupName) return;
    runLookup(e.currentTarget, t.value);
  }

  function runLookup(form: HTMLFormElement, typed: string) {
    const value = typed.trim().toUpperCase().replace(/\s+/g, "");
    const set = (name: string, v: string) => {
      const el = form.elements.namedItem(name) as HTMLInputElement | HTMLSelectElement | null;
      if (el) el.value = v;
    };
    const found = value ? directory.find((d) => d.no.toUpperCase() === value) : undefined;
    if (found) {
      set("company", found.company);
      set("membership_class", found.cls);
      set("person", found.person ?? "");
      set("email", found.email ?? "");
      filled.current = true;
      const missing = [!found.person && "authorized person", !found.email && "email"].filter(Boolean).join(" and ");
      setMatch({
        ok: true,
        text: `Member found: ${found.company} · ${found.cls} · ${found.city}. ${missing ? `The member list has no ${missing}, so please type it below.` : "Details filled in below; please check them."}`,
      });
    } else {
      if (filled.current) {
        for (const name of ["company", "membership_class", "person", "email"]) set(name, "");
        filled.current = false;
      }
      setMatch(value.length >= 10 ? { ok: false, text: "No member found with this number. Check it, or fill in the details below by hand." } : null);
    }
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const f = new FormData(form);
    const ref = makeRef(config.prefix);
    const lines = [`Reference: ${ref}`, `Type: ${config.kind}`, ""];
    const payload: Record<string, string> = { reference: ref, type: config.kind };
    for (const fd of config.fields) {
      if (fd.type === "file") continue;
      const v = f.get(fd.name);
      const val = fd.type === "checkbox" ? (v ? "Yes" : "No") : String(v ?? "").trim();
      lines.push(`${fd.label}: ${val}`);
      payload[fd.name] = val;
    }
    const summary = String(f.get("subject") ?? f.get("company") ?? config.kind).slice(0, 80);
    let sent = false;
    let failed = false;
    if (ENDPOINT) {
      setBusy(true);
      try {
        const res = await fetch(ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ ...payload, _subject: `${config.kind} ${ref}` }) });
        sent = res.ok;
        failed = !res.ok;
      } catch {
        failed = true;
      }
      setBusy(false);
    }
    const records = readStore<StoredRecord[]>(RECORDS_KEY, []);
    writeStore(RECORDS_KEY, [{ ref, kind: config.kind, createdAt: new Date().toISOString(), status: "Received", summary, sent }, ...records].slice(0, 50));
    setResult({ ref, href: mailto(`${config.kind} ${ref}`, lines), text: lines.join("\n"), sent, failed });
    form.reset();
    filled.current = false;
    setMatch(null);
  }

  async function copy(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {}
  }

  function download(text: string, ref: string) {
    const url = URL.createObjectURL(new Blob([text], { type: "text/plain;charset=utf-8" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = `${ref}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }

  if (result) {
    const attach = config.fields.some((f) => f.type === "file") ? " Attach any supporting files to your message." : "";
    return (
      <div className="pc-card pc-success" role="status">
        <span className="pc-icon pc-icon-lg">
          <Icon name={result.sent ? "check" : "mail"} size={26} />
        </span>
        <h2 className="pc-h3">{result.sent ? `${config.kind} sent to the Secretariat` : `One more step: send your ${config.kind.toLowerCase()}`}</h2>
        <p>Your reference number is</p>
        <p className="pc-ref">{result.ref}</p>
        <button type="button" className="pc-textlink pc-copy" onClick={() => copy(result.ref)}>
          {copied ? "Copied" : "Copy reference"}
        </button>
        {result.sent ? (
          <p className="pc-muted">Keep this number. Quote it when you contact the Secretariat about this {config.kind.toLowerCase()}.</p>
        ) : (
          <>
            <p className="pc-muted">
              {result.failed ? "We could not send it online just now. " : "Nothing has been sent yet. "}
              Choose any option below to get your details to the Secretariat.{attach}
            </p>
            <div className="pc-actions pc-actions-stack">
              <a className="pc-btn pc-btn-primary" href={result.href}>
                <Icon name="mail" size={18} /> Send by email
              </a>
              <button type="button" className="pc-btn pc-btn-outline" onClick={() => copy(result.text)}>
                {copied ? "Details copied" : "Copy details"}
              </button>
              <button type="button" className="pc-btn pc-btn-outline" onClick={() => download(result.text, result.ref)}>
                <Icon name="download" size={18} /> Save as a text file
              </button>
            </div>
            <p className="pc-muted pc-small">No email app on your phone? Copy the details and paste them into your webmail or WhatsApp message to the Secretariat, quoting the reference.</p>
          </>
        )}
        <div className="pc-actions">
          <button type="button" className="pc-btn pc-btn-outline" onClick={() => setResult(null)}>
            Submit another
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="pc-card pc-form" onSubmit={onSubmit} onChange={onChange} aria-label={config.heading}>
      <h2 className="pc-h3">{config.heading}</h2>
      {config.intro && <p className="pc-muted">{config.intro}</p>}
      {config.confidentialNote && (
        <p className="pc-note">
          <Icon name="lock" size={16} /> {config.confidentialNote}
        </p>
      )}
      <div className="pc-form-grid">
        {config.fields.map((fd) => {
          const id = `f-${config.prefix}-${fd.name}`;
          const type = fd.type ?? "text";
          const common = { id, name: fd.name, required: fd.required, defaultValue: defaults[fd.name] };
          return (
            <div key={fd.name} className={`pc-field${fd.wide || type === "textarea" ? " pc-wide" : ""}${type === "checkbox" ? " pc-field-check" : ""}`}>
              {type === "checkbox" ? (
                <label className="pc-check" htmlFor={id}>
                  <input type="checkbox" id={id} name={fd.name} required={fd.required} />
                  <span>{fd.label}</span>
                </label>
              ) : (
                <>
                  <label htmlFor={id}>
                    {fd.label}
                    {fd.required && <span className="pc-req" aria-hidden> *</span>}
                  </label>
                  {type === "select" ? (
                    <select {...common} className="pc-select" defaultValue={defaults[fd.name] ?? ""}>
                      <option value="" disabled>
                        Select…
                      </option>
                      {fd.options?.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  ) : type === "textarea" ? (
                    <textarea {...common} className="pc-textarea" rows={5} placeholder={fd.placeholder} maxLength={3000} />
                  ) : type === "file" ? (
                    <input id={id} name={fd.name} type="file" className="pc-input pc-file" />
                  ) : (
                    <input
                      {...common}
                      type={type}
                      className="pc-input"
                      placeholder={fd.placeholder}
                      autoComplete="off"
                      {...(config.lookup && fd.name === lookupName ? { onChange: onMemberInput, onBlur: onMemberBlur, maxLength: 14, autoCapitalize: "characters" } : {})}
                    />
                  )}
                  {fd.help && <small className="pc-help">{fd.help}</small>}
                  {config.lookup && fd.name === lookupName && match && (
                    <small className={`pc-lookup ${match.ok ? "ok" : "miss"}`} role="status">
                      {match.text}
                    </small>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
      <div className="pc-actions">
        <button type="submit" className="pc-btn pc-btn-primary" disabled={busy}>
          {busy ? "Sending…" : config.submitLabel}
        </button>
      </div>
    </form>
  );
}
