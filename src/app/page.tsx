import Image from "next/image";
import Link from "next/link";
import { Icon, type IconName } from "@/components/Icon";
import { GalleryStrip } from "@/components/GalleryStrip";
import { PersonCard } from "@/components/blocks";
import { PreviewButton } from "@/features/PreviewButton";
import { HeroVideo } from "@/components/HeroVideo";
import { documents } from "@/content/documents";
import { keyDates } from "@/content/events";
import { news } from "@/content/news";
import { cabinet } from "@/content/people";
import { offices, site } from "@/content/site";

const services: { title: string; text: string; href: string; cta: string; icon: IconName; tone?: "dark" | "accent"; wide?: boolean }[] = [
  { title: "Become a member", text: "A clear procedure, a published fee schedule and a certificate on approval.", href: "/membership/apply", cta: "Apply now", icon: "form", tone: "dark", wide: true },
  { title: "Download centre", text: "Search forms, lists, circulars and records.", href: "/downloads", cta: "Browse", icon: "download" },
  { title: "Meetings & elections", text: "Key dates, meetings and voter lists.", href: "/meetings", cta: "View", icon: "calendar" },
  { title: "Member directory", text: "Find Corporate members by name and city.", href: "/membership/directory", cta: "Search", icon: "users" },
  { title: "Renew membership", text: "Update your records and renew for the year.", href: "/membership/renew", cta: "Renew", icon: "renew" },
  { title: "Complaints & suggestions", text: "Every submission gets a reference number so you can follow its progress.", href: "/complaints", cta: "Submit", icon: "chat", tone: "accent", wide: true },
];

export default function Home() {
  const latest = documents.filter((d) => d.status === "Latest").slice(0, 6);
  return (
    <>
      {/* 1 · Hero */}
      <section className="pc-hero pc-hero-full" aria-label="Welcome">
        <HeroVideo src="/video/hero.mp4" poster="/video/hero-poster.jpg" label="A tour of the PCPA Secretariat office in Multan" />
        <div className="pc-hero-shade" aria-hidden />
        <div className="pc-wrap pc-hero-content">
          <h1 className="pc-sr">Protecting Pakistan&apos;s Crops</h1>
          <div className="pc-hero-cta">
            <Link href="/membership/apply" className="pc-btn pc-btn-primary pc-btn-hero">
              Apply for membership <Icon name="arrow" size={18} />
            </Link>
            <Link href="/downloads" className="pc-btn pc-btn-glass pc-btn-hero">
              Download centre <Icon name="download" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 2 · Services */}
      <section className="pc-section">
        <div className="pc-wrap">
          <header className="pc-sec-head">
            <p className="pc-eyebrow">Services</p>
            <h2 className="pc-h2">Everything you need from PCPA.</h2>
          </header>
          <div className="pc-bento">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className={`pc-bento-tile${s.tone ? ` pc-tile-${s.tone}` : ""}${s.wide ? " pc-span-2" : ""}`}>
                <span className="pc-bento-icon">
                  <Icon name={s.icon} size={22} />
                </span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <span className="pc-textlink">
                  {s.cta} <Icon name="chevronRight" size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3 · At a glance */}
      <section className="pc-section pc-section-tight">
        <div className="pc-wrap">
          <div className="pc-panel pc-panel-green">
            <h2 className="pc-h2">PCPA at a glance.</h2>
            <div className="pc-statrow">
              <div className="pc-chip">
                <strong>2</strong>
                <span>Offices – Multan &amp; Lahore</span>
              </div>
              <div className="pc-chip">
                <strong>2</strong>
                <span>Membership classes</span>
              </div>
              <div className="pc-chip">
                <strong>2026-28</strong>
                <span>Executive Committee term</span>
              </div>
              <div className="pc-chip">
                <strong>{documents.length}+</strong>
                <span>Documents online</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 · Leadership */}
      <section className="pc-section">
        <div className="pc-wrap">
          <header className="pc-sec-head pc-sec-head-row">
            <div>
              <p className="pc-eyebrow">Leadership</p>
              <h2 className="pc-h2">Meet the Cabinet.</h2>
            </div>
            <Link href="/leadership/cabinet" className="pc-textlink">
              All leadership <Icon name="chevronRight" size={16} />
            </Link>
          </header>
          <div className="pc-grid pc-grid-6 pc-people">
            {cabinet.map((p) => (
              <PersonCard key={p.name} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* 5 · Photo gallery */}
      <section className="pc-section">
        <div className="pc-wrap">
          <header className="pc-sec-head pc-sec-head-row">
            <div>
              <p className="pc-eyebrow">Gallery</p>
              <h2 className="pc-h2">Meetings, events and the fields.</h2>
            </div>
            <Link href="/gallery" className="pc-textlink">
              View all photos <Icon name="chevronRight" size={16} />
            </Link>
          </header>
          <GalleryStrip />
        </div>
      </section>

      {/* 6 · Dates and documents */}
      <section className="pc-section pc-section-tight">
        <div className="pc-wrap pc-two">
          <div className="pc-panel">
            <header className="pc-sec-head-row">
              <h2 className="pc-h3">Key dates</h2>
              <Link href="/meetings" className="pc-textlink">
                All <Icon name="chevronRight" size={16} />
              </Link>
            </header>
            <ol className="pc-timeline">
              {keyDates.map((k) => (
                <li key={k.sort}>
                  <time dateTime={k.sort}>{k.date}</time>
                  <strong>{k.title}</strong>
                </li>
              ))}
            </ol>
          </div>
          <div className="pc-panel">
            <header className="pc-sec-head-row">
              <h2 className="pc-h3">Latest documents</h2>
              <Link href="/downloads" className="pc-textlink">
                All <Icon name="chevronRight" size={16} />
              </Link>
            </header>
            <ul className="pc-doclist">
              {latest.map((d) => (
                <li key={d.id} className="pc-doclink">
                  <Icon name="pdf" size={20} />
                  <a href={d.file} target="_blank" rel="noopener noreferrer">
                    {d.title}
                  </a>
                  <PreviewButton title={d.title} file={d.file} category={d.category} date={d.date ?? d.year} iconOnly />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 7 · News */}
      <section className="pc-section">
        <div className="pc-wrap">
          <header className="pc-sec-head pc-sec-head-row">
            <div>
              <p className="pc-eyebrow">News</p>
              <h2 className="pc-h2">Latest from PCPA.</h2>
            </div>
            <Link href="/news" className="pc-textlink">
              All news <Icon name="chevronRight" size={16} />
            </Link>
          </header>
          <div className="pc-grid pc-grid-2">
            {news.slice(0, 4).map((n) => (
              <Link key={n.slug} href={n.path} className="pc-card pc-news">
                <Image src={n.image} alt="" width={640} height={360} sizes="(max-width:800px) 100vw, 400px" />
                <div>
                  <time className="pc-muted">{n.published}</time>
                  <h3 className="pc-h4">{n.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8 · Contact */}
      <section className="pc-section pc-section-tight">
        <div className="pc-wrap">
          <div className="pc-cta-panel">
            <div>
              <h2>Need help from the Secretariat?</h2>
              <p>
                {offices.multan.name} · {site.phone} · {site.email}
              </p>
            </div>
            <Link href="/contact" className="pc-btn pc-btn-light">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
