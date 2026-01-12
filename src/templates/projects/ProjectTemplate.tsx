import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProjectImages } from '../../utils/image-loader';
import BackButton from '../../components/ui/BackButton';
import { ProjectData, ImpactStat } from '../../data/project-content';

interface ProjectTemplateProps {
    project: ProjectData | undefined;
    layoutOverrides?: {
        textBalance?: boolean;
        tighterMeasure?: boolean;
        impactStyle?: 'default' | 'mckinsey';
    };
}

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

const StatBlock: React.FC<{ value: string; label: string; desc: string; delay: number }> = ({ value, label, desc, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: delay, ease: [0.25, 1, 0.5, 1] }}
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

const ProjectTemplate: React.FC<ProjectTemplateProps> = ({ project, layoutOverrides }) => {
    const [activeSection, setActiveSection] = useState('problem');
    const projectImages = project ? getProjectImages(project.id) : [];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [project?.id]);

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
    }, [project?.id]);

    if (!project) {
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
                const widthClass = layoutOverrides?.tighterMeasure ? 'max-w-xl' : 'max-w-2xl';
                return (
                    <div key={idx} className={`flex gap-4 items-start pl-2 ${widthClass}`}>
                        <div className="w-1 h-1 rounded-full bg-neutral-400 mt-2.5 shrink-0" />
                        <p className="text-neutral-400 leading-relaxed text-[15px]">{paragraph.replace(/^[•-]\s*/, '')}</p>
                    </div>
                );
            }
            // Normal Paragraph
            const widthClass = layoutOverrides?.tighterMeasure ? 'max-w-xl' : 'max-w-2xl';
            const balanceClass = layoutOverrides?.textBalance ? 'text-balance' : '';
            return (
                <p key={idx} className={`text-neutral-400 leading-relaxed text-[16px] mb-4 last:mb-0 ${widthClass} ${balanceClass}`}>
                    {paragraph}
                </p>
            );
        });
    };

    return (
        <div className="w-full flex flex-col items-start pt-0 pb-32">

            {/* HEADER: Back Link & Title */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full mb-16 lg:mb-24"
            >
                <div className="mb-16 md:mb-24">
                    <BackButton />
                </div>

                <div className="flex flex-col gap-6">
                    <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] w-fit">
                        <span className="w-1.5 h-1.5 rounded-full bg-white" />
                        <span className="text-[10px] font-mono font-medium text-neutral-300 uppercase tracking-widest">{project.role}</span>
                    </div>
                    <h1 className={`text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.1] ${layoutOverrides?.textBalance ? 'text-balance' : ''}`}>
                        {project.title}
                    </h1>
                    <p className={`text-lg md:text-xl text-neutral-500 font-normal max-w-2xl leading-relaxed ${layoutOverrides?.textBalance ? 'text-balance' : ''}`}>
                        {project.oneLineSummary}
                    </p>
                </div>
            </motion.div>

            {/* MAIN CONTENT GRID */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                {/* LEFT SIDEBAR COLUMN */}
                <div className="lg:col-span-3 lg:col-start-1 hidden lg:block pt-12 pb-24 relative">
                    <div className="flex flex-col gap-12 h-full">
                        {/* Meta Info */}
                        <div className="space-y-10">
                            <div className="space-y-3">
                                <h3 className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">Timeline</h3>
                                <p className="text-neutral-300 text-sm font-medium">{project.timeline}</p>
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">Tools</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tools.map(tool => (
                                        <span key={tool} className="text-[11px] text-neutral-500 bg-white/[0.02] border border-white/[0.05] px-2 py-1 rounded text-nowrap">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* TOC Navigation */}
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
                    {project.problem && (
                        <motion.section id="problem" variants={itemVariants} className="space-y-8 scroll-mt-32">
                            <span className="text-xs font-mono text-neutral-600 uppercase tracking-widest block">01 — The Problem</span>
                            <div className="space-y-6">
                                {renderText(project.problem)}
                            </div>

                            {/* Context & Goals */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/[0.05]">
                                <div className="space-y-3">
                                    <h4 className="text-[11px] font-medium text-white mb-2">Context</h4>
                                    <p className="text-neutral-500 text-sm leading-relaxed">{project.context}</p>
                                </div>
                                <div className="space-y-3">
                                    <h4 className="text-[11px] font-medium text-white mb-2">Objectives</h4>
                                    <ul className="space-y-2">
                                        {project.goals.map((g, i) => (
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
                    {project.approach && (
                        <motion.section id="approach" variants={itemVariants} className="space-y-8 scroll-mt-32">
                            <span className="text-xs font-mono text-neutral-600 uppercase tracking-widest block">02 — Approach</span>
                            <div className="space-y-6">
                                {renderText(project.approach)}
                            </div>

                            <div className="p-8 bg-white/[0.02] border border-white/[0.05] rounded-lg">
                                <h4 className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest mb-4">User Scenario</h4>
                                <p className="text-neutral-300 leading-relaxed text-[15px]">{project.usersScenario}</p>
                            </div>
                        </motion.section>
                    )}

                    {/* 3. Solution */}
                    {project.solution && (
                        <motion.section id="solution" variants={itemVariants} className="space-y-8 scroll-mt-32">
                            <span className="text-xs font-mono text-neutral-600 uppercase tracking-widest block">03 — Solution</span>
                            <div className="space-y-6">
                                {renderText(project.solution)}
                            </div>

                            <div className="grid grid-cols-1 gap-4 pt-4">
                                {project.keyDecisions.map((decision, i) => {
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
                    {/* 4. Output (was Final) */}
                    {(project.finalProduct.length > 0 || projectImages.length > 0) && (
                        <motion.section id="output" variants={itemVariants} className="space-y-12 scroll-mt-32">
                            <span className="text-xs font-mono text-neutral-600 uppercase tracking-widest block">04 — Output</span>

                            {/* ADCLUSIVE SPECIAL LAYOUT */}
                            {project.id === 'adclusive' ? (
                                <div className="space-y-16">
                                    {/* Keep "Platform" Description */}
                                    {project.finalProduct.map((item, i) => (
                                        <div key={i} className="p-6 bg-white/[0.02] border border-white/[0.05] rounded-lg">
                                            <h4 className="text-lg text-white font-medium mb-2">{item.title}</h4>
                                            <p className="text-neutral-500 text-sm leading-relaxed">{item.description}</p>
                                        </div>
                                    ))}

                                    {/* Group 1: Wireframes (Top, 2 Columns) */}
                                    <div className="space-y-8">
                                        <h4 className="text-sm font-mono text-neutral-500 uppercase tracking-widest">Wireframes</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {projectImages.filter(img => img.name.includes('wireframe')).map((img, i) => (
                                                <div key={i} className="w-full bg-[#111] border border-white/[0.08] rounded-lg overflow-hidden">
                                                    <img
                                                        src={img.src}
                                                        alt={`Adclusive wireframe ${i + 1}`}
                                                        className="w-full h-auto object-cover grayscale-0 transition-none"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Group 2: End Product (Bottom, 1 Column) */}
                                    <div className="space-y-8">
                                        <h4 className="text-sm font-mono text-neutral-500 uppercase tracking-widest">End Product</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            {projectImages.filter(img => !img.name.includes('wireframe')).map((img, i) => (
                                                <div key={i} className="w-full bg-[#111] border border-white/[0.08] rounded-lg overflow-hidden">
                                                    <img
                                                        src={img.src}
                                                        alt={`Adclusive end product ${i + 1}`}
                                                        className="w-full h-auto object-cover grayscale-0 transition-none"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                /* STANDARD LAYOUT (Dog & Ride, Bunect) */
                                <div className="space-y-16">
                                    {project.finalProduct
                                        .filter(item =>
                                            !item.title.toLowerCase().includes('social') &&
                                            !item.title.toLowerCase().includes('brand')
                                        )
                                        .map((item, i) => {
                                            const titleLower = item.title.toLowerCase();

                                            // Determine which images belong to this bucket
                                            let bucketImages: { src: string; name: string }[] = [];

                                            if (titleLower.includes('website')) {
                                                bucketImages = projectImages.filter(img =>
                                                    !img.name.includes('presentation')
                                                );
                                            } else if (titleLower.includes('deck') || titleLower.includes('presentation')) {
                                                bucketImages = projectImages.filter(img =>
                                                    img.name.includes('presentation')
                                                );
                                            }

                                            return (
                                                <div key={i} className="space-y-8">
                                                    {/* Description Block */}
                                                    <div className="p-6 bg-white/[0.02] border border-white/[0.05] rounded-lg">
                                                        <h4 className="text-lg text-white font-medium mb-2">{item.title}</h4>
                                                        <p className="text-neutral-500 text-sm leading-relaxed">{item.description}</p>
                                                    </div>

                                                    {/* Helper Grid for this bucket */}
                                                    {bucketImages.length > 0 && (
                                                        <div className="grid grid-cols-1 gap-8">
                                                            {bucketImages.map((img, j) => (
                                                                <div key={j} className="w-full bg-[#111] border border-white/[0.08] rounded-lg overflow-hidden">
                                                                    <img
                                                                        src={img.src}
                                                                        alt={`${item.title} ${j + 1}`}
                                                                        className="w-full h-auto object-cover grayscale-0 transition-none"
                                                                        loading="lazy"
                                                                    />
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                </div>
                            )}
                        </motion.section>
                    )}

                    {/* 5. Impact */}
                    {(project.impact.user || project.impact.business) && (
                        <motion.section id="impact" variants={itemVariants} className="space-y-8 scroll-mt-32">
                            <span className="text-xs font-mono text-neutral-600 uppercase tracking-widest block">05 — Impact</span>

                            {layoutOverrides?.impactStyle === 'mckinsey' && Array.isArray(project.impact.user) && Array.isArray(project.impact.business) ? (
                                /* MCKINSEY STYLE GRID */
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-r border-b border-white/[0.08]">
                                    {[...project.impact.user, ...project.impact.business].map((stat, i) => (
                                        <StatBlock
                                            key={i}
                                            value={stat.number}
                                            label={stat.title}
                                            desc={stat.description}
                                            delay={i * 0.05}
                                        />
                                    ))}
                                </div>
                            ) : (
                                /* DEFAULT SPLIT GRID */
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="p-8 border border-white/[0.08] rounded-lg hover:bg-white/[0.02] transition-colors">
                                        <h4 className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest mb-6">User</h4>
                                        {Array.isArray(project.impact.user) ? (
                                            <div className="flex flex-col gap-10">
                                                {project.impact.user.map((stat, i) => (
                                                    <div key={i} className="flex flex-col gap-3">
                                                        <span className="text-5xl font-light text-white tracking-tight">{stat.number}</span>
                                                        <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">{stat.title}</span>
                                                        <p className="text-neutral-400 text-sm leading-relaxed">{stat.description}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            renderText(project.impact.user)
                                        )}
                                    </div>
                                    <div className="p-8 border border-white/[0.08] rounded-lg hover:bg-white/[0.02] transition-colors">
                                        <h4 className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest mb-6">Business</h4>
                                        {Array.isArray(project.impact.business) ? (
                                            <div className="flex flex-col gap-10">
                                                {project.impact.business.map((stat, i) => (
                                                    <div key={i} className="flex flex-col gap-3">
                                                        <span className="text-5xl font-light text-white tracking-tight">{stat.number}</span>
                                                        <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">{stat.title}</span>
                                                        <p className="text-neutral-400 text-sm leading-relaxed">{stat.description}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            renderText(project.impact.business)
                                        )}
                                    </div>
                                </div>
                            )}

                            <div className="pt-24 mt-24 border-t border-white/[0.05]">
                                <h3 className="text-2xl font-medium text-white mb-8">Retrospective</h3>
                                <div className="text-neutral-500 leading-relaxed text-lg font-light max-w-2xl">
                                    {renderText(project.learnings)}
                                </div>
                            </div>
                        </motion.section>
                    )}

                </motion.div>
            </div>
        </div>
    );
};

export default ProjectTemplate;
