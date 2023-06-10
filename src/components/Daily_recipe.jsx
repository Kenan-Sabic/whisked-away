import React from 'react';
import ReactDOM from 'react-dom';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import FixedButton from './Fixed_Button';
import Calculator from './Calculator';
import DailyRecipeModal from './DailyRecipeModalPlaceholder';

import krosan1 from '../assets/krosan1.jpg';
import krosan2 from '../assets/krosan2.jpg';
import krosan3 from '../assets/krosan3.jpg';
import SliderPlaceholder from './SliderPlaceholder';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Daily_Recipe = () => {
	const [dailyRecipe, setDailyRecipe] = useState({});
	const [recipes, setRecipes] = useState([]);
	const [ingredients, setIngredients] = useState('');
	const [tags, setTags] = useState('');
	useEffect(() => {
		const getRecipes = async () => {
			await axios.get('http://localhost:4000/api/recipe/646f9ab6fbb55f8455b0c3d4').then(res => {
				setDailyRecipe(res.data);
				res.data.ingredients.forEach(ingredient => {
					setIngredients(ingredients + ingredient + ', ');
				});
			});
		};
		getRecipes();
	}, []);

	const [showModal, setShowModal] = React.useState(false);

	const handleOpenModal = () => {
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	const handleHideModal = () => {
		setShowModal(false);
	};

	const handleToken = () => {
		if (!token) {
			window.location.href = '/login';
		} else {
			window.location.href = '/user/recipes/add';
		}
	};
	const token = sessionStorage.getItem('token');

	const handleClick = () => {
		generatePDF();
	};

	const recipeTitle = dailyRecipe.name;
	const recipeServes = dailyRecipe.serves;
	const recipeCookTime = dailyRecipe.cookTime;
	const recipePrepTime = dailyRecipe.prepTime;
	const recipeIngredients = ingredients;
	const recipeInstructions = dailyRecipe.instructions;
	const generatePDF = () => {
		const doc = new jsPDF();

		doc.setFontSize(16);
		doc.text(`Recipe of the Day - ${recipeTitle}`, 10, 10);

		const tableData = [
			['Serves', recipeServes],
			['Prep Time', recipePrepTime],
			['Cook Time', recipeCookTime],
			['Ingredients', recipeIngredients],
			['Instructions', recipeInstructions],
		];

		doc.autoTable({
			startY: 30,
			head: [['Property', 'Value']],
			body: tableData,
		});

		doc.save('recipe.pdf');
	};

	return (
		<div className='flex flex-col items-center'>
			{/* Recipe of the Day */}
			<div className='daily-recipes mx-0 my-auto flex flex-wrap justify-center'></div>
			<div className='mt-10 w-3/4 overflow-hidden rounded-lg border border-neutral-600 bg-neutral-600'>
				<div className='border-b-4 border-sandybrown bg-neutral-600 px-8 py-4'>
					<h2 className='text-center text-2xl font-extrabold text-white md:text-left'>RECIPE OF THE DAY</h2>
				</div>

				<SliderPlaceholder
					img1={'http://localhost:4000/images/recipe/' + dailyRecipe.image}
					img2={'http://localhost:4000/images/recipe/' + dailyRecipe.image}
					description='Introducing "Pizza Mexicana" - a mouthwatering fusion of bold flavors and vibrant ingredients that will transport your taste buds south of the border! Our advertisement begins with a captivating shot of a sizzling hot pizza fresh out of the oven, covered in a tantalizing blend of spicy tomato sauce. As the camera zooms in, the aromatic fragrance of jalapeños, savory chorizo, and smoky chipotle peppers wafts through the screen, enticing viewers with their rich, authentic Mexican flavors.'
					handleOpenModal={handleOpenModal}
				></SliderPlaceholder>
			</div>
			{showModal && (
				<DailyRecipeModal
					title={recipeTitle}
					serves={recipeServes}
					prepTime={recipePrepTime}
					cookTime={recipeCookTime}
					ingredients={recipeIngredients}
					instructions={recipeInstructions}
					imageSrc={'http://localhost:4000/images/recipe/' + dailyRecipe.image}
					handleCloseModal={handleCloseModal}
					onHide={handleHideModal}
					pdf={handleClick}
				></DailyRecipeModal>
			)}

			<div>
				<button
					onClick={handleToken}
					className='fixed bottom-2 right-2 z-50 rounded-full bg-sandybrown p-4 text-white shadow-lg'
				>
					{!token ? 'Add your recipe' : 'Add your recipe'}
				</button>
			</div>
		</div>
	);
};

export default Daily_Recipe;
