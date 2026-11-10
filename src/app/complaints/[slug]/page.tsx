import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageFrame } from "@/components/PageFrame";
import { Notice } from "@/components/blocks";
import { Icon } from "@/components/Icon";
import { RequestForm } from "@/features/RequestForm";
import { suggestionForm } from "@/features/forms";
import { Tracker } from "@/features/Tracker";
import { complaintStatuses } from "@/content/membership";

const pages: Record<string, string> = { suggestion: "Submit a Suggestion", track: "Track Status", guidelines: "Guidelines" };

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return { title: pages[slug] ?? "Complaints" };
}

export default async function ComplaintsSub({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!pages[slug]) notFound();
  return (
    <PageFrame title={pages[slug]} subtitle="Complaints & Suggestions" section="complaints" current={`/complaints/${slug}`}>
      {slug === "suggestion" && <RequestForm config={suggestionForm} />}
      {slug === "track" && <Tracker />}
      {slug === "guidelines" && (
        <>
          <ul className="pc-checks">
            {[
              "Be specific: name the company, date and document or decision concerned.",
              "Keep to facts. Avoid personal remarks about individuals.",
              "Attach supporting evidence by email to the Secretariat, quoting your reference number.",
              "Do not post confidential documents on public channels.",
              "Every submission receives a reference number so that you can track its status.",
            ].map((t) => (
              <li key={t}>
                <Icon name="check" size={18} /> {t}
              </li>
            ))}
          </ul>
          <h2 className="pc-h2">Status stages</h2>
          <ol className="pc-stepper">
            {complaintStatuses.map((s, i) => (
              <li key={s}>
                <span className="pc-dot">{i + 1}</span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
          <Notice>Target response times will be published once approved by the Executive Committee — to be updated.</Notice>
        </>
      )}
    </PageFrame>
  );
}
