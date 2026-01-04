import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Menu, X, ArrowRight, CheckCircle2, Target, Users, Lightbulb, Zap, Rocket, ChevronRight, Circle, PenTool, Layout, Image as ImageIcon, FileText, Sparkles, Cpu, Code, Presentation, Palette, Monitor } from 'lucide-react';
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
        stiffness: 300,
        damping: 30,
        mass: 1
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
        { id: 'final', label: 'Final Product' },
        { id: 'impact', label: 'Impact' },
    ];

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 120;
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
                        <div className="w-1.5 h-1.5 rounded-full bg-text-muted mt-2.5 flex-shrink-0 group-hover:bg-white transition-colors duration-500" />
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
                                className="absolute top-0 left-0 right-0 bg-white origin-top"
                                style={{ scaleY }}
                            />
                        </div>

                        <div className="space-y-1">
                            <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest font-medium mb-4 block">On this page</span>
                            {sections.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollTo(section.id)}
                                    className={`group flex items-center gap-3 py-2 text-sm font-medium transition-all text-left ${activeSection === section.id ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                                        }`}
                                >
                                    <span className={`transition-all duration-500 ${activeSection === section.id ? 'pl-2 text-white border-l border-white' : 'border-l border-transparent'}`}>
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
                                            className={`py-2 px-3 rounded-md text-sm transition-all text-left ${activeSection === section.id ? 'bg-white text-void font-medium' : 'text-text-muted'
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
                        className="w-14 h-14 rounded-full bg-white text-void shadow-lg flex items-center justify-center transition-transform active:scale-95"
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
                            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-md bg-surface/50 border border-white/10 shadow-lg">
                                <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.6)]" />
                                <span className="text-xs font-mono font-medium text-white uppercase tracking-[0.15em]">{study.role}</span>
                            </div>
                            <h1 className="text-h2 md:text-[5.5rem] font-medium leading-[0.85] tracking-[-0.02em] text-text-primary">
                                {study.title}
                            </h1>
                            <p className="text-xl md:text-[1.65rem] text-text-muted font-normal max-w-3xl leading-[1.5]">
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
                                <div className="grid grid-cols-2 gap-2">
                                    {study.tools.map(tool => {
                                        let Icon = Zap;
                                        if (tool.includes("Figma")) Icon = PenTool;
                                        else if (tool.includes("Framer")) Icon = Layout;
                                        else if (tool.includes("Adobe")) Icon = ImageIcon;
                                        else if (tool.includes("Notion")) Icon = FileText;
                                        else if (tool.includes("Gemini") || tool.includes("AI")) Icon = Sparkles;
                                        else if (tool.includes("PowerPoint")) Icon = Presentation;
                                        else if (tool.includes("VSCode") || tool.includes("Angular")) Icon = Code;
                                        else if (tool.includes("Canva")) Icon = Palette;

                                        return (
                                            <span key={tool} className="text-[11px] text-text-muted bg-white/[0.03] border border-white/[0.08] px-3 py-2 rounded-md tracking-tight hover:border-white/30 hover:bg-white/5 transition-all flex items-center gap-2">
                                                <Icon size={12} className="text-white/70" />
                                                {tool}
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="col-span-2 md:col-span-2 md:flex md:justify-end md:items-center">
                                <button onClick={() => scrollTo('final')} className="group flex items-center gap-3 px-10 py-5 rounded-md bg-text-primary text-text-inverse font-medium text-sm transition-all hover:scale-[0.98] active:scale-95 shadow-2xl">
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
                            <motion.div variants={itemVariants} className="p-10 md:p-16 rounded-md bg-surface/20 border border-white/[0.06] relative overflow-hidden group shadow-2xl shadow-black/20">
                                <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-white/40 via-white/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-1000" />
                                <div className="space-y-7">
                                    {renderTextWithBreaks(study.problem, "text-xl md:text-[1.75rem] font-medium text-text-primary leading-[1.4] tracking-[-0.01em]")}
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
                                                <div className="w-1.5 h-1.5 rounded-full bg-text-muted mt-2 flex-shrink-0 group-hover:bg-white group-hover:shadow-[0_0_8px_rgba(255,255,255,0.6)] transition-all" />
                                                <span className="text-text-muted text-[15px] leading-[1.7]">{goal}</span>
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

                            <motion.div variants={itemVariants} className="p-12 rounded-md bg-surface/20 border border-white/[0.05] shadow-xl shadow-black/10">
                                <div className="flex items-center gap-3 mb-9 opacity-50">
                                    <Users size={17} strokeWidth={1.5} />
                                    <h4 className="text-[10px] font-mono font-medium uppercase tracking-[0.2em]">User Scenario</h4>
                                </div>
                                <div className="space-y-5">
                                    {renderTextWithBreaks(study.usersScenario, "text-text-muted leading-[1.8] font-normal text-[15px]")}
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
                            <motion.div variants={itemVariants} className="p-10 md:p-16 rounded-md bg-surface/20 border border-white/[0.08] relative overflow-hidden group shadow-2xl">
                                <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-white/50 via-white/30 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-1000" />
                                <div className="space-y-7">
                                    {renderTextWithBreaks(study.solution, "text-xl md:text-[1.75rem] font-medium text-text-primary leading-[1.4] tracking-[-0.01em]")}
                                </div>
                            </motion.div>

                            <div className="space-y-10">
                                <motion.h3 variants={itemVariants} className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em] font-bold">Core Modules</motion.h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    {study.keyDecisions.map((decision, i) => {
                                        const [title, ...bodyParts] = decision.split('—');
                                        const body = bodyParts.join('—').trim();
                                        const displayTitle = title.trim();

                                        return (
                                            <motion.div
                                                key={i}
                                                variants={itemVariants}
                                                className="flex flex-col gap-3 p-7 rounded-md bg-surface/20 border border-white/[0.06] hover:border-white/20 hover:bg-white/[0.025] transition-all duration-500 group shadow-lg shadow-black/5"
                                            >
                                                <div className="flex items-center gap-2 mb-1">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-text-muted group-hover:bg-white group-hover:shadow-[0_0_8px_rgba(255,255,255,0.6)] transition-all" />
                                                    <span className="text-sm font-medium text-text-primary">{displayTitle}</span>
                                                </div>
                                                <span className="text-text-muted text-[14px] leading-[1.6]">{body || decision}</span>
                                            </motion.div>
                                        );
                                    })}
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
                            {study.finalProduct.filter(item => !item.title.toLowerCase().includes('brand')).map((item, i) => (
                                <motion.div key={i} variants={itemVariants} className="space-y-10 group">
                                    <div className="aspect-[16/10] w-full rounded-md bg-surface/20 border border-white/[0.08] flex items-center justify-center relative overflow-hidden transition-all duration-1000 group-hover:border-white/30 shadow-2xl shadow-black/40">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.08] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                                        <span className="text-text-muted font-mono text-[10px] uppercase tracking-[0.3em] opacity-30 group-hover:opacity-50 transition-opacity relative z-10 font-bold transform group-hover:scale-110 transition-transform duration-1000">Exhibit Segment {i + 1}</span>
                                    </div>
                                    <div className="space-y-5 px-4 md:px-0">
                                        <h4 className="text-2xl md:text-3xl font-medium text-text-primary group-hover:text-white transition-colors duration-700 tracking-tight">{item.title}</h4>
                                        <p className="text-text-muted leading-[1.8] font-normal max-w-2xl text-[16px]">
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
                                <motion.div variants={itemVariants} className="p-12 rounded-md bg-surface/20 border border-white/[0.08] flex flex-col justify-between min-h-[340px] hover:border-white/30 hover:bg-white/[0.025] transition-all duration-1000 group shadow-2xl shadow-black/20">
                                    <div className="space-y-8">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-[1px] bg-white/30" />
                                            <span className="text-[10px] font-mono text-white font-medium uppercase tracking-[0.3em]">User Experience</span>
                                        </div>
                                        <div className="space-y-7">
                                            {renderTextWithBreaks(study.impact.user, "text-xl md:text-[1.6rem] font-medium text-text-primary leading-[1.35] tracking-tight group-hover:translate-x-1 transition-transform duration-700")}
                                        </div>
                                    </div>
                                    <Circle className="text-white/10 group-hover:text-white/40 self-end transition-all duration-1000 group-hover:scale-110 group-hover:rotate-12" size={36} strokeWidth={1} />
                                </motion.div>
                                <motion.div variants={itemVariants} className="p-12 rounded-md bg-surface/20 border border-white/[0.08] flex flex-col justify-between min-h-[340px] hover:border-white/30 hover:bg-white/[0.025] transition-all duration-1000 group shadow-2xl shadow-black/20">
                                    <div className="space-y-8">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-[1px] bg-white/30" />
                                            <span className="text-[10px] font-mono text-white font-medium uppercase tracking-[0.3em]">Business Growth</span>
                                        </div>
                                        <div className="space-y-7">
                                            {renderTextWithBreaks(study.impact.business, "text-xl md:text-[1.6rem] font-medium text-text-primary leading-[1.35] tracking-tight group-hover:translate-x-1 transition-transform duration-700")}
                                        </div>
                                    </div>
                                    <Zap className="text-white/10 group-hover:text-white/40 self-end transition-all duration-1000 group-hover:scale-110 group-hover:-rotate-12" size={36} strokeWidth={1} />
                                </motion.div>
                            </div>

                            <div className="mt-48 space-y-16 border-t border-white/[0.06] pt-40">
                                <motion.div variants={itemVariants} className="space-y-12">
                                    <div className="space-y-5">
                                        <h3 className="text-3xl md:text-4xl font-medium text-text-primary tracking-tight">Retrospective</h3>
                                        <div className="h-[2px] w-14 bg-gradient-to-r from-white to-transparent" />
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
