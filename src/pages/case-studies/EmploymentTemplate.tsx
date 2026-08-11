import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import BackButton from '../../components/BackButton';
import StatBlock from '../../components/StatBlock';
import { EASE_APPLE } from '../../components/motion';
import { EmploymentData } from '../../content/employment';

const DURATION_BUMP = 0.8;

const EmploymentTemplate: React.FC<{ data: EmploymentData }> = ({ data }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [data.id]);

    return (
        <div className="w-full pb-32">

            {/* 1. HERO SECTION */}
            <div className="mb-24 lg:mb-32 relative">

                {/* Back Link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="mb-16 md:mb-24"
                >
                    <BackButton />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                    {/* Left: Title & Role */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: EASE_APPLE }}
                        className="lg:col-span-8"
                    >
                        <h1 className="text-display-xl mb-8 text-neutral-100 mix-blend-screen">
                            {data.companyName}<br />
                            {data.companySuffix && <span className="text-neutral-500">{data.companySuffix}</span>}
                        </h1>

                        <p className="text-body-lg text-neutral-400 max-w-xl">
                            {data.role}. <br />
                            {data.description}
                        </p>
                    </motion.div>

                    {/* Right: NDA Status */}
                    <div className="lg:col-span-4 flex flex-col justify-end lg:pl-12">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="flex flex-col gap-6 border-l border-white/[0.08] pl-8 py-2"
                        >
                            <div className="flex items-center gap-2 mb-1">
                                <div className="w-1.5 h-1.5 bg-neutral-600 rounded-full animate-pulse" />
                                <span className="text-eyebrow font-mono uppercase text-neutral-500">Status: {data.ndaStatus}</span>
                            </div>
                            <p className="text-body-sm text-neutral-500 max-w-[240px] whitespace-pre-line">
                                {data.ndaDescription}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* 2. STATS & IMPACT GRID */}
            <section className="mb-32 lg:mb-48">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-12"
                >
                    <span className="w-8 h-[1px] bg-white/20" />
                    <h2 className="text-eyebrow font-mono text-neutral-500 uppercase">Impact & Metrics</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-r border-b border-white/[0.08]">
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
            <section className="mb-32">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-20"
                >
                    <span className="w-8 h-[1px] bg-white/20" />
                    <h2 className="text-eyebrow font-mono text-neutral-500 uppercase">Core Capabilities</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/[0.08]">
                    {data.capabilities.map((cap, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: DURATION_BUMP, delay: idx * 0.1, ease: EASE_APPLE }}
                            className="group p-8 lg:p-12 border-b border-r border-white/[0.08] hover:bg-white/[0.02] transition-colors duration-500 flex flex-col gap-8 min-h-[320px]"
                        >
                            <h3 className="text-eyebrow font-mono text-neutral-500 group-hover:text-white transition-colors duration-500 uppercase">
                                {cap.title}
                            </h3>

                            <ul className="flex flex-col gap-4">
                                {cap.items.map((text, i) => (
                                    <li key={i} className="text-body-sm text-neutral-400 group-hover:text-neutral-300 transition-colors duration-500">
                                        {text}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 4. FOOTER: RESTRICTED ACCESS REDESIGN */}
            <section className="">
                <div className="relative border border-white/[0.08] bg-white/[0.01] overflow-hidden group">

                    {/* Subtle Background Pattern */}
                    <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-700" />

                    <div className="relative p-8 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                        {/* LEFT: NDA Declaration */}
                        <div className="flex flex-col gap-8 justify-between">
                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-3 text-neutral-500">
                                    <Lock size={20} strokeWidth={1.5} />
                                    <h2 className="text-eyebrow font-mono uppercase">Restricted Access</h2>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-headline text-white">
                                        Client work is protected by NDA.
                                    </h3>
                                    <p className="text-body text-neutral-500">
                                        I can’t share decks, screenshots, or client-specific materials.
                                    </p>
                                </div>
                            </div>

                            {/* Timestamp */}
                            <div className="flex flex-col gap-1">
                                <span className="text-eyebrow font-mono text-neutral-600 uppercase">Active Status</span>
                                <span className="text-caption text-neutral-500">{data.ndaStatus}</span>
                            </div>
                        </div>

                        {/* RIGHT: What I can share */}
                        <div className="flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/[0.08] pt-12 lg:pt-0 lg:pl-12">
                            <span className="text-eyebrow font-mono text-neutral-500 uppercase mb-8 block">
                                What I can share on a call:
                            </span>
                            <ul className="flex flex-col gap-4">
                                {data.sharableOnCall.map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 group/item">
                                        <div className="mt-1.5 w-1.5 h-1.5 bg-neutral-700 rounded-full group-hover/item:bg-white transition-colors duration-300" />
                                        <span className="text-body-sm text-neutral-400 group-hover/item:text-neutral-200 transition-colors duration-300">
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

export default EmploymentTemplate;
