# Writing a case study

`src/content/projects.ts` is the whole list. One entry gives a project its slot in `/portfolio` and its page at `/portfolio/<id>`. Add images under `src/assets/portfolio/<id>/`, matching the id exactly.

Three ways a project page can render, in the order the router tries them:

1. A hand-written component, for a project whose page is its own design.
2. `EmploymentTemplate`, driven by `src/content/employment.ts`.
3. `ProjectTemplate`, driven by the entry's own `caseStudy` block. This is the default and the one worth writing.

## String formatting

`ProjectTemplate` parses plain strings, so the punctuation in `projects.ts` is load-bearing:

- `\n` separates paragraphs. Blank ones are dropped.
- A line opening with `•` or `-` becomes a bullet. The marker is stripped.
- A `keyDecisions` string splits on the first em dash (`—`) into a card title and its body. With no em dash the card renders with an empty body.
- `impact.user` and `impact.business` take either a sentence or a list of stats. The list form renders as large stat blocks.

## Images

- `.webp` only, and never in `public/`.
- Filenames are lowercase and hyphenated, and describe the screen (`home`, `dashboard`, `wireframe-1`).
- Images sort by filename, so prefix with `1-`, `2-` where sequence matters.
- An `output` block names its own images by filename and states its own column count. Nothing is inferred from the wording of a title.

How images are framed, cropped and described is in `docs/design/imagery.md`.
