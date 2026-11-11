/** Re-mounts on every navigation, which restarts the soft page fade-in (see motion.css). */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="pc-page">{children}</div>;
}
