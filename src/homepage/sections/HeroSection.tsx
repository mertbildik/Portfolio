import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import mertPhoto from '../../assets/mert.webp';
import { containerVariants, itemVariants } from '../../shared/motion';
import ActionCircle from '../components/ActionCircle';
import HomeSection from '../components/HomeSection';

const HeroSection: React.FC = () => (
    <HomeSection id="home" hero>
        <motion.div
            className="flex flex-col justify-center relative z-20 min-w-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
                <motion.div variants={itemVariants} className="relative shrink-0 self-center md:self-auto">
                    <div className="relative z-10 w-24 h-24 lg:w-28 lg:h-28 rounded-full border border-line overflow-hidden">
                        <img
                            src={mertPhoto}
                            alt="Mert Bildik"
                            className="w-full h-full object-cover object-[center_22%] scale-[1.2]"
                        />
                    </div>
                    <svg
                        viewBox="0 0 100 100"
                        className="absolute -inset-4 lg:-inset-5 w-[calc(100%+2rem)] h-[calc(100%+2rem)] lg:w-[calc(100%+2.5rem)] lg:h-[calc(100%+2.5rem)] animate-ring-spin"
                        aria-hidden="true"
                    >
                        <defs>
                            <path
                                id="warsaw-ring-path"
                                d="M 50,50 m -45,0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
                                fill="none"
                            />
                        </defs>
                        <text className="fill-current text-ink-faint font-mono uppercase" style={{ fontSize: 8.5, letterSpacing: 1.5 }}>
                            <textPath href="#warsaw-ring-path">
                                BASED IN WARSAW • BASED IN WARSAW • BASED IN WARSAW •
                            </textPath>
                        </text>
                    </svg>
                </motion.div>

                <motion.div variants={itemVariants} className="text-center md:text-left">
                    <h2 className="text-headline text-ink-high mb-2 md:mb-3">Mert Bildik</h2>
                    <span className="text-body-sm text-ink-low block">Digital product designer</span>
                </motion.div>
            </motion.div>

            <motion.p variants={itemVariants} className="mt-8 md:mt-10 text-body text-ink-body w-full">
                Today, I run my own company, taking B2B products from idea to shipped site.
                Previously, I was a visual communication specialist at{' '}
                <a
                    href="https://www.mckinsey.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink-high hover:text-ink-max focus-visible:text-ink-max transition-colors duration-300 border-b border-transparent hover:border-line-active focus-visible:border-line-active pb-0.5"
                >
                    McKinsey &amp; Company
                </a>
                .
            </motion.p>

            <motion.h1 variants={itemVariants} className="text-display-lg text-ink-low mt-10 md:mt-14">
                <span>I </span>
                <span className="text-ink-high">design/build</span>
                <br />
                <span>digital products,</span>
                <br />
                websites, and visual experiences.
            </motion.h1>

            <motion.p variants={itemVariants} className="mt-8 md:mt-12 text-body text-ink-body ml-1 w-full max-w-lg">
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
                        <span className="text-caption text-ink-faint mt-1 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-status-ok/50 rounded-full animate-pulse" />
                            Available for new projects
                        </span>
                    </div>
                    <ActionCircle>
                        <ArrowUpRight size={20} />
                    </ActionCircle>
                </a>
            </motion.div>
        </motion.div>
    </HomeSection>
);

export default HeroSection;
