# OFK Construction

Editorial reference only. Published project content lives in `src/portfolio/content/projects.ts`.

- **Kind:** Client project
- **Role:** Product designer
- **Year / Status:** 2026
- **Timeline:** Mar 2026 to Apr 2026
- **Tools:** React, Tailwind, Framer Motion, Notion, Claude Code, Adobe Creative Cloud

**One-line summary:** A brand direction, design system, and bilingual website for a Polish construction company, built so B2B clients can verify the work in one visit.

## Problem

OFK had been running since 2018 with 200+ employees.
Real track record. Orlen Olefin Expansion in Płock. Szczecin Polimery. Warsaw Fast Tramline.

But no website. No brand beyond a logo.
B2B clients had no way to check who OFK was before reaching out.

**Context**

Core problem statement
The work was real. The proof of it was not visible anywhere online.

**Objectives**

- Show who OFK is and what they build
- Make completed projects and references easy to verify
- Keep contact one tap away

**User scenario:** A procurement manager shortlisting subcontractors checks credibility before any call.
OFK had nothing to give them.

## Approach

Started with what a B2B buyer actually looks for.
Track record. Scale. Real references. A clear way to reach the team.

Content was shaped around those four questions.
The design system was built before pages, so EN and PL stay consistent without rework.

## Solution

One system across brand, design, and site.
Built to show the work, list real references, and make contact easy.

### Key decisions

**Bilingual from day one** — English and Polish baked into the system, not bolted on. OFK works with both Polish and international clients.

**Projects as the main trust signal** — Orlen Olefin Expansion, Szczecin Polimery, and the Warsaw Tramline shown with scope and reference letters.

**Reference companies up front** — FABE POLSKA, YOOJEONG, and ILK INSAAT named directly. Prospects can match them to the projects.

**System before pages** — Tokens, primitives, and motion rules built first. Every section reuses the same parts.

## Output

### Brand direction

A grounded, editorial visual direction. Monochrome blue accent on a cool blue-gray neutral family. Professional without feeling corporate.

### Design system

Tailwind v4 tokens, a tuned grayscale, type scale, motion constants, and reusable primitives. One source of truth for every page.

### Website

A bilingual site across Home, About, Projects, Services, and Contact. Built to load fast and read clearly on desktop and mobile.

- Images: `1-home`, `2-about`, `3-projects`, `4-references`

### Front-end build

Designed and shipped in React with Tailwind, Framer Motion for transitions, and Lenis for scroll. Same hands from system to live site.

## Impact

**User**

- **2 Languages** — English and Polish, built in from day one. Same content, same trust, both audiences.
- **3 Reference companies shown** — FABE POLSKA, YOOJEONG, and ILK INSAAT. Real names that prospects can verify.

**Business**

- **5 Core pages** — Home, About, Projects, Services, Contact. Everything a B2B buyer needs in one place.
- **1 Design system** — Tokens, primitives, and motion rules. Future pages stay consistent without redesign.

## Retrospective

B2B sites earn trust by answering the obvious questions first.
Who are you, what have you built, who can vouch for you, how do I reach you.
