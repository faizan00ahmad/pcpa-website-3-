"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Looping, silent hero video with a poster. It does not autoplay for visitors who prefer reduced motion or have
 * data saving on (they see the poster, with a play button), and it can be paused by anyone.
 */
export function HeroVideo({ src, poster, label }: { src: string; poster: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [allowAuto, setAllowAuto] = useState(true);

  useEffect(() => {
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches || !!conn?.saveData;
    setAllowAuto(!calm);
    if (!calm) ref.current?.play().catch(() => {});
  }, []);

  function toggle() {
    const v = ref.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  }

  return (
    <div className="pc-herovideo">
      <video
        ref={ref}
        className="pc-herovideo-el"
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload={allowAuto ? "auto" : "none"}
        aria-label={label}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <button type="button" className="pc-herovideo-btn" onClick={toggle} aria-label={playing ? "Pause video" : "Play video"}>
        {playing ? "❚❚" : "▶"}
      </button>
    </div>
  );
}
