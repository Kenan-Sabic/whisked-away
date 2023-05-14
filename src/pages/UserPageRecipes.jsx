import React from 'react'
import UserPageBio from '../components/UserPageBio'
import Navbar from '../components/Navbar'
import UserPageBanner from '../components/UserPageBanner'
import UserPageRecipeTab from '../components/UserPageRecipeTab'
const UserPageRecipes = () => {
  return (
    <div className='bg-platinum'>
        <Navbar/>
        <div className='bg-spices bg-cover pt-80'>
            <UserPageBanner/>
        </div>
        <div className='md:grid md:grid-cols-10 w-full'>
          <div className=' bg-platinum flex flex-col text-center md:mt-[-100px] items-center w-full md:col-start-1 md:col-end-4 rounded-md'>
            <UserPageBio/>
          </div>
          <div className='flex flex-col text-center items-center md:mt-[-150px] w-full md:col-start-4 md:col-end-11 rounded-md'>
            <div className='bg-platinum mt-8 rounded-lg p-6 grid grid-cols-2 gap-x-4 gap-y-4 md:grid-cols-4 w-full md:gap-x-6'>
              <div className='shadow-lg bg-platinum  hover:bg-sandybrown hover:text-platinum flex font-bold md:col-span-1 h-14 rounded-lg justify-center items-center text-center'>
                <h1>Recipes</h1>
              </div>
              <div className='shadow-lg bg-platinum  hover:bg-sandybrown hover:text-platinum font-bold flex h-14 md:col-span-1 rounded-lg justify-center items-center text-center'>
                <h1 className='text-center'>Reviews</h1>
              </div>
              <div className='shadow-lg bg-platinum flex h-14 hover:bg-sandybrown hover:text-platinum font-bold md:col-span-1 rounded-lg justify-center items-center text-center'>
                <h1 className='text-center'>Followers</h1>
              </div>
              <div className='shadow-lg bg-platinum  hover:bg-sandybrown hover:text-platinum flex h-14 font-bold rounded-lg md:col-span-1 justify-center items-center text-center'>
                <h1 className='text-center'>Following</h1>
              </div>
            </div>

            <div className='md:w-full md:shadow-2xl'>
              <UserPageRecipeTab/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default UserPageRecipes