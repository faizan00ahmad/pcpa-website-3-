import type { Metadata } from "next";
import { PageFrame } from "@/components/PageFrame";
import { PortalDemo } from "@/features/PortalDemo";

export const metadata: Metadata = { title: "Member Portal (preview)" };

export default function PortalPage() {
  return (
    <PageFrame banner="aerial" title="Member Portal" subtitle="Preview of the planned secure portal">
      <PortalDemo />
    </PageFrame>
  );
}
