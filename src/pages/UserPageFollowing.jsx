import React from "react";
import Navbar from "../components/Navbar";
import UserPageBanner from "../components/UserPageBanner";
import UserPageFollowerTab from "../components/UserPageFollowerTab";
import UserPageBio from "../components/UserPageBio";
import Footer from "../components/Footer";
const UserPageFollowing = () => {
  return (
    <div className="bg-neutral-100">
      <Navbar />
      <div className="bg-spices bg-cover pt-80">
        <UserPageBanner />
      </div>
      <div className="w-full md:grid md:grid-cols-10">
        <div className=" flex w-full flex-col items-center rounded-md text-center md:col-start-1 md:col-end-4 md:mt-[-170px]">
          <UserPageBio />
        </div>
        <div className="mb-5  flex w-full flex-col items-center rounded-md border border-dashed border-sandybrown bg-neutral-50 text-center shadow-2xl md:col-start-4 md:col-end-11 md:mt-[-170px]">
          <div className="mt-8 grid w-full grid-cols-2 gap-x-4 gap-y-4 rounded-lg p-6 md:grid-cols-4 md:gap-x-6">
            <div
              className="flex h-14 cursor-pointer  items-center justify-center rounded-lg text-center font-bold shadow-lg hover:bg-sandybrown hover:text-white md:col-span-1"
              onClick={() => {
                window.location.href = "/user/recipes";
              }}
            >
              <h1>Recipes</h1>
            </div>
            <div
              onClick={() => {
                window.location.href = "/user/reviews";
              }}
              className="flex h-14 cursor-pointer items-center justify-center rounded-lg text-center font-bold shadow-lg hover:bg-sandybrown hover:text-white md:col-span-1"
            >
              <h1 className="text-center">Reviews</h1>
            </div>
            <div
              onClick={() => {
                window.location.href = "/user/followers";
              }}
              className="flex h-14 cursor-pointer items-center justify-center rounded-lg text-center font-bold shadow-lg hover:bg-sandybrown hover:text-white md:col-span-1"
            >
              <h1 className="text-center">Followers</h1>
            </div>
            <div
              onClick={() => {
                window.location.href = "/user/following";
              }}
              className="flex h-14 cursor-pointer items-center justify-center rounded-lg bg-sandybrown text-center font-bold shadow-lg hover:text-white md:col-span-1"
            >
              <h1 className="text-center">Following</h1>
            </div>
          </div>

          <div className="m-5 mb-10 w-full bg-neutral-50 pb-4">
            <UserPageFollowerTab />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserPageFollowing;
