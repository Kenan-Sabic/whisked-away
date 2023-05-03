import React, { useState } from "react";
import ReactDOM from 'react-dom';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import FixedButton from './Fixed_Button';
import Calculator from './Calculator';
import DailyRecipeModal from "./Daily_Recipe_Modal";

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
        <DailyRecipeModal handleCloseModal = {handleCloseModal} onHide = {handleHideModal}></DailyRecipeModal>
    }

    <div>
      <FixedButton buttonText="Calculator" onClick={handleButtonClick} />
    </div>

    </div>
  );
};

export default Daily_Recipe;
