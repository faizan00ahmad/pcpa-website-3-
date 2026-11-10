import { statSync } from "node:fs";
import path from "node:path";
import { formatSize } from "./util";
import type { DocItem } from "@/content/documents";

/** Server-side: attach real file sizes (read from /public) to the document list. */
export function withSizes(docs: DocItem[]) {
  return docs.map((d) => {
    let size = "";
    try {
      size = formatSize(statSync(path.join(process.cwd(), "public", d.file)).size);
    } catch {}
    return { ...d, size };
  });
}
