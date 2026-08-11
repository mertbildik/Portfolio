# Surfaces

Structure is drawn with 1px rules. Fills mark state. Nothing casts a shadow. Nothing is rounded except a pill.

## Radius

| Token | Value | Class | Applies to |
|---|---|---|---|
| `radius-none` | 0 | (default) | **Everything structural.** Cards, panels, image frames, grid lattices, inputs, segmented cells, tags, rows, dividers. |
| `radius-full` | 999 | `rounded-full` | Pills, circle buttons, dots, the mobile nav |

There is no 2px, 4px, 8px, 12px or 16px radius. A box is square or it is a pill. Nothing in between.

This one enforces itself: `src/index.css` clears the `--radius-*` namespace, so `rounded-sm`, `rounded-md`, `rounded-lg` and `rounded-xl` **do not exist** and produce no CSS. `rounded-full` and `rounded-none` are built in and still work. If a box needs to feel lighter, change its fill, not its corners.

If a middle radius is ever genuinely wanted, delete the `--radius-*: initial;` line in `index.css` and the whole default scale comes back.

## Elevation

There is none. No `box-shadow`, no `drop-shadow`, no glow. A surface separates from the canvas with a border, optionally plus `fill-subtle`.

Two exceptions, neither of them elevation:

- `ring-4 ring-canvas` on the timeline node, which punches the dot out of the rule behind it. Tailwind renders a ring as a box-shadow, so it shows up in a shadow audit. It is a cut-out, not a lift.
- `backdrop-blur-md` on the mobile navigation pill, the only element that sits on top of content.

## The lattice

Multi-cell grids draw one shared border, not a border per cell. The container carries the opening edges and each cell carries the closing edges.

```
container:  border-t border-l border-line
cell:       border-r border-b border-line
```

It works mirrored too, when the cell is a shared component that cannot know its position: the container takes `border-r border-b` and the cell takes `border-l` plus its own top rule (`absolute top-0 left-0 w-full h-px bg-line`). The stat grid is built this way. Pick one direction per grid.

Used by the segmented control, the capabilities grid, the stat grid and the About index grid.

Where cells sit side by side without a container border, the following cell takes `border-l` and pulls the shared edge back with `-ml-[1px]`. Only the *following* cells carry a rule, never the first one, so a three-column row draws two lines and not four.

**Declare a lattice rule at the same breakpoint the grid appears at.** A `md:grid-cols-3` whose rules are `lg:border-l` shows three columns with no separators between `md` and `lg`. The About grid had exactly this bug.

A grid drawn this way has no doubled lines and no rounded corners.

## Dots

Three sizes, each with one job.

| Size | Class | Use |
|---|---|---|
| 4px | `w-1 h-1` | A bullet marker in a list. Sits `mt-2` / `mt-2.5` to align with the first line, `shrink-0`, `gap-3` or `gap-4` to the text. |
| 5px | `w-[5px] h-[5px]` | A timeline node, with `ring-4 ring-canvas` punching it out of the rule behind it |
| 6px | `w-1.5 h-1.5` | A status dot, or the marker on a standalone list of one-line items |

**A marker uses the same ink as the text it marks.** A list in `text-ink-body` gets a `bg-ink-body` dot. Markers do not react to hover, because a list is not a control. Nothing darker than `ink-faint` is a marker ink; a dot that dark is invisible on the canvas.

The one dot off the ink ramp is the timeline node (`bg-node`), which is a physical node on a rule rather than a piece of text.

## Interaction: what may react

**Hover belongs to things you can click.** A block of text does not light up because a pointer crossed it. If an element is not a `<button>`, an `<a>` or a `<Link>`, it has no `hover:` class, no `group`, and no transition.

This rules out the hover states that used to sit on the capabilities grid, the stat blocks, the About index cells, the process steps, the toolkit list, the case-study impact cards, the key-decision blocks and the NDA panel texture. Those are all content. They hold still.

A `group` with nothing reading it is dead markup. Delete it with the hover.

## Recipes

### Card

A self-contained block of content sitting inside a section. Square, one border weight, no hover.

```
filled:   p-8  bg-fill-subtle  border border-line
empty:    p-8  border border-line
```
Compact variant: `p-6`. Contents: `text-card-title` in white, then `text-body-sm` in `ink-low`.

The fill is the only difference between the two. The border does not thin out because a fill arrived.

### Panel

A full-width block that holds a two-column layout rather than a single idea.

```
p-8 md:p-12 lg:p-16  bg-fill-subtle  border border-line
inner split: border-t lg:border-t-0 lg:border-l between the halves
optional dot texture at opacity-[0.03], static
```

### Left-rule block

The default way to list decisions, outputs or principles. No box, no hover.

```
pl-6  border-l border-line
```
`pl-6` is the only inset. There is no `pl-8` variant and no all-round `p-6` variant. Stack them with `gap-8` or wider so the rules read as separate marks rather than one continuous line.

The Contact success panel is the same block with `border-line-active`, because it reports a completed state.

### Grid cell

```
border-b border-r border-line
capability cell: p-8 lg:p-12  min-h-[320px]
stat cell:       p-6          min-h-[180px]
```
No hover. The lattice and the content carry it.

### Pill (status)

```
inline-flex items-center gap-3  px-3 py-1  rounded-full
bg-fill-raised  border border-line
dot: w-1.5 h-1.5 rounded-full
label: text-caption font-mono uppercase, ink-mid
```

### Tag

```
px-2 py-1  bg-fill-subtle  border border-line
text-caption, ink-low, text-nowrap
Wrapped in flex-wrap gap-2.
```
Square, like everything else. Wrapped in `flex-wrap gap-2`.

### Circle button

The primary call to action, and one of the few things that does react to a pointer. Always paired with a text label to its left, the whole row being the link.

| Size | Class | Icon |
|---|---|---|
| Default | `w-12 h-12` | 20px |
| Compact | `w-10 h-10` | 16px |

```
rounded-full  border border-line-strong  flex items-center justify-center
text-ink-max
hover (on group): bg-fill-inverse  text-ink-inverse   (transition-all duration-300)
```
The wrapper states the icon's ink at both ends, because a `lucide` icon draws with
`currentColor` and carries no colour of its own.

### Row (index list)

```
py-6  border-b border-line
focus-visible: border-line-active          (transition-colors duration-300)
Layout from lg: grid-cols-[14rem_1fr_auto]
  title      text-card-title, ink-mid → white on hover, truncate
  role       text-caption font-mono uppercase, ink-faint, hidden below md
  year       text-caption font-mono, ink-faint
  arrow      opacity-0 -translate-x-2 → opacity-100 translate-x-0
```
**A row never fills.** Not on hover, not on focus. It signals with ink, its arrow, and its rule. Keyboard focus takes the rule to `line-active` (white), which is what makes `outline-none` allowed on the link.

Put `group` on the link itself, not on a wrapper, so `group-hover` and `group-focus-visible` both resolve against the element that actually takes focus. A `group` on a non-focusable wrapper forces `group-focus-within`, which also fires on a mouse click.

Below `lg` the three-column grid collapses to a baseline-aligned row of title and year.
A dense index uses `py-5 lg:py-6`. A sparse list of three or four items uses `py-6 md:py-8` with `border-t` instead.

### Input

```
block w-full  bg-transparent  border-b border-line  py-4  text-body
focus: border-line-active, outline-none   (transition-colors duration-300)
```
The label sits above the field as `text-button font-mono uppercase`, `ink-faint` at rest and white when the field is focused or filled. A `+` marker in `text-caption font-mono` fades in at the right edge on focus. Placeholders are transparent, the label is the only visible prompt. A textarea grows with its content between `40px` and `160px`.

### Segmented cell

A control, so it hovers.

```
grid: grid-cols-2 md:grid-cols-3, container border-t border-l
h-14 md:h-16  border-r border-b border-line
label: text-button font-mono uppercase
rest:     bg-transparent  ink-low   hover: white + bg-fill-subtle
selected: bg-fill-inverse  ink-inverse  + 8px corner marker top-right in ink-inverse
transition-all duration-300
```

### Back control

One control, everywhere. Case-study pages and top-level pages both use it.

```
group inline-flex items-center gap-3  text-ink-max  opacity-40 → 100 on hover  (duration-300)
rule:  h-[1px] w-8 bg-current → w-12 on hover  (transition-[width] duration-300 ease-out)
label: text-button font-mono uppercase, "GO BACK"
aria-label="Go back"
```
`text-ink-max` is load-bearing: the rule is drawn with `bg-current`, so the label's
ink is also the rule's ink. Strength comes from the opacity, not from the colour.
It returns to the previous history entry, falling back to `/portfolio`.

### Section eyebrow

Every section on every page opens the same way: a bare monospace label, no rule beside it.

```
text-eyebrow font-mono uppercase
case study, venture, employment:  ink-faint,  block mb-8 (or space-y-8)
split page:                       ink-low,    pl-[2px] mb-2
```

There is no rule-plus-label section marker. The `w-8 h-[1px] bg-line-strong` version that sat on employment pages is gone; the numbered labels (`01 — The Problem`) already carry the structure, and a decorative rule competes with them.

### Timeline

```
container: relative pl-6 lg:pl-8
line:      absolute left-0 top-2 bottom-2 w-px bg-line, animates scaleY 0 → 1 from the top
node:      w-[5px] h-[5px] rounded-full bg-node ring-4 ring-canvas
```
Static. The steps are content, not controls.

## States

| State | What changes |
|---|---|
| Rest | Ink one to two steps down the ramp. Border at `line`. No fill. |
| Hover | **Controls only.** Ink lifts one step. Any reveal (arrow, label) slides in. A fill appears only on the segmented cell and the circle button. |
| Focus | Everything hover does, plus a border that survives without a pointer: the rule goes to `line-active`. Never a fill. See `accessibility.md`. |
| Selected / active | Ink goes white, border goes `line-active`, or the element inverts to `fill-inverse` with `ink-inverse`. |
| Loading | The label states the action in progress ("Sending..."). The control also takes the disabled treatment. No spinner exists in the system. |
| Disabled | `opacity-50` and `cursor-not-allowed`, nothing else. |

## Rules

- Border first, fill second. A fill never replaces a border.
- **One border alpha.** `border-line` is the structural line, everywhere. There is no second, quieter weight for nested things. Mixing alphas inside one composition reads as an accident, and the cure is to use one, not to document two.
- A rest fill is `fill-subtle` (2%). It is never brighter, and it never marks focus.
- Nothing rounds. Not cards, not tags, not grids, not image frames, not inputs.
- If it is not clickable, it does not react.
- Do not nest a card inside a card. Use a left-rule block inside a card instead.
