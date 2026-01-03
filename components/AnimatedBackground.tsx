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
                className="absolute -top-[20%] -right-[20%] w-[80vw] h-[80vw] bg-white rounded-full blur-[140px] opacity-[0.015]"
                animate={shouldReduceMotion ? {} : {
                    x: [0, -30, 0],
                    y: [0, 20, 0],
                    scale: [1, 1.02, 1],
                    rotate: [0, 3, 0],
                }}
                transition={{
                    duration: 90,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                }}
            />

            <motion.div
                className="absolute -bottom-[20%] -left-[20%] w-[70vw] h-[70vw] bg-white rounded-full blur-[150px] opacity-[0.01]"
                animate={shouldReduceMotion ? {} : {
                    x: [0, 40, 0],
                    y: [0, -20, 0],
                    scale: [1, 1.03, 1],
                }}
                transition={{
                    duration: 80,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: 5
                }}
            />

            {/* Layer 2: Noise Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay">
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
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#050505_100%)] opacity-80" />
        </div>
    );
};

export default AnimatedBackground;
