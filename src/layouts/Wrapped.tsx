import React from 'react';
import { Outlet } from 'react-router-dom';

/** Shared page frame for routes that do not lay themselves out. */
const Wrapped: React.FC = () => (
    <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 xl:px-32 pt-24 pb-32 flex-1 flex flex-col">
        <Outlet />
    </div>
);

export default Wrapped;
