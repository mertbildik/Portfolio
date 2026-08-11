# Spacing

Base unit `4px`. Every gap, pad and margin is a step on this scale. Nothing in between.

## The scale

| Step | Class | px | Use |
|---|---|---|---|
| 1 | `1` | 4 | Icon to dot, the tightest possible pair |
| 2 | `2` | 8 | A label and its value, stacked |
| 3 | `3` | 12 | Icon to label, dot to label, stat number to its eyebrow |
| 4 | `4` | 16 | Items inside one row. Eyebrow to the heading below it. |
| 5 | `6` | 24 | Small card padding. Heading to body. List item to list item. |
| 6 | `8` | 32 | Card padding (default). Gap between blocks in a stack. Gallery gap. |
| 7 | `10` | 40 | Form field groups. Section gap on mobile. |
| 8 | `12` | 48 | Grid column gap. Section gap from `lg` up. Large card padding. |
| 9 | `16` | 64 | Page top padding. Space above a page heading block. |
| 10 | `20` | 80 | Horizontal page gutter at `lg` (right side) |
| 11 | `24` | 96 | Case-study section gap on mobile. Vertical page padding. |
| 12 | `32` | 128 | Case-study section gap from `md` up. Horizontal gutter at `xl`. Page bottom. |
| 13 | `48` | 192 | Largest section break (the gap below the McKinsey stat grid) |

Steps `5`, `20`, `72` exist for exactly one job each and are not general-purpose: `py-5` on a portfolio row, `pl-20`/`pr-20` as the `lg` gutter, `pt-72` as the identity-column offset (see `layout.md`).

## Rhythm

These pairs are fixed. Do not re-tune them per page.

| Pair | Space | Class |
|---|---|---|
| Eyebrow → page heading | 16 | `mb-4` |
| Eyebrow → section heading | 32 | `mb-8` |
| Eyebrow → body or card content | 24 | `mb-6` |
| Heading → body | 24 | `mb-6` |
| Heading → a list or grid below it | 48 | `mb-12` |
| Label → value (stacked) | 4 | `mb-1` on the label, or `mt-1` on the value |
| Stat number → its label | 12 | `gap-3` |
| Icon → its label | 12 | `gap-3` |
| Dot → its label | 16 | `gap-4` |
| Back control → page heading | 64 / 96 | `mb-16 md:mb-24` |
| Section title → section content | 16 | `gap-4` with `mb-2` on the title |

## Blocks

| Block | Padding |
|---|---|
| Card, compact | 24 (`p-6`) |
| Card, default | 32 (`p-8`) |
| Grid cell, large | 32 → 48 (`p-8 lg:p-12`) |
| Panel, full width | 32 → 48 → 64 (`p-8 md:p-12 lg:p-16`) |
| Pill | 12 × 4 (`px-3 py-1`) |
| Tag | 8 × 4 (`px-2 py-1`) |
| Row, list | 24 vertical (`py-6`), 20 → 24 on a dense index (`py-5 lg:py-6`) |
| Row, grid cell | 32 vertical (`py-8`) |
| Input | 16 vertical (`py-4`) |
| Left-rule block | 24 left (`pl-6`) |

## Vertical rhythm of a page

| Distance | Mobile | `lg` and up |
|---|---|---|
| Page top padding | 96 (`py-24`) | 128 (`lg:py-32`) |
| Page bottom | 128 (`pb-32`) | 128 |
| Between sections, split pages | 40 (`gap-10`) | 48 (`lg:gap-12`) |
| Between sections, case studies | 96 (`space-y-24`) | 128 (`md:space-y-32`) |
| Between grid rows in a case study | 32 (`gap-8`) | 32 |
| Between stacked blocks in a section | 32 (`space-y-8`) | 32 |

## Optical corrections

Two nudges exist and are deliberate. Use them, do not invent new ones.

- `pl-[2px]` on a monospace eyebrow that sits above Inter text. Monospace has less left side bearing, and this lines the two up.
- `-ml-[1px]` / `-mx-2` / `mb-[-1px]` where adjacent cells or rows each draw a border, so the shared edge stays one pixel wide.

## Rules

- Gap over margin. Reach for `flex`/`grid` with a `gap` before adding margins to children.
- One spacing value per axis in a block. If a stack needs three different gaps, it is two blocks.
- Mobile drops one step, it does not halve. `gap-12` becomes `gap-10`, not `gap-6`.
- No arbitrary spacing values except the two optical corrections above.
