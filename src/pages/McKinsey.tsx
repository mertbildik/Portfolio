import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Lock } from 'lucide-react';

// -- SYSTEM TOKENS --
const EASE_APPLE = [0.25, 1, 0.5, 1];
const DURATION_BUMP = 0.8;

// -- DATA: STATS SYSTEM (Source of Truth) --
const STATS_DATA = [
    { value: "10K+", label: "Assets", desc: "Slides. Charts. Templates. Systems." },
    { value: "50+", label: "Pitch Decks", desc: "Partner and C suite ready." },
    { value: "5", label: "Pitch Wins", desc: "Key pages that helped close." },
    { value: "137", label: "Kudos", desc: "From consultants I worked with." },
    { value: "10", label: "Critical Notes", desc: "Took it. Fixed it fast." },
    { value: "3", label: "Major Initiatives", desc: "Big work beyond the lane." },
    { value: "1K+", label: "ThinkCell Builds", desc: "Hard data. Clean charts." },
    { value: "2", label: "Native App Tests", desc: "UI and UX feedback teams shipped." },
];

const CAPABILITIES = [
    {
        title: "01 / DATA VIZ",
        items: [
            "Turned messy models into charts people got fast.",
            "Built ThinkCell visuals with clean labels, scale, and logic.",
            "One slide. One takeaway. No extra lines."
        ]
    },
    {
        title: "02 / EXECUTIVE COMMS",
        items: [
            "Made slides skimmable in seconds.",
            "Wrote titles that state the decision point.",
            "Kept page order tight so the story didn’t break in reviews."
        ]
    },
    {
        title: "03 / PITCH DECKS",
        items: [
            "Built high stakes pages for partner and client rooms.",
            "Shaped the flow so the “ask” was impossible to miss.",
            "Delivered key pages fast without letting quality slip."
        ]
    },
    {
        title: "04 / COLLABORATION",
        items: [
            "Joined 1 on 1 working sessions with consultants.",
            "Ran group reviews and made decisions live.",
            "Set handoff rules so decks stayed clean after I left."
        ]
    },
    {
        title: "05 / VISUAL POLISH",
        items: [
            "Owned the visual improvement lane week to week.",
            "Used Affinity and Photoshop for advanced fixes and rebuilds.",
            "Cleaned layout, spacing, and chart styling to a high bar."
        ]
    },
    {
        title: "06 / APP UI AND UX",
        items: [
            "Joined native app UI and UX user tests.",
            "Wrote clear feedback teams could ship.",
            "Flagged issues in flows, screens, and copy before release."
        ]
    }
];

const SHARABLE_ON_CALL = [
    "My process (how I work)",
    "The decisions behind the pages",
    "How I handle charts, story flow, and review cycles",
    "The outcomes at a high level"
];

// -- COMPONENTS --

const ListItem: React.FC<{
    label: string,
    subLabel?: string,
    onClick?: () => void,
    isExternal?: boolean
}> = ({ label, subLabel, onClick, isExternal }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: DURATION_BUMP, ease: EASE_APPLE }}
            className="group relative"
        >
            <div
                onClick={onClick}
                className={`
                    w-full py-6 flex items-baseline justify-between 
                    border-b border-white/[0.08] 
                    group-hover:border-white/[0.2] transition-colors duration-500
                    cursor-default
                `}
            >
                <div className="flex flex-col gap-1">
                    <span className="text-xl md:text-2xl font-light text-neutral-400 group-hover:text-white transition-colors duration-500 tracking-tight">
                        {label}
                    </span>
                    {subLabel && (
                        <span className="text-sm text-neutral-600 font-light group-hover:text-neutral-500 transition-colors duration-500">
                            {subLabel}
                        </span>
                    )}
                </div>

                {/* Arrow Logic */}
                <div className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out">
                    {isExternal ? <ArrowUpRight size={18} className="text-white" /> : <ArrowRight size={18} className="text-white" />}
                </div>
            </div>
        </motion.div>
    );
};

const StatBlock: React.FC<{ value: string; label: string; desc: string; delay: number }> = ({ value, label, desc, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: DURATION_BUMP, delay: delay, ease: EASE_APPLE }}
            className="group relative flex flex-col items-start text-left p-6 min-h-[180px] border-l border-white/[0.08] hover:bg-white/[0.02] transition-colors duration-500"
        >
            {/* Top Border for Grid Feel */}
            <div className="absolute top-0 left-0 w-full h-px bg-white/[0.08]" />

            <div className="w-full">
                <span className="block text-4xl md:text-5xl font-light text-white tracking-tight group-hover:scale-105 origin-left transition-transform duration-500 ease-out">
                    {value}
                </span>
            </div>

            <div className="flex flex-col gap-2 mt-6 w-full items-start">
                <span className="block text-[10px] font-mono uppercase tracking-widest text-neutral-400 group-hover:text-white transition-colors duration-500">
                    {label}
                </span>
                <p className="text-sm text-neutral-500 font-light leading-snug group-hover:text-neutral-400 transition-colors duration-500">
                    {desc}
                </p>
            </div>
        </motion.div>
    );
};

const McKinseyPage: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="min-h-screen w-full text-white font-sans selection:bg-white/20 selection:text-white pb-32">

            {/* MAIN CONTAINER: Matches Dog & Ride Width exactly */}
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 xl:px-32 pt-24 md:pt-32 pb-32">

                {/* 1. HERO SECTION */}
                <div className="mb-24 lg:mb-32 relative">

                    {/* Back Link */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="mb-16 md:mb-24"
                    >
                        <Link to="/" className="group inline-flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-300">
                            <span className="text-[10px] tracking-[0.2em] font-mono uppercase">01</span>
                            <div className="h-[1px] w-8 bg-current transition-all duration-300 group-hover:w-12" />
                            <span className="text-[10px] tracking-[0.2em] font-mono uppercase">Index</span>
                        </Link>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                        {/* Left: Title & Role */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: EASE_APPLE }}
                            className="lg:col-span-8"
                        >
                            <h1 className="text-[clamp(3.5rem,8vw,7.5rem)] font-medium leading-[0.9] tracking-[-0.03em] mb-8 text-neutral-100 mix-blend-screen">
                                McKinsey<br />
                                <span className="text-neutral-500">& Company</span>
                            </h1>

                            <p className="text-xl md:text-2xl font-light text-neutral-400 leading-relaxed max-w-xl">
                                Visual Communication Specialist. <br />
                                Translating complex financial models into intuitive narratives.
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
                                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">Status: Confidential</span>
                                </div>
                                <p className="text-sm text-neutral-500 font-light leading-relaxed max-w-[240px]">
                                    Work is under strict NDA. <br />
                                    Process and outcomes can be shared on a call.
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
                        <h2 className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Impact & Metrics</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-r border-b border-white/[0.08]">
                        {STATS_DATA.map((stat, i) => (
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
                        <h2 className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Core Capabilities</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/[0.08]">
                        {CAPABILITIES.map((cap, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: DURATION_BUMP, delay: idx * 0.1, ease: EASE_APPLE }}
                                className="group p-8 lg:p-12 border-b border-r border-white/[0.08] hover:bg-white/[0.02] transition-colors duration-500 flex flex-col gap-8 min-h-[320px]"
                            >
                                <h3 className="text-xs font-mono text-neutral-500 group-hover:text-white transition-colors duration-500 uppercase tracking-widest">
                                    {cap.title}
                                </h3>

                                <ul className="flex flex-col gap-4">
                                    {cap.items.map((text, i) => (
                                        <li key={i} className="text-[15px] font-light text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors duration-500">
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
                                        <h2 className="text-xs font-mono uppercase tracking-widest">Restricted Access</h2>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-2xl md:text-3xl font-light text-white leading-tight">
                                            Client work is protected by NDA.
                                        </h3>
                                        <p className="text-lg text-neutral-500 font-light leading-relaxed">
                                            I can’t share decks, screenshots, or client-specific materials.
                                        </p>
                                    </div>
                                </div>

                                {/* Timestamp */}
                                <div className="flex flex-col gap-1">
                                    <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">Active Status</span>
                                    <span className="text-sm text-neutral-500 font-light">Confidential</span>
                                </div>
                            </div>

                            {/* RIGHT: What I can share */}
                            <div className="flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/[0.08] pt-12 lg:pt-0 lg:pl-12">
                                <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-8 block">
                                    What I can share on a call:
                                </span>
                                <ul className="flex flex-col gap-4">
                                    {SHARABLE_ON_CALL.map((item, i) => (
                                        <li key={i} className="flex items-start gap-4 group/item">
                                            <div className="mt-1.5 w-1.5 h-1.5 bg-neutral-700 rounded-full group-hover/item:bg-white transition-colors duration-300" />
                                            <span className="text-lg font-light text-neutral-400 group-hover/item:text-neutral-200 transition-colors duration-300 leading-relaxed">
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

export default McKinseyPage;

