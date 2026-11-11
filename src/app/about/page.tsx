import type { Metadata } from "next";
import Link from "next/link";
import { PageFrame } from "@/components/PageFrame";
import { InfoCard, Notice, Stat } from "@/components/blocks";
import { intro, keyFacts, objectives, vision, mission } from "@/content/about";
import { Icon } from "@/components/Icon";
import { PhotoStrip, photoSets } from "@/components/Figures";

export const metadata: Metadata = { title: "About PCPA" };

export default function AboutPage() {
  return (
    <PageFrame title="About PCPA" subtitle="Who we are and what we do" section="about" current="/about">
      <p className="pc-lead">{intro}</p>
      <PhotoStrip photos={photoSets.about} />
      <div className="pc-grid pc-grid-2">
        <div className="pc-card">
          <h2 className="pc-h3">Vision</h2>
          <p>{vision}</p>
          <Link className="pc-link" href="/about/vision">
            Read more <Icon name="arrow" size={14} />
          </Link>
        </div>
        <div className="pc-card">
          <h2 className="pc-h3">Mission</h2>
          <p>{mission}</p>
          <Link className="pc-link" href="/about/mission">
            Read more <Icon name="arrow" size={14} />
          </Link>
        </div>
      </div>
      <h2 className="pc-h2">What we do</h2>
      <div className="pc-grid pc-grid-2">
        {objectives.map((o) => (
          <InfoCard key={o.title} {...o} />
        ))}
      </div>
      <h2 className="pc-h2">Key facts</h2>
      <ul className="pc-checks">
        {keyFacts.map((k) => (
          <li key={k}>
            <Icon name="check" size={18} /> {k}
          </li>
        ))}
      </ul>
      <div className="pc-grid pc-grid-3">
        <Stat value="2" label="Offices – Multan and Lahore" />
        <Stat value="2" label="Membership classes" />
        <Stat value="2026-28" label="Current Executive Committee term" />
      </div>
      <Notice>Descriptive text on this page is drafted from public information and is pending review by PCPA.</Notice>
    </PageFrame>
  );
}
