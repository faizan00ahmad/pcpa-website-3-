"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";

/**
 * Site-wide motion layer. Everything here is progressive: without JavaScript, or for visitors who
 * prefer reduced motion, the page simply renders in its final state.
 *
 *  - scroll reveal with a small stagger for cards, grid items, headings and content blocks
 *  - count-up for plain numeric figures (e.g. "31+")
 *  - scroll progress (--sp), scroll distance (--sy) and a "scrolled" flag on <html> for CSS
 *  - optional pointer-follow highlight on cards (--mx / --my) for the glass design
 */
const REVEAL = [
  ".pc-reveal",
  ".pc-section .pc-h2",
  ".pc-section-head",
  ".pc-grid > *",
  ".pc-quick > *",
  ".pc-facts-in > *",
  ".pc-statrow > *",
  ".pc-bento > *",
  ".pc-timeline li",
  ".pc-doclist > li",
  ".pc-two > *",
  ".pc-cta-in > *",
  ".pc-content > *",
  ".pc-steps > li",
  ".pc-stepper > li",
  ".pc-dl-cats",
  ".pc-table-wrap",
  ".pc-bar > *",
  ".pc-sec-head",
].join(",");

const COUNT = ".pc-facts strong, .pc-stat strong, .pc-statrow strong, .pc-chip strong, .pc-float-stat strong";
const GLOW = ".pc-bento-tile, .pc-card, .pc-person, .pc-news, .pc-stat, .pc-doclink, .pc-chip";

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

export function Motion({ glow = false }: { glow?: boolean }) {
  const path = usePathname();

  // Reveal + count-up run again for every page, before the browser paints the new content.
  useIsoLayoutEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return;
    const timers: number[] = [];
    const vh = window.innerHeight;

    const revealIO = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          const el = en.target as HTMLElement;
          revealIO.unobserve(el);
          el.classList.add("in");
          // Hand the element back to its own CSS (hover transitions etc.) once the reveal has finished.
          const delay = 900 + (Number(el.style.getPropertyValue("--rv-i")) || 0) * 80;
          timers.push(window.setTimeout(() => el.classList.remove("pc-rv", "in"), delay));
        }),
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    );

    document.querySelectorAll<HTMLElement>(`main :is(${REVEAL})`).forEach((el) => {
      if (el.classList.contains("pc-rv") || el.parentElement?.closest(".pc-rv")) return;
      const top = el.getBoundingClientRect().top;
      // Anything already on screen stays put; the hero has its own entrance animation.
      if (top < vh * 0.92) return;
      const sibs = el.parentElement ? Array.from(el.parentElement.children) : [];
      el.style.setProperty("--rv-i", String(Math.min(sibs.indexOf(el), 6)));
      el.classList.add("pc-rv");
      revealIO.observe(el);
    });

    const countIO = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          const el = en.target as HTMLElement;
          countIO.unobserve(el);
          const m = /^(\d{1,3}(?:,\d{3})*|\d+)(\+?)$/.exec((el.textContent || "").trim());
          if (!m) return;
          const end = Number(m[1].replace(/,/g, ""));
          if (!end || end > 100000) return;
          const t0 = performance.now();
          const tick = (t: number) => {
            const k = Math.min(1, (t - t0) / 1100);
            const v = Math.round(end * (1 - Math.pow(1 - k, 3)));
            el.textContent = v.toLocaleString("en-US") + m[2];
            if (k < 1) requestAnimationFrame(tick);
          };
          el.textContent = "0" + m[2];
          requestAnimationFrame(tick);
        }),
      { threshold: 0.6 },
    );
    document.querySelectorAll<HTMLElement>(`main :is(${COUNT})`).forEach((el) => countIO.observe(el));

    return () => {
      revealIO.disconnect();
      countIO.disconnect();
      timers.forEach((t) => clearTimeout(t));
    };
  }, [path]);

  // Scroll-linked values, written at most once per frame.
  useEffect(() => {
    const root = document.documentElement;
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      root.style.setProperty("--sp", max > 0 ? String(Math.min(1, y / max)) : "0");
      root.style.setProperty("--sy", String(Math.round(Math.min(y, 1200))));
      if (y > 8) root.setAttribute("data-scrolled", "");
      else root.removeAttribute("data-scrolled");
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Pointer-follow highlight (glass design only).
  useEffect(() => {
    if (!glow || window.matchMedia("(hover: none)").matches) return;
    const move = (e: PointerEvent) => {
      const el = (e.target as Element | null)?.closest<HTMLElement>(GLOW);
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    document.addEventListener("pointermove", move, { passive: true });
    return () => document.removeEventListener("pointermove", move);
  }, [glow]);

  return null;
}
