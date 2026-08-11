# Colour

One canvas, one ink ramp, white at alpha for everything structural, and two status colours. There is no palette beyond this.

Every value below is defined once, in the `@theme` block of `src/index.css`. This file says what each one means; that file says what it is. The `Class` column is what you actually type.

## Canvas

| Token | Value | Class | Use |
|---|---|---|---|
| `canvas` | `#111111` | `bg-canvas` | The page base. Also the backing behind every image frame. |
| `canvas-overlay` | `#050505` at 90% | `bg-canvas-overlay/90` | The mobile navigation pill, over a `backdrop-blur-md`. The only element that sits on top of content. |
| `ink-inverse` | `#111111` | `text-ink-inverse` | Text and icons on a white fill (selected chips, inverted circle buttons). |

The canvas is painted by `GlobalBackground`, not by `body`. `body` stays transparent so the fixed background layer shows through every route.

## Ink ramp

Six steps, measured against `#111111`.

| Token | Class | Hex | Contrast | Use |
|---|---|---|---|---|
| `ink-max` | `text-ink-max` | `#FFFFFF` | 18.9:1 | Headings, active state, hover destination, selected |
| `ink-high` | `text-ink-high` | `#E5E5E5` | 15.0:1 | Document default (set on `body`) |
| `ink-mid` | `text-ink-mid` | `#D4D4D4` | 12.7:1 | Row and list titles at rest, metadata values, quoted text |
| `ink-body` | `text-ink-body` | `#A3A3A3` | 7.5:1 | Paragraphs. The default for anything a visitor must read. |
| `ink-low` | `text-ink-low` | `#737373` | 4.0:1 | Eyebrows, supporting copy, captions, labels at rest |
| `ink-faint` | `text-ink-faint` | `#525252` | 2.4:1 | Numbers, years, meta, section eyebrows on a full-width page. Decoration only, never the only carrier of meaning. |

**Rules**

- Ink is the hierarchy. Within one heading, move down the ramp to de-emphasise: white for the phrase that matters, `ink-low` for the rest.
- Hover lifts text exactly one step: `ink-faint → ink-body`, `ink-low → ink-body`, `ink-low → ink-max`, `ink-body → ink-mid`, `ink-mid → ink-max`.
- `ink-faint` never carries a sentence. See `accessibility.md` for the contrast floors.
- Hover lifts controls only. A paragraph, a list item or a grid cell that is not clickable stays at its rest ink.
- **Never write a raw grey.** `text-neutral-500` and friends still resolve, because Tailwind's default palette is still loaded, so nothing will error. They just leave the system. The six tokens above are the whole ramp.
- **Never lean on the inherited default.** `body` sets `ink-high`, and that is a floor, not a choice. Anything that paints states its own ink: text, an icon (a `lucide` icon draws with `currentColor` and has no colour of its own), a rule drawn with `bg-current`. A component that inherits changes colour depending on which page it lands on, which is how the back control ended up white on case studies and `ink-high` on split pages.
- The one grey off the ramp is `node` (`#404040`), the timeline node. It is a mark sitting on a rule, not text.

### Eyebrow ink

The eyebrow is the one element that uses four different steps. Each has a job.

| Ink | Where |
|---|---|
| `ink-low` | Section eyebrows and form labels on a split page, and any eyebrow titling a card |
| `ink-faint` | Section eyebrows on a case-study or venture page, which are denser and longer, plus every meta label (rail, footer, index numbers) |
| `ink-body` | A stat label, where the eyebrow is the number's only description |
| `ink-max` | An eyebrow acting as a sub-heading inside a section (`Context`, `Objectives`) |

### Headings over texture

The `text-display-xl` heading on Home and on an employment page carries `mix-blend-screen`, so the background dots read through the letterforms instead of being masked by them. Use it only on a full-width hero heading sitting over the textured right side of the canvas, never on body copy.

## Surface fills

White at a low alpha. Never a lighter grey.

| Token | Class | Use |
|---|---|---|
| `fill-subtle` | `bg-fill-subtle` | Card and panel fill at rest, and the hover fill on a segmented cell. The default. |
| `fill-raised` | `bg-fill-raised` | Pills, chips, status badges |
| `fill-inverse` | `bg-fill-inverse` | Selected segmented cell, inverted circle button on hover |

Fills mark state. They do not define shape. A card with a fill still needs its border.

A fill never marks focus. A 5% white step used to be the keyboard focus fill on a row; rows now take `line-active` on their rule instead, so that step no longer exists and no token defines it.

## Borders

Three steps. One pixel, always.

| Token | Class | Use |
|---|---|---|
| `line` | `border-line` | **The structural line, everywhere.** Grid lattices, card and panel edges, tags, row separators, input underlines, section rules, dividers inside a card. |
| `line-strong` | `border-line-strong` | Circle buttons |
| `line-active` | `border-line-active` | Focus on a row or input, selected item in the case-study contents nav, the rule beside a success panel |

There is one structural alpha and it is `0.08`, and `border-line` is the only way to write it. Every other white alpha (`0.05`, `0.1`, `0.2` outside a circle button, `0.4`) folds into `line`. A nested or quieter element does not get a thinner edge; if it needs to recede, change its ink or its fill.

The same alpha applies to a rule drawn as a background rather than a border: a `1px` divider is `bg-line`.

## Status

The only chromatic colour in the system. Used for state, never for decoration, and never as the only signal.

| Token | Class | Use |
|---|---|---|
| `status-ok` | `bg-status-ok/50` | Availability dot, paired with a text label |
| `status-ok` | `text-status-ok` | Copy-to-clipboard confirmation, paired with a check icon |
| `status-error` | `text-status-error` | Form submission failure, paired with an error sentence |
| `ink-faint` | `bg-ink-faint` | An inactive or confidential status dot |

One green, not two: the availability dot and the copy confirmation were separate names for the same value, so they collapsed into `status-ok`. An inactive dot is not a status colour at all, just faint ink.

Status dots are `6px` (`w-1.5 h-1.5`), fully round, and sit `12px` (`gap-3`) or `16px` (`gap-4`) from their label. A dot reporting a live state (availability, an active NDA) carries `animate-pulse`. Nothing else pulses.

## Background texture

Two dot layers over the canvas, plus a scrim that clears the left side for text.

| Layer | Value |
|---|---|
| Base | `#111111` |
| Dots, near | `radial-gradient(circle, #888 1px, transparent 1px)`, `24px` grid, `15%` opacity |
| Dots, far | `radial-gradient(circle, #AAA 1px, transparent 1px)`, `32px` grid, `10%` opacity |
| Scrim | `bg-gradient-to-r from-canvas via-canvas/80 to-transparent` |

The scrim is what makes the composition work: text sits on flat black at the left, texture builds toward the right. Do not remove it, and do not add a second scrim on a page.

A tighter version of the same pattern (`16px` grid, `3%` opacity, static) fills large empty panels. See `imagery.md`.

## Selection

`selection:bg-fill-inverse selection:text-black`. Set once on `body`. Never overridden.
