import React, { useLayoutEffect } from 'react';
import { useLocation } from 'react-router';

const CaseStudyLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { pathname } = useLocation();

    useLayoutEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, [pathname]);

    return (
        /* Case studies keep their wider frame for galleries and content rails. */
        <div className="w-full max-w-shell mx-auto px-6 md:px-12 lg:pl-32 lg:pr-20 xl:px-32 pt-24 pb-32 flex-1 flex flex-col">
            {children}
        </div>
    );
};

export default CaseStudyLayout;
