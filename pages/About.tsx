import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Linkedin, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full flex flex-col justify-center max-w-5xl mx-auto px-4 md:px-6"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        
        {/* Left Column: Photo & Quick Connect - Adjusted to 5 cols for better balance */}
        <div className="lg:col-span-5 space-y-6">
            <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="aspect-[4/5] rounded-2xl bg-dark-sec relative overflow-hidden group w-full max-w-sm mx-auto shadow-2xl ring-1 ring-white/5"
            >
                <img 
                    src="https://picsum.photos/400/500?grayscale" 
                    alt="Mert Bildik" 
                    className="object-cover w-full h-full opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 filter grayscale" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-main via-transparent to-transparent opacity-80"></div>
                
                <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
                    <div className="flex items-center gap-2 text-teal-accent text-[10px] font-mono font-bold bg-dark-main/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-teal-accent/20">
                        <MapPin size={10} /> Warsaw, PL
                    </div>
                </div>
            </motion.div>

            <div className="flex justify-center lg:justify-start gap-4">
                 <a href="#" className="p-2.5 rounded-full bg-dark-sec/30 border border-white/5 text-gray-400 hover:text-teal-accent hover:border-teal-accent/30 hover:bg-teal-accent/5 transition-all">
                    <Linkedin size={18} />
                 </a>
                 <a href="#" className="p-2.5 rounded-full bg-dark-sec/30 border border-white/5 text-gray-400 hover:text-teal-accent hover:border-teal-accent/30 hover:bg-teal-accent/5 transition-all">
                    <Twitter size={18} />
                 </a>
                 <a href="#" className="p-2.5 rounded-full bg-dark-sec/30 border border-white/5 text-gray-400 hover:text-teal-accent hover:border-teal-accent/30 hover:bg-teal-accent/5 transition-all">
                    <Mail size={18} />
                 </a>
            </div>
        </div>

        {/* Right Column: Content - 7 cols */}
        <div className="lg:col-span-7 space-y-8 lg:space-y-10">
            <div>
                <motion.h1 
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-3xl md:text-5xl font-display font-bold mb-4 tracking-tight"
                >
                    Hey, I’m Mert. <br/>
                    <span className="text-teal-accent text-xl md:text-2xl font-sans font-medium block mt-2 opacity-90">Born in Izmir, now based in Warsaw.</span>
                </motion.h1>
                
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-300 text-sm md:text-base leading-relaxed max-w-prose"
                >
                    <p>
                        Since I was a kid, I’ve always been into finding easier ways to do things with tech. I used to spend hours on the computer, not just for fun, but to make life a little smoother.
                    </p>
                </motion.div>
            </div>

            <div className="space-y-6">
                <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="relative pl-5 border-l border-teal-accent/30"
                >
                    <h2 className="text-sm font-bold font-mono uppercase tracking-widest text-gray-500 mb-2">How I work</h2>
                    <div className="space-y-2 text-gray-400 text-sm leading-relaxed max-w-md">
                        <p>
                            After corporate life, I started my own studio to work more freely. Now I look for clarity and shared mindset.
                        </p>
                        <p className="text-light-text font-medium">
                            You’ll get someone who listens and focuses on building the right solution without drama.
                        </p>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="relative pl-5 border-l border-teal-accent/30"
                >
                     <h2 className="text-sm font-bold font-mono uppercase tracking-widest text-gray-500 mb-2">What drives me</h2>
                    <div className="space-y-2 text-gray-400 text-sm leading-relaxed max-w-md">
                        <p>
                            I’m curious about systems and tools that bring clarity. Design isn’t about being fancy.
                        </p>
                        <p className="text-teal-accent">
                            It’s about helping people get where they want to go, with less friction and more focus.
                        </p>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="pt-2"
            >
                <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-2 text-teal-accent font-semibold text-sm border-b border-teal-accent/20 hover:border-teal-accent pb-0.5 transition-all group"
                >
                    Let's talk <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                </Link>
            </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;