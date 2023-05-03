import React, { useRef, useEffect, useState } from 'react';
import krosan1 from "../assets/krosan1.jpg";
import close from '../assets/closebtn.png';
import ReactDOM from 'react-dom';



import Calculator from './Calculator';

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
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

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
            <div ref={popupRef}>
                <div className="fixed z-10 inset-0 overflow-y-auto mt-10">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 mt-10 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                            <div>
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <img src={close} alt="Recipe of the Day 1"  onClick={props.handleCloseModal} className= 'absolute top-6 right-4 cursor-pointer' />
                                    <h3 className="text-xl leading-6 font-medium text-gray-900">{props.title}</h3>
                            <div className="mt-2">
                                <p className="text-sm text-gray-500">Serves: {props.serves}</p>
                                <p className="text-sm text-gray-500">Prep Time: {props.prepTime}</p>
                                <p className="text-sm text-gray-500">Cook Time: {props.cookTime}</p>
                            </div>
                            <div className="mt-5 text-justify">
                                <h4 className="text-md leading-5 font-medium text-gray-900 ">Ingredients</h4>
                                {props.ingredients.split('\n').map((ingredient, index) => (
                                    <span key={index} className="block break-words mt-2 text-sm">
                                        {ingredient}
                                    </span>
                                ))}
                            </div>
                            <div className="mt-5 text-justify">
                                <h4 className="text-md leading-5 font-medium text-gray-900">Instructions</h4>
                                {props.instructions.split('\n').map((instruction, index) => (
                                    <span key={index} className="block break-words mt-2 text-sm">
                                        {instruction}
                                    </span>
                                ))}
                            </div>
                        </div>
                                <div>
                                    <img src={props.imageSrc} alt="Recipe of the Day 1" className="w-full h-96 object-cover mt-10 rounded-lg border-solid border-neutral-600" />
                                </div>
                            </div>
                            <div className="mt-5 sm:mt-6">
                                <button onClick={handleButtonClick} className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-sandybrown text-base font-medium text-white hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 sm:text-sm">
                                    Calculator
                                </button>
                            <div className="mt-5"></div>
                                <button onClick={props.handleCloseModal} className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 sm:text-sm">
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