import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../configs/fbConfig';
//components
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';


const Navbar = () => {

    const currentUser = auth.currentUser

    return ( 
        <nav className='bg-gray-600 h-20 flex items-center'>
            <div className='w-full flex items-center justify-between '>
                <Link to="/" className='text-white text-2xl ml-48'>Leloouch's Manager</Link>
                {currentUser ? <SignedIn /> : <SignedOut /> }
            </div>
        </nav>
     );
}
 
export default Navbar;