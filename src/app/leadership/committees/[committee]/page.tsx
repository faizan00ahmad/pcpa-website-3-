import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageFrame } from "@/components/PageFrame";
import { Notice } from "@/components/blocks";
import { Icon } from "@/components/Icon";
import { ProfileCards, type Profile } from "@/components/ProfileCards";
import { CommitteeLetter } from "@/components/CommitteeLetter";
import { committees, type CommitteeMember } from "@/content/committees";

type Props = { params: Promise<{ committee: string }> };

export function generateStaticParams() {
  return committees.map((c) => ({ committee: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { committee } = await params;
  return { title: committees.find((c) => c.slug === committee)?.name ?? "Committee" };
}

const profile = (m: CommitteeMember, role?: string): Profile => ({
  name: m.name,
  role,
  lines: [m.company, m.area].filter((x): x is string => Boolean(x)),
});

export default async function CommitteePage({ params }: Props) {
  const { committee } = await params;
  const c = committees.find((x) => x.slug === committee);
  if (!c) notFound();

  const leads = [...(c.convener ? [profile(c.convener, "Convener")] : []), ...(c.coConvener ? [profile(c.coConvener, "Co-Convener")] : [])];

  return (
    <PageFrame title={c.name} subtitle="Term 2026-28" section="leadership" current="/leadership/committees">
      <p>
        <Link href="/leadership/committees" className="pc-link pc-com-back">
          <Icon name="arrow" size={14} /> All committees
        </Link>
      </p>
      {c.purpose && <p className="pc-lead">{c.purpose}</p>}

      {leads.length > 0 ? (
        <>
          <h2 className="pc-h2">Leading the committee</h2>
          <ProfileCards large label="Conveners" items={leads} />
        </>
      ) : (
        <Notice>The convener and members of this committee will be published here.</Notice>
      )}

      {c.members.length > 0 && (
        <>
          <h2 className="pc-h2">
            Members <span className="pc-muted">({c.members.length})</span>
          </h2>
          <ProfileCards label="Members" items={c.members.map((m) => profile(m))} />
        </>
      )}
      {c.note && <Notice>{c.note}</Notice>}

      {c.doc && <CommitteeLetter id={c.doc} />}
    </PageFrame>
  );
}
