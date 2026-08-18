import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import SplitPage from '../layouts/SplitPage';
import { containerVariants, itemVariants } from '../components/motion';
import Portfolio from './Portfolio';
import Process from './Process';
import About from './About';
import Contact from './Contact';

const getCurrentQuarter = () => {
    const date = new Date();
    return `Q${Math.floor(date.getMonth() / 3) + 1} ${date.getFullYear()}`;
};

const ListItem: React.FC<{ number: string; label: string; href: string }> = ({ number, label, href }) => (
    <motion.div variants={itemVariants} className="relative">
        <a
            href={href}
            className="group w-full py-6 md:py-8 border-t border-line focus-visible:border-line-active flex items-center justify-between text-left outline-none transition-colors duration-300"
        >
            <div className="flex items-center gap-4 md:gap-8">
                <span className="text-caption font-mono text-ink-faint group-hover:text-ink-body group-focus-visible:text-ink-body transition-colors duration-300">
                    {number}
                </span>
                <span className="text-card-title text-ink-mid group-hover:text-ink-max group-focus-visible:text-ink-max transition-colors duration-300 whitespace-nowrap">
                    {label}
                </span>
            </div>

            <div className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0 transition-all duration-500 ease-out">
                <ArrowRight size={20} className="text-ink-max" />
            </div>
        </a>
    </motion.div>
);

const Home: React.FC = () => {
    useEffect(() => {
        if (window.location.hash) {
            document.getElementById(window.location.hash.slice(1))?.scrollIntoView();
        }
    }, []);

    return (
        <>
            <SplitPage id="home" hero>
                <motion.div
                    className="flex flex-col justify-center relative z-20 min-w-0"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVariants} className="pl-[2px]">
                        <span className="text-eyebrow font-mono text-ink-low uppercase mb-6 md:mb-8 block">
                            DESIGN ENGINEER
                        </span>
                    </motion.div>

                    <motion.p variants={itemVariants} className="text-headline text-ink-body mb-3 md:mb-4 flex items-center gap-3">
                        <span aria-hidden="true" className="text-[0.85em] leading-none">👋</span>
                        Hey, I'm Mert.
                    </motion.p>

                    <motion.h1 variants={itemVariants} className="text-display-xl text-ink-high">
                        <span className="text-ink-low">I </span>design / build
                        <br />
                        <span className="text-ink-low">digital products.</span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="mt-8 md:mt-12 text-body-lg text-ink-body ml-1 w-full max-w-lg"
                    >
                        Helping people spend less time clicking and more time living.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="flex flex-col justify-center relative z-30 mt-8 min-w-0"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="w-full flex flex-col">
                        <ListItem number="01" label="View Portfolio" href="#portfolio" />
                        <ListItem number="02" label="My Process" href="#process" />
                        <ListItem number="03" label="About Me" href="#about" />
                    </div>

                    <motion.div variants={itemVariants} className="mt-12 w-full">
                        <a href="#contact" className="flex items-center justify-between group cursor-pointer whitespace-nowrap">
                            <div className="flex flex-col shrink-0">
                                <span className="text-card-title text-ink-high group-hover:text-ink-max group-focus-visible:text-ink-max transition-colors duration-300">
                                    Get in touch
                                </span>
                                <span className="text-caption font-mono text-ink-faint mt-1 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-status-ok/50 rounded-full animate-pulse" />
                                    Available {getCurrentQuarter()}
                                </span>
                            </div>
                            <div className="w-12 h-12 rounded-full border border-line-strong flex items-center justify-center text-ink-max group-hover:bg-fill-inverse group-hover:text-ink-inverse group-focus-visible:bg-fill-inverse group-focus-visible:text-ink-inverse transition-all duration-300 shrink-0 ml-4">
                                <ArrowUpRight size={20} />
                            </div>
                        </a>
                    </motion.div>
                </motion.div>
            </SplitPage>

            <Portfolio />
            <Process />
            <About />
            <Contact />

            <div className="fixed bottom-8 left-6 z-40 hidden lg:block pointer-events-none">
                <span className="text-caption text-ink-faint font-mono uppercase">
                    Mert Bildik © 2026
                </span>
            </div>
        </>
    );
};

export default Home;
