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
  status?: "Latest" | "Superseded";
  /** Supplied by PCPA for the current procedure: always listed first. */
  featured?: boolean;
};

export const categories = [
  "Membership Forms",
  "Member Lists",
  "Policies & Rules",
  "Circulars",
  "Meeting Documents",
  "Notifications",
  "HR & IT Committee",
  "Committee Documents",
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

const all: DocItem[] = [
  // Membership procedure forms (formats supplied for the new application procedure)
  d(32, "Formal Membership Application", "/docs/PCPA-MEMBERSHIP-APPLICATION.pdf", "Membership Forms", "2026", "PCPA Secretariat", { featured: true, status: "Latest" }),
  d(33, "Formal Membership Application with Authority Letter", "/docs/PCPA-MEMBERSHIP-APPLICATION-AND-AUTHORITY.pdf", "Membership Forms", "2026", "PCPA Secretariat", { featured: true, status: "Latest" }),
  d(34, "Membership Verification & Recommendation – Coordinator / Chief Coordinator", "/docs/MEMBERSHIP-VERIFICATION-COORDINATOR-CHIEF-COORDINATOR.pdf", "Membership Forms", "2026", "PCPA Secretariat", { featured: true, date: "Oct 2026", status: "Latest" }),
  d(35, "PCPA Member Undertaking", "/docs/PCPA-MEMBER-UNDERTAKING.pdf", "Membership Forms", "2026", "PCPA Secretariat", { featured: true, date: "Oct 2026", status: "Latest" }),
  // HR & IT Committee
  d(37, "HR Committee Membership Review", "/docs/HR-COMMITTEE-MEMBERSHIP-REVIEW.pdf", "HR & IT Committee", "2026", "PCPA Secretariat", { featured: true, date: "Oct 2026", status: "Latest" }),
  // Committee announcements 2026-28 (recipient mobiles and personal email covered)
  d(42, "HR & IT Committee 2026-28 – Announcement", "/docs/COMMITTEE-HR-IT-2026-28.pdf", "Committee Documents", "2026", "PCPA Secretariat", { featured: true, date: "12 Oct 2026", status: "Latest" }),
  d(43, "Legal Committee 2026-28 – Announcement", "/docs/COMMITTEE-LEGAL-2026-28.pdf", "Committee Documents", "2026", "PCPA Secretariat", { featured: true, date: "12 Oct 2026", status: "Latest" }),
  d(44, "Fertilizer Committee 2026-28 – Announcement", "/docs/COMMITTEE-FERTILIZER-2026-28.pdf", "Committee Documents", "2026", "PCPA Secretariat", { featured: true, date: "12 Oct 2026", status: "Latest" }),
  d(45, "Technical & Strategic Planning Committee 2026-28 – Announcement", "/docs/COMMITTEE-TECHNICAL-STRATEGIC-2026-28.pdf", "Committee Documents", "2026", "PCPA Secretariat", { featured: true, date: "12 Oct 2026", status: "Latest" }),
  d(46, "Fund Raising Committee 2026-28 – Announcement", "/docs/COMMITTEE-FUND-RAISING-2026-28.pdf", "Committee Documents", "2026", "PCPA Secretariat", { featured: true, date: "12 Oct 2026", status: "Latest" }),
  d(47, "E-Biz & Artificial Intelligence in Agriculture Committee 2026-28 – Announcement", "/docs/COMMITTEE-EBIZ-AI-2026-28.pdf", "Committee Documents", "2026", "PCPA Secretariat", { featured: true, date: "12 Oct 2026", status: "Latest" }),
  d(48, "High Value Addition Committee 2026-28 – Convener", "/docs/COMMITTEE-HIGH-VALUE-ADDITION-2026-28.pdf", "Committee Documents", "2026", "PCPA Secretariat", { featured: true, date: "12 Oct 2026", status: "Latest" }),
  d(49, "Chief Coordinator 2026-28 – Selection Letter", "/docs/CHIEF-COORDINATOR-2026-28.pdf", "Committee Documents", "2026", "PCPA Secretariat", { featured: true, date: "3 Oct 2026", status: "Latest" }),
  // Member lists
  d(7, "Corporate Members PCPA (2025-26)", "/docs/CORPORATE-MEMBERS-PCPA.pdf", "Member Lists", "2026", "PCPA Secretariat", { date: "24 Jan 2026", status: "Latest" }),
  d(8, "Associate Members PCPA (2025-26)", "/docs/ASSOCIATE-MEMBERS-PCPA.pdf", "Member Lists", "2026", "PCPA Secretariat", { date: "24 Jan 2026", status: "Latest" }),
  d(9, "Corporate PCPA Members for 2024-2025", A + "corporate-members-2024-25.pdf", "Member Lists", "2024", "PCPA Secretariat", { date: "22 May 2024", status: "Superseded" }),
  d(10, "Associate PCPA Members for 2024-2025", A + "associate-members-2024-25.pdf", "Member Lists", "2024", "PCPA Secretariat", { date: "22 May 2024", status: "Superseded" }),
  d(11, "Members Updated List 2019-20", A + "members-list-2019-20.pdf", "Member Lists", "2020", "PCPA Secretariat", { status: "Superseded" }),
  d(12, "Members Updated List 2019-20 – Corporate", A + "members-list-2019-20-corporate.pdf", "Member Lists", "2020", "PCPA Secretariat", { status: "Superseded" }),
  // Election documents
  d(13, "Announcement of Election Schedule 2026-2028", "/docs/ANNOUNCEMENT-OF-ELECTION-SCHEDULE-PCPA-2026-2028.pdf", "Election Documents", "2026", "Election Commission", { date: "15 Jul 2026", status: "Latest" }),
  d(14, "Announcement of Election Commission 2026-2028", "/docs/ANNOUNCEMENT-OF-ELECTION-COMMISSION-2026-2028.pdf", "Election Documents", "2026", "Election Commission", { date: "15 Jul 2026", status: "Latest" }),
  d(15, "Provisional Eligible Voters List of PCPA 2026-28", A + "provisional-voters-list-2026-28.pdf", "Election Documents", "2026", "Election Commission", { date: "22 Jul 2026", status: "Superseded" }),
  d(16, "Provisional Voters List – Corporate Class Members 2026-2028", A + "provisional-voters-list-corporate-2026-28.pdf", "Election Documents", "2026", "Election Commission", { date: "22 Jul 2026", status: "Superseded" }),
  d(17, "Final Eligible Voters List – Corporate Class Members 2026-2028", "/docs/FINAL-ELIGIBLE-VOTERS-LIST-CORPORATE-2026-2028.pdf", "Election Documents", "2026", "Election Commission", { date: "24 Aug 2026", status: "Latest" }),
  d(18, "Final Eligible Voters List – Associate Class Members 2026-28", "/docs/FINAL-ELIGIBLE-VOTERS-LIST-ASSOCIATE-2026-2028.pdf", "Election Documents", "2026", "Election Commission", { date: "24 Aug 2026", status: "Latest" }),
  d(19, "Final Election Schedule 2020-21", A + "final-election-schedule-2020-21.pdf", "Election Documents", "2021", "Election Commission", { date: "24 May 2021", status: "Superseded" }),
  d(20, "Election Schedule 2019", A + "election-schedule-2019.pdf", "Election Documents", "2019", "Election Commission", { status: "Superseded" }),
  d(21, "Elections Procedure", A + "elections-procedure.pdf", "Election Documents", "2019", "Election Commission", { status: "Superseded" }),
  d(22, "Nomination Form for CEC Membership", A + "nomination-form-cec-membership.pdf", "Election Documents", "2019", "Election Commission", { status: "Superseded" }),
  d(23, "Nominees 2019", A + "nominees-2019.pdf", "Election Documents", "2019", "Election Commission", { status: "Superseded" }),
  d(24, "List of Candidates 2019", A + "list-of-candidates-2019.pdf", "Election Documents", "2019", "Election Commission", { status: "Superseded" }),
  d(25, "Provisional Results – Reserve Seat for Women (2019)", A + "provisional-results-reserve-seat-women-2019.pdf", "Election Documents", "2019", "Election Commission", { status: "Superseded" }),
  // Policies & rules (reference legislation)
  d(38, "The Trade Organizations Act, 2013", "/docs/TRADE-ORGANIZATIONS-ACT-2013.pdf", "Policies & Rules", "2013", "Government of Pakistan", { featured: true, status: "Latest" }),
  d(39, "Trade Organizations Rules, 2013", "/docs/TRADE-ORGANIZATIONS-RULES-2013.pdf", "Policies & Rules", "2013", "Ministry of Commerce", { featured: true, date: "26 Mar 2013", status: "Latest" }),
  d(40, "Trade Organizations Rules, 2013 (Updated) – FPCCI circular", "/docs/TRADE-ORGANIZATIONS-RULES-2013-UPDATED.pdf", "Policies & Rules", "2025", "FPCCI / DGTO", { featured: true, date: "22 Sep 2025", status: "Latest" }),
  d(41, "Office Bearers 2026-28 – Election Result Notification", "/docs/OFFICE-BEARERS-2026-28.pdf", "Notifications", "2026", "PCPA Secretariat", { featured: true, date: "30 Sep 2026", status: "Latest" }),
  d(28, "Seed Act 1976", A + "seed-act-1976.pdf", "Policies & Rules", "1976", "Government of Pakistan", { status: "Latest" }),
  d(29, "The Seed (Amendment) Act 2015", A + "seed-amendment-act-2015.pdf", "Policies & Rules", "2015", "Government of Pakistan", { status: "Latest" }),
  d(30, "The Punjab Cotton Control Rules 1966", A + "punjab-cotton-control-rules-1966.pdf", "Policies & Rules", "1966", "Government of Punjab", { status: "Latest" }),
  d(31, "Seed Production – Good Practice (ISF)", A + "seed-production-good-practice-isf.pdf", "Policies & Rules", "", "International Seed Federation", { status: "Latest" }),
];

/** Featured documents always come first (in the order written above); the rest keep their order. */
export const documents: DocItem[] = [...all].sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));

export const authorities = Array.from(new Set(documents.map((x) => x.authority))).sort();
export const years = Array.from(new Set(documents.map((x) => x.year).filter(Boolean))).sort().reverse();
