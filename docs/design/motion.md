# Motion

Content enters once, from below, and settles. State changes are short and colour-led. Almost nothing loops.

Implemented with `framer-motion`. Shared variants live in `src/components/motion.ts`.

## Easing

| Token | Curve | Use |
|---|---|---|
| `ease-entrance` | `cubic-bezier(0.16, 1, 0.3, 1)` | Everything that enters or moves position |
| `ease-state` | CSS `ease-out` | Hover and focus changes: colour, opacity, border, width |

Two curves, no more. `EASE_APPLE` and the one-off `[0.23, 1, 0.32, 1]` fold into `ease-entrance`.

The entrance curve exists twice on purpose, because the two runtimes want different formats: `--ease-entrance` in `src/index.css` gives the `ease-entrance` class for CSS transitions, and `EASE` in `src/components/motion.ts` gives framer-motion the same curve as four numbers. Change one, change the other.

## Duration

Durations are written as plain numbers, not names: Tailwind has no theme namespace for them, so `duration-300` is the token. The names below are how to talk about them.

| Name | ms | Written as | Use |
|---|---|---|---|
| fast | 300 | `duration-300` | The default state change: colour, opacity, border, small transform |
| slow | 500 | `duration-500` | A larger state change: fill, reveal, scale, an element the eye should follow |
| enter-item | 600 | framer `duration: 0.6` | A single item entering a stagger |
| enter-block | 800 | framer `duration: 0.8` | A block, a hero, a page fade |
| enter-section | 1200 | framer `duration: 1.2` | A full section, the timeline rule drawing |
| ambient | 15000 / 20000 | framer | The two background dot layers |

`700ms` and `1000ms` are not in the scale.

`src/index.css` sets `--default-transition-duration: 300ms`, so a `transition-*` written without a `duration-*` lands on the scale instead of Tailwind's 150ms default.

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

Hover applies to controls: a `<button>`, an `<a>`, a `<Link>`. Content does not react to a pointer, so a grid cell, a stat, a list item or a paragraph carries no hover and no transition at all. See `surfaces.md`.

| Pattern | Change | Duration |
|---|---|---|
| Text lift | One step up the ink ramp | 300 |
| Arrow reveal | `opacity-0 -translate-x-2` → `opacity-100 translate-x-0` | 300 |
| Rule grow | `w-8` → `w-12` | 300 |
| Rule sharpen | `line` → `line-active`, on focus | 300 |
| Circle invert | Transparent → `bg-fill-inverse`, icon to `ink-inverse` | 300 |
| Cell fill | Transparent → `bg-fill-subtle`, segmented cell only | 300 |
| Label reveal (nav) | `opacity-0 translate-y-4` → `translate-y-0` below `lg`, `opacity-0 translate-x-[-10px]` → `translate-x-0` from `lg` | 500 |

Compose at most three of these in one hover. A row uses text lift plus arrow reveal, and adds rule sharpen on keyboard focus.

**Still state the duration.** The 300ms default in `index.css` is a safety net, not a licence to leave it off: writing `duration-300` says the timing was chosen, and makes the 500ms cases stand out as deliberate.

`700ms` transitions (the old texture lift) and row fills are no longer in the system.

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
