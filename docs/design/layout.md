# Layout

The site is a narrow single scroll first, with wider case studies as a second shape.

## Frame

The shared frames set max width, gutters and vertical padding. `HomePageSection` owns the narrow homepage frame; `CaseStudyLayout` owns the wider case-study frame.

## Breakpoints

| Name | What changes |
|---|---|
| `md` | Content splits into two or three columns inside a block. Gutters widen. |
| `lg` | Case-study grids and the footer stamp switch on. |
| `xl` | Gutters become symmetric. |

`sm` is not used. The homepage stays one narrow column. Internal content grids collapse below their declared breakpoint.

## The single scroll

The homepage is one column: hero, work, contact, stacked. Each section carries an eyebrow, a heading, and its content. Nothing is hidden behind tabs or separate pages.

## Case studies

A narrow left rail carrying the timeline, tools and a sticky contents nav, one empty column as the gap, then the body. The rail is hidden below `lg`. Sections carry a scroll margin so anchored jumps clear the sticky rail.

## Grid

Case studies may use a 12-column grid from `lg`; the homepage frame does not.

## Measure

There is no measure token. Widths are Tailwind's `max-w-*` utilities, chosen by what the text is:

| Cap | For |
|---|---|
| `max-w-xs` | A section's lead paragraph |
| `max-w-md` | A paragraph inside a grid cell |
| `max-w-xl` | The one-line summary under a page heading |
| `max-w-2xl` | Case-study body copy. The default for prose. |
| `max-w-page` | The complete homepage section |

Prose never runs wider than `max-w-2xl`. If a block of text has no cap, add one.

A `min-width` is a guard, not a measure. The few that exist each stop one column collapsing under its own content.

## Stacking order

From back to front: the fixed background, then page content, then the footer stamp.

There are no modals, dropdowns or tooltips in the system, so nothing else claims a layer in this ladder. A local `z-10` inside a component, to lift a label above its own decoration, is not part of it.

## Sticky

Sticky elements clear the page top padding. The one sticky element is the case-study contents nav.
