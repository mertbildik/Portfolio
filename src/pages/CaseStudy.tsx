import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { caseStudies } from '../data/case-studies';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05, delayChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
};

const CaseStudy: React.FC<{ id?: string }> = ({ id: propId }) => {
    const { id: paramId } = useParams<{ id: string }>();
    const id = propId || paramId;
    const study = caseStudies.find(cs => cs.id === id);
    const [activeSection, setActiveSection] = useState('problem');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    // TOC Observer Logic
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.2, rootMargin: "-20% 0% -35% 0%" }
        );

        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        return () => sections.forEach((section) => observer.unobserve(section));
    }, [id]);

    if (!study) {
        return <Navigate to="/portfolio" replace />;
    }

    const sections = [
        { id: 'problem', label: 'Problem' },
        { id: 'approach', label: 'Approach' },
        { id: 'solution', label: 'Solution' },
        { id: 'output', label: 'Output' },
        { id: 'impact', label: 'Impact' },
    ];

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // Helper to render text with clean spacing
    const renderText = (text: string) => {
        return text.split('\n').filter(p => p.trim()).map((paragraph, idx) => {
            // List items
            if (paragraph.trim().startsWith('•') || paragraph.trim().startsWith('-')) {
                return (
                    <div key={idx} className="flex gap-4 items-start pl-2">
                        <div className="w-1 h-1 rounded-full bg-neutral-400 mt-2.5 shrink-0" />
                        <p className="text-neutral-400 leading-relaxed text-[15px]">{paragraph.replace(/^[•-]\s*/, '')}</p>
                    </div>
                );
            }
            // Normal Paragraph
            return (
                <p key={idx} className="text-neutral-400 leading-relaxed text-[16px] mb-4 last:mb-0">
                    {paragraph}
                </p>
            );
        });
    };


    // McKinsey Specific Logic
    if (study.id === 'mckinsey') {
        const impactItems = [
            "Helped win 5 major client pitches with exec ready decks.",
            "Converted complex models into clean, editable think cell charts.",
            "137 positive notes and 10 negative notes from consultant reviews.",
            "Sprint based sessions shaped story, layout rules, and design calls fast.",
            "Owned visual refinement workstreams on high pressure decks.",
            "Ran native app UI checks and user tests. Shipped clear fixes."
        ];

        const mckSections = [
            {
                id: 'data-viz',
                label: 'Data visualization',
                hardWork: [
                    "Complex data reduced into a single point per page.",
                    "Think cell charts built to stay editable under late changes.",
                    "Chart systems kept consistent across large decks."
                ],
                output: [
                    "Reusable chart styles and slide patterns.",
                    "Before and after examples using dummy data."
                ],
                result: [
                    "Faster read time. Fewer follow up questions in reviews."
                ]
            },
            {
                id: 'exec-comms',
                label: 'Executive comms',
                hardWork: [
                    "Messy storylines turned into a clean decision path.",
                    "Titles rewritten to say the answer first.",
                    "Hierarchy tuned so leaders can scan in seconds."
                ],
                output: [
                    "Executive page templates.",
                    "Clear rules for headlines, labels, spacing, and charts."
                ],
                result: [
                    "Cleaner meetings. Faster alignment."
                ]
            },
            {
                id: 'pitch-decks',
                label: 'Pitch decks',
                hardWork: [
                    "High stakes pages built for credibility and clarity.",
                    "Narrative, proof, and next steps locked under tight deadlines.",
                    "Design held up through rapid review cycles."
                ],
                output: [
                    "Pitch flow maps and reusable layouts.",
                    "NDA safe examples of structure, not client content."
                ],
                result: [
                    "Supported winning 5 major pitches."
                ]
            },
            {
                id: 'ai-product',
                label: 'AI and product testing',
                hardWork: [
                    "Native app screens reviewed with real tasks and flows.",
                    "UI issues translated into simple, actionable notes.",
                    "Feedback focused on clarity, not taste."
                ],
                output: [
                    "Short test notes and fix lists.",
                    "Example findings with generic screens."
                ],
                result: [
                    "Fewer confusing moments for users. Cleaner screens shipped."
                ]
            }
        ];

        const scrollToSection = (id: string) => {
            const el = document.getElementById(id);
            if (el) {
                const offset = 100; // ample space for sticky headers if we had them, or just breathing room
                const elementPosition = el.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        };

        return (
            <div className="w-full flex flex-col items-start pt-0 pb-32">
                {/* HERO (Identical to original) */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full mb-12"
                >
                    <Link to="/portfolio" className="inline-flex items-center gap-2 mb-10 opacity-40 hover:opacity-100 transition-opacity duration-300 group">
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="text-xs tracking-widest uppercase font-medium">Back to Works</span>
                    </Link>

                    <div className="flex flex-col gap-6">
                        <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] w-fit">
                            <span className="w-1.5 h-1.5 rounded-full bg-white" />
                            <span className="text-[10px] font-mono font-medium text-neutral-300 uppercase tracking-widest">{study.role}</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.1]">
                            {study.title}
                        </h1>
                        <p className="text-lg md:text-xl text-neutral-500 font-normal max-w-2xl leading-relaxed">
                            {study.oneLineSummary}
                        </p>
                    </div>

                    {/* NEW: Replaced NDA line */}
                    <div className="mt-8 flex items-center gap-3 opacity-60">
                        <div className="w-2 h-2 rounded-full bg-amber-500/50" />
                        <p className="text-sm text-neutral-400">Work is under NDA. Process and outcomes can be shared on a call.</p>
                    </div>
                </motion.div>

                {/* IMPACT STRIP */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="w-full border-t border-b border-white/[0.08] py-8 mb-16"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
                        {impactItems.map((item, i) => (
                            <div key={i} className="flex gap-3 items-start">
                                <div className="w-1 h-1 rounded-full bg-neutral-500 mt-2 shrink-0" />
                                <p className="text-sm text-neutral-400 leading-relaxed font-light">{item}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* NAVIGATION CHIPS */}
                <div className="sticky top-8 z-50 mb-24 w-full overflow-x-auto no-scrollbar py-2">
                    <div className="flex gap-2 backdrop-blur-xl bg-black/50 p-1.5 rounded-full border border-white/[0.08] w-fit">
                        {mckSections.map((sec) => (
                            <button
                                key={sec.id}
                                onClick={() => scrollToSection(sec.id)}
                                className="px-4 py-1.5 rounded-full text-[11px] uppercase tracking-wider font-medium text-neutral-400 hover:text-white hover:bg-white/[0.05] transition-all whitespace-nowrap"
                            >
                                {sec.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* CONTENT SECTIONS */}
                <div className="w-full space-y-32">
                    {mckSections.map((sec, i) => (
                        <section key={sec.id} id={sec.id} className="scroll-mt-32">
                            {/* Section Header */}
                            <div className="mb-12 border-b border-white/[0.08] pb-4">
                                <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">0{i + 1} — {sec.label}</span>
                            </div>

                            {/* 3-Block Grid */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
                                {/* Block 1: Hard Work */}
                                <div className="space-y-6">
                                    <h3 className="text-sm font-medium text-white/90 uppercase tracking-widest flex items-center gap-3">
                                        <span className="w-1.5 h-1.5 bg-neutral-700 rounded-full"></span>
                                        Hard work
                                    </h3>
                                    <div className="space-y-4">
                                        {sec.hardWork.map((line, idx) => (
                                            <p key={idx} className="text-neutral-400 text-[15px] leading-relaxed border-l-2 border-white/[0.05] pl-4">
                                                {line}
                                            </p>
                                        ))}
                                    </div>
                                </div>

                                {/* Block 2: Output */}
                                <div className="space-y-6">
                                    <h3 className="text-sm font-medium text-white/90 uppercase tracking-widest flex items-center gap-3">
                                        <span className="w-1.5 h-1.5 bg-neutral-700 rounded-full"></span>
                                        Output
                                    </h3>
                                    <div className="space-y-4">
                                        {sec.output.map((line, idx) => (
                                            <p key={idx} className="text-neutral-400 text-[15px] leading-relaxed border-l-2 border-white/[0.05] pl-4">
                                                {line}
                                            </p>
                                        ))}
                                    </div>
                                </div>

                                {/* Block 3: Result */}
                                <div className="space-y-6">
                                    <h3 className="text-sm font-medium text-white/90 uppercase tracking-widest flex items-center gap-3">
                                        <span className="w-1.5 h-1.5 bg-neutral-700 rounded-full"></span>
                                        Result
                                    </h3>
                                    <div className="space-y-4">
                                        {sec.result.map((line, idx) => (
                                            <p key={idx} className="text-neutral-400 text-[15px] leading-relaxed border-l-2 border-white/[0.05] pl-4">
                                                {line}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>
                    ))}
                </div>

                {/* TRUST & ACCESS BLOCK */}
                <div className="w-full mt-32 mb-16 flex justify-center">
                    <div className="bg-white/[0.02] border border-white/[0.05] p-8 rounded-lg max-w-2xl text-center space-y-4">
                        <p className="text-neutral-300 text-sm leading-relaxed">
                            Trusted with advanced tools for high risk visual cleanup.<br />
                            Often staffed in a dedicated visual improvement lane.<br />
                            Focused on polish, consistency, and final quality under deadline.
                        </p>
                    </div>
                </div>

                {/* NDA LOCKED GRID */}
                <div className="w-full mt-16 border-t border-white/[0.08] pt-16">
                    <div className="mb-12">
                        <h2 className="text-xl font-medium text-white mb-2">Restricted access</h2>
                        <p className="text-neutral-500 text-sm">Client files are confidential. Only process and outcomes are shown here.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {[
                            "Confidential client deck",
                            "Internal strategy narrative",
                            "Data visualization system",
                            "Workshop materials",
                            "Template library"
                        ].map((label, i) => (
                            <div key={i} className="aspect-square bg-[#0a0a0a] border border-white/[0.05] flex flex-col items-center justify-center p-4 text-center gap-3 group hover:border-white/[0.1] transition-colors cursor-not-allowed">
                                <div className="w-8 h-8 rounded-full bg-white/[0.03] flex items-center justify-center group-hover:bg-white/[0.05]">
                                    <div className="w-2 h-2 rounded-sm border border-neutral-600" />
                                </div>
                                <span className="text-[10px] uppercase tracking-widest text-neutral-600 font-mono">{label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full flex flex-col items-start pt-0 pb-32">

            {/* HEADER: Back Link & Title */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full mb-16 lg:mb-24"
            >
                <Link to="/portfolio" className="inline-flex items-center gap-2 mb-10 opacity-40 hover:opacity-100 transition-opacity duration-300 group">
                    <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="text-xs tracking-widest uppercase font-medium">Back to Works</span>
                </Link>

                <div className="flex flex-col gap-6">
                    <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] w-fit">
                        <span className="w-1.5 h-1.5 rounded-full bg-white" />
                        <span className="text-[10px] font-mono font-medium text-neutral-300 uppercase tracking-widest">{study.role}</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.1]">
                        {study.title}
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-500 font-normal max-w-2xl leading-relaxed">
                        {study.oneLineSummary}
                    </p>
                </div>
            </motion.div>

            {/* MAIN CONTENT GRID */}
            {/* Using standard grid (stretch) so columns match height */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                {/* LEFT SIDEBAR COLUMN */}
                {/* Timeline & Tools Scroll Away, Contents Sticks */}
                <div className="lg:col-span-3 lg:col-start-1 hidden lg:block pt-12 pb-24 relative">
                    <div className="flex flex-col gap-12 h-full">
                        {/* Meta Info - Scrolls Away */}
                        <div className="space-y-10">
                            <div className="space-y-3">
                                <h3 className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">Timeline</h3>
                                <p className="text-neutral-300 text-sm font-medium">{study.timeline}</p>
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">Tools</h3>
                                <div className="flex flex-wrap gap-2">
                                    {study.tools.map(tool => (
                                        <span key={tool} className="text-[11px] text-neutral-500 bg-white/[0.02] border border-white/[0.05] px-2 py-1 rounded text-nowrap">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* TOC Navigation - Sticks */}
                        <nav className="space-y-2 sticky top-32">
                            <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest font-medium mb-4 block">Contents</span>
                            <div className="flex flex-col border-l border-white/[0.08]">
                                {sections.map(section => (
                                    <button
                                        key={section.id}
                                        onClick={() => scrollTo(section.id)}
                                        className={`text-left px-4 py-2 text-[13px] font-medium transition-all duration-300 border-l mb-[-1px] ${activeSection === section.id
                                            ? 'text-white border-white pl-6'
                                            : 'text-neutral-500 border-transparent hover:text-neutral-300 hover:pl-5'
                                            }`}
                                    >
                                        {section.label}
                                    </button>
                                ))}
                            </div>
                        </nav>
                    </div>
                </div>

                {/* RIGHT CONTENT (Narrative) */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="lg:col-span-8 lg:col-start-5 space-y-24 md:space-y-32"
                >

                    {/* 1. Problem */}
                    {study.problem && (
                        <motion.section id="problem" variants={itemVariants} className="space-y-8 scroll-mt-32">
                            <span className="text-xs font-mono text-neutral-600 uppercase tracking-widest block">01 — The Problem</span>
                            <div className="space-y-6">
                                {renderText(study.problem)}
                            </div>

                            {/* Context & Goals */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/[0.05]">
                                <div className="space-y-3">
                                    <h4 className="text-[11px] font-medium text-white mb-2">Context</h4>
                                    <p className="text-neutral-500 text-sm leading-relaxed">{study.context}</p>
                                </div>
                                <div className="space-y-3">
                                    <h4 className="text-[11px] font-medium text-white mb-2">Objectives</h4>
                                    <ul className="space-y-2">
                                        {study.goals.map((g, i) => (
                                            <li key={i} className="text-neutral-500 text-sm flex gap-3">
                                                <span className="opacity-30">•</span> {g}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.section>
                    )}

                    {/* 2. Approach */}
                    {study.approach && (
                        <motion.section id="approach" variants={itemVariants} className="space-y-8 scroll-mt-32">
                            <span className="text-xs font-mono text-neutral-600 uppercase tracking-widest block">02 — Approach</span>
                            <div className="space-y-6">
                                {renderText(study.approach)}
                            </div>

                            <div className="p-8 bg-white/[0.02] border border-white/[0.05] rounded-lg">
                                <h4 className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest mb-4">User Scenario</h4>
                                <p className="text-neutral-300 leading-relaxed text-[15px]">{study.usersScenario}</p>
                            </div>
                        </motion.section>
                    )}

                    {/* 3. Solution */}
                    {study.solution && (
                        <motion.section id="solution" variants={itemVariants} className="space-y-8 scroll-mt-32">
                            <span className="text-xs font-mono text-neutral-600 uppercase tracking-widest block">03 — Solution</span>
                            <div className="space-y-6">
                                {renderText(study.solution)}
                            </div>

                            <div className="grid grid-cols-1 gap-4 pt-4">
                                {study.keyDecisions.map((decision, i) => {
                                    const [title, ...bodyParts] = decision.split('—');
                                    return (
                                        <div key={i} className="p-6 border-l border-white/[0.1] hover:border-white/40 hover:bg-white/[0.02] transition-colors duration-300">
                                            <h5 className="text-sm font-medium text-white mb-2">{title.trim()}</h5>
                                            <p className="text-sm text-neutral-500 leading-relaxed">{bodyParts.join('—').trim()}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </motion.section>
                    )}

                    {/* 4. Output (was Final) */}
                    {study.finalProduct.length > 0 && (
                        <motion.section id="output" variants={itemVariants} className="space-y-12 scroll-mt-32">
                            <span className="text-xs font-mono text-neutral-600 uppercase tracking-widest block">04 — Output</span>

                            <div className="space-y-16">
                                {study.finalProduct.filter(item => !item.title.toLowerCase().includes('brand')).map((item, i) => (
                                    <div key={i} className="space-y-6 group">
                                        <div className="aspect-video w-full bg-[#111] border border-white/[0.08] rounded-lg flex items-center justify-center relative overflow-hidden">
                                            {/* Placeholder for visuals until we have images, using subtle gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-transparent" />
                                            <span className="font-mono text-[10px] text-neutral-700 uppercase tracking-widest group-hover:text-neutral-500 transition-colors">Visual Asset {i + 1}</span>
                                        </div>
                                        <div>
                                            <h4 className="text-xl text-white font-medium mb-2">{item.title}</h4>
                                            <p className="text-neutral-500 text-sm leading-relaxed max-w-xl">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.section>
                    )}

                    {/* 5. Impact */}
                    {(study.impact.user || study.impact.business) && (
                        <motion.section id="impact" variants={itemVariants} className="space-y-8 scroll-mt-32">
                            <span className="text-xs font-mono text-neutral-600 uppercase tracking-widest block">05 — Impact</span>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="p-8 border border-white/[0.08] rounded-lg hover:bg-white/[0.02] transition-colors">
                                    <h4 className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest mb-6">User</h4>
                                    {renderText(study.impact.user)}
                                </div>
                                <div className="p-8 border border-white/[0.08] rounded-lg hover:bg-white/[0.02] transition-colors">
                                    <h4 className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest mb-6">Business</h4>
                                    {renderText(study.impact.business)}
                                </div>
                            </div>

                            <div className="pt-24 mt-24 border-t border-white/[0.05]">
                                <h3 className="text-2xl font-medium text-white mb-8">Retrospective</h3>
                                <div className="text-neutral-500 leading-relaxed text-lg font-light max-w-2xl">
                                    {renderText(study.learnings)}
                                </div>
                            </div>
                        </motion.section>
                    )}

                </motion.div>
            </div>
        </div>
    );

};

export default CaseStudy;
