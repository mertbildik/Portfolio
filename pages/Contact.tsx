import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Linkedin, Twitter, Download, Copy, Mail, CheckCircle2, AlertCircle, Dribbble, FileText } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const projectTypes = [
    "Website", "Social Media", "Brand Identity", "Presentation", "Other"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    // Simple Validation
    const newErrors: Record<string, string> = {};
    if (!name) newErrors.name = "Please enter your name.";
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) newErrors.email = "Please add a valid email.";
    if (!message) newErrors.message = "Please tell me a bit about the project.";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Simulate Network Request
    setErrors({});
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mertbildik.work@gmail.com');
    // Optional: Add toast notification logic here
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
      {/* 1. Header Section - Left Aligned */}
      <div className="mb-12 max-w-3xl">
        <h1 className="text-h2 font-display font-bold leading-tight text-light-text mb-6">
          Let’s build <span className="text-teal-accent">what’s next.</span>
        </h1>
        <div className="relative pl-6 border-l-2 border-teal-accent/50">
           <p className="text-h6 text-gray-400 font-light leading-relaxed">
              Have a project in mind? Send me a short message and I’ll get back to you soon.
           </p>
        </div>
      </div>

      {/* Main Content Column - Constrained width for readability */}
      <div className="w-full max-w-3xl">
        
        {/* 2. Main Form Card */}
        <div className="w-full p-8 md:p-10 rounded-3xl bg-dark-sec/20 border border-white/5 relative overflow-hidden">
            <AnimatePresence mode="wait">
                {formState === 'success' ? (
                    <motion.div 
                        key="success"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col items-center justify-center py-20 text-center"
                    >
                        <div className="w-20 h-20 rounded-full bg-teal-accent/10 flex items-center justify-center text-teal-accent mb-6">
                            <CheckCircle2 size={40} />
                        </div>
                        <h3 className="text-h4 font-bold text-white mb-2">Message Sent!</h3>
                        <p className="text-gray-400 text-body">I will get back to you soon.</p>
                        <button 
                            onClick={() => { setFormState('idle'); setSelectedType(null); }}
                            className="mt-8 text-sm text-teal-accent hover:text-white transition-colors underline underline-offset-4"
                        >
                            Send another message
                        </button>
                    </motion.div>
                ) : (
                    <motion.form 
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-8"
                    >
                        {/* Name Field */}
                        <div className="space-y-3">
                            <label htmlFor="name" className="text-xs font-mono text-gray-500 uppercase tracking-widest font-bold">Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name"
                                placeholder="John Doe"
                                className={`w-full p-4 rounded-xl bg-dark-main/50 border ${errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/5 focus:border-teal-accent/50'} text-light-text placeholder:text-gray-700 focus:outline-none focus:bg-dark-main focus:shadow-[0_0_20px_-5px_rgba(0,173,181,0.1)] transition-all`}
                            />
                            {errors.name && <p className="text-xs text-red-400 flex items-center gap-1"><AlertCircle size={12}/> {errors.name}</p>}
                        </div>

                        {/* Email Field */}
                        <div className="space-y-3">
                            <label htmlFor="email" className="text-xs font-mono text-gray-500 uppercase tracking-widest font-bold">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email"
                                placeholder="john@example.com"
                                className={`w-full p-4 rounded-xl bg-dark-main/50 border ${errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-white/5 focus:border-teal-accent/50'} text-light-text placeholder:text-gray-700 focus:outline-none focus:bg-dark-main focus:shadow-[0_0_20px_-5px_rgba(0,173,181,0.1)] transition-all`}
                            />
                             {errors.email && <p className="text-xs text-red-400 flex items-center gap-1"><AlertCircle size={12}/> {errors.email}</p>}
                        </div>

                        {/* Project Type Selector */}
                        <div className="space-y-3">
                            <label className="text-xs font-mono text-gray-500 uppercase tracking-widest font-bold">Project Type</label>
                            <div className="flex flex-wrap gap-3">
                                {projectTypes.map(type => (
                                    <button
                                        key={type}
                                        type="button"
                                        onClick={() => setSelectedType(type)}
                                        className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                                            selectedType === type 
                                            ? 'bg-white text-dark-main border-white' 
                                            : 'bg-transparent text-gray-400 border-white/10 hover:border-white/30 hover:text-white'
                                        }`}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Message Field */}
                        <div className="space-y-3">
                            <label htmlFor="message" className="text-xs font-mono text-gray-500 uppercase tracking-widest font-bold">Message</label>
                            <textarea 
                                id="message" 
                                name="message"
                                rows={5}
                                placeholder="Tell me about the goals, timeline, and budget..."
                                className={`w-full p-4 rounded-xl bg-dark-main/50 border ${errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-white/5 focus:border-teal-accent/50'} text-light-text placeholder:text-gray-700 focus:outline-none focus:bg-dark-main focus:shadow-[0_0_20px_-5px_rgba(0,173,181,0.1)] transition-all resize-none`}
                            ></textarea>
                            {errors.message && <p className="text-xs text-red-400 flex items-center gap-1"><AlertCircle size={12}/> {errors.message}</p>}
                        </div>

                        {/* Submit Action */}
                        <div className="pt-2">
                            <button 
                                type="submit"
                                disabled={formState === 'submitting'}
                                className="w-full py-4 rounded-xl bg-white text-dark-main font-bold text-sm tracking-widest uppercase hover:bg-gray-100 transition-all flex items-center justify-center gap-3 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-white/5"
                            >
                                {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                                {formState !== 'submitting' && <Send size={16} />}
                            </button>
                            <p className="text-center text-xs text-gray-500 mt-4 font-mono">
                                I usually reply within one business day.
                            </p>
                        </div>
                    </motion.form>
                )}
            </AnimatePresence>
        </div>

        {/* 3. Compact Contact Details Row */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Email - Copyable */}
            <div 
                onClick={handleCopyEmail}
                className="group md:col-span-2 p-6 rounded-2xl bg-dark-sec/20 border border-white/5 hover:border-white/10 hover:bg-white/5 transition-all cursor-pointer flex items-center justify-between"
            >
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-white transition-colors">
                        <Mail size={20} />
                    </div>
                    <div>
                        <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-1">Email</span>
                        <span className="text-lg font-bold text-light-text group-hover:text-white transition-colors">mertbildik.work@gmail.com</span>
                    </div>
                </div>
                <Copy size={18} className="text-gray-600 group-hover:text-white transition-colors" />
            </div>

            {/* Social Links Grid */}
            <div className="p-6 rounded-2xl bg-dark-sec/20 border border-white/5 flex items-center justify-between">
                 <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all" title="LinkedIn">
                        <Linkedin size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all" title="Dribbble">
                        <Dribbble size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all" title="X / Twitter">
                        <Twitter size={18} />
                    </a>
                 </div>
                 <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Follow</span>
            </div>

            {/* Download CV */}
            <a href="#" className="group p-6 rounded-2xl bg-dark-sec/20 border border-white/5 hover:border-white/10 hover:bg-white/5 transition-all flex items-center justify-between">
                <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-white transition-colors">
                        <FileText size={20} />
                    </div>
                    <div>
                        <span className="font-bold text-light-text group-hover:text-white block">Download CV</span>
                        <span className="text-xs text-gray-500">PDF (2.4 MB)</span>
                    </div>
                </div>
                <Download size={18} className="text-gray-600 group-hover:text-white transition-colors" />
            </a>

        </div>

      </div>
    </motion.div>
  );
};

export default Contact;