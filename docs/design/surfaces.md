# Surfaces

Structure is drawn with hairline rules. Fills mark state. Nothing casts a shadow.

## Radius

Boxes carry one minimal radius (6px). Pills, dots, circle buttons and the portrait are full circles. Nothing in between.

`src/index.css` maps the radius scale to that one value, so `rounded-sm`, `rounded-md`, `rounded-lg` and `rounded-xl` are the same corner; `rounded-full` and `rounded-none` are built in. If a box needs to feel lighter, change its fill, not its corners.

## Elevation

There is none. No `box-shadow`, no `drop-shadow`, no glow. A surface separates from the canvas with a border, and optionally a subtle fill.

One thing looks like a shadow and is not: the ring on the timeline node, which punches the dot out of the rule behind it.

## The lattice

A multi-cell grid draws one shared border, not a border per cell. The container carries the opening edges and each cell carries the closing edges. It works mirrored too, when the cell is a shared component that cannot know its position. Pick one direction per grid.

Where cells sit side by side without a container border, only the following cells draw a rule and pull the shared edge back by one pixel, so a three-column row draws two lines and not four.

Declare a lattice rule at the same breakpoint the grid appears at.

A grid drawn this way has no doubled lines and no rounded corners.

## Dots

Three, each with one job: a bullet marking a list item, a node sitting on a timeline rule, and a status dot. They are close in size and not interchangeable.

A marker uses the same ink as the text it marks. Markers do not react to hover. Nothing darker than `ink-faint` is a marker ink.

The timeline node is the one dot off the ink ramp.

## Interaction: what may react

Hover belongs to things you can click. If an element is not a `<button>`, an `<a>` or a `<Link>`, it carries no `hover:` class, no `group`, and no transition.

A `group` with nothing reading it is dead markup. Delete it along with the hover.

## The named blocks

| Block | The decision behind it |
|---|---|
| **Card** | A self-contained idea inside a section. One border weight, no hover. Comes filled or empty, and the fill is the only difference. |
| **Panel** | A full-width block holding a two-column layout rather than a single idea. Padding scales up with the breakpoint; the split inside it is drawn with a rule. |
| **Left-rule block** | The default way to list decisions, outputs or principles. A rule, not a box. One left inset, no all-round variant, no hover. |
| **Grid cell** | A cell in a lattice. It sets a minimum height so a sparse cell does not collapse. |
| **Pill** | A round badge, raised fill, for a status with a dot and a label. |
| **Tag** | A chip, subtle fill, for one word of metadata. Never round. |
| **Circle button** | The primary call to action. It inverts on hover. Always paired with a text label to its left. |
| **Row** | An item in an index list, separated by a rule. A row never fills. It signals with ink, its arrow and its rule. |
| **Input** | An underline, not a box. Placeholders are transparent; the floating label is the only visible prompt, and it goes white when focused or filled. |
| **Segmented cell** | A control, so it hovers. Rest is transparent with dim ink; selected inverts to a white fill. |
| **Back control** | One control everywhere. A rule that grows on hover beside a label. |
| **Section eyebrow** | Every section opens with a bare label, no rule beside it. |
| **Timeline** | A vertical rule that draws itself in from the top, with a node per step. Static after that. |

## States

| State | What changes |
|---|---|
| Rest | Ink one to two steps down the ramp. Border at `line`. No fill. |
| Hover | Controls only. Ink lifts one step. Any reveal slides in. A fill appears only on the segmented cell and the circle button. |
| Focus | Everything hover does, plus a border that survives without a pointer: the rule goes to `line-active`. Never a fill. |
| Selected / active | Ink goes white and the border goes `line-active`, or the element inverts to a white fill with inverse ink. |
| Loading | The label states the action in progress. The control also takes the disabled treatment. No spinner exists. |
| Disabled | Reduced opacity and a not-allowed cursor, nothing else. |

## Rules

- Border first, fill second. A fill never replaces a border.
- One border weight. There is no second, quieter weight for nested things.
- A rest fill is `fill-subtle`. It is never brighter, and it never marks focus.
- Boxes take the minimal radius; pills, dots, buttons and the portrait are full circles. Nothing rounds otherwise.
- If it is not clickable, it does not react.
- Do not nest a card inside a card. Use a left-rule block inside a card instead.
