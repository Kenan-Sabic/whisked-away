import React from "react";

import croissant from "../assets/krosan1.jpg";
import heart from "../assets/heart.png";
import bookmark from "../assets/bookmark.png";

const UserProfileRecipe = () => {
  return (
    <div className="mb-5 flex w-full flex-col">
      <div className="flex h-48 w-full justify-start">
        <img
          src={croissant}
          className="h-full w-1/3 rounded-2xl object-cover"
        />
        <div className="flex flex-col">
          <h1 className="ml-4 text-2xl font-bold">Croissant</h1>
          <h2 className="ml-4 text-xl underline">by Faris</h2>
          <div class="mt-7 flex">
            <h2 className="ml-4 text-xl">Rating: </h2>
            <img src={heart} className="ml-4 h-8 w-8" />
            <h2 className="ml-4 text-xl">87 </h2>
          </div>
          <div class="mt-7 flex">
            <h2 className="ml-4 text-xl">Saved: </h2>
            <img src={bookmark} className="ml-4 h-8 w-8" />
            <h2 className="ml-4 text-xl">52 </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileRecipe;
