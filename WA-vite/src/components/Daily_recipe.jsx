import React, { useState } from "react";

import krosan1 from "../assets/krosan1.jpg";

import heart from "../assets/icons/heart.png";
import bookmark from "../assets/bookmark.png";

const Daily_Recipe = () => {
  

  return (
    <div>
      {/*Recipe of the Day*/}

        <div className="mt-32 flex flex-wrap flex-row ml-11 text-2xl">
            <p className="bg-slate-100 flex rounded-lg h-9 px-2 ml-5">Recipe of the Day:</p>
        </div>

        <div className=" w-[95%] mt-[-15px] bg-slate-400 h-[2px] justify-center "></div>

        <div className="daily-recipes flex flex-wrap justify-center mx-0 my-auto">
          
        </div>
        <div className="w-[940px] h-[670px] bg-slate-200 rounded-3xl ml-[5%] mt-12 shadow-[0_0_6px_0_rgba(0,0,0,0.3)">
                <img id="" src={krosan1} className="object-cover mt-1 ml-2 w-[930px] h-[400px] rounded-3xl"></img>
                <h2 className="ml-2.5 text-3xl font-normal">Croissants</h2>
                <h3 className="ml-2.5 text-xl font-light">
                    Posted by: <a  className="underline cursor-pointer">Faris</a>
                </h3>
                <img id="daily-bookmark" src={bookmark} className="ml-[4%] w-10 h-10 left-4 cursor-pointer"></img>
                <img id="daily-heart" src={heart} className="cursor-pointer ml-[65%] -mr-1 w-11 h-11 "></img>
            </div>
    </div>
  );
};

export default Daily_Recipe;
