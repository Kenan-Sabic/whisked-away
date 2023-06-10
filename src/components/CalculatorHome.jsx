import React from "react";
import Calculator from "./Calculator";
import ReactDOM from 'react-dom';
import tw from "tailwind-styled-components";
import cookbook from "../assets/cookbook.png"
import calculator from "../assets/calculator.png";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = tw.div`
    mt-20
    bg-neutral-700
    p-4
    md:p-8
`;

const OrangeBox = tw.div`
  bg-sandybrown
  flex
  flex-col
  md:justify-between
  md:flex-row
`;

const TextBox = tw.div`
  p-4
  md:p-8
`;

const ImageBox = tw.div`
    w-full
    md:w-1/2

`;

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

  const CalculatorHome = () => {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true, 
      autoplaySpeed: 4000, 
    };
  
    return (
      <Wrapper>
        <Slider {...settings}>
          <div>
            <OrangeBox>
              <TextBox>
                <h1 className="text-neutral-700 text-2xl font-extrabold text-center mt-4 md:mt-8 md:text-left">TRY OUR CONVERTER</h1>
                <p className="text-neutral-700 text-center md:text-left">
                  Having problems with converting from imperial to metric system? <br /> 
                  Not knowing the value of Fahrenheit in Celsius? <br />
                  Do not worry, try our converter and make the cooking process easier <br />
                </p>
                <br />
                <p className="text-neutral-700 text-center md:text-left underline decoration-1 cursor-pointer" onClick={handleButtonClick}>
                  Check it out!
                </p>
              </TextBox>
              <ImageBox>
                <img
                  src={calculator}
                  alt="image"
                  className="w-72 h-72 object-cover ml-20 border-8 border-neutral-700 rounded-full md:ml-72 cursor-pointer"
                  onClick={handleButtonClick}
                />
              </ImageBox>
            </OrangeBox>
          </div>
          <div>
            <OrangeBox>
              <TextBox>
                <h1 className="text-neutral-700 text-2xl font-extrabold text-center mt-4 md:mt-8 md:text-left">CHECK OUT OUR COOKBOOK</h1>
                <p className="text-neutral-700 text-center md:text-left">
                  Explore our delicious recipes in our cookbook! <br /> 
                  Discover new dishes, get inspired, and enjoy the cooking journey. <br />
                  Click the button below to see the flipbook.
                </p>
                <br />
                <a
                  href="https://online.fliphtml5.com/wcpqj/iojk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-700 text-center md:text-left underline decoration-1"
                >
                  See Cookbook
                </a>
              </TextBox>
              <ImageBox>
                <img
                  src={cookbook}
                  alt="Cookbook"
                  className="w-72 h-72 object-cover ml-20 border-8 border-neutral-700 rounded-full md:ml-72"
                />
              </ImageBox>
            </OrangeBox>
          </div>
        </Slider>
      </Wrapper>
    );
  };

export default CalculatorHome;


