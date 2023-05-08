import React from 'react';
import heart from '../assets/heart.png';
import bookmark from '../assets/bookmark.png';
import krosan1 from "../assets/krosan1.jpg";
const RecipePlaceholder = ({title, userName, imageSrc}) => {

    const likeOnClick = () => {
        alert("You liked the recipe!");
    }
    
      const saveOnClick = () => {
        alert("You saved the recipe!");
    }


  return (

    <div className="w-80 h-96 bg-gray-200 rounded-xl shadow-xl ml-5 mt-10 shadow-neutral-800 transition duration-300 ease-in-out transform hover:scale-110">
          <img id="recipe-image" src={krosan1} className="object-cover w-full h-170 rounded-2xl"></img>
          <h2 className="mt-2 text-3xl font-normal cursor-pointer text-center">{title}</h2>
          <h3 className="text-lg font-light text-center">
            Posted by: <a className="underline cursor-pointer">{userName}</a>
          </h3>
          <div className="flex justify-between">
            <div>
              <img  src={bookmark} className="ml-4 mt-8 w-10 h-12 cursor-pointer" onClick={saveOnClick}></img>
            </div>
            <div>
              <img src={heart} className="ml-65 mr-2 w-43 h-43 mt-6 cursor-pointer" onClick={likeOnClick}></img>
            </div>

          </div>
        </div>
  );
};

export default RecipePlaceholder;