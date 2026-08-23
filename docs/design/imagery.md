# Imagery

Screenshots, posters and one portrait are the only images in the system. They are shown in full colour, inside a frame that matches the canvas.

For adding images to a case study, see `docs/content/writing.md`.

## Frame

Every image sits in the same frame: full width, the minimal radius, the subtle `line` border, and a canvas-coloured backing. The backing is the point. A screenshot with transparent or letterboxed edges reads as part of the page rather than as a floating tile.

## Colour

Images render in their original colour. The frame, not an effect, is what makes an image belong. Do not apply a tint, gradient, overlay, blend mode, `grayscale`, `blur`, `brightness` or `saturate` to a content image.

## Fit

| Fit | When |
|---|---|
| Cover, auto height | A screenshot in a frame that takes its height from the image. The default. |
| Contain | Mixed aspect ratios inside a fixed-height cell, such as posters or social assets |
| Cover, aligned to the top | A portrait in a fixed aspect frame |

## Galleries

A gallery is one column, two columns, or a feature layout where one asset leads and the rest sit around it. The gap between images is the same as the gap between blocks elsewhere.

Columns are declared per output block, never inferred from the number of images or the wording of a title.

An output block opens with a borderless `fill` card describing what is shown, then the framed images below it.

## Portrait

One portrait exists. It is a full circle, cropped to the top and surrounded by the rotating location label. It has no filter, tint or overlay and is not a pattern to reuse.

## Homepage work

Selected work uses one art-directed real asset per shareable project. Each image fills or deliberately sits within the common 8:5 viewport; the crop and fit are chosen per project rather than inferred. Confidential work uses verified typographic data in the same frame instead of a placeholder or invented screenshot.

## Alt text and loading

- Every image below the first screen loads lazily.
- Alt text describes what the screen is, not that it is a screenshot: "OFK Construction homepage", never "screenshot" or "image". A filename is not alt text.
- Decorative layers, meaning overlays, are `div`s and never `img`s, so they need no alt.

## Icons

`lucide-react` only. Five sizes exist, each tied to what the icon sits in.

Stroke weight splits by what the icon is, not how big it is: lighter for symbols, default weight for directional and action marks.

Icons never carry meaning alone. Each one either sits beside a text label or lives inside a control with an `aria-label`.
