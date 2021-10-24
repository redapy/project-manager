import React from 'react';
 const ProjectDetails = ({match}) => {
     const id = match.params.id
     return ( 
         <div className="flex flex-col w-4/6 mx-auto my-16">
             <span className="text-gray-800 font-bold text-2xl mb-6">Project Title- {id}</span>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam et distinctio voluptatum asperiores harum eaque nisi doloremque ipsum delectus, fugiat illum obcaecati impedit tempora eos inventore beatae molestiae placeat excepturi!</p>
             <div className="flex flex-col md:flex-row md:justify-between text-gray-400 mt-6 border-t-2 border-gray-200 py-4 w-full">
                 <span>Posted by</span>
                 <p>third september</p>
             </div>
         </div>
      );
 }
  
 export default ProjectDetails;