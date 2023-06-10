import React from "react";
import bannerImg from "../assets/bgff.jpg";

const HomePageBanner = () => {
  const handleClick = () => {
    window.location.href = "/browse";
  };

  return (
    <div>
      {/* Banner and search bar*/}
      <div className="mb-28 flex flex-col items-center justify-center pt-20 font-Lato text-white">
        <img
          src={bannerImg}
          className="absolute z-0 h-[400px] w-full object-cover object-center brightness-75"
        ></img>
        <h1 className="z-[5] mb-4 ml-10 mt-10 text-5xl font-extrabold">
          WHISKED AWAY - RECIPES ARCHIVE
        </h1>
        <button
          type="button"
          className="z-[6] cursor-pointer rounded-md border-none bg-sandybrown px-5 py-[10px] text-lg text-white transition-all
        hover:px-[30px] hover:py-3 hover:text-2xl"
          onClick={handleClick}
        >
          CLICK AND FIND A RECIPE FOR YOURSELF!
        </button>
      </div>
    </div>
  );
};

export default HomePageBanner;
