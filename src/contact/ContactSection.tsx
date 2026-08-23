import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ArrowRight, ArrowUpRight, Check, Copy } from 'lucide-react';
import ActionCircle from '../shared/ActionCircle';
import { blockVariants, containerVariants, itemVariants, VIEWPORT_ONCE } from '../shared/motion';
import SectionIntro from '../shared/SectionIntro';

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
            <span className="text-caption font-mono text-ink-low">{timeString}</span>
            <span className="text-caption text-ink-low">Warsaw, <span className="font-mono">PL</span></span>
        </div>
    );
};

const ContactSection: React.FC = () => {
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
        <>
            <motion.div
                variants={blockVariants}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_ONCE}
            >
                <SectionIntro
                    eyebrow="Inquiry"
                    title={<>Let's <br />talk.</>}
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
                                className="surface rounded-md p-8 md:p-10"
                            >
                                <CheckCircle2 size={24} className="text-status-ok mb-6" strokeWidth={1.5} />
                                <h3 className="text-headline text-ink-high mb-2">Request initiated.</h3>
                                <p className="text-ink-body text-body-sm max-w-xs mb-8">
                                    I'll review your brief shortly. Expect a response at {formData.email}.
                                </p>
                                <button
                                    onClick={() => { setFormState('idle'); setFormData({ name: '', email: '', message: '' }); setIsFormReady(false); }}
                                    className="text-button text-ink-body hover:text-ink-max focus-visible:text-ink-max focus-visible:outline-none transition-colors duration-300 border-b border-transparent hover:border-ink-low focus-visible:border-ink-low pb-0.5"
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
                                className="surface rounded-md p-2"
                             >
                                <div className="relative group grid grid-cols-1 md:grid-cols-[9rem_minmax(0,1fr)] gap-2 md:gap-6 rounded-md p-5 md:p-6 focus-within:bg-fill transition-colors duration-200 ease-out">
                                    <label htmlFor="contact-name" className="text-button text-ink-low group-focus-within:text-ink-max transition-colors duration-200 ease-out md:pt-2.5">
                                        Your name
                                    </label>
                                    <input
                                        type="text"
                                        id="contact-name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="block w-full min-h-11 bg-transparent text-ink-high text-body focus:outline-none placeholder:text-ink-body pr-6"
                                        placeholder="How should I address you?"
                                    />
                                    <span className="absolute top-6 right-6 opacity-0 group-focus-within:opacity-100 transition-opacity duration-200 ease-out text-ink-max text-caption font-mono" aria-hidden="true">+</span>
                                </div>

                                <div className="relative group grid grid-cols-1 md:grid-cols-[9rem_minmax(0,1fr)] gap-2 md:gap-6 rounded-md p-5 md:p-6 focus-within:bg-fill transition-colors duration-200 ease-out">
                                    <label htmlFor="contact-email" className="text-button text-ink-low group-focus-within:text-ink-max transition-colors duration-200 ease-out md:pt-2.5">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        id="contact-email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="block w-full min-h-11 bg-transparent text-ink-high text-body focus:outline-none placeholder:text-ink-body pr-6"
                                        placeholder="you@company.com"
                                    />
                                    <span className="absolute top-6 right-6 opacity-0 group-focus-within:opacity-100 transition-opacity duration-200 ease-out text-ink-max text-caption font-mono" aria-hidden="true">+</span>
                                </div>

                                <div className="relative group grid grid-cols-1 md:grid-cols-[9rem_minmax(0,1fr)] gap-3 md:gap-6 rounded-md p-5 md:p-6 focus-within:bg-fill transition-colors duration-200 ease-out">
                                    <label htmlFor="contact-message" className="text-button text-ink-low group-focus-within:text-ink-max transition-colors duration-200 ease-out md:pt-1">
                                        Project details
                                    </label>
                                    <textarea
                                        rows={1}
                                        id="contact-message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        className="block w-full bg-transparent text-ink-high text-body focus:outline-none placeholder:text-ink-body resize-none min-h-28 md:min-h-20 max-h-[160px] pr-6"
                                        placeholder="What are you building? Include the timeline and budget range if you have them."
                                        onInput={(e) => {
                                            const target = e.target as HTMLTextAreaElement;
                                            target.style.height = 'auto';
                                            target.style.height = target.scrollHeight + 'px';
                                        }}
                                    />
                                    <span className="absolute top-6 right-6 opacity-0 group-focus-within:opacity-100 transition-opacity duration-200 ease-out text-ink-max text-caption font-mono" aria-hidden="true">+</span>
                                </div>

                                <button
                                    type="submit"
                                    disabled={formState === 'submitting'}
                                    className="w-full grid grid-cols-[1fr_auto] md:grid-cols-[9rem_minmax(0,1fr)_auto] items-center gap-6 group cursor-pointer rounded-md p-5 md:p-6 focus-visible:outline-none focus-visible:bg-fill disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 ease-out"
                                >
                                    <div className="md:col-start-2 flex flex-col shrink-0 text-left">
                                        <span className="text-button text-ink-high group-hover:text-ink-max group-focus-visible:text-ink-max group-disabled:text-ink-high transition-colors duration-300">
                                            {formState === 'submitting' ? 'Sending…' : 'Send inquiry'}
                                        </span>
                                        <span aria-live="polite" className="text-body-sm text-ink-low mt-1 group-hover:text-ink-body group-focus-visible:text-ink-body group-disabled:text-ink-low transition-colors duration-300">
                                            {formState === 'error' ? (
                                                <span className="text-status-error">Submission failed. Click to retry.</span>
                                            ) : isFormReady ? "Ready to send." : "Complete all fields."}
                                        </span>
                                    </div>
                                    <ActionCircle small>
                                        <ArrowRight size={18} />
                                    </ActionCircle>
                                </button>
                            </motion.form>
                        )}
                    </AnimatePresence>

                    {/* FOOTER METADATA - Data Grid System */}
                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-1 md:grid-cols-3 md:gap-8"
                    >
                        {/* 01: Email */}
                        <div className="flex flex-col gap-4 py-8">
                            <span className="text-eyebrow text-ink-low">Connect</span>
                            <button
                                type="button"
                                onClick={handleCopyEmail}
                                aria-label={emailCopied ? 'Email copied' : 'Copy email address'}
                                className="group cursor-pointer flex min-h-11 items-center gap-3 text-ink-low hover:text-ink-max focus-visible:text-ink-max focus-visible:outline-none transition-colors duration-200 ease-out w-fit"
                            >
                                <span className="text-caption font-mono">{CONTACT_EMAIL}</span>
                                {emailCopied ? <Check size={12} className="text-status-ok" /> : <Copy size={12} className="opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300 text-ink-low" />}
                            </button>
                        </div>

                        {/* 02: Social */}
                        <div className="flex flex-col gap-4 py-8">
                            <span className="text-eyebrow text-ink-low">Networks</span>
                            <div className="flex flex-col gap-2">
                                <a href="https://www.linkedin.com/in/mertbildik/" target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-center gap-2 text-ink-body hover:text-ink-max focus-visible:text-ink-max focus-visible:outline-none transition-colors duration-300 group w-fit">
                                    <span className="text-button">LinkedIn</span>
                                    <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300" />
                                </a>
                            </div>
                        </div>

                        {/* 03: Time - aligned right/end */}
                        <div className="hidden md:flex flex-col gap-4 py-8">
                            <span className="text-eyebrow text-ink-low">Local time</span>
                            <div>
                                <LiveClock />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </motion.div>
        </>
    );
};

export default ContactSection;
