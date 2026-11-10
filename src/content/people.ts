export type Person = { name: string; title: string; org?: string; image: string };

/** Current office bearers (published on pcpa.pk, October 2026). */
export const cabinet: Person[] = [
  { name: "Muhammad Mushtaq Ahmed", title: "Chairman", image: "/images/leaders/mushtaq-ahmed.jpeg" },
  { name: "Muhammad Altaf Shahid", title: "Senior Vice Chairman", image: "/images/leaders/altaf-shahid.webp" },
  { name: "Iftikhar Ahmad", title: "Vice Chairman", image: "/images/leaders/iftikhar-ahmad.webp" },
  { name: "M. Farooq Hasnain", title: "Finance Secretary", image: "/images/leaders/farooq-hasnain.jpeg" },
  { name: "Asfand Riaz Goraya", title: "Legal Secretary", image: "/images/leaders/asfand-goraya.jpeg" },
  { name: "Mr. Muhammad Ali Raza", title: "Secretary General", image: "/images/leaders/ali-raza.webp" },
];

export const executiveDirector: Person = {
  name: "Muhammad Sarwar Rahi",
  title: "Executive Director",
  image: "/images/leaders/sarwar-rahi.webp",
};

/** Chairmen recorded in PCPA documents and public records. Earlier terms are being added to the archive. */
export const formerChairmen = [
  { name: "Jamshed Iqbal Cheema", term: "2019–20", org: "Auriga Chemicals", source: "Executive Committee 2019-20 (Election 2019)" },
  { name: "M. Arif Sheikh", term: "Ex-Chairman (listed 2019–20)", org: "Cropland & Seeds Chemicals", source: "Executive Committee 2019-20 (Election 2019)" },
  { name: "Rao Muhammad Afzal", term: "In office, May 2025", org: "", source: "Public record of a visit by FPCCI to PCPA Multan" },
];
