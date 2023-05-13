import React from 'react'
import userImgDefault from '../assets/userImgDefault.svg'
import threedots from '../assets/threedots.svg'
const FollowerBox = () => {
  return (
    <div className='bg-platinum hover:bg-sandybrown shadow-2xl rounded flex row-auto gap-7 md:gap-4 lg:gap-6 xl:gap-7 px-10 mt-4 items-center flex-nowrap'>
        <div className='shadow-md w-[70px] h-[70px] min-w-[70px] min-h-[70px] bg-lightorange rounded-full flex justify-center items-center'>
            <img src={userImgDefault} className='w-auto h-auto rounded-full'>
            </img>
        </div>
        <div className='lg:text-xl xl:text-2xl'>
            <h1>John Doe</h1>
        </div>
        <div>
            <img src={threedots} className='w-[35px] h-[35px] min-w-[30px] min-h-[30px]'/>
        </div>

    </div>
  )
}

export default FollowerBox