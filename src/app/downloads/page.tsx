import type { Metadata } from "next";
import { PageFrame } from "@/components/PageFrame";
import { DownloadCentre } from "@/features/DownloadCentre";
import { documents } from "@/content/documents";
import { withSizes } from "@/lib/docs";

export const metadata: Metadata = { title: "Download Centre" };

export default function DownloadsPage() {
  return (
    <PageFrame banner="tilling" title="Download Centre" subtitle="Forms, lists, circulars and records">
      <DownloadCentre docs={withSizes(documents)} />
    </PageFrame>
  );
}
