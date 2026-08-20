import React from 'react';

const HomepageSection: React.FC<{ children: React.ReactNode; id: string; hero?: boolean }> = ({
    children,
    id,
    hero = false,
}) => (
    <section id={id} className={`w-full ${hero ? 'min-h-screen flex items-center' : ''}`}>
        <div
            className="relative z-10 w-full max-w-page mx-auto px-6 py-20 flex flex-col gap-16"
        >
            {children}
        </div>
    </section>
);

export default HomepageSection;
