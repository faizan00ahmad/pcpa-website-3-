import Link from "next/link";
import { PageFrame } from "@/components/PageFrame";

export default function NotFound() {
  return (
    <PageFrame title="Page not found" subtitle="The page you are looking for does not exist">
      <p className="pc-lead">Check the address, or return to a main section.</p>
      <div className="pc-actions">
        <Link className="pc-btn pc-btn-primary" href="/">
          Go to the home page
        </Link>
        <Link className="pc-btn pc-btn-outline" href="/downloads">
          Download Centre
        </Link>
      </div>
    </PageFrame>
  );
}
