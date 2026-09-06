# AGENTS.md

Project overview for AI agents and developers working on this codebase.

## Project overview

A single-page personal portfolio for Saniya Saad (SQA Engineer / project
coordination). Everything lives on one route (`/`); a secondary `/resume`
route renders a longer, printable version of the same work history and
education data for recruiters who click "View Resume".

## Tech stack

- TanStack Start (React 19, TanStack Router v1, file-based routes in `src/routes`)
- Vite 7 + Tailwind CSS 4 (`@tailwindcss/vite`)
- Content Collections (`content-collections.ts`) for typed markdown content
- Netlify (`@netlify/vite-plugin-tanstack-start`) for deployment

## Directory structure

```
content/
  education/   # one markdown file per degree/program (schema in content-collections.ts)
  jobs/        # one markdown file per role
  projects/    # one markdown file per project
public/
  saniyaimg.jpeg  # profile photo
  saniya saad.pdf              # placeholder — replace with the real resume PDF
src/
  routes/
    index.tsx   # the entire one-page site: hero/about, skills, education,
                # projects, certifications, achievements, contact — all in one file
    resume.tsx  # standalone resume view, linked from the homepage's "View Resume" button
    __root.tsx  # document shell, page <head> metadata
  styles.css    # theme tokens (colors, fonts) + the "inspection ledger" utility classes
  lib/utils.ts  # `cn()` classname helper (still used if you reintroduce shared components)
```

## Content model

`content-collections.ts` defines three collections: `jobs`, `education`,
`projects`. Each is a directory of markdown files with frontmatter validated
by a Zod schema. `src/routes/index.tsx` and `src/routes/resume.tsx` both
import from the generated `content-collections` virtual module
(`allJobs`, `allEducations`, `allProjects`) — add a new role, degree, or
project by dropping a new markdown file in the matching `content/` folder;
no code changes needed.

Skills, certifications, and achievements are NOT content-collection backed —
they're short, static arrays defined directly at the top of
`src/routes/index.tsx` (`SKILLS`, `CERTIFICATIONS`, `ACHIEVEMENTS`). Keep
them there unless this list grows large enough to warrant its own
collection.

## Design system

Defined in `src/styles.css`:

- Colors are CSS variables (`--ink`, `--paper`, `--rust`, etc.) mapped into
  Tailwind's `@theme inline` block, so they're usable as
  `bg-ink`, `text-paper`, `border-rust`, etc.
- `font-display` (Fraunces) is for headlines; body/UI text stays in the
  default IBM Plex Mono set on `body`.
- `.stamp`, `.ledger-tick`, `.grain-overlay`, `.fade-up` are custom utility
  classes for the QA-ledger motifs (rotated stamp badge, checkmark list
  items, fixed grain overlay, staggered entrance animation). Reuse these
  rather than inventing new one-off effects when extending the page.

## Conventions

- No shadcn/Radix UI primitives are used — they were removed along with the
  original blog/projects/contact template routes when this was converted
  into a single-page site. Don't reintroduce `src/components/ui` unless a
  new page genuinely needs interactive primitives (dialogs, popovers, etc.).
- Section anchors (`#about`, `#skills`, `#education`, `#projects`,
  `#certifications`, `#achievements`, `#contact`) drive the sticky nav in
  `index.tsx` — keep the `NAV_LINKS` array and section `id`s in sync when
  adding or renaming sections.
- `public/resume.pdf` is a placeholder PDF (plain text page). Replace it with
  the real resume before this goes live; the download button expects that
  exact filename/path.
