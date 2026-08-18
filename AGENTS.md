# AGENTS.md

Personal portfolio. Vite + React 19 + TypeScript + Tailwind 4, static SPA. Deployed as static site; `vercel.json` and `public/_redirects` cover the SPA fallback.

## Commands

```bash
npm install
cp .env.example .env        # set VITE_FORMSPREE_ID — contact form is silent without it
npm run dev                 # http://localhost:3000, host 0.0.0.0
npm run typecheck           # tsc --noEmit
npm run build               # vite build
npm run test                # Playwright; builds + serves on :4173, then tests
npm run preview -- --port 4173 --strictPort   # if you want to poke the build manually
```

There is **no linter**. Do not invent eslint/prettier configs.

## Stack quirks (real ones)

- **Tailwind 4** as a Vite plugin. No `tailwind.config.js`, no `postcss.config.js`. The whole theme lives in the `@theme` block of `src/index.css`. Token names map to utilities by prefix (`--color-*` → `bg-/text-/border-…`, `--text-*` → `text-*`, `--font-*` → `font-*`, `--ease-*` → `ease-*`, `--container-*` → `max-w-*`).
- **React Router v8** is the package `react-router` (not `react-router-dom`). Imports look like `from 'react-router'`.
- **motion** (the framer-motion successor) — import from `motion/react`, not `framer-motion`.
- `vite.config.ts` is included in `tsconfig.json` so it gets typechecked. Keep it valid TS.
- The Vite dev server uses a polling watcher (`usePolling: true`, 1s) — required for WSL. Don't "fix" it.
- Playwright's `webServer.reuseExistingServer: false` always rebuilds and starts fresh on `:4173`. Don't run a preview server there while testing.

## Layout

```
src/
  App.tsx              # routes, lazy pages, AnimatePresence wrapper
  main.tsx, index.css  # root + the ONLY place design values are defined
  components/          # Navigation, GlobalBackground, BackButton, StatBlock, motion
  layouts/             # Wrapped (wraps /portfolio/:id), SplitPage
  pages/               # Home, Portfolio, Process, About, Contact, case-studies/
  content/             # projects.ts, employment.ts, images.ts — content source of truth
  assets/portfolio/<id>/   # case-study images, .webp only
public/                # static assets; _redirects handles SPA fallback on Netlify/CF
docs/
  design/              # design system — read direction.md first
  content/writing.md   # how to add a project or case study
  engineering/         # empty placeholder
```

## Tests

- `tests/smoke.spec.ts` is the only suite. Every page is loaded on production CSS, with viewport overflow and image-load checks. It also iterates `PROJECTS` from `src/content/projects.ts`, so **every project you add is tested automatically**.
- Tests run against the **production build** (`:4173`), not the dev server. Missing Tailwind classes and clipped layouts only show up here — `npm run build` is part of the loop, not optional.
- Pre-merge: `npm run typecheck && npm run build && npm run test`.

## Adding content

A project = one entry in `src/content/projects.ts` + images under `src/assets/portfolio/<id>/` (filenames matching `id`, lowercase-hyphenated, `.webp` only, prefix with `1-`, `2-` for order). Render order is route → hand-written component → `EmploymentTemplate` → `ProjectTemplate` (default). `ProjectTemplate` parses plain strings — `\n` for paragraphs, `•`/`-` lines for bullets, em dash splits `keyDecisions` into title/body. Full rules in `docs/content/writing.md`.

## Design rules (load-bearing)

Read `docs/design/direction.md` first. The non-negotiables:

- One typeface (Inter + system mono stack). No third face.
- No shadows. Depth is border + fill.
- No new colours. Green and red are status only. Everything else is white at an alpha.
- Ink ramp carries hierarchy; size does not. A heading uses one size.
- Monospace for all labels (eyebrows, status, controls), sans for sentences.
- No arbitrary values where a token or scale step already covers it.

Change a value in `src/index.css` `@theme` block, never in a component.

## Routers / hosts

The app uses real paths (`/portfolio/ofk`, `/process`). The host must serve `index.html` for any unknown path — `public/_redirects` (Netlify, Cloudflare Pages) and `vercel.json` (Vercel) cover it. Any other host needs the same rewrite.

## Don't

- Don't add lint/format tooling — it's deliberately absent.
- Don't introduce `react-router-dom`. Use `react-router`.
- Don't put images in `public/`. They go in `src/assets/`.
- Don't add a Tailwind config file. Edit `@theme` in `src/index.css`.
- Don't write a case study that's a copy of a doc page — the smoke test asserts every `output` block reaches the page.
