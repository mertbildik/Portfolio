# Typography

Defined in `tailwind.config.js` under `theme.extend.fontSize`. One class sets size, weight, line height, and letter spacing.

| Class | Size | Weight | Line height | Tracking | Use |
|---|---|---|---|---|---|
| `text-display-xl` | 80px | 600 | 1.05 | -3.0px | Largest hero headline |
| `text-display-lg` | 56px | 600 | 1.10 | -1.8px | Section opener headlines |
| `text-display-md` | 40px | 600 | 1.15 | -1.0px | Sub-section headlines |
| `text-headline` | 28px | 600 | 1.20 | -0.6px | Pricing tier titles, CTA banner heading |
| `text-card-title` | 22px | 500 | 1.25 | -0.4px | Feature card title |
| `text-subhead` | 20px | 400 | 1.40 | -0.2px | Lead body, intro paragraphs |
| `text-body-lg` | 18px | 400 | 1.50 | -0.1px | Hero subhead, lead paragraphs |
| `text-body` | 16px | 400 | 1.50 | -0.05px | Default body |
| `text-body-sm` | 14px | 400 | 1.50 | 0 | Card body, footer columns |
| `text-caption` | 12px | 400 | 1.40 | 0 | Captions, meta, status |
| `text-button` | 14px | 500 | 1.20 | 0 | All button labels |
| `text-eyebrow` | 13px | 500 | 1.30 | +0.4px | Section eyebrow |

## Eyebrows

Eyebrows are monospace and uppercase. The token sets size, weight, and spacing; the typeface and capitalisation are separate.

```jsx
<span className="text-eyebrow font-mono uppercase text-neutral-500">ARCHIVE</span>
```

A monospace label that introduces the block below it is an eyebrow. A value, year, time, or count is `text-caption`.
