import { Icon } from "@/components/Icon";
import { documents } from "@/content/documents";
import { PreviewButton } from "@/features/PreviewButton";
import { withSizes } from "@/lib/docs";

/**
 * "Related documents" block for any page. Pass the Download Centre reference numbers (for example "DL-032");
 * each row gets the file name, a one-line note, an in-page preview and a download link.
 * Server component: it reads the real file sizes, so the numbers stay correct when files are replaced.
 */
export function RelatedDocs({ ids, title = "Related documents", intro, notes = {}, headingClass = "pc-h2" }: { ids: string[]; title?: string; intro?: string; notes?: Record<string, string>; headingClass?: string }) {
  const docs = withSizes(ids.map((id) => documents.find((d) => d.id === id)).filter((d): d is (typeof documents)[number] => Boolean(d)));
  if (!docs.length) return null;
  return (
    <section className="pc-reldocs">
      <h2 className={headingClass}>{title}</h2>
      {intro && <p className="pc-muted">{intro}</p>}
      <ul className="pc-doclist">
        {docs.map((d) => (
          <li key={d.id} className="pc-doclink pc-reldoc">
            <Icon name={d.type === "DOCX" ? "doc" : "pdf"} size={22} />
            <div className="pc-reldoc-text">
              <a href={d.file} target="_blank" rel="noopener noreferrer">
                {d.title}
              </a>
              <small>{notes[d.id] ?? [d.category, d.date ?? d.year].filter(Boolean).join(" · ")}</small>
            </div>
            <span className="pc-reldoc-meta">
              {d.type}
              {d.size ? ` · ${d.size}` : ""}
            </span>
            <div className="pc-reldoc-actions">
              <PreviewButton title={d.title} file={d.file} category={d.category} date={d.date ?? d.year} size={d.size} />
              <a className="pc-icon-link" href={d.file} download aria-label={`Download ${d.title}`}>
                <Icon name="download" size={18} />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
