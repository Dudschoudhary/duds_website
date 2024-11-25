import React from 'react'
import profile_img from '../assets/images/userProfile.jpg'
const About = () => {
  return (
    <>
      <div className='w-full container flex justify-center items-center mx-auto min-h-[calc(100vh-170px)]'>
        <div className='w-full'>

          <h2 className='text-center m-6 text-3xl md:text-[50px] WorkSans-VariableFont_wght'data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">About me</h2>

          <div className=''>

            <div className='w-full md:flex'>
              {/* main div */}
              <div className='w-full md:w-[40%] flex justify-center items-center'>
                <img src={profile_img} alt="" className='object-cover h-[500px] sm:h-[550px]  md:h-full  w-full p-3 md:w-[250px] rounded-3xl'data-aos="zoom-in" data-aos-duration="1000" />
              </div>

              <div className='w-full  space-x-2 p-4 WorkSans-Italic-VariableFont_wght'>
                <p className='text-bace md:text-lg mb-9'data-aos="fade-down" data-aos-duration="1000">I am an experience Frontend Developer with over a decade of professional expertise in the field. Throughout my career. I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
                <p className='text-bace md:text-lg'data-aos="fade-left" data-aos-duration="1000">
                  My passion for frontend development is not only reflected in my extensive experience but also in the endthusiasm and dedication I bring to each project.</p>
                <div className='w-full flex justify-start items-center mt-10'>
                  <div className="w-[145px] md:w-36 text-base font-medium text-gray-900 flex justify-center items-center WorkSans-VariableFont_wght"data-aos="fade-down" data-aos-duration="1000">HTML & CSS</div>

                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"data-aos="fade-down" data-aos-duration="1000">
                    <div className="bg-gradient-to-r from-pink-500 to-amber-500 h-2.5 rounded-full w-[90%]"></div>
                  </div>
                </div>

                <div className='w-full flex justify-start items-center'>
                  <div className="w-36 text-base font-medium text-gray-900 flex justify-center items-center WorkSans-VariableFont_wght"data-aos="fade-right" data-aos-duration="1000">React Js</div>

                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"data-aos="fade-right" data-aos-duration="1000">
                    <div className="bg-gradient-to-r from-pink-500 to-amber-500 h-2.5 rounded-full w-[70%]"></div>
                  </div>
                </div>

                <div className='w-full flex justify-center items-center'>
                  <div className="w-36 text-base font-medium text-gray-900 flex justify-center items-center WorkSans-VariableFont_wght"data-aos="fade-left" data-aos-duration="1000">JavaScript</div>

                  <div className="w-full bg-gray-200 rounded-full h-2.5   dark:bg-gray-700" data-aos="fade-left" data-aos-duration="1000">
                    <div className="bg-gradient-to-r from-pink-500 to-amber-500 h-2.5 rounded-full w-[80%]"></div>
                  </div>
                </div>

                <div className='w-full flex justify-center items-center'>
                  <div className="w-36 text-base font-medium text-gray-900 flex justify-center items-center WorkSans-VariableFont_wght"data-aos="fade-up" data-aos-duration="1000">Next Js</div>

                  <div className="w-full bg-gray-200 rounded-full h-2.5   dark:bg-gray-700 "data-aos="fade-up" data-aos-duration="1000">
                    <div className="bg-gradient-to-r from-pink-500 to-amber-500 h-2.5 rounded-full w-[15%]"></div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default About