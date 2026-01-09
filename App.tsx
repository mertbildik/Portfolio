import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Process from './pages/Process';
import About from './pages/About';
import Contact from './pages/Contact';
import CV from './pages/CV';
import Navigation from './src/components/Navigation';
import CaseStudy from './pages/CaseStudy';
import GlobalBackground from './src/components/GlobalBackground';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      {/* @ts-expect-error: Routes does not officially support 'key' but it is required for AnimatePresence to work correctly */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
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
    <div className="flex flex-col min-h-screen text-white font-sans selection:bg-white selection:text-black relative overflow-x-hidden">

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