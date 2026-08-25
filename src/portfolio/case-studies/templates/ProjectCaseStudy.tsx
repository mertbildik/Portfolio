import React from 'react';
import { motion } from 'motion/react';
import { getProjectImages } from '../../assets/projectImages';
import type { ImpactStat, OutputBlock, TemplateProject } from '../../content/projects';
import BackLink from '../BackLink';
import CaseStudySectionNavigator from '../CaseStudySectionNavigator';
import { blockVariants, sectionVariants, VIEWPORT_ONCE } from '../../../shared/motion';

const SECTIONS = [
    { id: 'problem', label: 'Problem', description: 'Context and objectives' },
    { id: 'approach', label: 'Approach', description: 'Research and direction' },
    { id: 'solution', label: 'Solution', description: 'System and key decisions' },
    { id: 'output', label: 'Output', description: 'Delivered work' },
    { id: 'impact', label: 'Impact', description: 'Results and learnings' },
];

const Stats: React.FC<{ stats: ImpactStat[] }> = ({ stats }) => (
    <div className="flex flex-col gap-10">
        {stats.map((stat) => (
            <div key={stat.title} className="flex flex-col gap-3">
                <span className="text-display-md font-mono text-ink-high">{stat.number}</span>
                <span className="text-eyebrow text-ink-low">{stat.title}</span>
                <p className="text-ink-body text-body-sm">{stat.description}</p>
            </div>
        ))}
    </div>
);

const ProjectCaseStudy: React.FC<{ project: TemplateProject }> = ({ project }) => {
    const study = project.caseStudy;
    const images = getProjectImages(project.id);

    const renderText = (text: string) =>
        text
            .split('\n')
            .filter((p) => p.trim())
            .map((paragraph, idx) => {
                if (paragraph.trim().startsWith('•') || paragraph.trim().startsWith('-')) {
                    return (
                        <div key={idx} className="flex gap-4 items-start pl-2 max-w-2xl">
                            <div className="w-1 h-1 rounded-full bg-ink-body mt-2.5 shrink-0" />
                            <p className="text-ink-body text-body">{paragraph.replace(/^[•-]\s*/, '')}</p>
                        </div>
                    );
                }
                // Spacing belongs to the container (space-y-*), never to the paragraph.
                // Both are margin-bottom in Tailwind 4, so a paragraph setting its own
                // would fight the container instead of stacking with it.
                return (
                    <p key={idx} className="text-ink-body text-body max-w-2xl">
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
                <div className="p-6 surface rounded-md">
                    <h3 className="text-card-title text-ink-high mb-2">{block.title}</h3>
                    <p className="text-ink-body text-body-sm">{block.description}</p>
                </div>

                {blockImages.length > 0 && (
                    <div className={`grid gap-8 ${block.columns === 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
                        {blockImages.map((img) => (
                            <div
                                key={img.name}
                                className="w-full bg-canvas border border-line rounded-md overflow-hidden"
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
        <div className="w-full">
            <motion.div
                variants={blockVariants}
                initial="hidden"
                animate="visible"
                className="mb-24 w-full md:mb-32"
            >
                <div className="mb-16 md:mb-24">
                    <BackLink to="/#portfolio" ariaLabel="Back to portfolio">Go back</BackLink>
                </div>

                <div className="flex flex-col gap-8">
                    <div className="inline-flex items-center px-3 py-1.5 rounded-md surface w-fit">
                        <span className="text-caption text-ink-low">{project.role}</span>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:gap-x-12 md:gap-y-8">
                        <h1 className="text-display-lg text-ink-high text-balance">{project.title}</h1>
                        <div className="space-y-2 md:justify-self-end md:text-right">
                            <span className="text-eyebrow text-ink-low block">Timeline</span>
                            <p className="text-ink-low text-caption font-mono text-nowrap">{study.timeline}</p>
                        </div>
                        <p className="text-body text-ink-body max-w-2xl text-balance md:col-span-2">
                            {study.oneLineSummary}
                        </p>
                    </div>

                    <div className="space-y-3">
                        <span className="text-eyebrow text-ink-low block">Tools</span>
                        <div className="flex flex-wrap gap-2">
                            {study.tools.map((tool) => (
                                <span
                                    key={tool}
                                    className="text-caption text-ink-low surface rounded-md px-2 py-1 text-nowrap"
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>

            <CaseStudySectionNavigator sections={SECTIONS} pageKey={project.id} />

            <div className="w-full space-y-24 md:space-y-32">
                    <motion.section id="problem" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={VIEWPORT_ONCE} className="space-y-8 scroll-mt-32">
                        <div>
                            <span className="block text-eyebrow text-ink-low mb-8"><span className="font-mono">01</span></span>
                            <h2 className="text-display-md text-ink-high">The problem</h2>
                        </div>
                        <div className="space-y-6">{renderText(study.problem)}</div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                            <div className="space-y-3">
                                <h3 className="text-card-title text-ink-high">Context</h3>
                                <p className="text-ink-body text-body-sm">{study.context}</p>
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-card-title text-ink-high">Objectives</h3>
                                <ul className="space-y-2">
                                    {study.goals.map((goal) => (
                                        <li key={goal} className="text-ink-body text-body-sm flex gap-3 items-start">
                                            <span className="w-1 h-1 rounded-full bg-ink-low mt-2 shrink-0" />
                                            {goal}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.section>

                    <motion.section id="approach" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={VIEWPORT_ONCE} className="space-y-8 scroll-mt-32">
                        <div>
                            <span className="block text-eyebrow text-ink-low mb-8"><span className="font-mono">02</span></span>
                            <h2 className="text-display-md text-ink-high">Approach</h2>
                        </div>
                        <div className="space-y-6">{renderText(study.approach)}</div>

                        <div className="p-8 surface rounded-md">
                            <h3 className="text-card-title text-ink-high mb-4">User scenario</h3>
                            <p className="text-ink-body text-body">{study.usersScenario}</p>
                        </div>
                    </motion.section>

                    <motion.section id="solution" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={VIEWPORT_ONCE} className="space-y-8 scroll-mt-32">
                        <div>
                            <span className="block text-eyebrow text-ink-low mb-8"><span className="font-mono">03</span></span>
                            <h2 className="text-display-md text-ink-high">Solution</h2>
                        </div>
                        <div className="space-y-6">{renderText(study.solution)}</div>

                        <div className="grid grid-cols-1 gap-8 pt-4">
                            {study.keyDecisions.map((decision) => {
                                const [title, ...body] = decision.split('—');
                                return (
                                    <div key={title}>
                                        <h3 className="text-card-title text-ink-high mb-2">{title.trim()}</h3>
                                        <p className="text-body-sm text-ink-body">{body.join('—').trim()}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.section>

                    <motion.section id="output" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={VIEWPORT_ONCE} className="space-y-12 scroll-mt-32">
                        <div>
                            <span className="block text-eyebrow text-ink-low mb-8"><span className="font-mono">04</span></span>
                            <h2 className="text-display-md text-ink-high">Output</h2>
                        </div>
                        <div className="space-y-16">{study.output.map(renderOutput)}</div>
                    </motion.section>

                    <motion.section id="impact" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={VIEWPORT_ONCE} className="space-y-8 scroll-mt-32">
                        <div>
                            <span className="block text-eyebrow text-ink-low mb-8"><span className="font-mono">05</span></span>
                            <h2 className="text-display-md text-ink-high">Impact</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 surface rounded-md">
                                <h3 className="text-card-title text-ink-high mb-6">User</h3>
                                {Array.isArray(study.impact.user) ? (
                                    <Stats stats={study.impact.user} />
                                ) : (
                                    <div className="space-y-4">{renderText(study.impact.user)}</div>
                                )}
                            </div>
                            <div className="p-8 surface rounded-md">
                                <h3 className="text-card-title text-ink-high mb-6">Business</h3>
                                {Array.isArray(study.impact.business) ? (
                                    <Stats stats={study.impact.business} />
                                ) : (
                                    <div className="space-y-4">{renderText(study.impact.business)}</div>
                                )}
                            </div>
                        </div>

                        <div className="pt-24">
                            <h3 className="text-display-md text-ink-high mb-8">Retrospective</h3>
                            <div className="text-ink-body text-body max-w-2xl space-y-4">{renderText(study.learnings)}</div>
                        </div>
                    </motion.section>
            </div>
        </div>
    );
};

export default ProjectCaseStudy;
