import React, { useEffect } from 'react';
import krosan1 from '../assets/krosan1.jpg';
import krosan2 from '../assets/krosan2.jpg';
import heart from '../assets/heart.png';
import bookmark from '../assets/bookmark.png';
import RecipePlaceholder from './RecipeBeta';
import LoadMoreButton from './LoadMoreButton';
import croissant from '../assets/krosan1.jpg';
import UserProfileRecipe from './UserProfileRecipe';
import plusSymbol from '../assets/plusSymbol.svg';
import { useState } from 'react';
import axios from 'axios';

const ViewRecipes = ({ name }) => {
	const [recipes, setRecipes] = useState();
	//get the user id from the url
	const url = window.location.href;
	const urlArray = url.split('/');
	const userId = urlArray[urlArray.length - 1];
	//fetch recipes with axios
	useEffect(() => {
		axios.get(`http://localhost:4000/api/user/${userId}/recipes`).then(res => {
			setRecipes(res.data);
			console.log(res.data);
		});
	}, []);

	return (
		<div className='px-6'>
			<div>
				<div className='grid grid-cols-2 gap-x-4 gap-y-4 p-6 md:grid-cols-11'></div>
				<div className='flex'></div>
				{recipes ? (
					recipes.map(recipe => (
						<UserProfileRecipe
							key={recipe.id} // Make sure to provide a unique key for each recipe item
							likes={recipe.likes}
							saves={recipe.saves}
							name={recipe.name}
							author={name}
							image={recipe.image}
						/>
					))
				) : (
					<p>Loading recipes...</p> // Display a loading message while waiting for the response
				)}
			</div>
			<div className='mt-24'>
				<LoadMoreButton />
			</div>
		</div>
	);
};

export default ViewRecipes;
