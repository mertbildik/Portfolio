# Motion

Content enters once, from below, and settles. State changes are short and colour-led. Almost nothing loops.

Shared variants live in `src/components/motion.ts`. Use them; do not write a one-off variant beside them.

## Easing

Two curves. `ease-entrance` for anything that enters or moves position, plain `ease-out` for hover and focus changes. Nothing else.

The entrance curve exists twice on purpose, because the two runtimes want different formats: `src/index.css` holds it as a CSS curve for Tailwind transitions, and `src/components/motion.ts` holds the same curve as four numbers for `motion`. **Change one, change the other.**

## Duration

There are two durations for state and three for entrance. Everything in between is off the scale.

| Name | For |
|---|---|
| fast | The default state change: colour, opacity, border, a small transform |
| slow | A larger state change: a fill, a reveal, a scale, anything the eye should follow |
| enter-item | A single item entering a stagger |
| enter-block | A block, a hero, a page fade |
| enter-section | A full section, or the timeline rule drawing |

`index.css` sets the default transition duration to the fast step, so a transition written without a duration still lands on the scale instead of Tailwind's own default.

**Still state the duration.** That default is a safety net, not a licence to leave it off. Writing it says the timing was chosen, and makes the slow cases stand out as deliberate.

## Entrance

Entrances travel a short distance and never fade in from far away. The distance scales with what is entering: an item barely moves, a section moves furthest. Opacity always runs alongside.

| Trigger | When |
|---|---|
| On load | Anything above the fold |
| On scroll | Everything below it, viewed once |
| Page change | The route swap, keyed on the pathname |
| Panel swap | One block replacing another in place, keyed on the state name. Enters with a small rise, exits on opacity alone. |

**Viewing once is not optional.** Nothing re-animates when the visitor scrolls back up.

Grid cells that are not children of a stagger container take an index delay instead: a small step for dense grids, a larger one for big cells. Cap the total stagger so the last cell is not still waiting after the visitor has read the first.

## Loading

Routes are lazy-loaded and the fallback is empty. The background and navigation stay, the content area holds its height, nothing flashes. There is no spinner, skeleton or progress bar in the system.

## Hover vocabulary

Reuse these. Do not invent a new hover.

- **Text lift.** One step up the ink ramp.
- **Arrow reveal.** Slides in from the left as it fades up.
- **Rule grow.** A short rule extends.
- **Rule sharpen.** The border goes to `line-active`, on focus.
- **Circle invert.** Transparent to a white fill, icon to inverse ink.
- **Cell fill.** Transparent to a subtle fill, on the segmented cell only.
- **Label reveal.** A hidden navigation label slides in and fades up.

Hover applies to controls. Content carries no hover and no transition at all; see `surfaces.md`.

Compose at most three of these in one hover. A row uses text lift plus arrow reveal, and adds rule sharpen on keyboard focus.

## Layout animation

Shared-layout animation is used once, for the marker that moves between selected cells in the contact control. Do not add a second one.

## Ambient background

Two dot layers drift continuously behind everything, on a layer larger than the viewport so the drift never exposes an edge, kept on the compositor. The other loop is the status dot. **These two are the only looping motion in the system.**

## Reduced motion

Under `prefers-reduced-motion: reduce`:

- Entrances resolve instantly to their visible state. Opacity may still fade; position offsets go to zero.
- The ambient background stops. The dot layers stay, static.
- The status dot stops pulsing and holds at full opacity.
- Hover colour and opacity changes continue. They carry state and must remain.
- Page transitions become a cut.

`MotionConfig reducedMotion="user"` covers everything `motion` drives. **It does not cover CSS loops**, which need their own media query in `index.css`.

## Rules

- Motion runs once per element per visit.
- No spring physics, no bounce, no overshoot.
- Animate `transform` and `opacity`. Never animate `width`, `height`, `top` or `left` on content; the exceptions are a rule and an inset on controls, both a few pixels wide.
