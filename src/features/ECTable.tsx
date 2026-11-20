"use client";

import { useMemo, useState } from "react";
import { Avatar } from "@/components/ProfileCards";
import { Highlight } from "@/components/Highlight";
import { Icon } from "@/components/Icon";
import type { EcClass, Member } from "@/content/ec-2026-28";

type Group = { cls: EcClass; rows: Member[] };

/** Searchable Executive Committee list, shown class by class as horizontal profile cards. */
export function ECTable({ groups }: { groups: Group[] }) {
  const [q, setQ] = useState("");
  const [cls, setCls] = useState<"All" | EcClass>("All");
  const total = groups.reduce((n, g) => n + g.rows.length, 0);
  const shown = useMemo(() => {
    const s = q.trim().toLowerCase();
    return groups
      .filter((g) => cls === "All" || g.cls === cls)
      .map((g) => ({ ...g, rows: g.rows.filter((r) => !s || `${r.person} ${r.company} ${r.ms}`.toLowerCase().includes(s)) }));
  }, [groups, q, cls]);
  const count = shown.reduce((n, g) => n + g.rows.length, 0);

  return (
    <div>
      <label className="pc-searchbar">
        <Icon name="search" size={18} />
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search name, company or membership number…" aria-label="Search the Executive Committee" />
      </label>
      <div className="pc-filters">
        <label>
          <span>Class</span>
          <select className="pc-select" value={cls} onChange={(e) => setCls(e.target.value as "All" | EcClass)}>
            <option>All</option>
            {groups.map((g) => (
              <option key={g.cls}>{g.cls}</option>
            ))}
          </select>
        </label>
        <button type="button" className="pc-btn pc-btn-outline pc-btn-sm" onClick={() => { setQ(""); setCls("All"); }}>
          Reset
        </button>
      </div>
      <p className="pc-count" aria-live="polite">
        {count} of {total} members
      </p>
      {shown.map((g) => (
        <section key={g.cls} aria-labelledby={`ec-${g.cls}`}>
          <h3 id={`ec-${g.cls}`} className="pc-h3 pc-prof-group">
            {g.cls} class <span className="pc-muted">({g.rows.length})</span>
          </h3>
          <ul className="pc-profs">
            {g.rows.map((r) => (
              <li key={`${r.cls}-${r.sr}`} className="pc-prof">
                <Avatar name={r.person} size={88} />
                <div className="pc-prof-body">
                  <h4 className="pc-prof-name">
                    <Highlight text={r.person} query={q} />
                  </h4>
                  <p className="pc-prof-line">
                    <Highlight text={r.company} query={q} />
                  </p>
                  <p className="pc-prof-meta">
                    <span className="pc-prof-role">{r.cls}</span>
                    <span className="pc-prof-no">
                      M/S <Highlight text={r.ms} query={q} />
                    </span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
          {g.rows.length === 0 && <p className="pc-empty-cell">No members match your search.</p>}
        </section>
      ))}
    </div>
  );
}
