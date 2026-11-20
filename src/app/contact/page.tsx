import type { Metadata } from "next";
import { PageFrame } from "@/components/PageFrame";
import { Icon } from "@/components/Icon";
import { ContactMap } from "@/features/ContactMap";
import { RequestForm } from "@/features/RequestForm";
import { contactForm } from "@/features/forms";
import { officialEmails, offices, site } from "@/content/site";

export const metadata: Metadata = { title: "Contact" };

const tel = (n: string) => `tel:${n.replace(/-/g, "")}`;

export default function ContactPage() {
  const places = [
    { id: "multan", name: offices.multan.name, address: offices.multan.address, ...offices.multan.geo },
    { id: "lahore", name: offices.lahore.name, address: offices.lahore.address, ...offices.lahore.geo },
  ];
  const [general, ...roles] = officialEmails;
  return (
    <PageFrame banner="crops" title="Contact" subtitle="Reach the PCPA Secretariat">
      {/* 1 · Fastest ways to reach us */}
      <ul className="pc-quick" aria-label="Quick contact">
        <li>
          <a className="pc-quick-tile" href={tel(site.phone)}>
            <span className="pc-icon">
              <Icon name="phone" size={22} />
            </span>
            <span className="pc-quick-label">Call the Secretariat</span>
            <strong>{site.phone}</strong>
            <span className="pc-quick-hint">Multan head office</span>
          </a>
        </li>
        <li>
          <a className="pc-quick-tile" href={`mailto:${general.email}`}>
            <span className="pc-icon">
              <Icon name="mail" size={22} />
            </span>
            <span className="pc-quick-label">Email us</span>
            <strong>{general.email}</strong>
            <span className="pc-quick-hint">General enquiries</span>
          </a>
        </li>
        <li>
          <a className="pc-quick-tile" href="#map">
            <span className="pc-icon">
              <Icon name="pin" size={22} />
            </span>
            <span className="pc-quick-label">Visit us</span>
            <strong>Industrial Estate, Multan</strong>
            <span className="pc-quick-hint">Offices in Multan and Lahore · see map</span>
          </a>
        </li>
      </ul>

      {/* 2 · Send a message (main task) beside who to write to */}
      <div className="pc-contact-main">
        <div className="pc-contact-form">
          <RequestForm config={contactForm} />
          <p className="pc-muted">Your message is prepared as an email to {site.email}; nothing is sent until you press send in your email app.</p>
        </div>
        <aside className="pc-card pc-contactcard" aria-labelledby="who-to-write">
          <h2 id="who-to-write" className="pc-h3">
            Who to write to
          </h2>
          <p className="pc-muted">Send your matter straight to the right office.</p>
          <ul className="pc-emails">
            {roles.map((e) => (
              <li key={e.email}>
                <span className="pc-emails-role">{e.role}</span>
                <a href={`mailto:${e.email}`}>
                  <Icon name="mail" size={16} /> {e.email}
                </a>
              </li>
            ))}
          </ul>
          <p className="pc-contactcard-line">
            <Icon name="phone" size={16} /> Mobile <a href={tel(site.mobile)}>{site.mobile}</a>
          </p>
        </aside>
      </div>

      {/* 3 · Offices */}
      <h2 className="pc-h2">Our offices</h2>
      <div className="pc-grid pc-grid-2">
        {[offices.multan, offices.lahore].map((o) => (
          <section key={o.name} className="pc-card pc-office">
            <header className="pc-office-head">
              <span className="pc-icon">
                <Icon name="building" size={22} />
              </span>
              <div>
                <h3 className="pc-h3">{o.name}</h3>
                <p className="pc-muted">{o.address}</p>
              </div>
            </header>
            <ul className="pc-contact-list">
              <li>
                <Icon name="phone" size={18} /> <a href={tel(o.phone)}>{o.phone}</a>
              </li>
              {o.contacts.map((c) => (
                <li key={c.name}>
                  <Icon name="user" size={18} />
                  <span>
                    <strong>{c.name}</strong> · {c.role} · <a href={tel(c.phone)}>{c.phone}</a>
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {/* 4 · Map */}
      <h2 id="map" className="pc-h2">
        Find us on the map
      </h2>
      <ContactMap places={places} />
    </PageFrame>
  );
}
