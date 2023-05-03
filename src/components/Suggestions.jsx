import React from "react";
import krosan1 from "../assets/krosan1.jpg";
import krosan2 from "../assetskrosan2.jpg";
import heart from "../assets/heart.png";
import bookmark from "../assets/bookmark.png";
const Suggestions = () => {
  return (
    <div className="max-w-[100vw]">

        <div className="filters flex flex-col items-center mt-[130px] flex-wrap md:flex-row ml-11 text-2xl">
            <p className="-mt-3 ml-0 bg-slate-200 rounded-lg h-9 px-2 md:ml-5">Suggested recipes:</p>
        </div>

      <div className="daily-line w-[95%] -mt-4 bg-slate-200 h-0.5 justify-center mx-0 my-auto"></div>  
      <div className="recipes flex flex-col md:flex-row items-center m-0 w-full">
        <div className="recipe w-[340px] h-[370px] bg-slate-200 rounded-3xl ml-[5%] mt-12 shadow-md">
          <img id="recipe-image" src={krosan1} className="mt-1 ml-5 flex w-[325px]  h-[170px] rounded-3xl cursor-pointer object-cover "></img>
          <h2 className="ml-3 text-3xl font-normal cursor-pointer">Croissants</h2>
          <h3 className="ml-3 text-2xl font-light">
            Posted by: <a className="underline cursor-pointer">Faris</a>
          </h3>
          <img id="bookmark" src={bookmark} className="ml-[4%] w-10 h-10 left-4 cursor-pointer"></img>
          <img id="heart" src={heart} ></img>
        </div>

        <div className="recipe">
          <img id="recipe-image" src={krosan2} className="mt-1 ml-5 flex w-6 h-6 cursor-pointer"></img>
          <h2>Croissants</h2>
          <h3>
            Posted by: <a>Ismar</a>
          </h3>
          <img id="bookmark" src={bookmark}></img>
          <img id="heart" src={heart}></img>
        </div>

        <div className="recipe">
          <img id="recipe-image" src={krosan1} className="mt-1 ml-5 flex w-6 h-6 cursor-pointer"></img>
          <h2>Croissants</h2>
          <h3>
            Posted by: <a>Adnan</a>
          </h3>
          <img id="bookmark" src={bookmark}></img>
          <img id="heart" src={heart}></img>
        </div>

        <div className="recipe">
          <img id="recipe-image" src={krosan1} className="mt-1 ml-5 flex w-6 h-6 cursor-pointer"></img>
          <h2>Croissants</h2>
          <h3>
            Posted by: <a>Faris</a>
          </h3>
          <img id="bookmark" src={bookmark}></img>
          <img id="heart" src={heart}></img>
        </div>

        <div className="recipe">
          <img id="recipe-image" src={krosan2}></img>
          <h2>Croissants</h2>
          <h3>
            Posted by: <a>Ismar</a>
          </h3>
          <img id="bookmark" src={bookmark}></img>
          <img id="heart" src={heart}></img>
        </div>

        <div className="recipe">
          <img id="recipe-image" src={krosan1}></img>
          <h2>Croissants</h2>
          <h3>
            Posted by: <a>Adnan</a>
          </h3>
          <img id="bookmark" src={bookmark}></img>
          <img id="heart" src={heart}></img>
        </div>

        <div className="recipe">
          <img id="recipe-image" src={krosan1}></img>
          <h2>Croissants</h2>
          <h3>
            Posted by: <a>Faris</a>
          </h3>
          <img id="bookmark" src={bookmark}></img>
          <img id="heart" src={heart}></img>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;