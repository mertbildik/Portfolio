import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import mertPhoto from '../assets/mert.jpeg';
import PageLayout from '../components/PageLayout';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
};

const About: React.FC = () => {
    return (
        <PageLayout>
            {/* LEFT COLUMN: Header / Intro - PRESERVED EXACTLY */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="lg:col-span-4 flex flex-col justify-start lg:self-start lg:pt-72 relative z-20 h-auto"
            >
                <div className="flex flex-col lg:min-h-0">
                    {/* Back Link */}
                    <Link to="/" className="inline-block mb-8 lg:mb-12 opacity-40 hover:opacity-100 transition-opacity duration-300">
                        <span className="text-button uppercase">← Back</span>
                    </Link>

                    {/* Title System */}
                    <div className="mb-6 lg:mb-8">
                        <span className="text-eyebrow font-mono text-neutral-500 uppercase mb-4 block">
                            Profile
                        </span>
                        <h1 className="text-display-xl text-white">
                            Who I <br />
                            <span className="text-neutral-500">Am.</span>
                        </h1>
                    </div>

                    <p className="text-neutral-400 max-w-xs text-body-lg">
                        Born in Izmir. Based in Warsaw.
                    </p>
                </div>
            </motion.div>

            {/* RIGHT COLUMN: HERO PORTRAIT SYSTEM */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="lg:col-span-8 flex flex-col justify-center w-full relative z-30 lg:pl-12"
            >
                {/* Main System Grid */}
                <div className="flex flex-col w-full max-w-3xl ml-auto">
                    <div className="w-full border-t border-neutral-800">

                        {/* 1. HERO ROW: BACKGROUND + PORTRAIT */}
                        <div className="grid grid-cols-1 md:grid-cols-3 border-b border-neutral-800">

                            {/* 1A. Background Text (Span 2) - Supports the photo */}
                            <motion.div variants={itemVariants} className="md:col-span-2 py-8 pr-12 lg:border-r border-neutral-800 flex flex-col justify-between h-full">
                                <span className="text-eyebrow font-mono text-neutral-500 uppercase mb-6">
                                    01 — Background
                                </span>

                                <div className="max-w-md">
                                    <h2 className="text-display-lg text-white mb-8">
                                        I build things that make life feel easier.
                                    </h2>
                                    <p className="text-neutral-500 text-body-sm">
                                        As a kid, I spent hours on the computer. Not only for fun. I liked figuring out simple ways to fix everyday problems. That mindset never left. Now I use it to design digital products with a clear purpose.
                                    </p>
                                </div>
                            </motion.div>

                            {/* 1B. HERO PORTRAIT (Span 1) - Aspect 3:4 Frame */}
                            {/* This container drives the row height naturally, no fixed min-h needed if content fits */}
                            <motion.div variants={itemVariants} className="relative w-full md:border-l border-neutral-800 md:-ml-[1px] p-6 lg:p-8 flex items-center justify-center">
                                {/* The Frame: Fixed Aspect Ratio */}
                                <div className="w-full aspect-[3/4] relative bg-neutral-900 border border-white/10 overflow-hidden group">
                                    {/* Image: Object Top + Cover for perfect framing */}
                                    <img
                                        src={mertPhoto}
                                        alt="Mert"
                                        className="w-full h-full object-cover object-top grayscale-0 transition-none"
                                    />

                                    {/* Subtle Overlay gradient for depth */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                                    {/* Micro Label */}
                                    <div className="absolute bottom-3 left-3">
                                        <span className="text-caption font-mono text-white/50 uppercase">
                                            Portrait '26
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* 2. INDEX ROW: PERSPECTIVE */}
                        <div className="grid grid-cols-1 md:grid-cols-3 border-b border-neutral-800">
                            {/* Focus */}
                            <motion.div variants={itemVariants} className="py-8 md:pr-8 lg:border-r border-neutral-800 relative group">
                                <span className="block text-eyebrow font-mono text-neutral-500 uppercase mb-4 group-hover:text-white transition-colors">
                                    02 — Focus
                                </span>
                                <p className="text-neutral-400 text-body-sm group-hover:text-neutral-300 transition-colors">
                                    Basketball and football keep me hooked. Design is where I feel most at home.
                                </p>
                            </motion.div>

                            {/* Method */}
                            <motion.div variants={itemVariants} className="py-8 md:px-8 lg:border-r border-neutral-800 relative group md:-ml-[1px]">
                                <span className="block text-eyebrow font-mono text-neutral-500 uppercase mb-4 group-hover:text-white transition-colors">
                                    03 — Method
                                </span>
                                <p className="text-neutral-400 text-body-sm group-hover:text-neutral-300 transition-colors">
                                    I started in a corporate environment and learned how businesses really work. Now I run my own studio. I like clear goals, direct feedback, and a calm process where the work stays the focus.
                                </p>
                            </motion.div>

                            {/* Philosophy */}
                            <motion.div variants={itemVariants} className="py-8 md:pl-8 relative group md:-ml-[1px]">
                                <span className="block text-eyebrow font-mono text-neutral-500 uppercase mb-4 group-hover:text-white transition-colors">
                                    04 — Philosophy
                                </span>
                                <p className="text-neutral-400 text-body-sm group-hover:text-neutral-300 transition-colors">
                                    Design is not about looking fancy. It is about helping people move forward with less friction and more focus.
                                </p>
                            </motion.div>
                        </div>

                        {/* 3. FOOTER ROW: CONNECT */}
                        <motion.div variants={itemVariants} className="py-6 flex flex-col md:flex-row items-center justify-between gap-6">

                            <div className="flex items-center gap-4">
                                <div className="w-1.5 h-1.5 bg-green-500/50 rounded-full animate-pulse" />
                                <span className="text-caption font-mono text-neutral-600 uppercase">
                                    STATUS: Available for new projects
                                </span>
                            </div>

                            <Link to="/contact" className="w-full flex items-center justify-between group cursor-pointer lg:w-auto lg:min-w-[280px]">
                                <div className="flex flex-col shrink-0">
                                    <span className="text-button text-white group-hover:text-neutral-300 transition-colors uppercase font-mono">Start a conversation</span>
                                </div>
                                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 shrink-0 ml-4">
                                    <ArrowRight size={16} />
                                </div>
                            </Link>

                        </motion.div>

                    </div>
                </div>
            </motion.div>
        </PageLayout>
    );
};

export default About;
