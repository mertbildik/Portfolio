import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS, Project } from '../content/projects';
import BackButton from '../components/BackButton';
import SplitPage from '../layouts/SplitPage';
import { EASE, listVariants, itemVariants } from '../components/motion';

const SECTIONS: { label: string; kind: Project['kind'] }[] = [
    { label: 'CLIENT PROJECTS', kind: 'clientProject' },
    { label: 'EMPLOYMENT', kind: 'employment' },
    { label: 'VENTURES', kind: 'venture' },
];

const Portfolio: React.FC = () => (
    <SplitPage align="center">
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="lg:col-span-4 flex flex-col justify-start lg:self-start lg:pt-72 relative z-20 h-auto"
        >
            <div className="flex flex-col">
                <div className="mb-8 lg:mb-12">
                    <BackButton to="/" />
                </div>

                <div className="mb-6 lg:mb-8">
                    <span className="text-eyebrow font-mono text-neutral-500 uppercase mb-4 block">ARCHIVE</span>
                    <h1 className="text-display-xl text-white">
                        Selected <br />
                        <span className="text-neutral-500">Work.</span>
                    </h1>
                </div>

                <p className="text-neutral-400 max-w-xs text-body-lg">
                    A small set of projects I am proud of. Client work, team work, and things I built for myself.
                </p>
            </div>
        </motion.div>

        <motion.div
            variants={listVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-8 flex flex-col w-full relative z-30 lg:pl-12"
        >
            <div className="flex flex-col w-full max-w-3xl ml-auto gap-10 lg:gap-12">
                {SECTIONS.map((section) => (
                    <div key={section.kind} className="flex flex-col gap-4">
                        <motion.h2
                            variants={itemVariants}
                            className="text-eyebrow font-mono text-neutral-500 uppercase pl-[2px] mb-2"
                        >
                            {section.label}
                        </motion.h2>
                        <div className="flex flex-col">
                            <div className="border-t border-white/[0.08] -mx-2 mb-0" />
                            {PROJECTS.filter((p) => p.kind === section.kind).map((project) => (
                                <Link
                                    key={project.id}
                                    to={`/portfolio/${project.id}`}
                                    className="group block outline-none relative z-10 cursor-pointer"
                                >
                                    <motion.div
                                        variants={itemVariants}
                                        className="relative py-5 lg:py-6 px-2 -mx-2 border-b border-white/[0.08] flex items-baseline justify-between lg:grid lg:grid-cols-[14rem_1fr_auto] lg:gap-4 group-hover:bg-white/[0.02] group-focus-visible:bg-white/[0.05] transition-colors duration-300"
                                    >
                                        <span className="text-card-title text-neutral-300 group-hover:text-white transition-colors duration-300 truncate">
                                            {project.title}
                                        </span>

                                        <span className="hidden md:block text-caption font-mono text-neutral-600 group-hover:text-neutral-500 uppercase transition-colors">
                                            {project.role}
                                        </span>

                                        <div className="flex items-center justify-end gap-4">
                                            <span className="text-caption font-mono text-neutral-600">
                                                {project.yearOrStatus}
                                            </span>
                                            <div className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0 transition-all duration-300 ease-out">
                                                <ArrowUpRight size={16} className="text-white" />
                                            </div>
                                        </div>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    </SplitPage>
);

export default Portfolio;
