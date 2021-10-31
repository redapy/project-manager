import React, { useEffect } from 'react';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { syncingAction } from '../../store/actions/syncingAction';
//firebase
import {auth, firestore} from '../../configs/fbConfig';
import { collection, onSnapshot } from 'firebase/firestore';
// router
import { Redirect } from 'react-router-dom';

 const ProjectDetails = ({match}) => {

    const dispatch = useDispatch()
    const id = match.params.id;
    const currentUser = auth.currentUser

    //sync firestore with redux-store
     useEffect(() => {
        const projectRef = collection(firestore, 'projects')
        const unsb = onSnapshot(projectRef, snapshot => {
            dispatch(syncingAction(snapshot.docs.map(doc => ({...doc.data(), id: doc.id}))))
        })
        return unsb
     }, [dispatch])

     
    const project = useSelector(state => state.project.projects.filter(p => p.id === id)[0]);
    
    if (!currentUser) return <Redirect to="/signin" />
     
     return ( 
         <div className="flex flex-col w-4/6 mx-auto my-16 min-h-screen">
            {project ? (
                <>
                <span className="text-gray-800 font-bold text-2xl mb-6">{project.title}</span>
                <p>{project.content}</p>
                <div className="flex flex-col md:flex-row md:justify-between text-gray-400 mt-6 border-t-2 border-gray-200 py-4 w-full">
                 <span>Posted by {project.authorFirstName} {project.authorLastName}</span>
                 <p>third september</p>
                </div>
                </>
            ) : (
                <div>Loading.....</div>
            )}
         </div>
      );
 }
  
 export default ProjectDetails;