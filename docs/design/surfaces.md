# Surfaces

Structure is drawn with 1px rules. Fills mark state. Nothing casts a shadow.

## Radius

| Token | Value | Class | Applies to |
|---|---|---|---|
| `radius-none` | 0 | (default) | **Image frames, grid lattices, full-width panels, inputs, segmented cells, dividers.** The default for anything structural. |
| `radius-sm` | 4 | `rounded` | Tags |
| `radius-md` | 8 | `rounded-lg` | Cards: a self-contained block of content sitting inside a section |
| `radius-full` | 999 | `rounded-full` | Pills, circle buttons, dots, the mobile nav |

There is no 2px, 12px or 16px radius. `rounded-sm` folds into `radius-none`.

## Elevation

There is none. No `box-shadow`, no `drop-shadow`, no glow. A surface separates from the canvas with a border, optionally plus `fill-subtle`. The only blur in the system is `backdrop-blur-md` on the mobile navigation pill.

## The lattice

Multi-cell grids draw one shared border, not a border per cell. The container carries the opening edges and each cell carries the closing edges.

```
container:  border-t border-l border-white/[0.08]
cell:       border-r border-b border-white/[0.08]
```

It works mirrored too, when the cell is a shared component that cannot know its position: the container takes `border-r border-b` and the cell takes `border-l` plus its own top rule (`absolute top-0 left-0 w-full h-px bg-white/[0.08]`). The stat grid is built this way. Pick one direction per grid.

Used by the segmented control, the capabilities grid and the stat grid. A grid drawn this way has no doubled lines and no rounded corners.

Where cells sit side by side without a container border, pull the shared edge back with `-ml-[1px]`.

## Dots

Three sizes, each with one job.

| Size | Class | Use |
|---|---|---|
| 4px | `w-1 h-1` | A bullet marker in a list. Sits `mt-2` / `mt-2.5` to align with the first line, `shrink-0`, `gap-3` or `gap-4` to the text. |
| 5px | `w-[5px] h-[5px]` | A timeline node, with `ring-4 ring-[#111111]` punching it out of the rule behind it |
| 6px | `w-1.5 h-1.5` | A status dot, or the marker on a standalone list of one-line items |

Marker ink follows the list. A static list uses the same ink as its text. A list whose row responds to hover uses `ink-faint` and goes white on hover.

## Recipes

### Card

Border weight follows the fill. A card already lifted off the canvas needs less edge.

```
filled at rest:   p-8  bg-white/[0.02]  border border-white/[0.05]  rounded-lg
empty at rest:    p-8  border border-white/[0.08]  rounded-lg
                  hover: bg-white/[0.02]   (transition-colors duration-300)
```
Compact variant: `p-6`. Contents: `text-card-title` in white, then `text-body-sm` in `ink-low`.

### Panel

A full-width block that holds a two-column layout rather than a single idea. Not a card: it keeps `line` even though it carries a fill, and it has no radius.

```
p-8 md:p-12 lg:p-16  bg-white/[0.02]  border border-white/[0.08]
inner split: border-t lg:border-t-0 lg:border-l between the halves
optional dot texture at opacity-[0.03] → opacity-[0.05] on group hover
```

### Left-rule block

The default way to list decisions, outputs or principles. No box.

```
pl-6  border-l border-white/[0.08]
hover: border-white/40 + bg-white/[0.02]   (duration-300)
```

### Grid cell

```
p-8 lg:p-12  border-b border-r border-white/[0.08]
hover: bg-white/[0.02]  (duration-500)
min-h-[320px] for a capability cell, min-h-[180px] for a stat cell
```

### Pill (status)

```
inline-flex items-center gap-3  px-3 py-1  rounded-full
bg-white/[0.03]  border border-white/[0.08]
dot: w-1.5 h-1.5 rounded-full
label: text-caption font-mono uppercase, ink-mid
```

### Tag

```
px-2 py-1  rounded  bg-white/[0.02]  border border-white/[0.05]
text-caption, ink-low, text-nowrap
Wrapped in flex-wrap gap-2.
```

### Circle button

The primary call to action. Always paired with a text label to its left, the whole row being the link.

| Size | Class | Icon |
|---|---|---|
| Default | `w-12 h-12` | 20px |
| Compact | `w-10 h-10` | 16px |

```
rounded-full  border border-white/20  flex items-center justify-center
hover (on group): bg-white  text-[#111111]   (transition-all duration-300)
```

### Row (index list)

```
py-6  border-b border-white/[0.08]
hover: bg-white/[0.02]  (duration-300)
Layout from lg: grid-cols-[14rem_1fr_auto]
  title      text-card-title, ink-mid → white on hover, truncate
  role       text-caption font-mono uppercase, ink-faint, hidden below md
  year       text-caption font-mono, ink-faint
  arrow      opacity-0 -translate-x-2 → opacity-100 translate-x-0
```
Below `lg` the three-column grid collapses to a baseline-aligned row of title and year.
A dense index uses `py-5 lg:py-6`. A sparse list of three or four items uses `py-6 md:py-8` with `border-t` instead.

### Input

```
block w-full  bg-transparent  border-b border-white/[0.08]  py-4  text-body
focus: border-white, outline-none   (transition-colors duration-300)
```
The label sits above the field as `text-button font-mono uppercase`, `ink-faint` at rest and white when the field is focused or filled. A `+` marker in `text-caption font-mono` fades in at the right edge on focus. Placeholders are transparent, the label is the only visible prompt. A textarea grows with its content between `40px` and `160px`.

### Segmented cell

```
grid: grid-cols-2 md:grid-cols-3, container border-t border-l
h-14 md:h-16  border-r border-b border-white/[0.08]
label: text-button font-mono uppercase
rest:     bg-transparent  ink-low   hover: white + bg-white/[0.02]
selected: bg-white  ink-inverse  + 8px corner marker top-right in ink-inverse
transition-all duration-300
```

### Back control

One control, everywhere. Case-study pages and top-level pages both use it.

```
group inline-flex items-center gap-3  opacity-40 → 100 on hover  (duration-300)
rule:  h-[1px] w-8 bg-current → w-12 on hover  (transition-[width] duration-300 ease-out)
label: text-button font-mono uppercase, "GO BACK"
aria-label="Go back"
```
It returns to the previous history entry, falling back to `/portfolio`.

### Section marker

The heading pattern for a full-width section on a case study or venture page.

```
flex items-center gap-4
rule:  w-8 h-[1px] bg-white/20
label: text-eyebrow font-mono uppercase, ink-low
```
Split pages use the bare eyebrow instead, with `pl-[2px] mb-2`.

### Timeline

```
container: relative pl-6 lg:pl-8
line:      absolute left-0 top-2 bottom-2 w-px bg-white/[0.08], animates scaleY 0 → 1 from the top
node:      w-[5px] h-[5px] rounded-full bg-neutral-700 ring-4 ring-[#111111]
hover:     node bg-neutral-400, ring neutral-800  (duration-500)
```

## States

Every interactive surface uses the same four-state vocabulary.

| State | What changes |
|---|---|
| Rest | Ink one to two steps down the ramp. Border at `line`. No fill. |
| Hover | Ink lifts one step. Fill goes to `fill-subtle`. Any reveal (arrow, label) slides in. |
| Focus | Same as hover, plus a visible border or fill that survives without a pointer. See `accessibility.md`. |
| Selected / active | Ink goes white, border goes `line-active`, or the element inverts to `fill-inverse` with `ink-inverse`. |
| Loading | The label states the action in progress ("Sending..."). The control also takes the disabled treatment. No spinner exists in the system. |
| Disabled | `opacity-50` and `cursor-not-allowed`, nothing else. |

## Rules

- Border first, fill second. A fill without a border only appears as a hover state on a row.
- One border alpha per composition. Mixing `0.05` and `0.08` inside one card reads as an accident.
- A hover fill is `fill-subtle` (2%). It is never brighter.
- Do not round a grid. Lattices, image frames and inputs stay square.
- Do not nest a card inside a card. Use a left-rule block inside a card instead.
