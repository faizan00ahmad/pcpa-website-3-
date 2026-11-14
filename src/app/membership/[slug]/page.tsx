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
import { RelatedDocs } from "@/components/RelatedDocs";

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
          <RelatedDocs
            title="Printable forms and supporting documents"
            intro="Prefer paper, or need the forms for your records? Preview or download them here."
            ids={["DL-032", "DL-033", "DL-035"]}
            notes={{
              "DL-032": "Complete after Coordinator and Chief Coordinator verification",
              "DL-033": "Application together with the authority letter",
              "DL-035": "One signed undertaking for each applicant company",
            }}
          />
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
          <RelatedDocs
            title="Forms used in the procedure"
            intro="The formats used at each stage of processing a membership application."
            ids={["DL-034", "DL-032", "DL-033", "DL-036", "DL-037", "DL-035"]}
            notes={{
              "DL-034": "MEM-01 and MEM-02 · Joint sheet for the Regional Coordinator and Chief Coordinator",
              "DL-032": "Filed after Coordinator and Chief Coordinator verification",
              "DL-033": "Application together with the authority letter",
              "DL-036": "MEM-03 and MEM-04 · Secretary General records documents received; Finance verification",
              "DL-037": "MEM-05 · Membership admission decision record",
              "DL-035": "One signed undertaking for each applicant company",
            }}
          />
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
              <Notice>Corporate members (2025-26 list) are searchable below. The Associate members list is available as a PDF below.</Notice>
              <Directory entries={directory} />
            </>
          )}
          <RelatedDocs title="Official member lists" ids={["DL-007", "DL-008"]} headingClass="pc-h3" />
        </>
      )}

      {slug === "renew" && (
        <>
          <RequestForm config={renewForm} />
          <RelatedDocs title="Forms for the membership file" ids={["DL-032", "DL-033", "DL-035"]} />
        </>
      )}
    </PageFrame>
  );
}
