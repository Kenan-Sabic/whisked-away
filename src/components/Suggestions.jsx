import React, { useEffect, useState } from 'react';
import krosan1 from '../assets/krosan1.jpg';
import RecipePlaceholder from './Recipe_Placeholder';
import axios from 'axios';
import DailyRecipeModal from './DailyRecipeModalPlaceholder';
const Suggestions = () => {
	const [recipes, setRecipes] = useState([]);
	const [users, setUsers] = useState([]);
	const [showModal, setShowModal] = useState(false);
	useEffect(() => {
		const getRecipes = async () => {
			await axios.get('http://localhost:4000/api/recipe/').then(res => {
				setRecipes(res.data);
			});
		};
		const getUsers = async () => {
			await axios.get('http://localhost:4000/api/user/').then(res => {
				setUsers(res.data);
			});
		};
		getUsers();
		getRecipes();
	}, []);

	const handleCloseModal = () => {
		setShowModal(false);
	};
	const handleHideModal = () => {
		setShowModal(false);
	};
	const handleShowModal = id => {
		setShowModal(id);
	};

	return (
		<div className='max-w-[100vw]'>
			<div className='filters ml-11 mt-8 flex flex-col flex-wrap items-center justify-center text-4xl md:flex-row'>
				<p className='-ml-16  rounded-lg px-2 py-2  font-extrabold text-neutral-700'>YOU WILL LOVE THESE</p>
			</div>

			<div className='daily-line mx-0 my-auto -mt-0 ml-2 h-0.5 w-[95%] justify-center bg-neutral-700 md:ml-8  '></div>
			<div className='ml-24 mr-8 flex flex-wrap justify-between md:ml-8 md:mr-12 md:space-x-8'>
				{recipes &&
					users.length > 0 &&
					recipes.slice(0, 4).map(recipe => (
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
		</div>
	);
};

export default Suggestions;
