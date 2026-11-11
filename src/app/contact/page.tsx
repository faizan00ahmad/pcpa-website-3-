import type { Metadata } from "next";
import { PageFrame } from "@/components/PageFrame";
import { Icon } from "@/components/Icon";
import { RequestForm } from "@/features/RequestForm";
import { contactForm } from "@/features/forms";
import { offices, site } from "@/content/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <PageFrame banner="crops" title="Contact" subtitle="Reach the PCPA Secretariat">
      <div className="pc-grid pc-grid-2">
        {[offices.multan, offices.lahore].map((o) => (
          <section key={o.name} className="pc-card">
            <h2 className="pc-h3">{o.name}</h2>
            <ul className="pc-contact-list">
              <li>
                <Icon name="pin" size={18} /> <span>{o.address}</span>
              </li>
              <li>
                <Icon name="phone" size={18} /> <a href={`tel:${o.phone.replace(/-/g, "")}`}>{o.phone}</a>
              </li>
              <li>
                <Icon name="mail" size={18} /> <a href={`mailto:${o.email}`}>{o.email}</a>
              </li>
              {o.contacts.map((c) => (
                <li key={c.name}>
                  <Icon name="user" size={18} />
                  <span>
                    {c.name}, {c.role} — <a href={`tel:${c.phone.replace(/-/g, "")}`}>{c.phone}</a>
                  </span>
                </li>
              ))}
            </ul>
            <a className="pc-link" target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/search/${encodeURIComponent(o.address)}`}>
              Open in Google Maps <Icon name="external" size={14} />
            </a>
          </section>
        ))}
      </div>
      <RequestForm config={contactForm} />
      <p className="pc-muted">
        Messages are prepared as an email to {site.email}; nothing is sent until you press send in your email app.
      </p>
    </PageFrame>
  );
}
