import React from 'react'

const LoginPage = () => {
  return (
    <div>
        <div className='bg-jet md:bg-spices min-h-screen w-full grid grid-cols-12 pt-20'>
            <form action="#" className='bg-white min-h-screen col-start-2 col-end-12 mb-3 flex flex-col items-center'>
                <h2 className='font-medium font-Imprima text-5xl mt-4  mb-2'>Log in</h2>
                <div className='w-[240px] mt-4 mb-5'>
                    <label htmlFor="email" className='w-1/5 text-left text-2xl'>Email</label>
                    <input type="email" name="email" id="email" className='bg-battleshipgrey w-full h-9 text-lg' />
                </div>
                <div className='w-[240px] mb-3'>
                    <label htmlFor="password" className='w-1/5 text-left text-2xl'>Password</label>
                    <input type="password" name="password" id="password" className='bg-battleshipgrey w-full h-9 text-lg' />
                </div>
                <div className='w-[240px] mb-16'>
                     <a href="#" className='text-blue-600 underline text-lg p-1 hover:text-white hover:bg-blue-600 '>Forgot password?</a>
               </div>
               <input type="submit" value="Log in" className='bg-sandybrown text-jet p-3.5 w-40 text-3xl font-bold rounded mb-4 cursor-pointer' />
               <button className='bg-jet text-sandybrown p-3.5 w-40 text-3xl font-bold rounded'>Register</button>
               <p></p>
            </form>



        </div>
    </div>
  )
}

export default LoginPage