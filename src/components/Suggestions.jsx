import React from "react";
import krosan1 from "../assets/krosan1.jpg";
import RecipePlaceholder from "./Recipe_Placeholder";

const Suggestions = () => {

  return (
    <div className="max-w-[100vw]">

      <div className="filters flex flex-col justify-center items-center mt-8 flex-wrap md:flex-row ml-11 text-4xl">
        <p className="-ml-16  rounded-lg px-2 py-2  text-neutral-700 font-extrabold">YOU WILL LOVE THESE</p>
      </div>

      <div className="daily-line w-[95%] -mt-0 bg-neutral-700 h-0.5 justify-center mx-0 my-auto ml-2 md:ml-8  "></div>  
      <div className="flex flex-wrap space-x-5 ml-16 md:ml-8 md:space-x-8">
        <RecipePlaceholder
          title="Croissants"
          userName="Faris"
          imageSrc={krosan1}
        />
        <RecipePlaceholder
          title="Croissants"
          userName="Faris"
          imageSrc={krosan1}
        />
        <RecipePlaceholder
          title="Croissants"
          userName="Faris"
          imageSrc={krosan1}
        />
        <RecipePlaceholder
          title="Croissants"
          userName="Faris"
          imageSrc={krosan1}
        />
      </div>
    </div>
  );
};

export default Suggestions;