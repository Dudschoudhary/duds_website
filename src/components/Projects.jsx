import React from 'react'
import project_1 from '../assets/images/project_1.png'
const Projects = () => {
    return (
        <>
            <h2 className='text-center text-3xl md:text-[40px] m-4 WorkSans-VariableFont_wght'>My Projects</h2>
            <div className='flex justify-center items-center w-full my-4 p-4 min-h-[calc(100vh-170px)'>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  mx-auto ] WorkSans-Italic-VariableFont_wght text-gray-900'>
                    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                        <img src={project_1} alt="" />
                        <div className='flex justify-start gap-5 my-7 items-center '>
                            <button className='border rounded-lg bg-black text-white py-3 px-5'>Live Preview</button>
                            <button className='border rounded-lg bg-black text-white py-3 px-5'>GitHub Link</button>
                        </div>
                    </div>

                    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                        <img src={project_1} alt="" />
                        <div className='flex justify-start gap-5 my-7 items-center '>
                            <button className='border rounded-lg bg-black text-white py-3 px-5'>Live Preview</button>
                            <button className='border rounded-lg bg-black text-white py-3 px-5'>GitHub Link</button>
                        </div>
                    </div>

                    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                        <img src={project_1} alt="" />
                        <div className='flex justify-start gap-5 my-7 items-center '>
                            <button className='border rounded-lg bg-black text-white py-3 px-5'>Live Preview</button>
                            <button className='border rounded-lg bg-black text-white py-3 px-5'>GitHub Link</button>
                        </div>
                    </div>

                    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                        <img src={project_1} alt="" />
                        <div className='flex justify-start gap-5 my-7 items-center '>
                            <button className='border rounded-lg bg-black text-white py-3 px-5'>Live Preview</button>
                            <button className='border rounded-lg bg-black text-white py-3 px-5'>GitHub Link</button>
                        </div>
                    </div>

                    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                        <img src={project_1} alt="" />
                        <div className='flex justify-start gap-5 my-7 items-center '>
                            <button className='border rounded-lg bg-black text-white py-3 px-5'>Live Preview</button>
                            <button className='border rounded-lg bg-black text-white py-3 px-5'>GitHub Link</button>
                        </div>
                    </div>

                    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                        <img src={project_1} alt="" />
                        <div className='flex justify-start gap-5 my-7 items-center '>
                            <button className='border rounded-lg bg-black text-white py-3 px-5'>Live Preview</button>
                            <button className='border rounded-lg bg-black text-white py-3 px-5'>GitHub Link</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects