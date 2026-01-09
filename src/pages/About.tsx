import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import mertPhoto from '../assets/mert.jpeg';

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
        <div className="w-full min-h-screen text-[#E5E5E5] flex flex-col font-sans overflow-hidden">

            {/* Grid Layout Container - Strict Alignment */}
            <div className="relative z-10 w-full max-w-[1600px] flex-1 mx-auto px-6 md:px-12 lg:pr-20 lg:pl-32 xl:px-32 grid grid-cols-1 lg:grid-cols-12 items-start lg:items-center gap-12 lg:gap-12 py-24 lg:py-0 min-h-screen">

                {/* LEFT COLUMN: Header / Intro - PRESERVED EXACTLY */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="lg:col-span-4 flex flex-col justify-center relative z-20 h-full"
                >
                    <div className="flex flex-col lg:min-h-[291px]">
                        {/* Back Link */}
                        <Link to="/" className="inline-block mb-8 lg:mb-12 opacity-40 hover:opacity-100 transition-opacity duration-300">
                            <span className="text-xs tracking-widest uppercase font-medium">← Back</span>
                        </Link>

                        {/* Title System */}
                        <div className="mb-6 lg:mb-8">
                            <span className="text-xs font-mono text-neutral-500 tracking-widest uppercase mb-4 block">
                                Profile
                            </span>
                            <h1 className="text-4xl lg:text-[3.5rem] font-medium tracking-tight leading-[0.95] text-white">
                                Who I <br />
                                <span className="text-neutral-500 font-light">Am.</span>
                            </h1>
                        </div>

                        <p className="text-neutral-400 max-w-xs leading-relaxed text-sm lg:text-base font-light">
                            Born in Izmir, now based in Warsaw.
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
                                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-6">
                                        01 — Background
                                    </span>

                                    <div className="max-w-md">
                                        <h2 className="text-xl md:text-2xl font-light text-white leading-tight mb-8">
                                            I’ve always been curious about using technology to make things simpler.
                                        </h2>
                                        <p className="text-neutral-500 leading-relaxed text-sm font-light">
                                            As a kid, I spent hours on the computer, not for fun only, but to smooth out everyday problems. That way of thinking never left. Now, I apply it to building digital products that serve a clear purpose.
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
                                            className="w-full h-full object-cover object-top grayscale contrast-110 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                        />

                                        {/* Subtle Overlay gradient for depth */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                                        {/* Micro Label */}
                                        <div className="absolute bottom-3 left-3">
                                            <span className="text-[9px] font-mono text-white/50 uppercase tracking-widest">
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
                                    <span className="block text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-4 group-hover:text-white transition-colors">
                                        02 — Focus
                                    </span>
                                    <p className="text-neutral-400 text-xs leading-relaxed font-light group-hover:text-neutral-300 transition-colors">
                                        I follow basketball and football, but design is where I feel most grounded.
                                    </p>
                                </motion.div>

                                {/* Method */}
                                <motion.div variants={itemVariants} className="py-8 md:px-8 lg:border-r border-neutral-800 relative group md:-ml-[1px]">
                                    <span className="block text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-4 group-hover:text-white transition-colors">
                                        03 — Method
                                    </span>
                                    <p className="text-neutral-400 text-xs leading-relaxed font-light group-hover:text-neutral-300 transition-colors">
                                        From corporate environments to my own studio. I value clarity and shared mindsets.
                                    </p>
                                </motion.div>

                                {/* Philosophy */}
                                <motion.div variants={itemVariants} className="py-8 md:pl-8 relative group md:-ml-[1px]">
                                    <span className="block text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-4 group-hover:text-white transition-colors">
                                        04 — Philosophy
                                    </span>
                                    <p className="text-neutral-400 text-xs leading-relaxed font-light group-hover:text-neutral-300 transition-colors">
                                        Design isn't about looking impressive. It's about helping people move forward.
                                    </p>
                                </motion.div>
                            </div>

                            {/* 3. FOOTER ROW: CONNECT */}
                            <motion.div variants={itemVariants} className="py-6 flex flex-col md:flex-row items-center justify-between gap-6">

                                <div className="flex items-center gap-4">
                                    <div className="w-1.5 h-1.5 bg-green-500/50 rounded-full animate-pulse" />
                                    <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">
                                        Status: Available for new projects
                                    </span>
                                </div>

                                <Link to="/contact" className="w-full flex items-center justify-between group cursor-pointer lg:w-auto lg:min-w-[280px]">
                                    <div className="flex flex-col shrink-0">
                                        <span className="text-sm font-medium text-white group-hover:text-neutral-300 transition-colors uppercase tracking-widest font-mono">Start a conversation</span>
                                    </div>
                                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 shrink-0 ml-4">
                                        <ArrowRight size={16} />
                                    </div>
                                </Link>

                            </motion.div>

                        </div>
                    </div>
                </motion.div>

            </div>

            {/* Footer Info - Fixed */}
            <div className="fixed bottom-8 left-6 md:left-12 z-40 hidden lg:block">
                <div className="flex items-center gap-3 opacity-60">
                    <MapPin size={10} className="text-neutral-500" />
                    <span className="text-[10px] text-neutral-500 font-mono uppercase tracking-widest">
                        Warsaw, PL
                    </span>
                    <span className="text-[10px] text-neutral-800 font-mono uppercase tracking-widest">|</span>
                    <span className="text-[10px] text-neutral-500 font-mono uppercase tracking-widest">
                        Mert Bildik © 2026
                    </span>
                </div>
            </div>
        </div>
    );
};

export default About;
