# Architecture

The application uses a small feature-based structure:

- `src/app/` owns the application shell, routing, and providers.
- `src/homepage/` owns homepage composition, the hero, the narrow page frame, and the portrait.
- `src/contact/` owns the contact form and contact details.
- `src/portfolio/` owns the homepage portfolio index, runtime portfolio content, project assets, and case-study presentation.
- `src/shared/` contains only code reused across features.
- `docs/` remains separate from implementation as the human-readable design, editorial, and engineering reference.

Runtime portfolio data lives in `src/portfolio/content/`. `docs/content/` is its human-readable editorial reference. Content changes must keep both representations consistent.

Keep feature folders flat. Add a shared abstraction only when multiple features genuinely use it; otherwise colocate it with its owner.

`HomePage` composes the Homepage, Portfolio, and Contact features inside its page frame. Features may import from `shared/`; they do not import homepage layout or application-shell code.
