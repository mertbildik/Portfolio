# Motion

Content enters once, from below, and settles. State changes are short and colour-led. The hero portrait ring is the one deliberate loop.

Shared variants live in `src/shared/motion.ts`. Use them; do not write a one-off variant beside them.

## Easing

Two curves. `ease-entrance` for anything that enters or moves position, plain `ease-out` for hover and focus changes. Nothing else.

The entrance curve exists twice on purpose, because the two runtimes want different formats: `src/index.css` holds it as a CSS curve for Tailwind transitions, and `src/shared/motion.ts` holds the same curve as four numbers for `motion`. Change one, change the other.

## Duration

There are two durations for state and three for entrance. Everything in between is off the scale.

| Name | Value | For |
|---|---:|---|
| fast | 200ms | The default state change: colour, opacity, a tonal shift |
| slow | 300ms | A larger inversion, reveal or small transform |
| enter-item | 600ms | A single item entering a stagger |
| enter-block | 800ms | A block, a hero, a page fade |
| enter-section | 1200ms | A full section |

`index.css` sets the default transition duration to the fast step, so a transition written without a duration still lands on the scale.

Still state the duration. That default is a safety net, not a licence to leave it off.

## Entrance

Entrances travel a short distance and never fade in from far away. The distance scales with what is entering. Opacity always runs alongside.

| Trigger | When |
|---|---|
| On load | Anything above the fold |
| On scroll | Everything below it, viewed once |
| Panel swap | One block replacing another in place, keyed on the state name. Enters with a small rise, exits on opacity alone. |

Viewing once is not optional. Nothing re-animates when the visitor scrolls back up.

Grid cells that are not children of a stagger container take an index delay instead. Cap the total stagger so the last cell is not still waiting after the visitor has read the first.

## Loading

Routes are lazy-loaded and the fallback is empty. The content area holds its height, nothing flashes. There is no spinner, skeleton or progress bar in the system.

## Hover vocabulary

Reuse these. Do not invent a new hover.

- Text lift. One step up the ink ramp.
- Arrow reveal. Slides in from the left as it fades up.
- Rule grow. A short rule extends.
- Focus feedback. A tonal shift, ink lift or functional line confirms focus without a bright perimeter.
- Circle invert. Transparent to an `ink-max` fill, icon to `canvas`.

Hover applies to controls. Content carries no hover and no transition at all; see `surfaces.md`.

Compose at most three of these in one hover. A row uses text lift plus arrow reveal, and may add the subtle tonal surface for keyboard focus. No row or link gains a hover fill.

## Ambient motion

The hero portrait ring turns slowly (`animate-ring-spin`), and the status dot pulses. These are the only looping motions in the system.

## Reduced motion

Under `prefers-reduced-motion: reduce`:

- Entrances resolve instantly to their visible state. Opacity may still fade; position offsets go to zero.
- The status dot stops pulsing and the portrait ring stops turning.
- Hover colour and opacity changes continue. They carry state and must remain.

`MotionConfig reducedMotion="user"` covers everything `motion` drives. It does not cover CSS loops, which need their own media query in `index.css`.

## Rules

- Motion runs once per element per visit.
- No spring physics, no bounce, no overshoot.
- Animate `transform` and `opacity`. Never animate `width`, `height`, `top` or `left` on content; the exceptions are the BackLink rule and a small control inset.
