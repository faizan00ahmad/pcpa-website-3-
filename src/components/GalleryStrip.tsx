import Image from "next/image";
import Link from "next/link";
import { gallery } from "@/content/gallery";

const pick = ["/images/slider/slide-08.jpg", "/images/farm/tractor-in-mustard-field.jpg", "/images/slider/slide-09.jpg", "/images/farm/farmer-spreading-fertiliser.jpg", "/images/slider/slide-07.jpg"];

/** Home-page preview of the photo gallery: one large photo and four small ones, all linking to /gallery. */
export function GalleryStrip() {
  const items = pick.map((s) => gallery.find((g) => g.src === s)).filter((g): g is (typeof gallery)[number] => Boolean(g));
  return (
    <div className="pc-strip">
      {items.map((g, i) => (
        <Link key={g.src} href="/gallery" className={`pc-strip-item${i === 0 ? " pc-strip-lead" : ""}`} aria-label={`Photo gallery: ${g.caption}`}>
          <Image src={g.src} alt={g.alt} fill sizes={i === 0 ? "(max-width:800px) 100vw, 600px" : "(max-width:800px) 50vw, 300px"} />
          <span className="pc-strip-cap">{g.caption}</span>
        </Link>
      ))}
    </div>
  );
}
