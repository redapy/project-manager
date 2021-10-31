import React, { useEffect} from 'react';
//components
import ProjectList from '../projects/ProjectList';
import Notifications from './Notifications';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { syncingAction } from '../../store/actions/syncingAction';
//firebase
import { onSnapshot, collection } from 'firebase/firestore';
import {auth, firestore} from '../../configs/fbConfig';
//router
import { Redirect } from 'react-router-dom';

const Dashboard = () => {
    
    const projects = useSelector(state => state.project.projects);
    const dispatch = useDispatch();
    const currentUser = auth.currentUser
    

    useEffect(() => {
        const projectsRef = collection(firestore, 'projects');
        const unsb = onSnapshot( projectsRef, snapshot => {
            dispatch(syncingAction(snapshot.docs.map(doc => ({...doc.data(), id: doc.id}))))
        });
        return unsb
    }, [dispatch])

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