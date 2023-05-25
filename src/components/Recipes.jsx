import React from 'react';
import RecipePlaceholder from './Recipe_Placeholder';
import krosan1 from '../assets/krosan1.jpg';
import krosan3 from '../assets/krosan3.jpg';
import { useEffect, useState } from 'react';
import axios from 'axios';
const Recipes = () => {
	const [recipes, setRecipes] = useState([]);
	const [users, setUsers] = useState([]);
	useEffect(() => {
		axios.get('http://localhost:4000/api/recipe').then(response => {
			setRecipes(response.data);
		});
		//get all users
		axios.get('http://localhost:4000/api/user').then(response => {
			setUsers(response.data);
		});
	}, []);
	return (
		<div className='mb-8 flex flex-wrap justify-around gap-10 space-x-8'>
			{recipes &&
				users &&
				recipes.map(recipe => (
					<RecipePlaceholder
						key={recipe.id}
						title={recipe.name}
						imageSrc={'http://localhost:4000/images/recipe/' + recipe.image}
						userName={users.find(user => user._id === recipe.author).name}
					/>
				))}
		</div>
	);
};

export default Recipes;
