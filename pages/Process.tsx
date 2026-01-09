import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// -- Variants (Consistent with Home/Portfolio) --
import PageLayout from '../components/PageLayout';

// ... (Variants can be removed if shared or kept local. keeping local for now)
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

const Process: React.FC = () => {
    const steps = [
        {
            id: "01",
            title: "Discovery",
            desc: "I listen to understand your core goals. No assumptions, just clear facts.",
        },
        {
            id: "02",
            title: "Strategy",
            desc: "User flows and wireframes to ensure solid logic before any visual design.",
        },
        {
            id: "03",
            title: "Design",
            desc: "Minimal, premium aesthetic. Functional beauty where every pixel serves a purpose.",
        },
        {
            id: "04",
            title: "Launch",
            desc: "Production-ready assets and support to ensure the solution works in the wild.",
        }
    ];

    const tools = [
        { name: "Figma", category: "Design" },
        { name: "Framer", category: "Design" },
        { name: "Notion", category: "Productivity" },
        { name: "Microsoft Office", category: "Productivity" },
        { name: "Adobe CC", category: "Design" },
        { name: "Affinity", category: "Design" },
        { name: "Canva", category: "Design" },
        { name: "ChatGPT", category: "AI" },
        { name: "Claude", category: "AI" },
        { name: "Perplexity", category: "AI" },
        { name: "Gemini", category: "AI" },
        { name: "AntiGravity", category: "AI" }, // Fixed Typo: AntiGravity
        { name: "HTML/CSS", category: "Code" },
        { name: "Angular", category: "Code" },
        { name: "React", category: "Code" },
    ];

    return (
        <PageLayout>
            {/* LEFT COLUMN: Header / Intro - col-span-4 */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="lg:col-span-4 flex flex-col justify-center relative z-20 h-full"
            >
                <div className="flex flex-col">
                    {/* Back Link - Very subtle, aligned */}
                    <Link to="/" className="inline-block mb-8 lg:mb-12 opacity-40 hover:opacity-100 transition-opacity duration-300">
                        <span className="text-xs tracking-widest uppercase font-medium">← Back</span>
                    </Link>

                    {/* Title System - Matches Portfolio's hierarchy */}
                    <div className="mb-6 lg:mb-8">
                        <span className="text-xs font-mono text-neutral-500 tracking-widest uppercase mb-4 block">
                            Methodology
                        </span>
                        <h1 className="text-4xl lg:text-[3.5rem] font-medium tracking-tight leading-[0.95] text-white">
                            How I <br />
                            <span className="text-neutral-500 font-light">Work.</span>
                        </h1>
                    </div>

                    <p className="text-neutral-400 max-w-xs leading-relaxed text-sm lg:text-base font-light">
                        I don't just make things look good. I build systems that work.
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
                <div className="flex flex-col w-full max-w-3xl ml-auto gap-12 lg:gap-20">

                    {/* SECTION: The Process */}
                    <div className="flex flex-col gap-4">
                        <motion.h2 variants={itemVariants} className="text-xs font-mono text-neutral-500 uppercase tracking-widest pl-[2px] mb-2">
                            The Process
                        </motion.h2>

                        <div className="flex flex-col border-t border-white/[0.08]">
                            {steps.map((step) => (
                                <motion.div
                                    key={step.id}
                                    variants={itemVariants}
                                    className="relative py-5 lg:py-6 flex flex-col md:flex-row md:items-baseline justify-between border-b border-white/[0.08] group px-2 -mx-2 hover:bg-white/[0.02] transition-colors duration-300 rounded-lg"
                                >
                                    <div className="flex items-baseline gap-6 md:gap-10">
                                        <span className="text-xs font-mono text-neutral-600 transition-colors">
                                            {step.id}
                                        </span>
                                        <span className="text-xl lg:text-2xl font-light text-neutral-300 group-hover:text-white transition-colors duration-300 tracking-tight">
                                            {step.title}
                                        </span>
                                    </div>

                                    <div className="mt-2 md:mt-0 md:max-w-xs lg:max-w-sm">
                                        <p className="text-sm text-neutral-500 leading-relaxed font-light group-hover:text-neutral-400 transition-colors">
                                            {step.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* SECTION: Toolkit */}
                    <div className="flex flex-col gap-4">
                        <motion.h2 variants={itemVariants} className="text-xs font-mono text-neutral-500 uppercase tracking-widest pl-[2px] mb-2">
                            Toolkit
                        </motion.h2>

                        {/* Minimal Grid - Compact */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2 gap-x-8 border-t border-white/[0.08] pt-4">
                            {tools.map((tool, i) => (
                                <motion.div
                                    key={i}
                                    variants={itemVariants}
                                    className="flex items-center gap-3 group py-1"
                                >
                                    <div className="w-1 h-1 rounded-full bg-neutral-800 group-hover:bg-white transition-colors duration-300" />
                                    <span className="text-xs lg:text-sm text-neutral-500 font-light group-hover:text-white transition-colors duration-300">
                                        {tool.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-8 flex justify-start">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-3 text-neutral-400 hover:text-white transition-colors group py-2"
                            >
                                <span className="text-sm uppercase tracking-widest font-mono">Start a project</span>
                                <ArrowRight size={16} className="text-neutral-600 group-hover:text-white transition-colors group-hover:translate-x-1 duration-300" />
                            </Link>
                        </div>
                    </div>

                </div>
            </motion.div>
        </PageLayout>
    );
};

export default Process;