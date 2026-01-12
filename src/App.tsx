import React, { Suspense } from 'react';
import { HashRouter, Routes, Route, useLocation, Navigate, useParams } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Navigation from './components/Navigation';
import GlobalBackground from './components/GlobalBackground';

// Page Imports (Lazy)
const Home = React.lazy(() => import('./pages/Home'));
const Portfolio = React.lazy(() => import('./pages/Portfolio'));
const Process = React.lazy(() => import('./pages/Process'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const CV = React.lazy(() => import('./pages/CV'));

// Project Pages (Client Work) (Lazy)
const DogRide = React.lazy(() => import('./pages/DogRide'));
const Bunect = React.lazy(() => import('./pages/Bunect'));
const Adclusive = React.lazy(() => import('./pages/Adclusive'));

// Experience & Venture Pages (Lazy)
const McKinsey = React.lazy(() => import('./pages/McKinsey'));
const Curvix = React.lazy(() => import('./pages/Curvix'));
const GalaNetwork = React.lazy(() => import('./pages/GalaNetwork'));

// Redirect helper for legacy URLs
const LegacyCaseStudyRedirect = () => {
  const { id } = useParams();
  return <Navigate to={`/portfolio/${id}`} replace />;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      {/* @ts-expect-error: Routes does not officially support 'key' but it is required for AnimatePresence to work correctly */}
      <Suspense fallback={<div className="min-h-screen bg-black" />}>
        <Routes location={location} key={location.pathname}>
          {/* Core Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/process" element={<Process />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cv" element={<CV />} />

          {/* Portfolio Detail Pages - New Route Structure */}
          <Route path="/portfolio/dog-and-ride" element={<DogRide />} />
          <Route path="/portfolio/bunect" element={<Bunect />} />
          <Route path="/portfolio/adclusive" element={<Adclusive />} />
          <Route path="/portfolio/mckinsey" element={<McKinsey />} />
          <Route path="/portfolio/curvix" element={<Curvix />} />
          <Route path="/portfolio/gala-network" element={<GalaNetwork />} />

          {/* Backward Compatibility Redirects */}
          <Route path="/case-study/:id" element={<LegacyCaseStudyRedirect />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

const Content: React.FC = () => {
  const location = useLocation();
  const isCvPage = location.pathname === '/cv';

  if (isCvPage) {
    return <CV />;
  }

  // Layout Logic
  const isHome = location.pathname === '/';
  const isPortfolio = location.pathname === '/portfolio';
  const isProcess = location.pathname === '/process';
  const isAbout = location.pathname === '/about';
  const isContact = location.pathname === '/contact';

  // "Detail Page" logic - any /portfolio/ route deeper than just /portfolio
  const isDetailPage = location.pathname.startsWith('/portfolio/') && location.pathname !== '/portfolio';

  return (
    <div className="flex flex-col min-h-screen text-white font-sans selection:bg-white selection:text-black relative">

      {/* Global Unified Background - Applied Everywhere */}
      <GlobalBackground />

      {/* Global Navigation - Excluded on Detail Pages (which have their own TOC or sidebar) */}
      {!isDetailPage && <Navigation />}

      {/* Main Content Area */}
      {/* Content Wrapper - Applied to generic pages, skipped for custom layouts */}
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