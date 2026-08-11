import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { getProjectImages } from '../../content/images';
import BackButton from '../../components/BackButton';
import { EASE, listVariants, itemVariants } from '../../components/motion';
import { ImpactStat, OutputBlock, Project } from '../../content/projects';

const SECTIONS = [
    { id: 'problem', label: 'Problem' },
    { id: 'approach', label: 'Approach' },
    { id: 'solution', label: 'Solution' },
    { id: 'output', label: 'Output' },
    { id: 'impact', label: 'Impact' },
];

const Stats: React.FC<{ stats: ImpactStat[] }> = ({ stats }) => (
    <div className="flex flex-col gap-10">
        {stats.map((stat) => (
            <div key={stat.title} className="flex flex-col gap-3">
                <span className="text-display-md text-white">{stat.number}</span>
                <span className="text-eyebrow font-mono text-neutral-500 uppercase">{stat.title}</span>
                <p className="text-neutral-400 text-body-sm">{stat.description}</p>
            </div>
        ))}
    </div>
);

const ProjectTemplate: React.FC<{ project: Project }> = ({ project }) => {
    const study = project.caseStudy!;
    const [activeSection, setActiveSection] = useState(SECTIONS[0].id);
    const clickLockRef = useRef<number | null>(null);
    const images = getProjectImages(project.id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [project.id]);

    // Picks the topmost section whose top has crossed a line ~30% from the
    // viewport top. Avoids the multi-intersection ambiguity of IntersectionObserver.
    useEffect(() => {
        const update = () => {
            if (clickLockRef.current !== null) return;
            const threshold = window.innerHeight * 0.3;
            let current = SECTIONS[0].id;
            for (const section of SECTIONS) {
                const el = document.getElementById(section.id);
                if (el && el.getBoundingClientRect().top - threshold <= 0) current = section.id;
            }
            setActiveSection(current);
        };
        update();
        document.addEventListener('scroll', update, { passive: true, capture: true });
        window.addEventListener('resize', update);
        return () => {
            document.removeEventListener('scroll', update, { capture: true } as EventListenerOptions);
            window.removeEventListener('resize', update);
            if (clickLockRef.current !== null) window.clearTimeout(clickLockRef.current);
        };
    }, [project.id]);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (!element) return;
        setActiveSection(id);
        if (clickLockRef.current !== null) window.clearTimeout(clickLockRef.current);
        clickLockRef.current = window.setTimeout(() => {
            clickLockRef.current = null;
        }, 800);
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const renderText = (text: string) =>
        text
            .split('\n')
            .filter((p) => p.trim())
            .map((paragraph, idx) => {
                if (paragraph.trim().startsWith('•') || paragraph.trim().startsWith('-')) {
                    return (
                        <div key={idx} className="flex gap-4 items-start pl-2 max-w-2xl">
                            <div className="w-1 h-1 rounded-full bg-neutral-400 mt-2.5 shrink-0" />
                            <p className="text-neutral-400 text-body">{paragraph.replace(/^[•-]\s*/, '')}</p>
                        </div>
                    );
                }
                return (
                    <p key={idx} className="text-neutral-400 text-body mb-4 last:mb-0 max-w-2xl text-balance">
                        {paragraph}
                    </p>
                );
            });

    const renderOutput = (block: OutputBlock) => {
        const blockImages = (block.images ?? [])
            .map((name) => images.find((img) => img.name === name))
            .filter((img): img is NonNullable<typeof img> => Boolean(img));

        return (
            <div key={block.title} className="space-y-8">
                <div className="p-6 bg-white/[0.02] border border-white/[0.05] rounded-lg">
                    <h4 className="text-card-title text-white mb-2">{block.title}</h4>
                    <p className="text-neutral-500 text-body-sm">{block.description}</p>
                </div>

                {blockImages.length > 0 && (
                    <div className={`grid gap-8 ${block.columns === 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
                        {blockImages.map((img) => (
                            <div
                                key={img.name}
                                className="w-full bg-[#111111] border border-white/[0.08] overflow-hidden"
                            >
                                <img
                                    src={img.src}
                                    alt={`${project.title} ${block.title}`}
                                    className="w-full h-auto object-cover"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="w-full flex flex-col items-start pb-32">
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE }}
                className="w-full mb-16 lg:mb-24"
            >
                <div className="mb-16 md:mb-24">
                    <BackButton />
                </div>

                <div className="flex flex-col gap-6">
                    <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] w-fit">
                        <span className="w-1.5 h-1.5 rounded-full bg-white" />
                        <span className="text-caption font-mono text-neutral-300 uppercase">{project.role}</span>
                    </div>
                    <h1 className="text-display-xl text-white text-balance">{project.title}</h1>
                    <p className="text-body-lg text-neutral-500 max-w-2xl text-balance">{study.oneLineSummary}</p>
                </div>
            </motion.div>

            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                <div className="lg:col-span-3 lg:col-start-1 hidden lg:block pt-12 pb-24 relative">
                    <div className="flex flex-col gap-12 h-full">
                        <div className="space-y-10">
                            <div className="space-y-3">
                                <h3 className="text-eyebrow font-mono text-neutral-600 uppercase">Timeline</h3>
                                <p className="text-neutral-300 text-caption">{study.timeline}</p>
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-eyebrow font-mono text-neutral-600 uppercase">Tools</h3>
                                <div className="flex flex-wrap gap-2">
                                    {study.tools.map((tool) => (
                                        <span
                                            key={tool}
                                            className="text-caption text-neutral-500 bg-white/[0.02] border border-white/[0.05] px-2 py-1 rounded text-nowrap"
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <nav className="space-y-2 sticky top-32">
                            <span className="text-eyebrow font-mono text-neutral-600 uppercase mb-4 block">Contents</span>
                            <div className="flex flex-col border-l border-white/[0.08]">
                                {SECTIONS.map((section) => (
                                    <button
                                        key={section.id}
                                        onClick={() => scrollTo(section.id)}
                                        className={`text-left px-4 py-2 text-button transition-all duration-300 border-l mb-[-1px] ${
                                            activeSection === section.id
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

                <motion.div
                    variants={listVariants}
                    initial="hidden"
                    animate="visible"
                    className="lg:col-span-8 lg:col-start-5 space-y-24 md:space-y-32"
                >
                    <motion.section id="problem" variants={itemVariants} className="space-y-8 scroll-mt-32">
                        <span className="text-eyebrow font-mono text-neutral-600 uppercase block">01 — The Problem</span>
                        <div className="space-y-6">{renderText(study.problem)}</div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/[0.05]">
                            <div className="space-y-3">
                                <h4 className="text-eyebrow font-mono uppercase text-white mb-2">Context</h4>
                                <p className="text-neutral-500 text-body-sm">{study.context}</p>
                            </div>
                            <div className="space-y-3">
                                <h4 className="text-eyebrow font-mono uppercase text-white mb-2">Objectives</h4>
                                <ul className="space-y-2">
                                    {study.goals.map((goal) => (
                                        <li key={goal} className="text-neutral-500 text-body-sm flex gap-3 items-start">
                                            <span className="w-1 h-1 rounded-full bg-neutral-500 mt-2 shrink-0" />
                                            {goal}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.section>

                    <motion.section id="approach" variants={itemVariants} className="space-y-8 scroll-mt-32">
                        <span className="text-eyebrow font-mono text-neutral-600 uppercase block">02 — Approach</span>
                        <div className="space-y-6">{renderText(study.approach)}</div>

                        <div className="p-8 bg-white/[0.02] border border-white/[0.05] rounded-lg">
                            <h4 className="text-eyebrow font-mono text-neutral-500 uppercase mb-4">User Scenario</h4>
                            <p className="text-neutral-300 text-body">{study.usersScenario}</p>
                        </div>
                    </motion.section>

                    <motion.section id="solution" variants={itemVariants} className="space-y-8 scroll-mt-32">
                        <span className="text-eyebrow font-mono text-neutral-600 uppercase block">03 — Solution</span>
                        <div className="space-y-6">{renderText(study.solution)}</div>

                        <div className="grid grid-cols-1 gap-4 pt-4">
                            {study.keyDecisions.map((decision) => {
                                const [title, ...body] = decision.split('—');
                                return (
                                    <div
                                        key={title}
                                        className="p-6 border-l border-white/[0.08] hover:border-white/40 hover:bg-white/[0.02] transition-colors duration-300"
                                    >
                                        <h5 className="text-card-title text-white mb-2">{title.trim()}</h5>
                                        <p className="text-body-sm text-neutral-500">{body.join('—').trim()}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.section>

                    <motion.section id="output" variants={itemVariants} className="space-y-12 scroll-mt-32">
                        <span className="text-eyebrow font-mono text-neutral-600 uppercase block">04 — Output</span>
                        <div className="space-y-16">{study.output.map(renderOutput)}</div>
                    </motion.section>

                    <motion.section id="impact" variants={itemVariants} className="space-y-8 scroll-mt-32">
                        <span className="text-eyebrow font-mono text-neutral-600 uppercase block">05 — Impact</span>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 border border-white/[0.08] rounded-lg hover:bg-white/[0.02] transition-colors">
                                <h4 className="text-eyebrow font-mono text-neutral-500 uppercase mb-6">User</h4>
                                {Array.isArray(study.impact.user) ? (
                                    <Stats stats={study.impact.user} />
                                ) : (
                                    renderText(study.impact.user)
                                )}
                            </div>
                            <div className="p-8 border border-white/[0.08] rounded-lg hover:bg-white/[0.02] transition-colors">
                                <h4 className="text-eyebrow font-mono text-neutral-500 uppercase mb-6">Business</h4>
                                {Array.isArray(study.impact.business) ? (
                                    <Stats stats={study.impact.business} />
                                ) : (
                                    renderText(study.impact.business)
                                )}
                            </div>
                        </div>

                        <div className="pt-24 mt-24 border-t border-white/[0.05]">
                            <h3 className="text-display-lg text-white mb-8">Retrospective</h3>
                            <div className="text-neutral-500 text-body max-w-2xl">{renderText(study.learnings)}</div>
                        </div>
                    </motion.section>
                </motion.div>
            </div>
        </div>
    );
};

export default ProjectTemplate;
