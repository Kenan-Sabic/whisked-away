import React from 'react';
import heart from '../assets/heart.png';
import bookmark from '../assets/bookmark.png';
import html2pdf from 'html2pdf.js';

const RecipePlaceholder = ({ title, userName, imageSrc }) => {
	const likeOnClick = () => {
		alert('You liked the recipe!');
	};

	const saveOnClick = () => {
		alert('You saved the recipe!');
	};

	return (
		<div className='ml-5 mt-10 h-96 w-80 transform rounded-xl bg-gray-200 shadow-xl shadow-neutral-800 transition duration-300 ease-in-out hover:scale-110'>
			<img id='recipe-image' src={imageSrc} className='h-[190px] w-full rounded-2xl object-cover'></img>
			<h2 className='mt-2 cursor-pointer text-center text-3xl font-normal'>{title}</h2>
			<h3 className='text-center text-lg font-light'>
				Posted by: <a className='cursor-pointer underline'>{userName}</a>
			</h3>
			<div className='flex justify-between'>
				<div>
					<img src={bookmark} className='ml-4 mt-8 max-h-12 w-10 cursor-pointer' onClick={saveOnClick}></img>
				</div>
				<div>
					<img src={heart} className='ml-65 w-43 h-43 mr-2 mt-6 cursor-pointer' onClick={likeOnClick}></img>
				</div>
			</div>
		</div>
	);
};

export default RecipePlaceholder;
