"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const FADE_MS = 700;
const HOLD_MS = 500; // keep the final frame on screen for a moment before fading
const LOAD_FAILSAFE_MS = 8000; // if the film has not started by now, drop it
const MAX_MS = 14000; // hard stop

const edge = "linear-gradient(to {d}, transparent, #000 8%, #000 92%, transparent)";
const feather: React.CSSProperties = {
  WebkitMaskImage: `${edge.replace("{d}", "right")}, ${edge.replace("{d}", "bottom")}`,
  maskImage: `${edge.replace("{d}", "right")}, ${edge.replace("{d}", "bottom")}`,
  WebkitMaskComposite: "source-in",
  maskComposite: "intersect",
};
/** The film's own box: as large as fits the screen, centred, same shape as the film. */
const box = (r: number): React.CSSProperties => ({
  position: "absolute",
  left: "50%",
  top: "50%",
  width: `min(100vw, calc(100vh * ${r}))`,
  aspectRatio: String(r),
  transform: "translate(-50%, -50%)",
});

/**
 * Opening logo film, shown full page once per browser session when the home page is opened.
 * Mounted in the root layout (not inside the page) so nothing can paint above it.
 * It fills the screen; on screens whose shape is far from the film's, the whole film is shown (never cropped)
 * and its edges are feathered into a matching dark-green background.
 * Picks the portrait cut on tall screens and MP4 or WebM by browser support. Skipped for reduced-motion
 * visitors; any playback problem simply removes it. Esc or the Skip button ends it.
 */
export function IntroVideo() {
  const path = usePathname();
  const onHome = path === "/";
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);
  const [src, setSrc] = useState<string | null>(null);
  const [ratio, setRatio] = useState(16 / 9);
  const [cover, setCover] = useState(true);
  const done = useRef(false);
  const timers = useRef<number[]>([]);
  const main = useRef<HTMLVideoElement>(null);

  function finish(fast = false) {
    if (done.current) return;
    done.current = true;
    setFading(true);
    timers.current.push(
      window.setTimeout(
        () => {
          setVisible(false);
          document.body.style.overflow = "";
        },
        fast ? 250 : FADE_MS,
      ),
    );
  }

  useEffect(() => {
    if (!onHome) return;
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
    const r = portrait ? 9 / 16 : 16 / 9;
    // Fill the screen when it is close to the film's own shape (only far-away edges are trimmed);
    // otherwise show the whole film, feathered into the background, so nothing is ever cut off.
    const rel = window.innerWidth / window.innerHeight / r;
    setRatio(r);
    setCover(rel >= 0.82 && rel <= 1.35);
    setSrc(`/video/pcpa-intro${portrait ? "-portrait" : ""}.${ext}`);

    document.body.style.overflow = "hidden";
    timers.current.push(window.setTimeout(() => finish(), MAX_MS));
    const esc = (e: KeyboardEvent) => e.key === "Escape" && finish(true);
    window.addEventListener("keydown", esc);
    return () => {
      timers.current.forEach((t) => clearTimeout(t));
      window.removeEventListener("keydown", esc);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onHome]);

  // If the film never starts (blocked autoplay, slow network), do not leave the page covered.
  useEffect(() => {
    if (!src) return;
    const t = window.setTimeout(() => {
      const v = main.current;
      if (!v || v.currentTime === 0) finish(true);
    }, LOAD_FAILSAFE_MS);
    timers.current.push(t);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src]);

  if (!visible || !onHome) return null;

  return (
    <div
      className="pc-intro"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        overflow: "hidden",
        background: "radial-gradient(ellipse 75% 75% at 50% 45%, #063a21 0%, #02170d 65%, #010a05 100%)",
        opacity: fading ? 0 : 1,
        transition: `opacity ${FADE_MS}ms ease-out`,
      }}
      role="presentation"
      aria-hidden
    >
      {src && (
        <div style={cover ? { position: "absolute", inset: 0 } : { ...box(ratio), ...feather }}>
          <video
            ref={main}
            src={src}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            autoPlay
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            onEnded={() => {
              timers.current.push(window.setTimeout(() => finish(), HOLD_MS));
            }}
            onError={() => finish(true)}
          />
        </div>
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
          color: "rgba(255,255,255,.9)",
          font: "700 12px/1 system-ui, sans-serif",
          letterSpacing: ".1em",
          textTransform: "uppercase",
          background: "rgba(0,0,0,.3)",
          backdropFilter: "blur(6px)",
        }}
      >
        Skip intro
      </button>
    </div>
  );
}
