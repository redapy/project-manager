import React, { useState } from 'react';
//redux
import { signIn } from '../../store/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';


const SignIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const authError = useSelector(state => state.auth.authError)

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(signIn(email, password));
    }
    const handleChange = e => {
        e.target.id === 'email' ? setEmail(e.target.value) : setPassword(e.target.value)
    }

    return (
        <div className="w-3/5 min-h-screen flex justify-start mx-auto mt-10">
            <form onSubmit={handleSubmit} className='w-full'>
                <h3 className='text-gray-700 text-2xl font-bold pb-4'>Sign In</h3>
                <div>
                    <label className='block mb-2 font-semibold' htmlFor="email">Email addres:</label>
                    <input className="text-gray-600 border-b-2 w-full py-2 px-3 focus:outline-none focus:border-blue-400" value={email} onChange={handleChange}  type="email" id="email" placeholder="enter your email adress"/>
                </div>
                <div>
                    <label className='block mt-6 font-semibold' htmlFor="password">Password:</label>
                    <input className="text-gray-600 border-b-2 w-full py-2 px-3 focus:outline-none focus:border-blue-400" value={password} onChange={handleChange}  type="password" id="password" placeholder="******************"/>
                </div>
                <button className="btn mt-6 hover:scale-125" type="submit text-center">Log In</button>
                <div className='text-red-600 text-xl flex justify-center m-auto mt-4'>
                    {authError ? <p>{authError}</p> : null}
                </div>
            </form>
        </div>
    );
}
 
export default SignIn;