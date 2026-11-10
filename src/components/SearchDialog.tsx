"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { searchSite, type SearchEntry } from "@/lib/searchIndex";
import { Icon } from "./Icon";

export const OPEN_SEARCH_EVENT = "pcpa:search";

/** Button (or any trigger) that opens the search overlay. */
export function SearchTrigger({ className = "", children, label = "Search" }: { className?: string; children: React.ReactNode; label?: string }) {
  return (
    <button type="button" className={className} aria-label={label} onClick={() => window.dispatchEvent(new Event(OPEN_SEARCH_EVENT))}>
      {children}
    </button>
  );
}

export function SearchDialog() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const input = useRef<HTMLInputElement>(null);
  const results = useMemo(() => searchSite(q), [q]);

  useEffect(() => {
    const show = () => setOpen(true);
    const key = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener(OPEN_SEARCH_EVENT, show);
    window.addEventListener("keydown", key);
    return () => {
      window.removeEventListener(OPEN_SEARCH_EVENT, show);
      window.removeEventListener("keydown", key);
    };
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      const t = setTimeout(() => input.current?.focus(), 30);
      return () => {
        clearTimeout(t);
        document.body.style.overflow = "";
      };
    }
    setQ("");
    setActive(0);
  }, [open]);

  useEffect(() => setActive(0), [q]);

  function go(e: SearchEntry) {
    setOpen(false);
    if (e.external) window.open(e.href, "_blank", "noopener,noreferrer");
    else router.push(e.href);
  }

  if (!open) return null;

  return (
    <div className="pc-search" role="dialog" aria-modal="true" aria-label="Search">
      <div className="pc-search-scrim" onClick={() => setOpen(false)} />
      <div className="pc-search-box">
        <div className="pc-search-head">
          <Icon name="search" size={22} />
          <input
            ref={input}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setActive((a) => Math.min(a + 1, results.length - 1));
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setActive((a) => Math.max(a - 1, 0));
              } else if (e.key === "Enter" && results[active]) {
                go(results[active]);
              }
            }}
            placeholder="Search pages, documents, people…"
            aria-label="Search"
          />
          <button type="button" className="pc-search-esc" onClick={() => setOpen(false)} aria-label="Close search">
            Esc
          </button>
        </div>
        <div className="pc-search-body">
          {!q.trim() && <p className="pc-search-hint">Try: Election, Seed Act, Membership fees, Chairman…</p>}
          {q.trim() && results.length === 0 && <p className="pc-search-hint">No results found</p>}
          <ul>
            {results.map((r, i) => (
              <li key={`${r.kind}-${r.href}-${r.title}`}>
                <button type="button" onMouseEnter={() => setActive(i)} onClick={() => go(r)} className={`pc-search-row${i === active ? " active" : ""}`}>
                  <span className="pc-search-main">
                    <span className="pc-search-title">{r.title}</span>
                    {r.hint && <span className="pc-search-sub">{r.hint}</span>}
                  </span>
                  <span className="pc-search-kind">{r.kind}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
