# Direction

Read this first, then the file for the layer you are touching.

## Identity

A calm, highly crafted personal portfolio focused on digital design, interfaces, and thoughtful execution — minimal, engineered, personal, quietly confident, timeless. Not "creative portfolio", not "agency-style", not "futuristic".

## Principles

| # | Principle | In practice |
|---|---|---|
| 1 | **Ink carries hierarchy, not size** | A heading split over lines uses one size. Emphasis comes from moving up the ink ramp, never from a second font size. |
| 2 | **Space before surfaces** | Spacing and alignment structure the page. A quiet fill groups exceptional content; borders frame images and controls only. |
| 3 | **Sans for words, mono for data** | Sentences and labels are Inter. Timestamps, coordinates, counts and values are monospace. |
| 4 | **Rest is dim, hover is bright** | Interactive elements sit one to two steps down the ink ramp and resolve toward white on hover. |
| 5 | **Motion reveals, decorates rarely** | Things enter once, from below, and settle. The hero portrait ring is the deliberate exception. |

## The system

| File | Owns |
|---|---|
| `typography.md` | The type tokens and the rules for using them |
| `color.md` | Ink ramp, surface fill, boundaries and status colour |
| `spacing.md` | The step scale and the rhythm pairs |
| `layout.md` | Page shapes, gutters, breakpoints, grid, stacking order |
| `surfaces.md` | Radius, borders, the named blocks and their states |
| `imagery.md` | Image frames, fit, galleries, icons |
| `motion.md` | Easing, duration, entrance, hover vocabulary |
| `accessibility.md` | Contrast floors, focus, keyboard, targets, forms |

Values for all of it live in the `@theme` block of `src/index.css`. These files say what the names mean; that file says what they are.

## Foundation

- One typeface: Inter for words, Geist Mono for data. No third face.
- One canvas. Every darker or lighter one-off folds into it.
- One entrance curve. Everything that enters or changes position uses it.
- No shadows. Gradients are reserved for the global canvas atmosphere.
- No interface accent. Green and red exist for status only; project imagery supplies every other colour.
- No arbitrary values where a token or a scale step already covers it. The exceptions that exist are guards against collapse and optical nudges, and each is deliberate.

## When in doubt

1. Is there already a token or a named block for this? Use it.
2. Can spacing and alignment solve it? Do that before adding a surface.
3. Is it grouped static content? Use the one quiet fill. Borders belong only to images and controls.
4. Does it serve the identity — minimal, engineered, personal — or is it ornament? If it is only ornament, leave it out.
