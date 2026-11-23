import Image from "next/image";
import Link from "next/link";
import { nav, offices, site, socialLinks } from "@/content/site";
import { Icon } from "./Icon";

const tel = (n: string) => `tel:${n.replace(/-/g, "")}`;

const placeCards = [
  { o: offices.multan, phones: [offices.multan.phone, offices.multan.mobile] },
  { o: offices.lahore, phones: [offices.lahore.phone] },
];

/** Site footer: brand and social, both offices with phones and email, then the site map. Server-rendered, no scripts. */
export function Footer() {
  return (
    <footer className="pc-footer">
      <div className="pc-wrap">
        <div className="pc-footer-sheet">
          {/* 1 · Brand and offices */}
          <div className="pc-ft-top">
            <div className="pc-ft-brand">
              <Link href="/" className="pc-brand" aria-label="PCPA home">
                <Image src="/images/brand/logo-pcpa.png" alt="PCPA – Pakistan Crop Protection Association" width={72} height={72} />
              </Link>
              <p className="pc-ft-name">{site.fullName}</p>
              <p className="pc-ft-tag">{site.tagline}</p>
              {socialLinks.length > 0 && (
                <ul className="pc-social" aria-label="PCPA on social media">
                  {socialLinks.map((s) => (
                    <li key={s.name}>
                      <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`PCPA on ${s.name}`} title={s.name}>
                        <Icon name={s.icon} size={20} />
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {placeCards.map(({ o, phones }) => (
              <address key={o.name} className="pc-ft-office">
                <h2>{o.name}</h2>
                <p>
                  <Icon name="pin" size={15} /> <span>{o.address}</span>
                </p>
                <p>
                  <Icon name="phone" size={15} />
                  <span>
                    {phones.map((p, i) => (
                      <span key={p}>
                        {i > 0 && " · "}
                        <a href={tel(p)}>{p}</a>
                      </span>
                    ))}
                  </span>
                </p>
                <p>
                  <Icon name="mail" size={15} /> <a href={`mailto:${o.email}`}>{o.email}</a>
                </p>
                <a className="pc-ft-dir" href={`https://www.google.com/maps/dir/?api=1&destination=${o.geo.lat},${o.geo.lon}`} target="_blank" rel="noopener noreferrer">
                  Get directions <Icon name="external" size={13} />
                </a>
              </address>
            ))}
          </div>

          {/* 2 · Site map */}
          <nav className="pc-ft-cols" aria-label="Footer">
            {nav
              .filter((n) => n.children)
              .map((n) => (
                <div key={n.href}>
                  <h2>{n.label}</h2>
                  <ul>
                    {n.children!.map((c) => (
                      <li key={c.href}>
                        <Link href={c.href}>{c.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            <div>
              <h2>More</h2>
              <ul>
                <li>
                  <Link href="/downloads">Downloads</Link>
                </li>
                <li>
                  <Link href="/news">News</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                <li>
                  <Link href="/complaints">Complaints &amp; Suggestions</Link>
                </li>
                <li>
                  <Link href="/portal">Member Portal (preview)</Link>
                </li>
              </ul>
            </div>
          </nav>

          <div className="pc-footer-bar">
            <span>{site.copyright}</span>
            <span className="pc-ft-links">
              <Link href="/complaints/guidelines">Complaint guidelines</Link>
              <a href="#main">Back to top ↑</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
