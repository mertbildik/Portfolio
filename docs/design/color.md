# Colour

One canvas, one ink ramp, white at alpha for everything structural, and two status colours. There is no palette beyond this. Every value is defined once in `src/index.css`; this file says what each name is for.

## Canvas

`canvas` is the page base and the backing behind every image frame. `canvas-overlay` is the mobile navigation pill, the only element allowed to sit on top of content. `ink-inverse` is text and icons on a white fill.

The canvas is painted by a fixed background layer rather than by `body`, so it survives every route change.

## Ink ramp

Six steps, plus the inverse. Ink is the hierarchy: to push something back, move it down the ramp rather than putting a box around it.

| Token | For |
|---|---|
| `ink-max` | Hover destination, focus, selected, active. A state, never a resting colour. |
| `ink-high` | The document default, set once on `body`. Display headings, and card and row titles at rest. |
| `ink-mid` | A value standing beside its label |
| `ink-body` | Paragraphs. The default for anything a visitor must actually read. |
| `ink-low` | Eyebrows, supporting copy, captions, labels |
| `ink-faint` | Numbers, years, index digits. Meta a visitor can lose without losing meaning. |

The steps are spaced evenly, each about 1.4x the contrast of the one below. Even spacing is the whole point of a ramp: two steps sitting close together are one step wearing two names, and a big gap at the bottom drops text off a cliff instead of quieting it.

**Rules**

- Within one heading, move down the ramp to de-emphasise: the heading's own ink for the phrase that matters, `ink-low` for the rest.
- Display-size type stops one step below white. At that size, pure white on the canvas reads as loud rather than as important, and the size is already carrying the emphasis.
- **No text rests at `ink-max`.** White means the visitor is pointing at it, or the system is. A resting title that has nowhere left to go on hover has to dim instead, and a control that dims when you touch it reads as broken. The icon inside a circle button is the exception: it is a mark on a control, and the whole control inverts on hover.
- Hover goes up the ramp, never down. A title lifts to `ink-max`; a label lifts at least to `ink-body`.
- Hover lifts controls only. A paragraph, a list item or a grid cell that is not clickable stays at its rest ink.
- `ink-faint` never carries a sentence. See `accessibility.md` for the floors.
- **Never write a raw grey.** Tailwind's default palette still resolves, so nothing will error. It just leaves the system.
- **Opacity never dims text.** The ramp is the only dimmer. `text-ink-max opacity-40` is a grey nobody named and nobody measured, and it lands between two steps that already exist. Opacity keeps its job on whole elements: icon reveals, entrance fades, the background layers.
- **Never lean on the inherited default.** `body` sets a floor, not a choice. Anything that paints states its own ink, including icons, which draw with `currentColor` and have no colour of their own. A component that inherits changes colour depending on which page it lands on.
- The one grey off the ramp is `node`, the timeline marker. It is a mark sitting on a rule, not text.

### Eyebrow ink

An eyebrow is `ink-low`, wherever it sits and however dense the page around it. It is a label, and a label a visitor cannot read is decoration.

The one exception is an eyebrow acting as the real sub-heading of a block rather than introducing one. That is a heading, so it takes `ink-high` like every other heading.

### Headings over texture

A hero heading sitting over the textured side of the canvas may blend with the background so the dots read through the letterforms. Full-width hero headings only, never body copy.

## Surface fills

White at a low alpha, never a lighter grey.

| Token | For |
|---|---|
| `fill-subtle` | Card and panel fill at rest, and the hover fill on a segmented cell. The default. |
| `fill-raised` | Pills, chips, status badges |
| `fill-inverse` | Selected segmented cell, inverted circle button on hover |

Fills mark state. They do not define shape: a card with a fill still needs its border. A fill never marks focus.

## Borders

One structural weight, one pixel, always.

| Token | For |
|---|---|
| `line` | **Everything structural.** Grid lattices, card and panel edges, tags, row separators, input underlines, dividers. |
| `line-strong` | Circle buttons |
| `line-active` | Focus, the selected item in a contents nav, the rule beside a completed state |

There is one structural alpha and `border-line` is the only way to write it. A nested or quieter element does not get a thinner edge; if it needs to recede, change its ink or its fill. The same weight applies when a rule is drawn as a background rather than a border.

## Status

The only chromatic colour in the system. State only, never decoration, and never the only signal.

| Token | For |
|---|---|
| `status-ok` | Availability, and copy-to-clipboard confirmation. One green, not two. |
| `status-error` | Form submission failure, always beside an error sentence |
| `ink-faint` | An inactive or confidential status dot. Not a status colour at all. |

A dot reporting a live state pulses. Nothing else pulses.

## Background texture

Two drifting dot layers over the canvas, plus a scrim that clears one side for text. The scrim is what makes the composition work: text sits on flat black, texture builds away from it. Do not remove it, and never add a second scrim to a page.

A large empty panel may repeat the same dot pattern at a smaller scale and a lower opacity as its own texture. Static, at most once per page.

## Selection

Set once on `body`, and never overridden.
