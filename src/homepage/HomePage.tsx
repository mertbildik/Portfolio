import React, { useEffect } from 'react';
import HeroSection from './sections/HeroSection';
import PortfolioSection from './sections/PortfolioSection';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';

const HomePage: React.FC = () => {
    useEffect(() => {
        if (window.location.hash) {
            document.getElementById(window.location.hash.slice(1))?.scrollIntoView();
        }
    }, []);

    return (
        <>
            <HeroSection />
            <PortfolioSection />
            <AboutSection />
            <ContactSection />

            <div className="fixed bottom-8 left-6 z-40 hidden lg:block pointer-events-none">
                <span className="text-caption text-ink-low font-mono uppercase">
                    Mert Bildik © 2026
                </span>
            </div>
        </>
    );
};

export default HomePage;
