# Accessibility

The site is low contrast by design. That makes the ink rules the tightest constraint in the system.

## Contrast

WCAG AA needs 4.5:1 for normal text, and 3:1 for large text and for interface borders. Measured against the canvas, the top five ink steps clear the normal-text bar. `ink-faint` clears large text and interface bars only. The measured ratio for each step is written beside it in `src/index.css`.

1. A paragraph carrying information that appears nowhere else uses `ink-body` or lighter.
2. `ink-low` is for labels, eyebrows, captions and supporting copy that restates or introduces something already visible. It is the darkest ink allowed on a sentence.
3. `ink-faint` is for meta a visitor can lose without losing meaning: row numbers, years, index digits. Never a sentence, never the only label on a control.
4. Any `ink-low` or `ink-faint` element inside an interactive row lifts to `ink-body` or lighter on hover and on focus. Outside a control ink stays put, so it must already be readable enough for its job at rest.
5. A border that defines a control goes to `line-active` on focus, which clears the 3:1 interface bar.
6. Opacity is not a contrast tool. Dimming text with `opacity` produces a colour that is in no table. Move down the ramp instead.

## Focus

`outline-none` is allowed only when the same element defines a visible focus state. No exceptions.

Every hover-revealed label, arrow or colour change must also fire on `focus-visible`. A keyboard visitor must never see less than a mouse visitor.

Put `group` on the focusable element itself so `group-focus-visible` resolves against it.

Since no row carries a fill on hover or focus, the rule going white is the whole focus signal. It is what earns the `outline-none` on the link, so it can never be dropped without putting the outline back.

## Keyboard

- Anything clickable is a `<button>` or an `<a>`/`<Link>`. A `div` with `onClick` is not shippable.
- Tab order follows source order. No `tabindex` above `0`.
- Anything that scrolls to a section leaves scroll margin on the target, so it does not land under a sticky element.
- There are no modals or overlays, so no keyboard trap exists.

## Targets

Minimum tap target 44 × 44px. Where a control is smaller than that, the label beside it is part of the same control and the whole row is the link. An inline icon is never a target on its own.

## Forms

- Every input has a programmatic label: an `id` and `htmlFor` pair, or an `aria-label`. A floating visual label is not a label.
- Placeholders are transparent by design, so they can never be the only prompt.
- Required fields are marked with `required` in the markup, not only by validation on submit.
- Submission state is announced in text, never by colour alone. The error colour always accompanies an error sentence.
- The success panel offers a way back to a blank form.

## Content

| Rule | Detail |
|---|---|
| One `h1` per page | The page title. A case study uses the project name. |
| Headings descend | Never skip a level to reach a size. Size comes from the type token. |
| Labels are not headings | A label introducing a section is a `<span>` unless it is the section's real heading. |
| Icons | Never the only signal. Pair with a label, or give the control an `aria-label`. |
| Status | Never colour alone. A status dot always sits beside its sentence. |
| Type floor | `text-caption` is the smallest size, and only for meta. Body copy never goes below `text-body-sm`. |
| Alt text | Describes the content of the screen. Decorative layers are `div`s, not images. |
| Language | `lang="en"` on `<html>`. Foreign proper nouns inside English copy need no markup. |

## Motion

Honour `prefers-reduced-motion: reduce`. See `motion.md`. The portrait ring loops forever, so it must stop under the query.

## Check before shipping

- [ ] Every paragraph is `ink-body` or lighter
- [ ] No `outline-none` without a visible focus state on the same element
- [ ] Every hover reveal also fires on keyboard focus
- [ ] Every interactive element is a `<button>` or a link
- [ ] Every input has a real label
- [ ] Every tap target reaches 44px
- [ ] Nothing is signalled by colour alone
- [ ] Reduced motion stops the portrait ring
