import React from 'react'

const Registration = () => {
  return (
    <div className=''>
         <div className='bg-jet md:bg-spices min-h-screen w-full grid grid-cols-12 pt-20'>
            <form action="#" className='bg-white min-h-screen col-start-2 col-end-12 mb-3 flex flex-col items-center'>
                <h2 className='font-medium font-Imprima text-5xl mt-4  mb-2'>Register</h2>
                <div className='w-[240px] mt-4 mb-5'>
                    <label htmlFor="email" className='w-1/5 text-left text-2xl'>Username</label>
                    <input type="text" name="username" id="username" className='bg-battleshipgrey w-full h-9 text-lg' />
                </div>
                <div className='w-[240px]  mb-5'>
                    <label htmlFor="email" className='w-1/5 text-left text-2xl'>Email</label>
                    <input type="email" name="email" id="email" className='bg-battleshipgrey w-full h-9 text-lg' />
                </div>
                <div className='w-[240px] mb-3'>
                    <label htmlFor="password" className='w-1/5 text-left text-2xl'>Password</label>
                    <input type="password" name="password" id="password" className='bg-battleshipgrey w-full h-9 text-lg' />
                </div>
                <div className='w-[240px] mb-12'>
                    <label htmlFor="passwordConfirm" className='w-1/5 text-left text-2xl'> Confirm Password</label>
                    <input type="password" name="password" id="passwordConfirm" className='bg-battleshipgrey w-full h-9 text-lg' />
                </div>
                
               <input type="submit" value="Create Account" className='bg-sandybrown text-jet p-3.5 w-64 text-3xl font-bold rounded mb-4 cursor-pointer' />
               <p>Already have an account?</p>
               <a href="#" className='bg-jet w-36 p-2 text-center text-xl text-white'>Log in</a>
               

            </form>


        </div>


    </div>
  )
}

export default Registration