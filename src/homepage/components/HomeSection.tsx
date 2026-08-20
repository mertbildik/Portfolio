import React from 'react';

const HomeSection: React.FC<{ children: React.ReactNode; id: string; hero?: boolean }> = ({
    children,
    id,
    hero = false,
}) => (
    <section id={id} className={`w-full ${hero ? 'min-h-screen' : ''}`}>
        <div
            className={`relative z-10 w-full max-w-page mx-auto px-6 flex flex-col gap-16 ${hero ? 'pt-18 pb-20' : 'py-20'}`}
        >
            {children}
        </div>
    </section>
);

export default HomeSection;
