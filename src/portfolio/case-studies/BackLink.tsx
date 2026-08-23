import React from 'react';
import { Link } from 'react-router';

interface BackLinkProps {
    to: string;
    children: React.ReactNode;
    ariaLabel?: string;
}

const BackLink: React.FC<BackLinkProps> = ({ to, children, ariaLabel }) => (
    <Link
        to={to}
        className="group inline-flex items-center gap-3 w-fit text-ink-body hover:text-ink-max focus-visible:text-ink-max focus-visible:outline-none transition-colors duration-200 cursor-pointer"
        aria-label={ariaLabel}
    >
        <span className="h-[1px] w-8 bg-current transition-[width] duration-300 ease-out group-hover:w-12 group-focus-visible:w-12" />
        <span className="text-button font-mono uppercase">{children}</span>
    </Link>
);

export default BackLink;
