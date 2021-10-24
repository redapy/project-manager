import React, { useState } from 'react';

const Create = () => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        console.log(title, content)
    }
    const handleChange = e => {
        e.target.id === 'title' ? setTitle(e.target.value) : setContent(e.target.value)
    }

    return (
        <div className="w-3/5 min-h-screen flex justify-start mx-auto mt-10">
            <form onSubmit={handleSubmit} className='w-full'>
                <h3 className='text-gray-700 text-2xl font-bold pb-4'>Create New Project</h3>
                <div>
                    <label className='block mb-2 font-semibold' htmlFor="title">Title:</label>
                    <input className="text-gray-600 border-b-2 w-full py-2 px-3 focus:outline-none focus:border-blue-400" value={title} onChange={handleChange}  type="text" id="title" placeholder="project Title"/>
                </div>
                <div>
                    <label className="block mt-6 font-semibold" htmlFor="content">Project Content</label>
                    <textarea className="w-full border-2 border-gray-300 resize-y focus:border-blue-400 focus:outline-none p-1 mt-6" id="content"  rows="3" value={content} onChange={handleChange} placeholder='Enter your project details'></textarea>
                </div>
                <button className="btn mt-6 hover:scale-125" type="submit text-center">Create</button>
            </form>
        </div>
    );
}
 
export default Create;