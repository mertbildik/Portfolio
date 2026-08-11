import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SplitPage from '../layouts/SplitPage';
import { containerVariants, itemVariants } from '../components/motion';

const getCurrentQuarter = () => {
    const date = new Date();
    return `Q${Math.floor(date.getMonth() / 3) + 1} ${date.getFullYear()}`;
};

const ListItem: React.FC<{ number: string; label: string; to: string }> = ({ number, label, to }) => (
    <motion.div variants={itemVariants} className="relative">
        <Link
            to={to}
            className="group w-full py-6 md:py-8 border-t border-line focus-visible:border-line-active flex items-center justify-between text-left outline-none transition-colors duration-300"
        >
            <div className="flex items-center gap-4 md:gap-8">
                <span className="text-caption font-mono text-ink-faint group-hover:text-ink-body transition-colors duration-300">
                    {number}
                </span>
                <span className="text-card-title text-ink-mid group-hover:text-ink-max transition-colors duration-300 whitespace-nowrap">
                    {label}
                </span>
            </div>

            <div className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0 transition-all duration-500 ease-out">
                <ArrowRight size={20} className="text-ink-max" />
            </div>
        </Link>
    </motion.div>
);

const Home: React.FC = () => (
    <SplitPage align="center">
        <motion.div
            className="lg:col-span-8 flex flex-col justify-center relative z-20 min-w-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div variants={itemVariants} className="pl-[2px]">
                <span className="text-eyebrow font-mono text-ink-low uppercase mb-6 md:mb-8 block">
                    DESIGN ENGINEER · AVAILABLE FOR WORK
                </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-display-xl text-ink-max mix-blend-screen">
                <span className="text-ink-body">Hey, I'm Mert.</span>
                <br />
                <span className="text-ink-low">I </span>design<span className="text-ink-low"> and </span>build
                <br />
                <span className="text-ink-low">digital products.</span>
            </motion.h1>

            <motion.p
                variants={itemVariants}
                className="mt-8 md:mt-12 text-body-lg text-ink-body ml-1 w-full max-w-lg lg:max-w-none lg:whitespace-nowrap"
            >
                Helping people spend less time clicking and more time living.
            </motion.p>
        </motion.div>

        <motion.div
            className="lg:col-span-4 flex flex-col justify-center relative z-30 lg:pl-16 xl:pl-24 mt-8 lg:mt-0 min-w-[300px]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="w-full flex flex-col">
                <ListItem number="01" label="View Portfolio" to="/portfolio" />
                <ListItem number="02" label="My Process" to="/process" />
                <ListItem number="03" label="About Me" to="/about" />
            </div>

            <motion.div variants={itemVariants} className="mt-12 w-full">
                <Link to="/contact" className="flex items-center justify-between group cursor-pointer whitespace-nowrap">
                    <div className="flex flex-col shrink-0">
                        <span className="text-card-title text-ink-max group-hover:text-ink-mid transition-colors duration-300">
                            Get in touch
                        </span>
                        <span className="text-caption font-mono text-ink-faint mt-1">
                            Available {getCurrentQuarter()}
                        </span>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-line-strong flex items-center justify-center text-ink-max group-hover:bg-fill-inverse group-hover:text-ink-inverse transition-all duration-300 shrink-0 ml-4">
                        <ArrowUpRight size={20} />
                    </div>
                </Link>
            </motion.div>
        </motion.div>
    </SplitPage>
);

export default Home;
