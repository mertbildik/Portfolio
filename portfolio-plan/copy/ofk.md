# OFK Construction — case study

Meta title: `OFK Construction — Mert Bildik`
Meta description: `A 200-person Polish contractor with real projects and no website. Brand, design system, and a bilingual site — built so a buyer can verify the work.`

---

## Header

**OFK Construction**

Product Designer · Mar–Apr 2026 · [ofkconstruction.com](https://ofkconstruction.com) — live

React · Tailwind · Framer Motion · Lenis

A contractor with real projects and no way to prove them. Brand, design system, and a
bilingual website, built end to end so a buyer can check that the work is real.

---

## The situation

OFK is a Polish construction company with over 200 employees and a track record most
contractors would lead with: civil and building works on the Orlen Olefin expansion in
Płock, the Warsaw Fast Tramline, Polimery Police in Szczecin. Big, verifiable,
industrial-scale work.

And none of it was visible anywhere. No website, no brand beyond a logo. When a procurement
manager shortlisting subcontractors went looking, they found nothing. That's the whole
brief: make the track record checkable.

## The first deliverable was a list of facts

Before any design, I wrote a document sorting every claim the company could make by how well
we could back it up: client confirmations first, then signed reference letters, then the
brief, and everything else marked unconfirmed. It came with a rule I held myself to — no
invented certifications, no project outcomes beyond what the references say, no positioning
notes inflated into marketing copy.

That sounds bureaucratic until you see what it does to a construction website. Every project
on the site is one the client confirmed. Every reference is a real letter. One project that
lacked a reference letter is presented more modestly than the ones that have them. A buyer
who checks — and B2B buyers check — finds exactly what the site promised.

## The system came before the pages

The site is bilingual, English and Polish, and that decision shaped the build order: design
tokens, type rules, and motion rules first, pages second. When both languages share one
system, they can't drift apart — there's no "Polish version" to maintain, just one site
with two sets of words.

The details that came out of that are my favorite part of the project:

- The language toggle swaps EN and PL with zero layout shift. Every bilingual label reserves
  the width of its longer variant, so switching languages changes the words and moves
  nothing. It's a small thing you can feel.
- A rule from the codebase: numbers are data, not translation. If a figure shows up
  identically in both language files, it doesn't belong in either — it moves to the data
  layer, where it can't fork.
- 79 site photos run through an optimization pipeline instead of hand editing — consistent
  sizes, consistent naming, and one genuinely annoying Windows filename bug fixed along the
  way.

## The font decision I reversed

Two weeks in, I picked a display face and a text face and wrote "finalized" in the commit.
Two weeks later both were gone, replaced by a single variable typeface doing every job
through size, weight, and optical sizing. The pairing wasn't bad — it was more system than
the site needed, and cutting it made everything simpler: fewer rules, fewer files, one voice.
I'm including this because it's the decision that taught me the most on this project:
"finalized" is a word you should distrust in week two.

## Shipped

The site is live at ofkconstruction.com — Home, About, Projects, Services, Contact, in both
languages. The projects section shows confirmed scope with real numbers where they exist
(one pipeline job alone: 22 km of gravity pipeline, 710 manholes — the site counts them up).
Three signed reference letters from FABE POLSKA, ILK INSAAT, and YOOJEONG are on the site as
actual PDFs, not logos.

## How it was built

Solo, end to end, with Claude Code in the loop — and with the working rules written down
first. Three documents governed the project: what's true about the company, what the design
system allows, and how the code is organized. When the site and the docs disagreed, the docs
won. It's the same discipline I learned making slides survive partner review at McKinsey,
applied to a codebase.

## What I won't claim

There's no analytics on the site — the client didn't need it at launch — so I have no
traffic or lead numbers, and I'm not going to invent any. The outcome I can stand behind is
narrower and real: before, a buyer checking OFK found nothing. Now they find the projects,
the scope, and the letters.
