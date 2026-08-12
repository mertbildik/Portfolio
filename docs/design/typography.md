# Typography

Eleven tokens. One class sets size, weight, line height and letter spacing together, so choosing a size is one decision rather than four. The values are in `src/index.css`.

| Token | For |
|---|---|
| `text-display-xl` | The hero headline on a page |
| `text-display-lg` | Section opener headlines |
| `text-display-md` | Sub-section headlines |
| `text-headline` | The heading of a block that is not a section |
| `text-card-title` | The title of a card or an index row |
| `text-body-lg` | Lead paragraphs, the summary under a heading |
| `text-body` | Default body copy |
| `text-body-sm` | Card body, secondary copy |
| `text-caption` | Captions, meta, values, status. The smallest size in the system. |
| `text-button` | Every button and form label |
| `text-eyebrow` | Section eyebrows |

## Weight

Two weights hold the whole scale, and nothing goes above 500.

| Weight | Where |
|---|---|
| 400 | Every heading and every piece of body copy, from 80px down to 12px |
| 500 | `text-button` and `text-eyebrow` only |

Nothing at 22px or above carries extra weight. Type looks heavier the larger it gets, and heavier again as light text on a dark canvas, so a heading set at 500 or 600 reads as loud rather than as important. 500 survives in two places only, to stop a 13-14px label from going weak.

Semibold is not in the system. If a heading needs more presence it gets more size or a step up the ink ramp, never more weight.

## Rules

- Use only these eleven. No `text-xs` or `text-2xl`, no arbitrary sizes, no responsive size variants in markup.
- Never add `font-*`, `leading-*` or `tracking-*` to an element that already has a token. Those utilities are emitted after the tokens and silently override them, which is the exact thing the system exists to prevent.
- Colour, `font-mono`, `uppercase` and layout classes are not part of the token and are set normally.
- A heading split across lines uses the same token on every line with no extra margin between them. Emphasis comes from colour alone.
- `text-balance` goes on a heading or a lead paragraph that wraps to two or three lines. Never on a full body paragraph.
- `truncate` goes on a title inside a fixed-width grid column. Everywhere else, text wraps.

**The one exception.** An emoji sitting inline in a heading is trimmed with a relative size (`text-[0.85em]`), because an emoji glyph is drawn on a square body and reads larger than the letters beside it at the same size. It is the only arbitrary size in the system, it is relative rather than fixed so it still follows the token, and it applies to emoji only.

## The three display sizes are fluid

They scale with the viewport and reach their maximum well below laptop width, so every screen from a laptop up matches the fixed sizes the rest of the scale uses. Below that they shrink, because a long word at full display size does not fit a phone.

Their tracking is set in `em` so it stays proportional as the size changes.

**The responsiveness lives in the token, not the markup.** Do not add `md:text-*` variants to compensate.

## Eyebrows

An eyebrow is monospace and uppercase. The token sets size, weight and spacing; the typeface and the capitalisation are set separately.

A monospace label that introduces the block below it is an eyebrow. A value, year, time or count is a caption.
