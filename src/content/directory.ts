/*
 * Member directory: company name, class, city, authorized person and email (no street addresses, phone or ID numbers).
 * Sources: "Corporate Members PCPA for the Year 2025-26" (77 companies, below) and
 * "Associate PCPA Members for 2025-26" (379 companies, directory-associate.ts), as published by the Secretariat.
 */
import { associate } from "./directory-associate";
import { associatePersons, corporatePersons } from "./directory-persons";
import { associateEmails, corporateEmails } from "./directory-emails";

export type DirectoryEntry = { company: string; cls: "Corporate" | "Associate"; city: string; no: string; person?: string; email?: string; photo?: string };

const corporate: [string, string][] = [
  ["Jullundur (Pvt) Ltd", "Arifwala"],
  ["Agrolix Chemicals Industry (Pvt) Ltd", "Bahawalpur"],
  ["Greengro Pvt Ltd.", "Bahawalpur"],
  ["Abdullah Haseeb Agro Chemicals", "D.G. Khan"],
  ["Agri Force Chemicals", "D.G. Khan"],
  ["S. Essa Farm Chemicals", "Karachi"],
  ["Ali Akbar Enterprises (Pvt.) Ltd.", "Lahore"],
  ["Ali Akbar Seeds (Pvt) Ltd", "Lahore"],
  ["Dada Jee Corporation (Pvt.) Ltd.", "Lahore"],
  ["Pak China Chemicals (Pvt.) Ltd.", "Lahore"],
  ["Pak China Manufacturing (Pvt) Ltd", "Lahore"],
  ["Orange Protection (Pvt.) Ltd.", "Lahore"],
  ["Hextar Chemicals Enterprises", "Lahore"],
  ["Sayban International", "Lahore"],
  ["Tara Crop Sciences (Pvt) Ltd", "Lahore"],
  ["Imperial Crop Sciences (Pvt) Ltd", "Lahore"],
  ["Weal AG Corporation", "Lahore"],
  ["Welcon Chemicals (Pvt) Ltd.", "Lahore"],
  ["Agri Village Intl. (Pvt) Ltd.", "Multan"],
  ["Hexon Chemicals (Pvt.) Ltd.", "Multan"],
  ["Kanzo Ag", "Multan"],
  ["Combagro (Pvt) Ltd", "Multan"],
  ["AG Pharma", "Lahore"],
  ["Patron Chemicals", "Multan"],
  ["Suncrop Pesticides", "Multan"],
  ["Sungro Pvt Ltd", "Multan"],
  ["Suncrop Private Limited", "Multan"],
  ["Warble (Pvt) Ltd.", "Multan"],
  ["Advance Agro Tech", "Multan"],
  ["Plant 4 Life (Pvt) Ltd", "Multan"],
  ["Solex Chemicals (Pvt.) Ltd.", "Multan"],
  ["Sona Agro Chemicals", "Rahim Yar Khan"],
  ["Nafees (Pvt.) Ltd.", "Vehari"],
  ["Pak Pansy (Pvt.) Ltd.", "Multan"],
  ["M I Corporation", "Multan"],
  ["Total Care Pesticides", "Multan"],
  ["Leader AG", "Multan"],
  ["Agrow Mark", "Multan"],
  ["Agrinar Pakistan", "Multan"],
  ["Annex Crop Sciences", "Multan"],
  ["Global Crop Sciences", "Multan"],
  ["Exin Chemicals", "Multan"],
  ["Agrow Limited", "Lahore"],
  ["Glee International", "Bahawalpur"],
  ["Al-Noor Agro Chemicals", "Bahawalpur"],
  ["Auriga Chemical Enterprises", "Lahore"],
  ["Agrium Enterprises", "Multan"],
  ["Agrimore (Pvt.) Ltd.", "Lahore"],
  ["Chand Agro Chemicals", "Bahawalpur"],
  ["Comega Life Sciences (Pvt) Ltd", "Lahore"],
  ["Gharbeen (Pvt) Ltd", "Multan"],
  ["Topsun Chemicals Enterprises", "D.G. Khan"],
  ["Agro Zat International", "Gujranwala"],
  ["Fresh Fields", "Karachi"],
  ["Rise AG Pakistan (Pvt) Ltd", "Multan"],
  ["Guard Agricultural Research & Services (Pvt) Ltd", "Lahore"],
  ["Four Brothers Agri Services Pakistan", "Lahore"],
  ["Commander Agro (Pvt.) Ltd.", "Multan"],
  ["Star Agro Sciences (Pvt.) Ltd.", "Lahore"],
  ["Quimica Chemicals (Pvt) Ltd", "Multan"],
  ["Star Industries (Pvt) Ltd", "Lahore"],
  ["Agricore (Pvt) Ltd", "Bahawalpur"],
  ["Chiniot Chemicals Private Limited", "Islamabad"],
  ["Cropli", "Multan"],
  ["Nufarm Enterprises", "Bahawalpur"],
  ["Agri Farm Services", "Multan"],
  ["Agricom International", "Lahore"],
  ["Bravo Crop Sciences", "Lahore"],
  ["Topsun Pakistan (Pvt) Ltd", "Multan"],
  ["Tezro (Private) Limited", "Khanpur"],
  ["K-Kemikals Private Limited", "Multan"],
  ["Sohni Dharti International", "Rahim Yar Khan"],
  ["Manuchar Pakistan (Pvt) Ltd", "Karachi"],
  ["Hanan Manan & Company (HMC)", "Multan"],
  ["V-Gro Crop Sciences & Seed Corporation", "Sadiqabad"],
  ["Mid Land Enterprises (Private) Limited", "Rahim Yar Khan"],
  ["Green Tec", "Hyderabad"],
];

/** `no` and `photo` are DUMMY values for the new card layout: replace with the real membership numbers and photo/logo files (e.g. "/images/members/jullundur.jpg") when supplied. */
const num = (cls: "C" | "A", i: number) => `PCPA-${cls}-${String(i + 1).padStart(3, "0")}`;

export const directory: DirectoryEntry[] = [
  ...corporate.map(([company, city], i) => ({ company, cls: "Corporate" as const, city, no: num("C", i), person: corporatePersons[i] || undefined, email: corporateEmails.get(i + 1) })),
  ...associate.map(({ company, city }, i) => ({ company, cls: "Associate" as const, city, no: num("A", i), person: associatePersons[i] || undefined, email: associateEmails.get(i + 1) })),
];
