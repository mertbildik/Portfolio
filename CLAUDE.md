# CLAUDE.md

Operating contract for this repository.

## Verify before claiming done

```bash
npm run typecheck && npm run build && npm run test
```

All three must pass. There is no linter, so these are the whole check. `npm run test` builds and previews first, so it is the slowest of the three.

## Repository map & ownership

A routing layer, not required reading. Inspect the affected code first, then open only the docs the task actually needs.

| Area | Entry point | Holds |
|---|---|---|
| Design values | `src/index.css` | Every design value, in one `@theme` block. There is no `tailwind.config.js`. |
| Design meaning | `docs/design/direction.md` | The rules that outrank the rest, and the route to the other eight files. Open the one for the layer you are touching. |
| Content | `src/content/` | The project and employment entries. One project entry gives a project both its index slot and its page. |
| Content rules | `docs/content/writing.md` | How a case study's strings are formatted. Only needed when writing or editing one. |
| Implementation | `src/` | Routes and app shell in `App.tsx`, the two page frames in `layouts/`, everything else in `pages/` and `components/`. |
| Verification | `tests/` | Playwright smoke tests over every route. |

**Ownership**

- Code owns implementation and current state. Do not restate it in Markdown.
- `src/index.css` owns design values.
- `docs/design/` owns semantics, principles, terminology, constraints and intentional exceptions.
- Any other Markdown exists only for stable knowledge that cannot be safely inferred from the code.

## Constraints

- **Write tokens, not raw values.** `text-ink-low`, `border-line`, `bg-canvas`. Tailwind's default palette still resolves, so a raw grey will not error, it will just quietly leave the system.
- **The dependency list is closed.** Do not add a package. Two are renamed upstream: import from `motion/react`, not `framer-motion`, and from `react-router`, not `react-router-dom`.
- **`space-y-*` sets `margin-bottom` in Tailwind 4**, not `margin-top` as in Tailwind 3. A child inside a `space-y-*` container must not carry its own `mb-*`: they are the same property now, so one silently wins instead of the two stacking.
- Deep links need the host to serve `index.html` for unknown paths. `public/_redirects` and `vercel.json` carry this.

### Change discipline

- Preserve existing semantic rules unless the task intentionally changes them.
- If a design/content rule changes, update its canonical doc.
- Implementation-only changes do not require documentation updates.
- Never duplicate values, class strings, code structure, inventories, or current implementation state in Markdown.
- Never use Markdown as a changelog, audit log, implementation diary, or history.
- Do not create a new rule or document when the code already explains it clearly.

### Consistency after changes

When changing a canonical fact, name, rule, token, or decision:

- Run a targeted search for references to the changed concept, including the old value/name where useful.
- Check only likely affected areas; do not rescan the repository broadly.
- If you find or create a conflict between code, documentation, or canonical rules, do not reconcile it silently. Tell me what conflicts, recommend the smallest resolution, and ask before changing either side.
- Do not update unrelated Markdown just because implementation changed.
