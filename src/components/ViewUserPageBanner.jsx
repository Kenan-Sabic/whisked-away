import React from 'react';
import faris from '../assets/faris.jpg';
import { useState } from 'react';
import axios from 'axios';
import Logout from '../components/Logout';
import ViewUser from '../pages/ViewUser';
import { useEffect } from 'react';
const ViewUserPageBanner = ({ username, image }) => {
	const user = JSON.parse(sessionStorage.getItem('user'));
	const token = sessionStorage.getItem('token');
	const followingList = user.following;
	const userId = user.id;

	const url = window.location.href;
	const urlArray = url.split('/');
	const id = urlArray[urlArray.length - 1];

	const [isFollowing, setIsFollowing] = useState(followingList.includes(id));
	const imageVar = 'http://localhost:4000/images/profile/' + image;

	const handleLogout = () => {
		Logout();
	};

	const handleFollow = async () => {
		const response = await axios.post('http://localhost:4000/api/user/' + userId + '/follow/' + id, {
			headers: {
				Authorization: 'Bearer ' + token,
			},
		});
		setIsFollowing(!isFollowing);
		alert(response.data.message);
		sessionStorage.setItem('user', JSON.stringify(response.data.user));
	};

	return (
		<div className='flex h-[40vh] w-full flex-col items-center bg-neutral-100 md:flex-row md:items-start'>
			<div className='mt-[-120px] flex min-h-[240px] min-w-[240px] items-center justify-center rounded-full bg-lightorange shadow-md md:ml-[100px]'>
				<img src={image ? imageVar : ''} className='h-[240px] w-[240px] rounded-full object-cover'></img>
			</div>
			<div className='text-center'>
				<h1 className='mt-10 text-5xl md:ml-10'>{username}</h1>
			</div>
			<div className='ml-20'>
				<div className='mt-10 flex justify-start'>
					<div className='mr-4'>
						<button
							className='rounded-md bg-lightorange px-6 py-4 font-bold text-white shadow-md'
							onClick={() => handleFollow()}
						>
							{
								//if the user is not following the user, show follow button else show unfollow button
								isFollowing ? 'Unfollow' : 'Follow'
							}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ViewUserPageBanner;
