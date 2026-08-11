# Direction

The rules that outrank every other file. Read this first, then the file for the layer you are touching.

## Identity

A dark, quiet portfolio with the feel of an engineering tool. Near-black canvas, a single sans typeface, monospace labels, hairline rules instead of boxes, and colour reserved for status. Content is the only ornament.

## Principles

| # | Principle | In practice |
|---|---|---|
| 1 | **Ink carries hierarchy, not size** | A heading split over lines uses one size. Emphasis comes from moving up the ink ramp, never from a second font size. |
| 2 | **Lines, not boxes** | Structure is drawn with 1px rules at 8% white. Fills are for state, not for shape. |
| 3 | **Nothing floats** | No shadows anywhere. Depth is border plus fill. |
| 4 | **Monospace labels, sans content** | Every eyebrow, tag, status and meta value is monospace uppercase. Everything a person reads as a sentence is Inter. |
| 5 | **Rest is dim, hover is bright** | Interactive elements sit one to two steps down the ink ramp and resolve toward white on hover. |
| 6 | **Motion reveals, never decorates** | Things enter once, from below, and settle. Nothing loops except the background. |
| 7 | **Left states, right shows** | Top-level pages put identity in a 4-column block on the left and the content in an 8-column block on the right. |

## The system

| File | Owns |
|---|---|
| `typography.md` | The twelve type tokens, weight, line height, tracking |
| `color.md` | Ink ramp, surface fills, border alphas, status colours |
| `spacing.md` | The 4px step scale and the fixed rhythm pairs |
| `layout.md` | Page frame, gutters, breakpoints, 12-column grid, z-index |
| `surfaces.md` | Radius scale, borders, card and control recipes, states |
| `imagery.md` | Image frames, fit, galleries, background texture |
| `motion.md` | Easing, durations, distances, stagger, hover vocabulary |
| `accessibility.md` | Contrast floors, focus, keyboard, targets, forms |

## Non-negotiables

- **One typeface.** Inter for content, the system monospace stack for labels. No third face.
- **One canvas.** `#111111`. Every darker or lighter one-off folds into it, except the navigation overlay.
- **One entrance curve.** `cubic-bezier(0.16, 1, 0.3, 1)`.
- **No shadows, and no gradient as decoration.** The only gradients are the background scrim, the dot patterns, and the portrait overlay.
- **No new colour.** Green and red exist for status only. Everything else is white at an alpha.
- **No arbitrary values.** If a value is not in a scale here, it does not go in the markup.

## When in doubt

1. Is there already a token or recipe for this? Use it.
2. Can this be a rule instead of a fill? Use the rule.
3. Is this element decoration? Delete it.
