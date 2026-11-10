import type { Metadata } from "next";
import { PageFrame } from "@/components/PageFrame";
import { RequestForm } from "@/features/RequestForm";
import { complaintForm } from "@/features/forms";

export const metadata: Metadata = { title: "Submit a Complaint" };

export default function ComplaintPage() {
  return (
    <PageFrame title="Submit a Complaint" subtitle="Complaints & Suggestions" section="complaints" current="/complaints">
      <RequestForm config={complaintForm} />
    </PageFrame>
  );
}
