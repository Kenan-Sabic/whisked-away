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
    return inputValue * 0.001;
  };

  const convertGramsToOunces = () => {
    return inputValue * 0.035;
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
    return inputValue * 0.035;
  };
  
  const convertGramsToPints = () => {
    return inputValue * 0.002;
  };
  
  const convertGramsToGallons = () => {
    return inputValue * 0.00026;
  };
  
  const convertGramsToQuarts = () => {
    return inputValue * 0.00105;
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
  return inputValue * 28.3495;
};

const convertOuncesToKilograms = () => {
  return inputValue * 0.0283495;
};

const convertOuncesToCups = () => {
  return inputValue * 0.125;
};

const convertOuncesToTeaspoons = () => {
  return inputValue * 6;
};

const convertOuncesToTablespoons = () => {
  return inputValue * 2;
};

const convertOuncesToFluidOunces = () => {
  return inputValue * 1;
};

const convertOuncesToPints = () => {
  return inputValue * 0.0625;
};

const convertOuncesToGallons = () => {
  return inputValue * 0.0078125;
};

const convertOuncesToQuarts = () => {
  return inputValue * 0.03125;
};

const convertOuncesToButterSticks = () => {
  return inputValue * 0.25;
};


const [selectedValue, setSelectedValue] = useState('');

  return (

    <div>
      <div class="header_div">
        <h1 class="header_heading">Calculator</h1>
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
        <p>{convertGramsToKilograms().toFixed(3)} kg<br /></p>
        <p>{convertGramsToOunces().toFixed(3)} oz<br /></p>
        <p>{convertGramsToCups().toFixed(3)} c<br /></p>
        <p>{convertGramsToTeaspoons().toFixed(3)} tsp<br /></p>
        <p>{convertGramsToTablespoons().toFixed(3)} tbsp<br /></p>
        <p>{convertGramsToFluidOunces().toFixed(3)} fl oz<br /></p>
        <p>{convertGramsToPints().toFixed(3)} pints<br /></p>
        <p>{convertGramsToGallons().toFixed(3)} gal<br /></p>
        <p>{convertGramsToQuarts().toFixed(3)} quarts<br /></p>
        <p>{convertGramsToButterSticks().toFixed(3)} butter sticks<br /></p>
            <br />
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


    {/*Cups to*/}
    {selectedOption &&(
        <p class="selectedCups">  
           {selectedOption.value === 'ounces' && (
      <p>
        <p>{inputValue} ounces is same as: </p>
          <p>{convertOuncesToGrams().toFixed(3)} grams<br /></p>
          <p>{convertOuncesToKilograms().toFixed(3)} kg<br /></p>
          <p>{convertOuncesToCups().toFixed(3)} c<br /></p>
          <p>{convertOuncesToTeaspoons().toFixed(3)} tsp<br /></p>
          <p>{convertOuncesToTablespoons().toFixed(3)} tbsp<br /></p>
          <p>{convertOuncesToFluidOunces().toFixed(3)} fl oz<br /></p>
          <p>{convertOuncesToPints().toFixed(3)} pints<br /></p>
          <p>{convertOuncesToGallons().toFixed(3)} gal<br /></p>
          <p>{convertOuncesToQuarts().toFixed(3)} quarts<br /></p>
          <p>{convertOuncesToButterSticks().toFixed(3)} butter sticks<br /></p>
          <br />
          <p>c - cups<br /></p>
          <p>tsp - teaspoons<br /></p>
          <p>tbsp - tablespoons<br /></p>
          <p>fl oz - fluid ounces<br /></p>
          <p>gal - gallons<br /></p>
      </p>
      
    )}   
        </p>
      )}


            
    
    </div>

    
  );
};

export default Calculator;
