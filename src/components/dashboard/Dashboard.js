import React from 'react';
//components
import ProjectList from '../projects/ProjectList';
import Notifications from './Notifications';
//redux
import { useSelector} from 'react-redux';
import { syncingProject } from '../../store/actions/projectActions';
//firebase
import {auth} from '../../configs/fbConfig';
//router
import { Redirect } from 'react-router-dom';
//hook
import { useSyncProject } from '../../hooks/useSyncProject';


const Dashboard = () => {
    
    const projects = useSelector(state => state.project.projects);
    const currentUser = auth.currentUser
    

   //sync firestore with redux-store
   useSyncProject('projects', syncingProject)

    if (!currentUser) return <Redirect to="signin" />

    return ( 
        <div className="grid grid-cols-12 ">
            <div className="col-span-6 m-auto mt-16">
                <ProjectList projects={projects} />
            </div>
            <div className="col-span-5 md:col-span-6 mx-auto mt-10">
                <Notifications />
            </div>
        </div>
     );
}
 
export default Dashboard;