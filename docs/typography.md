# Typography

Defined in `tailwind.config.js` under `theme.extend.fontSize`. One class sets size, weight, line height, and letter spacing.

| Class | Size | Weight | Line height | Tracking | Use |
|---|---|---|---|---|---|
| `text-display-xl` | 44 → 80px | 600 | 1.05 | -0.0375em | Largest hero headline |
| `text-display-lg` | 32 → 56px | 600 | 1.10 | -0.032em | Section opener headlines |
| `text-display-md` | 28 → 40px | 600 | 1.15 | -0.025em | Sub-section headlines |
| `text-headline` | 28px | 600 | 1.20 | -0.6px | Pricing tier titles, CTA banner heading |
| `text-card-title` | 22px | 500 | 1.25 | -0.4px | Feature card title |
| `text-subhead` | 20px | 400 | 1.40 | -0.2px | Lead body, intro paragraphs |
| `text-body-lg` | 18px | 400 | 1.50 | -0.1px | Hero subhead, lead paragraphs |
| `text-body` | 16px | 400 | 1.50 | -0.05px | Default body |
| `text-body-sm` | 14px | 400 | 1.50 | 0 | Card body, footer columns |
| `text-caption` | 12px | 400 | 1.40 | 0 | Captions, meta, status |
| `text-button` | 14px | 500 | 1.20 | 0 | All button labels |
| `text-eyebrow` | 13px | 500 | 1.30 | +0.4px | Section eyebrow |

## Rules

- Use only these twelve tokens. No `text-xs` / `text-2xl`, no arbitrary sizes like `text-[15px]`, no responsive size variants in markup.
- Never put `font-*` (weight), `leading-*` or `tracking-*` on an element that already has a token. Those utilities are emitted after the tokens and silently override them, which is what the system exists to prevent.
- Colour, `font-mono`, `uppercase` and layout classes are not part of the token and are set normally.
- A heading split across several lines uses the same token on every line, with no extra margin between them. Emphasis comes from colour alone.

## The three display sizes are fluid

They scale with the viewport and reach their maximum at about 890px wide, so every screen from a laptop up matches the fixed sizes the rest of the scale uses. Below that they shrink, because an 80px word like "Construction" does not fit a 390px phone and would otherwise be cut off.

Tracking on those three is set in `em` so it stays proportional as the size changes.

The responsiveness lives in the token, not in the markup. Do not add `md:text-*` variants to compensate.

## Eyebrows

Eyebrows are monospace and uppercase. The token sets size, weight, and spacing; the typeface and capitalisation are separate.

```jsx
<span className="text-eyebrow font-mono uppercase text-neutral-500">ARCHIVE</span>
```

A monospace label that introduces the block below it is an eyebrow. A value, year, time, or count is `text-caption`.
