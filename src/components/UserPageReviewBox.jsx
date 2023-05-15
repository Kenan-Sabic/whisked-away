import React from "react";
import threedots from "../assets/threedots.svg";
import RecipeAuthor from "./RecipeAuthor";
const UserPageReviewBox = () => {
  return (
    <div className="mb-2 ml-2 mr-2 mt-2 rounded-md border border-gray-200 p-3 hover:bg-sandybrown ">
      <div className="flex flex-row items-center">
        <div>
          <h1 className="text-3xl">
            <b>Pizza Mexicana</b>
          </h1>
        </div>
        <div className="ml-auto">
          <img src={threedots} className="max-h-[40px] max-w-[40px]" />
        </div>
      </div>
      <div>
        <RecipeAuthor />
      </div>
      <div className="mt-4">
        <h1>
          I recently tried out a new recipe for creamy tomato pasta and it was
          absolutely divine! The combination of rich tomato sauce and velvety
          cream created a perfect balance of flavors. Plus, the addition of
          fresh basil really took it to the next level. I'll definitely be
          making this dish again and again!
        </h1>
      </div>
    </div>
  );
};

export default UserPageReviewBox;
