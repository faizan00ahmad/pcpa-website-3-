import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/Icon";
import { PageFrame } from "@/components/PageFrame";
import { news } from "@/content/news";

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return { title: news.find((n) => n.slug === slug)?.shortTitle ?? "News" };
}

export default async function NewsPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = news.find((n) => n.slug === slug);
  if (!post) notFound();
  return (
    <PageFrame banner="spraying" title={post.title} subtitle={`${post.published} · ${post.author}`}>
      <article className="pc-article">
        <Image src={post.image} alt="" width={1000} height={560} sizes="(max-width:900px) 100vw, 800px" priority />
        {post.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        {post.source && (
          <p className="pc-note">
            <Icon name="info" size={18} />
            <span>
              Summary prepared from the original report: {post.source.outlet}, &ldquo;{post.source.title}&rdquo;, {post.published}.{" "}
              <a className="pc-link" href={post.source.url} target="_blank" rel="noopener noreferrer">
                Read the full article <Icon name="external" size={14} />
              </a>
            </span>
          </p>
        )}
        <p className="pc-muted">Last updated {post.updated}</p>
        <Link className="pc-link" href="/news">
          ← All news
        </Link>
      </article>
    </PageFrame>
  );
}
