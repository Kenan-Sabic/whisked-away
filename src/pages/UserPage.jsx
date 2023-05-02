import React from 'react'
import Navbar from '../components/Navbar'
import userImgDefault from '../assets/userImgDefault.svg'
import pencil from '../assets/pencil.png'
const UserPage = () => {
  return (
    <div>
      <Navbar />
      <div className='bg-spices bg-cover pt-80'>
        <div className='flex flex-col md:flex-row bg-platinum w-full min-h-screen items-center md:items-start'>
          <div className='shadow-md min-w-[240px] min-h-[240px] bg-lightorange rounded-full mt-[-120px] md:ml-[100px] flex justify-center items-center'>
            <img src={userImgDefault} className='w-[240px] h-[240px] rounded-full '>

              </img>
          </div>          
          <div className='text-center'>
          <h1 className='mt-10 md:ml-10 text-5xl'> User Name </h1>            
          </div>
          <div className='shadow-md max-w-[300px] max-h-[80px] bg-lightorange rounded-md p-4 px-16 mt-10 md:ml-[200px] md:mr-[200px] flex items-center'>
             <h1>Edit Profile</h1>
            </div>
        </div>
    
      </div>

    </div>

  )
}

export default UserPage