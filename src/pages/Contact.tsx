import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight, ArrowUpRight, Check, Copy } from 'lucide-react';
import { Link } from 'react-router-dom';
import SplitPage from '../layouts/SplitPage';
import { containerVariants, itemVariants } from '../components/motion';

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
        <div className="flex items-baseline gap-2">
            <span className="text-caption font-mono text-neutral-400">{timeString}</span>
            <span className="text-caption font-mono text-neutral-600 uppercase">Warsaw, PL</span>
        </div>
    );
};

const Contact: React.FC = () => {
    const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [emailCopied, setEmailCopied] = useState(false);
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const isValidEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const isFormReady = formData.name.trim() !== '' && isValidEmail(formData.email) && formData.message.trim() !== '';

    const SERVICES = [
        "Web Design",
        "Brand Identity",
        "Presentation Design",
        "Posters and Social",
        "Something Else"
    ];

    const toggleService = (service: string) => {
        setSelectedServices(prev =>
            prev.includes(service)
                ? prev.filter(s => s !== service)
                : [...prev, service]
        );
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormState('submitting');

        const formSpreeId = import.meta.env.VITE_FORMSPREE_ID;
        const endpoint = formSpreeId ? `https://formspree.io/f/${formSpreeId}` : null;

        if (!endpoint) {
            console.error('Formspree ID is missing in .env');
            setTimeout(() => setFormState('error'), 1000);
            return;
        }

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    services: selectedServices.length > 0 ? selectedServices.join(', ') : 'General Inquiry'
                })
            });

            if (response.ok) {
                setFormState('success');
            } else {
                setFormState('error');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setFormState('error');
        }
    };

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('mert.bildik@gmail.com');
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <SplitPage align="center">
            {/* COLUMN 1: PAGE IDENTITY (Span 4) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="lg:col-span-4 flex flex-col justify-start lg:self-start lg:pt-72 relative z-20 h-auto"
            >
                <div className="flex flex-col">
                    <Link to="/" className="inline-block mb-8 lg:mb-12 opacity-40 hover:opacity-100 transition-opacity duration-300 w-fit">
                        <span className="text-button uppercase">← Back</span>
                    </Link>

                    <div className="mb-6 lg:mb-8">
                        <span className="text-eyebrow font-mono text-neutral-500 uppercase mb-4 block">
                            Inquiry
                        </span>
                        <h1 className="text-display-xl text-white">
                            Let's <br />
                            <span className="text-neutral-500">Talk.</span>
                        </h1>
                    </div>

                    <p className="text-neutral-400 max-w-xs text-body-lg">
                        Available for new projects. <br />
                        I reply within 24 hours.
                    </p>
                </div>
            </motion.div>

            {/* COLUMN 2: INTERFACE (Span 8) */}
            {/* Replaced 'max-w-2xl' with 'max-w-3xl' and aligned padding to match Portfolio */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="lg:col-span-8 flex flex-col justify-center h-full relative z-30 lg:pl-12"
            >
                <div className="flex flex-col w-full max-w-3xl ml-auto gap-12 lg:gap-16">

                    {/* SECTION: FORM INTERFACE */}
                    <AnimatePresence mode="wait">
                        {formState === 'success' ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="py-12 pl-1 border-l border-white pl-8"
                            >
                                <CheckCircle2 size={24} className="text-white mb-6" strokeWidth={1.5} />
                                <h3 className="text-headline text-white mb-2">Request initiated.</h3>
                                <p className="text-neutral-500 text-body-sm max-w-xs mb-8">
                                    I'll review your brief shortly. Expect a response at {formData.email}.
                                </p>
                                <button
                                    onClick={() => { setFormState('idle'); setFormData({ name: '', email: '', message: '' }); setSelectedServices([]); }}
                                    className="text-button uppercase text-neutral-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5"
                                >
                                    Start over
                                </button>
                            </motion.div>
                        ) : (
                            <motion.form
                                key="form"
                                variants={itemVariants}
                                onSubmit={handleSubmit}
                                className="flex flex-col gap-10"
                            >
                                {/* 01: FOCUS (Segmented Control) */}
                                <div className="flex flex-col gap-6">
                                    <label className="text-eyebrow font-mono text-neutral-500 uppercase pl-[2px]">
                                        01 Focus
                                    </label>
                                    <div className="grid grid-cols-2 md:grid-cols-3 border-t border-l border-white/[0.08]">
                                        {SERVICES.map((service) => {
                                            const isSelected = selectedServices.includes(service);
                                            return (
                                                <motion.button
                                                    key={service}
                                                    type="button"
                                                    onClick={() => toggleService(service)}
                                                    className={`
                                                        relative h-14 md:h-16 flex items-center justify-center text-button border-r border-b border-white/[0.08] transition-all duration-300 group
                                                        ${isSelected
                                                            ? 'bg-white text-neutral-900'
                                                            : 'bg-transparent text-neutral-500 hover:text-white hover:bg-white/[0.02]'
                                                        }
                                                    `}
                                                >
                                                    <span className="relative z-10 font-mono uppercase text-button">
                                                        {service}
                                                    </span>
                                                    {/* Corner Marker for Selected */}
                                                    {isSelected && (
                                                        <motion.div
                                                            layoutId="active-corner"
                                                            className="absolute top-0 right-0 w-2 h-2 bg-neutral-900"
                                                        />
                                                    )}
                                                </motion.button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* 02: PARTICULARS */}
                                <div className="flex flex-col gap-10">
                                    <label className="text-eyebrow font-mono text-neutral-500 uppercase pl-[2px]">
                                        02 Details
                                    </label>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                        {/* NAME INPUT */}
                                        <div className="relative group">
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                onFocus={() => setFocusedField('name')}
                                                onBlur={() => setFocusedField(null)}
                                                required
                                                className="block w-full bg-transparent border-b border-white/[0.08] py-4 text-white text-body focus:outline-none focus:border-white transition-colors duration-300 placeholder-transparent peer"
                                                placeholder="Your name"
                                            />
                                            <div className="absolute top-0 left-0 w-full flex justify-between pointer-events-none">
                                                <label className={`text-button font-mono uppercase transition-colors duration-300 ${focusedField === 'name' || formData.name ? 'text-white' : 'text-neutral-600'}`}>
                                                    Your name
                                                </label>
                                                {/* Active Marker */}
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: focusedField === 'name' ? 1 : 0 }}
                                                    className="text-white text-caption font-mono"
                                                >
                                                    +
                                                </motion.div>
                                            </div>
                                        </div>

                                        {/* EMAIL INPUT */}
                                        <div className="relative group">
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                onFocus={() => setFocusedField('email')}
                                                onBlur={() => setFocusedField(null)}
                                                required
                                                className="block w-full bg-transparent border-b border-white/[0.08] py-4 text-white text-body focus:outline-none focus:border-white transition-colors duration-300 placeholder-transparent peer"
                                                placeholder="Your email"
                                            />
                                            <div className="absolute top-0 left-0 w-full flex justify-between pointer-events-none">
                                                <label className={`text-button font-mono uppercase transition-colors duration-300 ${focusedField === 'email' || formData.email ? 'text-white' : 'text-neutral-600'}`}>
                                                    Email address
                                                </label>
                                                {/* Active Marker */}
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: focusedField === 'email' ? 1 : 0 }}
                                                    className="text-white text-caption font-mono"
                                                >
                                                    +
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* MESSAGE INPUT */}
                                    <div className="relative group">
                                        <textarea
                                            rows={1}
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            onFocus={() => setFocusedField('message')}
                                            onBlur={() => setFocusedField(null)}
                                            className="block w-full bg-transparent border-b border-white/[0.08] py-4 text-white text-body focus:outline-none focus:border-white transition-colors duration-300 placeholder-transparent peer resize-none min-h-[40px] max-h-[160px]"
                                            placeholder="A quick note about what you are building, timeline, and budget range."
                                            onInput={(e) => {
                                                const target = e.target as HTMLTextAreaElement;
                                                target.style.height = 'auto';
                                                target.style.height = target.scrollHeight + 'px';
                                            }}
                                        ></textarea>
                                        <div className="absolute top-0 left-0 w-full flex justify-between pointer-events-none">
                                            <label className={`text-button font-mono uppercase transition-colors duration-300 ${focusedField === 'message' || formData.message ? 'text-white' : 'text-neutral-600'}`}>
                                                Project details
                                            </label>
                                            {/* Active Marker */}
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: focusedField === 'message' ? 1 : 0 }}
                                                className="text-white text-caption font-mono"
                                            >
                                                +
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>

                                {/* ACTION */}
                                <div className="pt-8">
                                    <button
                                        type="submit"
                                        disabled={formState === 'submitting'}
                                        className="w-full flex items-center justify-between group cursor-pointer pt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <div className="flex flex-col shrink-0 text-left">
                                            <span className="text-button text-white group-hover:text-neutral-300 transition-colors">
                                                {formState === 'submitting' ? 'Sending...' : 'Submit'}
                                            </span>
                                            <span className="text-caption font-mono text-neutral-600 mt-1 uppercase">
                                                {formState === 'error' ? (
                                                    <span className="text-red-500">Submission failed. Click to retry.</span>
                                                ) : isFormReady ? "Ready to send." : "Not ready."}
                                            </span>
                                        </div>
                                        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 shrink-0 ml-4">
                                            <ArrowRight size={20} />
                                        </div>
                                    </button>
                                </div>
                            </motion.form>
                        )}
                    </AnimatePresence>

                    {/* FOOTER METADATA - Data Grid System */}
                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-1 md:grid-cols-3 border-t border-white/[0.08]"
                    >
                        {/* 01: Email - with vertical border */}
                        <div className="flex flex-col gap-4 py-8 md:pr-8 md:border-r border-white/[0.08]">
                            <span className="text-eyebrow font-mono text-neutral-600 uppercase">CONNECT</span>
                            <div onClick={handleCopyEmail} className="group cursor-pointer flex items-center gap-3 text-neutral-400 hover:text-white transition-colors w-fit">
                                <span className="text-caption font-mono transition-all">mert.bildik@gmail.com</span>
                                {emailCopied ? <Check size={12} className="text-green-500" /> : <Copy size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-neutral-500" />}
                            </div>
                        </div>

                        {/* 02: Social - with vertical border */}
                        <div className="flex flex-col gap-4 py-8 md:px-8 md:border-r border-white/[0.08]">
                            <span className="text-eyebrow font-mono text-neutral-600 uppercase">NETWORKS</span>
                            <div className="flex flex-col gap-2">
                                <a href="https://www.linkedin.com/in/mertbildik/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group w-fit">
                                    <span className="text-caption font-mono">LinkedIn</span>
                                    <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </div>
                        </div>

                        {/* 03: Time - aligned right/end */}
                        <div className="hidden md:flex flex-col gap-4 py-8 md:pl-8">
                            <span className="text-eyebrow font-mono text-neutral-600 uppercase">LOCAL TIME</span>
                            <div className="text-caption font-mono text-neutral-400">
                                <LiveClock />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </motion.div>
        </SplitPage>
    );
};

export default Contact;