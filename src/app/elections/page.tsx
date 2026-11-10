import type { Metadata } from "next";
import { PageFrame } from "@/components/PageFrame";
import { DocLink, Notice } from "@/components/blocks";
import { electionDocs, electionStages, previousElections } from "@/content/events";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = { title: "Elections" };

export default function ElectionsPage() {
  return (
    <PageFrame title="Elections" subtitle="Executive Committee 2026-2028" section="meetings" current="/elections">
      <h2 className="pc-h2">Election stages</h2>
      <ol className="pc-stepper pc-stepper-lg">
        {electionStages.map((s) => (
          <li key={s.label} className={s.done ? "done" : ""}>
            <span className="pc-dot">{s.done ? <Icon name="check" size={12} /> : ""}</span>
            <span>
              <strong>{s.label}</strong>
              <small>
                {s.status} · {s.date}
              </small>
            </span>
          </li>
        ))}
      </ol>

      <h2 className="pc-h2">Election documents</h2>
      <ul className="pc-doclist">
        {electionDocs.map((d) => (
          <DocLink key={d.title} title={d.title} file={d.file} status={d.status} />
        ))}
      </ul>

      <h2 className="pc-h2">Previous elections</h2>
      {previousElections.map((p) => (
        <section key={p.cycle} className="pc-card">
          <h3 className="pc-h3">{p.cycle}</h3>
          <ul className="pc-doclist">
            {p.docs.map((d) => (
              <DocLink key={d.file} title={d.title} file={d.file} />
            ))}
          </ul>
        </section>
      ))}
      <Notice>Documents that PCPA has not published online are marked “Not published online”.</Notice>
    </PageFrame>
  );
}
