import Image from "next/image";
import { RelatedDocs } from "@/components/RelatedDocs";
import { documents } from "@/content/documents";

/**
 * A committee's announcement letter: preview/download row, then the letter itself on the page.
 * The picture is made from the published PDF (public/images/committees/<ref>.jpg), so phone numbers stay covered.
 */
export function CommitteeLetter({ id, title = "Announcement letter" }: { id: string; title?: string }) {
  const d = documents.find((x) => x.id === id);
  if (!d) return null;
  return (
    <div className="pc-letter">
      <RelatedDocs title={title} ids={[id]} notes={{ [id]: `Issued by the PCPA Secretariat · ${d.date}` }} />
      <a className="pc-letter-page" href={d.file} target="_blank" rel="noopener noreferrer" aria-label={`Open the PDF: ${d.title}`}>
        <Image src={`/images/committees/${id}.jpg`} alt={`Scanned letter: ${d.title}`} width={1000} height={1400} sizes="(max-width:760px) 92vw, 700px" />
      </a>
    </div>
  );
}
