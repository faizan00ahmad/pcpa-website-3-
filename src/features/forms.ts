import { complaintCategories, secretariatServices } from "@/content/membership";
import type { FormConfig } from "./RequestForm";

export const complaintForm: FormConfig = {
  heading: "Submit a Complaint",
  intro: "Describe the issue clearly. Every submission receives a reference number you can use to track it.",
  confidentialNote: "Confidential attachments remain inside the secure system – do not post private documents publicly.",
  prefix: "CMP",
  kind: "Complaint",
  submitLabel: "Submit Complaint",
  mailSubject: "Complaint",
  fields: [
    { name: "company", label: "Company / Member Name", required: true },
    { name: "person", label: "Contact Person", required: true },
    { name: "membership", label: "Membership No. (if applicable)" },
    { name: "contact", label: "Email / Mobile", required: true },
    { name: "category", label: "Category", type: "select", options: complaintCategories, required: true },
    { name: "subject", label: "Subject", required: true },
    { name: "description", label: "Description", type: "textarea", required: true },
    { name: "attachment", label: "Attachment (optional)", type: "file", help: "Attach the file to the email you send to the Secretariat." },
  ],
};

export const suggestionForm: FormConfig = {
  ...complaintForm,
  heading: "Submit a Suggestion",
  intro: "Share an idea to improve PCPA services, procedures or this website.",
  prefix: "SUG",
  kind: "Suggestion",
  submitLabel: "Submit Suggestion",
  mailSubject: "Suggestion",
  confidentialNote: undefined,
  fields: complaintForm.fields.map((f) => (f.name === "category" ? { ...f, options: ["Membership", "Services", "Meetings & Elections", "Website", "Other"] } : f)),
};

export const applyForm: FormConfig = {
  heading: "Membership Application",
  intro: "Complete the details below to start your application. Final documents and fee evidence are submitted as listed in the Membership Procedure.",
  prefix: "MEM",
  kind: "Membership application",
  submitLabel: "Start Application",
  mailSubject: "Membership application",
  fields: [
    { name: "company", label: "Company Name", required: true },
    { name: "membership_class", label: "Membership Class", type: "select", options: ["Corporate", "Associate"], required: true },
    { name: "person", label: "Authorized Person", required: true },
    { name: "designation", label: "Designation", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "mobile", label: "Mobile", type: "tel", required: true },
    { name: "city", label: "City", required: true },
    { name: "activity", label: "Business Activity", type: "select", options: ["Manufacturer / Formulator", "Importer", "Distributor", "Service provider", "Other"], required: true },
    { name: "route", label: "Application Route", type: "select", options: ["Route 1 – Direct through PCPA Secretariat", "Route 2 – Through Coordinator"], required: true },
    { name: "address", label: "Registered Address", type: "textarea", required: true },
    { name: "declaration", label: "I confirm the information is correct and I will submit the required documents.", type: "checkbox", required: true },
  ],
};

export const renewForm: FormConfig = {
  heading: "Renew Membership",
  intro: "Update your records and request renewal for the current cycle.",
  prefix: "REN",
  kind: "Membership renewal",
  submitLabel: "Request Renewal",
  mailSubject: "Membership renewal",
  fields: [
    { name: "company", label: "Company Name", required: true },
    { name: "membership", label: "Membership No.", required: true },
    { name: "membership_class", label: "Membership Class", type: "select", options: ["Corporate", "Associate"], required: true },
    { name: "person", label: "Authorized Person", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "mobile", label: "Mobile", type: "tel", required: true },
    { name: "changes", label: "Changes to company details (if any)", type: "textarea" },
    { name: "declaration", label: "I confirm the information is correct and the renewal fee will be paid as per the approved schedule.", type: "checkbox", required: true },
  ],
};

export const requestForm = (preset?: string): FormConfig => ({
  heading: "Submit a request to the Secretariat",
  intro: "Every submission generates a reference number and acknowledgement.",
  prefix: "REQ",
  kind: "Secretariat request",
  submitLabel: "Start Request",
  mailSubject: "Secretariat request",
  fields: [
    { name: "service", label: "Service", type: "select", options: secretariatServices.map((s) => s.title), required: true },
    { name: "company", label: "Company / Member Name", required: true },
    { name: "person", label: "Contact Person", required: true },
    { name: "contact", label: "Email / Mobile", required: true },
    { name: "subject", label: "Subject", required: true },
    { name: "description", label: "Details", type: "textarea", required: true },
  ],
});

export const contactForm: FormConfig = {
  heading: "Send us a message",
  prefix: "MSG",
  kind: "Message",
  submitLabel: "Send message",
  mailSubject: "Message from the PCPA website",
  fields: [
    { name: "person", label: "Name", required: true },
    { name: "contact", label: "Email", type: "email", required: true },
    { name: "subject", label: "Subject" },
    { name: "description", label: "Your message", type: "textarea", required: true },
  ],
};
