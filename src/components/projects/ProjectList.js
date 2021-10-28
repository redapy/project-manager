import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({projects}) => {
    return ( 
        <div className="flex flex-col">
            {projects && projects.map(project => (
                <ProjectSummary key={project.id} title={project.title} content={project.content}/>
            ))}
        </div>
     );
}
 
export default ProjectList;