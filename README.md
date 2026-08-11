# Mert Bildik — Portfolio

Personal portfolio site. Vite 6 + React 19 + TypeScript + Tailwind 3.4, deployed as a static site.

## Run it

```bash
npm install
cp .env.example .env    # then fill in VITE_FORMSPREE_ID
npm run dev             # http://localhost:3000
```

| Script | What it does |
|---|---|
| `npm run dev` | Dev server on port 3000 |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the built output |
| `npm run typecheck` | `tsc --noEmit`, strict |

There is no test suite. `npm run typecheck` plus `npm run build` is the full check.

## Deploying

The app uses real URLs (`/portfolio/ofk`), so the host must serve `index.html` for
any path it does not recognise. `public/_redirects` covers Netlify and Cloudflare
Pages, `vercel.json` covers Vercel. On any other host, add the equivalent rule.

## Layout

```
src/
  App.tsx           route table
  main.tsx          entry point
  index.css         Tailwind entry + base styles
  assets/           images bundled by Vite (portfolio/<project id>/)
  components/       shared UI + motion variants
  content/          projects, employment, image lookup
  layouts/          SplitPage (the 4/8 grid), Wrapped (page frame)
  pages/            one file per standalone route
    case-studies/   everything under /portfolio/:id
public/             files copied verbatim, no bundling
docs/               typography system
```

## Adding a case study

Add one entry to `src/content/projects.ts`. That makes it appear in the
`/portfolio` list and gives it a working `/portfolio/<id>` page. Drop its
images in `src/assets/portfolio/<id>/` and reference them by filename in the
`output` blocks.

Curvix and GalaNetwork are written by hand instead. `CaseStudy.tsx` maps those
two ids to their own components.

## Typography

Twelve Tailwind tokens (`text-display-xl` through `text-eyebrow`) carry size, weight, line height
and letter spacing together. See [docs/design/typography.md](docs/design/typography.md) before touching any text.
