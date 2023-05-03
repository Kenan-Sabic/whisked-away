import React, { useState } from "react";
import ReactDOM from 'react-dom';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import FixedButton from './Fixed_Button';
import Calculator from './Calculator';
import DailyRecipeModal from "./DailyRecipeModalPlaceholder";

import krosan1 from "../assets/krosan1.jpg";
import krosan2 from "../assets/krosan2.jpg";
import krosan3 from "../assets/krosan3.jpg";


const Daily_Recipe = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

   const handleHideModal = () => {
    setShowModal(false);
   } 

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'linear'
  };

  const handleButtonClick = () => {
    const calculatorWindow = window.open('', '', 'width=800,height=400');
    calculatorWindow.document.write(`
      <!DOCTYPE html>
        <html>
        <head>
          <title>My New Window</title>
          <link href="/src/index.css" rel="stylesheet">
        </head>
        <body>
          <h1>Hello World</h1>
          <p>This is a new window!</p>
        </body>
      </html>
  `);
    ReactDOM.render(<Calculator />, calculatorWindow.document.body);
  };

  return (
    <div>
      {/*Recipe of the Day*/}

      <div className="daily-recipes flex flex-wrap justify-center mx-0 my-auto "> </div>
      <div className="border border-black rounded-lg overflow-hidden mt-10 h-96 bg-neutral-800	">
        <div className="bg-sandybrown py-4 px-8">
          <h2 className="text-2xl font-bold text-white">Recipe of the Day</h2>
        </div>
        <div className="flex">
          <div className="w-1/2">
            <Slider {...settings}>
              <div>
                <img src={krosan1} alt="Recipe of the Day 1" className="w-full h-96 object-cover" />
              </div>
              <div>
                <img src={krosan2} alt="Recipe of the Day 2" className="w-full h-96 object-cover" />
              </div>
              <div>
                <img src={krosan3} alt="Recipe of the Day 3" className="w-full h-96 object-cover" />
              </div>
            </Slider>
          </div>
          <div className="w-1/2 p-4">
            <div className="ml-5">
            <p className="text-white">Are you a fan of freshly baked pastries? Do you want to add a touch of French sophistication to your breakfast or brunch spread? Look no further than our croissant making recipe!</p>
            <button className="bg-sandybrown text-white rounded-lg px-4 py-2 mt-4 hover:bg-orange-600 transition duration-300 ease-in-out"  onClick={handleOpenModal}>View Recipe</button>
            </div>
          </div>
        </div>
      </div>
      {showModal &&  
        <DailyRecipeModal 
        title = "Croissants"
        serves= "4"
        prepTime= "15-20 minutes"
        cookTime="2 hours"
        ingredients =" 
        - 500g all-purpose flour
        - 10g salt
        - 80g granulated sugar
        - 25g fresh yeast or 10g active dry yeast
        - 300ml warm milk
        - 250g unsalted butter, chilled
        - 1 egg, beaten"
        instructions="In a large mixing bowl, combine the flour, salt, and sugar.
        If using fresh yeast, dissolve it in the warm milk. If using active dry yeast, dissolve it in 1/4 cup warm water with a pinch of sugar, and let it sit for 5 minutes.
        Add the yeast mixture to the flour mixture, and stir until a shaggy dough forms.
        Turn the dough out onto a lightly floured surface, and knead for 10 minutes until smooth and elastic.
        Shape the dough into a ball, and place it in a lightly oiled bowl. Cover the bowl with plastic wrap, and let the dough rise in a warm place for 1 hour, until doubled in size.
        After the dough has risen, punch it down and shape it into a rectangle.
        Cut the chilled butter into thin slices, and place them in a single layer over two-thirds of the dough.
        Fold the uncovered third of the dough over the butter, then fold the other third over the top, like a letter.
        Turn the dough 90 degrees, and roll it out into a long rectangle again.
        Fold the rectangle into thirds again, like a letter.
        Wrap the dough in plastic wrap, and refrigerate for at least 1 hour, or overnight.
        After the dough has chilled, roll it out into a long rectangle, about 1/4 inch thick.
        Cut the rectangle into triangles, and roll each triangle up from the wide end to the narrow end, tucking the narrow end underneath.
        Place the croissants on a baking sheet lined with parchment paper, and brush them with beaten egg.
        Let the croissants rise in a warm place for 30-45 minutes, until they are puffy and doubled in size.
        Preheat the oven to 400°F (200°C).
        Brush the croissants with egg again, and bake for 15-20 minutes, until golden brown.
        Remove the croissants from the oven, and let them cool on a wire rack before serving. Enjoy!"
        imageSrc = {krosan1}
        handleCloseModal = {handleCloseModal} 
        onHide = {handleHideModal}
        ></DailyRecipeModal>
    }
     
    <div>
      <FixedButton buttonText="Calculator" onClick={handleButtonClick} />
    </div>

    </div>
  );
};

export default Daily_Recipe;
