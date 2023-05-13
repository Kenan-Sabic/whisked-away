import React from 'react'
import krosan1 from "../assets/krosan1.jpg";
import krosan2 from "../assets/krosan2.jpg";
import heart from "../assets/heart.png";
import bookmark from "../assets/bookmark.png";
import RecipePlaceholder from './RecipeBeta';
import LoadMoreButton from './LoadMoreButton';
const UserPageRecipeTab = () => {
  return (
    <div className='p-6'>
      <div>
        <div className='grid grid-cols-2 p-6 gap-x-4 gap-y-4 md:grid-cols-3'>
          <div className='shadow-lg bg-platinum  hover:bg-sandybrown hover:text-platinum flex min-w-[150px] md:col-span-1 h-14 rounded-lg justify-center items-center text-center'>
            <h1>Your Recipes</h1>
          </div>
          <div className='shadow-lg bg-platinum  hover:bg-sandybrown hover:text-platinum flex min-w-[150px] md:col-span-1 h-14 rounded-lg justify-center items-center text-center'>
            <h1>Your Favorites</h1>
          </div>
          <div className='shadow-lg bg-platinum  hover:bg-sandybrown hover:text-platinum flex col-span-2 min-w-[150px] md:col-span-1 h-14 rounded-lg justify-center items-center text-center'>
            <h1>Saved Recipes</h1>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2'>
        <RecipePlaceholder/>
        <RecipePlaceholder/>
        <RecipePlaceholder/>
        <RecipePlaceholder/>
        </div>
        <LoadMoreButton/>
      </div>
    </div>
  )
}

export default UserPageRecipeTab