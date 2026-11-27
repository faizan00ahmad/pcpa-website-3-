"use client";

import { useEffect, useMemo, useState } from "react";
import { Highlight } from "@/components/Highlight";
import { Icon } from "@/components/Icon";
import type { DirectoryEntry } from "@/content/directory";

const PAGE = 24;

/** Up to two initials, shown until a member photo or logo is supplied. */
const initials = (name: string) => name.replace(/[^A-Za-z0-9 ]/g, " ").split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join("");

/** Searchable member directory (company, class, city, authorized person and email). */
export function Directory({ entries }: { entries: DirectoryEntry[] }) {
  const [q, setQ] = useState("");
  const [cls, setCls] = useState("All");
  const [city, setCity] = useState("All");
  const [limit, setLimit] = useState(PAGE);

  const cities = useMemo(() => Array.from(new Set(entries.map((e) => e.city))).sort(), [entries]);
  const rows = useMemo(() => {
    const s = q.trim().toLowerCase();
    return entries.filter((e) => (cls === "All" || e.cls === cls) && (city === "All" || e.city === city) && (!s || `${e.company} ${e.city} ${e.no} ${e.person ?? ""} ${e.email ?? ""}`.toLowerCase().includes(s)));
  }, [entries, q, cls, city]);

  useEffect(() => setLimit(PAGE), [q, cls, city]);
  const shown = rows.slice(0, limit);

  return (
    <div>
      <label className="pc-searchbar">
        <Icon name="search" size={18} />
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search company, person or email…" aria-label="Search company, authorized person or email" />
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
              <div className="pc-mcard-head">
                <span className="pc-mcard-photo">
                  {e.photo ? <img src={e.photo} alt="" loading="lazy" /> : <span aria-hidden>{initials(e.company)}</span>}
                </span>
                <div className="pc-mcard-title">
                  <h3 className="pc-mcard-name">
                    <Highlight text={e.company} query={q} />
                  </h3>
                  <p className="pc-mcard-meta">
                    <span className="pc-mcard-class">{e.cls}</span>
                    <span>
                      <Highlight text={e.city} query={q} />
                    </span>
                  </p>
                </div>
              </div>
              <dl className="pc-mcard-info">
                <div>
                  <dt>Authorized person</dt>
                  <dd>{e.person ? <Highlight text={e.person} query={q} /> : <span className="pc-mcard-none">Not listed</span>}</dd>
                </div>
                <div>
                  <dt>Email</dt>
                  <dd>
                    {e.email ? (
                      <a className="pc-mcard-email" href={`mailto:${e.email}`}>
                        {/* the line may only break before the @ */}
                        <Highlight text={e.email.slice(0, e.email.indexOf("@"))} query={q} />
                        <wbr />
                        <Highlight text={e.email.slice(e.email.indexOf("@"))} query={q} />
                      </a>
                    ) : (
                      <span className="pc-mcard-none">Not listed</span>
                    )}
                  </dd>
                </div>
                <div>
                  <dt>Membership no.</dt>
                  <dd className="pc-mcard-no">
                    <Highlight text={e.no} query={q} />
                  </dd>
                </div>
              </dl>
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
