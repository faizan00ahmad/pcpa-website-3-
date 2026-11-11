import type { Metadata } from "next";
import { PageFrame } from "@/components/PageFrame";
import { Gallery } from "@/features/Gallery";

export const metadata: Metadata = { title: "Photo Gallery" };

export default function GalleryPage() {
  return (
    <PageFrame title="Photo Gallery" subtitle="Meetings and events of the Association" section="meetings" current="/gallery">
      <p className="pc-lead">Photographs from PCPA meetings, ceremonies and events. Select any photo to view it larger.</p>
      <Gallery />
      <p className="pc-muted pc-gal-note">Captions are short descriptions of each photo. Dates and occasions for individual pictures are to be updated by the Secretariat.</p>
    </PageFrame>
  );
}
