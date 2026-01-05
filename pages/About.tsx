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
        // 100svh Container - STRICTLY NO SCROLL
        <div className="w-full h-[100svh] max-h-[100svh] overflow-hidden relative flex flex-col pt-[clamp(3rem,8vh,6rem)] pb-[clamp(3rem,6vh,6rem)]">

            {/* Atmosphere */}

            <motion.div
                className="flex h-full max-w-[1400px] mx-auto w-full px-6 md:px-12 relative z-10 gap-8 lg:gap-16 items-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >

                {/* LEFT COLUMN: Photo (Compact) */}
                <motion.div variants={itemVariants} className="hidden lg:block w-1/3 max-w-[360px] h-[55vh] relative">
                    <div className="w-full h-full rounded-lg overflow-hidden border border-white/5 bg-surface/20 relative shadow-2xl">
                        <img src={mertPhoto} alt="Mert" className="w-full h-full object-cover opacity-80" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/10">
                            <MapPin size={12} className="text-[#CCC]" />
                            <span className="text-[10px] font-mono text-[#CCC] uppercase tracking-widest">Warsaw, PL</span>
                        </div>
                    </div>
                </motion.div>

                {/* RIGHT COLUMN: Content (Dense) */}
                <div className="flex-1 flex flex-col justify-center h-full max-h-full">

                    {/* Header */}
                    <motion.div variants={itemVariants} className="mb-[clamp(1rem,2.5vh,2rem)]">
                        <h1 className="font-medium text-[#EDEDED] leading-none tracking-tight mb-2"
                            style={{ fontSize: "clamp(2rem, 4vh, 3.5rem)" }}>
                            Hey, I'm Mert.
                        </h1>
                        <p className="text-[#A3A3A3] font-normal" style={{ fontSize: "clamp(1rem, 1.8vh, 1.25rem)" }}>
                            Born in Izmir, now based in Warsaw.
                        </p>
                    </motion.div>

                    {/* Intro Text */}
                    <motion.div variants={itemVariants} className="mb-[clamp(1.5rem,3vh,3rem)] border-l border-[#262626] pl-6">
                        <p className="text-[#737373] max-w-xl leading-relaxed" style={{ fontSize: "clamp(0.875rem, 1.4vh, 1rem)" }}>
                            I’ve always been curious about using technology to make things simpler. As a kid, I spent hours on the computer, not for fun only, but to smooth out everyday problems. That way of thinking never left.
                        </p>
                    </motion.div>

                    {/* Info Grid (Tight) */}
                    <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-[clamp(1.5rem,3vh,3rem)] border-t border-white/5 pt-4">
                        {/* About Me */}
                        <div className="space-y-1.5">
                            <span className="text-[10px] font-mono text-[#404040] uppercase tracking-widest block">About Me</span>
                            <p className="text-[#737373] text-xs leading-snug">
                                I follow basketball and football closely, but design is where I feel most grounded.
                            </p>
                        </div>

                        {/* Work */}
                        <div className="space-y-1.5">
                            <span className="text-[10px] font-mono text-[#404040] uppercase tracking-widest block">Work</span>
                            <p className="text-[#737373] text-xs leading-snug">
                                From corporate environments to my own studio. I value clarity, shared mindsets, and healthy collaboration.
                            </p>
                        </div>

                        {/* Drives */}
                        <div className="space-y-1.5">
                            <span className="text-[10px] font-mono text-[#404040] uppercase tracking-widest block">Drives</span>
                            <p className="text-[#737373] text-xs leading-snug">
                                Design isn't about looking impressive. It's about helping people move forward with less friction.
                            </p>
                        </div>
                    </motion.div>

                    {/* CTA */}
                    <motion.div variants={itemVariants}>
                        <Link to="/contact" className="inline-flex items-center gap-3 text-[#EDEDED] hover:text-white transition-colors group">
                            <span className="font-mono uppercase tracking-widest text-xs">Get in touch</span>
                            <ArrowRight size={14} className="text-[#555] group-hover:text-white transition-colors group-hover:translate-x-1" />
                        </Link>
                    </motion.div>

                </div>

            </motion.div>
        </div>
    );
};

export default About;
