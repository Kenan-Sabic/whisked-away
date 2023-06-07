import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const ImageTest = () => {
	const [image, setImage] = useState(null);
	// on boot up, get image from backend
	useEffect(() => {
		axios.get('http://localhost:4000/api/recipe').then(res => {
			setImage(res.data[0].image);
		});
	}, []);

	return (
		<>
			<img src={`http://localhost:4000/images/recipe/${image}`} alt='recipe image' className='h-1/2 w-1/2' />
			<h1>{`http://localhost:4000/images/recipe/${image}`}</h1>
		</>
	);
};

export default ImageTest;
