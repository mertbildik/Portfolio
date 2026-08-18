import React from 'react';
import { Navigate, useParams } from 'react-router';
import { PROJECTS } from '../../content/projects';
import { EMPLOYMENT_CONTENT } from '../../content/employment';
import ProjectTemplate from './ProjectTemplate';
import EmploymentTemplate from './EmploymentTemplate';

/** Ventures whose page is written by hand rather than driven by content. */
const HAND_WRITTEN: Record<string, React.LazyExoticComponent<React.FC>> = {
    curvix: React.lazy(() => import('./Curvix')),
    'gala-network': React.lazy(() => import('./GalaNetwork')),
};

const CaseStudy: React.FC = () => {
    const { id = '' } = useParams();

    const HandWritten = HAND_WRITTEN[id];
    if (HandWritten) return <HandWritten />;

    const employment = EMPLOYMENT_CONTENT[id];
    if (employment) return <EmploymentTemplate data={employment} />;

    const project = PROJECTS.find((p) => p.id === id);
    if (project?.caseStudy) return <ProjectTemplate project={project} />;

    return <Navigate to="/#portfolio" replace />;
};

export default CaseStudy;
