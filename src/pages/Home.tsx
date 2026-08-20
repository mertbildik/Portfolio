import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import mertPhoto from '../assets/mert.webp';
import SplitPage from '../layouts/SplitPage';
import { containerVariants, itemVariants } from '../components/motion';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';

const getCurrentQuarter = () => {
    const date = new Date();
    return `Q${Math.floor(date.getMonth() / 3) + 1} ${date.getFullYear()}`;
};

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
                    <motion.div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
                        <motion.div variants={itemVariants} className="shrink-0 self-center md:self-auto">
                            <img
                                src={mertPhoto}
                                alt="Mert Bildik"
                                className="w-24 h-24 lg:w-28 lg:h-28 object-cover object-top rounded-full border border-line"
                            />
                        </motion.div>

                        <motion.div variants={itemVariants} className="text-center md:text-left">
                            <h2 className="text-headline text-ink-high mb-2 md:mb-3">
                                Mert Bildik
                            </h2>
                            <span className="text-eyebrow font-mono text-ink-low uppercase block">
                                DIGITAL PRODUCT DESIGNER
                            </span>
                        </motion.div>
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="text-display-xl text-ink-high mt-10 md:mt-14">
                        <span className="text-ink-low">I </span>design/build
                        <br />
                        <span className="text-ink-low">digital products,</span>
                        <br />
                        websites, and visual experiences.
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
