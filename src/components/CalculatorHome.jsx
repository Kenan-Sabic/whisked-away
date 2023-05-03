import React from "react";
import Calculator from "./Calculator";
import ReactDOM from 'react-dom';
import tw from "tailwind-styled-components";
import calculator from "../assets/calculator.png";

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
  return (
    <Wrapper>
      <OrangeBox>
        <TextBox>
            <h1 className="text-neutral-700 text-2xl font-extrabold text-center mt-4 md:mt-8 md:text-left">TRY OUR CONVERTER</h1>
            <p className="text-neutral-700 text-center md:text-left">
            Having problems with converting from imperial to metric system? <br /> 
            Not knowing value of Farenheit in Celsius? <br />
            Do not worry, try our converter and make the cooking process easier <br /></p>
            <br />
            <p className="text-neutral-700 text-center md:text-left underline decoration-1">Click on the icon or on the button in the corner to get started!</p>
        </TextBox>
        <ImageBox>
          <img
            src={calculator}
            alt="image"
            className="w-72 h-72 object-cover ml-20 border-8 border-neutral-700 rounded-full md:ml-72 cursor-pointer"
            onClick ={handleButtonClick}
          />
        </ImageBox>
      </OrangeBox>
    </Wrapper>
  );
};

export default CalculatorHome;


