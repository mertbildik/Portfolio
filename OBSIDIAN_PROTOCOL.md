# OBSIDIAN MONOLITH: DESIGN SYSTEM PROTOCOL & AGENT MANIFESTO

> **SYSTEM AUTHORITY:** IMMUTABLE
> **VERSION:** 1.0.0
> **ARCHITECT:** MERT BILDIK

---

## 1. CORE PHILOSOPHY (THE PARADIGM)
This project operates on the **"Obsidian Monolith"** design protocol. It serves as a definitive digital portfolio engineered for the "Agentic Era."

* **Aesthetic Goal:** "Real Minimalism" (Dieter Rams) meets "Linear-style" precision.
* **Visual Identity:** Strict Dark Mode (Monochromatic). No light mode. No decorative colors.
* **Interaction Physics:** Objects have mass. Motion is fluid (Spring physics), not robotic (Linear).
* **Vibe:** Intellectual, Silent, High-Performance, "Editor-Native."

---

## 2. COLOR SYSTEM (THE CHROMATIC SINGULARITY)
**CRITICAL RULE:** Do NOT use pure black (`#000000`) as a background. It causes OLED smear. Use the specific "Void" scale below.

### 2.1 Tailwind Semantic Tokens (Config Reference)
Configure `tailwind.config.js` or CSS variables strictly with these values:

| Token Name | Hex Value | Function |
| :--- | :--- | :--- |
| **bg-void** | `#0A0A0A` | **Main Canvas.** deep enough to be black, bright enough to prevent smear. |
| **bg-surface** | `#121212` | **Cards / Sidebars.** Slightly elevated surfaces. |
| **bg-surface-hover** | `#171717` | **Hover States.** Interaction feedback. |
| **border-subtle** | `#262626` | **Dividers.** Barely perceptible structural lines. |
| **border-active** | `#404040` | **Focus/Active.** Clear definition. |
| **text-primary** | `#EDEDED` | **Headings.** High contrast (Off-white). |
| **text-muted** | `#737373` | **Meta/Secondary.** Recedes into the background. |
| **text-inverse** | `#0A0A0A` | **Action.** Text on white buttons. |

### 2.2 Lighting & Depth
In a monochromatic system, light is the only decorator.
* **Specular Highlight:** All cards must have a 1px top inner border to simulate light hitting the edge.
    * *Tailwind Utility:* `shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]`
* **Glassmorphism:** For floating elements (Nav, Modals):
    * `bg-[#0A0A0A]/60` + `backdrop-blur-xl` + `border-white/10`

---

## 3. TYPOGRAPHY (GEIST SYSTEM)
**Font Family:** Geist Sans (Vercel) for UI, Geist Mono for code.

### 3.1 Hierarchy & Rules
* **NO BOLD WEIGHTS:** Never use `font-bold` (700) for large text. It looks clumsy in dark mode.
    * *Rule:* Use `font-medium` (500) for Headings.
    * *Rule:* Use `font-regular` (400) for Body.
* **Tracking (Letter Spacing):**
    * Headings (>30px): `tracking-tight` (-0.02em) to create a block-like feel.
    * Micro-labels (Caps): `tracking-widest` + `uppercase` + `text-xs`.

---

## 4. INTERACTION PHYSICS (FRAMER MOTION)
**CRITICAL RULE:** Reject standard CSS transitions for layout changes. Use Physics.

### 4.1 The "Obsidian" Spring
For hover states, scaling, and layout shifts, use this specific spring configuration:
```javascript
const springTransition = {
  type: "spring",
  stiffness: 300, // High tension (responsive)
  damping: 30,    // Quick settlement (no wobble)
  mass: 1
}

```

### 4.2 The "Apple" Ease

For page loads or modal entrances (non-interruptible):

* **Bezier:** `[0.25, 0.1, 0.25, 1.0]` (Starts fast, long smooth tail).

### 4.3 Staggered Entry

Elements must never appear all at once.

* Use `staggerChildren: 0.05`.
* **Slip Effect:** Elements should translate `y: 20 -> y: 0` while fading in.

---

## 5. COMPONENT ARCHITECTURE (ATOMIC RULES)

### 5.1 The Card

* **Base:** `bg-surface` (approx 50% opacity if glass).
* **Border:** `border border-white/5`.
* **Hover:** `scale-105` (micro) + `border-white/20` + Glow Shadow.

### 5.2 The Button

* **Shape:** `rounded-md` (Precise), NOT `rounded-full` (Pill).
* **Height:** `h-10` (40px).
* **Primary:** `bg-[#EDEDED]` (White) + `text-[#0A0A0A]` (Black).
* **Click:** Scale down to `0.96` (Tactile feedback).

### 5.3 Imagery (The Silence Technique)

* **Default State:** All project screenshots/images must be **Grayscale** (`grayscale-100`).
* **Hover State:** Reveal color (`grayscale-0`) with a smooth transition (`duration-500`).
* **Reasoning:** Prevents color noise from clashing with the monochromatic UI.

---

## 6. AGENT IMPLEMENTATION CHECKLIST

When generating code, you (The Agent) must verify:

1. [ ] Are we using `bg-[#0A0A0A]` instead of `#000000`?
2. [ ] Is the font Geist Sans?
3. [ ] Are animations using the defined Spring Physics?
4. [ ] Is the design strictly monochromatic (Black/White/Gray) with no accidental colors?
5. [ ] Are images grayscale by default?

> **END OF PROTOCOL**