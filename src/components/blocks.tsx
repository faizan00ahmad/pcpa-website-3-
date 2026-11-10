import Image from "next/image";
import Link from "next/link";
import { Icon, type IconName } from "./Icon";
import type { Person } from "@/content/people";

/** Reusable, skin-agnostic content blocks. Each skin styles the pc-* classes. */

export function Steps({ steps }: { steps: { title: string; note: string }[] }) {
  return (
    <ol className="pc-steps">
      {steps.map((s, i) => (
        <li key={s.title}>
          <span className="pc-step-n">{i + 1}</span>
          <span>
            <strong>{s.title}</strong>
            <small>{s.note}</small>
          </span>
        </li>
      ))}
    </ol>
  );
}

export function TileLink({ title, text, href, icon }: { title: string; text: string; href: string; icon: string }) {
  return (
    <Link href={href} className="pc-card pc-tile">
      <span className="pc-icon">
        <Icon name={icon as IconName} size={22} />
      </span>
      <strong>{title}</strong>
      <span className="pc-muted">{text}</span>
      <span className="pc-more" aria-hidden>
        <Icon name="arrow" size={16} />
      </span>
    </Link>
  );
}

export function InfoCard({ title, text, icon }: { title: string; text: string; icon?: string }) {
  return (
    <div className="pc-card">
      {icon && (
        <span className="pc-icon">
          <Icon name={icon as IconName} size={22} />
        </span>
      )}
      <h3 className="pc-h4">{title}</h3>
      <p className="pc-muted">{text}</p>
    </div>
  );
}

export function PersonCard({ p, large = false }: { p: Person; large?: boolean }) {
  return (
    <article className={`pc-card pc-person${large ? " pc-person-lg" : ""}`}>
      <div className="pc-person-photo">
        <Image src={p.image} alt={p.name} width={320} height={320} sizes="(max-width:700px) 50vw, 240px" />
      </div>
      <h3>{p.name}</h3>
      <p>{p.title}</p>
    </article>
  );
}

export function ToBeUpdated({ children = "Content to be updated by the PCPA Secretariat." }: { children?: React.ReactNode }) {
  return (
    <div className="pc-empty">
      <Icon name="clock" size={24} />
      <p>{children}</p>
    </div>
  );
}

export function Notice({ children, tone = "info" }: { children: React.ReactNode; tone?: "info" | "alert" }) {
  return (
    <p className={tone === "alert" ? "pc-alert" : "pc-note"}>
      <Icon name="info" size={18} /> <span>{children}</span>
    </p>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="pc-stat">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

export function DocLink({ title, file, status }: { title: string; file: string; status?: string }) {
  return (
    <li className="pc-doclink">
      <Icon name="pdf" size={20} />
      {file ? (
        <a href={file} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      ) : (
        <span>{title}</span>
      )}
      {status && <span className={`pc-badge ${file ? "pc-badge-ok" : "pc-badge-muted"}`}>{status}</span>}
    </li>
  );
}
