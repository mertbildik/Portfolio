# OFK Construction — case study

Meta title: `OFK Construction · Mert Bildik`
Meta description: `A 200-person Polish contractor with real projects and no website. Brand, design system, and a bilingual site, built so a buyer can verify the work.`

Page shape: the story of a delivery, told through its decisions. Each *Show:* line is a
media slot with caption copy. Target length ~1,800 words of body text or less.

---

## Header

**OFK Construction**

Product Designer · Mar–Apr 2026 · [ofkconstruction.com](https://ofkconstruction.com) (live)

React · Tailwind · Motion · Lenis

A contractor with real projects and no way to prove them. Brand, design system, and a
bilingual website, built end to end in one month.

---

## The situation

OFK is a Polish construction company with over 200 employees and a track record most
contractors would lead with: civil and building works on the Orlen Olefin expansion in
Płock, the Warsaw Fast Tramline, Polimery Police in Szczecin.

None of it was visible anywhere. No website, no brand beyond a logo. And the buyer here is
specific: procurement at a general contractor, shortlisting subcontractors. Their vetting
starts with a reference list and reference letters. When they went looking for OFK, they
found nothing. That was the brief: make the track record checkable.

## Day one was a list of facts

The first artifact in the repository isn't a mockup. It's a document sorting every claim
the company could make by how well we could back it up.

> *Show: an excerpt from the facts document.*
> ```
> When sources conflict, use this order:
>   1. Latest written client confirmations
>   2. Uploaded reference letters
>   3. Website brief
>   4. Brochure
>   5. Anything else = unconfirmed
>
> Do not invent certifications.
> Do not invent project outcomes beyond uploaded references.
> ```
> Caption: `In the repo from the first commit. Everything on the site traces back to this file.`

It sounds bureaucratic until you see what it does to a construction website. Every project
shown is one the client confirmed. A project without a reference letter is presented more
modestly than the ones that have one. The brochure carried an outdated email address; the
rule caught it before it shipped. A buyer who checks, and these buyers check, finds
exactly what the site promised.

## English first, and why

Polish contractor sites are Polish-first, with an English version that's often an
afterthought. But OFK's clients on the Orlen expansion are Korean and Turkish contractor
chains. The people vetting OFK read English. So the site leads in English, with a full
Polish version beside it.

That decision shaped the build order: design tokens, type rules, and motion rules first,
pages second. When both languages share one system, they can't drift apart. There is no
"Polish version" to maintain. One site, two sets of words.

- **The toggle moves nothing.** Every bilingual label reserves the width of its longer
  variant, so switching languages changes the words and shifts no layout. The whole
  mechanism is 34 lines of code.
- **Numbers are data, not translation.** If a figure shows up identically in both language
  files, it doesn't belong in either. It moves to the data layer, where it can't fork.
- **79 site photos** run through one optimization pipeline instead of hand editing, which
  also fixed a genuinely annoying Windows filename bug along the way.

> *Show: a 10-second clip of the EN/PL toggle, next to the 34-line component.*
> Caption: `Switching languages changes the words and moves nothing. The code fits on one screen.`

## The font decision that lasted four hours

The commit log keeps me honest here:

> *Show: two commit lines.*
> ```
> Apr 6, 09:33  Finalizing Barlow Semi Condensed & DM Sans
> Apr 6, 13:53  index.html now loads Inter
> ```
> Caption: `"Finalized" at breakfast, gone by lunch.`

The pairing wasn't bad. It was more system than the site needed: a condensed display face
and a grotesk body, each with its own rules. One variable typeface does every job through
size, weight, and optical sizing, and cutting the pair made everything simpler. Fewer
rules, fewer files, one voice. The lesson stuck: distrust the word "finalized" in week two.

## Proof a buyer can download

Contractors OFK's size usually prove themselves with a wall of client logos. Signed
reference letters tend to show up only on small local firms' sites, scanned onto a page
last touched years ago. OFK does the unusual thing: three signed letters, from FABE
POLSKA, ILK INSAAT, and YOOJEONG, published as actual PDFs.

That matters because letters are the first thing a general contractor's vetting asks for.
The site answers the question before anyone asks it.

The projects section backs the letters with confirmed scope and real numbers where they
exist. One pipeline job alone: 22 km of gravity pipeline and 710 manholes, and the site
counts them up on screen.

> *Show: the references section on the live site.*
> Caption: `Three signed reference letters, downloadable. Third-party proof, not self-praise.`

## Shipped

Live at ofkconstruction.com: Home, About, Projects, Services, Contact, in both languages.
First commit to last: one month.

## How it was built

Solo, end to end, with Claude Code in the loop and the working rules written down first.
Three documents governed the project: what's true about the company, what the design
system allows, and how the code is organized. When the site and the docs disagreed, the
docs won. It's the discipline I learned making slides survive partner review at McKinsey,
applied to a codebase.

> *Show: a short excerpt from the design-system rules.*
> ```
> On dark sections, use exactly these four opacity tiers.
> Do not introduce intermediate values.
> One accent color. Long-term commitment.
> ```
> Caption: `The system says no so the pages don't have to.`

## What I won't claim

There's no analytics on the site, so I have no traffic or lead numbers, and I won't invent
any. The outcome I can stand behind is narrower and real: before, a buyer checking OFK
found nothing. Now they find the projects, the scope, and the letters.
