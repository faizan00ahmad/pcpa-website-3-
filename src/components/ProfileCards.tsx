import Image from "next/image";
import { Icon, type IconName } from "@/components/Icon";

export type Profile = {
  name: string;
  /** Position or class shown as a pill under the name */
  role?: string;
  /** One or two plain lines under the role (company, term, description…) */
  lines?: string[];
  /** Portrait. Without one, the card shows initials (or `icon`) until a photo is supplied. */
  photo?: string;
  icon?: IconName;
};

export const initialsOf = (name: string) =>
  name
    .replace(/\(.*?\)/g, "")
    .split(/\s+/)
    .filter((w) => /^[A-Za-z]/.test(w) && !/^(mr|mrs|ms|dr|m|sh|muhammad)\.?$/i.test(w))
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("") || name.slice(0, 1).toUpperCase();

export function Avatar({ name, photo, icon, size = 96 }: { name: string; photo?: string; icon?: IconName; size?: number }) {
  return (
    <span className="pc-prof-photo" style={{ width: size, height: size }} aria-hidden={photo ? undefined : true}>
      {photo ? (
        <Image src={photo} alt={name} width={size * 2} height={size * 2} sizes={`${size}px`} />
      ) : icon ? (
        <Icon name={icon} size={Math.round(size * 0.38)} />
      ) : (
        <b>{initialsOf(name)}</b>
      )}
    </span>
  );
}

/** Horizontal catalogue of profile cards: photo on the left, name and details on the right. One layout for every leadership page. */
export function ProfileCards({ items, large = false, label }: { items: Profile[]; large?: boolean; label?: string }) {
  return (
    <ul className={`pc-profs${large ? " pc-profs-lg" : ""}`} aria-label={label}>
      {items.map((p) => (
        <li key={p.name} className="pc-prof">
          <Avatar name={p.name} photo={p.photo} icon={p.icon} size={large ? 112 : 88} />
          <div className="pc-prof-body">
            <h3 className="pc-prof-name">{p.name}</h3>
            {p.role && <span className="pc-prof-role">{p.role}</span>}
            {p.lines?.map((l) => (
              <p key={l} className="pc-prof-line">
                {l}
              </p>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}
