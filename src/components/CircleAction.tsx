import React from 'react';

const CircleAction: React.FC<{ children: React.ReactNode; small?: boolean }> = ({ children, small = false }) => (
    <span
        aria-hidden="true"
        className={`${small ? 'w-10 h-10' : 'w-12 h-12'} rounded-full border border-line-strong flex items-center justify-center text-ink-max group-hover:bg-fill-inverse group-hover:text-ink-inverse group-focus-visible:bg-fill-inverse group-focus-visible:text-ink-inverse transition-all duration-300 shrink-0 ml-4`}
    >
        {children}
    </span>
);

export default CircleAction;
