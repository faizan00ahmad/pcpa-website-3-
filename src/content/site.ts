export const site = {
  name: "PCPA",
  fullName: "Pakistan Crop Protection Association",
  tagline: "Representing and strengthening Pakistan's crop protection industry",
  description: "Pakistan Crop Protection Association",
  copyright: "© 2026 PCPA – Pakistan Crop Protection Association. All rights reserved.",
  email: "multanpcpa@gmail.com",
  phone: "061-6514174",
  mobile: "0347-1415161",
  socials: ["Facebook", "Twitter", "Instagram", "Youtube", "Email"],
};

export const offices = {
  multan: {
    name: "Multan Head Office",
    address: "PCPA Secretariat, Plot 7 & 8 Commercial Area Phase-I, Industrial Estate, Multan",
    phone: "061-6514174",
    mobile: "0347-1415161",
    email: "multanpcpa@gmail.com",
    contacts: [
      { name: "Muhammad Ali Raza", role: "Secretary General", phone: "0347-1415161" },
      { name: "Muhammad Awais Sarwar", role: "Office Secretary, Multan", phone: "0301-0690606" },
    ],
  },
  lahore: {
    name: "Lahore Office",
    address: "Plot No. 34, 4th Floor, Block E, Commercial Building, Etihad Town, Main Rawind Road, Lahore",
    phone: "0306-0525229",
    email: "multanpcpa@gmail.com",
    contacts: [{ name: "Rana Mughees Iqbal", role: "Office Secretary, Lahore", phone: "0306-0525229" }],
  },
};

export const slides = [
  "07.jpg", "06.jpg", "08.jpg", "09.jpg", "11.jpg", "14.jpg", "15.jpg", "16.jpg", "10.jpg", "12.jpg", "13.jpg", "17.jpg",
].map((f) => `/images/slider/slide-${f}`);

/** Main navigation (same sitemap for every PCPA site). */
export type NavItem = { label: string; href: string; children?: { label: string; href: string; desc?: string }[] };

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About PCPA",
    href: "/about",
    children: [
      { label: "Overview", href: "/about" },
      { label: "History", href: "/about/history" },
      { label: "Vision", href: "/about/vision" },
      { label: "Mission", href: "/about/mission" },
      { label: "Objectives", href: "/about/objectives" },
      { label: "Governance", href: "/about/governance" },
      { label: "Affiliations", href: "/about/affiliations" },
    ],
  },
  {
    label: "Leadership",
    href: "/leadership/cabinet",
    children: [
      { label: "Cabinet", href: "/leadership/cabinet" },
      { label: "Executive Committee", href: "/leadership/executive-committee" },
      { label: "Committees", href: "/leadership/committees" },
      { label: "Former Chairmen", href: "/leadership/former-chairmen" },
      { label: "Secretariat", href: "/leadership/secretariat" },
    ],
  },
  {
    label: "Membership",
    href: "/membership",
    children: [
      { label: "Overview", href: "/membership" },
      { label: "Apply for Membership", href: "/membership/apply" },
      { label: "Membership Procedure", href: "/membership/procedure" },
      { label: "Membership Fees", href: "/membership/fees" },
      { label: "Forms & Documents", href: "/membership/forms" },
      { label: "Member Directory", href: "/membership/directory" },
      { label: "Renew Membership", href: "/membership/renew" },
    ],
  },
  {
    label: "Meetings",
    href: "/meetings",
    children: [
      { label: "Meetings & Decisions", href: "/meetings" },
      { label: "Elections", href: "/elections" },
      { label: "Photo Gallery", href: "/gallery" },
    ],
  },
  { label: "Downloads", href: "/downloads" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

/** Section sidebars used on inner pages. */
export const sections: Record<string, { title: string; items: { label: string; href: string }[] }> = {
  about: { title: "About PCPA", items: nav[1].children! },
  leadership: { title: "Leadership", items: nav[2].children! },
  membership: { title: "Membership", items: nav[3].children! },
  meetings: {
    title: "Meetings & Elections",
    items: [
      { label: "Meetings & Decisions", href: "/meetings" },
      { label: "Elections", href: "/elections" },
      { label: "Photo Gallery", href: "/gallery" },
    ],
  },
  complaints: {
    title: "Complaints & Suggestions",
    items: [
      { label: "Submit Complaint", href: "/complaints" },
      { label: "Submit Suggestion", href: "/complaints/suggestion" },
      { label: "Track Status", href: "/complaints/track" },
      { label: "Guidelines", href: "/complaints/guidelines" },
    ],
  },
};
