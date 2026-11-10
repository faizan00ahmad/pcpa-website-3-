"use client";

import { useMemo, useState } from "react";
import { Icon } from "@/components/Icon";
import { categories, type DocItem } from "@/content/documents";

type Doc = DocItem & { size: string };

/** Searchable, filterable document list. Superseded documents stay available but are clearly marked. */
export function DownloadCentre({ docs, initialCategory = "All" }: { docs: Doc[]; initialCategory?: string }) {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState(initialCategory);
  const [year, setYear] = useState("All");
  const [type, setType] = useState("All");
  const [auth, setAuth] = useState("All");
  const [showOld, setShowOld] = useState(true);

  const years = useMemo(() => Array.from(new Set(docs.map((d) => d.year).filter(Boolean))).sort().reverse(), [docs]);
  const auths = useMemo(() => Array.from(new Set(docs.map((d) => d.authority))).sort(), [docs]);
  const counts = useMemo(() => {
    const m: Record<string, number> = { All: docs.length };
    for (const c of categories) m[c] = docs.filter((d) => d.category === c).length;
    return m;
  }, [docs]);

  const rows = useMemo(() => {
    const s = q.trim().toLowerCase();
    return docs.filter(
      (d) =>
        (cat === "All" || d.category === cat) &&
        (year === "All" || d.year === year) &&
        (type === "All" || d.type === type) &&
        (auth === "All" || d.authority === auth) &&
        (showOld || d.status !== "Superseded") &&
        (!s || `${d.title} ${d.id} ${d.category} ${d.year} ${d.authority}`.toLowerCase().includes(s)),
    );
  }, [docs, q, cat, year, type, auth, showOld]);

  function reset() {
    setQ("");
    setCat("All");
    setYear("All");
    setType("All");
    setAuth("All");
    setShowOld(true);
  }

  return (
    <div className="pc-dl">
      <aside className="pc-dl-cats" aria-label="Document categories">
        <ul>
          {["All", ...categories].map((c) => (
            <li key={c}>
              <button type="button" className={`pc-dl-cat${cat === c ? " active" : ""}`} onClick={() => setCat(c)} aria-pressed={cat === c}>
                <span>{c === "All" ? "All Documents" : c}</span>
                <small>{counts[c] ?? 0}</small>
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <div className="pc-dl-main">
        <label className="pc-searchbar">
          <Icon name="search" size={18} />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search documents by title, subject, year or reference…" aria-label="Search documents" />
        </label>

        <div className="pc-filters">
          <label>
            <span>Year</span>
            <select value={year} onChange={(e) => setYear(e.target.value)} className="pc-select">
              <option>All</option>
              {years.map((y) => (
                <option key={y}>{y}</option>
              ))}
            </select>
          </label>
          <label>
            <span>Document Type</span>
            <select value={type} onChange={(e) => setType(e.target.value)} className="pc-select">
              <option>All</option>
              <option>PDF</option>
              <option>DOCX</option>
            </select>
          </label>
          <label>
            <span>Authority</span>
            <select value={auth} onChange={(e) => setAuth(e.target.value)} className="pc-select">
              <option>All</option>
              {auths.map((a) => (
                <option key={a}>{a}</option>
              ))}
            </select>
          </label>
          <label className="pc-check">
            <input type="checkbox" checked={showOld} onChange={(e) => setShowOld(e.target.checked)} />
            <span>Show superseded</span>
          </label>
          <button type="button" className="pc-btn pc-btn-outline pc-btn-sm" onClick={reset}>
            Reset
          </button>
        </div>

        <p className="pc-count" aria-live="polite">
          {rows.length} of {docs.length} documents
        </p>

        <div className="pc-table-wrap" tabIndex={0} role="region" aria-label="Table, scrollable">
          <table className="pc-table">
            <thead>
              <tr>
                <th>Document Name</th>
                <th>Ref.</th>
                <th>Date</th>
                <th>Category</th>
                <th>Type</th>
                <th className="pc-right">
                  <span className="pc-sr">Download</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((d) => (
                <tr key={d.id}>
                  <td className="pc-strong">
                    {d.title}
                    {d.status === "Superseded" && <span className="pc-badge pc-badge-muted">Superseded</span>}
                    {d.status === "Current" && <span className="pc-badge pc-badge-ok">Current</span>}
                  </td>
                  <td className="pc-mono">{d.id}</td>
                  <td>{d.date ?? d.year ?? "—"}</td>
                  <td>{d.category}</td>
                  <td>
                    {d.type}
                    {d.size ? ` · ${d.size}` : ""}
                  </td>
                  <td className="pc-right">
                    <a href={d.file} target="_blank" rel="noopener noreferrer" className="pc-icon-link" aria-label={`Download ${d.title}`}>
                      <Icon name="download" size={18} />
                    </a>
                  </td>
                </tr>
              ))}
              {rows.length === 0 && (
                <tr>
                  <td colSpan={6} className="pc-empty-cell">
                    No documents match. {cat !== "All" && counts[cat] === 0 ? `No ${cat.toLowerCase()} have been published online yet.` : "Try clearing the filters."}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <p className="pc-note">
          <Icon name="info" size={18} /> Superseded documents remain archived but are clearly marked. The current version is always linked.
        </p>
      </div>
    </div>
  );
}
