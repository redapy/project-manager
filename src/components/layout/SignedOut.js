import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOut = () => {
    return ( 
        <ul className='text-white text-xl w-1/3	flex items-center justify-center mr-20'>
            <li className='p-6'>
                <NavLink to='/signup'>Signup</NavLink>
            </li>
            <li className='p-6'>
                <NavLink to='/signin'>Log In</NavLink>
            </li>
        </ul>
     );
}
 
export default SignedOut;