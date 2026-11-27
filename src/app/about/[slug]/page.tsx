import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageFrame } from "@/components/PageFrame";
import { InfoCard, Notice } from "@/components/blocks";
import { PhotoStrip, photoSets } from "@/components/Figures";
import { AboutMore, InfoRows, Statement } from "@/components/AboutBits";
import { RelatedDocs } from "@/components/RelatedDocs";
import { affiliations, governance, history, mission, objectives, principles, vision } from "@/content/about";

const pages: Record<string, { title: string; subtitle: string }> = {
  history: { title: "History", subtitle: "How PCPA is organised today" },
  vision: { title: "Vision", subtitle: "Where we are heading" },
  mission: { title: "Mission", subtitle: "What we commit to" },
  objectives: { title: "Objectives", subtitle: "What the Association works for" },
  governance: { title: "Governance", subtitle: "How PCPA is led and administered" },
  affiliations: { title: "Affiliations", subtitle: "Bodies PCPA works with" },
};

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return { title: pages[slug]?.title ?? "About" };
}

export default async function AboutSub({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const meta = pages[slug];
  if (!meta) notFound();
  const href = `/about/${slug}`;

  return (
    <PageFrame title={meta.title} subtitle={meta.subtitle} section="about" current={href}>
      {slug === "history" && (
        <Statement tag="Our story" src="/images/slider/slide-15.jpg" alt="Members meeting around the table at the PCPA Secretariat" pos="50% 50%">
          <p className="pc-statement-lead">{history}</p>
        </Statement>
      )}
      {slug === "vision" && (
        <>
          <Statement tag="Our vision" src="/images/stock/seedling-smart-farming.jpg" alt="A young seedling in the soil, with smart-farming icons around it" pos="50% 55%">
            <blockquote className="pc-statement-quote">{vision}</blockquote>
          </Statement>
          <h2 className="pc-h2">What guides us</h2>
          <div className="pc-grid pc-grid-3">
            {principles.map((p) => (
              <InfoCard key={p.title} {...p} />
            ))}
          </div>
        </>
      )}
      {slug === "mission" && (
        <>
          <Statement tag="Our mission" src="/images/stock/farmer-tablet.jpg" alt="A farmer checking his crop with a tablet" pos="50% 50%">
            <blockquote className="pc-statement-quote">{mission}</blockquote>
          </Statement>
          <h2 className="pc-h2">How we deliver</h2>
          <div className="pc-grid pc-grid-2">
            {objectives.map((o) => (
              <InfoCard key={o.title} {...o} />
            ))}
          </div>
        </>
      )}
      {slug === "objectives" && (
        <>
        <h2 className="pc-sr">Objectives</h2>
        <PhotoStrip photos={photoSets.objectives} />
        <div className="pc-grid pc-grid-2">
          {objectives.map((o) => (
            <InfoCard key={o.title} {...o} />
          ))}
        </div>
        </>
      )}
      {slug === "governance" && (
        <>
        <h2 className="pc-sr">Governance</h2>
        <InfoRows items={governance} />
        <RelatedDocs
          title="Legal framework"
          intro="The law that governs trade organisations in Pakistan."
          ids={["DL-038"]}
          notes={{ "DL-038": "The Trade Organizations Act, 2013 (Act II of 2013)" }}
        />
        </>
      )}
      {slug === "affiliations" && (
        <>
        <h2 className="pc-sr">Affiliations</h2>
        <div className="pc-grid pc-grid-2">
          {affiliations.map((g) => (
            <InfoCard key={g.title} title={g.title} text={g.text} />
          ))}
        </div>
        </>
      )}
      <AboutMore current={href} />
    </PageFrame>
  );
}
