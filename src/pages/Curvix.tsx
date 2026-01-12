import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { getProjectImages } from '../utils/image-loader';
import BackButton from '../components/ui/BackButton';

const Curvix: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);



    // "Apple-level" ease
    const EASE = [0.16, 1, 0.3, 1];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: EASE }
        }
    };

    const sectionVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.2, ease: EASE }
        }
    };

    const projectImages = getProjectImages('curvix');

    return (
        <div className="w-full pb-32">

            {/* Header Section */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="w-full mb-16 lg:mb-24"
            >
                <motion.div variants={itemVariants} className="mb-16 md:mb-24">
                    <BackButton />
                </motion.div>

                <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-medium tracking-tighter text-white mb-8">
                    Curvix
                </motion.h1>

                <motion.p variants={itemVariants} className="text-xl md:text-2xl text-neutral-400 font-light leading-relaxed mb-12 max-w-xl">
                    A small studio identity I’m building to ship calm, precise design systems.
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-wrap gap-x-12 gap-y-4 pt-8 border-t border-white/[0.08]">
                    <div>
                        <span className="block text-[10px] font-mono text-neutral-600 uppercase tracking-widest mb-1">Role</span>
                        <span className="text-sm text-neutral-300 font-medium">Founder</span>
                    </div>
                    <div>
                        <span className="block text-[10px] font-mono text-neutral-600 uppercase tracking-widest mb-1">Status</span>
                        <span className="text-sm text-neutral-300 font-medium">In progress</span>
                    </div>
                    <div>
                        <span className="block text-[10px] font-mono text-neutral-600 uppercase tracking-widest mb-1">Team</span>
                        <span className="text-sm text-neutral-300 font-medium">Solo lead. Specialists as needed</span>
                    </div>
                </motion.div>
            </motion.div>

            {/* Main Content Stack */}
            {/* Main Content Stack - Grid Layout to match DogRide */}
            {/* Text Sections Grid Group 1 */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 mb-24 md:mb-32">

                {/* Section 1: Overview */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    variants={sectionVariants}
                >
                    <span className="block text-xs font-mono text-neutral-600 uppercase tracking-widest mb-8">Overview</span>
                    <h2 className="text-2xl md:text-3xl text-white font-medium mb-6">What Curvix is</h2>
                    <p className="text-lg text-neutral-500 leading-relaxed font-light">
                        Curvix is my studio brand. It is a container for how I think, how I build, and what I deliver. The goal is simple work that holds up over time.
                    </p>
                </motion.section>

                {/* Section 2: Intent */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    variants={sectionVariants}
                >
                    <span className="block text-xs font-mono text-neutral-600 uppercase tracking-widest mb-8">Intent</span>
                    <h2 className="text-2xl md:text-3xl text-white font-medium mb-6">Why I built it</h2>
                    <p className="text-lg text-neutral-500 leading-relaxed font-light">
                        I wanted one clear standard across web, product, and visuals. I wanted fewer decisions, better structure, and a calmer result. I wanted the work to feel consistent even when the project changes.
                    </p>
                </motion.section>

                {/* Section 3: Output */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    variants={sectionVariants}
                >
                    <span className="block text-xs font-mono text-neutral-600 uppercase tracking-widest mb-8">Output</span>
                    <h2 className="text-2xl md:text-3xl text-white font-medium mb-12">What Curvix ships</h2>

                    <div className="space-y-12">
                        <div className="pl-6 border-l border-white/[0.1]">
                            <h3 className="text-lg text-white font-medium mb-2">Design systems</h3>
                            <p className="text-neutral-500 leading-relaxed font-light">Typography, spacing rules, layout logic, and components that scale.</p>
                        </div>
                        <div className="pl-6 border-l border-white/[0.1]">
                            <h3 className="text-lg text-white font-medium mb-2">Product and web</h3>
                            <p className="text-neutral-500 leading-relaxed font-light">Flows, screens, interaction rules, and build ready handoff.</p>
                        </div>
                        <div className="pl-6 border-l border-white/[0.1]">
                            <h3 className="text-lg text-white font-medium mb-2">Specialists when needed</h3>
                            <p className="text-neutral-500 leading-relaxed font-light">Marketing and photography are added only when the project requires it.</p>
                        </div>
                    </div>
                </motion.section>

                {/* Section 4: Method */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    variants={sectionVariants}
                >
                    <span className="block text-xs font-mono text-neutral-600 uppercase tracking-widest mb-8">Method</span>
                    <h2 className="text-2xl md:text-3xl text-white font-medium mb-12">How I work</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                        <div>
                            <span className="block text-[10px] font-mono text-neutral-600 mb-3">01</span>
                            <h3 className="text-white font-medium mb-2">Define</h3>
                            <p className="text-neutral-500 text-sm">Goal, constraints, audience, success checks.</p>
                        </div>
                        <div>
                            <span className="block text-[10px] font-mono text-neutral-600 mb-3">02</span>
                            <h3 className="text-white font-medium mb-2">Structure</h3>
                            <p className="text-neutral-500 text-sm">Content order, grid, wireframes.</p>
                        </div>
                        <div>
                            <span className="block text-[10px] font-mono text-neutral-600 mb-3">03</span>
                            <h3 className="text-white font-medium mb-2">Build</h3>
                            <p className="text-neutral-500 text-sm">Components, screens, motion rules, final assets.</p>
                        </div>
                        <div>
                            <span className="block text-[10px] font-mono text-neutral-600 mb-3">04</span>
                            <h3 className="text-white font-medium mb-2">Tune</h3>
                            <p className="text-neutral-500 text-sm">Polish, QA, launch support, small improvements.</p>
                        </div>
                    </div>
                </motion.section>

            </div>

            {/* Gallery Section - Full Width */}

            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                variants={sectionVariants}
            >
                <span className="block text-xs font-mono text-neutral-600 uppercase tracking-widest mb-8">Gallery</span>
                <h2 className="text-2xl md:text-3xl text-white font-medium mb-6">Selected screens</h2>
                <p className="text-lg text-neutral-500 leading-relaxed font-light mb-12">
                    A few screens from the Curvix site direction. Built to show the system in use.
                </p>

                <div className="space-y-8">
                    {projectImages.length > 0 ? (
                        <div className="space-y-8">
                            {/* Structured Layout: Home + Grid */}
                            {projectImages.filter(img => img.name.includes('home')).map((img, i) => (
                                <div key={`home-${i}`} className="w-full bg-[#080808] border border-white/[0.08] rounded-sm overflow-hidden">
                                    <img
                                        src={img.src}
                                        alt="Curvix home"
                                        className="w-full h-auto object-cover grayscale-0 transition-none"
                                        loading="lazy"
                                    />
                                </div>
                            ))}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {projectImages.filter(img => !img.name.includes('home')).map((img, i) => (
                                    <div key={i} className="w-full bg-[#080808] border border-white/[0.08] rounded-sm overflow-hidden">
                                        <img
                                            src={img.src}
                                            alt={`Curvix visual ${i + 1}`}
                                            className="w-full h-auto object-cover grayscale-0 transition-none"
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <p className="text-neutral-600 text-sm">No images found.</p>
                    )}
                </div>
            </motion.section>

            {/* Section 6: Operating Model */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 mt-24 md:mt-32">
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    variants={sectionVariants}
                >
                    <span className="block text-xs font-mono text-neutral-600 uppercase tracking-widest mb-8">Operating model</span>
                    <h2 className="text-2xl md:text-3xl text-white font-medium mb-6">How projects run</h2>
                    <p className="text-lg text-neutral-500 leading-relaxed font-light">
                        I lead the design end to end. When a project needs marketing or photography, I bring in freelancers I trust. The client experience stays single threaded. One owner. One system.
                    </p>
                </motion.section>

                {/* Section 7: Now */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    variants={sectionVariants}
                >
                    <span className="block text-xs font-mono text-neutral-600 uppercase tracking-widest mb-8">Now</span>
                    <h2 className="text-2xl md:text-3xl text-white font-medium mb-6">Current focus</h2>
                    <p className="text-lg text-neutral-500 leading-relaxed font-light">
                        I’m building Curvix as a long term studio identity. I take selective work that needs system level thinking and a high finish.
                    </p>
                </motion.section>

            </div>


        </div>
    );
};

export default Curvix;
