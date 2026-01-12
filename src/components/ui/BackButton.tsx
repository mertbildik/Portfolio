import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton: React.FC = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        // Check if there is history to go back to within the app
        if (window.history.length > 1) {
            navigate(-1);
        } else {
            // Safe fallback default as requested
            navigate('/portfolio');
        }
    };

    return (
        <button
            onClick={handleBack}
            className="group inline-flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            aria-label="Go back"
        >
            <div className="h-[1px] w-8 bg-current transition-[width] duration-300 ease-out group-hover:w-12" />
            <span className="text-[10px] tracking-[0.2em] font-mono uppercase">GO BACK</span>
        </button>
    );
};

export default BackButton;
