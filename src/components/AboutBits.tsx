import Image from "next/image";
import Link from "next/link";
import { Icon, type IconName } from "@/components/Icon";

/** A short statement (vision, mission, history) beside one photo; both columns share the same height so no empty space is left. */
export function Statement({ tag, children, src, alt, pos = "50% 50%" }: { tag: string; children: React.ReactNode; src: string; alt: string; pos?: string }) {
  return (
    <section className="pc-statement">
      <div className="pc-statement-text">
        <span className="pc-statement-tag">{tag}</span>
        {children}
      </div>
      <div className="pc-statement-img">
        <Image src={src} alt={alt} fill sizes="(max-width:800px) 100vw, 420px" style={{ objectPosition: pos }} />
      </div>
    </section>
  );
}

const govIcons: IconName[] = ["users", "shield", "stack", "building", "calendar"];

/** Stacked rows (icon, title, text): reads as a list and never leaves a half-empty grid row. */
export function InfoRows({ items, icons = govIcons }: { items: { title: string; text: string }[]; icons?: IconName[] }) {
  return (
    <ul className="pc-rows">
      {items.map((g, i) => (
        <li key={g.title} className="pc-row">
          <span className="pc-icon">
            <Icon name={icons[i % icons.length]} size={22} />
          </span>
          <div>
            <h3 className="pc-h4">{g.title}</h3>
            <p className="pc-muted">{g.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

const sections = [
  { href: "/about", label: "Overview", text: "Who we are and what we do" },
  { href: "/about/history", label: "History", text: "How PCPA is organised today" },
  { href: "/about/vision", label: "Vision", text: "Where we are heading" },
  { href: "/about/mission", label: "Mission", text: "What we commit to" },
  { href: "/about/objectives", label: "Objectives", text: "What the Association works for" },
  { href: "/about/governance", label: "Governance", text: "How PCPA is led and administered" },
  { href: "/about/affiliations", label: "Affiliations", text: "Bodies PCPA works with" },
];

/** "Also in About PCPA": links to the other About pages so every page ends with a clear next step. */
export function AboutMore({ current }: { current?: string }) {
  const list = sections.filter((s) => s.href !== current);
  return (
    <section className="pc-aboutmore" aria-labelledby="about-more">
      <h2 id="about-more" className="pc-h3">
        Also in About PCPA
      </h2>
      <ul>
        {list.map((s) => (
          <li key={s.href}>
            <Link href={s.href} className="pc-aboutmore-link">
              <span>
                <strong>{s.label}</strong>
                <small>{s.text}</small>
              </span>
              <Icon name="arrow" size={16} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
