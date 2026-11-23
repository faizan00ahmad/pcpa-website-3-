import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import type { NewsPost } from "@/content/news";

/** News card: photo with a topic chip (and a headline figure when the story has one), then date, title and optional excerpt. */
export function NewsCard({ n, excerpt = false }: { n: NewsPost; excerpt?: boolean }) {
  return (
    <Link href={n.path} className="pc-ncard">
      <span className="pc-ncard-media">
        <Image src={n.image} alt="" fill sizes="(max-width:760px) 50vw, 300px" />
        <span className="pc-ncard-scrim" aria-hidden />
        {n.tag && <span className="pc-ncard-tag">{n.tag}</span>}
        {n.stat && <span className="pc-ncard-stat">{n.stat}</span>}
      </span>
      <span className="pc-ncard-body">
        <time className="pc-ncard-date">
          {n.published}
          {n.source ? ` · ${n.source.outlet}` : ""}
        </time>
        <h3 className="pc-ncard-title">{n.title}</h3>
        {excerpt && <p className="pc-ncard-excerpt">{n.paragraphs[0].slice(0, 130)}…</p>}
        <span className="pc-ncard-more">
          Read more <Icon name="arrow" size={14} />
        </span>
      </span>
    </Link>
  );
}
