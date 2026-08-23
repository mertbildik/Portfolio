import React from 'react';

const HomePageSection: React.FC<{ children: React.ReactNode; id: string; hero?: boolean }> = ({
    children,
    id,
    hero = false,
}) => (
    <section id={id} className="w-full">
        <div
            className={`relative z-10 w-full max-w-page mx-auto px-6 ${hero ? 'pt-20 pb-24 md:pt-24 md:pb-28' : 'py-24 md:py-28'}`}
        >
            {children}
        </div>
    </section>
);

export default HomePageSection;
