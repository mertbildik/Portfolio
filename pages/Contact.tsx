import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Linkedin, Dribbble, Copy, Check, ArrowRight, CheckCircle2, AlertCircle, Loader2, Download } from 'lucide-react';

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
            <span className="text-[10px] font-mono text-[#404040] uppercase tracking-widest mb-1">Local Time</span>
            <div className="flex items-baseline gap-2">
                <span className="text-xl font-medium text-[#EDEDED] tracking-tight">{timeString}</span>
                <span className="text-sm font-medium text-[#737373]">Warsaw, PL</span>
            </div>
        </div>
    );
};

const Contact: React.FC = () => {
    const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [emailCopied, setEmailCopied] = useState(false);

    const projectTypes = ["Website", "Brand Identity", "Presentation", "Other"];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Validation logic...
        setFormState('submitting');
        setTimeout(() => setFormState('success'), 2000);
    };

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('mertbildik.work@gmail.com');
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
    };

    const toggleProjectType = (type: string) => {
        setSelectedTypes(prev => prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]);
    };

    return (
        // 100svh Container - STRICTLY NO SCROLL
        <div className="w-full h-[100svh] max-h-[100svh] overflow-hidden relative flex flex-col pt-[clamp(3rem,8vh,6rem)] pb-[clamp(3rem,8vh,6rem)]">

            {/* Atmosphere */}

            <motion.div
                className="flex flex-col h-full max-w-[1200px] mx-auto w-full px-6 md:px-12 relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Header */}
                <motion.div variants={itemVariants} className="shrink-0 mb-[clamp(1rem,2.5vh,2rem)]">
                    <h1 className="font-medium text-[#EDEDED] leading-none tracking-tight mb-2"
                        style={{ fontSize: "clamp(2rem, 4vh, 3.5rem)" }}>
                        Let’s build.
                    </h1>
                    <div className="pl-4 border-l border-[#262626]">
                        <p className="text-[#737373] font-normal leading-snug max-w-xl"
                            style={{ fontSize: "clamp(0.875rem, 1.5vh, 1rem)" }}>
                            Send me a message and let's discuss your project.
                        </p>
                    </div>
                </motion.div>

                {/* Content: Split Layout (Form + Info) */}
                <div className="flex-1 min-h-0 flex gap-8 lg:gap-16">

                    {/* LEFT: Compact Form */}
                    <div className="flex-1 flex flex-col justify-center">
                        <AnimatePresence mode="wait">
                            {formState === 'success' ? (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20 bg-white/5 rounded-lg border border-white/5">
                                    <CheckCircle2 size={48} className="text-white mx-auto mb-4" />
                                    <h3 className="text-xl text-white font-medium">Message Received!</h3>
                                </motion.div>
                            ) : (
                                <motion.form
                                    variants={itemVariants}
                                    onSubmit={handleSubmit}
                                    className="flex flex-col gap-[clamp(0.75rem,1.5vh,1rem)]"
                                >
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="space-y-1">
                                            <input type="text" placeholder="Name" className="w-full bg-white/5 border border-white/5 rounded p-2.5 text-xs text-white focus:border-white/20 focus:outline-none transition-colors" />
                                        </div>
                                        <div className="space-y-1">
                                            <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/5 rounded p-2.5 text-xs text-white focus:border-white/20 focus:outline-none transition-colors" />
                                        </div>
                                    </div>

                                    {/* Type Selection (Mini) */}
                                    <div className="flex flex-wrap gap-2">
                                        {projectTypes.map((type) => (
                                            <button
                                                key={type}
                                                type="button"
                                                onClick={() => toggleProjectType(type)}
                                                className={`text-[10px] px-2.5 py-1 rounded-full border transition-all ${selectedTypes.includes(type) ? 'bg-white text-black border-white' : 'bg-transparent text-[#737373] border-white/10 hover:border-white/30 hover:text-white'}`}
                                            >
                                                {type}
                                            </button>
                                        ))}
                                    </div>

                                    <textarea rows={3} placeholder="Tell me about the project..." className="w-full bg-white/5 border border-white/5 rounded p-2.5 text-xs text-white focus:border-white/20 focus:outline-none transition-colors resize-none mb-1"></textarea>

                                    <button type="submit" className="w-full bg-[#EDEDED] text-black font-medium py-2.5 rounded text-xs hover:bg-white transition-colors flex items-center justify-center gap-2">
                                        Send Message <Send size={12} />
                                    </button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* RIGHT: Info (Compact) */}
                    <div className="w-1/3 border-l border-white/5 pl-8 flex flex-col justify-center gap-6">
                        {/* Email */}
                        <div>
                            <span className="text-[10px] font-mono text-[#404040] uppercase tracking-widest block mb-1">Email</span>
                            <div onClick={handleCopyEmail} className="group cursor-pointer flex items-center gap-2 text-[#EDEDED] hover:text-white transition-colors">
                                <span className="text-base font-medium truncate">mertbildik.work@gmail.com</span>
                                {emailCopied ? <Check size={12} /> : <Copy size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />}
                            </div>
                        </div>

                        {/* Clock */}
                        <LiveClock />

                        {/* Socials */}
                        <div className="flex gap-4">
                            <a href="#" className="text-[#737373] hover:text-white transition-colors"><Linkedin size={18} /></a>
                            <a href="#" className="text-[#737373] hover:text-white transition-colors"><Dribbble size={18} /></a>
                        </div>

                        {/* CV */}
                        <a href="/Mert_Bildik_CV.pdf" download className="flex items-center gap-2 text-[#EDEDED] text-xs hover:text-white transition-colors">
                            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center"><Download size={12} /></div>
                            <span>Download CV</span>
                        </a>

                    </div>
                </div>

            </motion.div>
        </div>
    );
};

export default Contact;