import project_1 from '../assets/images/project_1.png';
import project_2 from '../assets/images/food_del.png';
import project_3 from '../assets/images/form_template.png';
import project_4 from '../assets/images/todo.png';
import project_5 from '../assets/images/weatherApi.png';
import project_6 from '../assets/images/template.png'
const Projects = () => {
    return (
        <>
            <h2 className='text-center text-3xl md:text-[40px] mt-14 m-4 WorkSans-VariableFont_wght' data-aos="flip-left"
                data-aos-easing="ease-out-cubic" data-aos-duration="2000">My Projects</h2>
            <div className='flex justify-center items-center w-full my-4 p-4 min-h-[calc(100vh-170px)'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  mx-auto ] WorkSans-Italic-VariableFont_wght text-gray-900'>
                    <div className="max-w-sm p-6 bg-white border border-gray-200 hover:border hover:border-[#b41bf2] rounded-lg shadow transform transition duration-500 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r from-yellow-200 to-pink-400" >
                        <div data-aos="fade-right" data-aos-duration="1000">
                            <div>
                                <h2 className='WorkSans-VariableFont_wght font-medium text-ld mb-3 text-center'>1. E-commerce Website</h2>
                            </div>
                            <div>
                                <img src={project_1} alt="" className='object-contain h-[200px]' />
                            </div>
                            <div className='flex justify-start gap-5 my-7 items-center'>
                                <button className='border border-[#cd586e] rounded-full bg-black text-white py-1 px-3 text-sm md:text-base sm:py-3 sm:px-5 bg-gradient-to-r to-[#b41bf2] from-[#cd586e]'> <a href='https://e-commerce-chi-nine-80.vercel.app/'>Live Preview</a></button>
                                <button className='border border-gray-900 rounded-full text-gray-900 bg-white hover:text-white hover:border hover:border-gray-900 hover:bg-gray-900 py-1 px-3 text-sm md:text-base sm:py-3 sm:px-5'><a href='https://github.com/Dudschoudhary/e-commerce'>Github Link</a></button>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-sm p-6 bg-white border border-gray-200 hover:border hover:border-[#b41bf2] rounded-lg shadow transform transition duration-500 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r from-yellow-200 to-pink-400" >
                        <div data-aos="fade-down" data-aos-duration="1000">
                            <div>
                                <h2 className='WorkSans-VariableFont_wght font-medium text-ld mb-3 text-center'>2. Food Delivery</h2>
                            </div>
                            <div>
                                <img src={project_2} alt="" className='object-contain h-[200px]' />
                            </div>
                            <div className='flex justify-start gap-5 my-7 items-center '>
                                <button className='border border-[#cd586e] rounded-full bg-black text-white py-1 px-3 text-sm md:text-base sm:py-3 sm:px-5 bg-gradient-to-r to-[#b41bf2] from-[#cd586e]'> <a href='https://food-del-eosin.vercel.app/'>Live Preview</a></button>
                                <button className='border border-gray-900 rounded-full text-gray-900 bg-white hover:text-white hover:border hover:border-gray-900 hover:bg-gray-900 py-1 px-3 text-sm md:text-base sm:py-3 sm:px-5'><a href='https://github.com/Dudschoudhary/Food-Del'>Github Link</a></button>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-sm p-6 bg-white border border-gray-200 hover:border hover:border-[#b41bf2] rounded-lg shadow transform transition duration-500 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r from-yellow-200 to-pink-400" >
                        <div data-aos="fade-left" data-aos-duration="1000">
                            <div>
                                <h2 className='WorkSans-VariableFont_wght font-medium text-ld mb-3 text-center'>3. Responsive Form Template</h2>
                            </div>
                            <div>
                                <img src={project_3} alt="" className='object-contain h-[200px]' />
                            </div>
                            <div className='flex justify-start gap-5 my-7 items-center '>
                                <button className='border border-[#cd586e] rounded-full bg-black text-white py-1 px-3 text-sm md:text-base sm:py-3 sm:px-5 bg-gradient-to-r to-[#b41bf2] from-[#cd586e]'> <a href='https://responsive-form-template.vercel.app/'>Live Preview</a></button>
                                <button className='border border-gray-900 rounded-full text-gray-900 bg-white hover:text-white hover:border hover:border-gray-900 hover:bg-gray-900 py-1 px-3 text-sm md:text-base sm:py-3 sm:px-5'><a href='https://github.com/Dudschoudhary/responsive-form-template'>Github Link</a></button>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-sm p-6 bg-white border border-gray-200 hover:border hover:border-[#b41bf2] rounded-lg shadow transform transition duration-500 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r from-yellow-200 to-pink-400" >
                        <div data-aos="fade-right" data-aos-duration="1000">
                            <div>
                                <h2 className='WorkSans-VariableFont_wght font-medium text-ld mb-3 text-center'>4. Todo using Redux</h2>
                            </div>
                            <div>
                                <img src={project_4} alt="" className='object-contain h-[200px]' />
                            </div>

                            <div className='flex justify-start gap-5 my-7 items-center '>
                                <button className='border border-[#cd586e] rounded-full bg-black text-white py-1 px-3 text-sm md:text-base sm:py-3 sm:px-5 bg-gradient-to-r to-[#b41bf2] from-[#cd586e]'> <a href='https://todo-ten-puce-19.vercel.app/'>Live Preview</a></button>
                                <button className='border border-gray-900 rounded-full text-gray-900 bg-white hover:text-white hover:border hover:border-gray-900 hover:bg-gray-900 py-1 px-3 text-sm md:text-base sm:py-3 sm:px-5'><a href='https://github.com/Dudschoudhary/todo'>Github Link</a></button>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-sm p-6 bg-white border border-gray-200 hover:border hover:border-[#b41bf2] rounded-lg shadow transform transition duration-500 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r from-yellow-200 to-pink-400" >
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div>
                                <h2 className='WorkSans-VariableFont_wght font-medium text-ld mb-3 text-center'>5.Weather Api</h2>
                            </div>
                            <div>
                                <img src={project_5} alt="" className='object-contain h-[200px]' />
                            </div>

                            <div className='flex justify-start gap-5 my-7 items-center '>
                                <button className='border border-[#cd586e] rounded-full bg-black text-white py-1 px-3 text-sm md:text-base sm:py-3 sm:px-5 bg-gradient-to-r to-[#b41bf2] from-[#cd586e]'> <a href='https://weather-api-hazel-seven.vercel.app/'>Live Preview</a></button>
                                <button className='border border-gray-900 rounded-full text-gray-900 bg-white hover:text-white hover:border hover:border-gray-900 hover:bg-gray-900 py-1 px-3 text-sm md:text-base sm:py-3 sm:px-5'><a href='https://github.com/Dudschoudhary/WeatherApi'>Github Link</a></button>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-sm p-6 bg-white border border-gray-200 hover:border hover:border-[#b41bf2] rounded-lg shadow transform transition duration-500 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r from-yellow-200 to-pink-400" >
                        <div data-aos="fade-left" data-aos-duration="1000">
                            <div>
                                <h2 className='WorkSans-VariableFont_wght font-medium text-ld mb-3 text-center'>6. FAQ-template</h2>
                            </div>
                            <div>
                                <img src={project_6} alt="" className='object-contain h-[200px]' />
                            </div>

                            <div className='flex justify-start gap-5 my-7 items-center '>
                                <button className='border border-[#cd586e] rounded-full bg-black text-white py-1 px-3 text-sm md:text-base sm:py-3 sm:px-5 bg-gradient-to-r to-[#b41bf2] from-[#cd586e]'> <a href='https://template-1-fa-qs.vercel.app/'>Live Preview</a></button>
                                <button className='border border-gray-900 rounded-full text-gray-900 bg-white hover:text-white hover:border hover:border-gray-900 hover:bg-gray-900 py-1 px-3 text-sm md:text-base sm:py-3 sm:px-5'><a href='https://github.com/Dudschoudhary/template_1_FAQs'>Github Link</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects