import React from "react";
import faris from "../assets/faris.jpg";
const UserPageBanner = () => {
  return (
    <div className="flex h-[40vh] w-full flex-col items-center bg-neutral-100 md:flex-row md:items-start">
      <div className="mt-[-120px] flex min-h-[240px] min-w-[240px] items-center justify-center rounded-full bg-lightorange shadow-md md:ml-[100px]">
        <img
          src={faris}
          className="h-[240px] w-[240px] rounded-full object-cover"
        ></img>
      </div>
      <div className="text-center">
        <h1 className="mt-10 text-5xl md:ml-10">Faris Hadžiabdić</h1>
      </div>
      <div className="mt-10 flex max-h-[80px] max-w-[300px] cursor-pointer items-center rounded-md bg-lightorange p-4 px-16 font-bold shadow-md md:ml-[100px] md:mr-[150px]">
        <h1>Edit Profile</h1>
      </div>
    </div>
  );
};

export default UserPageBanner;
