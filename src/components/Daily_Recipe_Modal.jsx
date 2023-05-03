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
