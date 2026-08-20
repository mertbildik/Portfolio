import React from 'react';
import { motion } from 'motion/react';
import { Lock } from 'lucide-react';
import type { EmploymentData } from '../../content/employment';
import BackLink from '../../shared/BackLink';
import { EASE, VIEWPORT_ONCE } from '../../shared/motion';

const DURATION_BUMP = 0.8;

const StatBlock: React.FC<{ value: string; label: string; desc: string; delay: number }> = ({ value, label, desc, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT_ONCE}
        transition={{ duration: 0.8, delay, ease: EASE }}
        className="relative flex flex-col items-start text-left p-6 min-h-[180px]"
    >
        <div className="w-full">
            <span className="block text-display-md text-ink-high">{value}</span>
        </div>
        <div className="flex flex-col gap-2 mt-6 w-full items-start">
            <span className="block text-eyebrow font-mono uppercase text-ink-low">{label}</span>
            <p className="text-body-sm text-ink-body">{desc}</p>
        </div>
    </motion.div>
);

const EmploymentCaseStudy: React.FC<{ data: EmploymentData }> = ({ data }) => {
    return (
        <div className="w-full space-y-24 md:space-y-32">

            {/* 1. HERO SECTION */}
            <div className="relative">

                {/* Back Link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-16 md:mb-24"
                >
                    <BackLink to="/#portfolio" ariaLabel="Back to portfolio">Go back</BackLink>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left: Title & Role */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: EASE }}
                        className="lg:col-span-8"
                    >
                        <h1 className="text-display-lg mb-8 text-ink-high">
                            {data.companyName}<br />
                            {data.companySuffix && <span>{data.companySuffix}</span>}
                        </h1>

                        <p className="text-body text-ink-body max-w-xl">
                            {data.role}. <br />
                            {data.description}
                        </p>
                    </motion.div>

                    {/* Right: NDA Status */}
                    <div className="lg:col-span-4 flex flex-col justify-end lg:pl-12">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex flex-col gap-6 py-2"
                        >
                            <div className="flex items-center gap-2 mb-1">
                                <div className="w-1.5 h-1.5 bg-ink-low rounded-full" />
                                <span className="text-eyebrow font-mono uppercase text-ink-low">Status: {data.ndaStatus}</span>
                            </div>
                            <p className="text-body-sm text-ink-body max-w-[240px] whitespace-pre-line">
                                {data.ndaDescription}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* 2. STATS & IMPACT GRID */}
            <section>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={VIEWPORT_ONCE}
                    className="mb-12"
                >
                    <h2 className="text-eyebrow font-mono text-ink-high uppercase">Impact & Metrics</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {data.stats.map((stat, i) => (
                        <StatBlock
                            key={i}
                            value={stat.value}
                            label={stat.label}
                            desc={stat.desc}
                            delay={i * 0.05}
                        />
                    ))}
                </div>
            </section>

            {/* 3. MODULAR CAPABILITIES GRID */}
            <section>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={VIEWPORT_ONCE}
                    className="mb-12"
                >
                    <h2 className="text-eyebrow font-mono text-ink-high uppercase">Core Capabilities</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {data.capabilities.map((cap, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={VIEWPORT_ONCE}
                            transition={{ duration: DURATION_BUMP, delay: idx * 0.1, ease: EASE }}
                            className="p-8 lg:p-12 flex flex-col gap-8 min-h-[320px]"
                        >
                            <h3 className="text-eyebrow font-mono text-ink-high uppercase">
                                {cap.title}
                            </h3>

                            <ul className="flex flex-col gap-4">
                                {cap.items.map((text, i) => (
                                    <li key={i} className="text-body-sm text-ink-body">
                                        {text}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 4. FOOTER: RESTRICTED ACCESS REDESIGN */}
            <section>
                <div className="relative surface rounded-md overflow-hidden">

                    <div className="relative p-8 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                        {/* LEFT: NDA Declaration */}
                        <div className="flex flex-col gap-8 justify-between">
                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-3 text-ink-low">
                                    <Lock size={20} strokeWidth={1.5} />
                                    <h2 className="text-eyebrow font-mono uppercase text-ink-high">Restricted Access</h2>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-headline text-ink-high">
                                        Client work is protected by NDA.
                                    </h3>
                                    <p className="text-body text-ink-body">
                                        I can’t share decks, screenshots, or client-specific materials.
                                    </p>
                                </div>
                            </div>

                            {/* Timestamp */}
                            <div className="flex flex-col gap-1">
                                <span className="text-eyebrow font-mono text-ink-low uppercase">Active Status</span>
                                <span className="text-caption text-ink-low">{data.ndaStatus}</span>
                            </div>
                        </div>

                        {/* RIGHT: What I can share */}
                        <div className="flex flex-col justify-center">
                            <span className="text-eyebrow font-mono text-ink-low uppercase mb-8 block">
                                What I can share on a call:
                            </span>
                            <ul className="flex flex-col gap-4">
                                {data.sharableOnCall.map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="mt-1.5 w-1.5 h-1.5 bg-ink-body rounded-full" />
                                        <span className="text-body-sm text-ink-body">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default EmploymentCaseStudy;
