"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/Icon";
import { complaintStatuses } from "@/content/membership";
import { readStore } from "@/lib/util";
import { RECORDS_KEY, type StoredRecord } from "./RequestForm";

/** Looks up a reference number among the records saved on this device. */
export function Tracker() {
  const [records, setRecords] = useState<StoredRecord[]>([]);
  const [ref, setRef] = useState("");
  const [found, setFound] = useState<StoredRecord | null | undefined>(undefined);

  useEffect(() => setRecords(readStore<StoredRecord[]>(RECORDS_KEY, [])), []);

  function lookup(e: React.FormEvent) {
    e.preventDefault();
    const r = records.find((x) => x.ref.toLowerCase() === ref.trim().toLowerCase());
    setFound(r ?? null);
  }

  const idx = found ? Math.max(0, complaintStatuses.indexOf(found.status as (typeof complaintStatuses)[number])) : 0;

  return (
    <div>
      <form className="pc-card pc-form" onSubmit={lookup} aria-label="Track a reference">
        <h2 className="pc-h3">Track by reference number</h2>
        <div className="pc-field">
          <label htmlFor="track-ref">Reference number</label>
          <input id="track-ref" className="pc-input" value={ref} onChange={(e) => setRef(e.target.value)} placeholder="PCPA-CMP-2026-12345" required />
        </div>
        <div className="pc-actions">
          <button className="pc-btn pc-btn-primary" type="submit">
            Track
          </button>
        </div>
        {found === null && (
          <p className="pc-alert" role="alert">
            No record with that reference was found on this device. Confirmation of references submitted from another device is available from the Secretariat.
          </p>
        )}
      </form>

      {found && (
        <div className="pc-card pc-track" role="status">
          <h3 className="pc-h3">
            {found.kind} · <span className="pc-mono">{found.ref}</span>
          </h3>
          <p className="pc-muted">
            {found.summary} — recorded {new Date(found.createdAt).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
          </p>
          <ol className="pc-stepper">
            {complaintStatuses.map((s, i) => (
              <li key={s} className={i < idx ? "done" : i === idx ? "current" : ""}>
                <span className="pc-dot">{i < idx ? <Icon name="check" size={12} /> : i + 1}</span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
          <p className="pc-note">
            <Icon name="info" size={16} /> Status updates are confirmed by the Secretariat after your email is received.
          </p>
        </div>
      )}

      {records.length > 0 && (
        <div className="pc-card">
          <h3 className="pc-h3">Saved on this device</h3>
          <ul className="pc-list">
            {records.slice(0, 8).map((r) => (
              <li key={r.ref}>
                <button type="button" className="pc-link-btn" onClick={() => { setRef(r.ref); setFound(r); }}>
                  <span className="pc-mono">{r.ref}</span> — {r.kind}: {r.summary}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
