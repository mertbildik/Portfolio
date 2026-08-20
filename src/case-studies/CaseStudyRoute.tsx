import React from 'react';
import { Navigate, useParams } from 'react-router';
import { PROJECTS, type CustomProject } from '../content/projects';
import ProjectTemplate from './ProjectTemplate';
import EmploymentTemplate from './EmploymentTemplate';

/** Ventures whose page is written by hand rather than driven by content. */
const HAND_WRITTEN: Record<CustomProject['page'], React.LazyExoticComponent<React.ComponentType<{ project: CustomProject }>>> = {
    curvix: React.lazy(() => import('./Curvix')),
    'gala-network': React.lazy(() => import('./GalaNetwork')),
};

const CaseStudyRoute: React.FC = () => {
    const { id = '' } = useParams();
    const project = PROJECTS.find((entry) => entry.id === id);

    if (!project) return <Navigate to="/#portfolio" replace />;

    if (project.renderer === 'template') return <ProjectTemplate project={project} />;
    if (project.renderer === 'employment') return <EmploymentTemplate data={project.employment} />;

    const HandWritten = HAND_WRITTEN[project.page];
    return <HandWritten project={project} />;
};

export default CaseStudyRoute;
