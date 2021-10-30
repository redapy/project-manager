import React, { useEffect} from 'react';
import ProjectList from '../projects/ProjectList';
import Notifications from './Notifications';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { syncingAction } from '../../store/actions/syncingAction';
//firebase
import { onSnapshot, collection } from 'firebase/firestore';
import {firestore} from '../../configs/fbConfig';

const Dashboard = () => {
    
    const projects = useSelector(state => state.project.projects);
    const dispatch = useDispatch();

    useEffect(() => {
        const projectsRef = collection(firestore, 'projects');
        const unsb = onSnapshot( projectsRef, snapshot => {
            dispatch(syncingAction(snapshot.docs.map(doc => ({...doc.data(), id: doc.id}))))
        });
        return unsb
    }, [dispatch])

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