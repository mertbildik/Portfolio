import React from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { caseStudies } from '../data/case-studies.tsx';

interface CaseStudyLayoutProps {
    children: React.ReactNode;
    currentId: string;
}

const CaseStudyLayout: React.FC<CaseStudyLayoutProps> = ({ children, currentId }) => {
    const navigate = useNavigate();

    const currentIndex = caseStudies.findIndex(cs => cs.id === currentId);
    const prevProject = caseStudies[currentIndex - 1];
    const nextProject = caseStudies[currentIndex + 1];
    const currentProject = caseStudies[currentIndex];

    const handleNavigate = (id: string) => {
        navigate(`/portfolio/${id}`);
    };

    return (
        <div className="min-h-screen bg-dark-main text-light-text flex flex-col">
            {/* Fixed Top Bar */}
            <nav className="fixed top-0 left-0 right-0 z-[100] bg-dark-main/80 backdrop-blur-xl border-b border-white/5 h-16 md:h-20 flex items-center px-4 md:px-8">
                <div className="max-w-7xl mx-auto w-full flex items-center justify-between">

                    {/* Left: Go Back */}
                    <Link
                        to="/portfolio"
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                    >
                        <div className="p-2 rounded-full bg-white/5 border border-white/5 group-hover:border-white/10 transition-all">
                            <X size={18} />
                        </div>
                        <span className="hidden md:inline text-xs font-mono uppercase tracking-widest font-bold">Close</span>
                    </Link>

                    {/* Center: Title */}
                    <div className="absolute left-1/2 -translate-x-1/2 text-center pointer-events-none">
                        <span className="text-xs font-mono text-teal-accent uppercase tracking-[0.2em] font-bold block mb-0.5 opacity-50">Case Study</span>
                        <h2 className="text-sm md:text-base font-display font-medium text-white tracking-wide truncate max-w-[150px] md:max-w-none">
                            {currentProject?.title}
                        </h2>
                    </div>

                    {/* Right: Prev/Next Controls */}
                    <div className="flex items-center gap-2 md:gap-4">
                        <button
                            onClick={() => prevProject && handleNavigate(prevProject.id)}
                            disabled={!prevProject}
                            className={`p-2 md:p-3 rounded-full border border-white/5 transition-all flex items-center justify-center ${prevProject ? 'bg-white/5 text-white hover:border-white/20 hover:bg-white/10' : 'text-gray-700 cursor-not-allowed opacity-30'
                                }`}
                            aria-label="Previous project"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={() => nextProject && handleNavigate(nextProject.id)}
                            disabled={!nextProject}
                            className={`p-2 md:p-3 rounded-full border border-white/5 transition-all flex items-center justify-center ${nextProject ? 'bg-white/5 text-white hover:border-white/20 hover:bg-white/10' : 'text-gray-700 cursor-not-allowed opacity-30'
                                }`}
                            aria-label="Next project"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Content Area */}
            <main className="flex-1 pt-16 md:pt-20">
                {children}
            </main>
        </div>
    );
};

export default CaseStudyLayout;
