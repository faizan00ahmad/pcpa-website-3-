import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageFrame } from "@/components/PageFrame";
import { Notice, Steps } from "@/components/blocks";
import { Icon } from "@/components/Icon";
import { DownloadCentre } from "@/features/DownloadCentre";
import { Directory } from "@/features/Directory";
import { RequestForm } from "@/features/RequestForm";
import { applyForm, renewForm } from "@/features/forms";
import { directory } from "@/content/directory";
import { documents } from "@/content/documents";
import { fees, routes } from "@/content/membership";
import { withSizes } from "@/lib/docs";

const pages: Record<string, { title: string; subtitle: string }> = {
  apply: { title: "Apply for Membership", subtitle: "Start your application" },
  procedure: { title: "Membership Procedure", subtitle: "Two routes to membership" },
  fees: { title: "Membership Fees", subtitle: "Approved schedule" },
  forms: { title: "Forms & Documents", subtitle: "Printable forms and lists" },
  directory: { title: "Member Directory", subtitle: "Companies listed as PCPA members" },
  renew: { title: "Renew Membership", subtitle: "Renew for the current cycle" },
};

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return { title: pages[slug]?.title ?? "Membership" };
}

export default async function MembershipPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const meta = pages[slug];
  if (!meta) notFound();

  return (
    <PageFrame title={meta.title} subtitle={meta.subtitle} section="membership" current={`/membership/${slug}`}>
      {slug === "apply" && (
        <>
          <Notice>
            Not sure which route applies? Read the <Link className="pc-link" href="/membership/procedure">Membership Procedure</Link>. Download the printable form from{" "}
            <Link className="pc-link" href="/membership/forms">Forms &amp; Documents</Link>.
          </Notice>
          <RequestForm config={applyForm} />
        </>
      )}

      {slug === "procedure" && (
        <>
          {routes.map((r) => (
            <section key={r.id} className="pc-card">
              <h2 className="pc-h3">{r.title}</h2>
              <p className="pc-muted">{r.intro}</p>
              <Steps steps={r.steps} />
            </section>
          ))}
          <Notice>Pay the membership fee only after preliminary clearance of your application.</Notice>
        </>
      )}

      {slug === "fees" && (
        <>
          <div className="pc-table-wrap" tabIndex={0} role="region" aria-label="Table, scrollable">
            <table className="pc-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Fresh membership (Rs.)</th>
                  <th>Renewal (Rs.)</th>
                </tr>
              </thead>
              <tbody>
                {fees.rows.map((r) => (
                  <tr key={r.category}>
                    <td className="pc-strong">{r.category}</td>
                    <td>{r.fresh}</td>
                    <td>{r.renewal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="pc-checks">
            {fees.notes.map((n) => (
              <li key={n}>
                <Icon name="check" size={18} /> {n}
              </li>
            ))}
          </ul>
          <Notice>Please confirm the current fee with the Secretariat before paying — the schedule above follows the approved proposal and may change.</Notice>
        </>
      )}

      {slug === "forms" && <DownloadCentre docs={withSizes(documents)} initialCategory="Membership Forms" />}

      {slug === "directory" && (
        <>
          {directory.length === 0 ? (
            <Notice tone="alert">The searchable directory is being compiled from the official Corporate and Associate member lists. Meanwhile, open the PDFs below.</Notice>
          ) : (
            <>
              <Notice>Corporate members (2025-26 list) are searchable below. The Associate list is available as a PDF and will be added here — to be updated.</Notice>
              <Directory entries={directory} />
            </>
          )}
          <ul className="pc-linklist">
            <li>
              <a href="/docs/CORPORATE-MEMBERS-PCPA.pdf" target="_blank" rel="noopener noreferrer">
                <Icon name="pdf" size={18} /> Corporate Members PCPA (PDF)
              </a>
            </li>
            <li>
              <a href="/docs/ASSOCIATE-MEMBERS-PCPA.pdf" target="_blank" rel="noopener noreferrer">
                <Icon name="pdf" size={18} /> Associate Members PCPA (PDF)
              </a>
            </li>
          </ul>
        </>
      )}

      {slug === "renew" && <RequestForm config={renewForm} />}
    </PageFrame>
  );
}
