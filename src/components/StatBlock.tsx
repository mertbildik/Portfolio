import React from 'react';
import { motion } from 'framer-motion';
import { EASE } from './motion';

interface StatBlockProps {
    value: string;
    label: string;
    desc: string;
    delay: number;
}

const StatBlock: React.FC<StatBlockProps> = ({ value, label, desc, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10%' }}
        transition={{ duration: 0.8, delay, ease: EASE }}
        className="relative flex flex-col items-start text-left p-6 min-h-[180px] border-l border-line"
    >
        {/* Top border, so the blocks read as one grid */}
        <div className="absolute top-0 left-0 w-full h-px bg-line" />

        <div className="w-full">
            <span className="block text-display-md text-ink-max">
                {value}
            </span>
        </div>

        <div className="flex flex-col gap-2 mt-6 w-full items-start">
            <span className="block text-eyebrow font-mono uppercase text-ink-body">
                {label}
            </span>
            <p className="text-body-sm text-ink-low">
                {desc}
            </p>
        </div>
    </motion.div>
);

export default StatBlock;
