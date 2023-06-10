import React, { useRef, useState, useEffect } from 'react';
import plusSymbol from '../assets/plusSymbol.svg';

const AddRecipeTab = () => {
	const fileInputRef = useRef(null);
	const servingSizeRef = useRef(null);
	const titleRef = useRef(null);
	const ingredientsRef = useRef(null);
	const prepTimeRef = useRef(null);
	const howToPrepareRef = useRef(null);
	const tagsRef = useRef(null);

	const [servingSize, setServingSize] = useState('');
	const [title, setTitle] = useState('');
	const [ingredients, setIngredients] = useState('');
	const [prepTime, setPrepTime] = useState('');
	const [howToPrepare, setHowToPrepare] = useState('');
	const [tags, setTags] = useState('');

	const handleFileUpload = () => {
		fileInputRef.current.click();
	};

	const handleFileChange = event => {
		const file = event.target.files[0];
		console.log(file);
	};

	const handleServingSizeChange = event => {
		setServingSize(event.target.value);
	};

	const handleTitleChange = event => {
		setTitle(event.target.value);
	};

	const handleIngredientsChange = event => {
		setIngredients(event.target.value);
	};

	const handlePrepTimeChange = event => {
		setPrepTime(event.target.value);
	};

	const handleHowToPrepareChange = event => {
		setHowToPrepare(event.target.value);
	};

	const handleTagsChange = event => {
		setTags(event.target.value);
	};

	useEffect(() => {
		const resizeTextArea = ref => {
			if (ref.current) {
				ref.current.style.height = 'auto';
				ref.current.style.height = `${ref.current.scrollHeight}px`;
			}
		};

		// Resize text areas on initial render
		resizeTextArea(servingSizeRef);
		resizeTextArea(titleRef);
		resizeTextArea(ingredientsRef);
		resizeTextArea(prepTimeRef);
		resizeTextArea(howToPrepareRef);
		resizeTextArea(tagsRef);

		// Resize text areas on content change
		const handleResize = () => {
			resizeTextArea(servingSizeRef);
			resizeTextArea(titleRef);
			resizeTextArea(ingredientsRef);
			resizeTextArea(prepTimeRef);
			resizeTextArea(howToPrepareRef);
			resizeTextArea(tagsRef);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [servingSizeRef, titleRef, ingredientsRef, prepTimeRef, howToPrepareRef, tagsRef]);

	return (
		<div>
			<div className='px-6'>
				<div>
					<div className='grid grid-cols-2 gap-x-4 gap-y-4 p-6 md:grid-cols-11 md:gap-x-6'>
						<div className='flex h-14 cursor-pointer items-center justify-center rounded-lg bg-neutral-50 text-center font-bold shadow-lg hover:bg-sandybrown hover:text-white md:col-span-3'>
							<h1
								onClick={() => {
									window.location.href = '/user/recipes';
								}}
							>
								Your Recipes
							</h1>
						</div>
						<div className='flex h-14 cursor-pointer items-center justify-center rounded-lg bg-neutral-50 text-center font-bold shadow-lg hover:bg-sandybrown hover:text-white md:col-span-3'>
							<h1>Your Favorites</h1>
						</div>
						<div className='col-span-2 flex h-14 cursor-pointer items-center justify-center rounded-lg bg-neutral-50 text-center font-bold shadow-lg hover:bg-sandybrown hover:text-white md:col-span-3'>
							<h1>Saved Recipes</h1>
						</div>
						<div
							onClick={() => {
								window.location.href = '/user/recipes/add';
							}}
							className='col-span-2 flex h-14 min-w-[150px] cursor-pointer items-center justify-center gap-x-4 place-self-center rounded-lg bg-neutral-50 text-center font-bold shadow-lg hover:bg-sandybrown hover:text-white md:col-span-2 md:min-w-[70px] lg:min-w-[100px] xl:min-w-[125px]'
						>
							<img src={plusSymbol} className='h-[50%] w-[50%]' alt='Add Recipe' />
						</div>
					</div>
					<div className='mt-8 flex flex-col items-center justify-center gap-y-10 bg-neutral-100 p-6 md:grid md:w-full md:grid-cols-12 md:gap-y-0 md:p-0'>
						<div
							className='flex w-[75%] cursor-pointer flex-col items-center justify-center rounded-md bg-neutral-200 p-4 text-center shadow-md hover:bg-sandybrown md:col-start-1 md:col-end-4 md:mb-5 md:w-full'
							onClick={handleFileUpload}
						>
							<h1 className='text-3xl'>Add Picture</h1>
							<input type='file' accept='image/*' className='hidden' ref={fileInputRef} onChange={handleFileChange} />
							<img src={plusSymbol} className='mt-5 h-[40%] w-[40%]' alt='Upload' />
						</div>
						<div
							className='flex w-full flex-col items-center justify-center rounded-md bg-neutral-200 p-4 text-center shadow-md md:col-start-5 md:col-end-13'
							onClick={event => {
								if (event.target === titleRef.current) {
									titleRef.current.focus();
								}
							}}
						>
							<div className='flex w-full flex-row bg-neutral-200 p-4'>
								<h1 className='flex flex-grow items-center justify-center text-2xl md:text-3xl'>Title:</h1>
								<input
									className='ml-4 h-auto w-[60%] resize-none rounded-md bg-neutral-100 py-2 text-center text-xl shadow-md md:ml-0 md:text-2xl'
									ref={titleRef}
									value={title}
									onChange={handleTitleChange}
									maxLength={60}
									style={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
									}}
								/>
							</div>
						</div>
						<div
							className='flex w-full flex-col items-center justify-center rounded-md bg-neutral-200 p-4 text-center shadow-md md:col-start-1 md:col-end-13 md:mb-5'
							onClick={event => {
								if (event.target === servingSizeRef.current) {
									servingSizeRef.current.focus();
								}
							}}
						>
							<div className='flex w-full flex-row bg-neutral-200 p-4'>
								<h1 className='flex flex-grow items-center justify-center text-2xl md:text-3xl'>Serving size:</h1>
								<input
									className='ml-4 h-auto w-[60%] resize-none rounded-md bg-neutral-100 py-2 text-center text-xl shadow-md md:ml-0 md:text-2xl'
									type='number'
									ref={servingSizeRef}
									value={servingSize}
									onChange={handleServingSizeChange}
									style={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
									}}
								/>
							</div>
						</div>
						<div
							className='flex w-full flex-col items-center justify-center rounded-md bg-neutral-200 p-4 text-center shadow-md md:col-start-1 md:col-end-13 md:mb-5'
							onClick={event => {
								if (event.target === ingredientsRef.current) {
									ingredientsRef.current.focus();
								}
							}}
						>
							<div className='flex w-full flex-row bg-neutral-200 p-4'>
								<h1 className='flex flex-grow items-center justify-center text-2xl md:text-3xl'>Ingredients:</h1>
								<textarea
									className='ml-4 h-auto w-[60%] resize-none rounded-md bg-neutral-100 text-center text-xl shadow-md md:ml-0 md:text-2xl'
									ref={ingredientsRef}
									value={ingredients}
									onChange={handleIngredientsChange}
									maxLength={1000}
									style={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										paddingTop: '1em',
									}}
								/>
							</div>
						</div>
						<div
							className='flex w-full flex-col items-center justify-center rounded-md bg-neutral-200 p-4 text-center shadow-md md:col-start-1 md:col-end-13 md:mb-5'
							onClick={event => {
								if (event.target === tagsRef.current) {
									tagsRef.current.focus();
								}
							}}
						>
							<div className='flex w-full flex-row bg-neutral-200 p-4'>
								<h1 className='flex flex-grow items-center justify-center text-2xl md:text-3xl'>Tags:</h1>
								<textarea
									className='ml-4 h-auto w-[60%] resize-none rounded-md bg-neutral-100 text-center text-xl shadow-md md:ml-0 md:text-2xl'
									ref={tagsRef}
									value={tags}
									onChange={handleTagsChange}
									maxLength={1000}
									style={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										paddingTop: '1em',
									}}
								/>
							</div>
						</div>
						<div
							className='flex w-full flex-col items-center justify-center rounded-md bg-neutral-200 p-4 text-center shadow-md md:col-start-1 md:col-end-13 md:mb-5'
							onClick={event => {
								if (event.target === prepTimeRef.current) {
									prepTimeRef.current.focus();
								}
							}}
						>
							<div className='flex w-full flex-row bg-neutral-200 p-4'>
								<h1 className='flex flex-grow items-center justify-center text-2xl md:text-3xl'>
									Preparation Time (Minutes):
								</h1>
								<input
									className='ml-4 h-auto w-[60%] resize-none rounded-md bg-neutral-100 text-center text-xl shadow-md md:ml-0 md:text-2xl'
									type='number'
									ref={prepTimeRef}
									value={prepTime}
									onChange={handlePrepTimeChange}
									maxLength={10}
									style={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
									}}
								/>
							</div>
						</div>
						<div
							className='flex w-full flex-col items-center justify-center rounded-md bg-neutral-200 p-4 text-center shadow-md md:col-start-1 md:col-end-13'
							onClick={event => {
								if (event.target === howToPrepareRef.current) {
									howToPrepareRef.current.focus();
								}
							}}
						>
							<div className='flex w-full flex-row bg-neutral-200 p-4'>
								<h1 className='flex flex-grow items-center justify-center text-2xl md:text-3xl'>How to Prepare:</h1>
								<textarea
									className='ml-4 h-auto w-[60%] resize-none rounded-md bg-neutral-100 text-center text-xl shadow-md md:ml-0 md:text-2xl'
									ref={howToPrepareRef}
									value={howToPrepare}
									onChange={handleHowToPrepareChange}
									maxLength={1000}
									style={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										paddingTop: '1em',
									}}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddRecipeTab;
