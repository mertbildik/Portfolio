# Imagery

Screenshots, posters and one portrait are the only images in the system. They are shown in full colour, inside a square frame that matches the canvas.

## Pipeline

| Rule | Value |
|---|---|
| Format | `.webp` only |
| Location | `src/assets/portfolio/<project id>/` |
| Loading | `import.meta.glob` in `src/content/images.ts`, so Vite hashes and bundles them |
| Order | Filename, sorted. Prefix with `1-`, `2-` where order matters. |
| Naming | Lowercase, hyphenated, describes the screen (`home`, `dashboard`, `wireframe-1`) |
| Reference | An `output` block lists filenames without the extension |

Never place portfolio images in `public/`. Never add a second file format to the glob.

## Frame

Every image sits in the same frame.

```
w-full  bg-[#111111]  border border-white/[0.08]  overflow-hidden
radius: none
```

The backing matches the canvas, so a screenshot with transparent or letterboxed edges reads as part of the page rather than as a floating tile.

## Colour

Images render in **full colour**, with no base filter. The frame, not a filter, is what makes an image belong.

Do not apply `grayscale`, `blur`, `brightness` or `saturate` to content images.

## Fit

| Fit | Class | When |
|---|---|---|
| Fill | `w-full h-auto object-cover` | A screenshot in an auto-height frame. The default. |
| Contain | `w-full h-full object-contain` | Mixed aspect ratios inside a fixed-height cell (posters, social assets) |
| Crop to top | `w-full h-full object-cover object-top` | A portrait in a fixed aspect frame |

## Galleries

| Layout | Grid | Use |
|---|---|---|
| Full bleed | `grid-cols-1` | One wide screen. The opening shot of a gallery. |
| Pair | `grid-cols-1 md:grid-cols-2` | Two related screens, or a sequence of wireframes |
| Feature | `grid-cols-1 md:grid-cols-3 auto-rows-[300px]`, first cell `md:col-span-2 md:row-span-2` | A mixed set where one asset leads |

Gap is always `32px` (`gap-8`). Columns are declared per output block (`columns: 1 | 2`), never inferred from the number of images or the wording of a title.

An output block opens with a card describing what is shown, then the images:

```
p-6  bg-white/[0.02]  border border-white/[0.05]  rounded-lg
  title       text-card-title, white
  description text-body-sm, ink-low
then space-y-8 to the image grid
```

## Portrait

One portrait exists (About). Its treatment is fixed.

| Property | Value |
|---|---|
| Frame | `aspect-[3/4]`, `bg-[#111111]`, `border border-white/[0.08]`, square corners |
| Fit | `object-cover object-top` |
| Overlay | `bg-gradient-to-t from-black/60 via-transparent to-transparent` at `opacity-60` |
| Caption | Bottom left, `12px` inset, `text-caption font-mono uppercase`, `text-white/50` |

## Background texture

Not an image. Two animated CSS dot layers plus a scrim, defined in `color.md`, rendered once by `GlobalBackground` and fixed behind every route.

A large empty panel may repeat the pattern at a smaller scale as its own texture:

```
bg-[radial-gradient(#fff_1px,transparent_1px)]  [background-size:16px_16px]
opacity-[0.03]  →  opacity-[0.05] on group hover  (duration-700)
```

Use this at most once per page.

## Alt text and loading

- Every image below the first screen carries `loading="lazy"`.
- Alt text describes what the screen is, not that it is a screenshot: `"OFK Construction homepage"`, not `"screenshot"` or `"image"`.
- In a case study, alt follows `"<Project title> <block title>"`.
- Decorative layers (dot patterns, scrims, overlays) are `div`s, never `img`s, so they need no alt.

## Icons

`lucide-react` only.

| Size | Use |
|---|---|
| 24 | Success and confirmation states |
| 20 | Navigation, primary circle buttons, section icons |
| 16 | Compact circle buttons, row arrows |
| 12 | Inline meta (copy, check) |
| 10 | Inline link marker |

Stroke weight splits by what the icon is, not by its size:

| Weight | Icons |
|---|---|
| `strokeWidth={1.5}` | Symbols, an icon standing for a thing: the navigation set, the section lock, the success check |
| default (2) | Directional and action marks: every arrow, the copy and confirm glyphs. They hold their weight down to 10px. |

Icons never carry meaning alone. Each one either sits beside a text label or is inside a control with an `aria-label`.
