import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageFrame } from "@/components/PageFrame";
import { InfoCard, Notice } from "@/components/blocks";
import { PhotoStrip, SideFigure, photoSets } from "@/components/Figures";
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
        <>
          <div className="pc-split">
            <div>
              <p className="pc-lead">{history}</p>
              <Notice>A detailed timeline of milestones will be added once PCPA provides its archive — to be updated.</Notice>
            </div>
            <SideFigure src="/images/farm/tractor-wheat-field.jpg" alt="A tractor working a golden wheat field in the morning haze" pos="50% 60%" />
          </div>
        </>
      )}
      {slug === "vision" && (
        <>
          <div className="pc-split pc-split-center">
            <blockquote className="pc-quote">{vision}</blockquote>
            <SideFigure src="/images/farm/farmer-spreading-fertiliser.jpg" alt="A farmer scattering fertiliser across a young wheat field" pos="50% 25%" />
          </div>
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
          <div className="pc-split pc-split-center">
            <blockquote className="pc-quote">{mission}</blockquote>
            <SideFigure src="/images/farm/tractor-in-mustard-field.jpg" alt="A tractor on a track between flowering mustard fields at sunset" pos="50% 50%" />
          </div>
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
        <div className="pc-grid pc-grid-2">
          {governance.map((g) => (
            <InfoCard key={g.title} title={g.title} text={g.text} />
          ))}
        </div>
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
      {slug !== "history" && <Notice>Wording is drafted from public information and is pending review by PCPA.</Notice>}
    </PageFrame>
  );
}
