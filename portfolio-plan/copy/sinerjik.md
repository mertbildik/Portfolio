# Sinerjik — case study

Meta title: `Sinerjik — Mert Bildik`
Meta description: `A consulting firm and a 20-year-old software product on one site. The real screens couldn't be shown, so I built working demos in code.`

---

## Header

**Sinerjik**

Product Designer · Jul–Aug 2026 · [sinerjik.com.tr](https://www.sinerjik.com.tr) — live

Next.js · Tailwind · GSAP · three.js

A consulting firm and a 20-year-old software product, sold on one site — with product demos
built in code, because the real screens couldn't be shown.

---

## Two businesses, one site

Sinerjik is a Turkish B2B company from İzmir, in business since 2008, with roots going back
to the nineties. They do two things: management and IT consulting (ISO, COBIT, ITIL — the
serious, audit-heavy kind), and a software family called MoBI Plus+ that has been running in
warehouses and sales operations for over 20 years.

Their old site didn't do either of those things justice. The new one had to sell both at
once, to an audience that buys on trust: proof first, services after.

## The catch: a real product I couldn't show

The obvious move for a software page is screenshots. That wasn't an option here — the
product's real UI is old, dense, and not something the client wanted on a marketing site.

The usual escape hatches were off the table too. Stock imagery says nothing. AI-generated
fake screens fall apart the moment you read the text in them. So I wrote a rule for the
project and stuck to it: anything with readable text gets built in code, never generated.

The result is that the site *demonstrates* the product instead of describing it. The
homepage hero is a small working warehouse workflow — goods arrive, get placed, get picked,
stock runs low, the system suggests a reorder, and one button actually works: you approve
it. Every label in it is a real MoBI Plus+ feature name, and the data shapes are theirs —
their CRM really does hold 1.2 million customer records. If JavaScript is off, the demo
just shows its final frame, so the story still lands.

## Decisions I can show the math for

A few choices on this project came down to measuring instead of guessing. Some examples:

- The gray palette read faintly purple next to the brand blue. Not a taste call — the
  standard grays sit at a different hue than the brand color. I re-tinted every gray to the
  blue's own hue, at very low intensity. The skeleton and the brand stopped arguing.
- The tables needed aligned numbers, and my first instinct was a monospace font. The actual
  need was narrower: tabular figures. One font setting took the digit-width jitter from
  9.56px to zero, and the site kept a single typeface.
- Every text color has its measured contrast ratio recorded next to it in the code, and
  there's a hidden `/tasarim` page that renders the whole system live with real content —
  the site carries its own receipts. The ratios are self-measured AA, and I'll say exactly
  that rather than "WCAG certified."

## Making a 3D scene behave

The homepage has one continuous particle scene that follows the scroll — a cloud that
becomes a double helix, then a circulation loop, then settles into a horizon line. It's
there to carry the narrative, not to decorate it.

Two performance decisions mattered:

- On phones, the scene never loads at all. The 3D library weighed more than the entire rest
  of the site, so mobile simply doesn't fetch it.
- On desktop, returning to the homepage used to freeze for a moment. Shrinking the canvas
  changed nothing — the cost was *setting the scene up*, not drawing it. Moving the setup
  out of the page so it survives navigation cut the main-thread block from roughly 600ms to
  260ms.

## The version I deleted

The scene's big moment was originally going to be the particles resolving into an open,
presenting hand. I built it, refined the pose, and deleted it the same day. It was
impressive and it was wrong — too theatrical for a company whose whole pitch is quiet
competence. What replaced it is calmer, and it set the tone for the entire page. I'm
mentioning it because that one decision shaped the site more than most of the ones I kept.

## Shipped, and actually finished

The site is live on the client's own domain, with full metadata, sitemap, and structured
data wired up. I kept a running list of unresolved decisions through the project; the last
commit is the one that emptied it. Finished, not abandoned.

Copy came from the client's real facts and got corrected against reality more than once —
sector mappings updated after a client meeting, a decommissioned phone number removed, a
customer count fixed to the actual figure.

## How it was built

Built with Claude Code in the loop, working under written rules: design values live in the
code, the docs hold the reasoning, and anything unmeasured gets measured before it ships.
The direction, the rules, the rejections, and every number above are mine — the AI typed
faster than I do.

## What this project isn't

Turkish-only, by design — the client's market is Turkey. No user research or testing; the
structure came from the client's sales reality, not interviews. And no business outcome
numbers yet — the site shipped in August 2026, so any traffic claim would be made up. The
scale figures above are the client's, describing their product — not results of my design.
