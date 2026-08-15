# Adclusive — research

What exists as evidence, what a reader can publicly verify, and what the ad-platform market
says. Researched Aug 15, 2026.

## What a reader can verify (this shapes what the page may claim)

- **Company registry (allabolag.se): Adclusive AB, org.nr 559369-3665, registered Mar 8,
  2022, Gothenburg.** Purpose: digital marketing, ad brokering, influencer marketing. Still
  legally active but dormant: latest visible year shows ~zero revenue and **0 employees on
  record**, 25 tSEK share capital.
  - The Aug 2021 start **predates incorporation by ~7 months**. Fine — but say it: "from
    before the company was incorporated" turns a checkable discrepancy into a credibility point.
  - "8 people" must mean founders/shareholders/contractors, not payroll. Word it as "a team
    of eight," never anything that implies employment records.
- **adclusive.se is dead** (suspended-hosting page since ~Mar 2026). Don't link it. The
  Wayback snapshot is the safe reference:
  `web.archive.org/web/20240714161333/https://adclusive.se/`
- **The archived public site** (Swedish): "Adclusive connects influencers with advertisers
  through groundbreaking technology and a unique tracking technology." Nav shows **three**
  roles — Annonsör, Influencers, Publicist — so "Publicist" in the screenshots is a real third
  audience, not a typo. Advertiser pitch: pay only for completed transactions ("your ads
  become self-financing") — the commission model was public. Footer "©2021-2022" is consistent
  with a 2022 launch.
  - Caveat: the archived marketing site had Lorem ipsum on info pages as late as Sep 2023.
    The real product lived behind login. Anchor the case study in the product screens, and
    don't imply the public site showed the design work.
- **No LinkedIn page, no press, no funding record.** The case study will effectively be the
  primary public document about this product. That's a responsibility: everything in it should
  be either visible in the screenshots or clearly framed as first-person account.

## Asset inventory (complete — nothing else exists)

Eight images, in the old repo (`Images_portfolio/`) and already converted to webp in the
current repo (`src/assets/portfolio/adclusive/`):

- 4 shipped screens: marketing home ("A complete ad network"), sign-up with a
  Publisher/Advertiser role switch, **publisher dashboard**, advertiser directory.
- 4 lo-fi wireframes: card-grid directory, dashboard layout, a create/edit form (plausibly
  campaign setup — unlabeled), a detail page.

**All are thumbnails, 425–537px wide.** They cannot be shown large or cropped into. If the
page wants real-size screens, Mert must supply originals or Figma exports. Otherwise the
"small, year-labeled artifacts" framing in the plan is not just honest — it's the only
technically possible presentation.

What the screens *prove* on their face (usable without any memory claims):

- The finance pipeline as shipped UI: **Awaiting approval / Approved by advertiser / Invoiced /
  Ready for payment**, estimated revenue vs. account balance, SEK amounts, monthly
  commissions chart (a "Jan 2022" label is visible).
- Marketplace mechanics: campaign directory ("314 total ads"), category filter, per-campaign
  **commission rate % and EPC**, apply flow with Accepted/Declined states, running balance.
- Publisher portal IA: Dashboard · My channels · Advertisers · Finance · Support.
- **Wireframe 2 maps 1:1 to the shipped dashboard** — direct visual evidence for "navigation
  and data hierarchy were settled in lo-fi." Show them side by side; no sentence needed.

## Gaps with no artifact behind them

- **The entire advertiser side.** No screen shows campaign creation, creative upload, or the
  advertiser dashboard. Every advertiser-side claim rests on old case-study text that ends in
  literal unfinished "..." — those sentences were never completed anywhere. Anything beyond
  what the copy currently says must come from Mert's memory or be cut.
- Tracking-link mechanics ("multiple tracking options") — no screen, no doc.
- The exact launch month, the 20+/50+ provenance (vouched, no analytics artifact), and the
  pause reasoning — all first-person account. The current draft frames all three correctly.
- **Start month conflict**: the old CV says **Sep 2021**; the plan and copy say **Aug 2021**
  (user-corrected). Needs one final confirmation from Mert. The old CV also credits work with
  "product managers," which contradicts the decided 8-person picture — don't quote the old CV.

## Market context (researched now — retrospective, for framing only)

- **The design patterns are category-standard, and that's the honest strength.** Role-based
  portals onto one shared ledger is how Adtraction, Awin, and impact.com all work; the payout
  state machine (pending → approved → paid, with a validation window) is documented industry
  vocabulary (Commission Factory's "Pending Balance" vs "Available Balance"). Present these as
  deliberate convention-following in a category where trust depends on predictability — not as
  invention.
- **"Both sides audit the same numbers" is a real, named industry problem.** Tracking
  discrepancies between advertiser-side and network-side counts are endemic; Awin literally
  built a paid "Conversion Protection Initiative" around missed conversions. Adclusive's own
  public pitch was "a unique tracking technology… never miss a transaction again." The case
  study's finance-screens-got-the-most-care angle is the right one — the market says that IS
  the product.
- **The Swedish scene was dense and consolidating.** Direct analogues: Adtraction (Stockholm,
  the Nordic leader), Adrecord (Örebro, ~10 people), Metapic (Gothenburg — same city),
  Tradedoubler. Adclusive's own site called itself "uppstickaren" (the challenger) — a
  verifiable self-positioning.
- **The Oct 2024 pause matches the market record almost exactly.** Creator-economy funding
  halved in 2022 and kept falling; Q3 2023 set a 19-quarter record for startup shutdowns;
  Safari's 2023 tracking changes raised the fixed engineering cost floor for small networks.
  And the cleanest comparison: **Adrecord — profitable, ~10 people, 70 MSEK turnover — sold
  itself to Adtraction in October 2024, the same month Adclusive paused.** "A
  funding-and-priorities story, not a product one" is well supported as *typical* — with the
  nuance that the squeeze was funding plus consolidation plus rising tracking costs, not
  funding alone.

## What this changes about the case-study framing

1. The pause paragraph can carry one sentence of market context (small Nordic ad networks were
   selling or folding the same season — even profitable ones), clearly marked as context. It
   turns a private-sounding claim into a checkable pattern.
2. The finance screens should lead the visual story — the market context makes "the payout
   states are the product" a sharper claim than "five kinds of complexity."
3. Say "from before the company was incorporated" once. It defuses the registry check and
   strengthens the early-believer story.
4. Never imply the public marketing site was the design work; the screens behind login were.
5. The wireframe-2 / dashboard side-by-side is the single best artifact — it proves the
   process claim visually with zero prose.
