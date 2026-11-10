export type DocType = "PDF" | "DOCX";
export type DocItem = {
  id: string;
  title: string;
  file: string;
  category: string;
  year: string;
  date?: string;
  type: DocType;
  authority: string;
  status?: "Current" | "Superseded";
};

export const categories = [
  "Membership Forms",
  "Member Lists",
  "Policies & Rules",
  "Circulars",
  "Notifications",
  "Meeting Documents",
  "HR Committee",
  "IT Committee",
  "Election Documents",
] as const;

const A = "/docs/archive/";
const d = (
  id: number,
  title: string,
  file: string,
  category: string,
  year: string,
  authority: string,
  extra: Partial<DocItem> = {},
): DocItem => ({
  id: `DL-${String(id).padStart(3, "0")}`,
  title,
  file,
  category,
  year,
  authority,
  type: file.endsWith(".docx") ? "DOCX" : "PDF",
  ...extra,
});

export const documents: DocItem[] = [
  // Membership forms and subscription
  d(1, "Membership Application Form 2026-2027", "/docs/MEMBERSHIP-APPLICATION-2026-2027.docx", "Membership Forms", "2026", "PCPA Secretariat", { date: "Jan 2026", status: "Current" }),
  d(2, "Annual Subscription of PCPA 2026-2027", "/docs/ANNUAL-SUBSCRIPTION-OF-PCPA-2026-27.pdf", "Membership Forms", "2026", "PCPA Secretariat", { date: "23 Jan 2026", status: "Current" }),
  d(3, "Annual Subscription of PCPA 2025-2026", A + "annual-subscription-2025-26.pdf", "Membership Forms", "2025", "PCPA Secretariat", { date: "27 Mar 2025", status: "Superseded" }),
  d(4, "Membership Application 2025-2026", A + "membership-application-2025-26.pdf", "Membership Forms", "2025", "PCPA Secretariat", { date: "27 Mar 2025", status: "Superseded" }),
  d(5, "PCPA Membership Form (2024)", A + "membership-form-2024.pdf", "Membership Forms", "2024", "PCPA Secretariat", { date: "22 May 2024", status: "Superseded" }),
  d(6, "PCPA Form (2024)", A + "pcpa-form-2024.pdf", "Membership Forms", "2024", "PCPA Secretariat", { date: "3 Jun 2024", status: "Superseded" }),
  // Member lists
  d(7, "Corporate Members PCPA (2025-26)", "/docs/CORPORATE-MEMBERS-PCPA.pdf", "Member Lists", "2026", "PCPA Secretariat", { date: "24 Jan 2026", status: "Current" }),
  d(8, "Associate Members PCPA (2025-26)", "/docs/ASSOCIATE-MEMBERS-PCPA.pdf", "Member Lists", "2026", "PCPA Secretariat", { date: "24 Jan 2026", status: "Current" }),
  d(9, "Corporate PCPA Members for 2024-2025", A + "corporate-members-2024-25.pdf", "Member Lists", "2024", "PCPA Secretariat", { date: "22 May 2024", status: "Superseded" }),
  d(10, "Associate PCPA Members for 2024-2025", A + "associate-members-2024-25.pdf", "Member Lists", "2024", "PCPA Secretariat", { date: "22 May 2024", status: "Superseded" }),
  d(11, "Members Updated List 2019-20", A + "members-list-2019-20.pdf", "Member Lists", "2020", "PCPA Secretariat", { status: "Superseded" }),
  d(12, "Members Updated List 2019-20 – Corporate", A + "members-list-2019-20-corporate.pdf", "Member Lists", "2020", "PCPA Secretariat", { status: "Superseded" }),
  // Election documents
  d(13, "Announcement of Election Schedule 2026-2028", "/docs/ANNOUNCEMENT-OF-ELECTION-SCHEDULE-PCPA-2026-2028.pdf", "Election Documents", "2026", "Election Commission", { date: "15 Jul 2026", status: "Current" }),
  d(14, "Announcement of Election Commission 2026-2028", "/docs/ANNOUNCEMENT-OF-ELECTION-COMMISSION-2026-2028.pdf", "Election Documents", "2026", "Election Commission", { date: "15 Jul 2026", status: "Current" }),
  d(15, "Provisional Eligible Voters List of PCPA 2026-28", A + "provisional-voters-list-2026-28.pdf", "Election Documents", "2026", "Election Commission", { date: "22 Jul 2026", status: "Superseded" }),
  d(16, "Provisional Voters List – Corporate Class Members 2026-2028", A + "provisional-voters-list-corporate-2026-28.pdf", "Election Documents", "2026", "Election Commission", { date: "22 Jul 2026", status: "Superseded" }),
  d(17, "Final Eligible Voters List – Corporate Class Members 2026-2028", "/docs/FINAL-ELIGIBLE-VOTERS-LIST-CORPORATE-2026-2028.pdf", "Election Documents", "2026", "Election Commission", { date: "24 Aug 2026", status: "Current" }),
  d(18, "Final Eligible Voters List – Associate Class Members 2026-28", "/docs/FINAL-ELIGIBLE-VOTERS-LIST-ASSOCIATE-2026-2028.pdf", "Election Documents", "2026", "Election Commission", { date: "24 Aug 2026", status: "Current" }),
  d(19, "Final Election Schedule 2020-21", A + "final-election-schedule-2020-21.pdf", "Election Documents", "2021", "Election Commission", { date: "24 May 2021", status: "Superseded" }),
  d(20, "Election Schedule 2019", A + "election-schedule-2019.pdf", "Election Documents", "2019", "Election Commission", { status: "Superseded" }),
  d(21, "Elections Procedure", A + "elections-procedure.pdf", "Election Documents", "2019", "Election Commission", { status: "Superseded" }),
  d(22, "Nomination Form for CEC Membership", A + "nomination-form-cec-membership.pdf", "Election Documents", "2019", "Election Commission", { status: "Superseded" }),
  d(23, "Nominees 2019", A + "nominees-2019.pdf", "Election Documents", "2019", "Election Commission", { status: "Superseded" }),
  d(24, "List of Candidates 2019", A + "list-of-candidates-2019.pdf", "Election Documents", "2019", "Election Commission", { status: "Superseded" }),
  d(25, "Provisional Results – Reserve Seat for Women (2019)", A + "provisional-results-reserve-seat-women-2019.pdf", "Election Documents", "2019", "Election Commission", { status: "Superseded" }),
  // Notifications (office bearer lists)
  d(26, "Office Bearers 2020-21", "/docs/OFFICE-BEARERS-2020-21.pdf", "Notifications", "2021", "PCPA Secretariat", { date: "24 May 2021", status: "Superseded" }),
  d(27, "Office Bearers 2019-2020", A + "office-bearers-2019-20.pdf", "Notifications", "2020", "PCPA Secretariat", { status: "Superseded" }),
  // Policies & rules (reference legislation)
  d(28, "Seed Act 1976", A + "seed-act-1976.pdf", "Policies & Rules", "1976", "Government of Pakistan", { status: "Current" }),
  d(29, "The Seed (Amendment) Act 2015", A + "seed-amendment-act-2015.pdf", "Policies & Rules", "2015", "Government of Pakistan", { status: "Current" }),
  d(30, "The Punjab Cotton Control Rules 1966", A + "punjab-cotton-control-rules-1966.pdf", "Policies & Rules", "1966", "Government of Punjab", { status: "Current" }),
  d(31, "Seed Production – Good Practice (ISF)", A + "seed-production-good-practice-isf.pdf", "Policies & Rules", "", "International Seed Federation", { status: "Current" }),
];

export const authorities = Array.from(new Set(documents.map((x) => x.authority))).sort();
export const years = Array.from(new Set(documents.map((x) => x.year).filter(Boolean))).sort().reverse();
