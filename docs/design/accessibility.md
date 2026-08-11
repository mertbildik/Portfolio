# Accessibility

The site is low contrast by design. That makes the ink rules below the tightest constraint in the system.

## Contrast

Measured against the canvas, `#111111`. WCAG AA needs `4.5:1` for normal text and `3:1` for large text (24px, or 18.66px bold) and for interface borders.

| Ink | Hex | Ratio | Normal text | Large text |
|---|---|---|---|---|
| `ink-max` white | `#FFFFFF` | 18.9:1 | pass | pass |
| `ink-high` neutral-200 | `#E5E5E5` | 15.0:1 | pass | pass |
| `ink-mid` neutral-300 | `#D4D4D4` | 12.7:1 | pass | pass |
| `ink-body` neutral-400 | `#A3A3A3` | 7.5:1 | pass | pass |
| `ink-low` neutral-500 | `#737373` | 4.0:1 | **fail** | pass |
| `ink-faint` neutral-600 | `#525252` | 2.4:1 | fail | fail |

**Rules**

1. A paragraph carrying information that appears nowhere else uses `ink-body` (neutral-400) or lighter.
2. `ink-low` is for labels, eyebrows, captions and supporting copy that restates or introduces something already visible. It is the darkest ink allowed on text of any kind.
3. `ink-faint` is for meta that a visitor can lose without losing meaning: row numbers, years, index digits. Never a sentence, never the only label on a control.
4. Any `ink-low` or `ink-faint` element inside an interactive row must lift to `ink-body` or lighter on hover and on focus.
5. Borders that define a control (input underlines, segmented cell edges) go to `line-active` (white) on focus, which clears the 3:1 interface bar.

## Focus

`outline-none` is allowed **only** when the same element defines a visible focus state. No exceptions.

| Element | Focus state |
|---|---|
| Row or list link | `bg-white/[0.05]` across the row |
| Input, textarea | `border-white` on the underline, label goes white |
| Segmented cell | Same as its selected state border, plus white label |
| Circle button | The inverted hover state: `bg-white`, `ink-inverse` icon |
| Navigation item | Icon to white **and** the label revealed |
| Back control | Full opacity, rule at its grown width |

Every hover-revealed label, arrow or fill must also be triggered by `focus-visible` or `group-focus-within`. A keyboard visitor must never see less than a mouse visitor.

## Keyboard

- Anything clickable is a `<button>` or an `<a>`/`<Link>`. A `div` with `onClick` is not shippable. This applies to the copy-to-clipboard control and to any card that opens a page.
- Tab order follows source order. No `tabindex` above `0`.
- The case-study contents nav is a list of `<button>`s that scroll to a section. Sections carry `scroll-mt-32` so the target is not hidden under the sticky rail.
- No keyboard trap exists in the system. There are no modals or overlays.

## Targets

Minimum tap target `44 × 44px`.

| Control | Meets it via |
|---|---|
| Circle button | `w-12 h-12` (48) |
| Compact circle button | `w-10 h-10` (40) plus its label, the whole row being the link |
| Segmented cell | `h-14 md:h-16` (56 / 64) |
| List row | `py-6` on full-width content (72+) |
| Navigation icon | `w-11 h-11` on mobile, `w-11 h-16` on the desktop rail. The 20px icon is centred inside it. |
| Inline icon (copy, external link) | Never a target on its own. The label beside it is part of the same control. |

## Forms

- Every input has a programmatic label: `id` on the field, `htmlFor` on the label, or an `aria-label`. A floating visual label is not a label.
- Placeholders are transparent by design, so they can never be the only prompt.
- Required fields are marked in the markup with `required`, not only by validation on submit.
- Submission state is announced in text, not by colour alone: "Not ready.", "Ready to send.", "Sending...", "Submission failed. Click to retry."
- The error colour (`red-500`) always accompanies an error sentence.
- The success panel is reachable and focusable, and offers a way back to a blank form.

## Content

| Rule | Detail |
|---|---|
| One `h1` per page | The page title. Case studies use the project name. |
| Headings descend | `h1` → `h2` section → `h3` block → `h4` label. Never skip a level to get a size. |
| Eyebrows are not headings | A monospace eyebrow that introduces a section is a `<span>` unless it is the section's real heading. |
| Icons | Never the only signal. Pair with a label or give the control an `aria-label`. |
| Status | Never colour alone. The green dot always sits beside "Available for new projects". |
| Type floor | `text-caption` (12px) is the smallest size in the system, and only for meta. Body copy never goes below `text-body-sm` (14px). |
| Alt text | Describes the content of the screen. Decorative layers are `div`s, not images. |
| Language | `lang="en"` on `<html>`. Foreign proper nouns inside English copy are fine and need no markup. |

## Motion

Honour `prefers-reduced-motion: reduce`. See `motion.md` for what stops and what stays. The ambient background loops forever, so it must stop under the query.

## Check before shipping

- [ ] Every paragraph is `ink-body` or lighter
- [ ] No `outline-none` without a visible focus state on the same element
- [ ] Every hover reveal also fires on keyboard focus
- [ ] Every interactive element is a `<button>` or a link
- [ ] Every input has a real label
- [ ] Every tap target reaches 44px
- [ ] Nothing is signalled by colour alone
- [ ] Reduced motion stops the background
