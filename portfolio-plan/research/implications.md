# Implications — what this research changes

The delta between what we planned/drafted and what the research found. Everything here is a
recommendation; nothing has been changed in `master-plan.md` or `copy/` yet.

## Corrections (facts the current plan or copy gets wrong)

1. **OFK's font reversal was same-day, not two weeks.** "Finalized" 09:33 Apr 6, replaced
   13:53 Apr 6; the written rationale came Apr 20. Master plan says "dropped two weeks
   later" — fix. Also: only the winning decision has documented reasoning; the case study
   can't quote why Barlow was picked.
2. **Sinerjik's "closed properly" needs softening.** The repo is still active (last commit the
   day of this research); "the open decisions list was worked down to empty" is true
   (decisions.md: none pending), but "closed" isn't. Say "finished, not abandoned" via the
   empty decisions list, without implying the work stopped.
3. **Sinerjik's test-suite line needs shrinking.** The Playwright *suite* lived ~24 hours
   (Aug 13→14); Playwright as a measurement tool predates and outlives it. Frame as
   "measure in the browser always; a persistent suite was tried and rejected in a day."
4. **Adclusive start-date conflict remains open**: old CV says Sep 2021, everything current
   says Aug 2021 (user-corrected). One final confirmation needed. Related: Adclusive AB was
   incorporated **Mar 2022** — the copy should say "from before the company was incorporated"
   once, because the registry is publicly checkable and shows 0 employees.
5. **Don't link adclusive.se** (dead, suspended hosting). Wayback snapshot if anything.
6. **OFK "200+ technical employees"** — the shipped site's "technical" qualifier is unsourced;
   the facts doc says "200+ employees." Use the doc's version in the case study.

## Upgrades (evidence found that's stronger than what the plan uses)

1. **OFK's reference-letter decision now has market proof.** Mid-tier industrial peers
   (Energop, AGAT, Naftoremont) publish logo walls, never letters; only small local firms scan
   letters. And reference letters are literally the first item in GC prequalification
   (Budimex, Warbud standards). The case study can make this argument against named reality
   instead of asserting it. Same for EN-first bilingual: OFK's actual buyer chain is
   Korean/Turkish contractors under Hyundai/Técnicas Reunidas, while the Polish norm is
   PL-first with broken English.
2. **Sinerjik's coded-demo solution is a named pattern** ("Simplified UI" — Microsoft/Dropbox/
   Google lineage, recommended specifically for legacy products with dated UIs) — and no
   reviewed Turkish competitor does anything like the live warehouse demo. The case study can
   place the decision in its category without claiming invention.
3. **Adclusive's pause has a near-perfect market anchor**: Adrecord (profitable, ~10 people,
   same country) sold to Adtraction in **October 2024, the same month**. One sentence of
   market context makes the pause checkable instead of private.
4. **The wireframe→shipped side-by-side** (Adclusive wireframe 2 vs. the shipped dashboard,
   structurally identical) is the strongest single Adclusive artifact — proves the process
   claim with zero prose.
5. **New Sinerjik material worth using**: the same-day hand arc with commit timestamps
   (12:23 → 12:40 → 17:33); the desktop-width lock cycle; the tabular-figures measurement
   (9.56px → 0); the "Linear applies its brand color to ~0.4% of text" audit line; Turkish-
   specific typography rules. New OFK material: `scroll-nav.js` in-code postmortem;
   `BilingualLabel.jsx` as a 34-line showable artifact; the brochure-email suppression as a
   concrete source-triage example.

## Structure (how the case studies should be built)

1. **Decision spine, not phases** — each section: context → constraint → decision → tradeoff →
   what changed. First five seconds of each page state role + what changed.
2. **The three case studies should not share a template**: Sinerjik demo-led (~20:80 toward
   visuals, live embeds), OFK constraint-led story (~60:40, ~2,000 words ceiling), Adclusive
   shortest, captions narrating year-labeled artifacts. Detail in `case-study-craft.md`.
3. **Let the reader touch the work**: live embeds/clips over screenshots wherever possible —
   the one presentation advantage this portfolio has over famous-logo portfolios.
4. **Adclusive images are thumbnails (425–537px) and cannot be shown large.** Either Mert
   supplies originals/Figma exports, or the small-artifacts framing is locked in by necessity.

## Voice (for the copy revision pass)

The drafted copy is close but should be re-edited against `writing.md` — specifically:
em-dash density (the drafts lean on them as connectors), "not X, it's Y" scaffolds, triads,
and punchline frequency. Buttons/nav/labels stay plain furniture. The full judgment list is
in `writing.md`; the existing hero lines already pass it.

## Open questions raised by research (for Mert)

1. Adclusive start month: Aug or Sep 2021? (Old CV vs. current copy.)
2. Sinerjik: is the engagement ongoing (repo active daily)? The case study tense depends on it.
3. Does OFK hold ISO certifications? Their absence on the live site is the one real category
   gap; if they exist, worth flagging to the client (like the 2018/"Since 2020" issue).
4. The positioning tension in `market-and-positioning.md`: keep "Product Designer" everywhere
   (the plan's decision) or lean toward the founding-designer/design-engineer framing the
   hiring data points at? The middle path — conservative title, higher-tier evidence — needs
   no plan change; a title change would.
5. Adclusive: can higher-resolution screens or Figma exports be recovered?
