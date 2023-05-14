import React from 'react'
import Navbar from '../components/Navbar'
import userImgDefault from '../assets/userImgDefault.svg'
import pencil from '../assets/pencil.png'
const UserPage = () => {
  return (
    <div>
      <Navbar />
      <div className='bg-spices bg-cover pt-80'>
        <div className='flex flex-col md:flex-row bg-platinum w-full h-[50vh] items-center md:items-start'>
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
        <div className='shadow-lg bg-platinum flex flex-col text-center items-center w-full rounded-md'>          
          <div className='flex flex-col text-center items-center'>
          <h1 className='text-5xl'>User's Bio</h1>
            <div className='shadow-lg w-11/12 bg-platinum text-center rounded-md'>
              <h1 className='ml-5 mt-6'>I report to God, you report to me. Jesus said, I will build this temple in three days. I could build a compiler in three days.</h1>
            </div>
            <div className='shadow-lg w-11/12 bg-platinum text-center rounded-md'>
              <h1 className='mt-5 text-xl'>Joined</h1>
              <h1>XX.XX.20XX</h1>
            </div>
            <div className='shadow-lg w-11/12 bg-platinum text-center rounded-lg'>
              <h1 className='mt-5 text-xl'>Favorite food:</h1>
              <h1>Pancakes</h1>
            </div>
          </div>
          <div className='bg-platinum mt-8 shadow-lg rounded-lg grid grid-cols-2 gap-x-4 gap-y-4'>
            <div className='shadow-lg bg-platinum  hover:bg-sandybrown hover:text-platinum flex min-w-[150px] h-14 rounded-lg justify-center items-center text-center'>
              <h1>Recipes</h1>
            </div>
            <div className='shadow-lg bg-platinum  hover:bg-sandybrown hover:text-platinum flex h-14 rounded-lg justify-center items-center text-center'>
              <h1 className='text-center'>Reviews</h1>
            </div>
            <div className='shadow-lg bg-platinum flex h-14 hover:bg-sandybrown hover:text-platinum rounded-lg justify-center items-center text-center'>
              <h1 className='text-center'>Followers</h1>
            </div>
            <div className='shadow-lg bg-platinum  hover:bg-sandybrown hover:text-platinum flex h-14 rounded-lg justify-center items-center text-center'>
              <h1 className='text-center'>Following</h1>
            </div>
          </div>
          <div>
            
          </div>
        </div>
    
      </div>

    </div>

  )
}

export default UserPage