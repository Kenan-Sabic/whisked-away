import React from "react";
import plusSymbol from "../assets/plusSymbol.svg";
const AddRecipeTab = () => {
  return (
    <div>
      <div className="px-6">
        <div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-4 p-6 md:grid-cols-11">
            <div className="flex h-14  min-w-[150px] cursor-pointer items-center justify-center rounded-lg bg-neutral-50 text-center font-bold shadow-lg hover:bg-sandybrown hover:text-white md:col-span-3">
              <h1
                onClick={() => {
                  window.location.href = "/user/recipes";
                }}
              >
                Your Recipes
              </h1>
            </div>
            <div className="flex h-14  min-w-[150px] cursor-pointer items-center justify-center rounded-lg bg-neutral-50 text-center font-bold shadow-lg hover:bg-sandybrown hover:text-white md:col-span-3">
              <h1>Your Favorites</h1>
            </div>
            <div className="col-span-2 flex  h-14 min-w-[150px] cursor-pointer items-center justify-center rounded-lg bg-neutral-50 text-center font-bold shadow-lg hover:bg-sandybrown hover:text-white md:col-span-3">
              <h1>Saved Recipes</h1>
            </div>
            <div
              onClick={() => {
                window.location.href = "/user/recipes/add";
              }}
              className="col-span-2 flex  h-14 min-w-[150px] cursor-pointer items-center justify-center rounded-lg bg-sandybrown text-center font-bold shadow-lg hover:text-jet md:col-span-2"
            >
              <img src={plusSymbol} className="h-[50%] w-[50%]" />
            </div>
          </div>
          <div className="mt-8 w-full bg-neutral-100 md:grid md:grid-cols-12">
            <div className="flex w-full flex-col items-center justify-center rounded-md bg-neutral-200 p-4 text-center shadow-md md:col-start-1 md:col-end-4">
              <h1 className="text-3xl">Add Picture</h1>
              <img src={plusSymbol} className="mt-5 h-[40%] w-[40%]" />
            </div>
            <div className="flex w-full flex-col items-center justify-center rounded-md bg-neutral-200 p-4 text-center shadow-md md:col-start-5 md:col-end-13">
              <div className="flex w-full flex-row bg-neutral-200 p-4">
                <h1 className="text-3xl">Serving size: </h1>
                <div class=" h-auto w-[60%] rounded-md bg-neutral-200 text-center shadow-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRecipeTab;
