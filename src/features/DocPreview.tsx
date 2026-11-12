"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Icon } from "@/components/Icon";
import type { DocItem } from "@/content/documents";

type Doc = DocItem & { size: string };

/**
 * Full-screen document viewer. PDFs open in the browser's own PDF viewer; Word files are rendered in the page
 * with docx-preview (loaded only when needed). Keyboard: Esc closes, left/right arrows move between documents.
 */
export function DocPreview({ doc, index, total, onClose, onStep }: { doc: Doc; index: number; total: number; onClose: () => void; onStep: (d: number) => void }) {
  const box = useRef<HTMLDivElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const docxHost = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"loading" | "ready" | "error">(doc.type === "DOCX" ? "loading" : "ready");

  // focus handling, body scroll lock and keys
  useEffect(() => {
    const prevFocus = document.activeElement as HTMLElement | null;
    closeBtn.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight" && !(e.target instanceof HTMLInputElement)) onStep(1);
      else if (e.key === "ArrowLeft" && !(e.target instanceof HTMLInputElement)) onStep(-1);
      else if (e.key === "Tab" && box.current) {
        const f = Array.from(box.current.querySelectorAll<HTMLElement>("button, a[href]"));
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      prevFocus?.focus?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Word files: fetch and render in the page
  useEffect(() => {
    if (doc.type !== "DOCX") {
      setState("ready");
      return;
    }
    let cancelled = false;
    setState("loading");
    (async () => {
      try {
        const [{ renderAsync }, res] = await Promise.all([import("docx-preview"), fetch(doc.file)]);
        if (!res.ok) throw new Error(String(res.status));
        const buf = await res.arrayBuffer();
        if (cancelled || !docxHost.current) return;
        docxHost.current.innerHTML = "";
        await renderAsync(buf, docxHost.current, undefined, { className: "pc-docx", inWrapper: true, ignoreWidth: false, ignoreHeight: true });
        if (!cancelled) setState("ready");
      } catch {
        if (!cancelled) setState("error");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [doc.file, doc.type]);

  const meta = [doc.category, doc.date ?? (doc.year || ""), doc.type + (doc.size ? ` · ${doc.size}` : "")].filter(Boolean).join("  ·  ");

  return createPortal(
    <div className="pc-pv" role="dialog" aria-modal="true" aria-label={`Preview: ${doc.title}`} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="pc-pv-panel" ref={box}>
        <header className="pc-pv-head">
          <div className="pc-pv-title">
            <strong>{doc.title}</strong>
            <span>
              {meta} · {index + 1} of {total}
            </span>
          </div>
          <div className="pc-pv-actions">
            <button type="button" className="pc-pv-btn" aria-label="Previous document" onClick={() => onStep(-1)} disabled={total < 2}>
              <Icon name="chevronRight" size={18} />
            </button>
            <button type="button" className="pc-pv-btn pc-pv-next" aria-label="Next document" onClick={() => onStep(1)} disabled={total < 2}>
              <Icon name="chevronRight" size={18} />
            </button>
            <a className="pc-pv-btn pc-pv-wide" href={doc.file} target="_blank" rel="noopener noreferrer">
              <Icon name="external" size={16} /> <span>Open</span>
            </a>
            <a className="pc-pv-btn pc-pv-wide pc-pv-primary" href={doc.file} download>
              <Icon name="download" size={16} /> <span>Download</span>
            </a>
            <button ref={closeBtn} type="button" className="pc-pv-btn" aria-label="Close preview" onClick={onClose}>
              <Icon name="close" size={18} />
            </button>
          </div>
        </header>

        <div className="pc-pv-body">
          {doc.type === "PDF" ? (
            <iframe key={doc.file} className="pc-pv-frame" src={`${doc.file}#view=FitH`} title={doc.title} />
          ) : (
            <div className="pc-pv-docx">
              {state === "loading" && <p className="pc-pv-msg">Loading preview…</p>}
              {state === "error" && <p className="pc-pv-msg">This Word file could not be previewed. Use Download to open it in Word.</p>}
              <div ref={docxHost} />
            </div>
          )}
        </div>

        {doc.type === "PDF" && (
          <p className="pc-pv-foot">
            Preview not showing (some phones open PDFs outside the page)? <a href={doc.file} target="_blank" rel="noopener noreferrer">Open the PDF</a>.
          </p>
        )}
      </div>
    </div>,
    document.body,
  );
}
