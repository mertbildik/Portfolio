# Mert Bildik — Portfolio

Personal portfolio site. Vite 6 + React 19 + TypeScript + Tailwind 3.4, deployed as a static site.

## Run it

```bash
npm install
cp .env.example .env    # then fill in VITE_FORMSPREE_ID
npm run dev             # http://localhost:5137
```

| Script | What it does |
|---|---|
| `npm run dev` | Dev server on port 5137 |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the built output |
| `npm run typecheck` | `tsc --noEmit` |

There is no test suite. `npm run typecheck` plus `npm run build` is the full check.

The app uses **HashRouter**, so real URLs look like `http://localhost:5137/#/portfolio`.

## Layout

```
src/
  App.tsx           route table + shell layout
  index.tsx         entry point
  index.css         Tailwind entry + base styles
  assets/           images bundled by Vite (portfolio/ is matched by filename prefix)
  components/       shared UI
  data/             case-study content, kept out of the components
  pages/            one file per standalone route
    case-studies/   the pages under /portfolio/*
  templates/        ProjectTemplate + EmploymentTemplate render the data files
  utils/
public/             files copied verbatim, no bundling
docs/               typography system
```

Case studies are content, not code: a record in `src/data/project-content.tsx`, an entry in
`src/data/portfolio-items.ts`, a thin page in `src/pages/case-studies/`, and a route in `App.tsx`.

## Typography

Twelve Tailwind tokens (`text-display-xl` through `text-eyebrow`) carry size, weight, line height
and letter spacing together. See [docs/typography.md](docs/typography.md) before touching any text.
