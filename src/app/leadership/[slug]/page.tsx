import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageFrame } from "@/components/PageFrame";
import { Notice, PersonCard, ToBeUpdated } from "@/components/blocks";
import { Icon, type IconName } from "@/components/Icon";
import { RequestForm } from "@/features/RequestForm";
import { requestForm } from "@/features/forms";
import { ECTable } from "@/features/ECTable";
import { ec201920, ecSubtitle, ecTitle } from "@/content/ec-2019-20";
import { cabinet, executiveDirector, formerChairmen } from "@/content/people";
import { committeeFields, committees, publicVsConfidential } from "@/content/committees";
import { offices } from "@/content/site";
import { secretariatServices } from "@/content/membership";

const pages: Record<string, { title: string; subtitle: string }> = {
  cabinet: { title: "Cabinet", subtitle: "Office bearers of the current term" },
  "executive-committee": { title: "Executive Committee", subtitle: "Current term and the 2019-20 archive" },
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
          <div className="pc-grid pc-grid-3 pc-people">
            {cabinet.map((p) => (
              <PersonCard key={p.name} p={p} />
            ))}
          </div>
          <h2 className="pc-h2">Executive Director</h2>
          <div className="pc-grid pc-grid-3 pc-people">
            <PersonCard p={executiveDirector} />
          </div>
        </>
      )}

      {slug === "executive-committee" && (
        <>
          <h2 className="pc-h2">Current term (2026-2028)</h2>
          <Notice>The full list of the newly elected Executive Committee will be published here once PCPA releases it — to be updated.</Notice>
          <h2 className="pc-h2">{ecTitle}</h2>
          <p className="pc-muted">{ecSubtitle}</p>
          <ECTable rows={ec201920} />
        </>
      )}

      {slug === "committees" && (
        <>
          <p className="pc-lead">Committee pages show composition, approved Terms of Reference and meeting schedules once PCPA publishes them.</p>
          <div className="pc-accordion">
            {committees.map((c) => (
              <details key={c.slug} className="pc-card pc-details">
                <summary>
                  <span className="pc-icon">
                    <Icon name={c.icon as IconName} size={20} />
                  </span>
                  <strong>{c.name}</strong>
                  <Icon name="chevron" size={18} />
                </summary>
                <div className="pc-details-body">
                  {c.purpose && <p>{c.purpose}</p>}
                  <dl className="pc-deflist">
                    {committeeFields.map((f) => (
                      <div key={f}>
                        <dt>{f}</dt>
                        <dd>To be updated</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </details>
            ))}
          </div>
          <Notice>{publicVsConfidential}</Notice>
        </>
      )}

      {slug === "former-chairmen" && (
        <>
          <div className="pc-table-wrap" tabIndex={0} role="region" aria-label="Table, scrollable">
            <table className="pc-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Term</th>
                  <th>Organisation</th>
                  <th>Source</th>
                </tr>
              </thead>
              <tbody>
                {formerChairmen.map((c) => (
                  <tr key={c.name}>
                    <td className="pc-strong">{c.name}</td>
                    <td>{c.term}</td>
                    <td>{c.org || "—"}</td>
                    <td>{c.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ToBeUpdated>Earlier chairmen will be added as the PCPA archive is digitised.</ToBeUpdated>
        </>
      )}

      {slug === "secretariat" && (
        <>
          <div className="pc-grid pc-grid-2">
            {[offices.multan, offices.lahore].map((o) => (
              <div key={o.name} className="pc-card">
                <h2 className="pc-h3">{o.name}</h2>
                <p className="pc-muted">{o.address}</p>
                <ul className="pc-list">
                  {o.contacts.map((c) => (
                    <li key={c.name}>
                      <strong>{c.name}</strong> — {c.role} · <a href={`tel:${c.phone.replace(/-/g, "")}`}>{c.phone}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <h2 className="pc-h2">Secretariat services</h2>
          <ul className="pc-checks pc-checks-2">
            {secretariatServices.map((s) => (
              <li key={s.key}>
                <Icon name="check" size={18} /> {s.title}
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
