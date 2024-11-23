import React from 'react'

const Services = () => {
    return (
        <>
            <h2 className='text-center text-3xl md:text-[40px] m-4 WorkSans-VariableFont_wght'>Services</h2>
            <div className='flex justify-center items-center w-full my-4 p-4 min-h-[calc(100vh-170px)'>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  mx-auto ] WorkSans-Italic-VariableFont_wght text-gray-900'>
                    <div className="max-w-sm p-6 bg-white border border-gray-200 hover:border hover:border-[#b41bf2] rounded-lg shadow transform transition duration-500 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r from-yellow-200 to-pink-400">
                        <h2 className="my-3 text-xl WorkSans-VariableFont_wght">1.</h2>
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900  text-transparent bg-clip-text bg-gradient-to-r to-[#cd586e] from-[#b41bf2] ">
                                Web design
                            </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-900">
                            I specialize in creating visually appealing and user-friendly interfaces. I take design mockups and turn them into code, ensuring that the website’s layout, colors, fonts, and overall aesthetics are consistent and engaging for users.
                        </p>
                    </div>


                    <div class="max-w-sm p-6 bg-white border border-gray-200 hover:border hover:border-[#b41bf2] rounded-lg shadow transform transition duration-500 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r from-yellow-200 to-pink-400">
                        <h2 className='my-3 text-xl WorkSans-VariableFont_wght'>2.</h2>
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 text-transparent bg-clip-text bg-gradient-to-r to-[#cd586e] from-[#b41bf2]">Developing Responsive Layouts</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-900 ">I make sure that my websites work seamlessly across various devices and screen sizes. By using responsive design techniques, I ensure that the site looks and functions well on desktops, tablets, and smartphones.</p>

                    </div>



                    <div class="max-w-sm p-6 bg-white border border-gray-200 hover:border hover:border-[#b41bf2] rounded-lg shadow transform transition duration-500 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r from-yellow-200 to-pink-400">
                        <h2 className='my-3 text-xl WorkSans-VariableFont_wght'>3.</h2>
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900  text-transparent bg-clip-text bg-gradient-to-r to-[#cd586e] from-[#b41bf2]">Implementing Interactive Features</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-900"> add interactive elements like animations, forms, and navigation menus. I use JavaScript to create dynamic content, making the site more engaging and functional for users.</p>

                    </div>

                    <div class="max-w-sm p-6 bg-white border border-gray-200 hover:border hover:border-[#b41bf2] rounded-lg shadow transform transition duration-500 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r from-yellow-200 to-pink-400">
                        <h2 className='my-3 text-xl WorkSans-VariableFont_wght'>4.</h2>
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 text-transparent bg-clip-text bg-gradient-to-r to-[#cd586e] from-[#b41bf2]">Optimizing Performance and Accessibility</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-900">I focus on optimizing my website’s performance by minimizing load times and ensuring accessibility for all users, including those with disabilities. This involves writing clean, efficient code and adhering to web standards.</p>

                    </div>
                </div>
            </div>




        </>

    )
}

export default Services