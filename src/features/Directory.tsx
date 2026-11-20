"use client";

import { useEffect, useMemo, useState } from "react";
import { Highlight } from "@/components/Highlight";
import { Icon } from "@/components/Icon";
import type { DirectoryEntry } from "@/content/directory";

const PAGE = 24;

/** Up to two initials, shown until a member photo or logo is supplied. */
const initials = (name: string) => name.replace(/[^A-Za-z0-9 ]/g, " ").split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join("");

/** Searchable member directory (company name, class and city only). */
export function Directory({ entries }: { entries: DirectoryEntry[] }) {
  const [q, setQ] = useState("");
  const [cls, setCls] = useState("All");
  const [city, setCity] = useState("All");
  const [limit, setLimit] = useState(PAGE);

  const cities = useMemo(() => Array.from(new Set(entries.map((e) => e.city))).sort(), [entries]);
  const rows = useMemo(() => {
    const s = q.trim().toLowerCase();
    return entries.filter((e) => (cls === "All" || e.cls === cls) && (city === "All" || e.city === city) && (!s || `${e.company} ${e.city} ${e.no}`.toLowerCase().includes(s)));
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
      {rows.length === 0 ? (
        <p className="pc-empty-cell">No members match your search.</p>
      ) : (
        <ul className="pc-mcards">
          {shown.map((e) => (
            <li key={e.no} className="pc-mcard">
              <span className="pc-mcard-photo">
                {e.photo ? <img src={e.photo} alt="" loading="lazy" /> : <span aria-hidden>{initials(e.company)}</span>}
              </span>
              <span className="pc-mcard-body">
                <strong className="pc-mcard-name">
                  <Highlight text={e.company} query={q} />
                </strong>
                <span className="pc-mcard-no">
                  <Highlight text={e.no} query={q} />
                </span>
                <span className="pc-mcard-meta">
                  <span className="pc-mcard-class">{e.cls}</span>
                  <span>
                    <Highlight text={e.city} query={q} />
                  </span>
                </span>
              </span>
            </li>
          ))}
        </ul>
      )}
      {rows.length > shown.length && (
        <button type="button" className="pc-btn pc-btn-outline pc-more" onClick={() => setLimit((n) => n + PAGE)}>
          Show more ({rows.length - shown.length} remaining)
        </button>
      )}
    </div>
  );
}
