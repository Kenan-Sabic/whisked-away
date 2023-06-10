import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import axios from 'axios';

function Footer() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitSuccess, setSubmitSuccess] = useState(false);

	const handleSubscribe = async event => {
		event.preventDefault();
		setIsSubmitting(true);
		//Add logic to send form data to backend for processing
		axios.post('http://localhost:4000/api/subscribe', { email }).then(res => {
			//if bad request set error to error message
			if (res.data.error) {
				setSubmitSuccess(false);
			}
			//if good request set error to success message
			else {
				setSubmitSuccess(true);
				alert('You have successfully subscribed to our newsletter!');
			}
		});

		console.log({ email });
		setSubmitSuccess(true);
		setIsSubmitting(false);
	};

	return (
		<>
			<div className='h-1 bg-sandybrown'></div>
			<footer className='bg-neutral-700 py-8 lg:py-12'>
				<div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
					<div className='flex flex-wrap justify-between'>
						<div className='mb-8 w-full lg:mb-0 lg:w-1/3'>
							<h3 className='mb-4 text-lg font-semibold text-gray-100'>About Us</h3>
							<p className='leading-loose text-gray-400'>
								Faris Hadziabdic <br />
								Adnan Silajdzic <br />
								Kenan Sabic <br />
								Ismar Aganovic <br />
								Nedzmija Karic <br />
							</p>
						</div>
						<div className='mb-8 w-full lg:mb-0 lg:w-1/3'>
							<h3 className='mb-4 text-lg font-semibold text-gray-100'>Navigation</h3>
							<ul className='leading-loose text-gray-400'>
								<li>
									<a href='/'>Home</a>
								</li>
								<li>
									<a href='/browse'>Browse</a>
								</li>
								<li>
									<a href='/user/recipes'>Profile</a>
								</li>
							</ul>
						</div>
						<div className='mb-8 w-full lg:mb-0 lg:w-1/3'>
							<h3 className='mb-4 text-lg font-semibold text-gray-100'>Newsletter</h3>
							<ul className='leading-loose text-gray-400'>
								<input
									value={email}
									onChange={e => setEmail(e.target.value)}
									type='email'
									placeholder='Enter your email'
									className='w-full rounded-md border border-gray-300 px-4 py-2 focus:border-orange-500 focus:outline-none focus:ring-orange-500'
								/>
							</ul>
							<div className='mt-4'>
								<button
									onClick={handleSubscribe}
									type='button'
									className='rounded-md bg-sandybrown px-4 py-2 text-white hover:bg-orange-400 focus:bg-orange-400 focus:outline-none'
								>
									Subscribe
								</button>
							</div>
						</div>
					</div>
					<div className='mt-8 flex items-center justify-between'>
						<div className='flex items-center'>
							<a href='#' className='mr-4 text-orange-500 hover:text-orange-400'>
								<FaFacebook />
							</a>
							<a href='#' className='mr-4 text-orange-500 hover:text-orange-400'>
								<FaTwitter />
							</a>
							<a href='#' className='text-orange-500 hover:text-orange-400'>
								<FaInstagram />
							</a>
						</div>
						<p className='text-sm text-gray-400'>&copy; 2023. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;
