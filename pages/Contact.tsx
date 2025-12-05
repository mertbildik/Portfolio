import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Linkedin, Dribbble, Copy, Check, ArrowRight, FileText, CheckCircle2, AlertCircle, Loader2, Download } from 'lucide-react';

const LiveClock: React.FC = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatter = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Warsaw',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  const timeString = formatter.format(date);

  return (
    <div className="flex flex-col items-start">
        <span className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">Local Time</span>
        <div className="flex items-baseline gap-3">
            <div className="flex text-4xl md:text-5xl font-display font-bold text-light-text tracking-tighter leading-none h-10 md:h-12 overflow-hidden">
                 {timeString.split('').map((char, index) => (
                    <div key={index} className={`relative flex justify-center ${char === ':' ? 'w-[0.25em]' : 'w-[0.6em]'}`}>
                        <AnimatePresence mode="popLayout" initial={false}>
                            <motion.span
                                key={char}
                                initial={{ y: "100%", opacity: 0, filter: "blur(4px)" }}
                                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                                exit={{ y: "-100%", opacity: 0, filter: "blur(4px)" }}
                                transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                                className="block"
                            >
                                {char}
                            </motion.span>
                        </AnimatePresence>
                    </div>
                ))}
            </div>
            <span className="text-sm font-medium text-teal-accent mb-1">Warsaw, PL</span>
        </div>
    </div>
  );
};

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [emailCopied, setEmailCopied] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  
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
    }, 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mertbildik.work@gmail.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const toggleProjectType = (type: string) => {
    setSelectedTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type) 
        : [...prev, type]
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-7xl mx-auto flex flex-col flex-1"
    >
      {/* Header - Unchanged */}
      <div className="mb-12 md:mb-20">
          <h1 className="text-h2 font-display font-bold leading-tight text-light-text mb-6 tracking-h2">
          Let’s build <span className="text-teal-accent">what’s next.</span>
          </h1>
          <div className="relative pl-6 border-l-2 border-teal-accent/50">
            <p className="text-h6 text-gray-400 font-light leading-p tracking-h6 max-w-xl">
                Have a project in mind? Send me a message and let's discuss.
            </p>
          </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 flex-1">
        
        {/* Main Form Area */}
        <div className="flex-1">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                // Improved Glassmorphism Container
                className="relative p-8 md:p-10 rounded-[2rem] bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/5 backdrop-blur-xl shadow-2xl overflow-hidden"
            >
                 {/* Decorative Glow */}
                 <div className="absolute -top-20 -right-20 w-64 h-64 bg-teal-accent/10 rounded-full blur-[80px] pointer-events-none"></div>

                <AnimatePresence mode="wait">
                    {formState === 'success' ? (
                        <motion.div 
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex flex-col items-center justify-center py-20 text-center min-h-[400px]"
                        >
                            <motion.div 
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                className="w-24 h-24 rounded-full bg-gradient-to-br from-teal-accent to-teal-600 flex items-center justify-center text-dark-main mb-8 shadow-lg shadow-teal-accent/20"
                            >
                                <CheckCircle2 size={48} strokeWidth={2.5} />
                            </motion.div>
                            <h3 className="text-h4 font-bold text-white mb-3">Message Received!</h3>
                            <p className="text-gray-400 text-body max-w-xs mx-auto mb-8">
                                Thanks for reaching out. I'll review your message and get back to you shortly.
                            </p>
                            <button 
                                onClick={() => { setFormState('idle'); setSelectedTypes([]); }}
                                className="px-8 py-3 rounded-full border border-white/10 text-sm font-bold text-white hover:bg-white hover:text-dark-main transition-all"
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
                            className="flex flex-col gap-8 relative z-10"
                        >
                            {/* Input Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3 group">
                                    <label htmlFor="name" className={`text-xs font-mono uppercase tracking-widest font-bold transition-colors ${focusedField === 'name' ? 'text-teal-accent' : 'text-gray-500'}`}>Name</label>
                                    <motion.div whileTap={{ scale: 0.995 }}>
                                        <input 
                                            type="text" 
                                            id="name" 
                                            name="name"
                                            onFocus={() => setFocusedField('name')}
                                            onBlur={() => setFocusedField(null)}
                                            placeholder="John Doe"
                                            className={`w-full p-4 rounded-xl bg-dark-main/30 border text-light-text placeholder:text-gray-700 focus:placeholder:text-gray-400 focus:outline-none transition-all duration-300 ${errors.name ? 'border-red-500/50' : 'border-white/5 hover:border-teal-accent focus:border-[#006064] focus:bg-dark-main/50'}`}
                                        />
                                    </motion.div>
                                    {errors.name && <p className="text-xs text-red-400 flex items-center gap-1 animate-pulse"><AlertCircle size={12}/> {errors.name}</p>}
                                </div>

                                <div className="space-y-3 group">
                                    <label htmlFor="email" className={`text-xs font-mono uppercase tracking-widest font-bold transition-colors ${focusedField === 'email' ? 'text-teal-accent' : 'text-gray-500'}`}>Email</label>
                                    <motion.div whileTap={{ scale: 0.995 }}>
                                        <input 
                                            type="email" 
                                            id="email" 
                                            name="email"
                                            onFocus={() => setFocusedField('email')}
                                            onBlur={() => setFocusedField(null)}
                                            placeholder="john@example.com"
                                            className={`w-full p-4 rounded-xl bg-dark-main/30 border text-light-text placeholder:text-gray-700 focus:placeholder:text-gray-400 focus:outline-none transition-all duration-300 ${errors.email ? 'border-red-500/50' : 'border-white/5 hover:border-teal-accent focus:border-[#006064] focus:bg-dark-main/50'}`}
                                        />
                                    </motion.div>
                                    {errors.email && <p className="text-xs text-red-400 flex items-center gap-1 animate-pulse"><AlertCircle size={12}/> {errors.email}</p>}
                                </div>
                            </div>

                            {/* Project Types */}
                            <div className="space-y-3">
                                <label className="text-xs font-mono text-gray-500 uppercase tracking-widest font-bold">Project Type</label>
                                <div className="flex flex-wrap gap-3">
                                    {projectTypes.map(type => {
                                        const isSelected = selectedTypes.includes(type);
                                        return (
                                            <motion.button
                                                key={type}
                                                type="button"
                                                onClick={() => toggleProjectType(type)}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 border ${
                                                    isSelected 
                                                    ? 'bg-teal-accent border-teal-accent text-dark-main shadow-[0_0_15px_-3px_rgba(0,173,181,0.5)]' 
                                                    : 'bg-white/5 border-white/5 text-gray-400 hover:border-teal-accent hover:text-teal-accent hover:bg-teal-accent/10'
                                                }`}
                                            >
                                                {type}
                                            </motion.button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Message */}
                            <div className="space-y-3 group">
                                <label htmlFor="message" className={`text-xs font-mono uppercase tracking-widest font-bold transition-colors ${focusedField === 'message' ? 'text-teal-accent' : 'text-gray-500'}`}>Message</label>
                                <motion.div whileTap={{ scale: 0.995 }}>
                                    <textarea 
                                        id="message" 
                                        name="message"
                                        rows={4}
                                        onFocus={() => setFocusedField('message')}
                                        onBlur={() => setFocusedField(null)}
                                        placeholder="Tell me about the goals, timeline, and budget..."
                                        className={`w-full p-4 rounded-xl bg-dark-main/30 border text-light-text placeholder:text-gray-700 focus:placeholder:text-gray-400 focus:outline-none transition-all duration-300 resize-none ${errors.message ? 'border-red-500/50' : 'border-white/5 hover:border-teal-accent focus:border-[#006064] focus:bg-dark-main/50'}`}
                                    ></textarea>
                                </motion.div>
                                {errors.message && <p className="text-xs text-red-400 flex items-center gap-1 animate-pulse"><AlertCircle size={12}/> {errors.message}</p>}
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4">
                                <motion.button 
                                    type="submit"
                                    disabled={formState === 'submitting'}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group w-full py-4 rounded-xl bg-white text-dark-main font-bold text-sm tracking-widest uppercase hover:bg-gray-100 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed shadow-xl shadow-white/5 relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                                    
                                    {formState === 'submitting' ? (
                                        <>
                                            <Loader2 size={18} className="animate-spin" />
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                        </>
                                    )}
                                </motion.button>
                            </div>
                        </motion.form>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>

        {/* Info Column */}
        <div className="lg:w-1/3 flex flex-col justify-end gap-12 pb-8">
            
             {/* Email Section */}
             <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="group"
            >
                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3 block">Contact Details</span>
                <div 
                    onClick={handleCopyEmail}
                    className="cursor-pointer inline-flex items-center gap-3 group/email"
                    role="button"
                    title="Click to copy"
                >
                    <span className="text-xl md:text-2xl font-display font-medium text-light-text group-hover/email:text-teal-accent transition-colors break-all">
                        mertbildik.work@gmail.com
                    </span>
                    <div className="w-6 h-6 flex items-center justify-center bg-white/5 rounded-full group-hover/email:bg-teal-accent/20 transition-colors">
                        <AnimatePresence mode="wait">
                            {emailCopied ? (
                                <motion.div
                                    key="check"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    exit={{ scale: 0 }}
                                    className="text-teal-accent"
                                >
                                    <Check size={14} strokeWidth={3} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="copy"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="text-gray-500 group-hover/email:text-teal-accent transition-colors"
                                >
                                    <Copy size={14} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>

            {/* Live Clock */}
            <motion.div
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.3 }}
            >
                 <LiveClock />
            </motion.div>

            {/* Bottom Row: Socials & CV */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-8 pt-8 border-t border-white/10"
            >
                {/* Socials - Only Dribbble & LinkedIn */}
                <div className="flex gap-4">
                    <a 
                        href="#" 
                        className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 hover:scale-110 transition-all" 
                        title="LinkedIn"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a 
                        href="#" 
                        className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 hover:scale-110 transition-all" 
                        title="Dribbble"
                    >
                        <Dribbble size={20} />
                    </a>
                </div>

                {/* Vertical Divider */}
                <div className="w-px h-12 bg-white/10"></div>

                {/* Download CV Button */}
                <a 
                    href="/Mert_Bildik_CV.pdf" 
                    download="Mert_Bildik_CV.pdf"
                    className="group/cv flex items-center gap-3 text-light-text font-bold hover:text-teal-accent transition-colors"
                >
                    <div className="w-12 h-12 rounded-full bg-teal-accent/10 border border-teal-accent/20 flex items-center justify-center text-teal-accent group-hover/cv:bg-teal-accent group-hover/cv:text-dark-main transition-all">
                        <Download size={20} />
                    </div>
                    <span>Download CV</span>
                </a>
            </motion.div>

        </div>
      </div>
    </motion.div>
  );
};

export default Contact;