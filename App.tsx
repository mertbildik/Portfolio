import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './src/pages/Home';
import Portfolio from './src/pages/Portfolio';
import Process from './src/pages/Process';
import About from './src/pages/About';
import Contact from './src/pages/Contact';
import CV from './src/pages/CV';
import Navigation from './src/components/Navigation';
import CaseStudy from './src/pages/CaseStudy';
import EmploymentVentures from './src/pages/EmploymentVentures'; // Keep if used directly or for fallback
import McKinsey from './src/pages/McKinsey';
import DogRide from './src/pages/DogRide';
import Bunect from './src/pages/Bunect';
import Adclusive from './src/pages/Adclusive';
import Curvix from './src/pages/Curvix';
import GalaNetwork from './src/pages/GalaNetwork';
import GlobalBackground from './src/components/GlobalBackground';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      {/* @ts-expect-error: Routes does not officially support 'key' but it is required for AnimatePresence to work correctly */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />

        {/* Client Projects */}
        <Route path="/case-study/dog-and-ride" element={<DogRide />} />
        <Route path="/case-study/bunect" element={<Bunect />} />
        <Route path="/case-study/adclusive" element={<Adclusive />} />

        {/* Employment & Ventures */}
        <Route path="/case-study/mckinsey" element={<McKinsey />} />
        <Route path="/case-study/curvix" element={<Curvix />} />
        <Route path="/case-study/gala-network" element={<GalaNetwork />} />

        {/* Generic Case Study Route (Fallback) */}
        <Route path="/case-study/:id" element={<CaseStudy />} />
        <Route path="/process" element={<Process />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<CV />} />
      </Routes>
    </AnimatePresence>
  );
};

const Content: React.FC = () => {
  const location = useLocation();
  const isCvPage = location.pathname === '/cv';

  if (isCvPage) {
    return <CV />;
  }

  // Determine if we need max-width wrapper (pages other than Home and Portfolio)
  const isHome = location.pathname === '/';
  const isPortfolio = location.pathname === '/portfolio';
  const isProcess = location.pathname === '/process';
  const isAbout = location.pathname === '/about'; // Exclude Process from generic wrapper
  const isContact = location.pathname === '/contact';

  const isCaseStudy = location.pathname.startsWith('/case-study/');

  return (
    <div className="flex flex-col min-h-screen text-white font-sans selection:bg-white selection:text-black relative">

      {/* Global Unified Background - Applied Everywhere */}
      <GlobalBackground />

      {/* Global Navigation - Excluded on Case Studies (which have their own TOC) */}
      {!isCaseStudy && <Navigation />}

      {/* Main Content Area */}
      {/* Content Wrapper - Applied to generic pages, skipped for custom layouts (Home, Portfolio, Process, About) */}
      <main className={`flex-1 w-full relative z-10 flex flex-col ${!isHome && !isPortfolio && !isProcess && !isAbout && !isContact ? 'max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 xl:px-32 pt-24 pb-32' : ''}`}>
        <AnimatedRoutes />
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="antialiased min-h-screen">
        <Content />
      </div>
    </HashRouter>
  );
};

export default App;