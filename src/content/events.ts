/* Real dates published by PCPA. Meeting records appear here as PCPA publishes them. */

export type KeyDate = { date: string; sort: string; title: string; note?: string; href?: string };

export const keyDates: KeyDate[] = [
  { date: "3 Oct 2026", sort: "2026-10-03", title: "Annual General Meeting 2026", note: "Held at Multan; newly elected Executive Committee members were announced." },
  { date: "24 Aug 2026", sort: "2026-08-24", title: "Final Eligible Voters Lists published", href: "/elections" },
  { date: "22 Jul 2026", sort: "2026-07-22", title: "Provisional Eligible Voters Lists published", href: "/elections" },
  { date: "15 Jul 2026", sort: "2026-07-15", title: "Election Schedule and Election Commission announced", href: "/elections" },
];

export type MeetingRow = {
  ref: string;
  date: string;
  title: string;
  agenda?: string;
  minutes?: string;
  decisions?: string;
  status: string;
  group: "Executive Committee" | "Cabinet Meetings" | "HR Committee" | "AGM / EGM" | "Other Meetings";
};

/** Published meeting records. AGM 2026 is the only dated record currently public; others will be added as PCPA publishes them. */
export const meetings: MeetingRow[] = [
  {
    ref: "AGM-2026",
    date: "3 Oct 2026",
    title: "Annual General Meeting 2026 (Multan)",
    status: "Held",
    group: "AGM / EGM",
  },
];

export const meetingTabs = ["Executive Committee", "Cabinet Meetings", "HR Committee", "AGM / EGM", "Other Meetings"] as const;

export const electionStages = [
  { label: "Schedule", status: "Published", date: "15 Jul 2026", done: true },
  { label: "Provisional List", status: "Published", date: "22 Jul 2026", done: true },
  { label: "Final Voter List", status: "Published", date: "24 Aug 2026", done: true },
  { label: "Election / AGM", status: "Held", date: "3 Oct 2026", done: true },
];

export const electionDocs = [
  { title: "Election Schedule", status: "Published", file: "/docs/ANNOUNCEMENT-OF-ELECTION-SCHEDULE-PCPA-2026-2028.pdf" },
  { title: "Election Commission", status: "Published", file: "/docs/ANNOUNCEMENT-OF-ELECTION-COMMISSION-2026-2028.pdf" },
  { title: "Provisional Voter List", status: "Published (superseded)", file: "/docs/archive/provisional-voters-list-2026-28.pdf" },
  { title: "Final Voter List – Corporate", status: "Published", file: "/docs/FINAL-ELIGIBLE-VOTERS-LIST-CORPORATE-2026-2028.pdf" },
  { title: "Final Voter List – Associate", status: "Published", file: "/docs/FINAL-ELIGIBLE-VOTERS-LIST-ASSOCIATE-2026-2028.pdf" },
  { title: "Nomination Forms", status: "Not published online", file: "" },
  { title: "Election Results", status: "Not published online", file: "" },
];

export const previousElections = [
  { cycle: "2020-21", docs: [{ title: "Final Election Schedule 2020-21", file: "/docs/archive/final-election-schedule-2020-21.pdf" }] },
  {
    cycle: "2019",
    docs: [
      { title: "Election Schedule 2019", file: "/docs/archive/election-schedule-2019.pdf" },
      { title: "Elections Procedure", file: "/docs/archive/elections-procedure.pdf" },
      { title: "Nomination Form for CEC Membership", file: "/docs/archive/nomination-form-cec-membership.pdf" },
      { title: "Nominees 2019", file: "/docs/archive/nominees-2019.pdf" },
      { title: "List of Candidates 2019", file: "/docs/archive/list-of-candidates-2019.pdf" },
      { title: "Provisional Results – Reserve Seat for Women", file: "/docs/archive/provisional-results-reserve-seat-women-2019.pdf" },
    ],
  },
];
