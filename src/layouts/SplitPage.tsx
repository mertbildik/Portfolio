import React from 'react';

export const IDENTITY_COLUMN =
    'flex flex-col justify-start relative z-20 h-auto';

const SplitPage: React.FC<{ children: React.ReactNode; id: string; hero?: boolean }> = ({
    children,
    id,
    hero = false,
}) => (
    <section id={id} className={`w-full ${hero ? 'min-h-screen flex items-center' : ''}`}>
        <div
            className="relative z-10 w-full max-w-page mx-auto px-6 py-18 flex flex-col gap-12"
        >
            {children}
        </div>
    </section>
);

export default SplitPage;
