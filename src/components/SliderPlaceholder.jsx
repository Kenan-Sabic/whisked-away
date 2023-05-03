import React, { useState } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
        cssEase: 'linear'
      };
    
    return (
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <Slider {...settings}>
              <div className=" pointer-events-none">
                <img src={props.img1} alt="Recipe of the Day 1" className="mt-1 w-full h-96 object-cover rounded-xl" />
              </div>
              <div className=" pointer-events-none">
                <img src={props.img2} alt="Recipe of the Day 2" className="mt-1 w-full h-96 object-cover rounded-xl" />
              </div>
              <div className=" pointer-events-none">
                <img src={props.img3} alt="Recipe of the Day 3" className="mt-1 w-full h-96 object-cover rounded-xl" />
              </div>
            </Slider>
          </div>
          <div className="md:w-1/2 p-4 justify-start">
            <div className="flex flex-col">
            <p className="text-white">{props.description}</p>
            <button className="bg-sandybrown text-white rounded-lg px-4 py-2 mt-4 hover:bg-orange-600 transition duration-300 ease-in-out"  onClick={props.handleOpenModal}>View Recipe</button>
            </div>
          </div>
        </div>
    );
};
 
export default SliderPlaceholder;


