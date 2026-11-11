/** Photo library for page banners and in-page figures. Every page picks a picture that suits its topic. */
const farm = (name: string) => `/images/farm/${name}.jpg`;

export type Banner = { src: string; pos?: string };

export const banners = {
  /** calm aerial view: About */
  aerial: { src: farm("aerial-tractor-green-field"), pos: "50% 38%" },
  /** sunset spraying: News */
  spraying: { src: farm("tractor-spraying-at-sunset"), pos: "50% 55%" },
  /** farmers in the crop: Contact, Complaints, Membership */
  crops: { src: farm("farmers-inspecting-crops"), pos: "30% 55%" },
  /** combine in wheat: Membership and general pages */
  wheat: { src: farm("combine-harvesting-wheat"), pos: "50% 62%" },
  /** tractor tilling: Downloads */
  tilling: { src: farm("tractor-tilling-field"), pos: "50% 30%" },
  /** real PCPA photographs: Leadership, Meetings, Gallery */
  boardroom: { src: "/images/slider/slide-09.jpg", pos: "50% 45%" },
  meeting: { src: "/images/slider/slide-11.jpg", pos: "50% 40%" },
  gala: { src: "/images/slider/slide-08.jpg", pos: "50% 55%" },
} satisfies Record<string, Banner>;

export type BannerKey = keyof typeof banners;

const bySection: Record<string, BannerKey> = {
  about: "aerial",
  leadership: "boardroom",
  membership: "wheat",
  meetings: "meeting",
  complaints: "crops",
};
const byPath: Record<string, BannerKey> = { "/gallery": "gala" };

/** Banner for a page: an explicit choice wins, then the exact page, then its section, then a general photo. */
export function bannerFor(opts: { banner?: BannerKey; section?: string; current?: string }): Banner {
  const key = opts.banner ?? (opts.current ? byPath[opts.current] : undefined) ?? (opts.section ? bySection[opts.section] : undefined) ?? "wheat";
  return banners[key];
}
