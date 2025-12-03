import React from 'react';
import { motion } from 'framer-motion';
import { Send, Copy, Linkedin, Twitter, Download, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto h-full flex flex-col justify-center px-4 md:px-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-center">
        
        {/* Contact Info */}
        <div className="space-y-10">
          <div>
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-4 tracking-tight leading-tight">Let's build something <span className="text-teal-accent">future-proof.</span></h1>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md">
              Have a project in mind or just want to say hi? I'm currently open for new opportunities.
            </p>
          </div>

          <div className="space-y-4">
            {/* Email Card */}
            <div className="p-5 bg-dark-sec/20 border border-dark-sec/60 rounded-xl hover:bg-dark-sec/40 hover:border-teal-accent/30 transition-all group cursor-pointer" onClick={() => navigator.clipboard.writeText('mertbildik.work@gmail.com')}>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Email</h3>
                <Copy size={14} className="text-gray-600 group-hover:text-teal-accent transition-colors" />
              </div>
              <span className="text-base md:text-lg font-bold text-light-text group-hover:text-teal-accent transition-colors break-all">mertbildik.work@gmail.com</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
               <a href="#" className="flex items-center gap-3 p-4 bg-dark-sec/20 border border-dark-sec/60 rounded-xl hover:bg-teal-accent/5 hover:border-teal-accent/40 transition-all group">
                  <div className="bg-dark-sec/50 p-1.5 rounded-full group-hover:bg-teal-accent group-hover:text-dark-main transition-colors text-gray-400">
                    <Linkedin size={16} />
                  </div>
                  <span className="font-medium text-sm text-gray-300 group-hover:text-light-text">LinkedIn</span>
               </a>
               <a href="#" className="flex items-center gap-3 p-4 bg-dark-sec/20 border border-dark-sec/60 rounded-xl hover:bg-teal-accent/5 hover:border-teal-accent/40 transition-all group">
                  <div className="bg-dark-sec/50 p-1.5 rounded-full group-hover:bg-teal-accent group-hover:text-dark-main transition-colors text-gray-400">
                    <Twitter size={16} />
                  </div>
                  <span className="font-medium text-sm text-gray-300 group-hover:text-light-text">X / Twitter</span>
               </a>
            </div>

             <a href="#" className="flex items-center justify-between p-4 bg-gradient-to-r from-teal-accent/5 to-transparent border border-teal-accent/20 rounded-xl hover:border-teal-accent/50 transition-all group">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-teal-accent/10 text-teal-accent">
                        <Download size={18} />
                    </div>
                    <div>
                        <span className="block font-bold text-light-text text-sm group-hover:text-teal-accent transition-colors">Download CV</span>
                        <span className="text-[10px] text-gray-500 font-mono">PDF Format (2.4 MB)</span>
                    </div>
                </div>
                <ArrowRight size={16} className="text-teal-accent opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
             </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-dark-sec/10 border border-white/5 p-6 md:p-8 rounded-2xl backdrop-blur-md shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-20 bg-teal-accent/5 blur-[60px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          
          <form className="space-y-5 relative z-10">
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-[10px] font-mono text-gray-500 uppercase tracking-widest ml-1">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-dark-main/40 border border-white/10 rounded-lg px-4 py-3 text-light-text text-sm focus:outline-none focus:border-teal-accent/50 focus:bg-dark-main/80 transition-all placeholder:text-gray-700"
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="email" className="text-[10px] font-mono text-gray-500 uppercase tracking-widest ml-1">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-dark-main/40 border border-white/10 rounded-lg px-4 py-3 text-light-text text-sm focus:outline-none focus:border-teal-accent/50 focus:bg-dark-main/80 transition-all placeholder:text-gray-700"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="text-[10px] font-mono text-gray-500 uppercase tracking-widest ml-1">Message</label>
              <textarea 
                id="message" 
                rows={3}
                className="w-full bg-dark-main/40 border border-white/10 rounded-lg px-4 py-3 text-light-text text-sm focus:outline-none focus:border-teal-accent/50 focus:bg-dark-main/80 transition-all resize-none placeholder:text-gray-700"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button 
              type="button"
              className="w-full bg-teal-accent text-dark-main font-bold py-3.5 rounded-lg hover:bg-white transition-all shadow-lg hover:shadow-[0_0_20px_rgba(238,238,238,0.3)] flex items-center justify-center gap-2 text-sm uppercase tracking-wide mt-2"
            >
              Send Message <Send size={14} />
            </button>
          </form>
        </div>

      </div>
    </motion.div>
  );
};

export default Contact;