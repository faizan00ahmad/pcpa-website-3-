import type { Metadata } from "next";
import Link from "next/link";
import { PageFrame } from "@/components/PageFrame";
import { MeetingsCentre } from "@/features/MeetingsCentre";
import { keyDates, meetings } from "@/content/events";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = { title: "Meetings & Decisions" };

export default function MeetingsPage() {
  return (
    <PageFrame title="Meetings & Decisions" subtitle="Notices, minutes and approved decisions" section="meetings" current="/meetings">
      <h2 className="pc-h2">Key dates</h2>
      <ol className="pc-timeline">
        {keyDates.map((k) => (
          <li key={k.sort}>
            <time dateTime={k.sort}>{k.date}</time>
            <div>
              <strong>{k.href ? <Link href={k.href}>{k.title}</Link> : k.title}</strong>
              {k.note && <p className="pc-muted">{k.note}</p>}
            </div>
          </li>
        ))}
      </ol>
      <h2 className="pc-h2">Meetings register</h2>
      <MeetingsCentre rows={meetings} />
      <p className="pc-muted">
        <Icon name="vote" size={16} /> Looking for election documents? See <Link className="pc-link" href="/elections">Elections</Link>.
      </p>
    </PageFrame>
  );
}
