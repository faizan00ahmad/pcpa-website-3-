"use client";

import { useEffect, useRef, useState } from "react";

const FAILSAFE_MS = 9000;
const FADE_MS = 600;

/**
 * Opening logo film. Plays once per browser session on the home page, then fades away.
 * Picks the portrait cut on tall screens and MP4 or WebM depending on browser support.
 * Skipped for reduced-motion visitors; any playback problem simply removes it. Esc or the Skip button ends it.
 */
export function IntroVideo() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);
  const [src, setSrc] = useState<string | null>(null);
  const done = useRef(false);

  function finish(fast = false) {
    if (done.current) return;
    done.current = true;
    setFading(true);
    window.setTimeout(
      () => {
        setVisible(false);
        document.body.style.overflow = "";
      },
      fast ? 250 : FADE_MS,
    );
  }

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("pcpa-intro") === "1";
    } catch {}
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || reduce) {
      setVisible(false);
      return;
    }
    try {
      sessionStorage.setItem("pcpa-intro", "1");
    } catch {}

    const probe = document.createElement("video");
    const mp4 = probe.canPlayType('video/mp4; codecs="avc1.640028"') !== "";
    const ext = mp4 ? "mp4" : probe.canPlayType('video/webm; codecs="vp9"') !== "" ? "webm" : "";
    if (!ext) {
      setVisible(false);
      return;
    }
    const portrait = window.innerHeight > window.innerWidth;
    setSrc(`/video/pcpa-intro${portrait ? "-portrait" : ""}.${ext}`);

    document.body.style.overflow = "hidden";
    const failsafe = window.setTimeout(() => finish(), FAILSAFE_MS);
    const esc = (e: KeyboardEvent) => e.key === "Escape" && finish(true);
    window.addEventListener("keydown", esc);
    return () => {
      window.clearTimeout(failsafe);
      window.removeEventListener("keydown", esc);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!visible) return null;

  return (
    <div
      className="pc-intro"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "#010f08",
        opacity: fading ? 0 : 1,
        transition: `opacity ${FADE_MS}ms ease-out`,
      }}
      role="presentation"
      aria-hidden
    >
      {src && (
        <video
          src={src}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          autoPlay
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          onEnded={() => finish()}
          onError={() => finish(true)}
        />
      )}
      <button
        type="button"
        onClick={() => finish(true)}
        aria-hidden={false}
        style={{
          position: "absolute",
          right: 24,
          bottom: 24,
          zIndex: 2,
          padding: "8px 16px",
          border: "1px solid rgba(255,255,255,.35)",
          borderRadius: 6,
          color: "rgba(255,255,255,.85)",
          font: "700 12px/1 system-ui, sans-serif",
          letterSpacing: ".1em",
          textTransform: "uppercase",
          background: "rgba(0,0,0,.25)",
          backdropFilter: "blur(6px)",
        }}
      >
        Skip intro
      </button>
    </div>
  );
}
