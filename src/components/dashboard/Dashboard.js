import React from 'react';
//components
import ProjectList from '../projects/ProjectList';
import Notifications from './Notifications';
//redux
import { useSelector} from 'react-redux';
import { syncingProject } from '../../store/actions/projectActions';
import { syncNotification } from '../../store/actions/notificationAction';
//firebase
import {auth} from '../../configs/fbConfig';
//router
import { Redirect } from 'react-router-dom';
//hook
import { useSync } from '../../hooks/useSync';



const Dashboard = () => {
    
   //sync firestore with redux-store
   useSync('projects', syncingProject)
   useSync('notification', syncNotification)

   const currentUser = auth.currentUser;
   const projects = useSelector(state => state.project.projects).sort((a,b) => b.createdAt - a.createdAt);
   const notifications = useSelector(state => state.notification.notifications).sort((a,b) => b.time - a.time).slice(0,3);
  

    if (!currentUser) return <Redirect to="signin" />

    return ( 
        <div className="grid grid-cols-12 ">
            <div className="col-span-6 m-auto mt-16">
                {!(projects.length > 0) && <div className='text-gray-600 text-xl'>There is not projects added yet, add some !</div>}
                <ProjectList projects={projects} />
            </div>
            <div className="col-span-5 md:col-span-6 mx-auto mt-10">
                <Notifications notifications={notifications}/>
            </div>
        </div>
     );
}
 
export default Dashboard;