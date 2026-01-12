import React from 'react';
import EmploymentTemplate from '../templates/employment/EmploymentTemplate';
import { EMPLOYMENT_CONTENT } from '../data/venture-content';

const McKinsey: React.FC = () => {
    return <EmploymentTemplate data={EMPLOYMENT_CONTENT['mckinsey']} />;
};

export default McKinsey;
