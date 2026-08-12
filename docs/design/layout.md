# Layout

Two page shapes, one 12-column grid, one set of gutters. A page picks a shape and does not restate the frame, the gutters or the max width.

## Frame

The shared frame sets the page max width (`max-w-shell`), the gutters and the vertical padding. It lives in the two layout components, `SplitPage` and `Wrapped`, and nowhere else.

The left gutter is wider than the right from `lg` up, because the navigation rail is pinned there. This asymmetry is the system, not a bug. Both shapes use the same set, and a page component never defines its own.

## Breakpoints

| Name | What changes |
|---|---|
| `md` | Content splits into two or three columns inside a block. Gutters widen. |
| `lg` | **The layout breakpoint.** The 12-column grid switches on, navigation moves from a bottom pill to a left rail, the footer stamp appears. |
| `xl` | Gutters become symmetric. |

`sm` is not used. Below `lg` every page is a single column stack, in source order.

## Grid

Twelve columns from `lg`, one below it.

**Split page.** An identity column carrying the back control, eyebrow, page heading and one short lead paragraph, beside a wider content column. The content column is capped and pushed to the right edge so it aligns with the frame. Most split pages hold the heading near the optical centre with a top offset while the content scrolls past it. Home inverts the two column widths and is the only page that does.

**Case study.** A narrow left rail carrying the timeline, tools and a sticky contents nav, one empty column as the gap, then the body. The rail is hidden below `lg`. Sections carry a scroll margin so anchored jumps clear the sticky rail.

A page whose content is its own design may use the full width instead of the rail.

The grid is 12 columns. Never 10, never 16, and never a nested 12 inside a 12.

## Measure

There is no measure token. Widths are Tailwind's `max-w-*` utilities, chosen by what the text is:

| Cap | For |
|---|---|
| `max-w-xs` | The lead paragraph in an identity column |
| `max-w-md` | A paragraph inside a grid cell |
| `max-w-xl` | The one-line summary under a page heading |
| `max-w-2xl` | Case-study body copy. The default for prose. |
| `max-w-3xl` | The content column on a split page |

Prose never runs wider than `max-w-2xl`. If a block of text has no cap, add one.

A `min-width` is a guard, not a measure. The few that exist each stop one column collapsing under its own content. Do not add one without a collapse to prevent.

## Navigation

Below `lg` it is a fixed pill at the bottom centre, with a fill, a blur and a border, and the label reveals above the icon. From `lg` it is a fixed rail on the left, vertically centred, with no fill and no border, and the label reveals beside the icon.

The rail sits on flat black, so it rests one step darker than the pill does. Every item is at least a 44px target, the label is hidden until hover or focus, and the active route is white.

## Stacking order

From back to front: the fixed background, then page content, then the identity column, then the content column so its interactive rows always sit above the heading, then the footer stamp, then navigation.

There are no modals, dropdowns or tooltips in the system, so nothing else claims a layer in this ladder. A local `z-10` inside a component, to lift a label above its own decoration, is not part of it.

## Sticky

Sticky elements clear the page top padding. The one sticky element is the case-study contents nav.
