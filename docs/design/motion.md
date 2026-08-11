# Motion

Content enters once, from below, and settles. State changes are short and colour-led. Almost nothing loops.

Implemented with `framer-motion`. Shared variants live in `src/components/motion.ts`.

## Easing

| Token | Curve | Use |
|---|---|---|
| `ease-entrance` | `cubic-bezier(0.16, 1, 0.3, 1)` | Everything that enters or moves position. Exported as `EASE`. |
| `ease-state` | CSS `ease-out` | Hover and focus changes: colour, opacity, border, width |

Two curves, no more. `EASE_APPLE` and the one-off `[0.23, 1, 0.32, 1]` fold into `ease-entrance`.

## Duration

| Token | ms | Use |
|---|---|---|
| `fast` | 300 | The default state change: colour, opacity, border, small transform |
| `slow` | 500 | A larger state change: fill, reveal, scale, an element the eye should follow |
| `enter-item` | 600 | A single item entering a stagger |
| `enter-block` | 800 | A block, a hero, a page fade |
| `enter-section` | 1200 | A full section, the timeline rule drawing |
| `ambient` | 15000 / 20000 | The two background dot layers |

`700ms` and `1000ms` are not in the scale.

## Distance

Entrances travel a short distance and never fade in from far away.

| Motion | Offset |
|---|---|
| Item | `y: 10 → 0` |
| Block | `y: 20 → 0` |
| Section | `y: 40 → 0` |
| Sideways reveal | `x: -10 → 0` |
| Arrow, in a row | `x: -8 → 0` (`-translate-x-2`) |
| Arrow, standalone | `x: -16 → 0` (`-translate-x-4`) |
| Header drop | `y: -10 → 0` |

Opacity always runs `0 → 1` alongside.

## Variants

| Variant | Spec | Use |
|---|---|---|
| `containerVariants` | stagger `0.1s`, delay `0.2s` | A block of two to six children |
| `listVariants` | stagger `0.05s`, delay `0.1s` | An index or a long list |
| `itemVariants` | `y: 10`, `600ms` | The child of either container |
| `sectionVariants` | `y: 40`, `1200ms` | A whole section entering on scroll |

Grid cells that are not children of a container stagger with an index delay: `i * 0.05` for dense grids, `i * 0.1` for large cells. Cap the total stagger at about `0.6s`.

## Triggers

| Trigger | Spec |
|---|---|
| On load | `initial="hidden" animate="visible"`. For anything above the fold. |
| On scroll | `initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-10%' }}` |
| Page change | `AnimatePresence mode="wait"` keyed on `location.pathname` |
| Panel swap | `AnimatePresence mode="wait"` keyed on the state name, for one block replacing another in place (the contact form becoming the success panel). Enter `y: 10 → 0` with opacity, exit on opacity alone. |

`once: true` is not optional. Nothing re-animates when the visitor scrolls back up.

## Loading

Routes are lazy-loaded. The `Suspense` fallback is an empty `min-h-screen` block: the background and navigation stay, the content area holds its height, nothing flashes. There is no spinner, skeleton or progress bar in the system.

## Hover vocabulary

Reuse these. Do not invent a new hover.

| Pattern | Change | Duration |
|---|---|---|
| Text lift | One step up the ink ramp | 300 |
| Row wash | Fill to `bg-white/[0.02]` | 300 |
| Arrow reveal | `opacity-0 -translate-x-2` → `opacity-100 translate-x-0` | 300 |
| Rule grow | `w-8` → `w-12` | 300 |
| Circle invert | Transparent → `bg-white`, icon to `ink-inverse` | 300 |
| Label reveal (nav) | `opacity-0 translate-y-4` → `translate-y-0` below `lg`, `opacity-0 translate-x-[-10px]` → `translate-x-0` from `lg` | 500 |
| Value scale | `scale-105` from `origin-left` | 500 |
| Dot brighten | `neutral-700` → `white`, or `neutral-800` → `white` | 300 |
| Border sharpen | `line` → `line-hover` | 300 |
| Texture lift | `opacity-[0.03]` → `opacity-[0.05]` | 700 |

Compose at most three of these in one hover. A row typically uses text lift plus row wash plus arrow reveal.

## Layout animation

`layoutId` is used once, for the corner marker that moves between selected cells in the contact segmented control. Do not add more shared-layout animations.

## Ambient background

Two dot layers drift continuously behind everything.

| Layer | Animation | Timing |
|---|---|---|
| Near (24px grid) | `x: [0, -24, 0]`, `y: [0, -12, 0]` | `20s` linear, infinite |
| Far (32px grid) | `x: [0, 32, 0]`, `scale: [1, 1.05, 1]`, `rotate: [0, 1, 0]` | `15s` ease-in-out, infinite |

Both sit in a `pointer-events-none` fixed layer at `inset-[-50%] w-[200%] h-[200%]` so the drift never exposes an edge, with `willChange: transform` and `backfaceVisibility: hidden` to keep them on the compositor.

The other loop is the status dot: `animate-pulse` on a dot reporting a live state. These two are the only looping motion in the system.

## Reduced motion

Under `prefers-reduced-motion: reduce`:

- Entrances resolve instantly to their visible state. Opacity may still fade, position offsets go to `0`.
- The ambient background stops. The dot layers stay, static.
- The status dot stops pulsing and holds at full opacity.
- Hover colour and opacity changes continue. They carry state and must remain.
- Page transitions become a cut.

`MotionConfig reducedMotion="user"` in `App.tsx` covers everything framer-motion drives. CSS loops are not covered by it and need their own `@media (prefers-reduced-motion: reduce)` rule in `index.css`.

## Rules

- Motion runs once per element per visit.
- Nothing animates size or position on hover except the documented rule grow, arrow reveal and value scale.
- No spring physics, no bounce, no overshoot.
- Never animate `width`, `height`, `top` or `left` on content. Use `transform` and `opacity`. The one exception is the back control's rule, which animates `width` on an 8px element.
