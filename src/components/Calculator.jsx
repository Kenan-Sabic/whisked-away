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

    {/*Cups to*/}
    {selectedOption &&(
        <p class="selectedGrams">  
           {selectedOption.value === 'cups' && (
      <p>
        <p>{inputValue} cups is same as: </p>
          <p>{convertCupsToGrams().toFixed(2)} g<br /></p>
          <p>{convertCupsToKilograms().toFixed(2)} kg<br /></p>
          <p>{convertCupsToOunces()} oz<br /></p>
          <p>{convertCupsToTeaspoons()} tsp<br /></p>
          <p>{convertCupsToTablespoons()} tbsp<br /></p>
          <p>{convertCupsToFluidOunces()} fl oz<br /></p>
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

            
    
    </div>

    
  );
};

export default Calculator;
