import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

/*
 * DESIGN OPERATING RULES (RAMS / IVE / HIG)
 * 1. Unobtrusive: Typography adapts strictly to the viewport width to prevent layout breaking.
 * 2. Honest: The content dictates the form; "I design presentations" is treated as a single atomic thought.
 * 3. Thorough: Collision-proof layout on all devices.
 */

// Motion Constants
const EASE_APPLE = [0.25, 1, 0.5, 1];

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
        transition: {
            duration: 0.8,
            ease: EASE_APPLE
        }
    }
};

// Dynamic Date Logic
const getCurrentQuarter = () => {
    const date = new Date();
    const quarter = Math.floor(date.getMonth() / 3) + 1;
    return `Q${quarter} ${date.getFullYear()}`;
};

const Home: React.FC = () => {
    const navigate = useNavigate();
    const currentQuarter = getCurrentQuarter();

    const handleNavigation = (path: string) => navigate(path);

    return (
        <div
            className="relative w-full min-h-[100dvh] text-[#E5E5E5] overflow-x-hidden font-sans selection:bg-white/20 selection:text-white flex flex-col"
            style={{ color: '#E5E5E5' }}
        >

            {/* Main Content Layout */}
            {/* pt-20 for mobile safety. Grid used on desktop, stacked on mobile. */}
            {/* Added lg:pl-32 to accommodate Left Navigation (approx 80px width impact) */}
            <div className="relative z-10 w-full max-w-[1600px] flex-1 mx-auto px-6 md:px-12 lg:pr-20 lg:pl-32 xl:px-32 grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-12 py-20 lg:py-0">

                {/* Hero Section (Left Column) - col-span-8 gives width constraint on desktop */}
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

                    <motion.h1
                        variants={itemVariants}
                        className="text-display-xl text-white mix-blend-screen"
                    >
                        <span className="text-neutral-400">Hey, I'm Mert.</span><br />
                        <span className="text-neutral-500">I </span>design<span className="text-neutral-500"> and </span>build<br />
                        <span className="text-neutral-500">digital products.</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        variants={itemVariants}
                        className="mt-8 md:mt-12 text-body-lg text-neutral-400 ml-1 w-full max-w-lg lg:max-w-none lg:whitespace-nowrap"
                    >
                        Helping people spend less time clicking and more time living.
                    </motion.p>
                </motion.div>

                {/* Navigation Section (Right Column) */}
                <motion.div
                    className="lg:col-span-4 flex flex-col justify-center relative z-30 lg:pl-16 xl:pl-24 mt-8 lg:mt-0"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ minWidth: '300px' }} // Ensure nav doesn't get crushed
                >
                    <div className="w-full flex flex-col">
                        <ListItem number="01" label="View Portfolio" onClick={() => handleNavigation('/portfolio')} />
                        <ListItem number="02" label="My Process" onClick={() => handleNavigation('/process')} />
                        <ListItem number="03" label="About Me" onClick={() => handleNavigation('/about')} />
                    </div>

                    <motion.div variants={itemVariants} className="mt-12 w-full flex items-center justify-between group cursor-pointer whitespace-nowrap" onClick={() => handleNavigation('/contact')}>
                        <div className="flex flex-col shrink-0">
                            <span className="text-card-title text-white group-hover:text-neutral-300 transition-colors">Get in touch</span>
                            <span className="text-caption font-mono text-neutral-600 mt-1">Available {currentQuarter}</span>
                        </div>
                        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 shrink-0 ml-4">
                            <ArrowUpRight size={20} />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

// Refactored List Item
const ListItem: React.FC<{ number: string; label: string; onClick: () => void }> = ({ number, label, onClick }) => {
    return (
        <motion.div variants={itemVariants} className="relative group">
            <button
                onClick={onClick}
                className="w-full py-6 md:py-8 border-t border-white/10 flex items-center justify-between text-left outline-none group-focus:bg-white/5 transition-colors duration-300"
            >
                <div className="flex items-center gap-4 md:gap-8">
                    <span className="text-caption font-mono text-neutral-600 group-hover:text-neutral-400 transition-colors">{number}</span>
                    <span className="text-card-title text-neutral-300 group-hover:text-white transition-colors whitespace-nowrap">{label}</span>
                </div>

                <div className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out">
                    <ArrowRight size={20} className="text-white" />
                </div>
            </button>
        </motion.div>
    );
};

export default Home;
