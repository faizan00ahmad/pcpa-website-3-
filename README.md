# PCPA – Website 3 – Apple-style design

Pakistan Crop Protection Association website (Next.js 15, React 19, TypeScript, plain CSS). The same pages as the proposal, in an Apple-style look: translucent navigation with large menu panels, big type, bento tiles, scroll reveals, and light/dark mode.

An opening logo film plays once per browser session on the home page (Skip button / Esc to skip; skipped for reduced-motion visitors).

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

Requires Node 20.9 or newer. Fonts are bundled, so no network access is needed to build.

## What is real and what is a placeholder

* Real PCPA data: offices and contacts, Cabinet and Executive Director, Executive Committee 2019-20 archive, election and AGM dates, the 31 documents and their PDFs, and the 77 Corporate members (company, class and city only) from the 2025-26 list.
* From the redesign proposal: the membership procedure (Route 1 / Route 2) and the fee schedule. **Confirm the fees with PCPA before relying on them.**
* Drafted from public information and **pending PCPA review**: About, Vision, Mission, Objectives, Governance and Affiliations wording.
* Shown as "to be updated": committee composition, meeting minutes and decisions, the Associate member directory (the PDF is linked), the 2026-28 Executive Committee list.

## Front-end only (no server)

* Forms (membership application, renewal, complaints, suggestions, Secretariat requests, contact) validate, create a reference number such as `PCPA-CMP-2026-12345`, save it on the visitor's device and prepare an email to multanpcpa@gmail.com. Nothing is sent until the visitor sends the email.
* Track Status looks references up on the same device.
* Member Portal is a clearly labelled preview: it checks no password and shows no real member data.

## Structure

* `src/content/*` – all content (edit here).
* `src/features/*` – interactive features (download centre, directory, forms, tracker, meetings, portal).
* `src/components/*` – layout and shared blocks. `src/app/globals.css` – this design's styles.
