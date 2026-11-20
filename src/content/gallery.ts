/**
 * Photo gallery: people at PCPA meetings and events only, organised into albums (one per event or meeting).
 * The photo files carry no date information, so albums show "Date to be added" until a date is filled in below.
 * Set `date` (display text) and `sort` (ISO date, used to order albums newest first) on an album to date it.
 */
export type GalleryCat = "meetings" | "events";
export type GalleryEvent = { id: string; cat: GalleryCat; title: string; place?: string; date?: string; sort?: string };
export type GalleryItem = { src: string; w: number; h: number; event: string; caption: string; alt: string };

export const galleryCats: { id: GalleryCat | "all"; label: string }[] = [
  { id: "all", label: "All photos" },
  { id: "meetings", label: "Meetings" },
  { id: "events", label: "Events & ceremonies" },
];

const events: GalleryEvent[] = [
  { id: "cac-summit-gala", cat: "events", title: "5th CAC Pakistan Summit – Gala Dinner", place: "Lahore" },
  { id: "seminar-role-of-pcpa", cat: "events", title: "Seminar on the role of PCPA in agriculture" },
  { id: "exhibition-shield", cat: "events", title: "Exhibition – shield presentation" },
  { id: "general-meetings", cat: "meetings", title: "General and members' meetings", place: "PCPA boardroom" },
  { id: "committee-sessions", cat: "meetings", title: "Committee and discussion sessions" },
];

/** Albums newest first (dated albums before undated ones), keeping the order above for ties. */
export const galleryEvents: GalleryEvent[] = events
  .map((e, i) => ({ e, i }))
  .sort((a, b) => (b.e.sort ?? "").localeCompare(a.e.sort ?? "") || a.i - b.i)
  .map(({ e }) => e);

export const gallery: GalleryItem[] = [
  { src: "/images/slider/slide-08.jpg", w: 1820, h: 1200, event: "cac-summit-gala", caption: "Group photo", alt: "Group photo in front of the 5th CAC Pakistan Summit Gala Dinner backdrop" },
  { src: "/images/slider/slide-01.jpeg", w: 1029, h: 500, event: "cac-summit-gala", caption: "Head table", alt: "Dignitaries seated at the head table of the Gala Dinner in Lahore" },
  { src: "/images/slider/slide-05.jpeg", w: 1280, h: 622, event: "cac-summit-gala", caption: "Shield presentation", alt: "A shield is presented at the Gala Dinner" },
  { src: "/images/slider/slide-02.jpeg", w: 1029, h: 500, event: "cac-summit-gala", caption: "Guests and office bearers", alt: "Guests and office bearers at the Gala Dinner in Lahore" },
  { src: "/images/slider/slide-03.jpeg", w: 1280, h: 622, event: "cac-summit-gala", caption: "Guests", alt: "Guests lined up at the Gala Dinner in Lahore" },
  { src: "/images/slider/slide-06.jpg", w: 1770, h: 1200, event: "seminar-role-of-pcpa", caption: "Seminar participants", alt: "Participants of a seminar on the role of the Pakistan Crop Protection Association in agriculture" },
  { src: "/images/slider/slide-07.jpg", w: 2560, h: 1707, event: "exhibition-shield", caption: "Shield presentation at an exhibition stall", alt: "Association members present a commemorative shield at an exhibition stall" },
  { src: "/images/slider/slide-09.jpg", w: 1600, h: 900, event: "general-meetings", caption: "Meeting in the boardroom", alt: "Members around a long table in the PCPA boardroom" },
  { src: "/images/slider/slide-11.jpg", w: 1600, h: 1200, event: "general-meetings", caption: "Meeting with a presentation", alt: "Members at a boardroom meeting with a presentation on screen" },
  { src: "/images/slider/slide-15.jpg", w: 1600, h: 1200, event: "general-meetings", caption: "Members' meeting", alt: "A large members' meeting in the boardroom" },
  { src: "/images/slider/slide-10.jpg", w: 1280, h: 958, event: "general-meetings", caption: "General meeting", alt: "A general meeting with members seated along the table" },
  { src: "/images/slider/slide-17.jpg", w: 1280, h: 958, event: "general-meetings", caption: "Group photo after a meeting", alt: "Members pose together after a meeting" },
  { src: "/images/slider/slide-16.jpg", w: 1600, h: 1200, event: "committee-sessions", caption: "Boardroom discussion", alt: "Members in discussion at a boardroom meeting" },
  { src: "/images/slider/slide-04.jpeg", w: 1280, h: 854, event: "committee-sessions", caption: "Association meeting", alt: "A meeting of the Association around a large table" },
  { src: "/images/slider/slide-12.jpg", w: 1280, h: 958, event: "committee-sessions", caption: "Meeting in the office", alt: "A meeting held in an office with framed photographs on the wall" },
  { src: "/images/slider/slide-13.jpg", w: 1280, h: 958, event: "committee-sessions", caption: "Committee discussion", alt: "Members discussing papers at a committee table" },
  { src: "/images/slider/slide-14.jpg", w: 1600, h: 900, event: "committee-sessions", caption: "Discussion session", alt: "Members listening during a discussion session" },
];

/** Category of a photo, taken from its album. */
export const catOf = (g: GalleryItem): GalleryCat => galleryEvents.find((e) => e.id === g.event)?.cat ?? "events";
