import React from 'react';

const SectionIntro: React.FC<{
    title: React.ReactNode;
    description: React.ReactNode;
}> = ({ title, description }) => (
    <div className="flex flex-col justify-start relative z-20">
        <h2 className="text-display-lg text-ink-high">{title}</h2>
        <p className="mt-6 text-ink-body max-w-page text-body">{description}</p>
    </div>
);

export default SectionIntro;
