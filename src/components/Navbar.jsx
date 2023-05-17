import React from "react";
import home from "../assets/home.png";
import user from "../assets/user.png";
const Navbar = () => {
  const handleClick = () => {
    window.location.href = "/";
  };

  const handleProfileClick = () => {
    window.location.href = "/user/following";
  };

  return (
    <div>
      {/*Navbar*/}
      <div
        className="fixed z-50 grid h-[75px] w-full grid-cols-2 bg-sandybrown
      font-Lato text-3xl font-medium text-white"
      >
        <div className="flex">
          <img
            src={home}
            className="m-3 h-14 w-14 cursor-pointer lg:ml-10 "
            onClick={handleClick}
          ></img>
          <a
            className="mt-5 hidden cursor-pointer sm:block"
            onClick={handleClick}
          >
            Home
          </a>
        </div>
        <div className="mr-5 flex justify-self-end">
          <img
            src={user}
            className="m-3 mr-0 h-14 w-14 cursor-pointer sm:mr-3 lg:ml-10 "
            onClick={handleProfileClick}
          ></img>
          <a
            className="mt-5 hidden cursor-pointer sm:block"
            onClick={handleProfileClick}
          >
            Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
