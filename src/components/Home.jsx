import {useEffect} from 'react'
import userProfine_image from '../assets/images/userProfile.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
const Home = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  return (
    <>
      <div className=' w-full mx-auto flex justify-between items-center '>
        <div className='w-full box-border'>
          <div className='userProfile w-[100%] sm:w-[70%] lg:w-[50%] lg:p-4 m-auto flex justify-center items-center min-h-[calc(100vh-170px)]'>
            <div className='m-4'>
              <div className=' w-[100px] h-[100px] border m-auto  border-black rounded-full justify-center items-center flex mb-7'>
                <img src={userProfine_image}  data-aos="zoom-in" data-aos-duration="1000" alt="" className='h-[100px] w-[100px] p-1 object-cover rounded-full' />
              </div>
              <h1 className='text-center lg:m-6 text-xl md:text-3xl WorkSans-VariableFont_wght font-medium' data-aos="fade-left"
               data-aos-duration="1000" data-aos-anchor="#example-anchor"
               data-aos-offset="500"><span className='text-transparent bg-clip-text bg-gradient-to-r to-[#cd586e] from-[#b41bf2]'>
      I'am Dudaram Choudhary</span>, frontend Developer based in India</h1>
              <p className='text-center text-lg m-4 WorkSans-Italic-VariableFont_wght'data-aos="fade-right"
      data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1000">I am a frontend developer from india with 1 year exprince in companies like Mentem tech Jodhpur.</p>

              <div className='flex justify-center items-center lg:gap-3 md:m-8 m-4 WorkSans-VariableFont_wght'>
              <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500  focus:outline-none font-medium rounded-full text-sm md:text-base lg:px-8 lg:py-4 py-2 px-3 text-center me-2 mb-2 outline-none"data-aos="fade-right"data-aos-duration="1000" data-aos-anchor="#example-anchor" data-aos-offset="500">Contact with me</button>

              <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm py-2 px-3  md:text-base lg:px-8 lg:py-4 me-2 mb-2"data-aos="fade-left"data-aos-duration="1000" data-aos-anchor="#example-anchor" data-aos-offset="500">My resume</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home