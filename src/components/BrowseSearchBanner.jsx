import React from 'react';
import bannerImg from '../assets/bgff.jpg';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
const BrowseBanner = ({ handleSearch }) => {
	const [search, setSearch] = useState('');
	return (
		<div>
			<div>
				<img src={bannerImg} className='absolute z-0 h-[400px] w-full object-cover object-center brightness-75'></img>
				{/* Banner and search bar*/}
				<div className='mb-28 flex flex-col items-center justify-center pt-20 font-Lato'>
					<h1 className='z-[5] mb-4 ml-10 mt-8 text-5xl font-normal text-white '>WHISKED AWAY - RECIPES ARCHIVE</h1>
					<div className='flex'>
						<div className='relative mt-10 w-1/3'>
							<form
								onSubmit={e => {
									e.preventDefault();
									handleSearch(search);
								}}
							>
								<input
									name='search'
									className='z-[10] h-10 w-96 rounded-full border border-gray-300 bg-white px-5 pr-10 text-sm'
									type='text'
									placeholder='Type in a recipe'
									value={search}
									onChange={e => setSearch(e.target.value)}
								/>
								<button
									className='absolute left-24 top-0 ml-64 mt-3'
									onClick={() => {
										handleSearch(search);
									}}
								>
									<FaSearch />
								</button>
							</form>
						</div>
					</div>
					{/* FaSearch is a component from the react-icons/fa library that displays an icon representing a search magnifying glass.  */}
				</div>
			</div>
		</div>
	);
};
export default BrowseBanner;
