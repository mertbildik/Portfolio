import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, CheckCircle2, Target, Users, Lightbulb, Zap, Rocket, ChevronRight } from 'lucide-react';
import { caseStudies, CaseStudyData } from '../data/case-studies.tsx';
import CaseStudyLayout from '../components/CaseStudyLayout';

const CaseStudy: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const study = caseStudies.find(cs => cs.id === id);
    const [activeSection, setActiveSection] = useState('hero');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            { threshold: 0.3, rootMargin: "-20% 0% -50% 0%" }
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
        { id: 'iterations', label: 'Iterations' },
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

    return (
        <CaseStudyLayout currentId={study.id}>
            <div className="relative w-full max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20 lg:grid lg:grid-cols-12 lg:gap-16">

                {/* Desktop Sidebar: Sticky TOC */}
                <aside className="hidden lg:block lg:col-span-3 sticky top-32 h-fit">
                    <div className="flex flex-col gap-6">
                        <div className="space-y-1">
                            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest font-bold mb-4 block">On this page</span>
                            {sections.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollTo(section.id)}
                                    className={`group flex items-center gap-3 py-2 text-sm font-medium transition-all text-left ${activeSection === section.id ? 'text-teal-accent' : 'text-gray-500 hover:text-gray-300'
                                        }`}
                                >
                                    <div className={`h-px transition-all duration-300 ${activeSection === section.id ? 'w-6 bg-teal-accent' : 'w-3 bg-white/10 group-hover:bg-white/30'
                                        }`} />
                                    {section.label}
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
                    <section id="hero" className="space-y-12">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-teal-accent/10 border border-teal-accent/20">
                                <span className="w-2 h-2 rounded-full bg-teal-accent animate-pulse" />
                                <span className="text-xs font-mono font-bold text-teal-accent uppercase tracking-wider">{study.role}</span>
                            </div>
                            <h1 className="text-h2 md:text-[5rem] font-display font-bold leading-[0.9] tracking-tighter text-white">
                                {study.title}
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl leading-relaxed">
                                {study.oneLineSummary}
                            </p>
                        </div>

                        {/* Project Meta */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-white/5">
                            <div>
                                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest font-bold block mb-2">Timeline</span>
                                <span className="text-sm font-medium text-white">{study.timeline}</span>
                            </div>
                            <div>
                                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest font-bold block mb-2">Tools</span>
                                <div className="flex flex-wrap gap-2 pt-1">
                                    {study.tools.map(tool => (
                                        <span key={tool} className="text-[10px] text-gray-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">{tool}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="col-span-2 md:col-span-2 md:flex md:justify-end md:items-center">
                                <button onClick={() => scrollTo('final')} className="flex items-center gap-3 px-8 py-4 rounded-full bg-white text-dark-main font-bold text-sm transition-all hover:scale-105 shadow-xl">
                                    View Final <Rocket size={18} />
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* Problem Section - HIGHLIGHTED */}
                    <section id="problem" className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 scroll-mt-32">
                        <div className="md:col-span-4 lg:col-span-3">
                            <div className="flex items-center gap-3 mb-4">
                                <Target className="text-teal-accent" size={24} />
                                <h2 className="text-xs font-mono text-gray-400 uppercase tracking-widest font-bold">The Problem</h2>
                            </div>
                        </div>
                        <div className="md:col-span-8 lg:col-span-9">
                            <div className="p-8 md:p-12 rounded-[2rem] bg-dark-sec/30 border border-white/5 border-l-teal-accent border-l-4">
                                <p className="text-h5 md:text-h4 font-medium text-white leading-tight">
                                    {study.problem}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
                                <div>
                                    <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-6 block">Context + Constraints</h3>
                                    <p className="text-gray-400 leading-relaxed font-light">
                                        {study.context}
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-6 block">Goals</h3>
                                    <ul className="space-y-4">
                                        {study.goals.map((goal, i) => (
                                            <li key={i} className="flex items-start gap-4">
                                                <div className="w-1.5 h-1.5 rounded-full bg-teal-accent mt-2 flex-shrink-0" />
                                                <span className="text-gray-300 leading-snug">{goal}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Approach Section */}
                    <section id="approach" className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 scroll-mt-32">
                        <div className="md:col-span-4 lg:col-span-3">
                            <div className="flex items-center gap-3 mb-4">
                                <Lightbulb className="text-teal-accent" size={24} />
                                <h2 className="text-xs font-mono text-gray-400 uppercase tracking-widest font-bold">My Approach</h2>
                            </div>
                        </div>
                        <div className="md:col-span-8 lg:col-span-9 space-y-12">
                            <div className="space-y-6">
                                <h3 className="text-3xl font-display font-medium text-white">Soft Skills & Hard Data</h3>
                                <p className="text-gray-400 leading-relaxed text-lg font-light">
                                    {study.approach}
                                </p>
                            </div>

                            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5">
                                <div className="flex items-center gap-4 mb-6">
                                    <Users className="text-gray-500" size={20} />
                                    <h4 className="text-sm font-medium text-gray-300 uppercase tracking-wide">User Scenario</h4>
                                </div>
                                <p className="text-gray-400 leading-relaxed font-light">
                                    {study.usersScenario}
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Solution Section - HIGHLIGHTED */}
                    <section id="solution" className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 scroll-mt-32">
                        <div className="md:col-span-4 lg:col-span-3">
                            <div className="flex items-center gap-3 mb-4">
                                <Zap className="text-teal-accent" size={24} />
                                <h2 className="text-xs font-mono text-gray-400 uppercase tracking-widest font-bold">The Solution</h2>
                            </div>
                        </div>
                        <div className="md:col-span-8 lg:col-span-9 space-y-12">
                            <div className="p-8 md:p-12 rounded-[2rem] bg-teal-accent/5 border border-white/5 border-l-teal-accent border-l-4">
                                <p className="text-h5 md:text-h4 font-medium text-white leading-tight">
                                    {study.solution}
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest block">Key Decisions</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {study.keyDecisions.map((decision, i) => (
                                        <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.03] border border-white/5">
                                            <CheckCircle2 className="text-teal-accent mt-0.5 flex-shrink-0" size={18} />
                                            <span className="text-gray-300 text-sm leading-relaxed">{decision}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Iterations Section */}
                    <section id="iterations" className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 scroll-mt-32">
                        <div className="md:col-span-4 lg:col-span-3">
                            <h2 className="text-xs font-mono text-gray-400 uppercase tracking-widest font-bold">Iterations</h2>
                        </div>
                        <div className="md:col-span-8 lg:col-span-9 space-y-16">
                            {study.iterations.map((item, i) => (
                                <div key={i} className="space-y-6">
                                    <div className="aspect-video w-full rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group overflow-hidden">
                                        <span className="text-gray-700 font-mono text-xs uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">Illustration Placeholder</span>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-lg font-medium text-white">{item.title}</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed font-light">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Final Product Section */}
                    <section id="final" className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 scroll-mt-32">
                        <div className="md:col-span-4 lg:col-span-3">
                            <h2 className="text-xs font-mono text-gray-400 uppercase tracking-widest font-bold">Final Product</h2>
                        </div>
                        <div className="md:col-span-8 lg:col-span-9 space-y-24">
                            {study.finalProduct.map((item, i) => (
                                <div key={i} className="space-y-8">
                                    <div className="aspect-video w-full rounded-[2.5rem] bg-white/5 border border-white/10 flex items-center justify-center shadow-2xl overflow-hidden relative group">
                                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-dark-main/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <span className="text-gray-700 font-mono text-xs uppercase tracking-tighter">UI Placeholder</span>
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="text-2xl font-display font-medium text-white">{item.title}</h4>
                                        <p className="text-gray-400 leading-relaxed font-light max-w-2xl">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Impact Section - HIGHLIGHTED */}
                    <section id="impact" className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 scroll-mt-32 pb-16">
                        <div className="md:col-span-4 lg:col-span-3">
                            <h2 className="text-xs font-mono text-gray-400 uppercase tracking-widest font-bold">Impact</h2>
                        </div>
                        <div className="md:col-span-8 lg:col-span-9">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="p-8 md:p-10 rounded-3xl bg-white/[0.03] border border-white/5 flex flex-col justify-between min-h-[250px] group hover:border-teal-accent/20 transition-all">
                                    <div className="space-y-4">
                                        <span className="text-[10px] font-mono text-teal-accent uppercase tracking-widest font-bold block">User Outcomes</span>
                                        <p className="text-xl md:text-2xl font-display font-medium text-white leading-tight">
                                            {study.impact.user}
                                        </p>
                                    </div>
                                    <CheckCircle2 className="text-teal-accent self-end opacity-20 group-hover:opacity-100 transition-opacity" size={32} />
                                </div>
                                <div className="p-8 md:p-10 rounded-3xl bg-white/[0.03] border border-white/5 flex flex-col justify-between min-h-[250px] group hover:border-teal-accent/20 transition-all">
                                    <div className="space-y-4">
                                        <span className="text-[10px] font-mono text-teal-accent uppercase tracking-widest font-bold block">Business Outcomes</span>
                                        <p className="text-xl md:text-2xl font-display font-medium text-white leading-tight">
                                            {study.impact.business}
                                        </p>
                                    </div>
                                    <Zap className="text-teal-accent self-end opacity-20 group-hover:opacity-100 transition-opacity" size={32} />
                                </div>
                            </div>

                            <div className="mt-24 space-y-12 border-t border-white/5 pt-24">
                                <div className="space-y-6">
                                    <h3 className="text-3xl font-display font-medium text-white">Learnings & Next Steps</h3>
                                    <p className="text-gray-400 leading-relaxed text-lg font-light max-w-3xl">
                                        {study.learnings}
                                    </p>
                                </div>

                                <Link
                                    to="/portfolio"
                                    className="group inline-flex items-center gap-3 text-lg font-medium text-white hover:text-teal-accent transition-colors"
                                >
                                    Back to Portfolio <ChevronRight className="group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </CaseStudyLayout>
    );
};

export default CaseStudy;
