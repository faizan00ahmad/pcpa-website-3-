import type { Metadata } from "next";
import Link from "next/link";
import { PageFrame } from "@/components/PageFrame";
import { InfoCard } from "@/components/blocks";
import { InfoRows } from "@/components/AboutBits";
import { governance, intro, objectives, vision, mission } from "@/content/about";
import { Icon } from "@/components/Icon";
import Image from "next/image";

export const metadata: Metadata = { title: "About PCPA" };


/** Wide photo band with a short caption, used to break up the page and back the text with real people and places. */
function Band({ src, alt, caption, pos = "50% 50%", priority = false }: { src: string; alt: string; caption: string; pos?: string; priority?: boolean }) {
  return (
    <figure className="pc-band">
      <Image src={src} alt={alt} fill sizes="(max-width:900px) 100vw, 1000px" style={{ objectPosition: pos }} priority={priority} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default function AboutPage() {
  return (
    <PageFrame title="About PCPA" subtitle="Who we are and what we do" section="about" current="/about">
      <p className="pc-lead">{intro}</p>
      <Band src="/video/hero-poster.jpg" alt="The PCPA Secretariat building at the Industrial Estate, Multan" caption="The PCPA Secretariat, Industrial Estate, Multan" pos="50% 62%" priority />
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
      <Band src="/images/farm/farmers-inspecting-crops.jpg" alt="Farmers inspecting healthy crops in the evening sun" caption="Protecting crops, responsibly" pos="50% 58%" />
      <h2 className="pc-h2">What we do</h2>
      <div className="pc-grid pc-grid-2">
        {objectives.map((o) => (
          <InfoCard key={o.title} {...o} />
        ))}
      </div>
      <Band src="/images/slider/slide-07.jpg" alt="PCPA office bearers presenting a shield to a guest at an exhibition" caption="Working with members, partners and officials" pos="50% 40%" />
      <h2 className="pc-h2">How PCPA is governed</h2>
      <InfoRows items={governance} />
      <p>
        <Link className="pc-link" href="/about/governance">
          Read more about governance <Icon name="arrow" size={14} />
        </Link>
      </p>
    </PageFrame>
  );
}
