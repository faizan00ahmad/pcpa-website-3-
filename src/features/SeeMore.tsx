"use client";

import { useState } from "react";
import { Icon } from "@/components/Icon";

/** Shows a blurred glimpse of the remaining content with a "See more" button; the hidden part cannot be clicked or tabbed into until opened. */
export function SeeMore({ count, children }: { count: number; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`pc-peek${open ? " open" : ""}`}>
      <div id="pc-peek-body" className="pc-peek-body" inert={!open}>
        {children}
      </div>
      <div className="pc-peek-bar">
        <button type="button" className="pc-btn pc-btn-outline pc-peek-btn" aria-expanded={open} aria-controls="pc-peek-body" onClick={() => setOpen((v) => !v)}>
          {open ? "See less" : `See more (${count})`} <Icon name="arrow" size={14} />
        </button>
      </div>
    </div>
  );
}
