# Typography

Nine tokens. One class sets size, weight, line height and letter spacing together, so choosing a size is one decision rather than four. The values are in `src/index.css`.

| Token | For |
|---|---|
| `text-display-lg` | The hero headline on a page, and every section title |
| `text-display-md` | Sub-section headlines |
| `text-headline` | The heading of a block that is not a section |
| `text-card-title` | The title of a card or an index row |
| `text-body` | Default body copy, and lead paragraphs |
| `text-body-sm` | Card body, secondary copy |
| `text-caption` | Captions, meta, values, status. The smallest size in the system. |
| `text-button` | Every button and form label |
| `text-eyebrow` | Section eyebrows |

## Weight

| Weight | Where |
|---|---|
| 400 | Every heading and every piece of body copy |
| 500 | `text-button` and `text-eyebrow` |
| 600 | Emphasis on a heading or a key phrase, applied with `font-semibold`. The one permitted `font-*` override. |

## Rules

- Use only these nine. No `text-xs` or `text-2xl`, no arbitrary sizes, no responsive size variants in markup.
- Never add `font-*`, `leading-*` or `tracking-*` to an element that already has a token. `font-semibold` is the one exception.
- Colour, `font-mono`, `uppercase` and layout classes are not part of the token and are set normally.
- A heading split across lines uses the same token on every line with no extra margin between them. Emphasis comes from colour alone.
- `text-balance` goes on a heading or a lead paragraph that wraps to two or three lines. Never on a full body paragraph.
- `truncate` goes on a title inside a fixed-width grid column. Everywhere else, text wraps.

**The one exception.** An emoji sitting inline in a heading is trimmed with a relative size (`text-[0.85em]`). It is the only arbitrary size in the system, it is relative rather than fixed, and it applies to emoji only.

## Every size is fixed

The site is a single narrow column that never grows past its cap. All nine sizes are fixed pixels. Readability is carried by whitespace and the ink ramp, not by large type. Their tracking is set in `em` so it stays proportional.

The responsiveness lives in the layout, not the markup. Do not add `md:text-*` variants to compensate.

## Labels

A label that introduces the block below it is an eyebrow: Inter, sentence-case. A value, year, time or count is a caption: monospace. The typeface is set separately from the token.
