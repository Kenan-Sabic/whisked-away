import React from 'react'
import threedots from '../assets/threedots.svg'
import RecipeAuthor from './RecipeAuthor'
const UserPageReviewBox = () => {
  return (
    <div className='mt-2 mb-2 mr-2 ml-2 shadow-2xl rounded-md hover:bg-sandybrown p-3 '>
        <div className='flex flex-row items-center'>
            <div>
                <h1 className='text-3xl'><b>Pizza Mexicana</b></h1>
            </div>
            <div className='ml-auto'>
                <img src={threedots} className='max-w-[40px] max-h-[40px]'/>
            </div>
        </div>
        <div>
            <RecipeAuthor/>
        </div>
        <div className='mt-4'>
          <h1>
            Fun, but impractical recipe that requires extensive knowledge of Illegals in my Yard, top 10 best horror movie, indian movie, action movie
            Snakes ffffffffffffffffffffffffffffffff
          </h1>
        </div>
    </div>
  )
}

export default UserPageReviewBox