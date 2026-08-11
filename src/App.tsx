import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate, useParams } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navigation from './components/Navigation';
import GlobalBackground from './components/GlobalBackground';
import Wrapped from './layouts/Wrapped';

const Home = React.lazy(() => import('./pages/Home'));
const Portfolio = React.lazy(() => import('./pages/Portfolio'));
const Process = React.lazy(() => import('./pages/Process'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const CaseStudy = React.lazy(() => import('./pages/case-studies/CaseStudy'));

const LegacyCaseStudyRedirect: React.FC = () => {
    const { id } = useParams();
    return <Navigate to={`/portfolio/${id}`} replace />;
};

const AppRoutes: React.FC = () => {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Suspense fallback={<div className="min-h-screen" />}>
                {/* key: AnimatePresence needs it to detect a page change */}
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/process" element={<Process />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />

                    <Route element={<Wrapped />}>
                        <Route path="/portfolio/:id" element={<CaseStudy />} />
                    </Route>

                    <Route path="/case-study/:id" element={<LegacyCaseStudyRedirect />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </Suspense>
        </AnimatePresence>
    );
};

const App: React.FC = () => (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <div className="antialiased flex flex-col min-h-screen text-white font-sans selection:bg-white selection:text-black relative">
            <GlobalBackground />
            <Navigation />
            <main className="flex-1 w-full relative z-10 flex flex-col">
                <AppRoutes />
            </main>
        </div>
    </BrowserRouter>
);

export default App;
