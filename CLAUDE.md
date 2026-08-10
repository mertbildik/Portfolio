# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Vite dev server on port 5137, host 0.0.0.0 (polling watcher, for WSL)
npm run build      # production build to dist/
npm run preview    # serve the built output
npm run typecheck  # tsc --noEmit
```

There is no test framework, no linter, and no test script in this repo. `npm run typecheck` plus `npm run build` is the full check, and both are currently clean.

## Stack

Vite 6, React 19, TypeScript, Tailwind 3.4, framer-motion, react-router-dom 6, lucide-react. That is the whole dependency list — keep it that way.

## Routing

The app uses **HashRouter**, so real URLs are `http://localhost:5137/#/portfolio`. Navigating to `/portfolio` without the `#` silently renders the home page instead of the route you asked for — this matters when testing in a browser or automating one.

`src/App.tsx` holds both the route table and the layout logic, and the layout is decided by pathname rather than by nesting:

- `/cv` short-circuits the entire shell and renders `CV` alone (it is a printable document).
- Any path under `/portfolio/` deeper than `/portfolio` counts as a "detail page" and hides the global `Navigation`, because those pages carry their own sidebar/TOC.
- Home, Portfolio, Process, About and Contact opt out of the shared `max-w` + padding wrapper and lay themselves out; everything else gets the wrapper.

All pages are lazy-loaded and wrapped in `AnimatePresence` keyed on pathname for page transitions. `GlobalBackground` is a fixed dotted layer behind everything; its `inset-[-50%] w-[200%]` layers are intentionally larger than the viewport and are clipped, so ignore them when checking for horizontal overflow.

## Content-driven pages

Detail pages are thin. A page component looks up its record by id and hands it to a template:

```
src/pages/case-studies/OFK.tsx       ->  PROJECT_CONTENT.find(s => s.id === 'ofk')  ->  ProjectTemplate
src/pages/case-studies/McKinsey.tsx  ->  EMPLOYMENT_CONTENT['mckinsey']             ->  EmploymentTemplate
```

`src/pages/` holds the six standalone pages (Home, Portfolio, Process, About, Contact, CV); `src/pages/case-studies/` holds the seven pages that live under the `/portfolio/` routes.

Three data sources drive everything:

- `src/data/project-content.tsx` — `PROJECT_CONTENT: ProjectData[]`, the client case studies rendered by `ProjectTemplate`.
- `src/data/employment-content.ts` — `EMPLOYMENT_CONTENT`, keyed by id, rendered by `EmploymentTemplate`.
- `src/data/portfolio-items.ts` — `PORTFOLIO_ITEMS`, the flat index that renders the `/portfolio` list. An entry here is what makes a project appear in the list; it is separate from the case-study content.

Curvix and GalaNetwork are hand-written pages, not template-driven.

Adding a case study means four edits: a record in `project-content.tsx`, an entry in `portfolio-items.ts`, a thin page component in `src/pages/case-studies/`, and a `<Route>` in `App.tsx`.

### Content string conventions

`ProjectTemplate` parses plain strings, so the formatting of content in the data files is load-bearing:

- `\n` separates paragraphs.
- A line starting with `•` or `-` renders as a bullet.
- Each `keyDecisions` string is split on an em dash (`—`) into a card title and a body. No em dash means no body.
- `impact.user` / `impact.business` accept either a string or an `ImpactStat[]`; the array form renders big stat blocks.

`layoutOverrides` on `ProjectTemplate` (`textBalance`, `tighterMeasure`, `impactStyle: 'mckinsey'`) exist to tune individual case studies without forking the template.

## Images

Portfolio images live in `src/assets/portfolio/` and are pulled in by `import.meta.glob` in `src/utils/image-loader.ts` (Vite hashes and bundles them, which is why they are source assets and not `public/`). Matching is by **filename prefix**, not by folder: a file must be named `[projectid]_Something.png` or `[projectid]-something.png`. Dashes in the id are stripped when matching, and `dog-and-ride` has a hardcoded override to the `dog&ride` prefix. A new project's images will silently not appear if the prefix does not match its route id.

## Typography

`docs/typography.md` defines the type system and `tailwind.config.js` implements it as twelve `fontSize` tokens (`text-display-xl` through `text-eyebrow`). Each token sets size, weight, line height and letter spacing in one class.

When touching any text, keep the system intact:

- Use only the twelve tokens. No `text-xs` / `text-2xl`, no arbitrary sizes like `text-[15px]`, no responsive size variants, no `clamp()`.
- Never put `font-*` (weight), `leading-*` or `tracking-*` on an element that already has a token — those utilities are emitted after the tokens and silently override them, which is what the system exists to prevent.
- Colour, `font-mono`, `uppercase` and layout classes are not part of the token and are set normally.
- A heading split across several lines uses the same token on every line, with no extra margin between them; emphasis comes from colour alone.

Eyebrows are `text-eyebrow font-mono uppercase`.

## Environment

`.env` is gitignored; `.env.example` lists the keys. `src/pages/Contact.tsx` reads `VITE_FORMSPREE_ID` and the contact form fails without it.

Two known dead ends, both left alone on purpose because fixing either would change what the site looks like:

- `public/fonts/` ships Geist and Geist Mono, but no `@font-face` rule ever loads them and `tailwind.config.js` asks for `Inter`, which is also never loaded. Everything renders in the system sans-serif.
- `tailwind.config.js` maps `rounded-lg/md/sm` to `var(--radius)`, which is defined nowhere, so those sixteen usages render as square corners.
