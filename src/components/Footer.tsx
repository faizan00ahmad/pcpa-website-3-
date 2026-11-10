import Link from "next/link";
import { nav, offices, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="pc-footer">
      <div className="pc-wrap">
        <p className="pc-footer-note">
          {site.fullName} · {offices.multan.address}. Phone {site.phone} · <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
        <div className="pc-footer-grid">
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
                <Link href="/portal">Member Portal</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pc-footer-bar">
          <span>{site.copyright}</span>
          <span>
            <Link href="/complaints/guidelines">Complaint guidelines</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
