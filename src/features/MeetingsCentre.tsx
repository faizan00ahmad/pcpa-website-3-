"use client";

import { useState } from "react";
import { Icon } from "@/components/Icon";
import { meetingTabs, type MeetingRow } from "@/content/events";

/** Tabbed meetings register. Only published records are listed; empty tabs say so honestly. */
export function MeetingsCentre({ rows }: { rows: MeetingRow[] }) {
  const [tab, setTab] = useState<(typeof meetingTabs)[number]>("Executive Committee");
  const list = rows.filter((r) => r.group === tab);
  return (
    <div>
      <div className="pc-tabs" role="tablist" aria-label="Meeting categories">
        {meetingTabs.map((t) => (
          <button key={t} role="tab" id={`tab-${t}`} aria-selected={tab === t} aria-controls="meetings-panel" className={`pc-tab${tab === t ? " active" : ""}`} onClick={() => setTab(t)}>
            {t}
          </button>
        ))}
      </div>
      <div id="meetings-panel" role="tabpanel" aria-labelledby={`tab-${tab}`} className="pc-table-wrap" tabIndex={0} aria-label="Meetings table">
        <table className="pc-table">
          <thead>
            <tr>
              <th>Ref.</th>
              <th>Date</th>
              <th>Meeting</th>
              <th>Agenda</th>
              <th>Minutes</th>
              <th>Decisions</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {list.map((m) => (
              <tr key={m.ref}>
                <td className="pc-mono">{m.ref}</td>
                <td>{m.date}</td>
                <td className="pc-strong">{m.title}</td>
                <td>{m.agenda ? <a href={m.agenda}>Agenda</a> : "—"}</td>
                <td>{m.minutes ? <a href={m.minutes}>Minutes</a> : "—"}</td>
                <td>{m.decisions ? <a href={m.decisions}>Decisions</a> : "—"}</td>
                <td>
                  <span className="pc-badge pc-badge-ok">{m.status}</span>
                </td>
              </tr>
            ))}
            {list.length === 0 && (
              <tr>
                <td colSpan={7} className="pc-empty-cell">
                  No {tab.toLowerCase()} records have been published online yet — to be updated.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <p className="pc-note">
        <Icon name="info" size={16} /> Confidential working papers are not published. Approved public decisions are added here by the Secretariat.
      </p>
    </div>
  );
}
