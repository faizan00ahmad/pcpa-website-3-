"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/content/site";
import { Icon } from "./Icon";
import { SearchTrigger } from "./SearchDialog";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState<string | null>(null);

  useEffect(() => {
    setOpen(false);
    setSub(null);
  }, [path]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [open]);

  const active = (href: string) => (href === "/" ? path === "/" : path === href || path.startsWith(href + "/"));

  return (
    <header className="pc-header">
      <a className="pc-skip" href="#main">
        Skip to content
      </a>
      <div className="pc-wrap pc-header-in">
        <Link href="/" className="pc-brand" aria-label="PCPA home">
          <Image src="/images/brand/favicon.png" alt="" width={30} height={30} priority />
          <strong>PCPA</strong>
        </Link>

        <nav className={`pc-nav${open ? " open" : ""}`} aria-label="Main">
          <ul className="pc-nav-in">
            {nav.map((item) => (
              <li key={item.href} className={`pc-nav-item${item.children ? " has-sub" : ""}${sub === item.label ? " expanded" : ""}`}>
                <div className="pc-nav-row">
                  <Link href={item.href} className={`pc-nav-link${active(item.href) ? " active" : ""}`} aria-current={active(item.href) ? "page" : undefined}>
                    {item.label}
                  </Link>
                  {item.children && (
                    <button type="button" className="pc-sub-toggle" aria-label={`${item.label} submenu`} aria-expanded={sub === item.label} onClick={() => setSub(sub === item.label ? null : item.label)}>
                      <Icon name="chevron" size={16} />
                    </button>
                  )}
                </div>
                {item.children && (
                  <ul className="pc-dropdown">
                    <li className="pc-dropdown-title" aria-hidden>
                      {item.label}
                    </li>
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link href={c.href} className={active(c.href) && c.href !== item.href ? "active" : ""}>
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="pc-nav-cta">
              <Link href="/membership/apply" className="pc-btn pc-btn-primary">
                Join PCPA
              </Link>
            </li>
          </ul>
        </nav>

        <div className="pc-brand-actions">
          <SearchTrigger className="pc-iconbtn" label="Search the site">
            <Icon name="search" size={18} />
          </SearchTrigger>
          <ThemeToggle />
          <Link href="/portal" className="pc-iconbtn pc-portal-icon" aria-label="Member Portal">
            <Icon name="user" size={18} />
          </Link>
          <Link href="/membership/apply" className="pc-btn pc-btn-primary pc-btn-sm pc-head-cta">
            Join PCPA
          </Link>
          <button type="button" className="pc-iconbtn pc-menu-btn" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            <Icon name={open ? "close" : "menu"} size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
