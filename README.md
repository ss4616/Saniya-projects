# Saniya Saad — Portfolio

A single-page portfolio site for Saniya Saad, a Software Quality Assurance
Engineer with a focus on project coordination and delivery. The page covers
About, Skills, Education, Projects, Certifications, Achievements, and a
Get in Touch section with email and GitHub links, plus a headshot with
buttons to the resume and GitHub profile.

## Tech stack

- **TanStack Start** (React 19 + TanStack Router) for the app shell and routing
- **Vite 7** for the dev server and build
- **Tailwind CSS 4** for styling
- **Content Collections** for type-safe markdown (work history, education, projects)
- **Netlify** for hosting

## Design

An "inspection ledger" aesthetic: an ink-charcoal background with a faint
blueprint grid, warm paper/cream text, and a single rust-amber accent used
for stamps, checkmarks, and CTAs. Headings use Fraunces (serif), body/labels
use IBM Plex Mono, echoing test-report tickets and QA sign-off stamps.

## Project structure

- `src/routes/index.tsx` — the one-page site (all sections)
- `src/routes/resume.tsx` — a printable/linkable full resume view, reachable
  from the "View Resume" button
- `content/jobs`, `content/education`, `content/projects` — markdown content
  rendered on both the homepage and the resume page
- `public/resume.pdf` — placeholder resume file; replace with a real PDF
- `public/headshot-on-white.jpg` — profile photo used in the hero and resume

## Running locally

```bash
npm install
npm run dev
```

The dev server runs on port 3000 by default (see `netlify.toml`).

## Build

```bash
npm run build
```
