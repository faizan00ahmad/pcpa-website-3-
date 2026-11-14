import Image from "next/image";
import Link from "next/link";
import { nav, offices, site } from "@/content/site";
import { Icon } from "./Icon";

export function Footer() {
  return (
    <footer className="pc-footer">
      <div className="pc-wrap">
        <div className="pc-footer-sheet">
          <div className="pc-footer-main">
            <div className="pc-footer-brand">
              <Link href="/" className="pc-brand" aria-label="PCPA home">
                <Image src="/images/brand/favicon.png" alt="" width={36} height={36} />
                <strong>PCPA</strong>
              </Link>
              <p>{site.fullName}</p>
              <ul className="pc-footer-contact">
                <li>
                  <Icon name="pin" size={15} /> <span>{offices.multan.address}</span>
                </li>
                <li>
                  <Icon name="phone" size={15} /> <span>{site.phone}</span>
                </li>
                <li>
                  <Icon name="mail" size={15} /> <a href={`mailto:${site.email}`}>{site.email}</a>
                </li>
              </ul>
            </div>
            <div className="pc-footer-cols">
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
                    <Link href="/gallery">Photo gallery</Link>
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
            </div>
          </div>
          <div className="pc-footer-bar">
            <span>{site.copyright}</span>
            <span>
              <Link href="/complaints/guidelines">Complaint guidelines</Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
