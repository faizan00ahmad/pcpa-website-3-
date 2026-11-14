"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type CycleSlide = { src: string; alt?: string; pos?: string; flip?: boolean; shift?: string };

/** Crossfading photo slideshow that fills its (positioned) parent. Static for reduced-motion visitors. */
export function PhotoCycle({ slides, interval = 6500, sizes = "100vw", dots = false }: { slides: CycleSlide[]; interval?: number; sizes?: string; dots?: boolean }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || slides.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => {
      if (!document.hidden) setI((x) => (x + 1) % slides.length);
    }, interval);
    return () => clearInterval(t);
  }, [slides.length, interval, paused]);
  return (
    <div className="pc-cycle" onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      {slides.map((s, k) => (
        <Image key={s.src} src={s.src} alt={s.alt ?? ""} fill priority={k === 0} sizes={sizes} className={`pc-cycle-img${k === i ? " on" : ""}${s.flip ? " flip" : ""}`} style={{ objectPosition: s.pos, translate: s.shift ? `${s.shift} 0` : undefined }} />
      ))}
      {dots && slides.length > 1 && (
        <div className="pc-cycle-dots">
          <button type="button" className="pc-cycle-pause" aria-label={paused ? "Play slideshow" : "Pause slideshow"} aria-pressed={paused} onClick={() => setPaused((v) => !v)}>
            {paused ? "▶" : "❚❚"}
          </button>
          {slides.map((s, k) => (
            <button key={s.src} type="button" aria-label={`Show photo ${k + 1}`} aria-current={k === i} className={k === i ? "on" : ""} onClick={() => setI(k)} />
          ))}
        </div>
      )}
    </div>
  );
}
