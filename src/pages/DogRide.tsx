import React from 'react';
import ProjectTemplate from '../templates/projects/ProjectTemplate';
import { PROJECT_CONTENT } from '../data/project-content';

const DogRide: React.FC = () => {
    const data = PROJECT_CONTENT.find(s => s.id === 'dog-and-ride');
    return <ProjectTemplate
        project={data}
        layoutOverrides={{
            textBalance: true,
            tighterMeasure: true
        }}
    />;
};

export default DogRide;
