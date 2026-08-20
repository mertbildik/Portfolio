# Colour

One canvas, one ink ramp, white at alpha for everything structural, and two status colours. Every value is defined once in `src/index.css`; this file says what each name is for.

## Canvas

`canvas` is the page base and the backing behind every image frame. `ink-inverse` is text and icons on a white fill.

The canvas is painted by a fixed background layer rather than by `body`, so it survives every route change.

## Ink ramp

Six steps, plus the inverse. Ink is the hierarchy: to push something back, move it down the ramp rather than putting a box around it.

| Token | For |
|---|---|
| `ink-max` | Hover destination, focus, selected, active. A state, never a resting colour. |
| `ink-high` | The document default. Display headings, and card and row titles at rest. |
| `ink-mid` | A value standing beside its label |
| `ink-body` | Paragraphs. The default for anything a visitor must read. |
| `ink-low` | Eyebrows, supporting copy, captions, labels |
| `ink-faint` | Numbers, years, index digits. Meta a visitor can lose without losing meaning. |

**Rules**

- Within one heading, move down the ramp to de-emphasise: the heading's own ink for the phrase that matters, `ink-low` for the rest.
- Display-size type stops one step below white.
- No text rests at `ink-max`. The icon inside a circle button is the exception.
- Hover goes up the ramp, never down.
- Hover lifts controls only.
- `ink-faint` never carries a sentence.
- Never write a raw grey. Tailwind's default palette still resolves, but it leaves the system.
- Opacity never dims text. The ramp is the only dimmer. Opacity keeps its job on whole elements: icon reveals, entrance fades, the background layers.
- Never lean on the inherited default. Anything that paints states its own ink, including icons, which draw with `currentColor`.
- The one grey off the ramp is `node`, the timeline marker. It is a mark sitting on a rule, not text.

### Label ink

A label is `ink-low`, wherever it sits. A label a visitor cannot read is decoration.

A label acting as the real sub-heading of a block rather than introducing one is a heading, so it takes `ink-high` like every other heading.

## Surface fills

White at a low alpha, never a lighter grey.

| Token | For |
|---|---|
| `fill-subtle` | Card and panel fill at rest, and the hover fill on a segmented cell |
| `fill-raised` | Pills, chips, status badges |
| `fill-inverse` | Selected segmented cell, inverted circle button on hover |

Fills mark state. They do not define shape: a card with a fill still needs its border. A fill never marks focus.

## Borders

One structural weight, one pixel, always.

| Token | For |
|---|---|
| `line` | Everything structural |
| `line-strong` | Circle buttons |
| `line-active` | Focus, the selected item in a contents nav, the rule beside a completed state |

A nested or quieter element does not get a thinner edge; if it needs to recede, change its ink or its fill. The same weight applies when a rule is drawn as a background rather than a border.

## Status

The only chromatic colour in the system. State only, never decoration, and never the only signal.

| Token | For |
|---|---|
| `status-ok` | Availability, and copy-to-clipboard confirmation |
| `status-error` | Form submission failure, always beside an error sentence |
| `ink-faint` | An inactive or confidential status dot |

A dot reporting a live state pulses. Nothing else pulses.

## Selection

Set once on `body`, and never overridden.
