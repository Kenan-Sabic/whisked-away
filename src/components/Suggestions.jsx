import React from "react";
import krosan1 from "../assets/krosan1.jpg";
import RecipePlaceholder from "./Recipe_Placeholder";

const Suggestions = () => {
  return (
    <div className="max-w-[100vw]">
      <div className="filters ml-11 mt-8 flex flex-col flex-wrap items-center justify-center text-4xl md:flex-row">
        <p className="-ml-16  rounded-lg px-2 py-2  font-extrabold text-neutral-700">
          YOU WILL LOVE THESE
        </p>
      </div>

      <div className="daily-line mx-0 my-auto -mt-0 ml-2 h-0.5 w-[95%] justify-center bg-neutral-700 md:ml-8  "></div>
      <div className="ml-16 flex flex-wrap justify-evenly space-x-5 md:ml-8 md:space-x-8">
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
