import { Variants } from 'motion/react';

/**
 * The one entrance curve. See docs/design/motion.md.
 *
 * motion wants four numbers, CSS wants a cubic-bezier() string, so this
 * is the JS-side copy of `--ease-entrance` in src/index.css. If one changes, the
 * other has to change with it.
 */
export const EASE = [0.16, 1, 0.3, 1] as const;

export const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
};

/** Same stagger, tighter timing. Used by list-heavy pages. */
export const listVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
};

export const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: EASE },
    },
};

export const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.2, ease: EASE },
    },
};
