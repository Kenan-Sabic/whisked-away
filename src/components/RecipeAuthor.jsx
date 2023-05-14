import React from 'react'
import userImgDefault from '../assets/userImgDefault.svg'
const RecipeAuthor = () => {
  return (
    <div className='mt-6'>
        <div className='flex items-center'>
          <div>
            <h3 className='text-xl mr-4'>by</h3>
          </div>
          <div className='shadow-md w-[20%] h-[20%] bg-lightorange rounded-full flex justify-center items-center'>
            <img src={userImgDefault} className='w-auto h-auto rounded-full '></img>
          </div>
          <div>
            <h2 className='text-xl ml-5'>John Doe</h2>
          </div>
          <div>
            <h3 className='text-xl ml-5 text-gray-500'>13/05/2023</h3>
          </div>
        </div>
    </div>
  )
}

export default RecipeAuthor