import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ArrowRight, ArrowUpRight, Check, Copy } from 'lucide-react';
import SplitPage from '../layouts/SplitPage';
import CircleAction from '../components/CircleAction';
import SectionIntro from '../components/SectionIntro';
import { blockVariants, containerVariants, itemVariants, VIEWPORT_ONCE } from '../components/motion';

const CONTACT_EMAIL = 'mert.bildik@gmail.com';

const formIsReady = (form: HTMLFormElement) => {
    const data = new FormData(form);
    return form.checkValidity() && ['name', 'email', 'message'].every((field) => String(data.get(field) ?? '').trim());
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
        <div className="flex items-baseline gap-2">
            <span className="text-caption font-mono text-ink-body">{timeString}</span>
            <span className="text-caption font-mono text-ink-faint uppercase">Warsaw, PL</span>
        </div>
    );
};

const Contact: React.FC = () => {
    const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [emailCopied, setEmailCopied] = useState(false);
    const [isFormReady, setIsFormReady] = useState(false);
    const copyTimeoutRef = useRef<number | null>(null);

    useEffect(() => () => {
        if (copyTimeoutRef.current !== null) window.clearTimeout(copyTimeoutRef.current);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formIsReady(e.currentTarget as HTMLFormElement)) return;
        setFormState('submitting');

        const formSpreeId = import.meta.env.VITE_FORMSPREE_ID;
        const endpoint = formSpreeId ? `https://formspree.io/f/${formSpreeId}` : null;

        if (!endpoint) {
            console.error('Formspree ID is missing in .env');
            setFormState('error');
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

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(CONTACT_EMAIL);
            setEmailCopied(true);
            if (copyTimeoutRef.current !== null) window.clearTimeout(copyTimeoutRef.current);
            copyTimeoutRef.current = window.setTimeout(() => setEmailCopied(false), 2000);
        } catch (error) {
            console.error('Copy failed:', error);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <SplitPage id="contact">
            <motion.div
                variants={blockVariants}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_ONCE}
            >
                <SectionIntro
                    eyebrow="Inquiry"
                    title={<>Let's <br /><span className="text-ink-low">Talk.</span></>}
                    description={<>Available for new projects. <br />I reply within 24 hours.</>}
                />
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_ONCE}
                className="flex flex-col justify-center h-full relative z-30"
            >
                <div className="flex flex-col w-full gap-10 lg:gap-12">

                    {/* SECTION: FORM INTERFACE */}
                    <AnimatePresence mode="wait">
                        {formState === 'success' ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="py-12 pl-6 border-l border-line-active"
                            >
                                <CheckCircle2 size={24} className="text-ink-max mb-6" strokeWidth={1.5} />
                                <h3 className="text-headline text-ink-high mb-2">Request initiated.</h3>
                                <p className="text-ink-body text-body-sm max-w-xs mb-8">
                                    I'll review your brief shortly. Expect a response at {formData.email}.
                                </p>
                                <button
                                    onClick={() => { setFormState('idle'); setFormData({ name: '', email: '', message: '' }); setIsFormReady(false); }}
                                    className="text-button text-ink-body hover:text-ink-max focus-visible:text-ink-max transition-colors duration-300 border-b border-transparent hover:border-line-active focus-visible:border-line-active pb-0.5"
                                >
                                    Start over
                                </button>
                            </motion.div>
                        ) : (
                            <motion.form
                                     key="form"
                                     variants={itemVariants}
                                     onSubmit={handleSubmit}
                                     onInput={(event) => setIsFormReady(formIsReady(event.currentTarget))}
                                     className="flex flex-col gap-10"
                            >
                                {/* PARTICULARS */}
                                <div className="flex flex-col gap-10">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                        {/* NAME INPUT */}
                                        <div className="relative group">
                                            <input
                                                type="text"
                                                id="contact-name"

                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className="block w-full bg-transparent border-b border-line py-4 text-ink-high text-body focus:outline-none focus:border-line-active transition-colors duration-300 placeholder-transparent peer"
                                                placeholder="Your name"
                                            />
                                            <div className="absolute top-0 left-0 w-full flex justify-between pointer-events-none">
                                                <label htmlFor="contact-name" className={`text-button transition-colors duration-300 group-focus-within:text-ink-max ${formData.name ? 'text-ink-max' : 'text-ink-low'}`}>
                                                    Your name
                                                </label>
                                                {/* Active Marker */}
                                                <div
                                                    className="opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 text-ink-max text-caption font-mono"
                                                >
                                                    +
                                                </div>
                                            </div>
                                        </div>

                                        {/* EMAIL INPUT */}
                                        <div className="relative group">
                                            <input
                                                type="email"
                                                id="contact-email"

                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="block w-full bg-transparent border-b border-line py-4 text-ink-high text-body focus:outline-none focus:border-line-active transition-colors duration-300 placeholder-transparent peer"
                                                placeholder="Your email"
                                            />
                                            <div className="absolute top-0 left-0 w-full flex justify-between pointer-events-none">
                                                <label htmlFor="contact-email" className={`text-button transition-colors duration-300 group-focus-within:text-ink-max ${formData.email ? 'text-ink-max' : 'text-ink-low'}`}>
                                                    Email address
                                                </label>
                                                {/* Active Marker */}
                                                <div
                                                    className="opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 text-ink-max text-caption font-mono"
                                                >
                                                    +
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* MESSAGE INPUT */}
                                    <div className="relative group">
                                        <textarea
                                            rows={1}
                                            id="contact-message"

                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            className="block w-full bg-transparent border-b border-line py-4 text-ink-high text-body focus:outline-none focus:border-line-active transition-colors duration-300 placeholder-transparent peer resize-none min-h-[40px] max-h-[160px]"
                                            placeholder="A quick note about what you are building, timeline, and budget range."
                                            onInput={(e) => {
                                                const target = e.target as HTMLTextAreaElement;
                                                target.style.height = 'auto';
                                                target.style.height = target.scrollHeight + 'px';
                                            }}
                                        ></textarea>
                                        <div className="absolute top-0 left-0 w-full flex justify-between pointer-events-none">
                                            <label htmlFor="contact-message" className={`text-button transition-colors duration-300 group-focus-within:text-ink-max ${formData.message ? 'text-ink-max' : 'text-ink-low'}`}>
                                                Project details
                                            </label>
                                            {/* Active Marker */}
                                            <div
                                                className="opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 text-ink-max text-caption font-mono"
                                            >
                                                +
                                            </div>
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
                                            <span className="text-button text-ink-high group-hover:text-ink-max group-focus-visible:text-ink-max transition-colors duration-300">
                                                {formState === 'submitting' ? 'Sending...' : 'Submit'}
                                            </span>
                                            <span className="text-caption text-ink-faint mt-1 uppercase">
                                                {formState === 'error' ? (
                                                    <span className="text-status-error">Submission failed. Click to retry.</span>
                                                ) : isFormReady ? "Ready to send." : "Not ready."}
                                            </span>
                                        </div>
                                        <CircleAction>
                                            <ArrowRight size={20} />
                                        </CircleAction>
                                    </button>
                                </div>
                            </motion.form>
                        )}
                    </AnimatePresence>

                    {/* FOOTER METADATA - Data Grid System */}
                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-1 md:grid-cols-3 border-t border-line"
                    >
                        {/* 01: Email - with vertical border */}
                        <div className="flex flex-col gap-4 py-8 md:pr-8 md:border-r border-line">
                            <span className="text-eyebrow text-ink-low">Connect</span>
                            <button
                                type="button"
                                onClick={handleCopyEmail}
                                aria-label="Copy email address"
                                className="group cursor-pointer flex items-center gap-3 text-ink-body hover:text-ink-max focus-visible:text-ink-max focus-visible:outline-none transition-colors duration-300 w-fit"
                            >
                                <span className="text-caption font-mono">{CONTACT_EMAIL}</span>
                                {emailCopied ? <Check size={12} className="text-status-ok" /> : <Copy size={12} className="opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300 text-ink-low" />}
                            </button>
                        </div>

                        {/* 02: Social - with vertical border */}
                        <div className="flex flex-col gap-4 py-8 md:px-8 md:border-r border-line">
                            <span className="text-eyebrow text-ink-low">Networks</span>
                            <div className="flex flex-col gap-2">
                                <a href="https://www.linkedin.com/in/mertbildik/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-ink-body hover:text-ink-max focus-visible:text-ink-max transition-colors duration-300 group w-fit">
                                    <span className="text-caption">LinkedIn</span>
                                    <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300" />
                                </a>
                            </div>
                        </div>

                        {/* 03: Time - aligned right/end */}
                        <div className="hidden md:flex flex-col gap-4 py-8 md:pl-8">
                            <span className="text-eyebrow text-ink-low">Local time</span>
                            <div className="text-caption font-mono text-ink-body">
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
