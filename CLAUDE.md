# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Vite dev server on port 5137, host 0.0.0.0 (polling watcher, for WSL)
npm run build      # production build to dist/
npm run preview    # serve the built output
npm run typecheck  # tsc --noEmit, strict
```

There is no test framework and no linter. `npm run typecheck` plus `npm run build` is the full check, and both are currently clean.

Tailwind config changes need a dev server restart to take effect.

## Stack

Vite 6, React 19, TypeScript, Tailwind 3.4, framer-motion, react-router-dom 6, lucide-react. That is the whole runtime dependency list — keep it that way.

## Routing

Real URLs, no hash. `src/App.tsx` holds the route table and nothing else; layout comes from route nesting, so a page's frame is visible where the route is declared. Routes under `<Wrapped>` get the shared `max-w` + padding frame. Everything else lays itself out with `SplitPage`.

Deep links need the host to serve `index.html` for unknown paths. `public/_redirects` and `vercel.json` cover Netlify, Cloudflare Pages and Vercel.

All pages are lazy-loaded and wrapped in `AnimatePresence` keyed on pathname for page transitions.

## Content

`src/content/projects.ts` is the single list. One entry gives a project its slot in the `/portfolio` index **and** its `/portfolio/<id>` page. An entry with a `caseStudy` renders through `ProjectTemplate`; McKinsey renders through `EmploymentTemplate` from `src/content/employment.ts`; Curvix and GalaNetwork are hand-written components that `CaseStudy.tsx` maps by id.

Adding a case study is one edit to `projects.ts`, plus images in `src/assets/portfolio/<id>/`.

### Content string conventions

`ProjectTemplate` parses plain strings, so the formatting in `projects.ts` is load-bearing:

- `\n` separates paragraphs.
- A line starting with `•` or `-` renders as a bullet.
- Each `keyDecisions` string is split on an em dash (`—`) into a card title and a body. No em dash means the card renders with an empty body.
- `impact.user` / `impact.business` accept either a string or an `ImpactStat[]`; the array form renders big stat blocks.

An `output` block lists its own images by filename and sets its own `columns`. Nothing is inferred from the wording of a title.

## Images

Portfolio images live in `src/assets/portfolio/<project id>/` and are pulled in by `import.meta.glob` in `src/content/images.ts` (Vite hashes and bundles them, which is why they are source assets and not `public/`). The folder name is the project id. Files are `.webp`; re-export new screenshots as `.webp` rather than adding another format to the glob.

## Typography

`docs/typography.md` defines the type system and `tailwind.config.js` implements it as twelve `fontSize` tokens (`text-display-xl` through `text-eyebrow`). Each token sets size, weight, line height and letter spacing in one class. Read that file before touching any text; its rules are the ones to follow.

The three display sizes are fluid and reach their maximum at about 890px wide. Do not add responsive size variants in markup to compensate.

## Environment

`.env` is gitignored; `.env.example` lists the keys. `src/pages/Contact.tsx` reads `VITE_FORMSPREE_ID` and the contact form fails without it.

## Fonts

`font-sans` is Inter, self-hosted as a single variable file at `public/fonts/InterVariable.woff2` covering weights 100-900. The `@font-face` rule sits at the top of `src/index.css` and `index.html` preloads the file. Do not swap this for a Google Fonts `<link>`: the full file is used rather than Google's `latin` subset because the `← Back` label and the Polish `ł` are outside that subset and would fall back to a different font mid-sentence.

The variable file is upright only, so the one italic quote in `GalaNetwork.tsx` renders as a synthetic slant. `font-mono` is not defined and falls back to the system monospace font.
