# Direction

The rules that outrank every other file. Read this first, then the file for the layer you are touching.

## Identity

A dark, quiet portfolio with the feel of an engineering tool. Near-black canvas, a single sans typeface, monospace labels, hairline rules instead of boxes, and colour reserved for status. Content is the only ornament.

## Principles

| # | Principle | In practice |
|---|---|---|
| 1 | **Ink carries hierarchy, not size** | A heading split over lines uses one size. Emphasis comes from moving up the ink ramp, never from a second font size. |
| 2 | **Lines, not boxes** | Structure is drawn with one hairline weight. Fills are for state, not for shape. |
| 3 | **Nothing floats** | No shadows anywhere. Depth is border plus fill. |
| 4 | **Monospace labels, sans content** | Every eyebrow, status and control label is monospace uppercase. Everything a person reads as a sentence is Inter. |
| 5 | **Rest is dim, hover is bright** | Interactive elements sit one to two steps down the ink ramp and resolve toward white on hover. |
| 6 | **Motion reveals, never decorates** | Things enter once, from below, and settle. Nothing loops except the background. |
| 7 | **Left states, right shows** | A top-level page splits into an identity column and a wider content column. Home inverts the two, and is the only page that does. |

## The system

| File | Owns |
|---|---|
| `typography.md` | The eleven type tokens and the rules for using them |
| `color.md` | Ink ramp, surface fills, border weights, status colour |
| `spacing.md` | The step scale and the fixed rhythm pairs |
| `layout.md` | Page shapes, gutters, breakpoints, grid, stacking order |
| `surfaces.md` | Radius, borders, the named blocks and their states |
| `imagery.md` | Image frames, fit, galleries, icons |
| `motion.md` | Easing, duration, entrance, hover vocabulary |
| `accessibility.md` | Contrast floors, focus, keyboard, targets, forms |

Values for all of it live in the `@theme` block of `src/index.css`. These files say what the names mean; that file says what they are.

## Non-negotiables

- **One typeface.** Inter for content, the system monospace stack for labels. No third face.
- **One canvas.** Every darker or lighter one-off folds into it, except the navigation overlay.
- **One entrance curve.** Everything that enters or changes position uses it.
- **No shadows, and no gradient as decoration.** The only gradients are the background scrim, the dot patterns, and the portrait overlay.
- **No new colour.** Green and red exist for status only. Everything else is white at an alpha.
- **No arbitrary values** where a token or a scale step already covers it. The exceptions that exist are guards against collapse and optical nudges, and each is deliberate.

## When in doubt

1. Is there already a token or a named block for this? Use it.
2. Can this be a rule instead of a fill? Use the rule.
3. Is this element decoration? Delete it.
