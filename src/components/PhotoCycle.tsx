"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type CycleSlide = { src: string; alt?: string; pos?: string; flip?: boolean };

/** Crossfading photo slideshow that fills its (positioned) parent. Static for reduced-motion visitors. */
export function PhotoCycle({ slides, interval = 6500, sizes = "100vw", dots = false }: { slides: CycleSlide[]; interval?: number; sizes?: string; dots?: boolean }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (slides.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => {
      if (!document.hidden) setI((x) => (x + 1) % slides.length);
    }, interval);
    return () => clearInterval(t);
  }, [slides.length, interval]);
  return (
    <div className="pc-cycle">
      {slides.map((s, k) => (
        <Image key={s.src} src={s.src} alt={s.alt ?? ""} fill priority={k === 0} sizes={sizes} className={`pc-cycle-img${k === i ? " on" : ""}${s.flip ? " flip" : ""}`} style={{ objectPosition: s.pos }} />
      ))}
      {dots && slides.length > 1 && (
        <div className="pc-cycle-dots">
          {slides.map((s, k) => (
            <button key={s.src} type="button" aria-label={`Show photo ${k + 1}`} aria-current={k === i} className={k === i ? "on" : ""} onClick={() => setI(k)} />
          ))}
        </div>
      )}
    </div>
  );
}
