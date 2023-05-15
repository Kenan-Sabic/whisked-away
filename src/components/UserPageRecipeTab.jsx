import React from "react";
import krosan1 from "../assets/krosan1.jpg";
import krosan2 from "../assets/krosan2.jpg";
import heart from "../assets/heart.png";
import bookmark from "../assets/bookmark.png";
import RecipePlaceholder from "./RecipeBeta";
import LoadMoreButton from "./LoadMoreButton";
const UserPageRecipeTab = () => {
  return (
    <div className="px-6">
      <div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-4 p-6 md:grid-cols-3">
          <div className="flex h-14  min-w-[150px] cursor-pointer items-center justify-center rounded-lg bg-neutral-50 text-center font-bold shadow-lg hover:bg-sandybrown hover:text-white md:col-span-1">
            <h1>Your Recipes</h1>
          </div>
          <div className="flex h-14  min-w-[150px] cursor-pointer items-center justify-center rounded-lg bg-neutral-50 text-center font-bold shadow-lg hover:bg-sandybrown hover:text-white md:col-span-1">
            <h1>Your Favorites</h1>
          </div>
          <div className="col-span-2 flex  h-14 min-w-[150px] cursor-pointer items-center justify-center rounded-lg bg-neutral-50 text-center font-bold shadow-lg hover:bg-sandybrown hover:text-white md:col-span-1">
            <h1>Saved Recipes</h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <RecipePlaceholder />
          <RecipePlaceholder />
          <RecipePlaceholder />
          <RecipePlaceholder />
        </div>
        <div className="mt-24">
          <LoadMoreButton />
        </div>
      </div>
    </div>
  );
};

export default UserPageRecipeTab;
