import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderPlaceholder = (props) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: "linear",
  };

  return (
    <div className="flex flex-col p-7 md:flex-row">
      <div className="md:w-1/2">
        <Slider {...settings}>
          <div className=" pointer-events-none">
            <img
              src={props.img1}
              alt="Recipe of the Day 1"
              className="mt-1 h-96 w-full rounded-xl object-cover"
            />
          </div>
          <div className=" pointer-events-none">
            <img
              src={props.img2}
              alt="Recipe of the Day 2"
              className="mt-1 h-96 w-full rounded-xl object-cover"
            />
          </div>
        </Slider>
      </div>
      <div className="justify-start p-4 md:w-1/2">
        <div className="flex flex-col">
          <p className="text-white">{props.description}</p>
          <button
            className="mt-4 rounded-lg bg-sandybrown px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-orange-600"
            onClick={props.handleOpenModal}
          >
            View Recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderPlaceholder;
