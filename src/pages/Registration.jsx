import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const Registration = () => {
  return (
    <div>
        <Navbar/>
         <div className='bg-jet md:bg-spices min-h-screen w-full grid grid-cols-12 pt-20'>
         <div className='col-start-2 col-end-12 mb-3 pt-3 bg-white rounded-3xl min-h-screen'>
            <div className=' mb-0 pt-0 bg-whisk-small bg-repeat-round min-h-screen w-full rounded-3xl'>
            <form action="#" className='bg-white bg-opacity-80 rounded-3xl min-h-screen w-full col-start-2 col-end-12 mb-3 flex flex-col items-center'>
                <h2 className='font-medium font-Imprima text-5xl mt-4  mb-2'>Register</h2>
                <div className='w-[240px] mt-4 mb-5'>
                    <label htmlFor="email" className='w-1/5 text-left text-2xl'>Username</label>
                    <input type="text" maxLength={30} name="username" id="username" className='bg-battleshipgrey w-full h-9 text-lg' />
                </div>
                <div className='w-[240px]  mb-5'>
                    <label htmlFor="email" className='w-1/5 text-left text-2xl'>Email</label>
                    <input type="email" name="email" id="email" className='bg-battleshipgrey w-full h-9 text-lg' />
                </div>
                <div className='w-[240px] mb-3'>
                    <label htmlFor="password" maxLength={30} className='w-1/5 text-left text-2xl'>Password</label>
                    <input type="password" name="password" id="password" className='bg-battleshipgrey w-full h-9 text-lg' />
                </div>
                <div className='w-[240px] mb-3'>
                    <label htmlFor="passwordConfirm" maxLength={30} className='w-1/5 text-left text-2xl'> Confirm Password</label>
                    <input type="password" name="password" id="passwordConfirm" className='bg-battleshipgrey w-full h-9 text-lg' />
                </div>
                <div className='w[240px] mb-10'>
                    <label htmlFor="bioTextArea" className='w-1/5 text-left text-2xl'>Bio</label>
                    <textarea rows={3} maxLength={150} name='bio' id='bioTextArea' className='bg-battleshipgrey w-full  text-base resize-none' />
                </div>
                
               <input type="submit" value="Create Account" className='bg-sandybrown text-jet p-3.5 w-64 text-3xl font-bold rounded mb-4 cursor-pointer' />
               <p>Already have an account?</p>
               <a href="../login" className='bg-jet w-36 p-2 text-center text-xl text-white'>Log in</a>
               

            </form>
            </div>
            </div>


        </div>
        <Footer/>


    </div>
  )
}

export default Registration