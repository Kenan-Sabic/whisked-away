import React from 'react'

const LoginPage = () => {
  return (
    <div>
        <div className='bg-jet min-h-screen w-full grid grid-cols-12 pt-20'>
            <form action="#" className='bg-white min-h-screen col-start-2 col-end-12 mb-3 flex flex-col items-center'>
                <h2 className='font-medium text-4xl mt-2  mmb-2'>Log in</h2>
                <div className='w-[220px] mb-5'>
                    <label htmlFor="email" className='w-1/5 text-left'>Email</label>
                    <input type="email" name="email" id="email" className='bg-battleshipgrey w-[220px] h-[30px]' />
                </div>
                <div className='w-[220px] mb-5'>
                    <label htmlFor="password" className='w-1/5 text-left'>Password</label>
                    <input type="password" name="password" id="password" className='bg-battleshipgrey w-[220px] h-[30px]' />
                </div>
                <div className='w-[220px] mb-2'>
                     <a href="#" className='text-blue-600 underline'>Forgot password?</a>
               </div>
               <input type="submit" value="Login" className='mb-2   md:w-1/12 py-2 bg-sandybrown text-jet font-bold rounded' />
               <button className=' mw-6 sm:w-1/5 md:w-1/12 py-2 bg-jet text-sandybrown font-bold rounded'>Register</button>
            </form>


        </div>
    </div>
  )
}

export default LoginPage