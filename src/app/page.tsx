import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { IntroVideo } from "@/components/IntroVideo";
import { PersonCard } from "@/components/blocks";
import { documents } from "@/content/documents";
import { keyDates } from "@/content/events";
import { news } from "@/content/news";
import { cabinet } from "@/content/people";
import { offices, site } from "@/content/site";

export default function Home() {
  const latest = documents.filter((d) => d.status === "Current").slice(0, 6);
  return (
    <>
      <IntroVideo />

      <section className="pc-hero">
        <div className="pc-wrap pc-hero-copy">
          <p className="pc-eyebrow">Pakistan Crop Protection Association</p>
          <h1>Representing Pakistan&apos;s crop protection industry.</h1>
          <p className="pc-hero-sub">Membership, leadership, meetings, elections and official documents — all in one place.</p>
          <div className="pc-hero-links">
            <Link href="/membership/apply" className="pc-textlink">
              Apply for membership <Icon name="chevronRight" size={16} />
            </Link>
            <Link href="/downloads" className="pc-textlink">
              Open the download centre <Icon name="chevronRight" size={16} />
            </Link>
          </div>
        </div>
        <div className="pc-wrap pc-hero-media">
          <Image src="/images/slider/slide-07.jpg" alt="PCPA members at an Association event" width={1600} height={800} priority sizes="(max-width:1300px) 100vw, 1260px" />
        </div>
      </section>

      <section className="pc-section">
        <div className="pc-wrap">
          <h2 className="pc-h2 pc-center pc-reveal">Everything you need from PCPA.</h2>
          <div className="pc-bento">
            <Link href="/membership/apply" className="pc-bento-tile pc-tile-dark pc-reveal pc-span-2">
              <p className="pc-eyebrow">Membership</p>
              <h3>Become a member.</h3>
              <p>Two clear routes, a published fee schedule and a certificate on approval.</p>
              <span className="pc-textlink">
                Apply now <Icon name="chevronRight" size={16} />
              </span>
            </Link>
            <Link href="/downloads" className="pc-bento-tile pc-reveal">
              <p className="pc-eyebrow">Download centre</p>
              <h3>Forms &amp; records.</h3>
              <p>Search {documents.length} documents by year, type and authority.</p>
              <span className="pc-textlink">
                Browse <Icon name="chevronRight" size={16} />
              </span>
            </Link>
            <Link href="/meetings" className="pc-bento-tile pc-reveal">
              <p className="pc-eyebrow">Meetings &amp; elections</p>
              <h3>Stay informed.</h3>
              <p>Key dates, decisions and voter lists.</p>
              <span className="pc-textlink">
                View <Icon name="chevronRight" size={16} />
              </span>
            </Link>
            <Link href="/membership/directory" className="pc-bento-tile pc-reveal pc-span-2">
              <p className="pc-eyebrow">Member directory</p>
              <h3>Find a member.</h3>
              <p>Search Corporate members by name and city.</p>
              <span className="pc-textlink">
                Search <Icon name="chevronRight" size={16} />
              </span>
            </Link>
            <Link href="/complaints" className="pc-bento-tile pc-tile-accent pc-reveal pc-span-2">
              <p className="pc-eyebrow">Complaints &amp; suggestions</p>
              <h3>Heard, and tracked.</h3>
              <p>Every submission gets a reference number so you can follow its progress.</p>
              <span className="pc-textlink">
                Submit <Icon name="chevronRight" size={16} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="pc-section pc-sec-dark">
        <div className="pc-wrap">
          <h2 className="pc-h2 pc-center pc-reveal">PCPA at a glance.</h2>
          <div className="pc-statrow pc-reveal">
            <div>
              <strong>2</strong>
              <span>Offices – Multan &amp; Lahore</span>
            </div>
            <div>
              <strong>2</strong>
              <span>Membership classes</span>
            </div>
            <div>
              <strong>2026-28</strong>
              <span>Executive Committee term</span>
            </div>
            <div>
              <strong>{documents.length}+</strong>
              <span>Documents online</span>
            </div>
          </div>
        </div>
      </section>

      <section className="pc-section">
        <div className="pc-wrap">
          <h2 className="pc-h2 pc-center pc-reveal">Meet the Cabinet.</h2>
          <div className="pc-grid pc-grid-6 pc-people pc-reveal">
            {cabinet.map((p) => (
              <PersonCard key={p.name} p={p} />
            ))}
          </div>
          <p className="pc-center">
            <Link href="/leadership/cabinet" className="pc-textlink">
              All leadership <Icon name="chevronRight" size={16} />
            </Link>
          </p>
        </div>
      </section>

      <section className="pc-section pc-section-alt">
        <div className="pc-wrap pc-two">
          <div className="pc-reveal">
            <h2 className="pc-h2">Key dates.</h2>
            <ol className="pc-timeline">
              {keyDates.map((k) => (
                <li key={k.sort}>
                  <time dateTime={k.sort}>{k.date}</time>
                  <strong>{k.title}</strong>
                </li>
              ))}
            </ol>
            <Link href="/meetings" className="pc-textlink">
              All meetings &amp; elections <Icon name="chevronRight" size={16} />
            </Link>
          </div>
          <div className="pc-reveal">
            <h2 className="pc-h2">Latest documents.</h2>
            <ul className="pc-doclist">
              {latest.map((d) => (
                <li key={d.id} className="pc-doclink">
                  <Icon name="pdf" size={20} />
                  <a href={d.file} target="_blank" rel="noopener noreferrer">
                    {d.title}
                  </a>
                </li>
              ))}
            </ul>
            <Link href="/downloads" className="pc-textlink">
              Download centre <Icon name="chevronRight" size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="pc-section">
        <div className="pc-wrap">
          <h2 className="pc-h2 pc-center pc-reveal">Latest news.</h2>
          <div className="pc-grid pc-grid-2 pc-reveal">
            {news.map((n) => (
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

      <section className="pc-cta">
        <div className="pc-wrap pc-center pc-reveal">
          <h2>Need help from the Secretariat?</h2>
          <p>
            {offices.multan.name} · {site.phone} · {site.email}
          </p>
          <Link href="/contact" className="pc-btn pc-btn-primary">
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
}
