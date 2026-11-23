import Image from "next/image";
import { Icon } from "@/components/Icon";
import type { Person } from "@/content/people";

/** Horizontal cabinet cards: portrait photo, name and position, then the member's company, address and website. */
export function CabinetCards({ people }: { people: Person[] }) {
  return (
    <ul className="pc-cab" aria-label="Cabinet">
      {people.map((p, i) => (
        <li key={p.name} className="pc-cab-card">
          <span className="pc-cab-photo">
            <Image src={p.image} alt={p.name} width={320} height={420} sizes="(max-width:700px) 110px, 150px" priority={i < 2} />
          </span>
          <div className="pc-cab-body">
            <span className="pc-cab-role">{p.title}</span>
            <h3 className="pc-cab-name">{p.name}</h3>
            <ul className="pc-cab-info">
              {p.org && (
                <li>
                  <Icon name="building" size={16} /> <span>{p.org}</span>
                </li>
              )}
              {p.address && (
                <li>
                  <Icon name="pin" size={16} /> <span>{p.address}</span>
                </li>
              )}
              {p.web && (
                <li>
                  <Icon name="external" size={16} />
                  <a href={`https://${p.web}`} target="_blank" rel="noopener noreferrer">
                    {p.web}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
}
