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

const UserPageRecipeTab = () => {
	const [recipes, setRecipes] = useState();
	const [users, setUsers] = useState();
	const user = JSON.parse(sessionStorage.getItem('user'));
	const userId = user.id;
	//fetch recipes with axios
	useEffect(() => {
		axios.get(`http://localhost:4000/api/user/${userId}/recipes`).then(res => {
			setRecipes(res.data);
			console.log(res.data);
		});
		// get all users
		axios.get(`http://localhost:4000/api/user`).then(res => {
			setUsers(res.data);
			console.log(res.data);
		});
	}, []);

	return (
		<div className='px-6'>
			<div>
				<div className='grid grid-cols-2 gap-x-4 gap-y-4 p-6 md:grid-cols-11'>
					<div className='flex h-14  min-w-[150px] cursor-pointer items-center justify-center rounded-lg bg-neutral-50 bg-sandybrown text-center font-bold shadow-lg hover:text-white md:col-span-3'>
						<h1>Your Recipes</h1>
					</div>
					<div
						onClick={() => {
							window.location.href = '/user/recipes/liked';
						}}
						className='flex h-14  min-w-[150px] cursor-pointer items-center justify-center rounded-lg bg-neutral-50 text-center font-bold shadow-lg hover:bg-sandybrown hover:text-white md:col-span-3'
					>
						<h1>Your Favorites</h1>
					</div>
					<div
						onClick={() => (window.location.href = '/user/recipes/saved')}
						className='col-span-2 flex  h-14 min-w-[150px] cursor-pointer items-center justify-center rounded-lg bg-neutral-50 text-center font-bold shadow-lg hover:bg-sandybrown hover:text-white md:col-span-3'
					>
						<h1>Saved Recipes</h1>
					</div>
					<div
						onClick={() => {
							window.location.href = '/user/recipes/add';
						}}
						className='col-span-2 flex  h-14 min-w-[150px] cursor-pointer items-center justify-center rounded-lg bg-neutral-50 text-center font-bold shadow-lg hover:bg-sandybrown hover:text-white md:col-span-2'
					>
						<img src={plusSymbol} className='h-[50%] w-[50%]' />
					</div>
				</div>
				<div className='flex'></div>
				{recipes && users ? (
					recipes.map(recipe => (
						<UserProfileRecipe
							key={recipe.id} // Make sure to provide a unique key for each recipe item
							likes={recipe.likes}
							saves={recipe.saves}
							name={recipe.name}
							author={users.find(user => user._id === recipe.author).name}
							image={recipe.image}
							ingredients={recipe.ingredients}
							instructions={recipe.instructions}
							serves={recipe.serves}
							cookTime={recipe.cookTime}
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

export default UserPageRecipeTab;
