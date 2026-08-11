import React from 'react';

/** The 4/8 column grid shared by Home, Portfolio, Process, About and Contact. */
const SplitPage: React.FC<{ children: React.ReactNode; align?: 'start' | 'center' }> = ({
    children,
    align = 'start',
}) => (
    <div className="w-full min-h-screen text-neutral-200 flex flex-col font-sans">
        <div
            className={`relative z-10 w-full max-w-[1600px] flex-1 mx-auto
                px-6 md:px-12 lg:pr-20 lg:pl-32 xl:px-32
                grid grid-cols-1 lg:grid-cols-12 gap-12
                py-24 lg:py-32 min-h-screen
                ${align === 'center' ? 'items-start lg:items-center' : 'items-start'}`}
        >
            {children}
        </div>

        <div className="fixed bottom-8 left-6 md:left-12 z-40 hidden lg:block pointer-events-none">
            <span className="text-caption text-neutral-500 font-mono uppercase opacity-40">
                Mert Bildik © 2026
            </span>
        </div>
    </div>
);

export default SplitPage;
