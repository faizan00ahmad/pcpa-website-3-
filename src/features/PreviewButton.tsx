"use client";

import { useState } from "react";
import { Icon } from "@/components/Icon";
import type { DocItem } from "@/content/documents";
import { DocPreview } from "./DocPreview";

/** A small "Preview" control that opens one document in the in-page viewer. */
export function PreviewButton({ title, file, category = "", date, size = "", label = "Preview", iconOnly = false }: { title: string; file: string; category?: string; date?: string; size?: string; label?: string; iconOnly?: boolean }) {
  const [open, setOpen] = useState(false);
  if (!file) return null;
  const type = file.toLowerCase().endsWith(".docx") ? "DOCX" : "PDF";
  const doc: DocItem & { size: string } = { id: file, title, file, category, year: "", date, type, authority: "", size };
  return (
    <>
      <button type="button" className={iconOnly ? "pc-icon-link" : "pc-pv-chip"} aria-label={`Preview ${title}`} onClick={() => setOpen(true)}>
        <Icon name="eye" size={iconOnly ? 18 : 16} />
        {!iconOnly && <span>{label}</span>}
      </button>
      {open && <DocPreview doc={doc} index={0} total={1} onClose={() => setOpen(false)} onStep={() => {}} />}
    </>
  );
}
