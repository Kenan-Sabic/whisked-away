import React from 'react';
import RecipePlaceholder from './Recipe_Placeholder';
import krosan1 from '../assets/krosan1.jpg';
import krosan3 from '../assets/krosan3.jpg';
import { useEffect, useState } from 'react';
import axios from 'axios';
const Recipes = ({ recipes, users }) => {
	return (
		<div className='mb-8 flex flex-wrap justify-around gap-10 space-x-8'>
			{recipes &&
				users.length > 0 &&
				recipes.map(recipe => (
					<RecipePlaceholder
						recipeId={recipe._id}
						title={recipe.name}
						serves={recipe.serves}
						cookTime={recipe.cookTime}
						instructions={recipe.instructions}
						ingredients={recipe.ingredients}
						imageSrc={'http://localhost:4000/images/recipe/' + recipe.image}
						userName={users.find(user => user._id === recipe.author).name}
					/>
				))}
		</div>
	);
};

export default Recipes;
