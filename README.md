# PCPA – Website 3 – Liquid Glass design

Pakistan Crop Protection Association website (Next.js 15, React 19, TypeScript, plain CSS). The same pages as the proposal in an Apple-style Liquid Glass look: a floating glass navigation pill, translucent blurred surfaces with specular edges over a soft green aurora, a structured hero / services / figures / leadership / dates / news / contact layout, and light/dark mode.

Subtle motion throughout (scroll reveals, count-up figures, hover lifts, hero entrance; all switched off for visitors who prefer reduced motion). ## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

Requires Node 20.9 or newer. Fonts are bundled, so no network access is needed to build.

## What is real and what is a placeholder

* Real PCPA data: offices and contacts, Cabinet and Executive Director, Executive Committee 2019-20 archive, election and AGM dates, the 39 documents and their PDFs, and the 77 Corporate members (company, class and city only) from the 2025-26 list.
* From the redesign proposal: the membership procedure (Route 1 / Route 2) and the fee schedule. **Confirm the fees with PCPA before relying on them.**
* Drafted from public information and **pending PCPA review**: About, Vision, Mission, Objectives, Governance and Affiliations wording.
* Photos: the Photo Gallery (Meetings > Photo Gallery) holds only photographs of PCPA meetings and events. Farm photos supplied for the redesign are used as hero and page-banner images and in a few pages. **Confirm usage rights for the farm photos before going public** (one carried a third-party watermark, which was cropped out; several were small web images and were enlarged, so original high-resolution files would look sharper). Gallery captions are brief descriptions; dates and occasions are to be updated.
* Shown as "to be updated": committee composition, meeting minutes and decisions, the Associate member directory (the PDF is linked), the 2026-28 Executive Committee list.

## Documents

* The Download Centre previews documents in the page (PDFs in the browser's own viewer, Word files rendered with `docx-preview`), with Open and Download buttons and previous/next.
* Documents marked `featured: true` in `src/content/documents.ts` are always listed first (the membership procedure forms and the Trade Organizations Act and Rules, 2013).
* The same documents also appear where they are needed, through the `RelatedDocs` block: Membership (overview, apply, procedure, fees, directory, renew), About > Governance, Leadership (committees, executive committee, former chairmen) and Elections.

## Front-end only (no server)

* Forms (membership application, renewal, complaints, suggestions, Secretariat requests, contact) validate, create a reference number such as `PCPA-CMP-2026-12345`, save it on the visitor's device and prepare an email to multanpcpa@gmail.com. Nothing is sent until the visitor sends the email.
* Track Status looks references up on the same device.
* Member Portal is a clearly labelled preview: it checks no password and shows no real member data.

## Structure

* `src/content/*` – all content (edit here).
* `src/features/*` – interactive features (download centre, directory, forms, tracker, meetings, portal).
* `src/components/*` – layout and shared blocks. `src/app/globals.css` – this design's styles.
