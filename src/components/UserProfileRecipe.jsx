import React from 'react';

import croissant from '../assets/krosan1.jpg';
import heart from '../assets/heart.png';
import bookmark from '../assets/bookmark.png';

const UserProfileRecipe = ({ image, name, author, likes, saves }) => {
	const imageUrl = `http://localhost:4000/images/recipe/${image}`;
	return (
		<div className='mb-8 flex w-full flex-col'>
			<div className='flex h-48 w-full justify-start'>
				<img src={imageUrl} className='h-full w-1/3 rounded-2xl object-cover' />
				<div className='flex flex-col'>
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
		</div>
	);
};

export default UserProfileRecipe;
