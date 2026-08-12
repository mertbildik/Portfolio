import React from 'react';
import { motion } from 'motion/react';

const GlobalBackground: React.FC = () => {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            <div className="absolute inset-0 bg-canvas z-0" />
            <motion.div
                className="absolute inset-[-50%] w-[200%] h-[200%] opacity-[0.15]"
                style={{
                    backgroundImage: 'radial-gradient(circle, #888 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                    willChange: 'transform',
                    backfaceVisibility: 'hidden',
                }}
                animate={{ x: [0, -24, 0], y: [0, -12, 0], z: 0 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
                className="absolute inset-[-50%] w-[200%] h-[200%] opacity-[0.1]"
                style={{
                    backgroundImage: 'radial-gradient(circle, #AAA 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                    willChange: 'transform',
                    backfaceVisibility: 'hidden',
                }}
                animate={{ x: [0, 32, 0], scale: [1, 1.05, 1], rotate: [0, 1, 0], z: 0 }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-canvas via-canvas/80 to-transparent z-0" />
        </div>
    );
};

export default GlobalBackground;
