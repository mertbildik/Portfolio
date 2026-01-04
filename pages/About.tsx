import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Linkedin, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import mertPhoto from '../assets/mert.jpeg';

const About: React.FC = () => {
    return (
        <div className="w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-12 items-start">

                {/* Left Column: Photo Card 
                   - Desktop: 5 cols width, Sticky
                   - Tablet/Mobile: Full width
                */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="col-span-4 md:col-span-8 lg:col-span-5 lg:sticky lg:top-32 h-fit"
                >
                    <div className="relative w-full aspect-[3/4] lg:aspect-[4/5] rounded-md overflow-hidden bg-surface/20 border border-white/5 shadow-2xl backdrop-blur-sm group">
                        <img
                            src={mertPhoto}
                            alt="Mert Bildik"
                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                        />

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-main/80 via-transparent to-transparent pointer-events-none" />

                        {/* Location Pill */}
                        <div className="absolute bottom-6 left-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-void/80 border border-white/10 text-xs font-mono text-text-muted backdrop-blur-md shadow-lg">
                                <MapPin size={12} className="text-white" />
                                <span>Warsaw, PL</span>
                            </div>
                        </div>
                    </div>

                    {/* Social Links Removed */}
                </motion.div>

                {/* Right Column: Content 
                   - Desktop: 7 cols width (starts at col 6)
                */}
                <div className="col-span-4 md:col-span-8 lg:col-span-7 lg:col-start-7 flex flex-col gap-16 pb-20 pt-4 lg:pt-0">

                    {/* Hero Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-6"
                    >
                        <h1 className="text-h2 md:text-h1 font-medium leading-h1 tracking-tight text-text-primary">
                            Hey, I’m Mert. <br />
                            <span className="text-text-muted text-h4 font-sans font-normal block mt-2 tracking-tight">Born in Izmir, now based in Warsaw.</span>
                        </h1>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="relative pl-6 border-l border-border-subtle"
                        >
                            <p className="text-h6 text-text-muted font-normal leading-p tracking-normal max-w-xl">
                                I’ve always been curious about using technology to make things simpler. As a kid, I spent hours on the computer, not for fun only, but to smooth out everyday problems. That way of thinking never left.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Content Sections */}
                    <div className="space-y-12">

                        {/* Section: ABOUT ME */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8 border-t border-white/5 pt-8"
                        >
                            <div className="col-span-1">
                                <span className="text-xs font-mono text-text-muted uppercase tracking-widest">About Me</span>
                            </div>
                            <div className="col-span-1 lg:col-span-3 pl-4 border-l border-white/10">
                                <div className="space-y-4 text-body text-text-muted leading-p font-normal">
                                    <p>
                                        I follow basketball and football closely, but design is where I feel most grounded.
                                    </p>
                                </div>
                            </div>
                        </motion.section>

                        {/* Section: HOW I WORK */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8 border-t border-white/5 pt-8"
                        >
                            <div className="col-span-1">
                                <span className="text-xs font-mono text-text-muted uppercase tracking-widest">How I Work</span>
                            </div>
                            <div className="col-span-1 lg:col-span-3 pl-4 border-l border-white/10">
                                <div className="space-y-4 text-body text-text-muted leading-p font-normal">
                                    <p>
                                        After graduating, I spent time in a large corporate environment. It taught me how businesses run and helped me grow fast. Later, I started my own studio to work with more freedom and focus on projects I truly care about.
                                    </p>
                                    <p>
                                        Today, I choose to work with people and teams I align with. Clarity, a shared mindset, and healthy collaboration matter to me.
                                    </p>
                                    <p>
                                        If we work together, you’ll get someone who listens, understands the goal, and builds the right solution without noise or distraction.
                                    </p>
                                </div>
                            </div>
                        </motion.section>

                        {/* Section: WHAT DRIVES ME */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8 border-t border-white/5 pt-8"
                        >
                            <div className="col-span-1">
                                <span className="text-xs font-mono text-text-muted uppercase tracking-widest">What Drives Me</span>
                            </div>
                            <div className="col-span-1 lg:col-span-3 pl-4 border-l border-white/10">
                                <div className="space-y-4 text-body text-text-muted leading-p font-normal">
                                    <p>
                                        I’m drawn to systems and tools that make life easier and clearer. I enjoy learning, both inside and outside the industry, and sharing what I’ve learned with the people I work with.
                                    </p>
                                    <p>
                                        Design is not about looking impressive. It’s about helping people move forward with less friction and more focus.
                                    </p>
                                </div>
                            </div>
                        </motion.section>
                    </div>

                    {/* CTA Section - Matches Home.tsx Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="grid grid-cols-1 lg:grid-cols-4 pt-8"
                    >
                        <div className="lg:col-start-2 lg:col-span-3 pl-4">
                            <Link
                                to="/contact"
                                className="group inline-flex items-center gap-2 px-8 py-4 rounded-md bg-text-primary text-text-inverse font-medium text-body transition-all hover:scale-[0.98] active:scale-[0.96] shadow-lg shadow-white/5"
                            >
                                Get in touch <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                            </Link>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default About;
