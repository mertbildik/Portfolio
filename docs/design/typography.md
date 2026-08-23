# Typography

Nine tokens. One class sets size, weight, line height and letter spacing together, so choosing a size is one decision rather than four. The values are in `src/index.css`.

| Token | For |
|---|---|
| `text-display-lg` | The hero headline on a page, and every section title |
| `text-display-md` | Sub-section headlines, and large stat values when the number is the focus |
| `text-headline` | The heading of a block that is not a section |
| `text-card-title` | The title of a card or an index row |
| `text-body` | Default body copy, and lead paragraphs |
| `text-body-sm` | Card body, secondary copy |
| `text-caption` | Captions, metadata, values and short factual status. The smallest size in the system. Actionable sentences and recovery instructions use `text-body-sm`. |
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
- Colour, `font-mono` and layout classes are not part of the token and are set normally. Interface text is sentence-case; do not use text-transform utilities.
- A heading split across lines uses the same token on every line with no extra margin between them. Emphasis comes from colour alone.
- `text-balance` goes on a heading or a lead paragraph that wraps to two or three lines. Never on a full body paragraph.
- `truncate` goes on a title inside a fixed-width grid column. Everywhere else, text wraps.

**The exceptions.** An emoji sitting inline in a heading is trimmed with a relative size (`text-[0.85em]`). The decorative SVG portrait ring uses 8.5px Inter because its text must fit a fixed circular path. No other arbitrary type sizes are permitted.

## Every size is fixed

The site is a single narrow column that never grows past its cap. All nine sizes are fixed pixels. Readability is carried by whitespace and the ink ramp, not by large type. Tracking is owned by each token: the two display sizes tighten proportionally with `em`, and the fixed 16–22px sizes carry small optical pixel adjustments for the same reason. There is no separate tracking step in markup.

The responsiveness lives in the layout, not the markup. Do not add `md:text-*` variants to compensate.

## Labels

A label that introduces the block below it is an eyebrow: Inter, sentence-case. A value, year, time or count is a caption: monospace. The typeface is set separately from the token.
