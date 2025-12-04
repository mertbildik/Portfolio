import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Linkedin, Twitter, Mail, Upload, ImageOff } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  // Smart Image Loading Strategy - Preserved exactly as requested
  // We try multiple extensions in case the user saved it as JPG or WebP
  const imageCandidates = ['/mert.png', '/mert.jpg', '/mert.jpeg', '/mert.webp'];
  const [currentCandidateIndex, setCurrentCandidateIndex] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [customImage, setCustomImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageError = () => {
    if (currentCandidateIndex < imageCandidates.length - 1) {
      // Try the next extension
      setCurrentCandidateIndex((prev) => prev + 1);
    } else {
      // All candidates failed
      setImageError(true);
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setCustomImage(imageUrl);
      setImageError(false);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      // Standardized Max Width and Alignment
      className="w-full max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Photo - 5 cols */}
        <div className="col-span-4 md:col-span-4 lg:col-span-5 space-y-8">
            <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                // Placeholder uses dark-sec base
                className="aspect-[4/5] rounded-2xl bg-dark-sec relative overflow-hidden group w-full shadow-2xl ring-1 ring-white/5"
            >
                {/* Hidden File Input */}
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleFileSelect} 
                  accept="image/*" 
                  className="hidden" 
                />

                {customImage ? (
                   <img 
                      src={customImage} 
                      alt="Mert Bildik" 
                      className="object-cover w-full h-full opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                   />
                ) : !imageError ? (
                  <img 
                      src={imageCandidates[currentCandidateIndex]} 
                      alt="Mert Bildik" 
                      className="object-cover w-full h-full opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                      onError={handleImageError}
                  />
                ) : (
                  // Fallback UI
                  <div className="w-full h-full flex flex-col items-center justify-center bg-dark-sec/30 text-gray-500 group-hover:bg-dark-sec/50 transition-colors p-8 text-center border-2 border-dashed border-white/5 group-hover:border-teal-accent/20">
                     <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6 ring-1 ring-white/10 group-hover:scale-110 transition-transform group-hover:bg-teal-accent/10">
                        <ImageOff size={32} className="text-gray-600 group-hover:text-teal-accent transition-colors" />
                     </div>
                     <span className="text-h6 font-display font-bold text-light-text mb-2 block">Image not found</span>
                     <p className="text-xs font-mono opacity-60 leading-relaxed max-w-[200px] mx-auto mb-6">
                        We couldn't find <b>mert.png</b> in your project folder.
                     </p>
                     
                     <button 
                        onClick={triggerFileInput}
                        className="flex items-center gap-2 px-5 py-2.5 bg-white/5 text-gray-300 border border-white/10 text-sm font-bold rounded-full hover:bg-white hover:text-dark-main transition-all active:scale-95"
                     >
                        <Upload size={16} /> Upload Photo
                     </button>
                  </div>
                )}
                
                {/* Overlay Gradient */}
                {(customImage || !imageError) && (
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-main via-transparent to-transparent opacity-60 pointer-events-none"></div>
                )}
                
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end z-10 pointer-events-none">
                    <div className="flex items-center gap-2 text-gray-300 text-xs font-mono font-bold bg-dark-main/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                        <MapPin size={12} /> Warsaw, PL
                    </div>
                </div>
            </motion.div>

            <div className="flex gap-4 justify-center md:justify-start">
                 {/* Social Buttons - Dark Teal Hover */}
                 <a href="#" className="p-4 rounded-full bg-dark-sec/20 border border-white/5 text-gray-400 hover:text-teal-accent hover:border-teal-accent/20 hover:bg-teal-accent/10 transition-all">
                    <Linkedin size={20} />
                 </a>
                 <a href="#" className="p-4 rounded-full bg-dark-sec/20 border border-white/5 text-gray-400 hover:text-teal-accent hover:border-teal-accent/20 hover:bg-teal-accent/10 transition-all">
                    <Twitter size={20} />
                 </a>
                 <a href="#" className="p-4 rounded-full bg-dark-sec/20 border border-white/5 text-gray-400 hover:text-teal-accent hover:border-teal-accent/20 hover:bg-teal-accent/10 transition-all">
                    <Mail size={20} />
                 </a>
            </div>
        </div>

        {/* Right Column: Content - 7 cols */}
        <div className="col-span-4 md:col-span-4 lg:col-span-7 space-y-12 pl-0 lg:pl-8 mt-8 lg:mt-0">
            {/* Standardized Margin Bottom (mb-20) */}
            <div className="mb-20">
                <motion.h1 
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-h2 font-display font-bold mb-6 tracking-h2 leading-h2 text-light-text"
                >
                    Hey, I’m Mert. <br/>
                    <span className="text-gray-400 text-h5 font-sans font-medium block mt-3 opacity-90 tracking-normal">Born in Izmir, now based in Warsaw.</span>
                </motion.h1>
                
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative pl-6 border-l-2 border-teal-accent/50"
                >
                    <p className="text-h6 text-gray-400 font-light leading-p tracking-h6 max-w-prose">
                        Since I was a kid, I’ve always been into finding easier ways to do things with tech. I used to spend hours on the computer, not just for fun, but to make life a little smoother.
                    </p>
                </motion.div>
            </div>

            <div className="space-y-8">
                <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="relative pl-6 border-l border-teal-accent/30"
                >
                    <h2 className="text-xs font-bold font-mono uppercase tracking-widest text-gray-500 mb-3">How I work</h2>
                    <div className="space-y-3 text-gray-400 text-body leading-p max-w-md">
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
                    className="relative pl-6 border-l border-teal-accent/30"
                >
                     <h2 className="text-xs font-bold font-mono uppercase tracking-widest text-gray-500 mb-3">What drives me</h2>
                    <div className="space-y-3 text-gray-400 text-body leading-p max-w-md">
                        <p>
                            I’m curious about systems and tools that bring clarity. Design isn’t about being fancy.
                        </p>
                        <p className="text-light-text">
                            It’s about helping people get where they want to go, with less friction and more focus.
                        </p>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="pt-4"
            >
                <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-3 text-teal-accent font-semibold text-body border-b border-teal-accent/20 hover:border-teal-accent pb-1 transition-all group"
                >
                    Let's talk <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
            </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;