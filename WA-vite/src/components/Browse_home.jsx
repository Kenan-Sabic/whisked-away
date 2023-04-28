import React from "react";
import bannerImg from "../assets/bgff.jpg";
import search from "../assets/search.png";



const Browse_banner = () => {
    const handleClick = () => {
        window.location.href = '/browse';
      };
      
    return (
    <div>
      {/* Banner and search bar*/}
      <div className="flex flex-col justify-center items-center pt-20 text-white font-Lato mb-28">
        <img src={bannerImg} className="absolute w-full h-[400px] object-cover z-0 brightness-75 object-center" ></img>
        <h1 className="text-5xl font-normal z-[5] mb-4">WHISKED AWAY - RECIPES ARCHIVE</h1>
        <button type="button" className="bg-sandybrown text-white py-[10px] px-5 border-none rounded-md cursor-pointer text-base transition-all z-[6]
        hover:py-3 hover:px-[22px] hover:text-lg" onClick={handleClick}>CLICK AND FIND A RECIPE FOR YOURSELF!</button>
      </div>
    </div>
  );
};

export default Browse_banner;