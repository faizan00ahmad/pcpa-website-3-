"use client";

import { useMemo, useState } from "react";
import { Icon } from "@/components/Icon";
import type { Member } from "@/content/ec-2019-20";

/** Searchable archive of the Executive Committee 2019-20 (names, companies and designations as published). */
export function ECTable({ rows }: { rows: Member[] }) {
  const [q, setQ] = useState("");
  const [des, setDes] = useState("All");
  const designations = useMemo(() => Array.from(new Set(rows.map((r) => r.designation))).sort(), [rows]);
  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    return rows.filter((r) => (des === "All" || r.designation === des) && (!s || `${r.person} ${r.company} ${r.designation} ${r.area}`.toLowerCase().includes(s)));
  }, [rows, q, des]);

  return (
    <div>
      <label className="pc-searchbar">
        <Icon name="search" size={18} />
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search name, company or designation…" aria-label="Search the Executive Committee" />
      </label>
      <div className="pc-filters">
        <label>
          <span>Designation</span>
          <select className="pc-select" value={des} onChange={(e) => setDes(e.target.value)}>
            <option>All</option>
            {designations.map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>
        </label>
        <button type="button" className="pc-btn pc-btn-outline pc-btn-sm" onClick={() => { setQ(""); setDes("All"); }}>
          Reset
        </button>
      </div>
      <p className="pc-count" aria-live="polite">
        {list.length} of {rows.length} members
      </p>
      <div className="pc-table-wrap" tabIndex={0} role="region" aria-label="Table, scrollable">
        <table className="pc-table">
          <thead>
            <tr>
              <th>Sr.</th>
              <th>Name</th>
              <th>Company</th>
              <th>Class</th>
              <th>Designation</th>
              <th>Area</th>
            </tr>
          </thead>
          <tbody>
            {list.map((r) => (
              <tr key={`${r.sr}-${r.person}`}>
                <td>{r.sr}</td>
                <td className="pc-strong">{r.person}</td>
                <td>{r.company}</td>
                <td>{r.cls}</td>
                <td>{r.designation}</td>
                <td>{r.area}</td>
              </tr>
            ))}
            {list.length === 0 && (
              <tr>
                <td colSpan={6} className="pc-empty-cell">
                  No members match your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
