import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { currentChairman, formerChairmen, type Chairman } from "@/content/people";

const ordinal = (n: number) => (n === 1 ? "1st" : n === 2 ? "2nd" : n === 3 ? "3rd" : `${n}th`);
const span = (c: { from: number; to: number }) => `${c.from} – ${c.to}`;

/** Which term this is for people who chaired more than once (counted from the earliest). */
function termNumbers(list: Chairman[]) {
  const asc = [...list].sort((a, b) => a.from - b.from);
  const seen: Record<string, number> = {};
  const out = new Map<Chairman, { n: number; total: number }>();
  const total: Record<string, number> = {};
  for (const c of asc) total[c.name] = (total[c.name] ?? 0) + 1;
  for (const c of asc) {
    seen[c.name] = (seen[c.name] ?? 0) + 1;
    out.set(c, { n: seen[c.name], total: total[c.name] });
  }
  return out;
}

const eras = [
  { label: "2020 – 2026", test: (c: Chairman) => c.from >= 2020 },
  { label: "2010 – 2019", test: (c: Chairman) => c.from >= 2010 && c.from < 2020 },
  { label: "2008 – 2009", test: (c: Chairman) => c.from < 2010 },
];

/** Current chairman featured on top, then every past chairman as a horizontal catalogue card, newest first, grouped by period. */
export function ChairmenCatalog() {
  const nums = termNumbers(formerChairmen);
  return (
    <div className="pc-chair">
      <section className="pc-chair-hero" aria-labelledby="chair-now">
        <div className="pc-chair-hero-photo">
          <Image src={currentChairman.image} alt={currentChairman.name} width={640} height={640} sizes="(max-width:700px) 80vw, 300px" priority />
        </div>
        <div className="pc-chair-hero-body">
          <span className="pc-chair-live">
            <i aria-hidden /> Current Chairman
          </span>
          <h2 id="chair-now" className="pc-chair-hero-name">
            {currentChairman.name}
          </h2>
          <p className="pc-chair-hero-term">Chairman, PCPA · {span(currentChairman.term)}</p>
          <Link href="/leadership/cabinet" className="pc-btn pc-btn-outline pc-btn-sm">
            Meet the Cabinet <Icon name="arrow" size={14} />
          </Link>
        </div>
      </section>

      <p className="pc-chair-intro">
        <strong>{formerChairmen.length} chairmen terms</strong> since 2008, from the first elected Chairman to today.
      </p>

      {eras.map((era) => {
        const list = formerChairmen.filter(era.test);
        if (!list.length) return null;
        return (
          <section key={era.label} className="pc-chair-era" aria-label={`Chairmen ${era.label}`}>
            <h2 className="pc-chair-era-h">
              <span>{era.label}</span>
              <small>
                {list.length} term{list.length === 1 ? "" : "s"}
              </small>
            </h2>
            <ul className="pc-chair-list">
              {list.map((c) => {
                const t = nums.get(c)!;
                return (
                  <li key={`${c.name}-${c.from}`} className="pc-chair-card">
                    <span className="pc-chair-photo">
                      <Image src={c.photo} alt={c.name} width={300} height={400} sizes="150px" />
                    </span>
                    <div className="pc-chair-body">
                      <p className="pc-chair-term">{span(c)}</p>
                      <h3 className="pc-chair-name">{c.name}</h3>
                      <p className="pc-chair-meta">
                        <span>Chairman</span>
                        {t.total > 1 && <span className="pc-chair-again">{ordinal(t.n)} term</span>}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
