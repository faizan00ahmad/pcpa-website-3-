export const committees = [
  {
    slug: "hr",
    name: "HR Committee",
    icon: "users",
    purpose:
      "Reviews complete membership files before final approval (the HR Membership Review step in both membership routes).",
  },
  { slug: "it", name: "IT Committee", icon: "monitor", purpose: "" },
  { slug: "finance", name: "Finance Committee", icon: "rs", purpose: "" },
  { slug: "legal", name: "Legal Committee", icon: "scale", purpose: "" },
  { slug: "regulatory", name: "Regulatory Committee", icon: "doc", purpose: "" },
  { slug: "other", name: "Other Approved Committees", icon: "stack", purpose: "" },
];

export const committeeFields = ["Convener", "Co-Convener", "Members", "Terms of Reference", "Meeting schedule"];

export const publicVsConfidential =
  "Public pages show committee composition, approved Terms of Reference, meeting schedule and approved public decisions. Internal case papers, HR evidence and confidential review files remain inside the secure staff workspace.";
