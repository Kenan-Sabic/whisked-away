import React from "react";

const UserPageBio = () => {
  return (
    <div>
      <div className="mx-2 flex flex-col items-center rounded-2xl border border-dashed border-sandybrown bg-white py-3 text-center">
        <h1 className="text-5xl">Faris's Bio</h1>
        <div className="w-11/12 rounded-md text-center">
          <h1 className="mb-3 ml-5 mt-6">
            Hi there! My name is Faris and I'm a self-taught chef and food
            enthusiast. Growing up, I was always fascinated by the different
            cuisines and flavors from around the world, and I made it my mission
            to learn as much as I could about cooking. Whether you're a beginner
            in the kitchen or an experienced home cook, I'm here to help you
            explore new flavors and techniques, and to inspire you to try new
            things in your cooking.
          </h1>
        </div>
        <div className="w-11/12 rounded-md text-center">
          <h1 className="mt-5 text-xl">Joined</h1>
          <h1>12. March 2023</h1>
        </div>
        <div className="w-11/12 rounded-lg text-center">
          <h1 className="mt-5 text-xl">Favorite food:</h1>
          <h1>Pancakes, Čevapi</h1>
        </div>
      </div>
    </div>
  );
};

export default UserPageBio;
