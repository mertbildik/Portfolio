# Sinerjik — case study

Meta title: `Sinerjik · Mert Bildik`
Meta description: `A consulting firm and a 20-year-old software product on one site. The real screens couldn't be shown, so I built working demos in code.`

Page shape: demo-led. Short sections, visuals carry the story, captions narrate. Every
*Show:* line is a media slot with its caption copy; the paragraphs stay under ~100 words.

---

## Header

**Sinerjik**

Product Designer · 2026, ongoing · [sinerjik.com.tr](https://www.sinerjik.com.tr) (live)

Next.js · Tailwind · GSAP · three.js

A consulting firm and a 20-year-old software product, sold on one site. The real screens
couldn't be shown, so the site demonstrates the product in code.

---

## Two businesses, one site

Sinerjik is a Turkish B2B company from İzmir, in business since 2008. The founder has been
in this industry since 1994, through partnerships with IBM, Siemens, and Netsis. They sell
two things: audit-heavy consulting (ISO, COBIT, ITIL) and MoBI Plus+, a software family
that has run warehouses and sales operations for over 20 years.

Their buyers pick a vendor for the next decade, and they pick on proof. The old site
showed neither business well. The new one had to sell both at once.

> *Show: the live homepage, or a short clip of the first scroll.*
> Caption: `sinerjik.com.tr, live. Turkish only, by design.`

## A real product I couldn't show

The obvious move for a software page is screenshots. Not an option here: the product's
real UI is twenty years old, dense, and the client didn't want it on a marketing site.

Stock imagery says nothing. AI-generated interface shots fall apart the moment you read
the text in them. So the project got a written rule:

> **Anything with readable text gets built in code, never generated.**

The homepage hero is a small working warehouse flow: goods arrive, get placed, get picked,
stock runs low, the system suggests a reorder, and you can approve it. Every label is a
real MoBI Plus+ feature name. The data shapes are theirs; their CRM really holds 1.2
million customer records. With JavaScript off, the demo shows its final frame, so the
story still lands.

> *Show: the hero demo, live or as a 10-second clip.*
> Caption: `The product, demonstrated instead of described. Real feature names, real data shapes.`

## Decisions with the math attached

**The grays argued with the brand.** The standard gray palette sits at a different hue
than the brand blue and reads faintly purple beside it. I re-tinted every gray to the
blue's own hue at very low saturation. The skeleton and the brand stopped arguing.

**Monospace was the wrong answer to a real problem.** Tables needed aligned numbers, and
my first instinct was a mono font. The actual need was narrower: tabular figures. One font
setting took the digit-width jitter from 9.56px to zero, and the site kept its single
typeface.

**The code carries its own receipts.** Every text color has its measured contrast ratio
recorded beside it, and a public, unlisted `/tasarim` page renders the whole system live
with real content. The ratios are self-measured AA, and the site says exactly that.

> *Show: an excerpt from the stylesheet.*
> ```
> --fg:     #F4F7F9;  /* on background: 17.90:1  AAA */
> --brand:  #0EA5E9;  /* on background:  6.95:1  AA  */
> ```
> Caption: `Contrast ratios live next to the values they measure. The full system is at /tasarim.`

## Making the 3D scene behave

One continuous particle scene follows the scroll: a cloud becomes a double helix, then a
circulation loop, then settles into a horizon. It carries the narrative. Two performance
calls made it shippable:

- **Phones never load it.** The 3D library weighed more than the rest of the site
  combined, so mobile skips the download entirely. That's 936 KB that never leaves the
  server.
- **Returning to the homepage used to freeze.** Shrinking the canvas changed nothing,
  because the cost was setting the scene up, not drawing it. Moving the setup out of the
  page tree cut the main-thread block from about 600ms to 260ms.

> *Show: a short clip of the scene through one scroll.*
> Caption: `Desktop only. On phones the page tells the same story without it.`

## The hand that lived five hours

The scene's big moment was going to be the particles resolving into an open, presenting
hand. The commit record tells the whole story:

> *Show: three git log lines.*
> ```
> 12:23  hand added
> 12:40  pose corrected
> 17:33  hand removed
> ```
> Caption: `July 31. Built, refined, and deleted before dinner.`

It was impressive and it was wrong. Too theatrical for a company whose whole pitch is
quiet competence. What replaced it is calmer, built from the client's real content, and it
set the tone for the entire page. That one deletion shaped the site more than most of the
things I kept.

## Corrected against reality

The copy comes from a facts file, and reality got votes. After a client meeting in August,
the sector-to-capability mapping changed to match what they actually sell. A
decommissioned phone number came off. A customer count got fixed to the real figure.

I keep a running list of open decisions on every project. On this one it currently reads:
none pending. The site went live on the client's domain eleven days after the first
commit, and the engagement is still active, so it keeps getting sharper.

## How it was built

With Claude Code in the loop, under written rules: design values live in the code, the
docs hold the reasoning, and anything unmeasured gets measured before it ships. The
direction, the rules, the rejections, and every number above are mine. The typing mostly
wasn't.

## What this isn't

Turkish-only, because the client's market is Turkey. No user research; the structure came
from the client's sales reality. No business outcomes yet: the site is weeks old, and any
traffic claim would be invented. The scale figures above describe the client's product,
not the results of my design.
