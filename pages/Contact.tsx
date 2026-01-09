import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, MoveRight, Linkedin, Dribbble, Check, Copy } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

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
    hidden: { opacity: 0, y: 15 },
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
        <div className="flex flex-col items-start gap-1">
            <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">Local Time</span>
            <div className="flex items-baseline gap-2">
                <span className="text-sm font-medium text-white tracking-tight">{timeString}</span>
                <span className="text-xs font-medium text-neutral-500">Warsaw, PL</span>
            </div>
        </div>
    );
};

const Contact: React.FC = () => {
    const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [emailCopied, setEmailCopied] = useState(false);

    const SERVICES = [
        "Web Design",
        "Brand Identity",
        "Presentation Design",
        "Posters & Social",
        "Other"
    ];

    const toggleService = (service: string) => {
        setSelectedServices(prev =>
            prev.includes(service)
                ? prev.filter(s => s !== service)
                : [...prev, service]
        );
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState('submitting');

        // Construct mailto link
        const servicesList = selectedServices.length > 0 ? selectedServices.join(', ') : 'General Inquiry';
        const subject = `Project Inquiry: ${servicesList}`;
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nServices: ${servicesList}\n\nMessage:\n${formData.message}`;

        window.location.href = `mailto:mertbildik.work@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        setFormState('success');
    };

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('mertbildik.work@gmail.com');
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <PageLayout>
            {/* COLUMN 1: PAGE IDENTITY (Span 4) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="lg:col-span-4 flex flex-col justify-center relative z-20 h-full"
            >
                <div className="flex flex-col">
                    <Link to="/" className="inline-block mb-8 lg:mb-12 opacity-40 hover:opacity-100 transition-opacity duration-300 w-fit">
                        <span className="text-xs tracking-widest uppercase font-medium">← Back</span>
                    </Link>

                    <div className="mb-6 lg:mb-8">
                        <span className="text-xs font-mono text-neutral-500 tracking-widest uppercase mb-4 block">
                            New Project
                        </span>
                        <h1 className="text-4xl lg:text-[3.5rem] font-medium tracking-tight leading-[0.95] text-white">
                            Let's <br />
                            <span className="text-neutral-500 font-light">Build.</span>
                        </h1>
                    </div>

                    <p className="text-neutral-400 max-w-xs leading-relaxed text-sm lg:text-base font-light">
                        Available for new projects. <br />
                        Response within 24 hours.
                    </p>
                </div>
            </motion.div>

            {/* COLUMN 2: INTERFACE (Span 8) */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="lg:col-span-8 flex flex-col justify-center h-full relative z-30 lg:pl-20" // Increased padding-left for optical balance
            >
                <div className="flex flex-col w-full max-w-2xl ml-auto gap-8 xl:gap-10">

                    {/* SECTION: FORM INTERFACE */}
                    <AnimatePresence mode="wait">
                        {formState === 'success' ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="py-12 border-l border-white/10 pl-8"
                            >
                                <CheckCircle2 size={24} className="text-white mb-4" />
                                <h3 className="text-xl text-white font-light tracking-tight mb-2">Message intent received.</h3>
                                <p className="text-neutral-500 font-light text-sm leading-relaxed max-w-xs mb-6">
                                    I'll be reviewing your request shortly. Expect a reply at {formData.email}.
                                </p>
                                <button
                                    onClick={() => { setFormState('idle'); setFormData({ name: '', email: '', message: '' }); setSelectedServices([]); }}
                                    className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5"
                                >
                                    Start over
                                </button>
                            </motion.div>
                        ) : (
                            <motion.form
                                key="form"
                                variants={itemVariants}
                                onSubmit={handleSubmit}
                                className="flex flex-col gap-8"
                            >
                                {/* 01: SCOPE (Multi-select) */}
                                <div className="flex flex-col gap-4">
                                    <label className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">
                                        01 — Focus
                                    </label>
                                    <div className="flex flex-wrap gap-3">
                                        {SERVICES.map((service) => {
                                            const isSelected = selectedServices.includes(service);
                                            return (
                                                <motion.button
                                                    key={service}
                                                    type="button"
                                                    onClick={() => toggleService(service)}
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    aria-pressed={isSelected}
                                                    className={`
                                                        px-4 py-2 text-sm border transition-all duration-300 ease-out flex items-center gap-2
                                                        ${isSelected
                                                            ? 'border-white text-white bg-white/5'
                                                            : 'border-white/10 text-neutral-500 hover:border-white/30 hover:text-neutral-300 bg-transparent'
                                                        }
                                                    `}
                                                >
                                                    {isSelected && <motion.span initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="w-1 h-1 bg-green-400 rounded-full" />}
                                                    {service}
                                                </motion.button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* 02: PARTICULARS */}
                                <div className="flex flex-col gap-6">
                                    <label className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">
                                        02 — Details
                                    </label>

                                    <div className="grid grid-cols-2 gap-6 xl:gap-8">
                                        <div className="relative group">
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className="block w-full bg-transparent border-b border-white/10 py-2 text-white text-sm focus:outline-none focus:border-white/50 transition-colors placeholder-transparent peer"
                                                placeholder="Name"
                                            />
                                            <label className={`absolute left-0 top-2 text-sm text-neutral-600 transition-all duration-300 pointer-events-none 
                                                ${formData.name ? '-translate-y-5 text-[10px]' : 'peer-focus:-translate-y-5 peer-focus:text-[10px]'}`}>
                                                Your Name
                                            </label>
                                        </div>
                                        <div className="relative group">
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="block w-full bg-transparent border-b border-white/10 py-2 text-white text-sm focus:outline-none focus:border-white/50 transition-colors placeholder-transparent peer"
                                                placeholder="Email"
                                            />
                                            <label className={`absolute left-0 top-2 text-sm text-neutral-600 transition-all duration-300 pointer-events-none 
                                                ${formData.email ? '-translate-y-5 text-[10px]' : 'peer-focus:-translate-y-5 peer-focus:text-[10px]'}`}>
                                                Email Address
                                            </label>
                                        </div>
                                    </div>

                                    <div className="relative group mt-2">
                                        <textarea
                                            rows={1}
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            className="block w-full bg-transparent border-b border-white/10 py-2 text-white text-sm focus:outline-none focus:border-white/50 transition-colors placeholder-transparent peer resize-none min-h-[40px] max-h-[120px]"
                                            placeholder="Message"
                                            onInput={(e) => {
                                                const target = e.target as HTMLTextAreaElement;
                                                target.style.height = 'auto';
                                                target.style.height = target.scrollHeight + 'px';
                                            }}
                                        ></textarea>
                                        <label className={`absolute left-0 top-2 text-sm text-neutral-600 transition-all duration-300 pointer-events-none 
                                            ${formData.message ? '-translate-y-5 text-[10px]' : 'peer-focus:-translate-y-5 text-[10px]'}`}>
                                            About the project...
                                        </label>
                                    </div>
                                </div>

                                {/* ACTION */}
                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        className="group flex items-center gap-3 text-white hover:text-neutral-300 transition-colors"
                                    >
                                        <span className="text-xs font-medium tracking-widest uppercase border-b border-white/30 pb-0.5 group-hover:border-white transition-all">Submit Request</span>
                                        <MoveRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                                    </button>
                                </div>
                            </motion.form>
                        )}
                    </AnimatePresence>

                    {/* FOOTER METADATA */}
                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-2 lg:grid-cols-3 gap-y-4 pt-8 border-t border-white/5"
                    >
                        {/* Email */}
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] font-mono text-neutral-700 uppercase tracking-widest">Email</span>
                            <div onClick={handleCopyEmail} className="group cursor-pointer flex items-center gap-2 text-neutral-500 hover:text-white transition-colors w-fit">
                                <span className="text-xs transition-all">mertbildik.work@gmail.com</span>
                                {emailCopied ? <Check size={10} className="text-green-500" /> : <Copy size={10} className="opacity-0 group-hover:opacity-100 transition-opacity text-neutral-500" />}
                            </div>
                        </div>

                        {/* Connect */}
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] font-mono text-neutral-700 uppercase tracking-widest">Social</span>
                            <div className="flex items-center gap-4">
                                <a href="#" className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors group">
                                    <span className="text-xs">LinkedIn</span>
                                </a>
                                <a href="#" className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors group">
                                    <span className="text-xs">Dribbble</span>
                                </a>
                            </div>
                        </div>

                        {/* Time */}
                        <div className="hidden lg:block">
                            <LiveClock />
                        </div>
                    </motion.div>

                </div>
            </motion.div>
        </PageLayout >
    );
};

export default Contact;