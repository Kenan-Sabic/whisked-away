import React from 'react';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';

const LoginPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = evt => {
		evt.preventDefault();
		//if axios request is successful, redirect to home page
		axios
			.post('http://localhost:4000/api/user/login', {
				email: email,
				password: password,
			})
			.then(res => {
				if (res.status === 200) {
					sessionStorage.setItem('token', res.data.token);
					sessionStorage.setItem('user', JSON.stringify(res.data.user));
					console.log(res.data);
					window.location.href = '/user/following';
				}
			})
			.catch(err => {
				alert('Login failed');
			});
	};

	return (
		<div>
			<Navbar />
			<div className='grid min-h-screen w-full grid-cols-11 bg-jet bg-cover pt-20 md:bg-spices'>
				<div className='col-start-5 col-end-8 mb-auto mt-auto h-3/4 rounded-3xl bg-white'>
					<div className=' mb-0 h-full w-full rounded-3xl '>
						<form
							onSubmit={handleSubmit}
							className='lg:h-100 z-10 flex h-full flex-col  items-center justify-center rounded-3xl bg-white bg-opacity-80 pb-20'
						>
							<h2 className='mb-2 mt-4 font-Imprima text-5xl  font-medium'>Log in</h2>
							<div className='mb-5 mt-4 w-[340px]'>
								<label htmlFor='email' className='w-1/5 text-left text-2xl'>
									Email
								</label>
								<input
									type='email'
									name='email'
									onChange={e => setEmail(e.target.value)}
									placeholder='Email'
									id='email'
									className='h-12 w-full rounded bg-gray-200 p-3 text-lg'
								/>
							</div>
							<div className='mb-3 w-[340px]'>
								<label htmlFor='password' className='w-1/5 text-left text-2xl'>
									Password
								</label>
								<input
									type='password'
									name='password'
									onChange={e => setPassword(e.target.value)}
									placeholder='Password'
									id='password'
									className='h-12 w-full rounded bg-gray-200 p-3 text-lg'
								/>
							</div>
							<div className='mb-16 flex w-[240px] justify-center'>
								<a href='/forgot-password' className='p-1 text-lg text-blue-600 underline'>
									Forgot password?
								</a>
							</div>
							<input
								type='submit'
								value='Log in'
								className='mb-4 w-40 cursor-pointer rounded bg-sandybrown p-3.5 text-3xl font-bold text-jet'
							/>
							<a href='../register' className='w-40 rounded p-3.5 text-3xl font-bold text-sandybrown'>
								Register
							</a>
							<p></p>
						</form>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default LoginPage;
