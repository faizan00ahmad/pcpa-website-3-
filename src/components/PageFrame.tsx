import Link from "next/link";
import { sections } from "@/content/site";

/** Inner-page frame: large title, a sticky "local nav" for the section, and a centred content column. */
export function PageFrame({
  title,
  subtitle,
  section,
  current,
  children,
}: {
  title: string;
  subtitle?: string;
  section?: keyof typeof sections;
  current?: string;
  children: React.ReactNode;
}) {
  const sec = section ? sections[section] : undefined;
  return (
    <>
      <section className="pc-banner">
        <div className="pc-wrap">
          <div className="pc-banner-card">
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
