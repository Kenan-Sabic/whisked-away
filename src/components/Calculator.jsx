import React, { useState } from 'react';
import './Daily_recipe';

const Calculator = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: 'grams', label: 'Grams' },
    { value: 'ounces', label: 'Ounces' },
    { value: 'cups', label: 'Cups' },
    { value: 'tsp', label: 'Teaspoons'},
    { value: 'tbsp', label: 'Tablespoons'},
    { value: 'flOz', label: 'Fluid Ounces'},
    { value: 'pints', label: 'Pints' },
    { value: 'gals', label: 'Gallons'},
    { value: 'quarts', label: 'Quarts'},
    { value: 'sticks', label: 'Butter Sticks'},
  ];

  const handleButtonClick = () => {
    setDropdownVisible(!dropdownVisible);
  };

  //Conversion from grams to other units
  const convertGramsToKilograms = () => {
    return inputValue * 0.002;
  };

  const convertGramsToOunces = () => {
    return inputValue * 0.025;
  };
  
  const convertGramsToCups = () => {
    return inputValue * 0.004;
  };
  
  const convertGramsToTeaspoons = () => {
    return inputValue * 0.2;
  };
  
  const convertGramsToTablespoons = () => {
    return inputValue * 0.067;
  };
  
  const convertGramsToFluidOunces = () => {
    return inputValue * 0.025;
  };
  
  const convertGramsToPints = () => {
    return inputValue * 0.002;
  };
  
  const convertGramsToGallons = () => {
    return inputValue * 0.00026;
  };
  
  const convertGramsToQuarts = () => {
    return inputValue * 0.00205;
  };
  
  const convertGramsToButterSticks = () => {
    return inputValue * 0.0088;
  };
  


  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setDropdownVisible(false);
    
  };
  
  //Conversion from ounces to other units
  const convertOuncesToGrams = () => {
    return inputValue * 28.2495;
  };

  const convertOuncesToKilograms = () => {
    return inputValue * 0.0282495;
  };

  const convertOuncesToCups = () => {
    return inputValue * 0.225;
  };

  const convertOuncesToTeaspoons = () => {
    return inputValue * 6;
  };

  const convertOuncesToTablespoons = () => {
    return inputValue * 2;
  };

  const convertOuncesToFluidOunces = () => {
    return inputValue * 2;
  };

  const convertOuncesToPints = () => {
    return inputValue * 0.0625;
  };

  const convertOuncesToGallons = () => {
    return inputValue * 0.0078225;
  };

  const convertOuncesToQuarts = () => {
    return inputValue * 0.02225;
  };

  const convertOuncesToButterSticks = () => {
    return inputValue * 0.25;
  };

  //Cups conversion to other units
  const convertCupsToGrams = () => {
    return inputValue * 226.588;
  };

  const convertCupsToKilograms = () => {
    return inputValue * 0.226588;
  };

  const convertCupsToOunces = () => {
    return inputValue * 8;
  };

  const convertCupsToTeaspoons = () => {
    return inputValue * 48;
  };

  const convertCupsToTablespoons = () => {
    return inputValue * 26;
  };

  const convertCupsToFluidOunces = () => {
    return inputValue * 8;
  };

  const convertCupsToPints = () => {
    return inputValue * 0.5;
  };

  const convertCupsToGallons = () => {
    return inputValue * 0.0625;
  };

  const convertCupsToQuarts = () => {
    return inputValue * 0.25;
  };

  const convertCupsToButterSticks = () => {
    return inputValue * 0.5;
  };

//Conversion from teaspoons to other units
const convertTeaspoonsToGrams = () => {
  return inputValue * 4.92892;
};

const convertTeaspoonsToKilograms = () => {
  return inputValue * 0.00492892;
};

const convertTeaspoonsToOunces = () => {
  return inputValue * 0.166667;
};

const convertTeaspoonsToCups = () => {
  return inputValue * 0.0208333;
};

const convertTeaspoonsToTablespoons = () => {
  return inputValue * 0.333333;
};

const convertTeaspoonsToFluidOunces = () => {
  return inputValue * 0.166667;
};

const convertTeaspoonsToPints = () => {
  return inputValue * 0.0104167;
};

const convertTeaspoonsToGallons = () => {
  return inputValue * 0.00130208;
};

const convertTeaspoonsToQuarts = () => {
  return inputValue * 0.00520833;
};

const convertTeaspoonsToButterSticks = () => {
  return inputValue * 0.0416667;
};

//Conversion from tablespoons to other units
const convertTablespoonsToGrams = () => {
  return inputValue * 14.7868;
};

const convertTablespoonsToKilograms = () => {
  return inputValue * 0.0147868;
};

const convertTablespoonsToOunces = () => {
  return inputValue * 0.5;
};

const convertTablespoonsToCups = () => {
  return inputValue * 0.0625;
};

const convertTablespoonsToTeaspoons = () => {
  return inputValue * 3;
};

const convertTablespoonsToFluidOunces = () => {
  return inputValue * 0.5;
};

const convertTablespoonsToPints = () => {
  return inputValue * 0.03125;
};

const convertTablespoonsToGallons = () => {
  return inputValue * 0.00390625;
};

const convertTablespoonsToQuarts = () => {
  return inputValue * 0.015625;
};

const convertTablespoonsToButterSticks = () => {
  return inputValue * 0.125;
};


//Conversion from pints
const convertPintsToGrams = () => {
  return inputValue * 473.176;
};

const convertPintsToKilograms = () => {
  return inputValue * 0.473176;
};

const convertPintsToOunces = () => {
  return inputValue * 16;
};

const convertPintsToCups = () => {
  return inputValue * 2;
};

const convertPintsToTeaspoons = () => {
  return inputValue * 96;
};

const convertPintsToTablespoons = () => {
  return inputValue * 32;
};

const convertPintsToFluidOunces = () => {
  return inputValue * 16;
};

const convertPintsToGallons = () => {
  return inputValue * 0.125;
};

const convertPintsToQuarts = () => {
  return inputValue * 0.5;
};

const convertPintsToButterSticks = () => {
  return inputValue * 4;
};

//Fluid ounces
const convertFluidOuncesToGrams = () => {
  return inputValue * 28.3495;
};

const convertFluidOuncesToKilograms = () => {
  return inputValue * 0.0283495;
};

const convertFluidOuncesToOunces = () => {
  return inputValue * 1;
};

const convertFluidOuncesToCups = () => {
  return inputValue * 0.125;
};

const convertFluidOuncesToTeaspoons = () => {
  return inputValue * 6;
};

const convertFluidOuncesToTablespoons = () => {
  return inputValue * 2;
};

const convertFluidOuncesToPints = () => {
  return inputValue * 0.0625;
};

const convertFluidOuncesToGallons = () => {
  return inputValue * 0.0078125;
};

const convertFluidOuncesToQuarts = () => {
  return inputValue * 0.03125;
};

const convertFluidOuncesToButterSticks = () => {
  return inputValue * 0.25;
};


//Gallons
const convertGallonsToGrams = () => {
  return inputValue * 3785.41;
};

const convertGallonsToKilograms = () => {
  return inputValue * 3.78541;
};

const convertGallonsToOunces = () => {
  return inputValue * 128;
};

const convertGallonsToCups = () => {
  return inputValue * 16;
};

const convertGallonsToTeaspoons = () => {
  return inputValue * 768;
};

const convertGallonsToTablespoons = () => {
  return inputValue * 256;
};

const convertGallonsToFluidOunces = () => {
  return inputValue * 128;
};

const convertGallonsToPints = () => {
  return inputValue * 8;
};

const convertGallonsToQuarts = () => {
  return inputValue * 4;
};

const convertGallonsToButterSticks = () => {
  return inputValue * 32;
};


//Butter sticks
const convertButterSticksToGrams = () => {
  return inputValue * 113.398;
};

const convertButterSticksToKilograms = () => {
  return inputValue * 0.113398;
};

const convertButterSticksToOunces = () => {
  return inputValue * 4;
};

const convertButterSticksToCups = () => {
  return inputValue * 0.5;
};

const convertButterSticksToTeaspoons = () => {
  return inputValue * 24;
};

const convertButterSticksToTablespoons = () => {
  return inputValue * 8;
};

const convertButterSticksToFluidOunces = () => {
  return inputValue * 4;
};

const convertButterSticksToPints = () => {
  return inputValue * 0.25;
};

const convertButterSticksToGallons = () => {
  return inputValue * 0.03125;
};

const convertButterSticksToQuarts = () => {
  return inputValue * 0.125;
};


//Quarts
const convertQuartsToGrams = () => {
  return inputValue * 946.353;
};

const convertQuartsToKilograms = () => {
  return inputValue * 0.946353;
};

const convertQuartsToOunces = () => {
  return inputValue * 32;
};

const convertQuartsToCups = () => {
  return inputValue * 4;
};

const convertQuartsToTeaspoons = () => {
  return inputValue * 192;
};

const convertQuartsToTablespoons = () => {
  return inputValue * 64;
};

const convertQuartsToFluidOunces = () => {
  return inputValue * 32;
};

const convertQuartsToPints = () => {
  return inputValue * 2;
};

const convertQuartsToGallons = () => {
  return inputValue * 0.25;
};

const convertQuartsToButterSticks = () => {
  return inputValue * 8;
};


const [selectedValue, setSelectedValue] = useState('');

  return (

    <div>
      <div class="header_div">
        <h2 class="header_heading">Calculator</h2>
      </div>
        
      
      <input type="number" value={inputValue} onChange={handleInput} class="input_part" placeholder='Enter number' /> <br />
      <br />
      <button onClick={handleButtonClick} class="optionBtn">Choose option</button>
      {dropdownVisible && (
        <div class="optionsPart">
          <h2>Select an option:</h2>
          <ul>
            {options.map((option) => (
              <li key={option.value} onClick={() => handleOptionSelect(option)}>
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
      {selectedOption && (
        <p class="selected">You have selected: {selectedOption.label}</p>  
        
      )}

    {/*Grams to*/}
    {selectedOption && (
  <p className="selectedGrams">
    {selectedOption.value === 'grams' && (
      <p>
        <p>{inputValue} grams is same as: </p>
        <p>{convertGramsToKilograms().toFixed(2)} kg<br /></p>
        <p>{convertGramsToOunces().toFixed(2)} oz<br /></p>
        <p>{convertGramsToCups().toFixed(2)} c<br /></p>
        <p>{convertGramsToTeaspoons().toFixed(2)} tsp<br /></p>
        <p>{convertGramsToTablespoons().toFixed(2)} tbsp<br /></p>
        <p>{convertGramsToFluidOunces().toFixed(2)} fl oz<br /></p>
        <p>{convertGramsToPints().toFixed(2)} pints<br /></p>
        <p>{convertGramsToGallons().toFixed(2)} gal<br /></p>
        <p>{convertGramsToQuarts().toFixed(2)} quarts<br /></p>
        <p>{convertGramsToButterSticks().toFixed(2)} butter sticks<br /></p>
            <br />
            <p>kg - kilograms<br /></p>
            c - cups <br />
            oz - ounces <br />
            tsp - teaspoons <br />
            tbsp - tablespoons <br />
            fl oz - fluid ounces <br />
            gal - gallons <br /> 
      </p>
      
    )}
  </p>
)}


    {/*Ounces to*/}
    {selectedOption &&(
        <p class="selectedGrams">  
           {selectedOption.value === 'ounces' && (
      <p>
        <p>{inputValue} ounces is same as: </p>
          <p>{convertOuncesToGrams().toFixed(2)} g<br /></p>
          <p>{convertOuncesToKilograms().toFixed(2)} kg<br /></p>
          <p>{convertOuncesToCups().toFixed(2)} c<br /></p>
          <p>{convertOuncesToTeaspoons().toFixed(2)} tsp<br /></p>
          <p>{convertOuncesToTablespoons().toFixed(2)} tbsp<br /></p>
          <p>{convertOuncesToFluidOunces().toFixed(2)} fl oz<br /></p>
          <p>{convertOuncesToPints().toFixed(2)} pints<br /></p>
          <p>{convertOuncesToGallons().toFixed(2)} gal<br /></p>
          <p>{convertOuncesToQuarts().toFixed(2)} quarts<br /></p>
          <p>{convertOuncesToButterSticks().toFixed(2)} butter sticks<br /></p>
          <br />
          <p>g - grams<br /></p>
          <p>kg - kilograms<br /></p>
          <p>c - cups<br /></p>
          <p>tsp - teaspoons<br /></p>
          <p>tbsp - tablespoons<br /></p>
          <p>fl oz - fluid ounces<br /></p>
          <p>gal - gallons<br /></p>
      </p>
      
    )}   
        </p>
      )}

    {/*Tablespoons to*/}
    {selectedOption &&(
        <p class="selectedGrams">  
           {selectedOption.value === 'tbsp' && (
        <p>
        <p>{inputValue} tablespoons is the same as:</p>
        <p>{convertTablespoonsToGrams().toFixed(2)} g<br /></p>
        <p>{convertTablespoonsToKilograms().toFixed(2)} kg<br /></p>
        <p>{convertTablespoonsToOunces().toFixed(2)} oz<br /></p>
        <p>{convertTablespoonsToTeaspoons().toFixed(2)} tsp<br /></p>
        <p>{convertTablespoonsToCups().toFixed(2)} cups<br /></p>
        <p>{convertTablespoonsToFluidOunces().toFixed(2)} fl oz<br /></p>
        <p>{convertTablespoonsToPints().toFixed(2)} pints<br /></p>
        <p>{convertTablespoonsToGallons().toFixed(2)} gal<br /></p>
        <p>{convertTablespoonsToQuarts().toFixed(2)} quarts<br /></p>
        <p>{convertTablespoonsToButterSticks().toFixed(2)} butter sticks<br /></p>
        <br />
        <p>g - grams<br /></p>
        <p>kg - kilograms<br /></p>
        <p>oz - ounces<br /></p>
        <p>tsp - teaspoons<br /></p>
        <p>cups - cups<br /></p>
        <p>fl oz - fluid ounces<br /></p>
        <p>gal - gallons<br /></p>
      </p>
     
    )}   
        </p>
      )}

    {/*Cups to*/}        
    {selectedOption &&(
        <p class="selectedGrams">  
           {selectedOption.value === 'cups' && (
      <p>
        <p>{inputValue} cups is same as: </p>
          <p>{convertCupsToGrams().toFixed(2)} g<br /></p>
          <p>{convertCupsToKilograms().toFixed(2)} kg<br /></p>
          <p>{convertCupsToOunces().toFixed(2)} oz<br /></p>
          <p>{convertCupsToTeaspoons().toFixed(2)} tsp<br /></p>
          <p>{convertCupsToTablespoons().toFixed(2)} tbsp<br /></p>
          <p>{convertCupsToFluidOunces().toFixed(2)} fl oz<br /></p>
          <p>{convertCupsToPints().toFixed(2)} pints<br /></p>
          <p>{convertCupsToGallons().toFixed(2)} gal<br /></p>
          <p>{convertCupsToQuarts().toFixed(2)} quarts<br /></p>
          <p>{convertCupsToButterSticks().toFixed(2)} butter sticks<br /></p>
          <br />
          <p>g - grams<br /></p>
          <p>kg - kilograms<br /></p>
          <p>oz - ounces<br /></p>
          <p>tsp - teaspoons<br /></p>
          <p>tbsp - tablespoons<br /></p>
          <p>fl oz - fluid ounces<br /></p>
          <p>gal - gallons<br /></p>
      </p>
      
    )}   
        </p>
      )}                  

    {/*Teaspoons to*/}
    {selectedOption &&(
        <p class="selectedGrams">  
           {selectedOption.value === 'tsp' && (
          <p>
          <p>{inputValue} teaspoons is the same as:</p>
          <p>{convertTeaspoonsToGrams().toFixed(2)} g<br /></p>
          <p>{convertTeaspoonsToKilograms().toFixed(2)} kg<br /></p>
          <p>{convertTeaspoonsToOunces().toFixed(2)} oz<br /></p>
          <p>{convertTeaspoonsToTablespoons().toFixed(2)} tbsp<br /></p>
          <p>{convertTeaspoonsToCups().toFixed(2)} cups<br /></p>
          <p>{convertTeaspoonsToFluidOunces().toFixed(2)} fl oz<br /></p>
          <p>{convertTeaspoonsToPints().toFixed(2)} pints<br /></p>
          <p>{convertTeaspoonsToGallons().toFixed(2)} gal<br /></p>
          <p>{convertTeaspoonsToQuarts().toFixed(2)} quarts<br /></p>
          <p>{convertTeaspoonsToButterSticks().toFixed(2)} butter sticks<br /></p>
          <br />
          <p>g - grams<br /></p>
          <p>kg - kilograms<br /></p>
          <p>oz - ounces<br /></p>
          <p>tbsp - tablespoons<br /></p>
          <p>cups - cups<br /></p>
          <p>fl oz - fluid ounces<br /></p>
          <p>gal - gallons<br /></p>
        </p>
    )}   
        </p>
      )} 

      {/*Fluid Ounces to*/}
    {selectedOption &&(
        <p class="selectedGrams">  
           {selectedOption.value === 'flOz' && (
          <p>
          <p>{inputValue} fluid ounces is the same as:</p>
          <p>{convertFluidOuncesToGrams().toFixed(2)} g<br /></p>
          <p>{convertFluidOuncesToKilograms().toFixed(2)} kg<br /></p>
          <p>{convertFluidOuncesToOunces().toFixed(2)} oz<br /></p>
          <p>{convertFluidOuncesToTablespoons().toFixed(2)} tbsp<br /></p>
          <p>{convertFluidOuncesToCups().toFixed(2)} cups<br /></p>
          <p>{convertFluidOuncesToTeaspoons().toFixed(2)} tsp<br /></p>
          <p>{convertFluidOuncesToPints().toFixed(2)} pints<br /></p>
          <p>{convertFluidOuncesToGallons().toFixed(2)} gal<br /></p>
          <p>{convertFluidOuncesToQuarts().toFixed(2)} quarts<br /></p>
          <p>{convertFluidOuncesToButterSticks().toFixed(2)} butter sticks<br /></p>
          <br />
          <p>g - grams<br /></p>
          <p>kg - kilograms<br /></p>
          <p>oz - ounces<br /></p>
          <p>tbsp - tablespoons<br /></p>
          <p>tsp - teaspoons<br /></p>
          <p>gal - gallons<br /></p>
        </p>
    )}   
        </p>
      )}       
           
  {/*Pints to*/}
  {selectedOption &&(
        <p class="selectedGrams">  
           {selectedOption.value === 'pints' && (
           <p>
           <p>{inputValue} pints is the same as:</p>
           <p>{convertPintsToGrams().toFixed(2)} g<br /></p>
           <p>{convertPintsToKilograms().toFixed(2)} kg<br /></p>
           <p>{convertPintsToOunces().toFixed(2)} oz<br /></p>
           <p>{convertPintsToTablespoons().toFixed(2)} tbsp<br /></p>
           <p>{convertPintsToCups().toFixed(2)} cups<br /></p>
           <p>{convertPintsToTeaspoons().toFixed(2)} tsp<br /></p>
           <p>{convertPintsToFluidOunces().toFixed(2)} fl oz<br /></p>
           <p>{convertPintsToGallons().toFixed(2)} gal<br /></p>
           <p>{convertPintsToQuarts().toFixed(2)} quarts<br /></p>
           <p>{convertPintsToButterSticks().toFixed(2)} butter sticks<br /></p>
           <br />
           <p>g - grams<br /></p>
           <p>kg - kilograms<br /></p>
           <p>oz - ounces<br /></p>
           <p>tbsp - tablespoons<br /></p>
           <p>tsp - teaspoons<br /></p>
           <p>fl oz - fluid ounces<br /></p>
           <p>gal - gallons<br /></p>
         </p>
         
    )}   
        </p>
      )}  

    {/*Quarts to*/}
  {selectedOption &&(
        <p class="selectedGrams">  
           {selectedOption.value === 'quarts' && (
           <p>
           <p>{inputValue} quarts is the same as:</p>
           <p>{convertQuartsToGrams().toFixed(2)} g<br /></p>
           <p>{convertQuartsToKilograms().toFixed(2)} kg<br /></p>
           <p>{convertQuartsToOunces().toFixed(2)} oz<br /></p>
           <p>{convertQuartsToTablespoons().toFixed(2)} tbsp<br /></p>
           <p>{convertQuartsToCups().toFixed(2)} cups<br /></p>
           <p>{convertQuartsToTeaspoons().toFixed(2)} tsp<br /></p>
           <p>{convertQuartsToFluidOunces().toFixed(2)} fl oz<br /></p>
           <p>{convertQuartsToPints().toFixed(2)} pints<br /></p>
           <p>{convertQuartsToGallons().toFixed(2)} gal<br /></p>
           <p>{convertQuartsToButterSticks().toFixed(2)} butter sticks<br /></p>
           <br />
           <p>g - grams<br /></p>
           <p>kg - kilograms<br /></p>
           <p>oz - ounces<br /></p>
           <p>tbsp - tablespoons<br /></p>
           <p>tsp - teaspoons<br /></p>
           <p>fl oz - fluid ounces<br /></p>
           <p>gal - gallons<br /></p>
         </p>
         
         
    )}   
        </p>
      )}

    {/*Gallons to*/}
  {selectedOption &&(
        <p class="selectedGrams">  
           {selectedOption.value === 'gals' && (
           <p>
           <p>{inputValue} gallons is the same as:</p>
           <p>{convertGallonsToGrams().toFixed(2)} g<br /></p>
           <p>{convertGallonsToKilograms().toFixed(2)} kg<br /></p>
           <p>{convertGallonsToOunces().toFixed(2)} oz<br /></p>
           <p>{convertGallonsToTablespoons()} tbsp<br /></p>
           <p>{convertGallonsToCups().toFixed(2)} cups<br /></p>
           <p>{convertGallonsToTeaspoons().toFixed(2)} tsp<br /></p>
           <p>{convertGallonsToFluidOunces().toFixed(2)} fl oz<br /></p>
           <p>{convertGallonsToPints().toFixed(2)} pints<br /></p>
           <p>{convertGallonsToQuarts().toFixed(2)} quarts<br /></p>
           <p>{convertGallonsToButterSticks().toFixed(2)} butter sticks<br /></p>
           <br />
           <p>g - grams<br /></p>
           <p>kg - kilograms<br /></p>
           <p>oz - ounces<br /></p>
           <p>tbsp - tablespoons<br /></p>
           <p>tsp - teaspoons<br /></p>
           <p>fl oz - fluid ounces<br /></p>
         </p>
         
         
    )}   
        </p>
      )}

    {/*Butter Sticks to*/}
  {selectedOption &&(
        <p class="selectedGrams">  
           {selectedOption.value === 'sticks' && (
           <p>
           <p>{inputValue} butter sticks is the same as:</p>
           <p>{convertButterSticksToGrams().toFixed(2)} g<br /></p>
           <p>{convertButterSticksToKilograms().toFixed(2)} kg<br /></p>
           <p>{convertButterSticksToOunces().toFixed(2)} oz<br /></p>
           <p>{convertButterSticksToTablespoons().toFixed(2)} tbsp<br /></p>
           <p>{convertButterSticksToCups().toFixed(2)} cups<br /></p>
           <p>{convertButterSticksToTeaspoons().toFixed(2)} tsp<br /></p>
           <p>{convertButterSticksToFluidOunces().toFixed(2)} fl oz<br /></p>
           <p>{convertButterSticksToPints().toFixed(2)} pints<br /></p>
           <p>{convertButterSticksToQuarts().toFixed(2)} quarts<br /></p>
           <p>{convertButterSticksToGallons().toFixed(2)} gals<br /></p>
           <br />
           <p>g - grams<br /></p>
           <p>kg - kilograms<br /></p>
           <p>oz - ounces<br /></p>
           <p>tbsp - tablespoons<br /></p>
           <p>tsp - teaspoons<br /></p>
           <p>fl oz - fluid ounces<br /></p>
           <p>gals - gallons <br /></p>
         </p>
    )}   
        </p>
      )}                          
    
    </div>

    
  );
};

export default Calculator;
