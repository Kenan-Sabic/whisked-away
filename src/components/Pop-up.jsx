import React, { useState } from "react";

function Modal() {
  const [showModal, setShowModal] = useState(false);


  return (
    <div>
      <div className="fixed z-10 inset-0 overflow-y-auto mt-10">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div>
            
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Chicken and Vegetable Stir Fry</h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">Serves:4</p>
                <p className="text-sm text-gray-500">Prep Time: 15 minutes</p>
                <p className="text-sm text-gray-500">Cook Time: 20 minutes</p>
              </div>
              <div className="mt-5">
                <h4 className="text-sm leading-5 font-medium text-gray-900">Ingredients</h4>
                <ul className="mt-2">
                  <li className="text-sm text-gray-500">1 pound boneless, skinless chicken breasts, cut into bite-sized pieces</li>
                  <li className="text-sm text-gray-500">1 red bell pepper, seeded and thinly sliced</li>
                  <li className="text-sm text-gray-500">1 green bell pepper, seeded and thinly sliced</li>
                  <li className="text-sm text-gray-500">1 onion, thinly sliced</li>
                  <li className="text-sm text-gray-500">2 garlic cloves, minced</li>
                  <li className="text-sm text-gray-500">1/4 cup soy sauce</li>
                  <li className="text-sm text-gray-500">1 tablespoon cornstarch</li>
                  <li className="text-sm text-gray-500">2 teaspoons sesame oil</li>
                  <li className="text-sm text-gray-500">2 tablespoons vegetable oil</li>
                  <li className="text-sm text-gray-500">1 teaspoon grated fresh ginger</li>
                  <li className="text-sm text-gray-500">2 green onions, thinly sliced</li>
                </ul>
              </div>
              <div className="mt-5">
              <h4 className="text-sm leading-5 font-medium text-gray-900">Instructions</h4>
                <ol className="mt-2">
                  <li className="text-sm text-gray-500">In a small bowl, whisk together soy sauce, cornstarch, and sesame oil. Set aside.</li>
                  <li className="text-sm text-gray-500">In a large skillet or wok, heat vegetable oil over high heat. Add chicken and cook until browned on all sides, about 5 minutes. Remove chicken from skillet and set aside.</li>
                  <li className="text-sm text-gray-500">Add peppers and onion to the skillet and cook until tender, about 5 minutes.</li>
                  <li className="text-sm text-gray-500">Add garlic and ginger and cook until fragrant, about 30 seconds.</li>
                  <li className="text-sm text-gray-500">Return chicken to skillet and pour in soy sauce mixture. Cook, stirring constantly, until sauce has thickened and chicken is cooked through, about 5 minutes.</li>
                  <li className="text-sm text-gray-500">Garnish with green onions and serve hot.</li>
                </ol>
              </div>
            </div>
          </div>
        <div className="mt-5 sm:mt-6">
        </div>
      </div>
      </div>
    </div>
    </div>
  );
}

export default Modal;
