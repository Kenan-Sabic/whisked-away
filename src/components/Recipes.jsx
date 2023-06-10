import React from 'react';
import RecipePlaceholder from './Recipe_Placeholder';
import krosan1 from '../assets/krosan1.jpg';
import krosan3 from '../assets/krosan3.jpg';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DailyRecipeModal from './DailyRecipeModalPlaceholder';
const Recipes = ({ recipes, users }) => {
	const [showModal, setShowModal] = useState('');
	const handleShowModal = id => {
		setShowModal(id);
	};

	const handleCloseModal = () => {
		setShowModal('');
	};

	return (
		<div className='mx-10 mb-8 flex flex-wrap justify-around gap-10 space-x-8'>
			{recipes &&
				users.length > 0 &&
				recipes.map(recipe => (
					<>
						{showModal === recipe._id && (
							<DailyRecipeModal
								title={recipe.name}
								serves={recipe.serves}
								ingredients={recipe.ingredients.join('\n')}
								instructions={recipe.instructions}
								cookTime={recipe.cookTime}
								image={recipe.image}
								imageSrc={'http://localhost:4000/images/recipe/' + recipe.image}
								userName={users.find(user => user._id === recipe.author)}
								handleCloseModal={handleCloseModal}
							></DailyRecipeModal>
						)}
						<RecipePlaceholder
							recipeId={recipe._id}
							title={recipe.name}
							serves={recipe.serves}
							cookTime={recipe.cookTime}
							instructions={recipe.instructions}
							ingredients={recipe.ingredients}
							imageSrc={'http://localhost:4000/images/recipe/' + recipe.image}
							userName={users.find(user => user._id === recipe.author)}
							handleShowModal={handleShowModal}
						/>
					</>
				))}
		</div>
	);
};

export default Recipes;
