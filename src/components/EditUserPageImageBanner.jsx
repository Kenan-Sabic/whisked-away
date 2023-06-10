import faris from '../assets/faris.jpg';
import React, {useRef} from "react";

const EditUserPageImageBanner = () => {

  const fileInputRef = useRef(null);

  const handleFileUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
  };


  return (
    <div className="flex h-[35vh] w-full justify-center items-center bg-neutral-100">
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center mt-[-30vh] rounded-full bg-lightorange shadow-md">
          <img
            src={faris}
            className="h-[240px] w-[240px] rounded-full object-cover"
            alt="Faris Hadžiabdić"
          />
        </div>
        <div className="text-center p-2 bg-sandybrown w-auto h-15 hover:cursor-pointer shadow-md rounded-md mt-10"
          onClick={handleFileUpload}
        >
        <h1 className="text-3xl">Change profile picture</h1>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleFileChange}
          />
        </div>
      </div>
    </div>
  );
};

export default EditUserPageImageBanner;
