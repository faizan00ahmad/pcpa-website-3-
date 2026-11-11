import Image from "next/image";

export type Photo = { src: string; alt: string; pos?: string; caption?: string };

/** A single photo shown beside text (use inside a .pc-split grid). */
export function SideFigure({ src, alt, pos, caption }: Photo) {
  return (
    <figure className="pc-figure">
      <div className="pc-figure-img">
        <Image src={src} alt={alt} fill sizes="(max-width:800px) 100vw, 380px" style={{ objectPosition: pos }} />
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

/** Three photos in a row, shown small so even modest source images stay sharp. */
export function PhotoStrip({ photos }: { photos: Photo[] }) {
  return (
    <div className="pc-photostrip">
      {photos.map((p) => (
        <figure key={p.src} className="pc-ps-item">
          <Image src={p.src} alt={p.alt} fill sizes="(max-width:700px) 100vw, 360px" style={{ objectPosition: p.pos }} />
        </figure>
      ))}
    </div>
  );
}

const farm = (n: string) => `/images/farm/${n}.jpg`;

/** Ready-made photo sets used on different pages. */
export const photoSets = {
  about: [
    { src: farm("threshing-in-dust"), alt: "Workers threshing grain in the morning dust" },
    { src: farm("harvest-at-sunset"), alt: "Farmers handling straw beside a thresher at sunset" },
    { src: farm("tractor-and-field-workers"), alt: "A red tractor and farm workers in a field" },
  ],
  objectives: [
    { src: farm("combine-harvester-grain"), alt: "A combine harvester pouring wheat grain into a trailer", pos: "50% 40%" },
    { src: farm("tractor-at-sunset"), alt: "A tractor ploughing beneath a red sun", pos: "50% 60%" },
    { src: farm("sunset-over-fields"), alt: "The sun setting over green fields and a farm track" },
  ],
  membership: [
    { src: farm("farmers-inspecting-crops"), alt: "Two farmers inspecting leafy crops at sunrise", pos: "30% 55%" },
    { src: farm("tractor-spraying-at-sunset"), alt: "A red tractor spraying a crop at sunset", pos: "50% 55%" },
    { src: farm("tractor-in-mustard-field"), alt: "A tractor on a track between flowering mustard fields", pos: "50% 50%" },
  ],
} satisfies Record<string, Photo[]>;
