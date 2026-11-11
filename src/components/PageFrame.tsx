import Image from "next/image";
import Link from "next/link";
import { bannerFor, type BannerKey } from "@/content/banners";
import { sections } from "@/content/site";

/** Inner-page frame: large title, a sticky "local nav" for the section, and a centred content column. */
export function PageFrame({
  title,
  subtitle,
  section,
  current,
  banner,
  children,
}: {
  title: string;
  subtitle?: string;
  section?: keyof typeof sections;
  current?: string;
  banner?: BannerKey;
  children: React.ReactNode;
}) {
  const sec = section ? sections[section] : undefined;
  const b = bannerFor({ banner, section, current });
  return (
    <>
      <section className="pc-banner">
        <div className="pc-wrap">
          <div className="pc-banner-card">
            <Image src={b.src} alt="" fill priority sizes="(max-width:1300px) 100vw, 1180px" className="pc-banner-img" style={{ objectPosition: b.pos }} />
            <div className="pc-banner-shade" aria-hidden />
            <p className="pc-eyebrow">{sec ? <Link href={sec.items[0].href}>{sec.title}</Link> : <Link href="/">PCPA</Link>}</p>
            <h1>{title}</h1>
            {subtitle && <p className="pc-banner-sub">{subtitle}</p>}
          </div>
        </div>
      </section>
      {sec && (
        <nav className="pc-localnav" aria-label={sec.title}>
          <div className="pc-wrap">
            <div className="pc-localnav-in">
            {sec.items.map((i) => (
              <Link key={i.href} href={i.href} className={i.href === current ? "active" : ""} aria-current={i.href === current ? "page" : undefined}>
                {i.label}
              </Link>
            ))}
            </div>
          </div>
        </nav>
      )}
      <div className="pc-wrap pc-inner">
        <div className="pc-content">{children}</div>
      </div>
    </>
  );
}
