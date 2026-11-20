export type Person = { name: string; title: string; org?: string; image: string };

/** Photos of former chairmen are added here as `photo` when supplied by the Secretariat. */

/** Current office bearers. Names and photos for the first five as supplied by the PCPA Secretariat; the Secretary General photo is the one published on pcpa.pk. */
export const cabinet: Person[] = [
  { name: "Muhammad Mushtaq Ahmad", title: "Chairman", image: "/images/leaders/mushtaq-ahmed.jpg" },
  { name: "Muhammad Altaf Shahid", title: "Senior Vice Chairman", image: "/images/leaders/altaf-shahid.jpg" },
  { name: "Iftikhar Ahmad", title: "Vice Chairman", image: "/images/leaders/iftikhar-ahmad.jpg" },
  { name: "Muhammad Farooq", title: "Finance Secretary", image: "/images/leaders/farooq-hasnain.jpg" },
  { name: "Asfand Raiz Gorya", title: "Legal Secretary", image: "/images/leaders/asfand-goraya.jpg" },
  { name: "Mr. Muhammad Ali Raza", title: "Secretary General", image: "/images/leaders/ali-raza.webp" },
];

/** Chairmen recorded in PCPA documents and public records. Earlier terms are being added to the archive. */
export const formerChairmen: { name: string; term: string; org: string; source: string; photo?: string }[] = [
  { name: "Jamshed Iqbal Cheema", term: "2019–20", org: "Auriga Chemicals", source: "PCPA records" },
  { name: "M. Arif Sheikh", term: "Ex-Chairman (listed 2019–20)", org: "Cropland & Seeds Chemicals", source: "PCPA records" },
  { name: "Rao Muhammad Afzal", term: "In office, May 2025", org: "", source: "Public record of a visit by FPCCI to PCPA Multan" },
];
