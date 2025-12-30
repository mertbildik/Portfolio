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
                    <div className="relative w-full aspect-[3/4] lg:aspect-[4/5] rounded-2xl overflow-hidden bg-dark-sec/20 border border-white/5 shadow-2xl backdrop-blur-sm group">
                        <img
                            src={mertPhoto}
                            alt="Mert Bildik"
                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                        />

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-main/80 via-transparent to-transparent pointer-events-none" />

                        {/* Location Pill */}
                        <div className="absolute bottom-6 left-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark-main/80 border border-white/10 text-xs font-mono text-gray-300 backdrop-blur-md shadow-lg">
                                <MapPin size={12} className="text-teal-accent" />
                                <span>Warsaw, PL</span>
                            </div>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4 mt-8 pl-2">
                        <a href="#" className="p-3 text-gray-400 hover:text-teal-accent transition-colors duration-300">
                            <Linkedin size={20} />
                        </a>
                        <a href="#" className="p-3 text-gray-400 hover:text-teal-accent transition-colors duration-300">
                            <Twitter size={20} />
                        </a>
                        <a href="#" className="p-3 text-gray-400 hover:text-teal-accent transition-colors duration-300">
                            <Mail size={20} />
                        </a>
                    </div>
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
                        <h1 className="text-h2 md:text-h1 font-display font-bold leading-h1 tracking-h1 text-light-text">
                            Hey, I’m Mert. <br />
                            <span className="text-gray-400 text-h4 font-sans font-medium block mt-2 tracking-tight">Born in Izmir, now based in Warsaw.</span>
                        </h1>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="relative pl-6 border-l-2 border-teal-accent/50"
                        >
                            <p className="text-h6 text-gray-400 font-light leading-p tracking-h6 max-w-xl">
                                Since I was a kid, I’ve always been into finding easier ways to do things with tech. I used to spend hours on the computer, not just for fun, but to make life a little smoother.
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
                                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">About Me</span>
                            </div>
                            <div className="col-span-1 lg:col-span-3 pl-4 border-l border-teal-accent/30">
                                <p className="text-h6 font-display font-medium text-light-text leading-tight mb-4 tracking-tight">
                                    I’ve always been obsessed with making things easier.
                                </p>
                                <div className="space-y-4 text-body text-gray-400 leading-p font-light">
                                    <p>
                                        Since I was a kid, I looked for simpler ways to do things with tech. I spent hours on the computer, not just for fun, but to make life smoother.
                                    </p>
                                    <p>
                                        I’m a big basketball and football fan, but design is where I feel most at home.
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
                                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">How I Work</span>
                            </div>
                            <div className="col-span-1 lg:col-span-3 pl-4 border-l border-teal-accent/30">
                                <p className="text-h6 font-display font-medium text-light-text leading-tight mb-4 tracking-tight">
                                    Calm process. Clear thinking. No drama.
                                </p>
                                <div className="space-y-4 text-body text-gray-400 leading-p font-light">
                                    <p>
                                        After graduating, I worked in a corporate role. It helped me grow fast and understand how businesses operate.
                                    </p>
                                    <p>
                                        Then I started my own studio so I could work more freely and take on projects I actually care about. I work best with people who value clarity and a good process.
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
                                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">What Drives Me</span>
                            </div>
                            <div className="col-span-1 lg:col-span-3 pl-4 border-l border-teal-accent/30">
                                <p className="text-h6 font-display font-medium text-light-text leading-tight mb-4 tracking-tight">
                                    Design is reducing friction so people can move faster.
                                </p>
                                <div className="space-y-4 text-body text-gray-400 leading-p font-light">
                                    <p>
                                        Anything that makes life easier grabs my attention. I’m curious about systems, tools, and ways of thinking that bring clarity.
                                    </p>
                                    <p>
                                        I try to pass what I learn into the work, so the result feels focused and effortless.
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
                                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-dark-main font-bold text-body transition-all hover:scale-105 active:scale-95 shadow-lg shadow-white/10"
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
