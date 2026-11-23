import type { Metadata } from "next";
import { PageFrame } from "@/components/PageFrame";
import { NewsCard } from "@/components/NewsCard";
import { news } from "@/content/news";

export const metadata: Metadata = { title: "News" };

export default function NewsPage() {
  return (
    <PageFrame banner="spraying" title="News" subtitle="Updates from PCPA and the sector">
      <div className="pc-ncards">
        {news.map((n) => (
          <NewsCard key={n.slug} n={n} excerpt />
        ))}
      </div>
    </PageFrame>
  );
}
