import React from 'react'
import Navbar from '../components/Navbar'
import UserPageBanner from '../components/UserPageBanner'
import UserPageFollowerTab from '../components/UserPageFollowerTab'
import UserPageBio from '../components/UserPageBio'
const UserPageFollowers = () => {
  return (
    <div className='bg-platinum'>
        <Navbar/>
        <div className='bg-spices bg-cover pt-80'>
            <UserPageBanner/>
        </div>
        <div className=' bg-platinum flex flex-col text-center items-center w-full rounded-md'>
            <UserPageBio/>
        </div>
        <div className='flex flex-col text-center items-center w-full rounded-md'>
        <div className='bg-platinum mt-8 rounded-lg p-6 grid grid-cols-2 gap-x-4 gap-y-4'>
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
        </div>

        <div>
            <UserPageFollowerTab/>
        </div>


    </div>
  )
}

export default UserPageFollowers