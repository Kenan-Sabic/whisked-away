import React from "react";
import RecipePlaceholder from "./Recipe_Placeholder";
import krosan1 from "../assets/krosan1.jpg";
import krosan3 from "../assets/krosan3.jpg";

const Recipes = () => {
  return (
    <div className="mb-8 flex flex-wrap justify-around gap-10 space-x-8">
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
  );
};

export default Recipes;
