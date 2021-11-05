import React from 'react';
import moment from 'moment';

const ProjectSummary = ({title, firstName, lastName, date}) => {
    return ( 
    <div className="flex flex-col my-4 bg-white p-4 pr-40 shadow-lg rounded-lg">
        <span className="text-2xl text-gray-600 font-bold pb-2">{title}</span>
        <p className="text-lg text-gray-600">posted by <span className="font-semibold">-{`${firstName} ${lastName}`}</span></p>
        <p className="text-md text-gray-400">{moment(date.toDate()).calendar()}</p>
    </div>
     );
}
 
export default ProjectSummary;