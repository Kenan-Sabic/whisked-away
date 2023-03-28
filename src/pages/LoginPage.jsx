import React from 'react'
import '../components/css/output.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../components/css/login.css"

function LoginPage() {
  return (
    <div>
      <Navbar />
    <div id='background' className='bg-jet lg:bg-hero-pattern min-h-screen w-full grid grid-cols-12'>
      <form className='bg-white min-h-screen col-start-2 col-end-12 mt-[85px] mb-3 flex flex-col items-center space-y-1 '>
        <h2 className='font-medium text-4xl mt-2 mb-10'>Log in</h2>
        <div className='w-[220px] flex items-start'><label htmlFor="email" className='mt-10 w-1/5 text-left'>Email</label></div>
        <input type="text" name="email" id="email" className='bg-battleshipgrey w-[220px] h-[30px]' />
        <div className='w-[220px] flex items-start'><label htmlFor="password" className='mt-4 w-1/5 text-left'>Password</label></div>
        <input type="password" className='bg-battleshipgrey mt-3 w-[220px] h-[30px]' />
        <div className='w-[220px] '>
        <a href="#" className='text-blue-600 underline'>Forgot password?</a>
        </div>
        <input type="submit" value="Login" className='mt-4 w-1/4 sm:w-1/5 md:w-1/12 py-2 bg-sandybrown text-jet font-bold rounded' />
        <button className='mt-16 w-1/4 sm:w-1/5 md:w-1/12 py-2 bg-jet text-sandybrown font-bold rounded'>Register</button>
      </form>
    </div>
    <Footer />
    </div>
  )
}

export default LoginPage