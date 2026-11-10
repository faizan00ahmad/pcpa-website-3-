import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageFrame } from "@/components/PageFrame";
import { news } from "@/content/news";

export const metadata: Metadata = { title: "News" };

export default function NewsPage() {
  return (
    <PageFrame title="News" subtitle="Updates from PCPA and the sector">
      <div className="pc-grid pc-grid-2">
        {news.map((n) => (
          <Link key={n.slug} href={n.path} className="pc-card pc-news">
            <Image src={n.image} alt="" width={640} height={360} sizes="(max-width:800px) 100vw, 400px" />
            <div>
              <time className="pc-muted">{n.published}</time>
              <h2 className="pc-h4">{n.title}</h2>
              <p className="pc-muted">{n.paragraphs[0].slice(0, 140)}…</p>
            </div>
          </Link>
        ))}
      </div>
    </PageFrame>
  );
}
