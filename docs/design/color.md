# Colour

One canvas, one ink ramp, white at alpha for everything structural, and two status colours. There is no palette beyond this.

## Canvas

| Token | Value | Class | Use |
|---|---|---|---|
| `canvas` | `#111111` | `bg-[#111111]` | The page base. Also the backing behind every image frame. |
| `canvas-overlay` | `#050505` at 90% | `bg-[#050505]/90` | The mobile navigation pill, over a `backdrop-blur-md`. The only element that sits on top of content. |
| `ink-inverse` | `#111111` | `text-[#111111]` | Text and icons on a white fill (selected chips, inverted circle buttons). |

The canvas is painted by `GlobalBackground`, not by `body`. `body` stays transparent so the fixed background layer shows through every route.

## Ink ramp

Six steps, measured against `#111111`.

| Token | Class | Hex | Contrast | Use |
|---|---|---|---|---|
| `ink-max` | `text-white` | `#FFFFFF` | 18.9:1 | Headings, active state, hover destination, selected |
| `ink-high` | `text-neutral-200` | `#E5E5E5` | 15.0:1 | Document default (set on `body`) |
| `ink-mid` | `text-neutral-300` | `#D4D4D4` | 12.7:1 | Row and list titles at rest, metadata values, quoted text |
| `ink-body` | `text-neutral-400` | `#A3A3A3` | 7.5:1 | Paragraphs. The default for anything a visitor must read. |
| `ink-low` | `text-neutral-500` | `#737373` | 4.0:1 | Eyebrows, supporting copy, captions, labels at rest |
| `ink-faint` | `text-neutral-600` | `#525252` | 2.4:1 | Numbers, years, meta. Decoration only, never the only carrier of meaning. |

**Rules**

- Ink is the hierarchy. Within one heading, move down the ramp to de-emphasise: white for the phrase that matters, `ink-low` for the rest.
- Hover lifts text exactly one step: `600 → 400`, `500 → 400`, `500 → white`, `400 → 300`, `300 → white`.
- `ink-faint` never carries a sentence. See `accessibility.md` for the contrast floors.
- `neutral-100`, `neutral-800` and `neutral-900` are not in the ramp. They fold into `white`, `line`, and `ink-inverse`.

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
| `fill-subtle` | `bg-white/[0.02]` | Card fill at rest, and the fill a row picks up on hover. The default. |
| `fill-raised` | `bg-white/[0.03]` | Pills, chips, status badges |
| `fill-active` | `bg-white/[0.05]` | Keyboard focus fill on a row |
| `fill-inverse` | `bg-white` | Selected segmented cell, inverted circle button on hover |

Fills mark state. They do not define shape. A card with a fill still needs its border.

## Borders

Five steps. One pixel, always.

| Token | Class | Use |
|---|---|---|
| `line-hairline` | `border-white/[0.05]` | Dividers inside a card or panel, and the edge of a quiet element nested in content (tags, the caption card above an image grid) |
| `line` | `border-white/[0.08]` | The default: grid lattices, card edges, row separators, input underlines, section rules |
| `line-strong` | `border-white/20` | Circle buttons, standalone decorative rules |
| `line-hover` | `border-white/40` | Hover state on a left-rule block |
| `line-active` | `border-white` | Selected item in the case-study contents nav, the rule beside a success panel |

`border-white/10`, `border-white/[0.1]` and `border-neutral-800` all fold into `line`.

The same alphas apply to a rule drawn as a background rather than a border: a `1px` divider is `bg-white/[0.08]`, a decorative rule beside a section title is `bg-white/20`.

## Status

The only chromatic colour in the system. Used for state, never for decoration, and never as the only signal.

| Token | Class | Use |
|---|---|---|
| `status-available` | `bg-green-500/50` | Availability dot, paired with a text label |
| `status-confirm` | `text-green-500` | Copy-to-clipboard confirmation, paired with a check icon |
| `status-error` | `text-red-500` | Form submission failure, paired with an error sentence |
| `status-neutral` | `bg-neutral-600` | An inactive or confidential status dot |

Status dots are `6px` (`w-1.5 h-1.5`), fully round, and sit `12px` (`gap-3`) or `16px` (`gap-4`) from their label. A dot reporting a live state (availability, an active NDA) carries `animate-pulse`. Nothing else pulses.

## Background texture

Two dot layers over the canvas, plus a scrim that clears the left side for text.

| Layer | Value |
|---|---|
| Base | `#111111` |
| Dots, near | `radial-gradient(circle, #888 1px, transparent 1px)`, `24px` grid, `15%` opacity |
| Dots, far | `radial-gradient(circle, #AAA 1px, transparent 1px)`, `32px` grid, `10%` opacity |
| Scrim | `bg-gradient-to-r from-[#111111] via-[#111111]/80 to-transparent` |

The scrim is what makes the composition work: text sits on flat black at the left, texture builds toward the right. Do not remove it, and do not add a second scrim on a page.

A tighter version of the same pattern (`16px` grid, `3%` opacity, rising to `5%` on hover) fills large empty panels. See `imagery.md`.

## Selection

`selection:bg-white selection:text-black`. Set once on `body`. Never overridden.
