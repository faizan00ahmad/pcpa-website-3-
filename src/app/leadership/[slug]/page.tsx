import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageFrame } from "@/components/PageFrame";
import { Notice } from "@/components/blocks";
import { ProfileCards } from "@/components/ProfileCards";
import { Icon, type IconName } from "@/components/Icon";
import { RequestForm } from "@/features/RequestForm";
import { requestForm } from "@/features/forms";
import { ECTable } from "@/features/ECTable";
import { ecAssociate, ecCorporate, ecDeclared } from "@/content/ec-2026-28";
import { cabinet, formerChairmen } from "@/content/people";
import { committees, publicVsConfidential } from "@/content/committees";
import { offices } from "@/content/site";
import { secretariatServices } from "@/content/membership";
import { RelatedDocs } from "@/components/RelatedDocs";
import { Avatar } from "@/components/ProfileCards";

const svcIcon: Record<string, IconName> = { membership: "users", meeting: "calendar", complaint: "megaphone", document: "doc", member: "shield", general: "mail" };

const pages: Record<string, { title: string; subtitle: string }> = {
  cabinet: { title: "Cabinet", subtitle: "Office bearers of the current term" },
  "executive-committee": { title: "Executive Committee", subtitle: "Members of the 2026-2028 term" },
  committees: { title: "Committees", subtitle: "Standing committees of the Association" },
  "former-chairmen": { title: "Former Chairmen", subtitle: "Chairmen recorded in PCPA documents" },
  secretariat: { title: "Secretariat", subtitle: "Offices, services and requests" },
};

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return { title: pages[slug]?.title ?? "Leadership" };
}

export default async function LeadershipPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const meta = pages[slug];
  if (!meta) notFound();

  return (
    <PageFrame title={meta.title} subtitle={meta.subtitle} section="leadership" current={`/leadership/${slug}`}>
      {slug === "cabinet" && (
        <>
          <h2 className="pc-sr">Cabinet</h2>
          <ProfileCards large label="Cabinet" items={cabinet.map((p) => ({ name: p.name, role: p.title, photo: p.image }))} />
        </>
      )}

      {slug === "executive-committee" && (
        <>
          <h2 className="pc-h2">Current term (2026-2028)</h2>
          <Notice>
            The 15 Corporate and 15 Associate class members below were declared elected unopposed on {ecDeclared}, as per the Trade Organizations Rules, 2013.
          </Notice>
          <ECTable
            groups={[
              { cls: "Corporate", rows: ecCorporate },
              { cls: "Associate", rows: ecAssociate },
            ]}
          />
        </>
      )}

      {slug === "committees" && (
        <>
          <p className="pc-lead">The standing committees of the Association and the work each one does.</p>
          <ProfileCards
            large
            label="Committees"
            items={committees.map((c) => ({
              name: c.name,
              icon: c.icon as IconName,
              lines: [c.purpose || "Members, Terms of Reference and meeting schedule will be published here."],
            }))}
          />
          <Notice>{publicVsConfidential}</Notice>
          <RelatedDocs title="Committee documents" ids={["DL-037"]} notes={{ "DL-037": "HR Committee form (MEM-05) used to record membership admission decisions" }} />
        </>
      )}

      {slug === "former-chairmen" && (
        <>
          <ProfileCards
            large
            label="Former chairmen"
            items={formerChairmen.map((c) => ({ name: c.name, role: `Chairman · ${c.term}`, photo: c.photo, lines: [c.org, c.source].filter(Boolean) }))}
          />
          <p className="pc-muted">Only chairmen recorded in PCPA documents are listed so far. Photos and earlier chairmen are added as the Secretariat supplies them.</p>
        </>
      )}

      {slug === "secretariat" && (
        <>
          <p className="pc-lead">The PCPA Secretariat runs the Association&apos;s day-to-day work from two offices. Call the person below or send a request.</p>
          <div className="pc-offices">
            {[offices.multan, offices.lahore].map((o) => (
              <section key={o.name} className="pc-office">
                <header className="pc-office-head">
                  <span className="pc-icon">
                    <Icon name="building" size={22} />
                  </span>
                  <div>
                    <h2 className="pc-h3">{o.name}</h2>
                    <p className="pc-muted">
                      <Icon name="pin" size={14} /> {o.address}
                    </p>
                  </div>
                </header>
                <ul className="pc-office-people">
                  {o.contacts.map((c) => (
                    <li key={c.name}>
                      <Avatar name={c.name} size={48} />
                      <div>
                        <strong>{c.name}</strong>
                        <span>{c.role}</span>
                      </div>
                      <a className="pc-btn pc-btn-outline pc-btn-sm" href={`tel:${c.phone.replace(/-/g, "")}`} aria-label={`Call ${c.name}`}>
                        <Icon name="phone" size={14} /> {c.phone}
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="pc-office-main">
                  <Icon name="phone" size={16} /> Office line <a href={`tel:${o.phone.replace(/-/g, "")}`}>{o.phone}</a>
                </p>
              </section>
            ))}
          </div>
          <h2 className="pc-h2">Secretariat services</h2>
          <ul className="pc-svc">
            {secretariatServices.map((s) => (
              <li key={s.key} className="pc-svc-tile">
                <span className="pc-icon">
                  <Icon name={svcIcon[s.key] ?? "check"} size={20} />
                </span>
                <strong>{s.title}</strong>
              </li>
            ))}
          </ul>
          <RequestForm config={requestForm()} />
          <p className="pc-muted">
            Prefer to complain or suggest? <Link className="pc-link" href="/complaints">Use the complaints form</Link>.
          </p>
        </>
      )}
    </PageFrame>
  );
}
