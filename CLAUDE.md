# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Vite dev server on port 3000, host 0.0.0.0 (polling watcher, for WSL)
npm run build      # production build to dist/
npm run preview    # serve the built output
npm run typecheck  # tsc --noEmit, strict
npm run test       # Playwright smoke tests over every route
```

There is no linter. `npm run typecheck`, `npm run build` and `npm run test` are the full check, and all three are currently clean.

## Stack

Vite 8, React 19, TypeScript 7, Tailwind 4, motion 13, react-router 8, lucide-react 1. Playwright for tests. That is the whole dependency list, keep it that way.

Two packages were renamed upstream: import from `motion/react`, not `framer-motion`, and from `react-router`, not `react-router-dom`.

## Design tokens

`src/index.css` is the one place a design value is defined. There is no `tailwind.config.js` and no `postcss.config.js`: Tailwind 4 runs as a Vite plugin and reads its whole theme from the `@theme` block in that file. Edits there are picked up live, no restart.

Tailwind builds classes from the prefix of each variable, so `--color-line` gives `border-line` and `bg-line`, `--text-card-title` gives `text-card-title`, `--ease-entrance` gives `ease-entrance`.

The token names match the names in `docs/design/*.md` one for one. Those files explain what each token means and when to reach for it; `index.css` holds the values. If the two ever disagree, the CSS is right and the doc needs fixing.

**Write tokens, not raw values.** No `text-neutral-500`, no `border-white/[0.08]`, no `bg-[#111111]` — use `text-ink-low`, `border-line`, `bg-canvas`. The default Tailwind palette still resolves, so a raw grey will not error; it will just quietly leave the system.

Two known exceptions: `text-black` on text selection and `from-black/60` on the About portrait overlay are true black, not `canvas`.

### Spacing gotcha

`space-y-*` sets `margin-bottom` in Tailwind 4 (it was `margin-top` in Tailwind 3). A child inside a `space-y-*` container must not carry its own `mb-*`: they are the same property now, so one silently wins instead of the two stacking. Let the container own the spacing.

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

`docs/design/typography.md` defines the type system and the `@theme` block in `src/index.css` implements it as twelve `--text-*` tokens (`text-display-xl` through `text-eyebrow`). Each token sets size, weight, line height and letter spacing in one class. Read that file before touching any text; its rules are the ones to follow.

The three display sizes are fluid and reach their maximum at about 890px wide. Do not add responsive size variants in markup to compensate.

## Environment

`.env` is gitignored; `.env.example` lists the keys. `src/pages/Contact.tsx` reads `VITE_FORMSPREE_ID` and the contact form fails without it.

## Fonts

`font-sans` is Inter, self-hosted as a single variable file at `public/fonts/InterVariable.woff2` covering weights 100-900. The `@font-face` rule sits at the top of `src/index.css` and `index.html` preloads the file. Do not swap this for a Google Fonts `<link>`: the full file is used rather than Google's `latin` subset because the `← Back` label and the Polish `ł` are outside that subset and would fall back to a different font mid-sentence.

The variable file is upright only, so the one italic quote in `GalaNetwork.tsx` renders as a synthetic slant.

`font-mono` is the system monospace stack, written out as `--font-mono` in `index.css` rather than inherited from Tailwind's defaults. It carries every eyebrow and label on the site, so it is spelled out where it can be seen and changed.
