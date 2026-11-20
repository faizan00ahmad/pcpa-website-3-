/** Looping, silent hero video that starts playing by itself (muted autoplay is allowed by all browsers). */
export function HeroVideo({ src, poster, label }: { src: string; poster: string; label: string }) {
  return (
    <div className="pc-herovideo">
      <video className="pc-herovideo-el" src={src} poster={poster} autoPlay muted loop playsInline preload="auto" aria-label={label} />
    </div>
  );
}
