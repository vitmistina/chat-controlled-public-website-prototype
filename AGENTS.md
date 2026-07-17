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

## Importing a ZIP through the ChatGPT GitHub interface

This repository was initially populated from a ZIP attached to a ChatGPT conversation. The successful strategy was:

1. Attach the ZIP to the conversation and provide the exact GitHub repository URL, target branch and destination directory.
2. Inspect the archive before writing anything:
   - reject absolute paths and `..` path traversal;
   - preserve the archive's relative directory structure;
   - check for suspicious secrets such as `.env` files, private keys, tokens and credentials;
   - exclude generated or inappropriate content such as `node_modules`, build output and OS metadata.
3. Read the repository metadata and determine its default branch.
4. If the repository is completely empty, create a minimal bootstrap commit on the default branch. GitHub cannot create a normal pull request until a base commit exists.
5. Create a dedicated import branch from the default branch. Do not upload directly to `main`.
6. For a multi-file import, avoid GitHub's one-file-at-a-time contents API because it creates one commit per file. Instead:
   - create one Git blob for each file;
   - assemble directory trees from the deepest directories upward;
   - assemble the repository root tree;
   - create one commit referencing that tree and the branch's current parent commit;
   - update the import branch reference to the new commit.
7. Compare the import branch with the default branch and verify the expected file count, paths and commit count.
8. Open a draft pull request and describe:
   - what was imported;
   - what validation was performed;
   - what could not be validated locally;
   - which placeholder values or assets must be replaced before production.
9. Let GitHub Actions perform the reproducible install and build when the ChatGPT execution environment cannot reach the npm registry.

For later single-file edits, fetch the file from the intended branch first, retain its current blob SHA, then replace the complete file content using that SHA. This prevents overwriting a newer version and ensures the new commit lands on the existing pull-request branch.

The important pattern is: **inspect locally, write to a branch, construct one coherent commit, verify the diff, then open or update a draft pull request**.
