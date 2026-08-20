import React from 'react';

const SectionIntro: React.FC<{
    eyebrow: string;
    title: React.ReactNode;
    description: React.ReactNode;
}> = ({ eyebrow, title, description }) => (
    <div className="flex flex-col justify-start relative z-20">
        <div className="mb-6 lg:mb-8">
            <span className="text-eyebrow text-ink-low mb-4 block">{eyebrow}</span>
            <h2 className="text-display-lg text-ink-high">{title}</h2>
        </div>
        <p className="text-ink-body max-w-xs text-body">{description}</p>
    </div>
);

export default SectionIntro;
