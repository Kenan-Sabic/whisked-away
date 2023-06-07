import React, { useState, useRef } from 'react';
import heart from '../assets/heart.png';
import bookmark from '../assets/bookmark.png';
import axios from 'axios';
import html2pdf from 'html2pdf.js';


const RecipePlaceholder = ({ title, userName, imageSrc, serves, recipeId, prepTime, cookTime, instructions, ingredients }) => {
  const user = JSON.parse(sessionStorage.getItem('user'));
  const token = sessionStorage.getItem('token');

  const saveOnClick = () => {
    alert('You saved the recipe!');
  };

  const handleLike = async () => {
    const response = await axios.post(`http://localhost:4000/api/user/${user.id}/likedRecipes/${recipeId}`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    alert(response.data.message);
  };

  const handleSave = async () => {
    const response = await axios.post(`http://localhost:4000/api/user/${user.id}/savedRecipes/${recipeId}`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    alert(response.data.message);
  };

  const saving = () => {
	console.log('Saved item')
  }

  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const divRef = useRef(null);

  const handleDownloadPDF = async () => {
	const element = divRef.current;

    // Wait for the content to render
    await delay(500); // Adjust the delay as needed

    // Configure the PDF options
    const options = {
      filename: 'div_as_pdf.pdf',
      margin: [10, 10, 10, 10], // Specify margins (top, left, bottom, right)
      image: { type: 'jpeg', quality: 0.98 }, // Set image type and quality
      html2canvas: { scale: 2 }, // Adjust scale for better quality
      jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' }, // Set PDF unit, format, and orientation
    };

    // Generate PDF from the div element
    html2pdf().set(options).from(element).save();
  };

   const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  return (
    <div className='card mt-8' onClick={handleClick}>
      <div className={`flip-card ${isFlipped ? 'flip' : ''}`}>
        <div className='front h-96 w-80 transform rounded-xl bg-gray-200 shadow-xl shadow-neutral-800 transition duration-300 ease-in-out hover:scale-110'>
          <img src={imageSrc} className='h-[190px] w-full rounded-2xl object-cover' alt='Recipe' />
          <h2 className='mt-2 cursor-pointer text-center text-3xl font-normal'>{title}</h2>
          <h3 className='text-center text-lg font-light'>
            Posted by: <a className='cursor-pointer underline'>{userName}</a>
          </h3>
		  <div className='flex justify-center items-center mt-4'>
              <button className='bg-neutral-400 hover:text-black text-white font-bold py-2 px-4 rounded'>See the recipe</button>
          </div>
          <div className='flex justify-between'>
            <div>
              <img
                src={bookmark}
                onClick={handleSave}
                className='ml-4 mt-8 max-h-12 w-10 cursor-pointer'
                alt='Bookmark'
              />
            </div>
            <div>
              <img
                src={heart}
                onClick={handleLike}
                className='ml-65 w-43 h-43 mr-2 mt-6 cursor-pointer'
                alt='Heart'
              />
            </div>
          </div>
		  
        </div>
        <div className='back h-96 w-80 rounded-xl bg-gray-200 shadow-xl shadow-neutral-800' ref={divRef}>
		<div className="h-96 overflow-auto px-4 py-4" >
          <h2 className='text-xl font-extrabold font-medium leading-6 text-gray-900'>{title}</h2>
            <div className="mt-2 text-center sm:text-left" >
              <p className="text-sm text-gray-800">
                Serves: {serves}
              </p>
              <p className="text-sm text-gray-800">
                Prep Time: {prepTime}
              </p>
              <p className="text-sm text-gray-800">
                Cook Time: {cookTime}
              </p>
            </div>
            {ingredients && typeof ingredients === 'string' && (
              <div className="mt-5 text-center sm:text-justify">
                <h4 className="text-md font-extrabold font-medium leading-5 text-gray-900">
                  Ingredients
                </h4>
                {ingredients.split('\n').map((ingredient, index) => (
                  <span key={index} className="mt-2 block break-words text-sm">
                    {ingredient}
                  </span>
                ))}
              </div>
            )}
			{instructions && typeof instructions === 'string' && (
			<div className="mt-5 text-center sm:text-justify">
	  			<h4 className="text-md font-extrabold font-medium leading-5 text-gray-900">
					Instructions
	  			</h4>
	  		{instructions.split('\n').map((instruction, index) => (
				<span key={index} className="mt-2 block break-words text-sm">
		  			{instruction}
				</span>
	  		))}
			</div>
  			)}
			<div className='flex justify-center items-center mt-4'>
              <button onClick={handleDownloadPDF} className='bg-neutral-400 hover:text-black text-white font-bold py-2 px-4 rounded'>Download</button>
          </div>
          </div>
		  
        </div>
      </div>
    </div>
  );
};

export default RecipePlaceholder;


