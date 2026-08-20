import React from 'react';
import { Link } from 'react-router';

// The ink here is load-bearing, not decoration: the rule beside the label is drawn
// with `bg-current`, so the label's ink is also the rule's ink. Both would otherwise
// fall back to the document default.
const STYLE =
    'group inline-flex items-center gap-3 w-fit text-ink-low hover:text-ink-high focus-visible:text-ink-high focus-visible:outline-none transition-colors duration-300 cursor-pointer';

const Inner: React.FC = () => (
    <>
        <div className="h-[1px] w-8 bg-current transition-[width] duration-300 ease-out group-hover:w-12 group-focus-visible:w-12" />
        <span className="text-button font-mono uppercase">GO BACK</span>
    </>
);

const BackButton: React.FC = () => (
        <Link to="/#portfolio" className={STYLE} aria-label="Back to portfolio">
            <Inner />
        </Link>
);

export default BackButton;
