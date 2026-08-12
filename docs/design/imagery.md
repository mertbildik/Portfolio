# Imagery

Screenshots, posters and one portrait are the only images in the system. They are shown in full colour, inside a square frame that matches the canvas.

For adding images to a case study, see `docs/content/writing.md`.

## Frame

Every image sits in the same frame: full width, square corners, one border weight, and a canvas-coloured backing. The backing is the point. A screenshot with transparent or letterboxed edges reads as part of the page rather than as a floating tile.

## Colour

Images render in **full colour**, with no base filter. The frame, not a filter, is what makes an image belong. Do not apply `grayscale`, `blur`, `brightness` or `saturate` to a content image.

## Fit

| Fit | When |
|---|---|
| Cover, auto height | A screenshot in a frame that takes its height from the image. The default. |
| Contain | Mixed aspect ratios inside a fixed-height cell, such as posters or social assets |
| Cover, aligned to the top | A portrait in a fixed aspect frame |

## Galleries

A gallery is one column, two columns, or a feature layout where one asset leads and the rest sit around it. The gap between images is the same as the gap between blocks elsewhere.

**Columns are declared per output block**, never inferred from the number of images or the wording of a title.

An output block opens with a card describing what is shown, then the images below it. That card sits on the same border weight as the frames beneath it.

## Portrait

One portrait exists. Its treatment is fixed: a tall frame, cropped to the top, with a gradient rising from the bottom edge and a monospace caption inset into the corner. It is a one-off, not a pattern to reuse.

## Background texture

Not an image. See `color.md`.

## Alt text and loading

- Every image below the first screen loads lazily.
- Alt text describes what the screen **is**, not that it is a screenshot: "OFK Construction homepage", never "screenshot" or "image". A filename is not alt text.
- Decorative layers, meaning dot patterns, scrims and overlays, are `div`s and never `img`s, so they need no alt.

## Icons

`lucide-react` only. Five sizes exist, from a 24px confirmation mark down to a 10px inline marker, each tied to what the icon sits in.

Stroke weight splits by **what the icon is, not how big it is**:

- Lighter for symbols, an icon standing for a thing: the navigation set, a lock, a success check.
- Default weight for directional and action marks: every arrow, the copy and confirm glyphs. They hold their weight down to the smallest size.

**Icons never carry meaning alone.** Each one either sits beside a text label or lives inside a control with an `aria-label`.
