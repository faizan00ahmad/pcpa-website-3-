/** Photo gallery: people at PCPA meetings and events only. Captions describe what each photo shows; occasion details can be added by the Secretariat. */
export type GalleryCat = "meetings" | "events";
export type GalleryItem = { src: string; w: number; h: number; cat: GalleryCat; caption: string; alt: string };

export const galleryCats: { id: GalleryCat | "all"; label: string }[] = [
  { id: "all", label: "All photos" },
  { id: "meetings", label: "Meetings" },
  { id: "events", label: "Events & ceremonies" },
];

export const gallery: GalleryItem[] = [
  { src: "/images/slider/slide-07.jpg", w: 2560, h: 1707, cat: "events", caption: "Shield presentation at an exhibition", alt: "Association members present a commemorative shield at an exhibition stall" },
  { src: "/images/slider/slide-08.jpg", w: 1820, h: 1200, cat: "events", caption: "Gala Dinner, Lahore – group photo", alt: "Group photo in front of the 5th CAC Pakistan Summit Gala Dinner backdrop" },
  { src: "/images/slider/slide-01.jpeg", w: 1029, h: 500, cat: "events", caption: "5th CAC Pakistan Summit – Gala Dinner", alt: "Dignitaries seated at the head table of the Gala Dinner in Lahore" },
  { src: "/images/slider/slide-05.jpeg", w: 1280, h: 622, cat: "events", caption: "Gala Dinner – shield presentation", alt: "A shield is presented at the Gala Dinner" },
  { src: "/images/slider/slide-02.jpeg", w: 1029, h: 500, cat: "events", caption: "Gala Dinner, Lahore", alt: "Guests and office bearers at the Gala Dinner in Lahore" },
  { src: "/images/slider/slide-03.jpeg", w: 1280, h: 622, cat: "events", caption: "Gala Dinner, Lahore – guests", alt: "Guests lined up at the Gala Dinner in Lahore" },
  { src: "/images/slider/slide-06.jpg", w: 1770, h: 1200, cat: "events", caption: "Seminar on the role of PCPA in agriculture", alt: "Participants of a seminar on the role of the Pakistan Crop Protection Association in agriculture" },
  { src: "/images/slider/slide-09.jpg", w: 1600, h: 900, cat: "meetings", caption: "Meeting in the boardroom", alt: "Members around a long table in the PCPA boardroom" },
  { src: "/images/slider/slide-11.jpg", w: 1600, h: 1200, cat: "meetings", caption: "Meeting with a presentation", alt: "Members at a boardroom meeting with a presentation on screen" },
  { src: "/images/slider/slide-15.jpg", w: 1600, h: 1200, cat: "meetings", caption: "Members' meeting", alt: "A large members' meeting in the boardroom" },
  { src: "/images/slider/slide-10.jpg", w: 1280, h: 958, cat: "meetings", caption: "General meeting", alt: "A general meeting with members seated along the table" },
  { src: "/images/slider/slide-16.jpg", w: 1600, h: 1200, cat: "meetings", caption: "Boardroom discussion", alt: "Members in discussion at a boardroom meeting" },
  { src: "/images/slider/slide-04.jpeg", w: 1280, h: 854, cat: "meetings", caption: "Association meeting", alt: "A meeting of the Association around a large table" },
  { src: "/images/slider/slide-12.jpg", w: 1280, h: 958, cat: "meetings", caption: "Meeting in the office", alt: "A meeting held in an office with framed photographs on the wall" },
  { src: "/images/slider/slide-13.jpg", w: 1280, h: 958, cat: "meetings", caption: "Committee discussion", alt: "Members discussing papers at a committee table" },
  { src: "/images/slider/slide-14.jpg", w: 1600, h: 900, cat: "meetings", caption: "Discussion session", alt: "Members listening during a discussion session" },
  { src: "/images/slider/slide-17.jpg", w: 1280, h: 958, cat: "meetings", caption: "Group photo after a meeting", alt: "Members pose together after a meeting" },
];
