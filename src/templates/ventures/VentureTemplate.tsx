import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import BackButton from '../../components/BackButton';

// Based on VENTURE_CONTENT shape in src/data/venture-content.ts
// I'll define an interface locally or import if available, but for template modularity I prefer defining the expected prop shape here.
export interface VentureData {
    title: string;
    role: string;
    timeline?: string;
    location?: string;
    sections: {
        title: string;
        text?: string;
        items?: string[];
    }[];
}

interface VentureTemplateProps {
    data: VentureData | undefined;
}

const VentureTemplate: React.FC<VentureTemplateProps> = ({ data }) => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [data?.title]); // Use title or another stable key to trigger scroll reset on change

    if (!data) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white">
                <p>Content not found.</p>
                <button onClick={() => navigate('/')} className="ml-4 underline">
                    Go Home
                </button>
            </div>
        );
    }

    // Animation constants for "Apple-level" smooth feeling
    const EASE_PRECISE = [0.16, 1, 0.3, 1];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 1.2, ease: EASE_PRECISE, staggerChildren: 0.05 }
        }
    };

    const lineVariants = {
        hidden: { scaleX: 0, opacity: 0 },
        visible: {
            scaleX: 1,
            opacity: 1,
            transition: { duration: 1.5, ease: EASE_PRECISE }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: EASE_PRECISE }
        }
    };

    return (
        // Transparent background to respect GlobalBackground
        <div className="min-h-screen w-full text-neutral-200 font-sans selection:bg-white/20 selection:text-white pb-32">

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative"
            >
                {/* Back Link - Absolute precision placement */}
                <motion.div variants={itemVariants} className="mb-16 md:mb-24">
                    <BackButton />
                </motion.div>

                {/* Hero Section - Geometric & Deconstructed */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12 mb-32 relative">
                    {/* Vertical Grid Line Hook */}
                    <div className="hidden lg:block absolute top-0 -bottom-32 left-0 w-[1px] bg-white/[0.08]" />

                    <div className="lg:col-span-8 relative">
                        <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter text-white mb-8 leading-[0.9]">
                            {data.title}
                        </motion.h1>

                        <motion.div variants={itemVariants} className="flex flex-col gap-4 max-w-xl">
                            <div className="w-12 h-[1px] bg-white/30 mb-2" />
                            <p className="text-xl md:text-2xl font-light text-neutral-300 leading-relaxed">
                                {data.role}
                            </p>
                        </motion.div>
                    </div>

                    <motion.div variants={itemVariants} className="lg:col-span-4 flex flex-col justify-end lg:pl-12 border-l border-white/[0.08] lg:border-none">
                        <div className="flex flex-col gap-8">
                            {/* Dynamic Header Details */}
                            {data.timeline && (
                                <div className="flex flex-col gap-1">
                                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Timeline</span>
                                    <span className="text-sm font-light text-neutral-300">{data.timeline}</span>
                                </div>
                            )}
                            {data.location && (
                                <div className="flex flex-col gap-1">
                                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Location</span>
                                    <span className="text-sm font-light text-neutral-300">{data.location}</span>
                                </div>
                            )}
                            <div className="flex flex-col gap-1">
                                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Role</span>
                                <span className="text-sm font-light text-neutral-300">{data.role}</span>
                            </div>
                        </div>
                    </motion.div>
                </div>


                {/* Horizontal Divider - Precise */}
                <motion.div variants={lineVariants} className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.15] to-transparent mb-24 origin-left" />


                {/* Main Content Grid - Science / Lab Aesthetic */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-20 lg:gap-x-12">

                    {/* Dynamic Rendering of Sections in a Smart Grid */}
                    {/* We'll map through sections and decide layout based on index for variety, or keep strict grid */}

                    {/* Primary Column (First 3 sections usually) */}
                    <div className="lg:col-span-8 grid grid-cols-1 gap-16">
                        {data.sections.slice(0, 3).map((section, idx) => (
                            <motion.div key={idx} variants={itemVariants} className="flex flex-col gap-6">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-1 h-1 bg-white/40 rounded-full" />
                                    <h3 className="text-xs font-mono text-neutral-400 uppercase tracking-widest">{section.title}</h3>
                                </div>
                                {section.text ? (
                                    <p className="text-xl md:text-2xl font-light text-neutral-300 leading-relaxed max-w-2xl">
                                        {section.text}
                                    </p>
                                ) : (
                                    <ul className="flex flex-col gap-4">
                                        {section.items?.map((item, i) => (
                                            <li key={i} className="text-lg md:text-xl font-light text-neutral-300 leading-relaxed border-l border-white/[0.05] pl-4 hover:border-white/20 transition-colors duration-500">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                            </motion.div>
                        ))}
                    </div>

                    {/* Secondary Column (Remaining sections) */}
                    <div className="lg:col-span-4 flex flex-col gap-16 lg:pl-12 lg:border-l border-white/[0.08]">
                        {data.sections.slice(3).map((section, idx) => (
                            <motion.div key={idx} variants={itemVariants} className="flex flex-col gap-4">
                                <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-widest">{section.title}</h3>
                                {section.items ? (
                                    <ul className="flex flex-col gap-2">
                                        {section.items.map((item, i) => (
                                            <li key={i} className="text-sm font-light text-neutral-400">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-sm font-light text-neutral-400">
                                        {section.text}
                                    </p>
                                )}
                            </motion.div>
                        ))}
                    </div>

                </div>

                {/* Footer Divider */}
                <motion.div variants={lineVariants} className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.05] to-transparent mt-32" />

            </motion.div>
        </div>
    );
};

export default VentureTemplate;
