import React from 'react'
import home from '../assets/home.png';
import user from '../assets/user.png';
const Navbar = () => {

  const handleClick = () => {
    window.location.href = '/';
  };

  const handleProfileClick = () => {
    window.location.href = '/profile';
  }

  return (
    <div>
      {/*Navbar*/}
      <div className="bg-sandybrown font-Lato fixed grid grid-cols-2 h-[75px] w-full
      text-white text-3xl font-medium z-50">
        <div className="flex">
          <img src={home} className='m-3 lg:ml-10 cursor-pointer w-14 h-14 ' onClick={handleClick}></img>
          <a className='mt-5 cursor-pointer hidden sm:block' onClick={handleClick}>Home</a>
        </div>
        <div className="flex justify-self-end mr-5">
          <img src={user} className='m-3 mr-0 sm:mr-3 lg:ml-10 cursor-pointer w-14 h-14 ' onClick={handleProfileClick}></img>
          <a className='mt-5 cursor-pointer hidden sm:block' onClick={handleProfileClick}>Profile</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar