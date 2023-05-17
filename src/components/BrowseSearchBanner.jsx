import React from "react";
import bannerImg from "../assets/bgff.jpg";
import { FaSearch } from 'react-icons/fa';

const BrowseBanner = () => {

  return (
    <div>
      <div>
        <img src={bannerImg} className="absolute w-full h-[400px] object-cover z-0 brightness-75 object-center" ></img>
        {/* Banner and search bar*/}
        <div className="flex flex-col justify-center items-center pt-20 font-Lato mb-28">
          <h1 className="text-5xl font-normal z-[5] mb-4 mt-8 ml-10 text-white ">WHISKED AWAY - RECIPES ARCHIVE</h1>
          <div className="flex">
            <div className="relative w-1/3 mt-10">
              <input
                className="border border-gray-300 bg-white h-10 px-5 pr-10 rounded-full text-sm z-[10] w-96"
                type="text"
                placeholder="Type in a recipe"
              />
              <button className="absolute left-24 top-0 mt-3 ml-64">
                <FaSearch />
              </button>
            </div>
          </div>
          {/* FaSearch is a component from the react-icons/fa library that displays an icon representing a search magnifying glass.  */}
        </div>
      </div>
    </div>
  );
};
export default BrowseBanner;
