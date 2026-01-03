import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Magnetic from '../components/Magnetic';

const words = ["brands.", "websites.", "presentations.", "posters."];

// Animation Variants for Staggered Blur-in
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 1.2,
            ease: [0.2, 0.65, 0.3, 0.9]
        }
    }
};

const Home: React.FC = () => {
    const [index, setIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 3000); // Slightly slower for readability
        return () => clearInterval(interval);
    }, []);

    const handleOptionClick = (path: string) => {
        navigate(path);
    };

    return (
        <div className="w-full grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-4 md:gap-x-6 lg:gap-x-8 min-h-[85vh] items-center max-w-7xl mx-auto">
            <motion.div
                className="col-span-4 md:col-span-8 lg:col-span-12 flex flex-col"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >

                {/* Availability Badge */}
                <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
                    <div className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-25"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </div>
                    <span className="text-[11px] font-mono text-muted-text tracking-[0.2em] uppercase opacity-80">Available for work</span>
                </motion.div>

                {/* Main Heading */}
                <div className="mb-12 relative z-10">
                    <motion.h1
                        variants={itemVariants}
                        className="text-h2 md:text-[5rem] font-display font-medium leading-[1.1] tracking-[-0.03em] text-light-text selection:bg-white selection:text-black mix-blend-plus-lighter"
                    >
                        Hey, I'm Mert. <br />
                        <span className="text-muted-text opacity-60">I design </span>
                        <span className="relative inline-block min-w-[200px] md:min-w-[400px]">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={index}
                                    initial={{ y: 20, opacity: 0, filter: 'blur(8px)' }}
                                    animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                                    exit={{ y: -20, opacity: 0, filter: 'blur(8px)' }}
                                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                    className={`absolute left-0 block ${words[index] === "presentations." ? "text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40 animate-pulse" : "text-white"}`}
                                >
                                    {words[index]}
                                </motion.span>
                            </AnimatePresence>
                            <span className="invisible">{words[0]}</span>
                        </span>
                    </motion.h1>

                    {/* Value Proposition */}
                    <motion.div variants={itemVariants} className="mt-8 relative pl-6 border-l border-white/10">
                        <p className="text-h6 text-muted-text max-w-xl font-light leading-p tracking-normal opacity-80">
                            Helping people spend less time clicking and more time living.
                        </p>
                    </motion.div>
                </div>

                {/* Interactive Grid Section */}
                <div className="grid lg:grid-cols-12 gap-12 items-end mb-20">
                    {/* Q&A Options */}
                    <div className="lg:col-span-7 space-y-8">
                        <motion.h2
                            variants={itemVariants}
                            className="text-[11px] font-mono text-muted-text uppercase tracking-[0.2em] opacity-60 ml-1"
                        >
                            What brings you here today?
                        </motion.h2>

                        <motion.div variants={itemVariants} className="grid grid-cols-1 gap-3">
                            <OptionCard
                                label="A"
                                icon="✨"
                                text="I've seen your work before and would love to explore more."
                                onClick={() => handleOptionClick('/portfolio')}
                            />
                            <OptionCard
                                label="B"
                                icon="🚀"
                                text="Can I see how you work?"
                                onClick={() => handleOptionClick('/process')}
                            />
                            <OptionCard
                                label="C"
                                icon="👋"
                                text="Sorry, but who are you?"
                                onClick={() => handleOptionClick('/about')}
                            />
                        </motion.div>
                    </div>

                    {/* Magnetic CTA */}
                    <motion.div variants={itemVariants} className="lg:col-span-5 flex justify-start lg:justify-end pb-2">
                        <div className="flex flex-col gap-6">
                            <span className="text-muted-text text-sm font-light opacity-60">If you’d like more information, feel free to</span>
                            <Magnetic>
                                <Link
                                    to="/contact"
                                    className="group relative inline-flex items-center gap-3 px-8 py-3 rounded-full border border-white/20 hover:bg-white/5 text-white font-medium text-body transition-all duration-500 overflow-hidden"
                                >
                                    <span className="relative z-10">Get in touch</span>
                                    <motion.span
                                        className="relative z-10"
                                        initial={{ x: 0 }}
                                        whileHover={{ x: 3 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        <ArrowRight size={18} />
                                    </motion.span>


                                </Link>
                            </Magnetic>
                        </div>
                    </motion.div>
                </div>

            </motion.div>
        </div>
    );
};

interface OptionCardProps {
    label: string;
    icon: string;
    text: string;
    onClick: () => void;
}

const OptionCard: React.FC<OptionCardProps> = ({ label, icon, text, onClick }) => {
    return (
        <motion.button
            whileHover={{ x: 6, backgroundColor: "rgba(255,255,255,0.01)" }}
            whileTap={{ x: 2 }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
            onClick={onClick}
            className="group relative w-full text-left py-4 px-2 border-b border-white/5 bg-transparent transition-all duration-700 flex items-baseline gap-6"
        >
            <div className="flex-shrink-0 font-mono text-xs text-muted-text/50 group-hover:text-muted-text transition-colors duration-500">
                {label} —
            </div>

            <div className="flex-grow">
                <h3 className="text-muted-text font-light text-[0.95rem] tracking-wide group-hover:text-white transition-colors duration-500 flex items-center gap-4">
                    <span className="opacity-90 group-hover:opacity-100 transition-all duration-500">{text}</span>
                </h3>
            </div>

            <div className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out">
                <ArrowRight className="text-white opacity-60" size={14} />
            </div>
        </motion.button>
    );
};

export default Home;
