"use client";

import { useEffect, useMemo, useState } from "react";
import { Icon } from "@/components/Icon";
import type { DirectoryEntry } from "@/content/directory";

const PAGE = 25;

/** Searchable member directory (company name, class and city only). */
export function Directory({ entries }: { entries: DirectoryEntry[] }) {
  const [q, setQ] = useState("");
  const [cls, setCls] = useState("All");
  const [city, setCity] = useState("All");
  const [limit, setLimit] = useState(PAGE);

  const cities = useMemo(() => Array.from(new Set(entries.map((e) => e.city))).sort(), [entries]);
  const rows = useMemo(() => {
    const s = q.trim().toLowerCase();
    return entries.filter((e) => (cls === "All" || e.cls === cls) && (city === "All" || e.city === city) && (!s || `${e.company} ${e.city}`.toLowerCase().includes(s)));
  }, [entries, q, cls, city]);

  useEffect(() => setLimit(PAGE), [q, cls, city]);
  const shown = rows.slice(0, limit);

  return (
    <div>
      <label className="pc-searchbar">
        <Icon name="search" size={18} />
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search company…" aria-label="Search company" />
      </label>
      <div className="pc-filters">
        <label>
          <span>Class</span>
          <select className="pc-select" value={cls} onChange={(e) => setCls(e.target.value)}>
            <option>All</option>
            <option>Corporate</option>
            <option>Associate</option>
          </select>
        </label>
        <label>
          <span>City</span>
          <select className="pc-select" value={city} onChange={(e) => setCity(e.target.value)}>
            <option>All</option>
            {cities.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>
        <button type="button" className="pc-btn pc-btn-outline pc-btn-sm" onClick={() => { setQ(""); setCls("All"); setCity("All"); }}>
          Reset
        </button>
      </div>
      <p className="pc-count" aria-live="polite">
        {rows.length} of {entries.length} members
      </p>
      <div className="pc-table-wrap" tabIndex={0} role="region" aria-label="Table, scrollable">
        <table className="pc-table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Class</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {shown.map((e, i) => (
              <tr key={`${e.company}-${i}`}>
                <td className="pc-strong">{e.company}</td>
                <td className="pc-c-meta">{e.cls}</td>
                <td className="pc-c-meta">{e.city}</td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={3} className="pc-empty-cell">
                  No members match your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {rows.length > shown.length && (
        <button type="button" className="pc-btn pc-btn-outline pc-more" onClick={() => setLimit((n) => n + PAGE)}>
          Show more ({rows.length - shown.length} remaining)
        </button>
      )}
    </div>
  );
}
