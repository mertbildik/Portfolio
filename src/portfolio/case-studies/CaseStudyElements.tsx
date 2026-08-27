import React from 'react';
import { motion } from 'motion/react';
import { blockVariants } from '../../shared/motion';
import BackLink from './BackLink';

interface CaseStudyHeaderProps {
    title: string;
    summary: string;
    role: string;
    timeline: string;
    scope: string;
    tools: string[];
}

export const CaseStudyHeader: React.FC<CaseStudyHeaderProps> = ({
    title,
    summary,
    role,
    timeline,
    scope,
    tools,
}) => (
    <motion.header
        variants={blockVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto mb-24 w-full max-w-page md:mb-32"
    >
        <div className="mb-16 md:mb-24">
            <BackLink to="/#portfolio" ariaLabel="Back to portfolio">Go back</BackLink>
        </div>

        <h1 className="text-display-lg text-ink-high text-balance">{title}</h1>
        <p className="mt-8 max-w-xl text-body text-ink-body text-balance">{summary}</p>

        <div className="mt-12 grid grid-cols-1 gap-6 border-t border-line pt-6 md:grid-cols-3 md:gap-8">
            <div>
                <span className="block text-eyebrow text-ink-low">Role</span>
                <span className="mt-2 block text-caption text-ink-body">{role}</span>
            </div>
            <div>
                <span className="block text-eyebrow text-ink-low">Timeline</span>
                <span className="mt-2 block font-mono text-caption text-ink-body">{timeline}</span>
            </div>
            <div>
                <span className="block text-eyebrow text-ink-low">Scope</span>
                <span className="mt-2 block text-caption text-ink-body">{scope}</span>
            </div>
        </div>

        <div className="mt-8 space-y-3">
            <span className="block text-eyebrow text-ink-low">Tools</span>
            <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                    <span key={tool} className="surface rounded-md px-2 py-1 text-caption text-ink-low">
                        {tool}
                    </span>
                ))}
            </div>
        </div>
    </motion.header>
);

export const CaseStudySectionHeading: React.FC<{ number: string; children: React.ReactNode }> = ({
    number,
    children,
}) => (
    <div className="mx-auto w-full max-w-page">
        <span className="mb-8 block font-mono text-eyebrow text-ink-low">{number}</span>
        <h2 className="text-display-md text-ink-high">{children}</h2>
    </div>
);

interface CaseStudyImageProps {
    src: string;
    alt: string;
    caption: string;
    className?: string;
}

export const CaseStudyImage: React.FC<CaseStudyImageProps> = ({ src, alt, caption, className = '' }) => (
    <figure className={`w-full ${className}`}>
        <div className="overflow-hidden rounded-md border border-line bg-canvas">
            <img src={src} alt={alt} className="block h-auto w-full" loading="lazy" decoding="async" />
        </div>
        <figcaption className="mt-4 max-w-2xl text-caption text-ink-low">{caption}</figcaption>
    </figure>
);
