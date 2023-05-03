import React from "react";
import krosan1 from "../assets/krosan1.jpg";
import RecipePlaceholder from "./Recipe_Placeholder";
import html2pdf from 'html2pdf.js';

const Suggestions = () => {

  


  return (
    <div className="max-w-[100vw]">

        <div className="filters flex flex-col items-center mt-8 flex-wrap md:flex-row ml-11 text-2xl">
            <p className="-ml-16 bg-slate-200 rounded-lg px-2 md:ml-5 ">Suggested recipes:</p>
        </div>

      <div className="daily-line w-[95%] -mt-4 bg-slate-200 h-0.5 justify-center mx-0 my-auto ml-4 md:ml-4"></div>  
      <div className="flex flex-wrap space-x-8 ml-12 md:ml-8">
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