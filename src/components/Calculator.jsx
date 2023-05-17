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

  const convertGramsToKilograms = () => {
    return inputValue * 0.001;
  };

  //US Cups to conversion
  const convertUSCupsToMetricCups = () => {
    return (inputValue * 0.95).toFixed(2);
  };

  const convertCupsToTablespoons = () => {
    return (inputValue * 16);
  }

  const convertCupsToTeaspoons = () => {
    return (inputValue * 48);
  }



  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setDropdownVisible(false);
    
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
      {selectedOption &&(
        <p class="selectedGrams">  
            {selectedOption.value === 'grams' ? (
            <p>{inputValue} grams = {convertGramsToKilograms()} kg<br />
                {inputValue} grams = {convertGramsToKilograms()} kg<br />
            </p>
            
            ) : (<p class="hiddenPart"></p>)}     
        </p>
      )}

    {/*Cups to tablespoons, teaspoons*/}
    {selectedOption &&(
        <p class="selectedCups">  
            {selectedOption.value === 'cups' ? (
            <p>{inputValue} c = {convertCupsToTeaspoons()} tsp<br />
               {inputValue} c = {convertCupsToTablespoons()} tbsp<br /> 
                <br/>
                c - cups <br />
                tsp - teaspoons <br />
                tbsp - tablespoons <br />
            </p>
            
            ) : (<p class="hiddenPart"></p>)}     
        </p>
      )}


            
    
    </div>

    
  );
};

export default Calculator;
