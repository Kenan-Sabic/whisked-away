import React from 'react';

const UserPageBio = () => {
	const user = JSON.parse(sessionStorage.getItem('user'));
	const bio = user.bio;
	const name = user.name;
	const food = user.likedFoods;
	//format date
	const date = new Date(user.creationDate);
	const formattedDate = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
	return (
		<div>
			<div className='mx-2 flex min-w-[300px] flex-col items-center rounded-2xl border border-dashed border-sandybrown bg-white py-3 text-center'>
				<h1 className='text-5xl'>{name}'s Bio</h1>
				<div className='w-11/12 rounded-md text-center'>
					<h1 className='mb-3 ml-5 mt-6'>{bio}</h1>
				</div>
				<div className='w-11/12 rounded-md text-center'>
					<h1 className='mt-5 text-xl'>Joined</h1>
					<h1>{formattedDate}</h1>
				</div>
				<div className='w-11/12 rounded-lg text-center'>
					<h1 className='mt-5 text-xl'>Favorite food:</h1>
					<h1>
						{food.map(food => {
							return <span>{food}, </span>;
						})}
					</h1>
				</div>
			</div>
		</div>
	);
};

export default UserPageBio;
