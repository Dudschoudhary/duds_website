import React from 'react'
import { IoMail } from "react-icons/io5";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
const Contact = () => {
    return (
        <>
            <div>
                <h2 className='text-center text-3xl md:text-[40px] mt-14 m-4 WorkSans-VariableFont_wght' data-aos="flip-left"
                    data-aos-easing="ease-out-cubic" data-aos-duration="1000">Get in touch</h2>
                <div className='w-full block lg:flex justify-center items-start py-4 mx-auto container WorkSans-Italic-VariableFont_wght p-4 lg:p-7'>
                    <div className='w-full'>
                        <div>
                            <h2 className='text-transparent bg-clip-text bg-gradient-to-r to-[#b41bf2] from-[#cd586e] text-xl md:text-[40px] font-semibold WorkSans-VariableFont_wght mb-3'data-aos="flip-left"
                    data-aos-easing="ease-out-cubic" data-aos-duration="1000">Let's talk</h2>
                            <p data-aos="fade-down" data-aos-duration="1000">i'm currently avaliable to talk on new projects, so feel free to send me a message about anything that you want me to work on. you can contact anytime.</p>
                        </div>
                        <div className='flex my-4'>
                            <ul className='space-y-2'>
                                <li className='flex justify-start items-center gap-4' data-aos="fade-right" data-aos-duration="1000">
                                    <span><IoMail className='text-2xl' /></span><h3>dudaram656@gmail.com</h3>
                                </li>
                                <li className='flex justify-start items-center gap-4'data-aos="fade-left" data-aos-duration="1000">
                                    <span><BiSolidPhoneCall className='text-2xl' /></span><h3>+91 9587449072</h3>
                                </li>
                                <li className='flex justify-start items-center gap-4'data-aos="fade-up" data-aos-duration="1000">
                                    <span><FaLocationDot className='text-2xl' /></span><h3>India</h3>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-full mt-10 lg:mt-0'>
                        <div>
                            <form className='space-y-4'>
                                <div>
                                    <h3 className='WorkSans-VariableFont_wght my-2'data-aos="fade-down" data-aos-duration="1000">Your Name</h3>
                                    <input type="text" placeholder='Enter your name' className='outline-none border border-gray-300 text-gray-900 rounded-lg py-2 px-3 w-full placeholder:text-sm text-base focus:border-[#b41bf2] WorkSans-VariableFont_wght bg-gray-50 'data-aos="fade-down" data-aos-duration="1000" />
                                </div>
                                <div>
                                    <h3 className='WorkSans-VariableFont_wght my-2'data-aos="fade-right" data-aos-duration="1000">Your Email</h3>
                                    <input type="email" placeholder='Enter your email' className='outline-none border  border-gray-300  text-gray-900 rounded-lg py-2 px-3 w-full placeholder:text-sm text-base focus:border-[#b41bf2] WorkSans-VariableFont_wght bg-gray-50 'data-aos="fade-right" data-aos-duration="1000" />
                                </div>
                                <div>
                                    <h3 className='WorkSans-VariableFont_wght my-2'data-aos="fade-left" data-aos-duration="1000">Write your message here</h3>
                                    <textarea id="message" rows="4" className="block py-2 px-3 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-[#b41bf2] max-h-42 outline-none placeholder:text-sm min-h-20 max-h-44" placeholder="Enter your message..."data-aos="fade-left" data-aos-duration="1000"></textarea>
                                </div>
                                <div>
                                    <button type='submit' className='border rounded-full bg-black text-white  text-sm lg:text-base py-3 px-5 bg-gradient-to-r to-[#b41bf2] from-[#cd586e]'data-aos="fade-up" data-aos-duration="1000">Submit now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact