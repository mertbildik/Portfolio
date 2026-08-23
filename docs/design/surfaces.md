# Surfaces

Spacing and alignment structure the portfolio. One translucent tonal surface groups exceptional content while preserving the continuous canvas. Nothing casts a shadow, and static dividers do not exist.

## Radius

Boxes carry one minimal radius (6px). Pills, dots, circle buttons and the portrait are full circles. Nothing sits between those shapes.

`src/index.css` maps the radius scale to the same value, so a component chooses a semantic Tailwind step without introducing a new corner.

## Elevation

There is none. No `box-shadow`, `drop-shadow` or glow. The canvas uses restrained white-alpha gradients for tonal continuity; grouped surfaces remain flat and translucent.

## Boundaries

Do not draw static lines between sections, rows, columns or grid cells. Use an existing spacing step and alignment instead.

The only resting border is `line`, used around image frames and circle controls. Functional lines remain valid where they communicate interaction: link underlines, the BackLink rule and active navigation markers.

## Fill

`surface` is a flat 1.8% translucent white layer for a self-contained content group or metadata chip. It has no internal gradient, opaque base, blur, border or shadow, so the global canvas atmosphere remains visible through it. `fill` is a flat 2% white reserved for focused rows and controls. Do not surface every section or replace removed dividers with a field of cards.

## Dots

A bullet uses the ink of the text it marks. A semantic dot uses its status colour and sits beside wording. A neutral dot uses `ink-low`. Only current availability pulses.

## Named Blocks

| Block | Treatment |
|---|---|
| **Card** | A self-contained static idea on `surface`, with the minimal radius and no border or hover |
| **Work module** | Open text on the page canvas beneath one framed media viewport. The module has no outer fill, lift or shadow. |
| **Panel** | One `surface` containing a larger grouped layout |
| **Grid cell** | Open content separated from neighbouring cells by grid gap |
| **Role chip** | A minimal-radius `surface` using `ink-low` for the case-study category |
| **Tool chip** | The same minimal-radius `surface`, smaller and quieter with `ink-low` |
| **Circle button** | A quiet `line` outline paired with a text label; the only control that fills on hover |
| **Row** | Open, spacing-led and borderless at rest; responds through ink and icon feedback |
| **Contact form** | Open aligned rows between functional `line` boundaries; focus adds `fill` to the active row, brightens its label and reveals its marker |
| **Back control** | A short functional rule that grows beside its label |
| **Section eyebrow** | A bare label with no decorative rule |

## States

| State | Treatment |
|---|---|
| Rest | The semantic ink role; no reactive fill |
| Hover | Interactive ink lifts while hierarchy remains; revealed icons use `ink-max` |
| Focus | Ink lift plus a tonal shift, revealed icon or functional control line; no default bright perimeter |
| Selected / active | `ink-max`, optionally with an `ink-low` active marker |
| Loading | The action label changes and the complete control takes the disabled treatment |
| Disabled | Reduced opacity on the complete control and a not-allowed cursor |

## Rules

- Spacing before surface; surface before adding any new boundary.
- Static surfaced content has no border.
- No static divider lines.
- No hover fill except circle-button inversion.
- Work media may settle slightly on fine-pointer hover; the module itself never lifts.
- If it is not clickable, it does not react.
- Do not nest one filled surface inside another without a concrete content need.
