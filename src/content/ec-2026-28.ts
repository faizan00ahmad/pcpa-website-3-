/**
 * Executive Committee 2026-2028: members declared elected unopposed on 19 September 2026
 * (Final Declaration of Election Result, Corporate & Associate Class; notifications dated 15 September 2026).
 * Names and companies are written as they appear in the declaration. `ms` is the member's membership number (M/S).
 */
export const ecTitle = "Executive Committee 2026-2028";
export const ecDeclared = "19 September 2026";

export type EcClass = "Corporate" | "Associate";
export type Member = { sr: number; person: string; company: string; cls: EcClass; ms: string };

const rows = (cls: EcClass, list: [string, string, string][]): Member[] => list.map(([ms, person, company], i) => ({ sr: i + 1, person, company, cls, ms }));

export const ecCorporate: Member[] = rows("Corporate", [
  ["778", "Muhammad Shahid Azeem", "Agrow Mark"],
  ["1825", "Shahid Salim Qureshi", "Orange Protection (Pvt.) Ltd"],
  ["862", "Maqsood Ahmad", "Tara Crop Sciences (Pvt) Ltd"],
  ["19", "Altaf Shahid", "Solex Chemicals (Pvt.) Ltd."],
  ["1137", "Hammad Ahmad Miyan", "K-Kemikals Private Limited"],
  ["875", "M. Farooq Hasnain", "Topsun Chemicals Enterprises"],
  ["915", "Muhammad Afnan Khalil", "Agrium Enterprises"],
  ["945", "Abdul Hanan Bin Ali", "Hanan Manan & Company (HMC)"],
  ["61", "Ghulam Farid", "Rise AG Pakistan (Pvt) Ltd"],
  ["32", "Muhammad Ahmad Tanvir", "Greengro Pvt Ltd."],
  ["836", "Faisal Arshad", "Al-Noor Agro Chemicals"],
  ["689", "Asfand Riaz Goraya", "Agro Zat International"],
  ["866", "Qaiser Abbas", "Agrow Limited"],
  ["185", "Ahmed Shafi", "Agrimore (Pvt.) Ltd."],
  ["890", "Asif Ali Zaheer", "Agricom International"],
]);

export const ecAssociate: Member[] = rows("Associate", [
  ["851", "M. Mushtaq Ahmad", "Target Agro Chemicals"],
  ["789", "Sh. Muhammad Arif", "Croplands Chemicals & Seed Services"],
  ["773", "Fida Hussain Gadi", "Bio Track Enterprises"],
  ["793", "Ehsan Karim", "Unique Agro Sciences"],
  ["797", "Naeem Imran", "Agrica Chemicals"],
  ["769", "Muhammad Yousaf Wahla", "Excel Crop Care"],
  ["630", "Mian Iftikhar", "Al-Ghani International"],
  ["912", "Zulfiqar Ali", "Aims Agro Chemicals"],
  ["930", "Hafiz Muhammad Ather", "Fairfield Enterprises"],
  ["949", "Muhammad Mansoor Shahid", "Agro One Enterprises"],
  ["51", "Anwaar Hussain", "Rosechem Life Science"],
  ["954", "Muhammad Javed", "Agrarian Crop Sciences"],
  ["1092", "Muzaffar Iqbal", "Crop Health Sciences"],
  ["982", "Hafiz Nasir-ud-Din Asif", "Waseela Pesticides"],
  ["1041", "Nasir Mehmood", "Nectar Enterprises"],
]);
