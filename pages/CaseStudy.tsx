import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Menu, X, ArrowRight, CheckCircle2, Target, Users, Lightbulb, Zap, Rocket, ChevronRight, Circle } from 'lucide-react';
import { useScroll, useSpring, motion, AnimatePresence } from 'framer-motion';
import { caseStudies, CaseStudyData } from '../data/case-studies.tsx';
import CaseStudyLayout from '../components/CaseStudyLayout';

const CaseStudy: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const study = caseStudies.find(cs => cs.id === id);
    const [activeSection, setActiveSection] = useState('hero');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const softTransition = {
        type: "spring",
        stiffness: 400,
        damping: 30,
        mass: 0.8
    };

    const sectionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                ...softTransition,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0, transition: softTransition }
    };

    // Track active section for TOC
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0, rootMargin: "-45% 0% -45% 0%" }
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
        { id: 'final', label: 'Final Product' },
        { id: 'impact', label: 'Impact' },
    ];

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
        setIsMobileMenuOpen(false);
    };

    // Helper function to render text with line breaks as separate paragraphs
    const renderTextWithBreaks = (text: string, className: string) => {
        const lines = text.split('\n').filter(p => p.trim());
        return lines.map((line, index) => {
            if (line.trim().startsWith('•') || line.trim().startsWith('-')) {
                const content = line.trim().substring(1).trim();
                return (
                    <div key={index} className="flex gap-3 items-start group">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-accent/40 mt-2.5 flex-shrink-0 group-hover:bg-teal-accent transition-colors duration-500" />
                        <p className={className}>{content}</p>
                    </div>
                );
            }
            return (
                <p key={index} className={className}>
                    {line}
                </p>
            );
        });
    };

    return (
        <CaseStudyLayout currentId={study.id}>
            <div className="relative w-full max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20 lg:grid lg:grid-cols-12 lg:gap-16">

                {/* Desktop Sidebar: Sticky TOC */}
                <aside className="hidden lg:block lg:col-span-3 sticky top-32 h-fit">
                    <div className="flex items-start gap-4">
                        {/* Progress Indicator Side Bar */}
                        <div className="w-[1px] h-48 bg-white/5 relative mt-4 overflow-hidden rounded-full">
                            <motion.div
                                className="absolute top-0 left-0 right-0 bg-teal-accent origin-top"
                                style={{ scaleY }}
                            />
                        </div>

                        <div className="space-y-1">
                            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest font-bold mb-4 block">On this page</span>
                            {sections.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollTo(section.id)}
                                    className={`group flex items-center gap-3 py-2 text-sm font-medium transition-all text-left ${activeSection === section.id ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                                        }`}
                                >
                                    <span className={`transition-all duration-500 ${activeSection === section.id ? 'pl-2 text-teal-accent border-l border-teal-accent' : 'border-l border-transparent'}`}>
                                        {section.label}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Mobile Floating Menu */}
                <div className="lg:hidden fixed bottom-8 right-8 z-[90]">
                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                                className="bg-dark-sec/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 mb-4 shadow-2xl min-w-[200px]"
                            >
                                <div className="flex flex-col gap-2">
                                    {sections.map((section) => (
                                        <button
                                            key={section.id}
                                            onClick={() => scrollTo(section.id)}
                                            className={`py-2 px-3 rounded-lg text-sm transition-all text-left ${activeSection === section.id ? 'bg-teal-accent text-dark-main font-bold' : 'text-gray-300'
                                                }`}
                                        >
                                            {section.label}
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="w-14 h-14 rounded-full bg-teal-accent text-dark-main shadow-lg flex items-center justify-center transition-transform active:scale-95"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Main Content Area */}
                <div className="lg:col-span-9 space-y-32">

                    {/* Hero Section */}
                    <motion.section
                        id="hero"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={sectionVariants}
                        className="space-y-12"
                    >
                        <motion.div variants={itemVariants} className="space-y-8">
                            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-teal-accent/[0.06] border border-teal-accent/10 shadow-lg shadow-teal-accent/5">
                                <span className="w-1.5 h-1.5 rounded-full bg-teal-accent shadow-[0_0_12px_rgba(0,173,181,0.6)]" />
                                <span className="text-xs font-mono font-bold text-teal-accent uppercase tracking-[0.15em]">{study.role}</span>
                            </div>
                            <h1 className="text-h2 md:text-[5.5rem] font-display font-medium leading-[0.85] tracking-[-0.02em] text-white">
                                {study.title}
                            </h1>
                            <p className="text-xl md:text-[1.65rem] text-gray-400 font-light max-w-3xl leading-[1.5]">
                                {study.oneLineSummary}
                            </p>
                        </motion.div>

                        {/* Project Meta */}
                        <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-16 py-16 border-y border-white/[0.04]">
                            <div className="space-y-4">
                                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em] font-bold block">Timeline</span>
                                <span className="text-sm font-medium text-white/90">{study.timeline}</span>
                            </div>
                            <div className="space-y-4">
                                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em] font-bold block">Tools</span>
                                <div className="flex flex-wrap gap-2">
                                    {study.tools.map(tool => (
                                        <span key={tool} className="text-[10px] text-gray-400 bg-white/[0.02] border border-white/[0.08] px-2.5 py-1 rounded-md tracking-tight hover:border-white/20 transition-colors">{tool}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="col-span-2 md:col-span-2 md:flex md:justify-end md:items-center">
                                <button onClick={() => scrollTo('final')} className="group flex items-center gap-3 px-10 py-5 rounded-full bg-white text-dark-main font-bold text-sm transition-all hover:scale-[1.03] active:scale-95 shadow-2xl">
                                    Explore Solution <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    </motion.section>

                    {/* Problem Section */}
                    <motion.section
                        id="problem"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={sectionVariants}
                        className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 scroll-mt-32"
                    >
                        <div className="md:col-span-4 lg:col-span-3">
                            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4 opacity-50">
                                <Target size={18} />
                                <h2 className="text-xs font-mono uppercase tracking-[0.2em] font-bold">The Problem</h2>
                            </motion.div>
                        </div>
                        <div className="md:col-span-8 lg:col-span-9 space-y-20">
                            <motion.div variants={itemVariants} className="p-10 md:p-16 rounded-[2.5rem] bg-white/[0.015] border border-white/[0.06] relative overflow-hidden group shadow-2xl shadow-black/20">
                                <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-teal-accent/40 via-teal-accent/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-1000" />
                                <div className="space-y-7">
                                    {renderTextWithBreaks(study.problem, "text-xl md:text-[1.75rem] font-display font-medium text-white leading-[1.4] tracking-[-0.01em]")}
                                </div>
                            </motion.div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
                                <motion.div variants={itemVariants} className="space-y-5">
                                    <h3 className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em] font-bold">Background</h3>
                                    <p className="text-gray-400 leading-[1.8] font-light text-[15px]">
                                        {study.context}
                                    </p>
                                </motion.div>
                                <motion.div variants={itemVariants} className="space-y-5">
                                    <h3 className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em] font-bold">Objectives</h3>
                                    <div className="space-y-3">
                                        {study.goals.map((goal, i) => (
                                            <div key={i} className="flex items-start gap-3 group">
                                                <div className="w-1.5 h-1.5 rounded-full bg-teal-accent/40 mt-2 flex-shrink-0 group-hover:bg-teal-accent group-hover:shadow-[0_0_8px_rgba(0,173,181,0.6)] transition-all" />
                                                <span className="text-gray-300 text-[15px] leading-[1.7]">{goal}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Approach Section */}
                    <motion.section
                        id="approach"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={sectionVariants}
                        className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 scroll-mt-32"
                    >
                        <div className="md:col-span-4 lg:col-span-3">
                            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4 opacity-50">
                                <Lightbulb size={18} />
                                <h2 className="text-xs font-mono uppercase tracking-[0.2em] font-bold">Approach</h2>
                            </motion.div>
                        </div>
                        <div className="md:col-span-8 lg:col-span-9 space-y-20">
                            <motion.div variants={itemVariants} className="space-y-7">
                                <div className="space-y-5">
                                    {renderTextWithBreaks(study.approach, "text-gray-400 leading-[1.8] text-[17px] font-light")}
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants} className="p-12 rounded-[2rem] bg-white/[0.015] border border-white/[0.05] shadow-xl shadow-black/10">
                                <div className="flex items-center gap-3 mb-9 opacity-50">
                                    <Users size={17} strokeWidth={1.5} />
                                    <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em]">User Scenario</h4>
                                </div>
                                <div className="space-y-5">
                                    {renderTextWithBreaks(study.usersScenario, "text-gray-400 leading-[1.8] font-light text-[15px]")}
                                </div>
                            </motion.div>
                        </div>
                    </motion.section>

                    {/* Solution Section */}
                    <motion.section
                        id="solution"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={sectionVariants}
                        className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 scroll-mt-32"
                    >
                        <div className="md:col-span-4 lg:col-span-3">
                            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4 opacity-50">
                                <Zap size={18} />
                                <h2 className="text-xs font-mono uppercase tracking-[0.2em] font-bold">The Solution</h2>
                            </motion.div>
                        </div>
                        <div className="md:col-span-8 lg:col-span-9 space-y-20">
                            <motion.div variants={itemVariants} className="p-10 md:p-16 rounded-[2.5rem] bg-teal-accent/[0.025] border border-teal-accent/[0.08] relative overflow-hidden group shadow-2xl shadow-teal-accent/5">
                                <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-teal-accent/50 via-teal-accent/30 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-1000" />
                                <div className="space-y-7">
                                    {renderTextWithBreaks(study.solution, "text-xl md:text-[1.75rem] font-display font-medium text-white leading-[1.4] tracking-[-0.01em]")}
                                </div>
                            </motion.div>

                            <div className="space-y-10">
                                <motion.h3 variants={itemVariants} className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em] font-bold">Core Modules</motion.h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    {study.keyDecisions.map((decision, i) => (
                                        <motion.div
                                            key={i}
                                            variants={itemVariants}
                                            className="flex items-start gap-4 p-7 rounded-[1.25rem] bg-white/[0.015] border border-white/[0.06] hover:border-teal-accent/20 hover:bg-white/[0.025] transition-all duration-500 group shadow-lg shadow-black/5"
                                        >
                                            <div className="w-1.5 h-1.5 rounded-full bg-teal-accent/40 mt-2 flex-shrink-0 group-hover:bg-teal-accent group-hover:shadow-[0_0_10px_rgba(0,173,181,0.6)] transition-all" />
                                            <span className="text-gray-300 text-[15px] leading-[1.7]">{decision}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.section>



                    {/* Final Product Section */}
                    <motion.section
                        id="final"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={sectionVariants}
                        className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 scroll-mt-32"
                    >
                        <div className="md:col-span-4 lg:col-span-3">
                            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4 opacity-50">
                                <Rocket size={18} />
                                <h2 className="text-xs font-mono uppercase tracking-[0.2em] font-bold">Exhibit</h2>
                            </motion.div>
                        </div>
                        <div className="md:col-span-8 lg:col-span-9 space-y-32">
                            {study.finalProduct.map((item, i) => (
                                <motion.div key={i} variants={itemVariants} className="space-y-10 group">
                                    <div className="aspect-[16/10] w-full rounded-[2.5rem] bg-white/[0.015] border border-white/[0.08] flex items-center justify-center relative overflow-hidden transition-all duration-1000 group-hover:border-teal-accent/30 shadow-2xl shadow-black/40">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-teal-accent/[0.08] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                                        <span className="text-gray-700 font-mono text-[10px] uppercase tracking-[0.3em] opacity-30 group-hover:opacity-50 transition-opacity relative z-10 font-bold">Exhibit Segment {i + 1}</span>
                                    </div>
                                    <div className="space-y-5 px-4 md:px-0">
                                        <h4 className="text-2xl md:text-3xl font-display font-medium text-white group-hover:text-teal-accent transition-colors duration-700 tracking-tight">{item.title}</h4>
                                        <p className="text-gray-400 leading-[1.8] font-light max-w-2xl text-[16px]">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Impact Section */}
                    <motion.section
                        id="impact"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={sectionVariants}
                        className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 scroll-mt-32 pb-40"
                    >
                        <div className="md:col-span-4 lg:col-span-3">
                            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4 opacity-50">
                                <Zap size={18} />
                                <h2 className="text-xs font-mono uppercase tracking-[0.2em] font-bold">Impact</h2>
                            </motion.div>
                        </div>
                        <div className="md:col-span-8 lg:col-span-9">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <motion.div variants={itemVariants} className="p-12 rounded-[2.5rem] bg-white/[0.015] border border-white/[0.08] flex flex-col justify-between min-h-[340px] hover:border-teal-accent/30 hover:bg-white/[0.025] transition-all duration-1000 group shadow-2xl shadow-black/20">
                                    <div className="space-y-8">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-[1px] bg-teal-accent/30" />
                                            <span className="text-[10px] font-mono text-teal-accent font-bold uppercase tracking-[0.3em]">User Experience</span>
                                        </div>
                                        <div className="space-y-7">
                                            {renderTextWithBreaks(study.impact.user, "text-xl md:text-[1.6rem] font-display font-medium text-white leading-[1.35] tracking-tight group-hover:translate-x-1 transition-transform duration-700")}
                                        </div>
                                    </div>
                                    <Circle className="text-teal-accent/10 group-hover:text-teal-accent/40 self-end transition-all duration-1000 group-hover:scale-110 group-hover:rotate-12" size={36} strokeWidth={1} />
                                </motion.div>
                                <motion.div variants={itemVariants} className="p-12 rounded-[2.5rem] bg-white/[0.015] border border-white/[0.08] flex flex-col justify-between min-h-[340px] hover:border-teal-accent/30 hover:bg-white/[0.025] transition-all duration-1000 group shadow-2xl shadow-black/20">
                                    <div className="space-y-8">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-[1px] bg-teal-accent/30" />
                                            <span className="text-[10px] font-mono text-teal-accent font-bold uppercase tracking-[0.3em]">Business Growth</span>
                                        </div>
                                        <div className="space-y-7">
                                            {renderTextWithBreaks(study.impact.business, "text-xl md:text-[1.6rem] font-display font-medium text-white leading-[1.35] tracking-tight group-hover:translate-x-1 transition-transform duration-700")}
                                        </div>
                                    </div>
                                    <Zap className="text-teal-accent/10 group-hover:text-teal-accent/40 self-end transition-all duration-1000 group-hover:scale-110 group-hover:-rotate-12" size={36} strokeWidth={1} />
                                </motion.div>
                            </div>

                            <div className="mt-48 space-y-16 border-t border-white/[0.06] pt-40">
                                <motion.div variants={itemVariants} className="space-y-12">
                                    <div className="space-y-5">
                                        <h3 className="text-3xl md:text-4xl font-display font-medium text-white tracking-tight">Retrospective</h3>
                                        <div className="h-[2px] w-14 bg-gradient-to-r from-teal-accent to-transparent" />
                                    </div>
                                    <div className="space-y-10">
                                        {renderTextWithBreaks(study.learnings, "text-gray-400 leading-[1.9] text-[17px] font-light max-w-3xl")}
                                    </div>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <Link
                                        to="/portfolio"
                                        className="group inline-flex items-center gap-4 text-sm font-bold text-white/50 hover:text-white transition-all uppercase tracking-widest"
                                    >
                                        Back to Works <ChevronRight className="group-hover:translate-x-2 transition-transform duration-500" size={16} />
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </motion.section>

                </div>
            </div>
        </CaseStudyLayout>
    );
};

export default CaseStudy;
