import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { signout } from '../../store/actions/authActions';

const SignedIn = () => {
    const dispatch = useDispatch()

    const handleSignOut = () => {
        dispatch(signout())
    }
    return ( 
        <ul className='text-white text-xl w-1/3	flex items-center justify-center mr-20'>
            <li className='p-4'>
                <NavLink to='/create'>New Projoect</NavLink>
            </li>
            <li className='p-4'>
                <NavLink to='/' onClick={handleSignOut}>Log Out</NavLink>
            </li>
            <li className='p-4 h-4 w-4 rounded-full bg-pink-500 flex justify-center items-center'>
                <NavLink to='/'>RB</NavLink>
            </li>
        </ul>
     );
}
 
export default SignedIn;