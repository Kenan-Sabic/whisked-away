import React from 'react';
import faris from '../assets/faris.jpg';

const EditUserPageImageBanner = () => {
  return (
    <div className="flex h-[40vh] w-full justify-center items-center bg-neutral-100">
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center mt-[-30vh] rounded-full bg-lightorange shadow-md">
          <img
            src={faris}
            className="h-[240px] w-[240px] rounded-full object-cover"
            alt="Faris Hadžiabdić"
          />
        </div>
        <div className="text-center p-2 bg-sandybrown w-auto h-15 hover:cursor-pointer shadow-md rounded-md mt-10">
          <h1 className="text-3xl">Edit profile picture</h1>
        </div>
      </div>
    </div>
  );
};

export default EditUserPageImageBanner;
