import type { SVGProps } from "react";

export type IconName =
  | "users" | "user" | "building" | "calendar" | "file" | "download" | "rs" | "steps" | "shield" | "leaf" | "doc"
  | "monitor" | "scale" | "stack" | "renew" | "form" | "chat" | "search" | "chevron" | "chevronRight" | "arrow"
  | "check" | "mail" | "phone" | "pin" | "external" | "megaphone" | "clock" | "lock" | "logout" | "bell"
  | "facebook" | "twitter" | "instagram" | "youtube" | "menu" | "close" | "pdf" | "info" | "sprout" | "award" | "vote";

const paths: Record<IconName, React.ReactNode> = {
  users: (<><circle cx="9" cy="8" r="3.2" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16 5.2a3.2 3.2 0 0 1 0 5.6M18 14.3c1.8.8 3 2.6 3 4.7" /></>),
  user: (<><circle cx="12" cy="8" r="3.6" /><path d="M4.5 20c0-4 3.4-7 7.5-7s7.5 3 7.5 7" /></>),
  building: (<><path d="M4 21V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v17M14 9h5a1 1 0 0 1 1 1v11M2 21h20M8 7h2M8 11h2M8 15h2M17 13h1M17 17h1" /></>),
  calendar: (<><rect x="3.5" y="5" width="17" height="15.5" rx="2" /><path d="M3.5 10h17M8 3v4M16 3v4" /></>),
  file: (<><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5M9 13h6M9 17h4" /></>),
  pdf: (<><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5" /></>),
  download: (<><path d="M12 4v11M7 11l5 5 5-5M5 20h14" /></>),
  rs: (<><path d="M7 5h6a3.5 3.5 0 0 1 0 7H7M7 5v14M7 12h4l5 7M5 8.5h8" /></>),
  steps: (<><circle cx="6" cy="6" r="2.2" /><circle cx="18" cy="12" r="2.2" /><circle cx="6" cy="18" r="2.2" /><path d="M8 6h4a3 3 0 0 1 3 3v1M8 18h4a3 3 0 0 0 3-3v-1" /></>),
  shield: (<><path d="M12 3l7 3v5c0 4.6-3 8.3-7 10-4-1.700-7-5.400-7-10V6z" /><path d="M9 12l2.200 2.200L15.500 10" /></>),
  leaf: (<><path d="M5 19C5 10 10 5 20 4c0 10-5 15-14 15zM5 19l8-8" /></>),
  doc: (<><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 8h6M9 12h6M9 16h3" /></>),
  monitor: (<><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></>),
  scale: (<><path d="M12 4v16M7 20h10M5 8h14M5 8l-2.500 6a3 3 0 0 0 5 0zM19 8l-2.500 6a3 3 0 0 0 5 0z" /></>),
  stack: (<><path d="M12 3l9 5-9 5-9-5zM3 13l9 5 9-5M3 17.500l9 5 9-5" /></>),
  renew: (<><path d="M20 11a8 8 0 0 0-14-4.500L4 9M4 4v5h5M4 13a8 8 0 0 0 14 4.500L20 15M20 20v-5h-5" /></>),
  form: (<><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5M8.500 13h7M8.500 17h7" /></>),
  chat: (<><path d="M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-9l-5 4v-4H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" /></>),
  search: (<><circle cx="11" cy="11" r="6.500" /><path d="M16 16l4.500 4.500" /></>),
  chevron: (<path d="M6 9l6 6 6-6" />),
  chevronRight: (<path d="M9 6l6 6-6 6" />),
  arrow: (<path d="M5 12h14M13 6l6 6-6 6" />),
  check: (<path d="M5 12.500l4.500 4.500L19 7.500" />),
  mail: (<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>),
  phone: (<path d="M5 4h4l2 5-2.500 1.500a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />),
  pin: (<><path d="M12 21s7-6.200 7-11.500A7 7 0 0 0 5 9.500C5 14.800 12 21 12 21z" /><circle cx="12" cy="9.500" r="2.500" /></>),
  external: (<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />),
  megaphone: (<><path d="M3 10v4a1 1 0 0 0 1 1h3l8 4V5L7 9H4a1 1 0 0 0-1 1zM18.500 9a4 4 0 0 1 0 6" /></>),
  clock: (<><circle cx="12" cy="12" r="8.500" /><path d="M12 7.500V12l3 2" /></>),
  lock: (<><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></>),
  logout: (<path d="M10 4H6a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h4M15 8l4 4-4 4M19 12H9" />),
  bell: (<path d="M6 17V11a6 6 0 0 1 12 0v6l1.500 2H4.500zM10 21h4" />),
  menu: (<path d="M4 7h16M4 12h16M4 17h16" />),
  close: (<path d="M6 6l12 12M18 6L6 18" />),
  info: (<><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></>),
  sprout: (<path d="M12 21v-9M12 12C12 8 9 5 4 5c0 4 3 7 8 7zM12 14c0-3 2.500-6 8-6 0 4-3 6-8 6z" />),
  award: (<><circle cx="12" cy="9" r="5.500" /><path d="M8.500 14L7 21l5-3 5 3-1.500-7" /></>),
  vote: (<><path d="M4 14h16l-1.500 6h-13zM9 14l-2-6 6-4 4 6-2 4" /></>),
  facebook: (<path d="M14 8V6.500c0-.7.3-1 1-1h2V2h-2.800C11.500 2 10 3.600 10 6v2H7.500v3.500H10V22h4V11.500h2.700L17 8z" fill="currentColor" stroke="none" />),
  twitter: (<path d="M17.500 3h3.200l-7 8 8.200 10.900h-6.400l-5-6.500L4.700 21H1.500l7.500-8.600L1.100 3h6.500l4.500 6zm-1.100 16.900h1.800L7.700 4.900H5.800z" fill="currentColor" stroke="none" />),
  instagram: (<><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.200" cy="6.800" r="1" fill="currentColor" /></>),
  youtube: (<path d="M21.600 7.200a2.500 2.500 0 0 0-1.800-1.800C18.200 5 12 5 12 5s-6.200 0-7.800.4A2.500 2.500 0 0 0 2.400 7.200C2 8.800 2 12 2 12s0 3.200.4 4.800a2.500 2.500 0 0 0 1.800 1.800C5.800 19 12 19 12 19s6.200 0 7.800-.4a2.500 2.500 0 0 0 1.800-1.800C22 15.200 22 12 22 12s0-3.200-.4-4.800zM10 15V9l5.200 3z" fill="currentColor" stroke="none" />),
};

export function Icon({ name, size = 20, ...rest }: { name: IconName; size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}
