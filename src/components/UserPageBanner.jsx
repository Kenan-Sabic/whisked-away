import React from 'react';
import faris from '../assets/faris.jpg';
import { useState } from 'react';
import axios from 'axios';
import Logout from '../components/Logout'
const UserPageBanner = () => {
	const user = JSON.parse(sessionStorage.getItem('user'));
	const username = user.name;
	const image = 'http://localhost:4000/images/profile/' + user.image;

	const handleLogout = () => {
		Logout();
	  };
	

	return (
		<div className='flex h-[40vh] w-full flex-col items-center bg-neutral-100 md:flex-row md:items-start'>
			<div className='mt-[-120px] flex min-h-[240px] min-w-[240px] items-center justify-center rounded-full bg-lightorange shadow-md md:ml-[100px]'>
				<img src={image} className='h-[240px] w-[240px] rounded-full object-cover'></img>
			</div>
			<div className='text-center'>
				<h1 className='mt-10 text-5xl md:ml-10'>{username}</h1>
			</div>
			<div className='ml-20'>
				<div className="flex justify-start mt-10">
  					<div className="mr-4">
    					<button className="bg-lightorange text-white font-bold py-4 px-6 rounded-md shadow-md">
      						Edit Profile
    					</button>
  					</div>
  					<div>
    					<button 
							className="bg-neutral-500 text-white font-bold py-4 px-6 rounded-md shadow-md"
							onClick={handleLogout}
						>
      						Log Out
    					</button>
  					</div>
				</div>
			</div>
		</div>
	);
};

export default UserPageBanner;
