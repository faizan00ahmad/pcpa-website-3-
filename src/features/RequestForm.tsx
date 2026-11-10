"use client";

import { useState } from "react";
import { Icon } from "@/components/Icon";
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
};

export type StoredRecord = { ref: string; kind: string; createdAt: string; status: string; summary: string };
export const RECORDS_KEY = "pcpa-records";

/** Front-end request form: validates, creates a reference number, keeps a copy on this device and prepares the email to the Secretariat. */
export function RequestForm({ config, defaults = {} }: { config: FormConfig; defaults?: Record<string, string> }) {
  const [result, setResult] = useState<{ ref: string; href: string } | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const ref = makeRef(config.prefix);
    const lines = [`Reference: ${ref}`, `Type: ${config.kind}`, ""];
    for (const fd of config.fields) {
      if (fd.type === "file") continue;
      const v = f.get(fd.name);
      lines.push(`${fd.label}: ${fd.type === "checkbox" ? (v ? "Yes" : "No") : String(v ?? "").trim()}`);
    }
    const summary = String(f.get("subject") ?? f.get("company") ?? config.kind).slice(0, 80);
    const records = readStore<StoredRecord[]>(RECORDS_KEY, []);
    writeStore(RECORDS_KEY, [{ ref, kind: config.kind, createdAt: new Date().toISOString(), status: "Received", summary }, ...records].slice(0, 50));
    setResult({ ref, href: mailto(`${config.kind} ${ref}`, lines) });
    e.currentTarget.reset();
  }

  if (result) {
    return (
      <div className="pc-card pc-success" role="status">
        <span className="pc-icon pc-icon-lg">
          <Icon name="check" size={26} />
        </span>
        <h2 className="pc-h3">{config.kind} recorded</h2>
        <p>Your reference number is</p>
        <p className="pc-ref">{result.ref}</p>
        <p className="pc-muted">
          Your details are saved on this device so you can track the reference. To complete the submission, send the prepared email to the PCPA Secretariat
          {config.fields.some((f) => f.type === "file") ? " and attach any supporting files" : ""}.
        </p>
        <div className="pc-actions">
          <a className="pc-btn pc-btn-primary" href={result.href}>
            <Icon name="mail" size={18} /> Send to the Secretariat
          </a>
          <button type="button" className="pc-btn pc-btn-outline" onClick={() => setResult(null)}>
            Submit another
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="pc-card pc-form" onSubmit={onSubmit} aria-label={config.heading}>
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
                    <input {...common} type={type} className="pc-input" placeholder={fd.placeholder} autoComplete="off" />
                  )}
                  {fd.help && <small className="pc-help">{fd.help}</small>}
                </>
              )}
            </div>
          );
        })}
      </div>
      <div className="pc-actions">
        <button type="submit" className="pc-btn pc-btn-primary">
          {config.submitLabel}
        </button>
      </div>
    </form>
  );
}
