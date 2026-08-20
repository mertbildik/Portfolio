import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import mertPhoto from '../../assets/mert.webp';
import { blockVariants, containerVariants, itemVariants, VIEWPORT_ONCE } from '../../shared/motion';
import ActionCircle from '../components/ActionCircle';
import HomeSection from '../components/HomeSection';
import SectionIntro from '../components/SectionIntro';

const AboutSection: React.FC = () => {
    return (
        <HomeSection id="about">
            <motion.div
                variants={blockVariants}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_ONCE}
            >
                <SectionIntro
                    eyebrow="Profile"
                    title={<>Who I <br /><span className="text-ink-low">Am.</span></>}
                    description="Born in Izmir. Based in Warsaw."
                />
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_ONCE}
                className="flex flex-col justify-center w-full relative z-30"
            >
                {/* Main System Grid */}
                <div className="flex flex-col w-full">
                    <div className="w-full border-t border-line">

                        {/* 1. HERO ROW: BACKGROUND + PORTRAIT */}
                        <div className="grid grid-cols-1 md:grid-cols-3 border-b border-line">

                            {/* 1A. Background Text (Span 2) - Supports the photo */}
                            <motion.div variants={itemVariants} className="md:col-span-2 py-8 pr-12 flex flex-col justify-between h-full">
                                <span className="text-eyebrow text-ink-low mb-6">
                                    01 — Background
                                </span>

                                <div className="max-w-md">
                                    <h2 className="text-display-md text-ink-high mb-8">
                                        I build things that make life feel easier.
                                    </h2>
                                    <p className="text-ink-body text-body-sm">
                                        As a kid, I spent hours on the computer. Not only for fun. I liked figuring out simple ways to fix everyday problems. That mindset never left. Now I use it to design digital products with a clear purpose.
                                    </p>
                                </div>
                            </motion.div>

                            {/* 1B. HERO PORTRAIT (Span 1) - Aspect 3:4 Frame */}
                            {/* This container drives the row height naturally, no fixed min-h needed if content fits */}
                            <motion.div variants={itemVariants} className="relative w-full md:border-l border-line md:-ml-[1px] p-6 lg:p-8 flex items-center justify-center">
                                {/* The Frame: Fixed Aspect Ratio */}
                                <div className="w-full aspect-[3/4] relative bg-canvas border border-line overflow-hidden rounded-md">
                                    {/* Image: Object Top + Cover for perfect framing */}
                                    <img
                                        src={mertPhoto}
                                        alt="Mert Bildik"
                                        className="w-full h-full object-cover object-top"
                                    />

                                    {/* Subtle Overlay gradient for depth */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-canvas/60 via-transparent to-transparent opacity-60" />

                                    {/* Micro Label */}
                                    <div className="absolute bottom-3 left-3">
                                        <span className="text-caption font-mono text-ink-body uppercase">
                                            Portrait '26
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* 2. INDEX ROW: PERSPECTIVE */}
                        <div className="grid grid-cols-1 md:grid-cols-3 border-b border-line">
                            {/* Focus */}
                            <motion.div variants={itemVariants} className="py-8 md:pr-8 relative">
                                <span className="block text-eyebrow text-ink-low mb-4">
                                    02 — Focus
                                </span>
                                <p className="text-ink-body text-body-sm">
                                    Basketball and football keep me hooked. Design is where I feel most at home.
                                </p>
                            </motion.div>

                            {/* Method */}
                            <motion.div variants={itemVariants} className="py-8 md:px-8 md:border-l border-line relative md:-ml-[1px]">
                                <span className="block text-eyebrow text-ink-low mb-4">
                                    03 — Method
                                </span>
                                <p className="text-ink-body text-body-sm">
                                    I started in a corporate environment and learned how businesses really work. Now I run my own studio. I like clear goals, direct feedback, and a calm process where the work stays the focus.
                                </p>
                            </motion.div>

                            {/* Philosophy */}
                            <motion.div variants={itemVariants} className="py-8 md:pl-8 md:border-l border-line relative md:-ml-[1px]">
                                <span className="block text-eyebrow text-ink-low mb-4">
                                    04 — Philosophy
                                </span>
                                <p className="text-ink-body text-body-sm">
                                    Design is not about looking fancy. It is about helping people move forward with less friction and more focus.
                                </p>
                            </motion.div>
                        </div>

                        {/* 3. FOOTER ROW: CONNECT */}
                        <motion.div variants={itemVariants} className="py-6 flex flex-col md:flex-row items-center justify-between gap-6">

                            <div className="flex items-center gap-4">
                                <div className="w-1.5 h-1.5 bg-status-ok/50 rounded-full animate-pulse" />
                                <span className="text-caption text-ink-faint">
                                    Status: Available for new projects
                                </span>
                            </div>

                            <a href="#contact" className="w-full flex items-center justify-between group cursor-pointer lg:w-auto lg:min-w-[280px]">
                                <div className="flex flex-col shrink-0">
                                    <span className="text-button text-ink-high group-hover:text-ink-max group-focus-visible:text-ink-max transition-colors duration-300">Start a conversation</span>
                                </div>
                                <ActionCircle small>
                                    <ArrowRight size={16} />
                                </ActionCircle>
                            </a>

                        </motion.div>

                    </div>
                </div>
            </motion.div>
        </HomeSection>
    );
};

export default AboutSection;
