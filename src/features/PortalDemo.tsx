"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "@/components/Icon";
import { readStore, writeStore } from "@/lib/util";
import { RECORDS_KEY, type StoredRecord } from "./RequestForm";

const KEY = "pcpa-portal-demo";

/** DEMONSTRATION ONLY: a preview of how the Member Portal will look. No real account, password or member data is used. */
export function PortalDemo() {
  const [user, setUser] = useState<string | null>(null);
  const [records, setRecords] = useState<StoredRecord[]>([]);

  useEffect(() => {
    setUser(readStore<string | null>(KEY, null));
    setRecords(readStore<StoredRecord[]>(RECORDS_KEY, []));
  }, []);

  function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const name = String(new FormData(e.currentTarget).get("member") || "Demo Member");
    writeStore(KEY, name);
    setUser(name);
  }
  function logout() {
    writeStore(KEY, null);
    setUser(null);
  }

  const banner = (
    <p className="pc-alert pc-demo" role="note">
      <Icon name="info" size={18} /> <strong>Preview only.</strong> The secure Member Portal is not live yet. This screen shows the planned layout; it does not check any password or show any real member data.
    </p>
  );

  if (!user) {
    return (
      <div className="pc-portal-login">
        {banner}
        <form className="pc-card pc-form" onSubmit={login} aria-label="Member portal preview login">
          <h2 className="pc-h3">Member Portal sign in</h2>
          <div className="pc-field">
            <label htmlFor="pm">Member ID or email</label>
            <input id="pm" name="member" className="pc-input" placeholder="Demo — type anything" autoComplete="off" required />
          </div>
          <div className="pc-field">
            <label htmlFor="pp">Password</label>
            <input id="pp" type="password" className="pc-input" placeholder="Not checked in this preview" autoComplete="off" />
          </div>
          <div className="pc-actions">
            <button className="pc-btn pc-btn-primary" type="submit">
              Open preview
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div>
      {banner}
      <div className="pc-card pc-portal-head">
        <div>
          <p className="pc-eyebrow">Signed in (preview)</p>
          <h2 className="pc-h3">Welcome, {user}</h2>
        </div>
        <button className="pc-btn pc-btn-outline pc-btn-sm" onClick={logout}>
          <Icon name="logout" size={16} /> Sign out
        </button>
      </div>
      <div className="pc-grid pc-grid-3">
        {[
          { t: "My application", d: "Status of your membership file.", i: "form" as const, h: "/membership/apply" },
          { t: "Renewals", d: "Renew for the current cycle.", i: "renew" as const, h: "/membership/renew" },
          { t: "Complaints & suggestions", d: "Submit and track references.", i: "chat" as const, h: "/complaints/track" },
          { t: "Documents", d: "Forms, circulars and notifications.", i: "file" as const, h: "/downloads" },
          { t: "Meetings", d: "Notices and approved decisions.", i: "calendar" as const, h: "/meetings" },
          { t: "Elections", d: "Schedule and voter lists.", i: "vote" as const, h: "/elections" },
        ].map((x) => (
          <Link key={x.t} className="pc-card pc-tile" href={x.h}>
            <span className="pc-icon">
              <Icon name={x.i} size={22} />
            </span>
            <strong>{x.t}</strong>
            <span className="pc-muted">{x.d}</span>
          </Link>
        ))}
      </div>
      <div className="pc-card">
        <h3 className="pc-h3">Your recent references (this device)</h3>
        {records.length === 0 ? (
          <p className="pc-muted">No complaints, suggestions or requests have been submitted from this device.</p>
        ) : (
          <ul className="pc-list">
            {records.slice(0, 5).map((r) => (
              <li key={r.ref}>
                <span className="pc-mono">{r.ref}</span> — {r.kind}: {r.summary}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
