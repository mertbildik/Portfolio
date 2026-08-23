import React, { useEffect } from 'react';
import ContactSection from '../contact/ContactSection';
import PortfolioSection from '../portfolio/PortfolioSection';
import HeroSection from './HeroSection';
import HomePageSection from './HomePageSection';

const HomePage: React.FC = () => {
    useEffect(() => {
        if (window.location.hash) {
            document.getElementById(window.location.hash.slice(1))?.scrollIntoView();
        }
    }, []);

    return (
        <>
            <HomePageSection id="home" hero>
                <HeroSection />
            </HomePageSection>
            <HomePageSection id="portfolio">
                <PortfolioSection />
            </HomePageSection>
            <HomePageSection id="contact">
                <ContactSection />
            </HomePageSection>
        </>
    );
};

export default HomePage;
