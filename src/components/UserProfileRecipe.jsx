import React from 'react';
import { useState } from 'react';
import croissant from '../assets/krosan1.jpg';
import heart from '../assets/heart.png';
import bookmark from '../assets/bookmark.png';
import DailyRecipeModal from './DailyRecipeModalPlaceholder';
const UserProfileRecipe = ({ image, name, author, likes, saves, serves, cookTime, ingredients, instructions }) => {
	const [showModal, setShowModal] = useState(false);
	const handleOpenModal = () => {
		setShowModal(true);
	};
	const handleCloseModal = () => {
		setShowModal(false);
		console.log(showModal);
	};
	const handleHideModal = () => {
		setShowModal(false);
	};
	const imageUrl = `http://localhost:4000/images/recipe/${image}`;
	return (
		<div className='mb-8 flex w-full cursor-pointer flex-col rounded-lg hover:bg-sandybrown'>
			<div className='flex h-48 w-full justify-start'>
				<img src={imageUrl} className='h-full w-1/3 rounded-2xl object-cover' />
				<div
					className='flex flex-col'
					onClick={() => {
						handleOpenModal();
					}}
				>
					<h1 className='ml-4 text-2xl font-bold'>{name}</h1>
					<h2 className='ml-4 text-xl underline'>by {author}</h2>
					<div className='mt-7 flex'>
						<h2 className='ml-4 text-xl'>Rating: </h2>
						<img src={heart} className='ml-4 h-8 w-8' />
						<h2 className='ml-4 text-xl'>{likes} </h2>
					</div>
					<div className='mt-7 flex'>
						<h2 className='ml-4 text-xl'>Saved: </h2>
						<img src={bookmark} className='ml-4 h-8 w-8' />
						<h2 className='ml-4 text-xl'>{saves} </h2>
					</div>
				</div>
			</div>
			{showModal === true ? (
				<DailyRecipeModal
					title={name}
					serves={serves}
					cookTime={cookTime}
					ingredients={ingredients.join('\n')}
					instructions={instructions}
					imageSrc={imageUrl}
					handleCloseModal={handleCloseModal}
					onHide={handleHideModal}
				></DailyRecipeModal>
			) : (
				''
			)}
		</div>
	);
};

export default UserProfileRecipe;
