import React, { useState } from 'react';

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(email, password, firstName, lastName)
    }
    const handleChange = e => {
        switch (e.target.id) {
            case 'email': setEmail(e.target.value)
                break;
            case 'password' : setPassword(e.target.value)
                break;
            case 'firstName' : setFirstName(e.target.value)
                break;
            case 'lastName' : setLastName(e.target.value)
                break;
            default : console.log('not working')
            
        }
    }

    return (
        <div className="w-3/5 min-h-screen flex justify-start mx-auto mt-10">
            <form onSubmit={handleSubmit} className='w-full'>
                <h3 className='text-gray-700 text-2xl font-bold pb-4'>Sign Up</h3>
                <div>
                    <label className='block mb-2 font-semibold' htmlFor="email">Email addres:</label>
                    <input className="text-gray-600 border-b-2 w-full py-2 px-3 focus:outline-none focus:border-blue-400" value={email} onChange={handleChange}  type="email" id="email" placeholder="enter your email adress" required/>
                </div>
                <div>
                    <label className='block mt-6 font-semibold' htmlFor="password">Password:</label>
                    <input className="text-gray-600 border-b-2 w-full py-2 px-3 focus:outline-none focus:border-blue-400" value={password} onChange={handleChange}  type="password" id="password" placeholder="******************" required/>
                </div>
                <div>
                    <label className='block mb-2 mt-6 font-semibold' htmlFor="firstName">First Name:</label>
                    <input className="text-gray-600 border-b-2 w-full py-2 px-3 focus:outline-none focus:border-blue-400" value={firstName} onChange={handleChange}  type="text" id="firstName" placeholder="enter your email adress" required/>
                </div>
                <div>
                    <label className='block mb-2 mt-6 font-semibold' htmlFor="lastName">Last Name:</label>
                    <input className="text-gray-600 border-b-2 w-full py-2 px-3 focus:outline-none focus:border-blue-400" value={lastName} onChange={handleChange}  type="text" id="lastName" placeholder="enter your email adress" required/>
                </div>
                <button className="btn mt-6 hover:scale-125" type="submit text-center">Sign Up</button>
            </form>
        </div>
    );
}
 
export default SignUp;