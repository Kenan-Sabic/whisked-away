import React, { useRef, useState, useEffect } from 'react';
import plusSymbol from '../assets/plusSymbol.svg';
import axios from 'axios';
const AddRecipeTab = () => {
	//form to create a recipe
	const [name, setName] = useState('');
	const [serves, setServes] = useState('');
	const [ingredients, setIngredients] = useState('');
	const [tags, setTags] = useState('');
	const [cookTime, setCookTime] = useState(null);
	const [instructions, setInstructions] = useState('');
	const [image, setImage] = useState('');
	const user = sessionStorage.getItem('user');
	const userId = JSON.parse(user).id;
	const handleSubmit = e => {
		e.preventDefault();
		//turn tags into array of strings
		const tagsArray = tags.split(',');
		const ingredientsArray = ingredients.split(',');
		console.log(tagsArray);
		const formData = new FormData();
		formData.append('image', image);
		formData.append('name', name);
		formData.append('serves', serves);
		formData.append('cookTime', cookTime);
		formData.append('instructions', instructions);
		formData.append('author', userId);
		tagsArray.forEach(tag => {
			formData.append('tags', tag);
		});
		ingredientsArray.forEach(ingredient => {
			formData.append('ingredients', ingredient);
		});
		axios.post('http://localhost:4000/api/recipe', formData).then(res => {
			//if bad request set error to error message
			if (res.data.error) {
				setDefaultResultOrder(res.data.error);
			}
			//if good request set error to success message
			else {
				window.location.href = '/user/recipes';
			}
		});
	};
	return (
		<div>
			<form
				onSubmit={handleSubmit}
				className='flex w-full flex-col items-center font-Lato text-lg'
				encType='multipart/form-data'
			>
				<label>Image</label>
				<input
					type='file'
					className='mb-3 text-sm text-gray-500 file:mr-4 file:rounded-md file:border-0 file:bg-sandybrown file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-blue-600'
					name='image'
					id='file'
					onChange={e => setImage(e.target.files[0])}
				></input>
				<label>Name</label>
				<input
					placeholder='Recipe Name'
					className='mb-3 h-10 w-56 rounded-md border-2 border-gray-300 p-3'
					type='text'
					name='name'
					value={name}
					onChange={e => {
						setName(e.target.value);
					}}
				></input>
				<label>Ingredients</label>
				<input
					placeholder='eggs, flour,...'
					className='mb-3 h-10 w-56 rounded-md border-2 border-gray-300 p-3'
					type='text'
					name='ingredients'
					value={ingredients}
					onChange={e => {
						setIngredients(e.target.value);
					}}
				></input>
				<label>Serves</label>
				<input
					placeholder='Serves'
					className='mb-3 h-10 w-56 rounded-md border-2 border-gray-300 p-3'
					type='number'
					name='serves'
					value={serves}
					onChange={e => {
						setServes(e.target.value);
					}}
				></input>
				<label>Tags</label>
				<input
					placeholder='breakfast, dessert, ...'
					className='mb-3 h-10 w-56 rounded-md border-2 border-gray-300 p-3'
					type='text'
					name='tags'
					value={tags}
					onChange={e => {
						setTags(e.target.value);
					}}
				></input>
				<label>Cook Time (minutes)</label>
				<input
					placeholder='Cook Time'
					className='mb-3 h-10 w-56 rounded-md border-2 border-gray-300 p-3'
					type='number'
					name='cookTime'
					value={cookTime}
					onChange={e => {
						setCookTime(e.target.value);
					}}
				></input>
				<label>Instructions</label>
				<textarea
					placeholder='Instructions'
					className='mb-3 h-[200px] w-[400px] rounded-md border-2 border-gray-300 p-3'
					type='text'
					name='instructions'
					value={instructions}
					onChange={e => {
						setInstructions(e.target.value);
					}}
				/>
				<button
					name='submit'
					type='submit'
					className='mt-3 h-[50px] w-[200px] rounded-2xl bg-sandybrown text-lg text-white hover:border'
				>
					Create Recipe!
				</button>
			</form>
		</div>
	);
};

export default AddRecipeTab;
