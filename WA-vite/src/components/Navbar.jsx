import React from 'react'
import home from '../assets/home.png';
import user from '../assets/user.png';
const Navbar = () => {
  return (
    <div className=''>
      {/*Navbar*/}
      <div className="bg-sandybrown font-Lato fixed grid grid-cols-2 h-[75px] w-full
      text-white text-3xl font-medium z-50">
        <div className="flex">
          <img src={home} className='m-3 ml-10 cursor-pointer w-14 h-14'></img>
          <a className='mt-5 cursor-pointer'>Home</a>
        </div>
        <div className="flex justify-self-[right]">
          <img src={user} className='m-3 ml-10 cursor-pointer w-14 h-14'></img>
          <a className='mt-5 cursor-pointer'>Profile</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar