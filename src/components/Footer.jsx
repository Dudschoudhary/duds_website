import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { SiWhatsapp } from "react-icons/si";
import { IoLocationOutline } from "react-icons/io5";



const Footer = () => {
  return (
    <>


      <footer class="bg-slate-100 shadow  WorkSans-Italic-VariableFont_wght">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm font-medium  sm:text-center  text-gray-900 rounded md:p-0 ">© 2023 <a href="" class="hover:underline text-gray-900">Flowbite™</a>. All Rights Reserved.
          </span>
          <ul class="flex flex-wrap items-center gap-4 mt-3 text-lg font-medium text-gray-900  sm:mt-0">
            <li>
              <a href="https://twitter.com/Erduds656"><FaXTwitter className=''/></a>
            </li>
            <li>
              <a href="https://www.instagram.com/duds_choudhary_656"><AiOutlineInstagram /></a>
            </li>
            <li>
              <a href="https://wa.me/9587449072"><SiWhatsapp/></a>
            </li>
          
          </ul>
        </div>
      </footer>

    </>
  )
}

export default Footer