# Accessibility

The restrained palette remains readable because every text ink clears WCAG AA against the canvas.

## Contrast

| Token | Contrast on `canvas` | Minimum role |
|---|---:|---|
| `ink-max` | 18.9:1 | Focal emphasis and interaction state |
| `ink-high` | 15.4:1 | Headings, titles, actions and entered values |
| `ink-body` | 8.7:1 | Paragraphs and meaningful sentences |
| `ink-low` | 4.7:1 | Labels and metadata; the text floor |
| `status-ok` | 7.7:1 | Availability and confirmed success |
| `status-error` | 5.6:1 | Actionable failure |

Meaningful sentences use `ink-body` or brighter. Static text is never dimmed with opacity.

## Focus

Every keyboard-focusable control has a visible state. `outline-none` is allowed only when the same element or its wrapper supplies a clear combination of contrast, shape or tonal change.

- Contact fields gain a tonal surface, bright label and plus marker.
- Homepage work modules brighten their hierarchy, reveal their outcome and arrow, and strengthen the media boundary.
- Inline controls provide a clear ink lift, revealed icon or functional underline.
- Hover-revealed colour and icons also appear on `focus-visible`.
- Information revealed on wide fine-pointer layouts remains persistently visible on narrow layouts.

Static dividers are not focus indicators and never return for this purpose.

## Keyboard

- Clickable elements are buttons or links, never `div` click handlers.
- Tab order follows source order. Do not use a positive `tabindex`.
- Anchor targets leave enough scroll margin to remain visible below sticky content.

## Targets

Tap targets are at least 44 × 44px. A small icon is part of its labelled control rather than a target by itself.

## Forms

- Every field has a persistent visible `<label>` paired through `id` and `htmlFor`.
- The visible prompt supplements the label; it never replaces the programmatic label.
- Required fields use the native `required` attribute.
- Entered values use `ink-high`; prompts use `ink-body`; resting labels use `ink-low`.
- Submission state is announced in text. Semantic colour is never the only signal.
- The success state offers a way back to a blank form.

## Content

| Rule | Detail |
|---|---|
| One `h1` per page | The page title; a case study uses the project name |
| Headings descend | Never skip a level to reach a visual size |
| Labels are not headings | A label is a `<span>` unless it is the block's real heading |
| Icons | Pair with text or give the control an accessible name |
| Status | Pair colour with wording or a recognizable shape change |
| Type floor | `text-caption` is metadata only; body copy never goes below `text-body-sm` |
| Alt text | Describe the displayed content, not the filename or image type |

## Motion

Honour `prefers-reduced-motion: reduce`. Position-based entrances and ambient loops stop; useful colour feedback remains.

## Check Before Shipping

- [ ] Every sentence is `ink-body` or brighter
- [ ] Every control has a visible keyboard focus state
- [ ] Every hover reveal also appears on keyboard focus
- [ ] Every field has a persistent visible and programmatic label
- [ ] Every tap target reaches 44px
- [ ] Nothing is communicated by colour alone
- [ ] Reduced motion stops ambient loops and position movement
