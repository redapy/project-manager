import moment from 'moment';
import React from 'react';

const Notifications = ({notifications}) => {
    return ( 
        <div className="flex flex-col bg-white py-1 pl-4 pr-20 mt-6 shadow-lg rounded-lg">
            <span className="text-3xl my-4">Notifications</span>
            {(notifications.length === 0) &&
             <div className='text-gray-500 p-2'>There is no notifications yet</div>}
            <ul>
                {notifications && notifications.map(notification => (
                    <li key={notification.id} className="my-2">
                        <span className="text-pink-500 font-semibold">{notification.user}</span>
                        <span className="ml-2">{notification.content}</span>
                        <div className="text-gray-500">
                            {moment(notification.time.toDate()).fromNow()}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
     );
}
 
export default Notifications;