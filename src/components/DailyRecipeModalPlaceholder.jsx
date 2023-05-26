import React, { useRef, useEffect, useState } from "react";
import close from "../assets/closebtn.png";
import ReactDOM from "react-dom";
import Calculator from "./Calculator";

const DailyRecipeModal = (props) => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const popupRef = useRef(null);
  
  function handleClickOutside(event) {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      props.onHide();
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleButtonClick = () => {
    const calculatorWindow = window.open("", "", "width=800,height=400");
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
      <div ref={popupRef}>
        <div className="fixed inset-0 z-10 mt-10 overflow-y-auto">
          <div className="mt-10 flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:h-screen sm:align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block max-w-[900px] transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:p-6 sm:align-middle">
              <div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <img
                    src={close}
                    alt="Recipe of the Day 1"
                    onClick={props.handleCloseModal}
                    className="absolute right-4 top-6 cursor-pointer"
                  />
                  <h3 className="text-xl font-extrabold font-medium leading-6 text-gray-900">
                    {props.title}
                  </h3>
                  <div className="mt-2 text-center sm:text-left">
                    <p className="text-sm text-gray-500">
                      Serves: {props.serves}
                    </p>
                    <p className="text-sm text-gray-500">
                      Prep Time: {props.prepTime}
                    </p>
                    <p className="text-sm text-gray-500">
                      Cook Time: {props.cookTime}
                    </p>
                  </div>
                  <div className="mt-5 text-center sm:text-justify ">
                    <h4 className="text-md font-extrabold font-medium leading-5 text-gray-900 ">
                      Ingredients
                    </h4>
                    {props.ingredients.split("\n").map((ingredient, index) => (
                      <span
                        key={index}
                        className="mt-2 block break-words text-sm"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 text-center sm:text-justify">
                    <h4 className="text-md font-extrabold font-medium leading-5 text-gray-900">
                      Instructions
                    </h4>
                    {props.instructions
                      .split("\n")
                      .map((instruction, index) => (
                        <span
                          key={index}
                          className="mt-2 block break-words text-sm"
                        >
                          {instruction}
                        </span>
                      ))}
                  </div>
                </div>
                <div>
                  <img
                    src={props.imageSrc}
                    alt="Recipe of the Day 1"
                    className="mt-10 h-96 w-full rounded-lg border-solid border-neutral-600 object-cover"
                  />
                </div>
              </div>
              <div className="mt-5 sm:mt-6">
                <button
                  onClick={handleButtonClick}
                  className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-sandybrown px-4 py-2 text-base font-medium text-white shadow-sm hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:text-sm"
                >
                  Calculator
                </button>
                <div className="mt-5"></div>
                <button
                  onClick={props.handleCloseModal}
                  className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyRecipeModal;
