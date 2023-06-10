import React from "react";
import ReactDOM from "react-dom";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import FixedButton from "./Fixed_Button";
import Calculator from "./Calculator";
import DailyRecipeModal from "./DailyRecipeModalPlaceholder";

import krosan1 from "../assets/krosan1.jpg";
import krosan2 from "../assets/krosan2.jpg";
import krosan3 from "../assets/krosan3.jpg";
import SliderPlaceholder from "./SliderPlaceholder";

const Daily_Recipe = () => {
  const [showModal, setShowModal] = React.useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleHideModal = () => {
    setShowModal(false);
  };

  const handleClick = () => {
    generatePDF();
  };

  const recipeTitle = "Croissants";
  const recipeServes = "4";
  const recipePrepTime = "15-20 minutes";
  const recipeCookTime = "2 hours";
  const recipeIngredients = "500g all-purpose flour\n10g salt \n80g granulated sugar\n25g fresh yeast or 10g active dry yeast\n300ml warm milk\n250g unsalted butter, chilled\n1 egg, beaten";
  const recipeInstructions ='In a large mixing bowl, combine the flour, salt, and sugar.\n If using fresh yeast, dissolve it in the warm milk.\n If using active dry yeast, dissolve it in 1/4 cup warm water with a pinch of sugar, and let it sit for 5 minutes.\n Add the yeast mixture to the flour mixture, and stir until a shaggy dough forms.\n Turn the dough out onto a lightly floured surface, and knead for 10 minutes until smooth and elastic. \nShape the dough into a ball, and place it in a lightly oiled bowl. \n Cover the bowl with plastic wrap, and let the dough rise in a warm place for 1 hour, until doubled in size. \nAfter the dough has risen, punch it down and shape it into a rectangle.\n Cut the chilled butter into thin slices, and place them in a single layer over two-thirds of the dough. \nFold the uncovered third of the dough over the butter, then fold the other third over the top, like a letter.\n Turn the dough 90 degrees, and roll it out into a long rectangle again.\nFold the rectangle into thirds again, like a letter.\nWrap the dough in plastic wrap, and refrigerate for at least 1 hour, or overnight.\nAfter the dough has chilled, roll it out into a long rectangle, about 1/4 inch thick.\nCut the rectangle into triangles, and roll each triangle up from the wide end to the narrow end, tucking the narrow end underneath.\nPlace the croissants on a baking sheet lined with parchment paper, and brush them with beaten egg.\nLet the croissants rise in a warm place for 30-45 minutes, until they are puffy and doubled in size.\nPreheat the oven to 400°F (200°C).\nBrush the croissants with egg again, and bake for 15-20 minutes, until golden brown.\nRemove the croissants from the oven, and let them cool on a wire rack before serving.\n Enjoy!';

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text(`Recipe of the Day - ${recipeTitle}`, 10, 10);

    const tableData = [
      ["Serves", recipeServes],
      ["Prep Time", recipePrepTime],
      ["Cook Time", recipeCookTime],
      ["Ingredients", recipeIngredients],
      ["Instructions", recipeInstructions],
    ];

    doc.autoTable({
      startY: 30,
      head: [["Property", "Value"]],
      body: tableData,
    });

    doc.save("recipe.pdf");
  };

  return (
    <div className="flex flex-col items-center">
      {/* Recipe of the Day */}
      <div className="daily-recipes mx-0 my-auto flex flex-wrap justify-center"></div>
      <div className="mt-10 w-3/4 overflow-hidden rounded-lg border border-neutral-600 bg-neutral-600">
        <div className="border-b-4 border-sandybrown bg-neutral-600 px-8 py-4">
          <h2 className="text-center text-2xl font-extrabold text-white md:text-left">
            RECIPE OF THE DAY
          </h2>
        </div>

        <SliderPlaceholder
          img1={krosan1}
          img2={krosan2}
          description="Are you a fan of freshly baked pastries? Do you want to add a touch of French sophistication to your breakfast or brunch spread? Look no further than our croissant making recipe!"
          handleOpenModal={handleOpenModal}
        ></SliderPlaceholder>
      </div>
      {showModal && (
        <DailyRecipeModal
          title={recipeTitle}
          serves={recipeServes}
          prepTime={recipePrepTime}
          cookTime={recipeCookTime}
          ingredients={recipeIngredients}
          instructions={recipeInstructions}
          imageSrc={krosan1}
          handleCloseModal={handleCloseModal}
          onHide={handleHideModal}
        ></DailyRecipeModal>
      )}

      <div>
        <button
          onClick={handleClick}
          className="fixed bottom-2 right-2 shadow-lg p-4 bg-sandybrown text-white rounded-full z-50"
        >
          Download Recipe PDF
        </button>
      </div>
    </div>
  );
};

export default Daily_Recipe;
