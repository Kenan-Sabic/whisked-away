import React, { useEffect, useState } from 'react';
import UserPageBio from '../components/UserPageBio';
import Navbar from '../components/Navbar';
import UserPageBanner from '../components/UserPageBanner';
import UserPageRecipeTab from '../components/UserPageRecipeTab';
import Footer from '../components/Footer';
import ViewUserPageBanner from '../components/ViewUserPageBanner';
import axios from 'axios';
import ViewBio from '../components/ViewBio';
import ViewRecipes from '../components/ViewRecipes';
const ViewUser = () => {
	const [viewUserData, setViewUserData] = useState({});
	//function that gets the id in the url
	const getId = () => {
		const url = window.location.href;
		const urlArray = url.split('/');
		//get the id from the url
		const id = urlArray[urlArray.length - 1];
		//return the id
		return id;
	};
	//get data about the user from the database
	const getUserData = async () => {
		//get the user id from the url
		const id = getId();
		//get the user data from the database
		const response = await axios.get('http://localhost:4000/api/user/' + id);
		return response.data;
	};
	useEffect(() => {
		getUserData().then(data => {
			setViewUserData(data);
		});
	}, []);
	return (
		<div className='bg-neutral-100'>
			<Navbar />
			<div className='bg-spices bg-cover pt-80'>
				<ViewUserPageBanner username={viewUserData.name} image={viewUserData.image} />
			</div>
			<div className='w-full md:grid md:grid-cols-10'>
				<div className=' flex w-full flex-col items-center rounded-md text-center md:col-start-1 md:col-end-4 md:mt-[-170px]'>
					<ViewBio user={viewUserData} />
				</div>
				<div className='mb-5  flex w-full flex-col items-center rounded-md border border-dashed border-sandybrown bg-neutral-50 text-center shadow-2xl md:col-start-4 md:col-end-11 md:mt-[-170px]'>
					<div className='mt-8 grid w-full grid-cols-2 gap-x-4 gap-y-4 rounded-lg p-6 md:grid-cols-4 md:gap-x-6'>
						<div
							className='flex h-14 cursor-pointer  items-center justify-center rounded-lg bg-sandybrown text-center font-bold shadow-lg hover:text-white md:col-span-1'
							onClick={() => {
								window.location.href = '/user/recipes';
							}}
						>
							<h1>Recipes</h1>
						</div>
					</div>

					<div className='mb-10 w-full bg-neutral-50'>
						<ViewRecipes name={viewUserData.name} />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default ViewUser;
