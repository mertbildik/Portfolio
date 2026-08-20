# Direction

Read this first, then the file for the layer you are touching.

## Identity

A calm, highly crafted personal portfolio focused on digital design, interfaces, and thoughtful execution — minimal, engineered, personal, quietly confident, timeless. Not "creative portfolio", not "agency-style", not "futuristic".

## Principles

| # | Principle | In practice |
|---|---|---|
| 1 | **Ink carries hierarchy, not size** | A heading split over lines uses one size. Emphasis comes from moving up the ink ramp, never from a second font size. |
| 2 | **Lines, not boxes** | Structure is drawn with one hairline weight. Fills mark state, not shape. |
| 3 | **Sans for words, mono for data** | Sentences and labels are Inter. Timestamps, coordinates, counts and values are monospace. |
| 4 | **Rest is dim, hover is bright** | Interactive elements sit one to two steps down the ink ramp and resolve toward white on hover. |
| 5 | **Motion reveals, decorates rarely** | Things enter once, from below, and settle. The hero portrait ring is the deliberate exception. |

## The system

| File | Owns |
|---|---|
| `typography.md` | The type tokens and the rules for using them |
| `color.md` | Ink ramp, surface fills, border weights, status colour |
| `spacing.md` | The step scale and the rhythm pairs |
| `layout.md` | Page shapes, gutters, breakpoints, grid, stacking order |
| `surfaces.md` | Radius, borders, the named blocks and their states |
| `imagery.md` | Image frames, fit, galleries, icons |
| `motion.md` | Easing, duration, entrance, hover vocabulary |
| `accessibility.md` | Contrast floors, focus, keyboard, targets, forms |

Values for all of it live in the `@theme` block of `src/index.css`. These files say what the names mean; that file says what they are.

## Foundation

- One typeface: Inter for words, the system monospace stack for data. No third face.
- One canvas. Every darker or lighter one-off folds into it.
- One entrance curve. Everything that enters or changes position uses it.
- No shadows, and no gradient as decoration. The only gradient is the portrait overlay.
- No new colour. Green and red exist for status only. Everything else is white at an alpha.
- No arbitrary values where a token or a scale step already covers it. The exceptions that exist are guards against collapse and optical nudges, and each is deliberate.

## When in doubt

1. Is there already a token or a named block for this? Use it.
2. Can this be a rule instead of a fill? Use the rule.
3. Does it serve the identity — minimal, engineered, personal — or is it ornament? If it is only ornament, leave it out.
