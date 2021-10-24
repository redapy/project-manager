import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = () => {
    return ( 
        <div className="flex flex-col">
            <ProjectSummary />
            <ProjectSummary />
            <ProjectSummary />
            <ProjectSummary />
        </div>
     );
}
 
export default ProjectList;