import React from 'react';
import { Link } from 'react-router-dom';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({projects}) => {
    return ( 
        <div className="flex flex-col">
            {projects && projects.map(project => (
                <Link key={project.id} to={'/project/' + project.id}>
                    <ProjectSummary  title={project.title} firstName={project.authorFirstName} lastName={project.authorLastName} date={project.createdAt}/>
                </Link>
            ))}
        </div>
     );
}
 
export default ProjectList;