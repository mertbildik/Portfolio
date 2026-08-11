# Layout

Two page shapes, one 12-column grid, one set of gutters.

## Frame

| Property | Value |
|---|---|
| Max width | `1600px`, centred (`max-w-[1600px] mx-auto`) |
| Min height | `100vh` per page |
| Vertical padding | `96px` mobile, `128px` from `lg` (`py-24 lg:py-32`) |

## Gutters

The left gutter is larger from `lg` up because the navigation rail is pinned there. This asymmetry is the system, not a bug.

| Breakpoint | Left | Right | Class |
|---|---|---|---|
| base | 24 | 24 | `px-6` |
| `md` | 48 | 48 | `md:px-12` |
| `lg` | 128 | 80 | `lg:pl-32 lg:pr-20` |
| `xl` | 128 | 128 | `xl:px-32` |

Both page shapes use this same set. Never define gutters inside a page component.

## Breakpoints

| Name | Min width | What changes |
|---|---|---|
| `md` | 768 | Content splits into 2 or 3 columns inside a block. Gutters widen. |
| `lg` | 1024 | **The layout breakpoint.** The 12-column grid switches on, navigation moves from a bottom pill to a left rail, the footer stamp appears. |
| `xl` | 1280 | Gutters become symmetric. The three display type sizes have already reached their maximum by ~890px. |

`sm` (640) is not used. Below `lg` every page is a single column stack.

## Grid

`grid-cols-1 lg:grid-cols-12`, column gap `48px` (`gap-12`).

### Split page (Home, Portfolio, Process, About, Contact)

```
lg:  [ 1  2  3  4 ][ 5  6  7  8  9 10 11 12 ]
       identity          content
```

| Region | Spec |
|---|---|
| Identity column | `lg:col-span-4`. Back control, eyebrow, `text-display-xl` heading, one lead paragraph capped at `max-w-xs` (320px). |
| Content column | `lg:col-span-8`, inner `lg:pl-12`, content capped at `max-w-3xl` (768px) and pushed right with `ml-auto`. |
| Identity offset | `lg:pt-72` (288px). Holds the heading at the optical centre while the content column scrolls past it. Applied on Portfolio, Process, About and Contact. |
| Alignment | `align="center"` centres the two columns against each other from `lg` up. Home uses it; the offset pages use it with the offset instead. |

Home inverts the emphasis: the identity column takes `col-span-8` and the action list takes `col-span-4`. This is the only page that does so.

### Case study page

```
lg:  [ 1  2  3 ][ 4 ][ 5  6  7  8  9 10 11 12 ]
        rail     gap            body
```

| Region | Spec |
|---|---|
| Rail | `lg:col-span-3 lg:col-start-1`, hidden below `lg`. Timeline, tools, and a `sticky top-32` contents nav. |
| Body | `lg:col-span-8 lg:col-start-5`. Column 4 is left empty as the gap. |
| Column gap | `gap-12 lg:gap-24` |
| Sections | `space-y-24 md:space-y-32`, each with `scroll-mt-32` so anchored jumps clear the sticky rail. |

Hand-written venture pages and the employment page use the full width instead of the rail, splitting content into `md:grid-cols-2` blocks with `gap-x-12 gap-y-24`.

## Measure

| Token | Width | Use |
|---|---|---|
| `measure-lead` | `max-w-xs` (320) | The lead paragraph in an identity column |
| `measure-narrow` | `max-w-md` (448) | A paragraph inside a grid cell |
| `measure-body` | `max-w-2xl` (672) | Case-study body copy. The default for prose. |
| `measure-column` | `max-w-3xl` (768) | The content column on a split page |
| `measure-hero` | `max-w-xl` (576) | The one-line summary under a page heading |

Prose never runs wider than `measure-body`. If a block has no cap, add one.

### Column guards

A `min-width` is a guard, not a measure. Three exist, each stopping a column from collapsing under its own content: `min-w-[300px]` on Home's action column, `lg:min-w-[280px]` on a label-plus-circle-button row, `max-w-[240px]` on the NDA note beside a rule. Do not add more without a collapse to prevent.

## Navigation

| Breakpoint | Placement |
|---|---|
| below `lg` | Fixed pill, bottom centre, `bottom-6`. `#050505/90` fill, `backdrop-blur-md`, `line` border, fully round, `p-4`, `gap-2`. Label reveals upward above the icon. |
| `lg` and up | Fixed rail, vertically centred, `left-9`. No fill, no border. Each item is a `44 × 64` slot; the label reveals to the right of the icon. |

Items are `44 × 44` minimum (`w-11 h-11`), which with the `8px` gap puts the icons on a `52px` pitch. Icons are `20px`, `strokeWidth={1.5}`. Labels are `text-eyebrow font-mono uppercase`.

| State | Icon | Label |
|---|---|---|
| Rest | `ink-low` below `lg`, `ink-faint` from `lg` (the rail sits on flat black, so it reads quieter) | hidden |
| Hover | `ink-mid` below `lg`, white from `lg` | revealed, white |
| Focus | white | revealed, white |
| Active route | white, `scale-110` below `lg` and `scale-100` from `lg` | hidden until hover |

Transitions run at `500ms`.

## Footer stamp

`Mert Bildik © 2026`, `text-caption font-mono uppercase` in `ink-low` at 40% opacity, fixed at `bottom-8 left-6 md:left-12`. Shown from `lg` up only, `pointer-events-none`. It belongs to `SplitPage`, so case-study pages do not carry it.

## Z-index

| Layer | z | Contents |
|---|---|---|
| 0 | `z-0` | Fixed background (canvas, dots, scrim). `pointer-events-none`. |
| 1 | `z-10` | `<main>` and page content |
| 2 | `z-20` | Identity column |
| 3 | `z-30` | Content column, so its interactive rows always sit above the heading |
| 4 | `z-40` | Footer stamp |
| 5 | `z-50` | Navigation |

Nothing else gets a z-index. There are no modals, dropdowns or tooltips in the system.

## Rules

- A page picks a shape (`SplitPage` or `Wrapped`) and does not restate the frame, gutters or max width.
- Every column stack collapses to one column below `lg`, in source order.
- The grid is 12 columns. Never 10, never 16, never a nested 12 inside a 12. The one exception is the Process step row, which runs its own `md:grid-cols-12` inside a single section.
- Sticky elements use `top-32` (128px) to clear the page top padding.
