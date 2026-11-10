import type { Metadata } from "next";
import Link from "next/link";
import { PageFrame } from "@/components/PageFrame";
import { Notice, TileLink } from "@/components/blocks";
import { fees, services } from "@/content/membership";

export const metadata: Metadata = { title: "Membership" };

export default function MembershipHub() {
  return (
    <PageFrame title="Membership" subtitle="Join PCPA as a Corporate or Associate member" section="membership" current="/membership">
      <p className="pc-lead">PCPA welcomes crop protection companies. Choose a service below, or read the procedure first.</p>
      <div className="pc-grid pc-grid-3">
        {services.map((s) => (
          <TileLink key={s.href} {...s} />
        ))}
      </div>
      <h2 className="pc-h2">Fees at a glance</h2>
      <div className="pc-table-wrap" tabIndex={0} role="region" aria-label="Table, scrollable">
        <table className="pc-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Fresh (Rs.)</th>
              <th>Renewal (Rs.)</th>
            </tr>
          </thead>
          <tbody>
            {fees.rows.map((r) => (
              <tr key={r.category}>
                <td className="pc-strong">{r.category}</td>
                <td>{r.fresh}</td>
                <td>{r.renewal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Notice>
        See the <Link className="pc-link" href="/membership/fees">full fee schedule and notes</Link>.
      </Notice>
    </PageFrame>
  );
}
