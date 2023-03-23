import React from 'react'
import '../components/css/output.css'
import Navbar from '../components/Navbar';

function LoginPage() {
  return (
    <div>
      <Navbar />
    <div className='bg-jet h-screen w-full grid grid-cols-12'>
      <form className='bg-white min-h-screen col-start-3 col-end-11 sm:col-start-2 sm:col-end-12 mt-[75px] flex flex-col items-center space-y-2 '>
        <h2 className='font-medium text-5xl mt-12 mb-16'>Log in</h2>
        <label htmlFor="email" className='mt-10'>Email</label>
        <input type="text" name="email" id="email" className='bg-jet' />
        <label htmlFor="password">Password</label>
        <input type="password" className='bg-jet mt-3' />
        <div className='text-start w-1/6'>
        <a href="#" className='text-blue-600 underline'>Forgot password?</a>
        </div>
        <button className='m-16 w-20 py-2 bg-sandybrown text-jet font-bold'>Login</button>
        <button className='m-16 w-20 py-2 bg-jet text-sandybrown font-bold'>Register</button>
      </form>
    </div>

    </div>
  )
}

export default LoginPage