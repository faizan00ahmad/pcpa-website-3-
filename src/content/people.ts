export type Person = { name: string; title: string; org?: string; image: string; /** Business address of the office bearer's company (from the 2026-28 election notification). */ address?: string; /** Company website. */ web?: string };

/** Photos of former chairmen are added here as `photo` when supplied by the Secretariat. */

/** Current office bearers. Names and photos for the first five as supplied by the PCPA Secretariat; the Secretary General photo is the one published on pcpa.pk. */
export const cabinet: Person[] = [
  { name: "Muhammad Mushtaq Ahmad", title: "Chairman", image: "/images/leaders/mushtaq-ahmed.jpg", org: "Target Agro Chemicals", address: "Head Office at C-11, Etihad Town, Raiwind Road, Lahore", web: "www.targetagro.com.pk" },
  { name: "Muhammad Altaf Shahid", title: "Senior Vice Chairman", image: "/images/leaders/altaf-shahid.jpg", org: "Solex Chemicals (Pvt.) Ltd.", address: "25-A-II, Industrial Estate, Multan", web: "www.solex.com.pk" },
  { name: "Iftikhar Ahmad", title: "Vice Chairman", image: "/images/leaders/iftikhar-ahmad.jpg", org: "Al-Ghani International", address: "Plot No. 89, Industrial Estate, Multan" },
  { name: "Muhammad Farooq", title: "Finance Secretary", image: "/images/leaders/farooq-hasnain.jpg", org: "Topsun Chemicals Enterprises", address: "93-A, Khayban-e-Sarwar, DG Khan", web: "www.topsunchemical.com" },
  { name: "Asfand Riaz Goraya", title: "Legal Secretary", image: "/images/leaders/asfand-goraya.jpg", org: "Agro Zat International", address: "10-11 Km, Lahore Side, Near Attawa Restaurant, G.T. Road, Gujranwala", web: "www.agrozatinternational.com" },
  { name: "Muhammad Ali Raza", title: "Secretary General", image: "/images/leaders/ali-raza.webp", org: "PCPA Secretariat", address: "Plot No. 7 & 8, Phase-I, Industrial Estate, Multan" },
];

/** Chairman of the current term (2026-2028). Name and photo come from the Cabinet list. */
export const currentChairman = { term: { from: 2026, to: 2028 }, ...cabinet[0] };

export type Chairman = { name: string; from: number; to: number; photo: string };

const ph = (f: string) => `/images/chairmen/${f}.jpg`;

/** Past chairmen of PCPA, newest first (names, terms and photographs as supplied by the Secretariat). */
export const formerChairmen: Chairman[] = [
  { name: "Rao Muhammad Afzal", from: 2024, to: 2026, photo: ph("rao-muhammad-afzal-2024") },
  { name: "Shahid Salim Qureshi", from: 2023, to: 2024, photo: ph("shahid-salim-qureshi-2023") },
  { name: "Rauf-ur-Rehman", from: 2022, to: 2023, photo: ph("rauf-ur-rehman-2022") },
  { name: "Dr. Muhammad Shafique", from: 2021, to: 2022, photo: ph("dr-muhammad-shafique-2021") },
  { name: "Abdul Sattar Azhar", from: 2020, to: 2021, photo: ph("abdul-sattar-azhar-2020") },
  { name: "Jamshed Iqbal Cheema", from: 2019, to: 2020, photo: ph("jamshed-iqbal-cheema-2019") },
  { name: "Muhammad Arif Sheikh", from: 2018, to: 2019, photo: ph("muhammad-arif-sheikh-2018") },
  { name: "Saad Akbar Khan", from: 2017, to: 2018, photo: ph("saad-akbar-khan-2017") },
  { name: "Rauf-ur-Rehman", from: 2016, to: 2017, photo: ph("rauf-ur-rehman-2016") },
  { name: "Saad Akbar Khan", from: 2015, to: 2016, photo: ph("saad-akbar-khan-2015") },
  { name: "Hafiz Mahmood Ahmad Shad", from: 2014, to: 2015, photo: ph("hafiz-mahmood-ahmad-shad-2014") },
  { name: "Muhammad Altaf Shahid", from: 2013, to: 2014, photo: ph("muhammad-altaf-shahid-2013") },
  { name: "Rauf-ur-Rehman", from: 2012, to: 2013, photo: ph("rauf-ur-rehman-2012") },
  { name: "Ahsan Akbar Khan", from: 2011, to: 2012, photo: ph("ahsan-akbar-khan-2011") },
  { name: "Muhammad Altaf Shahid", from: 2010, to: 2011, photo: ph("muhammad-altaf-shahid-2010") },
  { name: "Haji Atta-ur-Rehman", from: 2009, to: 2010, photo: ph("haji-atta-ur-rehman-2009") },
  { name: "Jawed Salim Qureshi", from: 2008, to: 2009, photo: ph("jawed-salim-qureshi-2008") },
];
