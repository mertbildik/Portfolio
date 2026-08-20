import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router';
import { PROJECTS, ProjectKind } from '../content/projects';
import HomepageSection from './HomepageSection';
import SectionIntro from './SectionIntro';
import { blockVariants, listVariants, itemVariants, VIEWPORT_ONCE } from '../components/motion';

const SECTIONS: { label: string; kind: ProjectKind }[] = [
    { label: 'Client projects', kind: 'clientProject' },
    { label: 'Employment', kind: 'employment' },
    { label: 'Ventures', kind: 'venture' },
];

const PORTFOLIO_PROJECTS = PROJECTS.filter((project) => project.listed);

const PortfolioSection: React.FC = () => (
    <HomepageSection id="portfolio">
        <motion.div
            variants={blockVariants}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
        >
            <SectionIntro
                eyebrow="Archive"
                title={<>Selected <br /><span className="text-ink-low">Work.</span></>}
                description="A small set of projects I am proud of. Client work, team work, and things I built for myself."
            />
        </motion.div>

        <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="flex flex-col w-full relative z-30"
        >
            <div className="flex flex-col w-full gap-10 lg:gap-12">
                {SECTIONS.map((section) => {
                    const sectionProjects = PORTFOLIO_PROJECTS.filter((p) => p.kind === section.kind);
                    if (sectionProjects.length === 0) return null;
                    return (
                    <div key={section.kind} className="flex flex-col gap-4">
                        <motion.h2
                            variants={itemVariants}
                            className="text-eyebrow text-ink-low pl-[2px] mb-2"
                        >
                            {section.label}
                        </motion.h2>
                        <div className="flex flex-col">
                            <div className="border-t border-line -mx-2 mb-0" />
                            {sectionProjects.map((project) => (
                                <Link
                                    key={project.id}
                                    to={`/portfolio/${project.id}`}
                                    className="group block outline-none relative z-10 cursor-pointer"
                                >
                                    <motion.div
                                        variants={itemVariants}
                                        className="relative py-6 md:py-8 px-2 -mx-2 border-b border-line group-focus-visible:border-line-active flex items-baseline justify-between lg:grid lg:grid-cols-[14rem_1fr_auto] lg:gap-4 transition-colors duration-300"
                                    >
                                        <span className="text-card-title text-ink-high group-hover:text-ink-max group-focus-visible:text-ink-max transition-colors duration-300 truncate">
                                            {project.title}
                                        </span>

                                        <span className="hidden md:block text-caption text-ink-faint group-hover:text-ink-body group-focus-visible:text-ink-body transition-colors duration-300">
                                            {project.role}
                                        </span>

                                        <div className="flex items-center justify-end gap-4">
                                            <span className="text-caption font-mono text-ink-faint">
                                                {project.yearOrStatus}
                                            </span>
                                            <div className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0 transition-all duration-300 ease-out">
                                                <ArrowUpRight size={16} className="text-ink-max" />
                                            </div>
                                        </div>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    </div>
                    );
                })}
            </div>
        </motion.div>
    </HomepageSection>
);

export default PortfolioSection;
