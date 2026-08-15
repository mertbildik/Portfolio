# OFK Construction — research

What the repo proves, what the Polish construction market says, and what that means for the
case study. Repo: `project-cons` (at `/mnt/c/Users/mbild/projects/project-cons`).
Live: ofkconstruction.com. Researched Aug 15, 2026.

## Timeline (from git — the honest record)

- **Mar 26 – Apr 26, 2026. Exactly one month, ~13 active days.**
- Mar 26: planning baseline — `company.md` (the evidence-tiered facts doc) exists **from day
  one**. This is dated proof that facts-before-design actually happened, not a retrospective story.
- Mar 28 – Apr 12: homepage phase. Barlow Semi Condensed + DM Sans from the first build.
- **Apr 6: the font reversal — 4 hours 20 minutes, not two weeks.** 09:33: "Finalizing Barlow
  Semi Condensed & DM Sans." 13:53: index.html silently loads Inter instead; the commit message
  doesn't even mention fonts. The written rationale arrives Apr 20 with variable Inter:
  one family kills the friction of mixing a condensed display with a grotesk body; hierarchy
  comes from size/weight/tracking/optical sizing; the `opsz` axis refines glyphs per size.
  **Caution:** only the *winning* decision has documented reasoning. The Barlow choice never
  got a written rationale (its doc was generic type advice, deleted Apr 20). The case study
  can tell the reversal honestly; it cannot quote why Barlow was picked in the first place.
- **Apr 20: the systemic rebuild** — most of the shipped site is the final 7 days. Tailwind v4
  token system, the 1,356-line design-system.md, webp pipeline, `{ en, pl }` bilingual
  restructure, Projects overview + detail pages.
- Apr 26: SEO/OG polish, last commit. Site ships.

## Decisions the repo documents (quotable, with locations)

- **Source priority ladder** — `ai-instructions/company.md`, in the repo since Mar 26:
  "When sources conflict, use this order: 1. Latest written client confirmations 2. Uploaded
  reference letters 3. Website brief / Notion intake 4. Brochure 5. Anything else = unconfirmed."
- **Anti-invention guardrails** — same file: "Do not invent certifications / Do not invent
  project outcomes beyond uploaded references / Do not invent international presence / Do not
  turn positioning notes into exaggerated marketing copy." Header: "If something is not clearly
  confirmed here, treat it as unknown."
- **Concrete source triage**: the brochure carried an outdated hotmail address with an explicit
  "do not use that email on the website" note; a proof example marked "Do not attach it to a
  different named project unless separately confirmed."
- **Banned values** — `design-system.md` (from Apr 20): raw opacity variants on the accent blue
  banned outside named roles; exactly four opacity tiers on dark sections ("Do not introduce
  intermediate values"); "Chromatic budget… One accent color… Long-term commitment — do not
  introduce a second hue"; every gray tuned to one ~212° blue-gray axis, "*quietly* cool, not
  obviously blue." Plus a ~20-item "Banned patterns (flag these in review)" list in
  `engineering.md` and a zero-tolerance rule that `StatusDot` is the only permitted renderer
  of the blue dot.
- **"Numbers are data, not translation"** — `engineering.md`: "If a number is identical in
  `en.js` and `pl.js`, it is data; move it."
- **The EN/PL zero-reflow toggle** — `BilingualLabel.jsx`, 34 lines, self-documenting: every
  locale variant renders in one inline-grid cell, "toggling locale is a pure opacity crossfade
  with zero layout reflow."
- **The image pipeline** — `scripts/optimize-photos.mjs`: reads files into a buffer "so libvips
  never sees paths with special characters (e.g. double-quote chars in Warsaw filenames that
  break libvips on Windows)"; WebP q85, max 2400px, HEIC-aware, originals never modified.
- **Docs as authority**: "When the codebase and this document diverge, update the codebase —
  not the doc." And a deliberate non-route documented as a decision: "`/projects/:projectSlug`
  … does not exist by design… the route table is the spec."
- **New artifact the plan missed** — `src/lib/scroll-nav.js` (154 lines): an in-code
  postmortem of a real router bug ("the URL updated but the route transition never fired"),
  double-rAF timing documented against Lenis's 250ms ResizeObserver debounce, and exact
  card-position restore on back-nav (fixed Apr 25).

## Fact check

| Claim | Verdict |
|---|---|
| 22 km pipeline / 710 manholes | Documented in `company.md` as brochure-confirmed with a 12-item scope list; rendered via `useCountUp`. There's even a console easter egg: "OFK · 22 km pipeline · 710+ manholes · measured, delivered." |
| Three signed reference PDFs | In `assets/proof/` (FABE, ILK INSAAT, YOOJEGON), wired to download buttons. ILK completion certificate dated 30/11/2025. |
| Orlen Olefin, Warsaw Fast Tramline | Both confirmed in `company.md` with scopes and clients; the tramline entry is marked "Approved for public display." |
| 200+ employees | `company.md` says "200+ employees"; the shipped site narrows it to "200+ *technical* employees" — that qualifier is unsourced. Use the doc's version. |
| Founding year | **Confirmed discrepancy**: doc says founded 2018; shipped hero says "Since 2020" (introduced Apr 12, never reconciled). The case study should not cite a founding year until the client resolves it. |
| Business outcomes | Nothing. No analytics before or after. The repo cannot support any traffic/lead claim — the case study already refuses to, correctly. |
| AI-assisted build | On the record: commits co-authored by Claude models, `.claude/skills/` in history. Same conclusion as Sinerjik: the honest story is direction + rules + verification, not hand-typing. |

## Market context (researched now — retrospective, for framing only)

- **Publishing signed reference letters is rare at OFK's tier — and it's the exact artifact
  procurement checks first.** Reviewed peers: Energop, AGAT, Naftoremont (mid-tier industrial)
  publish logo walls and ISO strips, never letters; only small local firms (SPB Contech,
  MK-BUD, S-BUD) scan letters onto dated "Referencje" pages. OFK combines the small-firm proof
  artifact with mid-tier production values. Framing: not "unique in Poland" (the genre exists)
  but "rare at this tier, and exactly what a GC's vetting asks for."
- **What procurement actually vets** (Budimex prequalification, Warbud's subcontractor
  documentation standard): reference project list + letters, ISO 9001/14001/45001, financial
  standing, staffing and machinery, OHS documentation. The site's job is to survive the
  shortlist scan; the paper vetting happens off-site. A site that pre-answers the reference
  and scale questions shortens that decision — that's the design argument.
- **EN-first bilingual is validated by the real buyer chain.** OFK's paying clients on Olefins
  III are Korean/Turkish contractor chains (ILK INSAAT, YOOJEONG) under Hyundai Engineering and
  Técnicas Reunidas; FABE is a Warsaw GC with its own EN site. The Polish category norm is
  PL-first with broken EN — one peer's English homepage still shows WordPress's default Polish
  tagline. EN-first targets the actual buyer, not the domestic default.
- **The dark, motion-heavy design is far outside category norms.** Defensible — but the defense
  is the buyer (foreign EPC procurement teams used to modern vendor sites), not aesthetics.
- **Honest gaps a critic could raise**: no ISO/certification strip (the one category convention
  with direct procurement weight — every serious peer carries it; if OFK holds certs, absence
  is a real gap worth flagging to the client); the site is a client-side SPA with no SSR, so
  crawlers and link previews see one meta line — weak for a site whose whole argument is
  checkable evidence.
- **The relationship compounded**: four months after the site shipped, OFK's own client FABE
  commissioned a brand film directly (Aug 2026, the Remotion video repo). Decided: the film
  stays off the portfolio. But "the client's client came back for more work" is a true sentence
  available if the case study ever needs a quiet outcome line.

## Timeline honesty ledger

- **Happened during the project, dated**: the day-one facts doc; the Apr 6 same-day font
  reversal; the Apr 20 rebuild; the Apr 25 scroll-restoration fix.
- **In the repo, undated prose**: the design-system rules, banned lists, engineering rules —
  dateable only through git.
- **Retrospective (this research)**: everything about Polish procurement norms, peer sites, and
  the buyer chain. It explains why decisions were right; it must never read as "I studied
  Budimex's prequalification process before designing."

## What to show instead of explain

1. The `company.md` source-priority ladder + anti-invention block — the strongest process
   artifact, quotable as an excerpt.
2. The two Apr 6 commit hashes, 4h20m apart — the font reversal as a git-log screenshot.
3. `BilingualLabel.jsx` — 34 lines next to a 10-second toggle clip.
4. A banned-values excerpt from `design-system.md`.
5. The three reference PDFs as they appear on the live site — third-party proof, not self-claim.
