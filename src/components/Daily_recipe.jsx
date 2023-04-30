import React, { useState } from "react";
import Slider from 'react-slick';
//import Modal from "./Pop-up";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import krosan1 from "../assets/krosan1.jpg";
import krosan2 from "../assets/krosan2.jpg";
import krosan3 from "../assets/krosan3.jpg";

import heart from "../assets/heart.png";
import bookmark from "../assets/bookmark.png";

const Daily_Recipe = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


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
            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            <button className="bg-sandybrown text-white rounded-lg px-4 py-2 mt-4 hover:bg-orange-600 transition duration-300 ease-in-out"  onClick={handleOpenModal}>View Recipe</button>
            </div>
          </div>
        </div>
      </div>
      {showModal &&  <div className="fixed z-10 inset-0 overflow-y-auto mt-10">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 mt-10 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div>
            
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Making croissants</h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">Serves: 4</p>
                <p className="text-sm text-gray-500">Prep Time: 30-40 minutes to mix and knead the dough, and another 10-15 minutes to roll and fold the dough with the butter. After that, the dough needs to be chilled for at least an hour, or overnight, before shaping and baking the croissants.</p>
                <p className="text-sm text-gray-500">Cook Time: 15-20 minutes in preheated oven</p>
              </div>
              <div className="mt-5">
                <h4 className="text-sm leading-5 font-medium text-gray-900">Ingredients</h4>
                <ul className="mt-2">
                  <li className="text-sm text-gray-500">500g all-purpose flour</li>
                  <li className="text-sm text-gray-500">10g salt</li>
                  <li className="text-sm text-gray-500">80g granulated sugar</li>
                  <li className="text-sm text-gray-500">25g fresh yeast or 10g active dry yeast</li>
                  <li className="text-sm text-gray-500">300ml warm milk</li>
                  <li className="text-sm text-gray-500">250g unsalted butter, chilled</li>
                  <li className="text-sm text-gray-500">1 egg, beaten</li>
                </ul>
              </div>
              <div className="mt-5">
              <h4 className="text-sm leading-5 font-medium text-gray-900">Instructions</h4>
                <ol className="mt-2">
                  <li className="text-sm text-gray-500">In a large mixing bowl, combine the flour, salt, and sugar</li>
                  <li className="text-sm text-gray-500">If using fresh yeast, dissolve it in the warm milk. If using active dry yeast, dissolve it in 1/4 cup warm water with a pinch of sugar, and let it sit for 5 minutes.</li>
                  <li className="text-sm text-gray-500">Add the yeast mixture to the flour mixture, and stir until a shaggy dough forms.</li>
                  <li className="text-sm text-gray-500">Turn the dough out onto a lightly floured surface, and knead for 10 minutes until smooth and elastic.</li>
                  <li className="text-sm text-gray-500">Shape the dough into a ball, and place it in a lightly oiled bowl. Cover the bowl with plastic wrap, and let the dough rise in a warm place for 1 hour, until doubled in size.</li>
                  <li className="text-sm text-gray-500">After the dough has risen, punch it down and shape it into a rectangle.</li>
                  <li className="text-sm text-gray-500">Cut the chilled butter into thin slices, and place them in a single layer over two-thirds of the dough.</li>
                  <li className="text-sm text-gray-500">Fold the uncovered third of the dough over the butter, then fold the other third over the top, like a letter.</li>
                  <li className="text-sm text-gray-500">Turn the dough 90 degrees, and roll it out into a long rectangle again.</li>
                  <li className="text-sm text-gray-500">Fold the rectangle into thirds again, like a letter.</li>
                  <li className="text-sm text-gray-500">Wrap the dough in plastic wrap, and refrigerate for at least 1 hour, or overnight.</li>
                  <li className="text-sm text-gray-500">After the dough has chilled, roll it out into a long rectangle, about 1/4 inch thick.</li>
                  <li className="text-sm text-gray-500">Cut the rectangle into triangles, and roll each triangle up from the wide end to the narrow end, tucking the narrow end underneath.</li>
                  <li className="text-sm text-gray-500">Place the croissants on a baking sheet lined with parchment paper, and brush them with beaten egg.</li>
                  <li className="text-sm text-gray-500">Let the croissants rise in a warm place for 30-45 minutes, until they are puffy and doubled in size.</li>
                  <li className="text-sm text-gray-500">Preheat the oven to 400°F (200°C).</li>
                  <li className="text-sm text-gray-500">Brush the croissants with egg again, and bake for 15-20 minutes, until golden brown.</li>
                  <li className="text-sm text-gray-500">Remove the croissants from the oven, and let them cool on a wire rack before serving. Enjoy!</li>


                </ol>
              </div>
            </div>
            <div>
                <img src={krosan1} alt="Recipe of the Day 1" className="w-full h-96 object-cover mt-10 rounded-lg border-solid border-neutral-600" />
              </div>
          </div>
          <div className="mt-5 sm:mt-6">
            <button onClick={handleCloseModal} className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 sm:text-sm">
              Close
            </button>
          </div>

      </div>
      </div>
    </div>}
    
      

      <div>
        sjwsjs
      </div>
    </div>
  );
};

export default Daily_Recipe;
