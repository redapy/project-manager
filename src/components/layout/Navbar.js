import React from 'react';
import { Link } from 'react-router-dom';
//components
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';

const Navbar = () => {
    return ( 
        <nav className='bg-gray-600 h-20'>
            <div className='w-full flex items-center justify-between '>
                <Link to="/" className='text-white text-2xl ml-48'>Leloouch's Manager</Link>
                <SignedIn />
                <SignedOut />
            </div>
        </nav>
     );
}
 
export default Navbar;