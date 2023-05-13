import React from 'react'
import userImgDefault from '../assets/userImgDefault.svg'
const FollowerBox = () => {
  return (
    <div className='bg-platinum hover:bg-sandybrown shadow-2xl rounded flex row-auto gap-14 px-10 mt-4 items-center flex-nowrap'>
        <div className='shadow-md w-[20%] h-[20%] bg-lightorange rounded-full flex justify-center items-center'>
            <img src={userImgDefault} className='w-auto h-auto rounded-full '>
            </img>
        </div>
        <div className='text-xl'>
            <h1>John Doe</h1>
        </div>
        <div className=' mb-7 text-5xl'>
            <h1>...</h1>
        </div>

    </div>
  )
}

export default FollowerBox