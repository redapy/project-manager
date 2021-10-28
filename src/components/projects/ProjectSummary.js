import React from 'react';

const ProjectSummary = ({title, content}) => {
    return ( 
    <div className="flex flex-col my-4 bg-white p-4 pr-40 shadow-lg rounded-lg">
        <span className="text-2xl text-gray-600 font-bold pb-2">{title}</span>
        <p className="text-lg ">{content}</p>
        <p className="text-md text-gray-400">third september</p>
    </div>
     );
}
 
export default ProjectSummary;