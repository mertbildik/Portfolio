# Portfolio Master Plan

Strategic source of truth for the ground-up rethink. Built from full read-only inspection of
`portfolio-personal`, the OFK repo (`project-cons`), `sinerjik-website`, `ofk-video-presentation`,
`marketing-web` (weldmeld), the Bunect repos, the old Windows-side `Portfolio` repo (CV facts),
and market research verified against primary sources in August 2026. A deeper research pass
(repo git-dated evidence, per-project market context, portfolio craft, writing direction) lives
in `portfolio-plan/research/` — read `research/implications.md` alongside this plan.

Decisions in this document are strategy. Wording is not final copy, and UI ideas are hypotheses
for the design phase unless marked as decisions.

---

## Diagnosis

**What works today**

- The visual identity is real and recently rebuilt: token-based dark system, six-step ink ramp
  with measured contrast ratios, two type weights, written accessibility rules, smoke tests that
  name the bugs they lock down. Worth keeping almost wholesale.
- A few personal lines land: "Helping people spend less time clicking and more time living." /
  "👋 Hey, I'm Mert." / "Born in Izmir. Based in Warsaw."
- The McKinsey page's structure (clear NDA framing, "what I can share on a call") is the most
  confident page on the site.

**Where it fails**

1. **The homepage shows no work.** It's a table of contents: greeting, three links. No project
   name, no image, no live URL.
2. **Claims that hurt trust.** Seven different role labels across the site. Numbers that can't
   be checked ("137 Kudos", "10 Critical Notes" — the second one is just a negative, printed
   large). Deliverable counts styled like results ("2 LANGUAGES", "1 DESIGN SYSTEM") in the same
   slot as real numbers. An availability badge computed from `new Date()`, so it can never say
   unavailable. No number on the site carries a source or period.
3. **Template case studies.** Every project runs the same five headings ending in the same
   "Retrospective". Nothing is shaped by the project it describes.
4. **The best evidence isn't published.** Two shipped client sites are live right now
   (ofkconstruction.com and sinerjik.com.tr, both verified) and the portfolio links to neither.
   The design-system docs and the recorded decisions — all in repos, none on the site.
5. **Stale and contradictory content.** Curvix is presented as the live studio brand; weldmeld's
   own docs retired it to legal-entity-only. Bunect claims metrics for a rebuild that hasn't
   started. The OFK index says 2025; the work was Mar–Apr 2026. Sinerjik — the strongest
   project — isn't on the site at all.
6. **Weak distribution and findability.** One static `<title>`, no per-route meta, no OG image.
   Navigation is icon-only; labels appear only on hover, so a first-time visitor has to guess.
   (The problem is the guessing, not the rail itself — solution belongs to the design phase.)

The August sprint rebuilt the system underneath and never touched the content. This plan is
about the content.

---

## Market direction

Verified claims, source and date beside each.

**Demand is real, and it's senior + hybrid.**
- 47% of hiring leaders report increased designer demand; 73% see increasing need for AI-tool
  proficiency; 79% for experience designing AI products; 56% are hiring senior vs 25% junior;
  58% name visual polish a top-five skill. ([Figma, Feb 10 2026](https://www.figma.com/blog/why-demand-for-designers-is-on-the-rise/))
- Senior and generalist roles are recovering faster than entry-level, which stays scarce.
  ([NN/g State of UX 2026, Jan 16 2026](https://www.nngroup.com/articles/state-of-ux-2026/))

**Designers building with AI is now normal, not novel.**
- Claude is the #2 weekly design tool after Figma (50.8%); Claude Code is #4 (38.4%), ahead of
  FigJam. 43.8% of designers spend more than half their build time on AI-generated code —
  80.9% among design engineers vs 35.0% among IC designers. ([UX Tools Spring 2026 survey,
  1,478 respondents](https://survey.uxtools.co/spring-2026))
- 50% of designers have pushed AI-generated code to production; 43% say their companies now
  expect working prototypes as a design output; ~80% say AI doesn't replace their own quality
  judgment. ([AI in Design Report 2026, Designer Fund + Foundation Capital, Aug 12 2026,
  900+ designers](https://stateofaidesign.com))

**How portfolios actually get read.**
- Visual quality is judged in seconds; the "Research / Define / Ideate / Prototype" template
  "reads like a checklist"; a Behance/Dribbble link for a product role "probably won't be
  clicked." ([Open Doors Careers, Oct 15 2025](https://blog.opendoorscareers.com/p/how-recruiters-and-hiring-managers-actually-look-at-your-portfolio))
- One hiring manager's view worth noting (a single essay, but consistent with the survey data
  above): polish is table stakes now; he screens for decisions the candidate actually owned.
  ([Akhmedov, Aug 2026](https://nurxmedov.substack.com/p/i-hire-designers-now-the-portfolio))

**The "design engineer" title has a public, high bar.**
- Vercel: design engineers "design, build, and ship a solution autonomously"; "there's no best
  background." ([Vercel blog, Mar 2024](https://vercel.com/blog/design-engineering-at-vercel),
  [current JD](https://job-boards.greenhouse.io/vercel/jobs/5709080004)) Tailwind Labs hired one
  at $275k, remote. ([Mar 2024](https://tailwindcss.com/blog/hiring-a-design-engineer-and-staff-engineer))
- The people actually at that level lead with shipped artifacts, live demos, and short writing,
  not case-study prose: [emilkowal.ski](https://emilkowal.ski) (Sonner, Vaul, animations.dev),
  [uilabs.dev](https://uilabs.dev) (interactive component gallery), [rauno.me](https://rauno.me).
  Notably, Rauno — who works with Vercel — currently calls himself an "interaction designer."
  Even at the top, people underclaim the title. On the product-designer side,
  [glorialo.design](https://www.glorialo.design) does fine with exactly 3 case studies and a
  Play section.

**What this means here:** the demand exists for exactly the combination on hand — a senior-ish
generalist who designs and ships with AI in the loop, with visual polish. What has to change is
evidence: live links, real numbers with sources, shorter case studies with meaningful section
names, and the site itself holding up under inspection.

---

## Positioning

**Strategic direction (decided):** present as a designer who designs and ships complete client
work — brand, design system, and the live site — with McKinsey and Adclusive as the professional
depth behind it. One label everywhere: **Product Designer**. Design engineering is named as the
direction, not claimed as the rank.

**Confirmed after the research pass (Aug 2026, decided):** the middle path. The hiring data
(see `research/market-and-positioning.md`) shows the rare demand sits at the
founding-designer/design-engineer intersection — but the title stays Product Designer, and the
artifacts (live sites, code-level evidence, measured decisions) carry the higher tier. Do not
claim Design Engineer.

**What the hero must communicate (wording open — this is not final copy):**
- I design and I build; the sites I design are the sites that ship.
- The work is real and checkable — live links sit next to the claims.
- Mostly B2B, end to end, often bilingual.
- A person, not a template.

Be careful with wording like "production code" or anything that sounds like an engineering
credential — it invites an evaluation the evidence doesn't need to win. "I design and build" plus
a live link makes the point without the exposure.

**Why not "Design Engineer" now:** the bar for that title is public (see above), the
`ai-developer` repo documents a learning path still in progress, and the portfolio currently has
no engineering artifact. A designer who visibly ships and is leveling up is a stronger, safer
story. Sinerjik's motion and WebGL work will read as design-engineering to anyone who knows what
they're looking at — let them draw the conclusion.

**Documented alternative:** claim "Design Engineer (web & brand)" outright. Upside: matches the
roles being hired for. Downside: one skeptical engineer in the loop evaluates the whole site
against Vercel-tier proof, and every other claim pays for it. Revisit after another shipped
project with heavier engineering surface.

---

## Core story

The thread is simple and true: the whole career has been about making complicated things clear,
and the technical side never fully went away.

- Started in computer science (Warsaw University of Technology, 2016–17), graduated in
  International Relations (University of Warsaw, 2017–21). Moved from Turkey to Poland.
- Aug 2021 – Sep 2021: two things started weeks apart. Adclusive (part-time product design on
  a Swedish ad platform) then McKinsey (visual communication — turning complex models into
  things executives can decide on). They ran in parallel for three years, until Adclusive
  wound down in Oct 2024.
- The point of that overlap isn't how Adclusive was paid. It's that the interest in digital
  products was there years before the AI/code workflow existed. The newer work didn't come out
  of nowhere.
- 2024: independent. 2025–26: AI tooling made it possible to carry design through to the shipped
  site alone — OFK proved the full arc, Sinerjik shows the current level.
- Stated direction: design engineering, eventually.

---

## Audience

1. **Hiring managers at B2B product companies and design-led tech companies** (in-house product
   designer / hybrid roles). They read the hero line, scan one case study, and check whether the
   site itself is well made.
2. **Founders and marketing leads buying high-quality client work.** They need shipped outcomes
   and an easy way to start a conversation.
3. **Recruiters doing a 60-second scan.** Name, role, the work, employer history, contact —
   all reachable from the homepage without hovering.

Not optimized for: awards juries, dribbble browsers, other designers (welcome, not the target).

---

## Portfolio architecture

Six routes (decided):

| Route | Job |
|---|---|
| `/` | The portfolio. Work-first single scroll: positioning → work in two groups (visual, one-liner, **live link**, story link) → short about + photo → contact block. A recruiter finishes in a minute; everything links deeper. |
| `/work/sinerjik` | Case study (structure below) |
| `/work/ofk` | Case study (structure below) |
| `/work/adclusive` | Case study (structure below) |
| `/work/mckinsey` | Employment page — real experience, not a fabricated case study (see Experience) |
| `/about` | The personal story, plus how I work day to day, contact. |

**`/how-i-work` is not a route yet.** The case studies should carry most of it: OFK shows the
docs-first method, Sinerjik shows measure-don't-guess, and a short section on `/about` can cover
the AI workflow honestly. After the three case studies are written, check what's still
unexplained — if something important is left over (the operating-contract pattern, the anti-slop
policy), a separate page can earn its place then. Prefer the smaller site until it does.

Other decisions:

- No separate `/portfolio` index — the homepage is the index.
- No separate Contact page — contact block on `/` and `/about`. Drop the sci-fi strings
  ("Open for transmission", "Request initiated.").
- McKinsey gets its own page at `/work/mckinsey`, reached from the Work section (see Experience).
- Curvix and GalaNetwork pages removed. Curvix stays as the company name behind the client work
  (see Experience), not as a studio brand with its own pitch page. GalaNetwork survives as at
  most a line on `/about`.
- A real 404 page (currently a silent redirect).
- Per-route titles, descriptions, and OG images. Every shared link previews with its own title
  and picture. This is distribution, not decoration.

Navigation: the current icon-only, hover-to-reveal rail makes first-time visitors guess — that's
the finding. How to fix it (labels, a different rail, something else) is a design-phase call;
the interface has personality worth keeping while the guessing problem gets solved.

---

## Homepage

Role: show the work in one scroll instead of announcing it.

1. **Hero**: greeting + positioning line + tagline. The current "👋 Hey, I'm Mert." and "spend
   less time clicking" lines set the right register — keep them or match them, final copy comes
   in the writing phase. No `DESIGN ENGINEER` eyebrow.
2. **Work, in two groups.** Four items total, each with one strong visual, title, role line,
   one-sentence claim, and a link to its own page. The grouping does the explaining — a reader
   can tell client projects from employment without any label doing extra work.

   **Client Work**
   - **Sinerjik** — live link + short motion clip (the hero demo).
   - **OFK Construction** — live link + short motion clip (the EN/PL toggle).

   **Teams I've Worked With**
   - **McKinsey & Company** — Visual Communication Specialist · Sep 2021 – Aug 2024.
   - **Adclusive** — Product Designer · Part-time · Shareholder · Aug 2021 – Oct 2024.
     Best shipped screen, framed as a product story.

3. **Dates and context** live on the items themselves, so there's no separate experience strip
   repeating McKinsey and Adclusive two sections apart. Independent work (Nov 2024 – present) is
   carried by the two client projects and a line on `/about`.
4. **Short about** + portrait, linking to `/about`.
5. **Contact block** with a hand-written availability line — decided, open to both in-house roles
   and client work. The auto-computed quarter badge goes.

---

## Three-project strategy

Each project answers a different question:

| Project | Question | What it shows |
|---|---|---|
| **Sinerjik** | What's his level right now? | Current craft: a production Next.js site on the client's domain, motion with written rules, decisions backed by measurement, live and still being sharpened (engagement ongoing). |
| **OFK** | Can he take a real company from nothing to shipped, alone? | The full arc: brief → sorting confirmed facts from unconfirmed → brand → system → bilingual site, live, with signed reference letters on it. |
| **Adclusive** | Can he stay with one product, in a team, over years? | Three years part-time on a real two-sided platform — and proof the product interest predates the AI workflow. |

No overlap, no repeated claim. Older work (Dog & Ride, Bunect, GalaNetwork, Curvix) does not
appear as case studies.

---

## OFK — what the case study should prove

**Claim: end-to-end delivery, done carefully.** Not "I designed a website" — "I took a company
with six years of real work and no way to prove it, and made the proof checkable."

Structure (chronological, not the five-heading template):

1. **The situation.** 200+ employee Polish contractor, real projects (Orlen Olefin expansion,
   Warsaw Fast Tramline), no web presence. A procurement manager had nothing to check.
2. **Facts before design.** The first artifact was a document, not a mockup: a source hierarchy
   (client confirmations > reference letters > brief > everything else = unconfirmed) with a
   written rule against inventing certifications or outcomes. Show the excerpt. This is the
   McKinsey skill applied independently, and it's the most unusual beat in the story.
3. **A system, then pages.** Design tokens and rules written down before layouts, so EN and PL
   stay consistent without rework. One or two pull-quotes from the rules — the banned-values
   list tells the reader more than any word count.
4. **Details that carry the build.** The EN/PL toggle that swaps languages with zero layout
   shift (a 10-second clip — the best single demo). "Numbers are data, not translation."
   The image pipeline that fixed a real Windows filename bug.
5. **A decision that got reversed — same day, per git.** The font pairing was "finalized" in a
   09:33 commit on Apr 6 and gone by 13:53 the same day, replaced by one variable typeface. The
   written reasoning exists only for the winning choice (documented Apr 20: hierarchy from
   size/weight/tracking/optical sizing instead of family contrast) — don't claim a written
   rationale for the original pairing. Tell it with the two timestamps. It mattered: it's where
   the system got simpler. (Included because it was a real turning point, not to perform honesty.)
6. **Shipped.** Live at ofkconstruction.com with three signed reference-letter PDFs served from
   the site. Timeline: Mar–Apr 2026 — fix the "2025" label.
7. **Plain edges.** No analytics existed before or after, so no outcome claims — say so. Solo
   build — say so.

**Don't claim:** business outcomes, team leadership, user research, or production-grade
engineering (that repo has no tests or CI). **Before pointing anyone at the live site:** flag
the copy errors found in the audit to the client (founded 2018 vs "Since 2020", the "YOOJEGON"
misspelling, mismatched reference scopes/dates). Separate task, outside this portfolio.

---

## Sinerjik — what the case study should prove

**Claim: this is the current level.** Written in layers — the first layer reads without any
technical background; the proof sits underneath for whoever wants it.

**Layer 1 — the story anyone can follow:**
A Turkish B2B company with two businesses to sell at once: management/IT consulting and a
software product family that's been running for 20+ years. The catch: the product's real UI
couldn't be shown. The answer wasn't stock art or AI-generated fake screens — it was building
working interfaces in code, using the product's real feature names and real data shapes, so the
site demonstrates the product instead of describing it. There's a written rule behind that:
anything with readable text gets built, never generated. The site went live on the client's own
domain (sinerjik.com.tr) eleven days after the first commit, and **the engagement is still
active (decided): never frame it as closed or finished.** The open-decisions list sits at empty
— that proves tidiness, not an ending.

**Layer 2 — proof underneath, each tied to why it mattered:**
- The neutral grays were re-tinted to match the brand blue's hue, because the standard gray
  palette read faintly purple next to it. Small, measured, visible.
- No monospace font, because the actual need was aligning numbers in tables — one font feature
  (tabular figures) removed the width jitter entirely.
- Contrast ratios are recorded in the code next to the color values, and a hidden `/tasarim`
  page shows the whole system live with real content — the site carries its own receipts.
- The 3D scene never loads on phones at all (it weighed more than the rest of the site), and on
  desktop its setup was moved so returning to the homepage stopped freezing the page — main
  thread work dropped from ~600ms to ~260ms. The lesson in plain words: the cost was setting
  the scene up, not drawing it.
- One centerpiece idea (particles resolving into a presenting hand) was built, refined, and
  deleted the same day in favor of something calmer. It mattered: it's the decision that set
  the visual tone of the whole page.

**Don't claim:** bilingual work (Turkish-only — OFK owns that axis), business outcomes, user
research, WCAG certification (self-measured AA — say exactly that), or automated test coverage.
On tests, keep the claim its true size: a Playwright suite was tried for one day and removed in
favor of measuring the affected flow in the browser; measurement tooling predates and outlives
it. Don't inflate that into "tore out a mature suite." AI co-authorship is in the commit
record — the honest framing is that the direction, rules, measurements, and rejections are the
designer's contribution.

---

## Adclusive — telling the long-term story correctly

**Claim: staying power.** Three years of part-time product design on a real two-sided platform,
alongside a full-time job — started in 2021, long before the AI workflow existed.

- **Reclassify it.** It's currently filed as a client project; it wasn't one. It belongs under
  "Teams I've Worked With" on the homepage, with the role line **Product Designer · Part-time ·
  Shareholder** (Gothenburg, remote; Aug 2021 – Oct 2024). **Don't use the word "voluntary"
  anywhere in the copy** — "part-time" and the McKinsey overlap carry the point without making
  the pay the subject.
- **Tell it as years, not as a project retrospective.** Why take on a second product role right
  before starting at McKinsey → what the platform had to do (advertisers and
  publishers/influencers in one system: campaigns, tracking, creatives, payments) → how the
  design held it together (role-based portals, wireframes to shipped screens) → why it paused
  in Oct 2024, honestly.
- **Team, decided:** 8 people total. Worked closely with the two developers — one frontend, one
  backend — day to day, if the story needs that level of detail.
- **The old screenshots are old — frame them that way.** Small, captioned, year-labeled
  artifacts of 2021–2023 work, not hero images pretending to be current craft. Labeled as
  history, the low fidelity stops being a problem.
- **The 20+ advertisers / 50+ influencers numbers, decided:** confirmed real, vouched for.
  State them as a one-month-post-launch snapshot, not a current figure — the platform is paused
  now — and frame them as the platform's scale, not a design outcome.
- **Pre-incorporation, decided:** the Aug 2021 start is confirmed and predates the company's
  formal incorporation (Mar 2022) — say "before the company was formally incorporated" once.
  The Swedish registry is public and shows no payroll, so the copy says "a team of eight,"
  never anything that implies employment records. Never link adclusive.se (the domain is dead);
  the case study is effectively the product's public record.
- **The pause gets one sentence of market context:** small Nordic ad networks were selling or
  shutting down the same season, profitable ones included — checkable pattern, not a private
  excuse (evidence in `research/adclusive.md`).
- **Assets, decided:** the eight ~500px images are the best available for now. Present them
  small, year-labeled, in pairs — archival framing. The wireframe→shipped dashboard
  side-by-side is the centerpiece: it proves "structure settled in lo-fi" with no prose.
  Replaceable later if better originals surface.
- **No duplication:** the homepage gives Adclusive one card under "Teams I've Worked With" and
  links here. One story, told once.

---

## Experience

- **McKinsey** (Sep 2021 – Aug 2024, Poznań, Visual Communication Specialist): real employment,
  never a fabricated case study. Keep the NDA framing and "what I can share on a call." Stats,
  decided — keep exactly these four, drop the rest (including "137 Kudos" and "10 Critical
  Notes," which can't be checked and the second of which is just a negative in a big font):
  - 10K+ Assets — slides, charts, templates, systems.
  - 50+ Pitch Decks — partner and C-suite ready.
  - 3 Major Initiatives — big work beyond the lane.
  - 2 Native App Tests — UI/UX feedback teams shipped.
  Put dates on the page (currently missing).
- **Adclusive**: sits beside McKinsey under "Teams I've Worked With" on the homepage, linking to
  its own page. One story, told once — no separate timeline entry repeating it.
- **Curvix (Nov 2024 – present)**: the company the client work runs through — Sinerjik and OFK
  are its content. Name it plainly as the company where a date or an employer line is needed
  (CV, `/about`), but don't build it back into a studio brand with its own page and pitch: that's
  what the old site did, and it's the part that clashes with weldmeld. Don't mention weldmeld
  before it launches — decided.
- **Education** goes on `/about` as part of the story, not a credentials block.
- Older work (Dog & Ride, Bunect, GalaNetwork): off the site as projects.

---

## Personal story

What actually belongs, and what each part carries:

- **Turkey → Poland, CS start → IR degree.** Context and texture — it makes the person specific.
  Don't stretch it further: the business judgment in the work is evidenced by McKinsey and the
  client projects, not by the degree.
- **The McKinsey/Adclusive overlap** — the strongest biographical fact. Three years of both at
  once, and it means the product interest predates the tools.
- **The self-directed leveling-up** is real (there's a structured learning roadmap in a private
  repo) but it stays private — publishing it would argue against the positioning. On `/about`,
  one plain sentence about still learning the engineering side is enough, and it's disarming.
- **Personality that stays:** the greeting, the tagline, basketball/football, "Portrait '26".
  A little unconventional is the brief.

---

## Voice

The current `docs/content/writing.md` is only a formatting spec — there are no actual writing
rules. The rewrite needs a few, and they should produce writing that sounds like a smart person
talking, not like copy.

Target: natural American English. Friendly, clear, relaxed. Contractions welcome, humor welcome
when it shows up on its own. Simple words over impressive ones. Not every sentence needs a
clever ending; most sentences should just explain things. The reader should stop noticing the
writing and start understanding the person.

Rules:

- **Every number carries its source or context, or it doesn't appear.** This one rule fixes most
  of the trust problems in the diagnosis.
- Section titles say what happened ("Facts before design"), not what phase it was
  ("02 — Approach").
- Mistakes, reversals, and rejected ideas appear **only where they actually mattered** in that
  project. No mandatory confession per case study — honesty as a template is just another
  template.
- No sci-fi register, no positioning-slogan sentences.
- Why the existing lines work, so new copy can match them without imitating them: "👋 Hey, I'm
  Mert." and the clicking/living line are specific, unforced, and don't ask to be admired.
  That's the bar — not their exact shape.

Register check (sample, not final copy): *"OFK had six years of real work and nothing a buyer
could check. So the first thing we made wasn't a design — it was a list of what we could prove."*

---

## Visual and interaction direction

**Keep** (decided — it's good and freshly rebuilt): the dark engineering-tool identity, the
`@theme` token system, ink-ramp hierarchy, hairlines over boxes, two type weights, the motion
rules, the accessibility rules, the smoke-test pattern.

**Problems for the design phase to solve** (findings, not prescriptions):

- Navigation makes first-time visitors guess (icon-only, labels on hover). Solve without losing
  the rail's character.
- The system was built for a text-only argument; it now has to present screenshots and short
  clips well (captions, year labels for Adclusive, aspect handling). Extend the tokens rather
  than improvising per page.
- Per-route OG images need designing in the site's own language.
- The two infinite background loops sit oddly next to the system's own "motion reveals, never
  decorates" rule, and they run on every page. Worth a deliberate yes/no.
- The quiet bar: someone who inspects the site — keyboard, reduced motion, view-source — should
  find it consistent with what it claims.

---

## Evidence

Assets worth showing, by location (curate to 2–3 per case study; excerpts, not files):

- **OFK repo**: the source-priority + no-invented-claims excerpt from `company.md` · one or two
  design-rule pull-quotes · the EN/PL toggle clip · live-site shots (pill nav both states,
  metrics count-up, references ledger) · the reference-letter PDFs on the live site.
- **Sinerjik repo**: the easing-by-purpose table from `motion.md` · the `scene-lazy.tsx` comment
  (diagnosis + 600→260ms) · measured-contrast tokens in `globals.css` · the live `/tasarim`
  proof page · the hand-scene build-and-delete arc.
- **Adclusive**: the 8 existing images (4 wireframes, 4 shipped screens), year-labeled.
- **Workflow evidence** (for `/about`, or a later how-i-work page if one earns its place):
  Sinerjik's `CLAUDE.md` (decisions quarantine, "measure, don't guess") · the anti-slop imagery
  policy · the docs-as-contract pattern across repos.

---

## Open questions

None outstanding. All the questions the repos couldn't answer — McKinsey stats, Adclusive
numbers and team framing, the studio mention, availability, domain/identity, and site
language — are decided above. Portfolio is English-only.

The research pass (Aug 15, 2026, `portfolio-plan/research/`) raised five more; all decided:
Adclusive started Aug 2021, pre-incorporation. Positioning holds the middle path (Product
Designer title, higher-tier evidence). Sinerjik's engagement is ongoing — never framed as
closed. OFK ISO certifications stay off the site. The current Adclusive assets are the best
available; present around their resolution.

---

## Next phase (after your approval)

1. **Content before code**: write the new copy as markdown — homepage, three case studies,
   about — and review it as text against the voice rules. Nothing gets built until the words
   are approved. After the case studies are drafted, decide whether a how-i-work page is still
   needed.
2. **Asset production**: the two clips (OFK toggle, Sinerjik hero), curated screenshots,
   year-labeled Adclusive images, OG images.
3. **Build on the existing system**: routes, homepage, case-study layouts, navigation fix,
   per-route meta, 404 — extending the current tokens and docs, not replacing them. Update the
   canonical docs where the IA changes them, per the repo's own rules.
4. **Verify**: typecheck/build/test, a browser pass against the site's own accessibility rules,
   and a link-preview check for every route.

Case-study order: Sinerjik first (leads with current level), OFK second, Adclusive third.
