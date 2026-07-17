# Instructions for AI website editors

## Purpose

This repository contains a Czech public website for a construction company and showroom in Týniště nad Orlicí.

## Normal content changes

- Company details and opening hours belong in `src/data/company.ts`.
- New reference projects belong in `src/content/realizace/*.md`.
- Keep all public copy in Czech unless explicitly asked otherwise.
- Prefer editing content over changing layouts or shared components.
- Never invent reviews, certifications, years in business, customer names, prices or completed projects.
- Stock photos are allowed only in prototypes. Production references must use the company's own photos or images with documented usage rights.

## Technical constraints

- Keep the site statically generated.
- Do not add React, a database, authentication or server-side rendering without explicit approval.
- Do not add a contact form unless explicitly requested.
- Preserve semantic HTML, keyboard accessibility and responsive behavior.
- Preserve `LocalBusiness`, `Service`, `Article` and breadcrumb-friendly page structure.
- Do not create thin pages for every nearby town. Locality mentions must reflect real service coverage.

## Before opening a pull request

Run:

```bash
npm install
npm run build
```

Summarize changed facts separately from visual or structural changes.
