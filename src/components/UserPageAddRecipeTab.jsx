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
import AddRecipeTab from './AddRecipeTab';

const UserPageAddRecipe = () => {
	return (
		<div className='px-6'>
			<div>
				<div className='grid grid-cols-2 gap-x-4 gap-y-4 p-6 md:grid-cols-11'>
					<div
						onClick={() => {
							window.location.href = '/user/recipes';
						}}
						className='flex h-14  min-w-[150px] cursor-pointer items-center justify-center rounded-lg bg-neutral-50 text-center font-bold shadow-lg hover:bg-sandybrown hover:text-white md:col-span-3'
					>
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
					<div className='col-span-2 flex  h-14 min-w-[150px] cursor-pointer items-center justify-center rounded-lg bg-neutral-50 text-center font-bold shadow-lg hover:bg-sandybrown hover:text-white md:col-span-3'>
						<h1>Saved Recipes</h1>
					</div>
					<div
						onClick={() => {
							window.location.href = '/user/recipes/add';
						}}
						className='col-span-2 flex  h-14 min-w-[150px] cursor-pointer items-center justify-center rounded-lg bg-neutral-50 bg-sandybrown text-center font-bold shadow-lg hover:text-white md:col-span-2'
					>
						<img src={plusSymbol} className='h-[50%] w-[50%]' />
					</div>
				</div>
				<div className='flex'></div>
				<AddRecipeTab />
			</div>
		</div>
	);
};

export default UserPageAddRecipe;
