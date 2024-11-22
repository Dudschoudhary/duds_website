import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const Layout = () => {
  return (
    <>
        <main className='min-h-[calc(100vh-56px)]'>
            <Navbar/>
            <Outlet/>
        </main>
        <Footer/>
    </>
  )
}

export default Layout