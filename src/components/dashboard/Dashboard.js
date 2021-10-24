import React from 'react';
import ProjectList from '../projects/ProjectList';
import Notifications from './Notifications';

const Dashboard = () => {
    return ( 
        <div className="grid grid-cols-12 ">
            <div className="col-span-6 m-auto mt-16">
                <ProjectList />
            </div>
            <div className="col-span-5 md:col-span-6 mx-auto mt-10">
                <Notifications />
            </div>
        </div>
     );
}
 
export default Dashboard;