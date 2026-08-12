# Spacing

Base unit `4px`. Every gap, pad and margin is a step on Tailwind's default scale. Nothing in between, and nothing arbitrary.

The scale is used sparsely on purpose. A handful of steps carry almost everything: the tight pairs (a dot to its label, a label to its value), the block paddings, the column gap, and the page gutters. A step that appears once, for one job, stays that job's step and does not become a general choice.

## Rhythm

These pairs are fixed. Do not re-tune them per page.

| Pair | Class |
|---|---|
| Eyebrow → section heading | `mb-8` |
| Eyebrow → body or card content | `mb-6` |
| Heading → body | `mb-6` |
| Heading → a list or grid below it | `mb-12` |
| Label → value, stacked | `mb-1` on the label, or `mt-1` on the value |
| Stat number → its label | `gap-3` |
| Icon → its label | `gap-3` |
| Dot → its label | `gap-4` |

Distances that open a page, above the heading and below the back control, belong to the page shape rather than to the page. A page does not set them; `layout.md` covers where they live.

## Blocks

Padding sizes come in one set: compact, default, and a large step for grid cells and full-width panels that scales up with the breakpoint. A block picks one of them. There is no fourth size, and a block does not invent its own.

## Optical corrections

Two nudges are deliberate. Use them, and do not invent more.

- A small left inset on a monospace eyebrow sitting above Inter text. Monospace carries less left side bearing, and this lines the two up.
- A one pixel negative margin where adjacent cells or rows each draw a border, so the shared edge stays a single pixel.

## Rules

- Gap over margin. Reach for `flex` or `grid` with a `gap` before adding margins to children.
- One spacing value per axis in a block. If a stack needs three different gaps, it is two blocks.
- Mobile drops one step, it does not halve.
- The only arbitrary spacing values allowed are the two optical corrections above, and guards that stop a column collapsing under its own content.
