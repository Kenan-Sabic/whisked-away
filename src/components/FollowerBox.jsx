import React from 'react';
import userImgDefault from '../assets/userImgDefault.svg';
import threedots from '../assets/threedots.svg';
import { useState, useEffect } from 'react';
const FollowerBox = ({ user }) => {
	const [image, setImage] = useState(user.image);
	useEffect(() => {
		if (user.image) {
			setImage('http://localhost:4000/images/profile/' + user.image);
		}
	}, [user.image]);
	return (
		<div className='row-auto mt-4 flex cursor-pointer flex-nowrap items-center gap-7 rounded px-10 hover:bg-sandybrown md:gap-4 lg:gap-6 xl:gap-7'>
			<div className='flex h-[70px] w-[70px] items-center justify-center rounded-full bg-lightorange shadow-md'>
				<img
					src={image || userImgDefault}
					className={`${image ? 'h-full w-full rounded-full object-cover' : 'h-2/3 w-2/3'}`}
				></img>
			</div>
			<div className='lg:text-xl xl:text-2xl'>
				<h1>{user.name}</h1>
			</div>
			<div>
				<img src={threedots} className='h-[20px] w-[20px]' />
			</div>
		</div>
	);
};

export default FollowerBox;
