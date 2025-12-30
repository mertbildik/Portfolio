import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-dark-main pointer-events-none">
            {/* 
                Layer 1: Subtle Drifting Gradient (Teal Accent)
                - Very low opacity (0.08) for premium subtlety
                - Slow 25s duration loop
            */}
            <motion.div
                className="absolute -top-[20%] -right-[20%] w-[80vw] h-[80vw] bg-teal-accent rounded-full blur-[120px] opacity-[0.08]"
                animate={shouldReduceMotion ? {} : {
                    x: [0, -100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                }}
            />

            <motion.div
                className="absolute -bottom-[20%] -left-[20%] w-[60vw] h-[60vw] bg-teal-accent rounded-full blur-[100px] opacity-[0.05]"
                animate={shouldReduceMotion ? {} : {
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: 2
                }}
            />

            {/* Layer 2: Noise Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <filter id="noiseFilter">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.8"
                            numOctaves="3"
                            stitchTiles="stitch"
                        />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#noiseFilter)" />
                </svg>
            </div>

            {/* Layer 3: Soft Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0f1115_100%)] opacity-80" />
        </div>
    );
};

export default AnimatedBackground;
