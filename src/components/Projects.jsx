import project_1 from '../assets/images/project_1.png';
import project_2 from '../assets/images/food_del.png';
import project_3 from '../assets/images/form_template.png';
import project_4 from '../assets/images/todo.png';
import project_5 from '../assets/images/weatherApi.png';
import project_6 from '../assets/images/template.png'
const Projects = () => {
    return (
        <>
            <h2 className='text-center text-3xl md:text-[40px] mt-14 m-4 WorkSans-VariableFont_wght'>My Projects</h2>
            <div className='flex justify-center items-center w-full my-4 p-4 min-h-[calc(100vh-170px)'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  mx-auto ] WorkSans-Italic-VariableFont_wght text-gray-900'>
                    <div className="max-w-sm p-6 bg-white border border-gray-200 hover:border hover:border-[#b41bf2] rounded-lg shadow transform transition duration-500 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r from-yellow-200 to-pink-400">
                        <img src={project_1} alt="" />
                        <div className='flex justify-start gap-5 my-7 items-center '>
                            <button className='border rounded-lg bg-black text-white sm:py-3 sm:px-5'> <a href='https://e-commerce-chi-nine-80.vercel.app/'>Live Preview</a></button>
                            <button className='border rounded-lg bg-black text-white py-3 px-5'><a href='https://github.com/Dudschoudhary/e-commerce'>Github Link</a></button>
                        </div>
                    </div>

                    <div className="max-w-sm p-6 bg-white border border-gray-200 hover:border hover:border-[#b41bf2] rounded-lg shadow transform transition duration-500 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r from-yellow-200 to-pink-400">
                        <img src={project_2} alt="" />
                        <div className='flex justify-start gap-5 my-7 items-center '>
                            <button className='border rounded-lg bg-black text-white sm:py-3 sm:px-5'> <a href='https://e-commerce-chi-nine-80.vercel.app/'>Live Preview</a></button>
                            <button className='border rounded-lg bg-black text-white py-3 px-5'><a href='https://github.com/Dudschoudhary/e-commerce'>Github Link</a></button>
                        </div>
                    </div>

                    <div className="max-w-sm p-6 bg-white border border-gray-200 hover:border hover:border-[#b41bf2] rounded-lg shadow transform transition duration-500 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r from-yellow-200 to-pink-400">
                        <img src={project_3} alt="" />
                        <div className='flex justify-start gap-5 my-7 items-center '>
                            <button className='border rounded-lg bg-black text-white sm:py-3 sm:px-5'> <a href='https://e-commerce-chi-nine-80.vercel.app/'>Live Preview</a></button>
                            <button className='border rounded-lg bg-black text-white py-3 px-5'><a href='https://github.com/Dudschoudhary/e-commerce'>Github Link</a></button>
                        </div>
                    </div>

                    <div className="max-w-sm p-6 bg-white border border-gray-200 hover:border hover:border-[#b41bf2] rounded-lg shadow transform transition duration-500 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r from-yellow-200 to-pink-400">
                        <img src={project_3} alt="" />
                        <div className='flex justify-start gap-5 my-7 items-center '>
                            <button className='border rounded-lg bg-black text-white sm:py-3 sm:px-5'> <a href='https://e-commerce-chi-nine-80.vercel.app/'>Live Preview</a></button>
                            <button className='border rounded-lg bg-black text-white py-3 px-5'><a href='https://github.com/Dudschoudhary/e-commerce'>Github Link</a></button>
                        </div>
                    </div>

                    <div className="max-w-sm p-6 bg-white border border-gray-200 hover:border hover:border-[#b41bf2] rounded-lg shadow transform transition duration-500 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r from-yellow-200 to-pink-400">
                        <img src={project_4} alt="" />
                        <div className='flex justify-start gap-5 my-7 items-center '>
                            <button className='border rounded-lg bg-black text-white sm:py-3 sm:px-5'> <a href='https://e-commerce-chi-nine-80.vercel.app/'>Live Preview</a></button>
                            <button className='border rounded-lg bg-black text-white py-3 px-5'><a href='https://github.com/Dudschoudhary/e-commerce'>Github Link</a></button>
                        </div>
                    </div>

                    <div className="max-w-sm p-6 bg-white border border-gray-200 hover:border hover:border-[#b41bf2] rounded-lg shadow transform transition duration-500 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r from-yellow-200 to-pink-400">
                        <img src={project_5} alt="" />
                        <div className='flex justify-start gap-5 my-7 items-center '>
                            <button className='border rounded-lg bg-black text-white sm:py-3 sm:px-5'> <a href='https://e-commerce-chi-nine-80.vercel.app/'>Live Preview</a></button>
                            <button className='border rounded-lg bg-black text-white py-3 px-5'><a href='https://github.com/Dudschoudhary/e-commerce'>Github Link</a></button>
                        </div>
                    </div>

                    <div className="max-w-sm p-6 bg-white border border-gray-200 hover:border hover:border-[#b41bf2] rounded-lg shadow transform transition duration-500 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r from-yellow-200 to-pink-400">
                        <img src={project_6} alt="" />
                        <div className='flex justify-start gap-5 my-7 items-center '>
                            <button className='border rounded-lg bg-black text-white sm:py-3 sm:px-5'> <a href='https://e-commerce-chi-nine-80.vercel.app/'>Live Preview</a></button>
                            <button className='border rounded-lg bg-black text-white py-3 px-5'><a href='https://github.com/Dudschoudhary/e-commerce'>Github Link</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects