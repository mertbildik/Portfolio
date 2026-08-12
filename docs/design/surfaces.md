# Surfaces

Structure is drawn with hairline rules. Fills mark state. Nothing casts a shadow. Nothing is rounded except a pill.

## Radius

A box is square or it is a pill. Nothing in between.

Everything structural is square: cards, panels, image frames, grid lattices, inputs, segmented cells, tags, rows. Only pills, circle buttons, dots and the mobile navigation are round.

This one enforces itself. `src/index.css` clears the radius namespace, so `rounded-sm`, `rounded-md`, `rounded-lg` and `rounded-xl` produce no CSS at all; `rounded-full` and `rounded-none` are built in and survive. If a box needs to feel lighter, change its fill, not its corners. Restoring the middle scale means deleting one line in `index.css`, and that is a design decision, not a fix.

## Elevation

There is none. No `box-shadow`, no `drop-shadow`, no glow. A surface separates from the canvas with a border, and optionally a subtle fill.

Two things look like shadows and are not:

- The ring on the timeline node, which punches the dot out of the rule behind it. Tailwind renders a ring as a box-shadow, so it shows up in a shadow audit. It is a cut-out, not a lift.
- The blur behind the mobile navigation pill, the only element that sits on top of content.

## The lattice

A multi-cell grid draws one shared border, not a border per cell. The container carries the opening edges and each cell carries the closing edges. It works mirrored too, when the cell is a shared component that cannot know its position. Pick one direction per grid.

Where cells sit side by side without a container border, only the *following* cells draw a rule and pull the shared edge back by one pixel, so a three-column row draws two lines and not four.

**Declare a lattice rule at the same breakpoint the grid appears at.** A grid that splits into three columns at `md` but declares its separators at `lg` shows three columns with no lines between them.

A grid drawn this way has no doubled lines and no rounded corners.

## Dots

Three, each with one job: a bullet marking a list item, a node sitting on a timeline rule, and a status dot. They are close in size and not interchangeable.

**A marker uses the same ink as the text it marks.** A list in `ink-body` gets an `ink-body` dot. Markers do not react to hover, because a list is not a control. Nothing darker than `ink-faint` is a marker ink; a dot that dark is invisible on the canvas.

The timeline node is the one dot off the ink ramp, because it is a physical mark on a rule rather than a piece of text.

## Interaction: what may react

**Hover belongs to things you can click.** A block of text does not light up because a pointer crossed it. If an element is not a `<button>`, an `<a>` or a `<Link>`, it carries no `hover:` class, no `group`, and no transition. Grids of content, stat blocks, process steps and decision lists all hold still.

A `group` with nothing reading it is dead markup. Delete it along with the hover.

## The named blocks

The system has one block for each job. Reuse the block; do not invent a variant of it.

| Block | The decision behind it |
|---|---|
| **Card** | A self-contained idea inside a section. Square, one border weight, no hover. Comes filled or empty, and the fill is the only difference: the border does not thin out because a fill arrived. |
| **Panel** | A full-width block holding a two-column layout rather than a single idea. Padding scales up with the breakpoint; the split inside it is drawn with a rule. |
| **Left-rule block** | The default way to list decisions, outputs or principles. A rule, not a box. One left inset, no all-round variant, no hover. Stack them with a wide enough gap that the rules read as separate marks and not one continuous line. |
| **Grid cell** | A cell in a lattice. It sets a minimum height so a sparse cell does not collapse. The lattice and the content carry it, so it has no hover. |
| **Pill** | A round badge, raised fill, for a status with a dot and a monospace label. |
| **Tag** | A square chip, subtle fill, for one word of metadata. Never round. Wrapped in a flex row that wraps. |
| **Circle button** | The primary call to action, and one of the few things that reacts to a pointer. It inverts on hover. Always paired with a text label to its left, the whole row being the link. The wrapper states the icon's ink at both ends, because an icon draws with `currentColor` and carries none of its own. Two sizes, default and compact. |
| **Row** | An item in an index list, separated by a rule. **A row never fills.** Not on hover, not on focus. It signals with ink, its arrow and its rule. Keyboard focus takes the rule to `line-active`, and that is what earns the `outline-none` on the link. Put `group` on the link itself, not a wrapper, so hover and focus both resolve against the element that actually takes focus. |
| **Input** | An underline, not a box. Placeholders are transparent by design, so the floating label is the only visible prompt, and it goes white when the field is focused or filled. A textarea grows with its content between a floor and a ceiling. |
| **Segmented cell** | A control, so it hovers. Rest is transparent with dim ink; selected inverts to a white fill with a corner marker punched out of it. |
| **Back control** | One control everywhere, on both page shapes. A rule that grows on hover beside a monospace label. Its ink is load-bearing, because the rule is drawn with `bg-current` and takes the label's colour; strength comes from opacity, not from a second colour. It returns to the previous history entry, falling back to the portfolio index. |
| **Section eyebrow** | Every section opens the same way: a bare monospace label with no rule beside it. There is no rule-plus-label section marker in the system, because a numbered label already carries the structure and a decorative rule competes with it. |
| **Timeline** | A vertical rule that draws itself in from the top, with a node per step. Static after that. The steps are content, not controls. |

## States

| State | What changes |
|---|---|
| Rest | Ink one to two steps down the ramp. Border at `line`. No fill. |
| Hover | **Controls only.** Ink lifts one step. Any reveal slides in. A fill appears only on the segmented cell and the circle button. |
| Focus | Everything hover does, plus a border that survives without a pointer: the rule goes to `line-active`. Never a fill. See `accessibility.md`. |
| Selected / active | Ink goes white and the border goes `line-active`, or the element inverts to a white fill with inverse ink. |
| Loading | The label states the action in progress. The control also takes the disabled treatment. No spinner exists in the system. |
| Disabled | Reduced opacity and a not-allowed cursor, nothing else. |

## Rules

- Border first, fill second. A fill never replaces a border.
- **One border weight.** There is no second, quieter weight for nested things. Mixing weights inside one composition reads as an accident, and the cure is to use one, not to document two.
- A rest fill is `fill-subtle`. It is never brighter, and it never marks focus.
- Nothing rounds. Not cards, not tags, not grids, not image frames, not inputs.
- If it is not clickable, it does not react.
- Do not nest a card inside a card. Use a left-rule block inside a card instead.
