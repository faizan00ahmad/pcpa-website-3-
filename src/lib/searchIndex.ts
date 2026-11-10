import { cabinet, executiveDirector } from "@/content/people";
import { directory } from "@/content/directory";
import { documents } from "@/content/documents";
import { ec201920 } from "@/content/ec-2019-20";
import { news } from "@/content/news";
import { nav } from "@/content/site";

export type SearchEntry = { title: string; href: string; kind: "Page" | "Document" | "Person" | "Member" | "News"; hint?: string; external?: boolean; text: string };

const entries: SearchEntry[] = [];
const seen = new Set<string>();
const add = (e: Omit<SearchEntry, "text"> & { extra?: string }) => {
  const key = `${e.kind}|${e.href}|${e.title}`;
  if (seen.has(key)) return;
  seen.add(key);
  const { extra, ...rest } = e;
  entries.push({ ...rest, text: `${e.title} ${e.hint ?? ""} ${extra ?? ""}`.toLowerCase() });
};

for (const n of nav) {
  add({ title: n.label, href: n.href, kind: "Page" });
  for (const c of n.children ?? []) add({ title: c.label, href: c.href, kind: "Page", hint: n.label });
}
for (const [title, href] of [
  ["Member Portal", "/portal"],
  ["Complaint / Suggestion", "/complaints"],
  ["Track Complaint Status", "/complaints/track"],
  ["Elections", "/elections"],
  ["Secretariat", "/leadership/secretariat"],
] as const) add({ title, href, kind: "Page" });

for (const d of documents) add({ title: d.title, href: d.file, kind: "Document", hint: `${d.category} · ${d.year}`, external: true, extra: d.type });
for (const p of [...cabinet, executiveDirector]) add({ title: p.name, href: "/leadership/cabinet", kind: "Person", hint: p.title });
for (const m of ec201920) add({ title: m.person, href: "/leadership/executive-committee", kind: "Person", hint: `${m.company} · ${m.designation} (2019-20)`, extra: m.area });
for (const m of directory) add({ title: m.company, href: "/membership/directory", kind: "Member", hint: `${m.cls} · ${m.city}` });
for (const n of news) add({ title: n.title, href: n.path, kind: "News", hint: n.published });

export function searchSite(query: string, limit = 12): SearchEntry[] {
  const tokens = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (!tokens.length) return [];
  const scored: { e: SearchEntry; s: number }[] = [];
  for (const e of entries) {
    if (!tokens.every((t) => e.text.includes(t))) continue;
    const title = e.title.toLowerCase();
    let s = 1;
    for (const t of tokens) s += title.startsWith(t) ? 4 : title.includes(t) ? 2 : 0;
    if (e.kind === "Page") s += 1;
    scored.push({ e, s });
  }
  return scored.sort((a, b) => b.s - a.s).slice(0, limit).map((x) => x.e);
}
