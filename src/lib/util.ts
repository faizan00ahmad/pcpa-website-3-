/** Reference numbers like PCPA-CMP-2026-00124 (generated in the browser; no server needed). */
export function makeRef(prefix: string): string {
  const n = Math.floor(Math.random() * 90000) + 10000;
  return `PCPA-${prefix}-${new Date().getFullYear()}-${n}`;
}

/** localStorage helpers that never throw (private windows, blocked storage). */
export function readStore<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}
export function writeStore<T>(key: string, value: T) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {}
}

/** Build a mailto: link addressed to the Secretariat. */
export function mailto(subject: string, lines: string[], to = "multanpcpa@gmail.com") {
  const body = lines.filter(Boolean).join("\n");
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function formatSize(bytes: number): string {
  if (!bytes) return "";
  return bytes > 1_048_576 ? `${(bytes / 1_048_576).toFixed(1)} MB` : `${Math.max(1, Math.round(bytes / 1024))} KB`;
}
