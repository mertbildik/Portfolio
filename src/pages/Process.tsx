import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

import BackButton from '../components/BackButton';
import SplitPage from '../layouts/SplitPage';
import { EASE, containerVariants, itemVariants } from '../components/motion';

const Process: React.FC = () => {
    const steps = [
        {
            id: "01",
            title: "Listen",
            desc: "We start with a real talk. You tell me what you are trying to do, what is blocking you, and what “good” looks like. I ask questions until it is clear, then we set the next steps.",
        },
        {
            id: "02",
            title: "Direction",
            desc: "I turn what you said into a simple plan. We lock the message, the audience, and the one action that matters most. Then I map the work so design, content, and marketing move together.",
        },
        {
            id: "03",
            title: "Build",
            desc: "This is the part where things take shape. I design and ship the site, visuals, or deck with clean structure and tight details. You will see steady progress, and you will always know what is next.",
        },
        {
            id: "04",
            title: "Improve",
            desc: "After launch, we keep it sharp. We look at what is working, fix what is not, and push the next version. Small updates add up fast when they are done with focus.",
        }
    ];

    const tools = [
        { name: "Claude Code", category: "AI" },
        { name: "Codex", category: "AI" },
        { name: "VS Code", category: "Code" },
        { name: "Figma", category: "Design" },
        { name: "Framer", category: "Design" },
        { name: "Notion", category: "Productivity" },
        { name: "Microsoft Office", category: "Productivity" },
        { name: "Adobe CC", category: "Design" },
        { name: "Affinity", category: "Design" },
        { name: "Canva", category: "Design" },
        { name: "Perplexity", category: "AI" },
        { name: "Google AI Studio", category: "AI" },
        { name: "AntiGravity", category: "AI" },
        { name: "HTML/CSS", category: "Code" },
        { name: "Angular", category: "Code" },
        { name: "React", category: "Code" },
    ];

    return (
        <SplitPage align="center">
            {/* LEFT COLUMN: Header / Intro - col-span-4 */}
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

                    {/* Title System - Matches Portfolio's hierarchy */}
                    <div className="mb-6 lg:mb-8">
                        <span className="text-eyebrow font-mono text-ink-low uppercase mb-4 block">
                            METHODOLOGY
                        </span>
                        <h1 className="text-display-xl text-ink-max">
                            How I <br />
                            <span className="text-ink-low">Work.</span>
                        </h1>
                    </div>

                    <p className="text-ink-body max-w-xs text-body-lg">
                        I do not just make things look nice.
                        I build things that hold up in the real world.
                    </p>
                </div>
            </motion.div>

            {/* RIGHT COLUMN: Interactive List - col-span-8 */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="lg:col-span-8 flex flex-col justify-center w-full relative z-30 lg:pl-12"
            >
                <div className="flex flex-col w-full max-w-3xl ml-auto gap-10 lg:gap-12">

                    {/* SECTION: The Process */}
                    <div className="flex flex-col gap-4">
                        <motion.h2 variants={itemVariants} className="text-eyebrow font-mono text-ink-low uppercase pl-[2px] mb-2">
                            THE PROCESS
                        </motion.h2>

                        {/* Vertical Timeline Container */}
                        <div className="relative pl-6 lg:pl-8">
                            {/* Continuous Vertical Line */}
                            <motion.div
                                initial={{ scaleY: 0 }}
                                animate={{ scaleY: 1 }}
                                transition={{ duration: 1.2, ease: EASE }}
                                className="absolute left-0 top-2 bottom-2 w-px bg-line origin-top"
                            />

                            <div className="flex flex-col gap-10 lg:gap-12">
                                {steps.map((step, i) => (
                                    <motion.div
                                        key={step.id}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: 0.2 + (i * 0.1), ease: EASE }}
                                        className="relative"
                                    >
                                        {/* Timeline Node */}
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ duration: 0.6, delay: 0.2 + (i * 0.1), ease: EASE }}
                                            className="absolute -left-[27px] lg:-left-[35px] top-[9px] w-[5px] h-[5px] rounded-full bg-node ring-4 ring-canvas"
                                        />

                                        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4">
                                            {/* Header: Index & Title */}
                                            <div className="md:col-span-4 flex flex-row md:flex-col items-baseline md:items-start gap-3 md:gap-1">
                                                <span className="text-caption font-mono text-ink-faint uppercase">
                                                    {step.id}
                                                </span>
                                                <span className="text-card-title text-ink-mid">
                                                    {step.title}
                                                </span>
                                            </div>

                                            {/* Body */}
                                            <div className="md:col-span-8">
                                                <p className="text-body-sm text-ink-low max-w-lg">
                                                    {step.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* SECTION: Toolkit */}
                    <div className="flex flex-col gap-4">
                        <motion.h2 variants={itemVariants} className="text-eyebrow font-mono text-ink-low uppercase pl-[2px] mb-2">
                            Toolkit
                        </motion.h2>

                        {/* Minimal Grid - Compact */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2 gap-x-8 border-t border-line pt-4">
                            {tools.map((tool, i) => (
                                <motion.div
                                    key={i}
                                    variants={itemVariants}
                                    className="flex items-center gap-3 py-1"
                                >
                                    <div className="w-1 h-1 rounded-full bg-ink-low" />
                                    <span className="text-body-sm text-ink-low">
                                        {tool.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-8 w-full flex justify-start">
                            <Link
                                to="/contact"
                                className="w-full flex items-center justify-between group cursor-pointer"
                            >
                                <div className="flex flex-col shrink-0">
                                    <span className="text-card-title text-ink-max group-hover:text-ink-mid transition-colors duration-300">Start a project</span>
                                    <span className="text-caption font-mono text-ink-faint mt-1 uppercase">Open for transmission</span>
                                </div>
                                <div className="w-12 h-12 rounded-full border border-line-strong flex items-center justify-center text-ink-max group-hover:bg-fill-inverse group-hover:text-ink-inverse transition-all duration-300 shrink-0 ml-4">
                                    <ArrowRight size={20} />
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
            </motion.div>
        </SplitPage>
    );
};

export default Process;