/* Membership content. Process steps and fee table are taken from the PCPA website redesign proposal. */

export const routes = [
  {
    id: "route-1",
    title: "Route 1 – Direct through PCPA Secretariat",
    intro: "Applicant visits / submits directly to Multan Secretariat.",
    steps: [
      { title: "Submit complete application", note: "Membership application reference created" },
      { title: "Secretary General preliminary scrutiny", note: "Documents checked before fee request" },
      { title: "Deposit membership fee", note: "Only after preliminary clearance" },
      { title: "Finance verification", note: "Payment must be cleared / confirmed" },
      { title: "HR Membership Review", note: "Complete file placed before review panel" },
      { title: "Membership certificate", note: "Issued after final approval" },
    ],
  },
  {
    id: "route-2",
    title: "Route 2 – Through Coordinator",
    intro: "For applicants away from the Multan head office.",
    steps: [
      { title: "Submit to Coordinator", note: "Application + documents" },
      { title: "Coordinator verification", note: "PCPA-MEM-01" },
      { title: "Chief Coordinator recommendation", note: "PCPA-MEM-02" },
      { title: "Secretary General preliminary report", note: "PCPA-MEM-03" },
      { title: "Fee + Finance verification", note: "PCPA-MEM-04" },
      { title: "HR Membership Review", note: "PCPA-MEM-05" },
      { title: "Membership certificate", note: "Issued after approval" },
    ],
  },
];

export const fees = {
  rows: [
    { category: "Corporate Member", fresh: "250,000", renewal: "200,000" },
    { category: "Associate Member", fresh: "90,000", renewal: "60,000" },
  ],
  notes: [
    "Fees are subject to change as per the approved PCPA Executive Committee decision.",
    "Payment should be made only after preliminary clearance of the application.",
    "Bank details and payment modes are provided on the application form.",
    "Please attach valid payment evidence for Finance verification.",
  ],
};

export const statuses = [
  "Received",
  "Under Scrutiny",
  "Fee Requested",
  "Finance Verified",
  "Scheduled for HR Review",
  "Approved",
  "Deferred",
  "Closed",
] as const;

export const services = [
  { title: "Apply for Membership", text: "Start or continue an application.", href: "/membership/apply", icon: "form" },
  { title: "Membership Procedure", text: "Understand Route 1 and Route 2.", href: "/membership/procedure", icon: "steps" },
  { title: "Membership Fees", text: "View the current approved schedule.", href: "/membership/fees", icon: "rs" },
  { title: "Application Forms", text: "Download printable forms.", href: "/membership/forms", icon: "file" },
  { title: "Member Directory", text: "Search verified members.", href: "/membership/directory", icon: "users" },
  { title: "Renew Membership", text: "Update records and renew.", href: "/membership/renew", icon: "renew" },
];

export const complaintStatuses = ["Received", "Under Review", "Information Required", "Referred", "Resolved", "Closed"] as const;

export const complaintCategories = [
  "Membership",
  "Fees & Payments",
  "Meetings & Decisions",
  "Elections",
  "Services of the Secretariat",
  "Industry / Regulatory matter",
  "Website / Documents",
  "Other",
];

export const secretariatServices = [
  { title: "Membership Administration", key: "membership" },
  { title: "Meeting Coordination", key: "meeting" },
  { title: "Complaints & Suggestions", key: "complaint" },
  { title: "Document Requests", key: "document" },
  { title: "Member Services", key: "member" },
  { title: "General Correspondence", key: "general" },
];
