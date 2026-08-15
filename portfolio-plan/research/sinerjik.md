# Sinerjik — research

What the repo proves, what the market says, and what that means for the case study.
Repo: `sinerjik-website`. Live: sinerjik.com.tr. Researched Aug 15, 2026.

## Timeline (from git — this is the honest record)

- **Jul 25 – Aug 15, 2026. About three weeks, first deploy Aug 5, still being polished today.**
  Not "closed and walked away" — the copy draft's "closed properly" needs softening to match.
- Jul 25: scaffold, dark system, brand locked, plus a same-day audit commit fixing token bugs
  that "passed build and lint but broke visually."
- Jul 26: site deliberately locked to desktop-only 1440px "until visual quality settles,"
  with rollback steps parked in `decisions.md`. Unlocked Jul 31 when quality settled.
- Jul 31: the scene day. 2D network → GPU particle scene (~26k particles) → the "presenting
  hand" added 12:23, reposed 12:40, **deleted 17:33 the same day**. The hand lived five hours.
- Aug 1: four sub-pages built in one day, each with a bespoke coded illustration.
- Aug 5: first production deploy.
- Aug 7: content corrections **from a client meeting** (sector–capability mapping updated
  per the client's feedback — dated proof of real client collaboration).
- Aug 9–10: performance and SEO. Initial JS 1743→865 KB; scene never loads on phones.
- Aug 13–14: accessibility hardening; Playwright suite added Aug 13, removed Aug 14.

**Timeline discipline:** the design-system docs are deliberately history-free (the repo's own
rule: decision history lives in git, not in docs). So every "decided on date X" claim must
cite a commit, not a doc. All docs and most commits are in Turkish — quotes need translation
for the case study.

## Decisions the repo actually documents (all quotable, with locations)

| Decision | Evidence | Dated? |
|---|---|---|
| Grays re-tinted to brand hue 237 because neutral zinc reads purple (hue 286) next to the brand blue | `foundations.md`; `globals.css:182` comment | Doc undated; CSS from project start |
| Tabular figures instead of a mono font — measured: digit width jitter **9.56px → 0** with `tabular-nums` | `typography.md` | Undated doc, explicit measurement |
| Contrast ratios recorded beside color values (`--fg: #F4F7F9; /* zemin 17.90:1 AAA */`) plus a rejected-colors table with reasons (indigo fails AA at 3.80:1; white-on-brand-blue is 2.77:1) | `globals.css:198–208`; `colors.md` | In code since early |
| `/tasarim` — public but noindexed proof page; "measurement record, single source" | `tasarim/page.tsx`; commits Aug 9–10 | Yes |
| 3D scene never ships to phones (936 KB never downloaded); desktop setup moved to app shell — main thread ~600ms→~260ms, long tasks 7→3 | `scene-lazy.tsx` header comment; commits Aug 10 + Aug 14, with measured payloads | Yes |
| Presenting hand: built, reposed, killed in 5 hours; deletion commit explains why (section quality dropped without it → replaced by self-playing diagrams built from real content data) | Three commits, Jul 31 | Yes, to the minute |
| Anti-slop rule: images without text → AI (Higgsfield); anything with readable text → built in code. "Hiçbir arayüz/UI görselini AI ile üretme." Mockup text must reflect real MoBI Plus+ features, never invented | `rehber/01-gorsel-uretimi.md` | Undated doc |
| Why no real screenshots: "ürün 20+ yıllık, arayüz sitenin görsel hedefiyle uyuşmuyor" — the product is 20+ years old and its UI clashes with the site's visual bar. Trust comes from text: 20+ years, client logos | same file, one sentence | Undated |
| Decisions quarantine: open questions live in `decisions.md`, get resolved into canonical docs, never duplicated. Currently: "Şu an bekleyen karar yok" | `CLAUDE.md`; cleared Aug 15 | Yes |
| Docs hold rules and rationale only; values live in code. Founding commit: "the two copies had already drifted apart… 314 → 216 lines" | commit Jul 25, in English | Yes |

### Nuances that keep the case study honest

- **The test-suite story is smaller than the plan implies.** The Playwright *suite* lived ~24
  hours (Aug 13→14). But Playwright as a *measurement tool* was wired in from Jul 30 and
  survives. Honest framing: "measurement always; a persistent suite was tried for a day and
  rejected in favor of measuring the affected flow in the browser." Not "tore out a mature suite."
- **The mono-font decision is a measurement, not a style debate.** The doc says mono wasn't
  *needed* — measured via tabular-nums. Don't dress it up as rejecting a font family on taste.
- **AI co-authorship is in the commit record** (Co-Authored-By trailers). The repo cannot
  support a hand-coded narrative, and shouldn't try to.

## Material the master plan missed (strong candidates)

- **The desktop-width lock cycle** (Jul 26 → Jul 31): consciously freezing responsiveness until
  visual quality settled, with rollback steps written down first. A real process decision with
  a clean documented arc.
- **The Jul 25 audit commit** (in English): fixed bugs invisible to build/lint, and contains the
  line "Linear applies its brand color to only ~0.4% of text" — a quantified taste reference.
- **Motion rules as design writing**: "what enters decelerates (ease-out), what leaves
  accelerates (ease-in), what's tied to scroll gets no curve — the finger provides the curve."
  Purpose→curve table; `scrub: true` banned with two documented exceptions.
- **Turkish-specific typography**: latin-ext requirement; positive letter-spacing on body text
  because Turkish's diacritic density makes tight tracking clot; sentence-case rules with
  Turkish exceptions. Nobody else's case study can have this section.
- **Hero depth rule**: "the screen doesn't shrink, it *recedes*" — scaling done with
  perspective, not `scale`; "cropping is deliberate, not accidental."
- **Client-facing texture**: the client company was founded 2008; the founder has been in the
  sector since 1994 (IBM, Mikro Yazılım, Siemens, Netsis partnerships). Content facts carried
  in front-mattered `content/company.md`: 500M stock movements/yr, 2,000+ field terminals,
  10-year average client tenure, <0.2% count error.
- **A caveat**: the docs repeatedly cite an external "veri tabanı" (pattern database) as a rule
  source. It's not in the repo — if the case study mentions it, it needs a one-line explanation
  or should be left out.

## Market context (researched now — retrospective, useful for framing only)

- **The live site holds up against its real category.** Turkish B2B software/consulting peers
  (Logo Yazılım, Bimser, Mikro, Uyumsoft, and Izmir-local hybrids like Evoset) sell on numbers
  walls, screenshot grids, WhatsApp widgets, and even discount banners. The mid-tier fails as
  undifferentiated service laundry lists. Sinerjik's coded live-warehouse demo has no parallel
  among the reviewed competitors.
- **The "can't show the real UI" solution is a named industry pattern.** "Simplified UI" —
  abstracted interface representations — is documented practice at Microsoft, Dropbox, Google,
  and explicitly recommended for legacy products whose real screens look dated. Sinerjik's
  demo is a stronger variant: not an illustration but a working system with real feature names.
  The case study can cite the category norm without claiming to have invented it.
- **What Turkish buyers check** (from current Turkish ERP buyer guides): references from their
  own sector and size class first, then local support, regulatory compliance, and vendor
  longevity — they're choosing a 10-year relationship. Sinerjik's longevity metrics (10-yr
  client tenure, 500M movements) map to the buyer's actual #1 concern. That's the argument for
  why "trust from text, not screenshots" was right for this buyer.
- **Honest gaps a critic could raise**: no demo-request CTA (category norm from Bimser's "DEMO
  TALEP ET" to Logo's callback — Turkish buyers expect a demo stage before a quote); references
  are 7 logos, thinner than the category's named success stories; no WhatsApp contact, which is
  a genuine Turkish B2B convention even at Logo's scale. None of these belong in the case study
  as confessions, but don't claim completeness the site doesn't have.

## Timeline honesty ledger

- **Happened during the project, dated**: everything in the git table above; the client-meeting
  correction (Aug 7); the hand arc; the measurements.
- **In the repo, undated prose**: the design-system rules, the anti-slop policy, the
  no-screenshots sentence. Real, quotable, but "when" comes only from git.
- **Retrospective (this research)**: all market comparison — Turkish competitor conventions,
  the Simplified-UI pattern name, buyer-criteria research. Usable as context ("the market
  works like this"), never as "I researched competitors before designing."

## What to show instead of explain

1. The live site and `/tasarim` — screenshot or embed; the system verifying itself.
2. `globals.css` excerpt — contrast ratios as code comments. Small, dense signal.
3. The three hand commits (12:23 → 12:40 → 17:33) — a git log excerpt is the whole story.
4. The anti-slop KRİTİK block, translated.
5. The `scene-lazy.tsx` header comment — an engineering comment that reads like a case-study
   paragraph, verbatim.
