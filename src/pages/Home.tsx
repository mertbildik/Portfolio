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
    <motion.div variants={itemVariants} className="relative group">
        <Link
            to={to}
            className="w-full py-6 md:py-8 border-t border-white/10 flex items-center justify-between text-left outline-none group-focus:bg-white/5 transition-colors duration-300"
        >
            <div className="flex items-center gap-4 md:gap-8">
                <span className="text-caption font-mono text-neutral-600 group-hover:text-neutral-400 transition-colors">
                    {number}
                </span>
                <span className="text-card-title text-neutral-300 group-hover:text-white transition-colors whitespace-nowrap">
                    {label}
                </span>
            </div>

            <div className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out">
                <ArrowRight size={20} className="text-white" />
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
                <span className="text-eyebrow font-mono text-neutral-500 uppercase mb-6 md:mb-8 block">
                    DESIGN ENGINEER · AVAILABLE FOR WORK
                </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-display-xl text-white mix-blend-screen">
                <span className="text-neutral-400">Hey, I'm Mert.</span>
                <br />
                <span className="text-neutral-500">I </span>design<span className="text-neutral-500"> and </span>build
                <br />
                <span className="text-neutral-500">digital products.</span>
            </motion.h1>

            <motion.p
                variants={itemVariants}
                className="mt-8 md:mt-12 text-body-lg text-neutral-400 ml-1 w-full max-w-lg lg:max-w-none lg:whitespace-nowrap"
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
                        <span className="text-card-title text-white group-hover:text-neutral-300 transition-colors">
                            Get in touch
                        </span>
                        <span className="text-caption font-mono text-neutral-600 mt-1">
                            Available {getCurrentQuarter()}
                        </span>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 shrink-0 ml-4">
                        <ArrowUpRight size={20} />
                    </div>
                </Link>
            </motion.div>
        </motion.div>
    </SplitPage>
);

export default Home;
