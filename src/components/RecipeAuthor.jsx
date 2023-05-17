import React from "react";
import userImgDefault from "../assets/userImgDefault.svg";
const RecipeAuthor = () => {
  return (
    <div className="mt-6">
      <div className="flex items-center">
        <div>
          <h3 className="mr-4 text-xl">by</h3>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lightorange shadow-md">
          <img src={userImgDefault} className="h-3/5 w-3/5"></img>
        </div>
        <div>
          <h2 className="ml-5 text-xl">John Doe</h2>
        </div>
        <div>
          <h3 className="ml-5 text-xl text-gray-500">13/05/2023</h3>
        </div>
      </div>
    </div>
  );
};

export default RecipeAuthor;
