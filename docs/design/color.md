# Colour

The portfolio is dark-only: one charcoal canvas, four accessible inks, one integrated surface treatment, one subtle border and two semantic colours. Project imagery supplies every other colour. Values live only in `src/index.css`.

## Foundation

`canvas` is the page background and the backing inside image frames. A restrained white-alpha atmosphere gives the fixed canvas slight tonal variation without introducing another colour. The complete interface is composed for this canvas; there is no light palette or theme switching.

## Ink

| Token | Use |
|---|---|
| `ink-max` | The hero's single focal phrase; hover, focus, selected and active text |
| `ink-high` | Page and section headings, project titles, primary action labels and entered form values |
| `ink-body` | Paragraphs, descriptions, supporting sentences and links at rest |
| `ink-low` | Eyebrows, field labels, captions, years, timestamps, indexes and metadata |

`ink-low` is the darkest permitted text colour. Meaningful sentences use `ink-body` or brighter.

Split-tone headings are allowed only when the words carry different meaning. Colour follows meaning, never a line break. Ordinary headings use `ink-high`; only the hero may promote its focal phrase to `ink-max`.

A standalone text element declares its role. A link, button or grouped control may set one ink on its parent and let text and icons inherit it.

## Surfaces

`surface` is a flat translucent white-alpha layer for exceptional grouped content. The global canvas atmosphere remains visible through it, keeping surfaces integrated without an internal gradient. `fill` is the slightly stronger 2% tonal shift reserved for local interaction feedback. Neither treatment has a border.

There are no static divider lines. Sections, rows, grid cells and metadata columns separate through spacing and alignment.

`line` is the only resting border. Use it only where an edge genuinely clarifies an image or circle control. Inputs have no resting border. Functional lines such as link underlines, the BackLink rule and active markers are control feedback, not dividers.

## Interaction

Lift the whole control without flattening its hierarchy:

- Primary text moves from `ink-high` to `ink-max`.
- Supporting `ink-low` text moves to `ink-body`.
- Revealed icons use `ink-max`.
- Keyboard focus combines an ink lift with a tonal shift, revealed icon or functional control line. A bright perimeter is not the default.

Rows and links never gain a hover fill. A subtle `fill` may support keyboard focus when ink and icon feedback need a larger visible area. The circle action is the only hover exception: it inverts to an `ink-max` fill with `canvas` foreground. Text selection uses the same pair.

The contact form is open on the canvas with aligned rows between functional `line` boundaries. Labels rest at `ink-low`, prompts use `ink-body`, and values use `ink-high`. A focused row receives `fill`, an `ink-max` label and the existing plus marker; it does not gain an outline.

## Status

| Token | Use |
|---|---|
| `status-ok` | Current availability and confirmed success |
| `status-error` | A failure that requires attention |

Status colour is never decorative and never the only signal. Pair it with wording or a recognizable icon change. Neutral states use the ink ramp.

## Imagery

Screenshots, posters and portraits keep their original colours. Do not tint, desaturate, filter, blend or overlay them with a gradient. Their canvas backing and subtle frame make them belong to the site.

## Enforcement

- Static colours use tokens at full opacity. Opacity is reserved for motion, reveals and a disabled control as a whole.
- Interface code never uses raw colours, Tailwind's default palette or arbitrary alpha variants.
- Standalone assets that cannot consume CSS, such as the favicon, may repeat the matching canvas and white values.
- Do not add an accent, shade or semantic colour without a current interface need that the existing system cannot express.
