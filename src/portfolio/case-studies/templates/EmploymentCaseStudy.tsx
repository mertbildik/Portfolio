import React from 'react';
import { motion } from 'motion/react';
import { Lock } from 'lucide-react';
import type { EmploymentData } from '../../content/employment';
import BackLink from '../BackLink';
import CaseStudySectionNavigator from '../CaseStudySectionNavigator';
import { EASE, VIEWPORT_ONCE } from '../../../shared/motion';

const DURATION_BUMP = 0.8;
const SECTIONS = [
    { id: 'impact', label: 'Impact', description: 'Scale and outcomes' },
    { id: 'capabilities', label: 'Capabilities', description: 'Core areas of work' },
    { id: 'restricted-access', label: 'Restricted access', description: 'NDA and shareable process' },
];

const StatBlock: React.FC<{ value: string; label: string; desc: string; delay: number }> = ({ value, label, desc, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT_ONCE}
        transition={{ duration: 0.8, delay, ease: EASE }}
        className="relative flex flex-col items-start text-left p-6 min-h-[180px]"
    >
        <div className="w-full">
            <span className="block text-display-md font-mono text-ink-high">{value}</span>
        </div>
        <div className="flex flex-col gap-2 mt-6 w-full items-start">
            <span className="block text-eyebrow text-ink-low">{label}</span>
            <p className="text-body-sm text-ink-body">{desc}</p>
        </div>
    </motion.div>
);

const EmploymentCaseStudy: React.FC<{ data: EmploymentData }> = ({ data }) => {
    return (
        <div className="w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE }}
                className="mb-24 w-full md:mb-32"
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-16 md:mb-24"
                >
                    <BackLink to="/#portfolio" ariaLabel="Back to portfolio">Go back</BackLink>
                </motion.div>

                <div className="flex flex-col gap-8">
                    <div className="flex flex-wrap items-center gap-3">
                        <div className="inline-flex items-center rounded-md surface px-3 py-1.5">
                            <span className="text-caption text-ink-low">{data.role}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-ink-low" />
                            <span className="text-caption text-ink-low">Status: {data.ndaStatus}</span>
                        </div>
                    </div>

                    <h1 className="text-display-lg text-ink-high">
                        {data.companyName}<br />
                        {data.companySuffix && <span>{data.companySuffix}</span>}
                    </h1>

                    <p className="max-w-xl text-body text-ink-body">{data.description}</p>

                    <div className="space-y-3">
                        <span className="block text-eyebrow text-ink-low">Tools</span>
                        <div className="flex flex-wrap gap-2">
                            {data.tools.map((tool) => (
                                <span key={tool} className="rounded-md surface px-2 py-1 text-caption text-ink-low text-nowrap">
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>

                    <p className="max-w-xl whitespace-pre-line text-body-sm text-ink-low">{data.ndaDescription}</p>
                </div>
            </motion.div>

            <CaseStudySectionNavigator sections={SECTIONS} pageKey={data.id} />

            <div className="space-y-24 md:space-y-32">
            <section id="impact" className="scroll-mt-32">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={VIEWPORT_ONCE}
                    className="mb-12"
                >
                    <h2 className="text-display-md text-ink-high">Impact & metrics</h2>
                </motion.div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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

            <section id="capabilities" className="scroll-mt-32">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={VIEWPORT_ONCE}
                    className="mb-12"
                >
                    <h2 className="text-display-md text-ink-high">Core capabilities</h2>
                </motion.div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {data.capabilities.map((cap, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={VIEWPORT_ONCE}
                            transition={{ duration: DURATION_BUMP, delay: idx * 0.1, ease: EASE }}
                            className="flex min-h-[320px] flex-col gap-8 p-8 md:p-10"
                        >
                            <h3 className="text-card-title text-ink-high">
                                <span className="font-mono">{cap.title.split(' / ')[0]}</span> / {cap.title.split(' / ')[1]}
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

            <section id="restricted-access" className="scroll-mt-32">
                <div className="relative surface rounded-md overflow-hidden">

                    <div className="relative grid grid-cols-1 gap-12 p-8 md:grid-cols-2 md:p-12">

                        {/* LEFT: NDA Declaration */}
                        <div className="flex flex-col gap-8 justify-between">
                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-3 text-ink-low">
                                    <Lock size={20} strokeWidth={1.5} />
                                    <h2 className="text-display-md text-ink-high">Restricted access</h2>
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
                                <span className="text-eyebrow text-ink-low">Active status</span>
                                <span className="text-caption text-ink-low">{data.ndaStatus}</span>
                            </div>
                        </div>

                        {/* RIGHT: What I can share */}
                        <div className="flex flex-col justify-center">
                            <span className="text-eyebrow text-ink-low mb-8 block">
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
        </div>
    );
};

export default EmploymentCaseStudy;
