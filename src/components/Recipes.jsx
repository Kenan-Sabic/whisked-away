import React from "react";
import RecipePlaceholder from "./Recipe_Placeholder";
import krosan1 from "../assets/krosan1.jpg";
import krosan3 from "../assets/krosan3.jpg";

const Recipes = () => {

  return (
    <div>
      <div className="flex flex-wrap space-x-8 ml-12 md:ml-0">
        <div className="ml-3 md:ml-8">
        <RecipePlaceholder
          title="Croissants"
          userName="Faris"
          imageSrc={krosan1}
        />
        </div>
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
      <div className="flex flex-wrap space-x-8 ml-12 md:ml-0 mb-12">
        <div className="ml-3 md:ml-8">
        <RecipePlaceholder
          title="Croissants"
          userName="Faris"
          imageSrc={krosan1}
        />
        </div>
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

export default Recipes;
