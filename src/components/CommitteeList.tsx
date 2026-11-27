import Link from "next/link";
import { Icon, type IconName } from "@/components/Icon";
import { Avatar, initialsOf } from "@/components/ProfileCards";
import { chiefCoordinator, committees, type Committee } from "@/content/committees";
import { documents } from "@/content/documents";
import { PreviewButton } from "@/features/PreviewButton";
import { withSizes } from "@/lib/docs";

/** One calm card per committee: its name and convener. The whole card opens the committee's own page. */
function Cards({ list, label }: { list: Committee[]; label: string }) {
  return (
    <ul className="pc-profs pc-profs-lg" aria-label={label}>
      {list.map((c) => (
        <li key={c.slug}>
          <Link href={`/leadership/committees/${c.slug}`} className="pc-prof pc-com-card">
            <Avatar name={c.name} icon={c.icon as IconName} size={80} />
            <div className="pc-prof-body">
              <h3 className="pc-prof-name">{c.name}</h3>
              <p className="pc-com-conv">
                <span>Convener</span>
                {c.convener?.name ?? "To be announced"}
              </p>
            </div>
            <span className="pc-com-go" aria-hidden>
              <Icon name="arrow" size={18} />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

type FeatureProps = {
  id: string;
  /** Pill at the top: the office or the committee name */
  tag: string;
  tagIcon: IconName;
  name: string;
  meta: { icon: IconName; text?: string }[];
  text?: string;
  /** Initials in the circle; without it the committee icon is shown */
  mark?: string;
  doc?: string;
  href?: string;
};

/** The large green card used for the Chief Coordinator and the three main committees. */
function Feature({ id, tag, tagIcon, name, meta, text, mark, doc, href }: FeatureProps) {
  const [d] = withSizes(documents.filter((x) => x.id === doc));
  return (
    <section className="pc-chief" aria-labelledby={id}>
      <span className="pc-chief-mark" aria-hidden>
        {mark ?? <Icon name={tagIcon} size={44} />}
      </span>
      <div className="pc-chief-body">
        <h3 id={id} className="pc-chief-tag">
          <Icon name={tagIcon} size={14} /> {tag}
        </h3>
        <p className="pc-chief-name">{name}</p>
        <ul className="pc-chief-meta">
          {meta
            .filter((m) => m.text)
            .map((m) => (
              <li key={m.text}>
                <Icon name={m.icon} size={16} /> {m.text}
              </li>
            ))}
        </ul>
        {text && <p className="pc-chief-text">{text}</p>}
        <div className="pc-chief-actions">
          {href && (
            <Link href={href} className="pc-chief-go" aria-label={`View ${tag}`}>
              View committee <Icon name="arrow" size={16} />
            </Link>
          )}
          {d && <PreviewButton title={d.title} file={d.file} category={d.category} date={d.date ?? d.year} size={d.size} />}
          {d && (
            <a className="pc-chief-dl" href={d.file} download aria-label={`Download ${d.title}`}>
              <Icon name="download" size={16} /> Letter
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export function CommitteeList() {
  const { person, text, doc } = chiefCoordinator;
  return (
    <>
      <Feature
        id="chief-coordinator"
        tag="Chief Coordinator · 2026-28"
        tagIcon="shield"
        name={person.name}
        mark={initialsOf(person.name)}
        meta={[
          { icon: "building", text: person.company },
          { icon: "pin", text: person.area },
        ]}
        text={text}
        doc={doc}
      />

      <h2 className="pc-h2">Main committees</h2>
      {committees
        .filter((c) => c.group === "main")
        .map((c) => (
          <Feature
            key={c.slug}
            id={`com-${c.slug}`}
            tag={c.name}
            tagIcon={c.icon as IconName}
            name={c.convener?.name ?? "Convener to be announced"}
            mark={c.convener && initialsOf(c.convener.name)}
            meta={[
              { icon: "users", text: c.convener ? "Convener" : undefined },
              { icon: "building", text: c.convener?.company },
            ]}
            doc={c.doc}
            href={`/leadership/committees/${c.slug}`}
          />
        ))}

      <h2 className="pc-h2">Other approved committees</h2>
      <Cards list={committees.filter((c) => c.group === "other")} label="Other approved committees" />
    </>
  );
}
