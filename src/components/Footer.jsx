import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>


      <footer class="bg-slate-100 shadow  WorkSans-Italic-VariableFont_wght">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm font-medium  sm:text-center  text-gray-900 rounded md:p-0 ">© 2023 <a href="" class="hover:underline text-gray-900">Flowbite™</a>. All Rights Reserved.
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-900  sm:mt-0">
            <li>
              <a href="#" class="hover:underline me-4 md:me-6"><Link to="/about">About</Link> </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
            </li>
            <li>
              <Link to="/contact">
                <a href="#" class="hover:underline">Contact</a></Link>
            </li>
          </ul>
        </div>
      </footer>

    </>
  )
}

export default Footer