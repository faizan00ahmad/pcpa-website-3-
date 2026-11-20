"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Icon } from "@/components/Icon";
import { catOf, gallery, galleryCats, galleryEvents, type GalleryCat } from "@/content/gallery";

/** Filterable photo gallery with a keyboard- and swipe-friendly lightbox. */
export function Gallery() {
  const [cat, setCat] = useState<GalleryCat | "all">("all");
  const [open, setOpen] = useState<number | null>(null);
  /** Albums to show (one per event or meeting, newest first) and the photos in album order, which is also the lightbox order. */
  const albums = useMemo(() => {
    const evs = galleryEvents.filter((e) => cat === "all" || e.cat === cat);
    return evs.map((e) => ({ e, photos: gallery.filter((g) => g.event === e.id) })).filter((a) => a.photos.length > 0);
  }, [cat]);
  const items = useMemo(() => albums.flatMap((a) => a.photos), [albums]);
  const opener = useRef<HTMLElement | null>(null);
  const box = useRef<HTMLDivElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);
  const isOpen = open !== null;

  const go = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + items.length) % items.length)), [items.length]);

  useEffect(() => {
    if (!isOpen) return;
    const trigger = opener.current;
    closeBtn.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "Tab" && box.current) {
        const f = Array.from(box.current.querySelectorAll<HTMLElement>("button"));
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      trigger?.focus();
    };
  }, [isOpen, go]);

  const current = open !== null ? items[open] : null;
  const count = (id: GalleryCat | "all") => (id === "all" ? gallery.length : gallery.filter((g) => catOf(g) === id).length);

  return (
    <div className="pc-gallery">
      <div className="pc-gal-tabs" role="group" aria-label="Filter photos">
        {galleryCats.map((c) => (
          <button key={c.id} type="button" className={`pc-tab${cat === c.id ? " active" : ""}`} aria-pressed={cat === c.id} onClick={() => setCat(c.id)}>
            {c.label} <span className="pc-gal-count">{count(c.id)}</span>
          </button>
        ))}
      </div>

      {albums.map((al) => {
        const start = items.indexOf(al.photos[0]);
        return (
          <section key={al.e.id} className="pc-album" aria-labelledby={`alb-${al.e.id}`}>
            <header className="pc-album-head">
              <h2 id={`alb-${al.e.id}`} className="pc-h3">
                {al.e.title}
              </h2>
              <p className="pc-album-meta">
                <span className={`pc-album-kind ${al.e.cat}`}>{al.e.cat === "meetings" ? "Meeting" : "Event"}</span>
                {al.e.date ? <time dateTime={al.e.sort}>{al.e.date}</time> : <span className="pc-muted">Date to be added</span>}
                {al.e.place && <span>{al.e.place}</span>}
                <span className="pc-muted">
                  {al.photos.length} photo{al.photos.length === 1 ? "" : "s"}
                </span>
              </p>
            </header>
            <ul className="pc-gal">
              {al.photos.map((g, k) => (
                <li key={g.src} className="pc-gal-item">
                  <button
                    type="button"
                    className="pc-gal-btn"
                    aria-label={`Open photo: ${al.e.title} – ${g.caption}`}
                    onClick={(e) => {
                      opener.current = e.currentTarget;
                      setOpen(start + k);
                    }}
                  >
                    <Image src={g.src} alt={g.alt} width={g.w} height={g.h} sizes="(max-width:600px) 50vw, (max-width:1100px) 33vw, 340px" />
                    <span className="pc-gal-cap">{g.caption}</span>
                  </button>
                </li>
              ))}
            </ul>
          </section>
        );
      })}

      {current &&
        createPortal(
        <div
          ref={box}
          className="pc-lb"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={(e) => e.target === e.currentTarget && setOpen(null)}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            touchX.current = null;
            if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
          }}
        >
          <button ref={closeBtn} type="button" className="pc-lb-btn pc-lb-close" aria-label="Close photo viewer" onClick={() => setOpen(null)}>
            <Icon name="close" size={22} />
          </button>
          <button type="button" className="pc-lb-btn pc-lb-prev" aria-label="Previous photo" onClick={() => go(-1)}>
            <Icon name="chevronRight" size={24} />
          </button>
          <figure className="pc-lb-fig">
            <Image key={current.src} className="pc-lb-img" src={current.src} alt={current.alt} width={current.w} height={current.h} sizes="92vw" priority />
            <figcaption aria-live="polite">
              <strong>{galleryEvents.find((e) => e.id === current.event)?.title}</strong>
              <em>{current.caption}</em>
              <span>
                {(open ?? 0) + 1} / {items.length}
              </span>
            </figcaption>
          </figure>
          <button type="button" className="pc-lb-btn pc-lb-next" aria-label="Next photo" onClick={() => go(1)}>
            <Icon name="chevronRight" size={24} />
          </button>
        </div>,
          document.body,
        )}
    </div>
  );
}
