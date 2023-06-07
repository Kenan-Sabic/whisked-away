import { React, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
const Registration = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [bio, setBio] = useState('');
	const [password, setPassword] = useState('');
	const [image, setImage] = useState('');
	const [error, setDefaultResultOrder] = useState('');
	const handleSubmit = e => {
		e.preventDefault();

		//send image to backend
		const formData = new FormData();
		formData.append('image', image);
		formData.append('name', name);
		formData.append('bio', bio), formData.append('password', password), formData.append('email', email);
		axios.post('http://localhost:4000/api/user', formData).then(res => {
			//if bad request set error to error message
			if (res.data.error) {
				setDefaultResultOrder(res.data.error);
			}
			//if good request set error to success message
			else {
				window.location.href = '/login';
			}
		});
	};

	return (
		<div>
			<Navbar />
			<div className='grid min-h-screen w-full grid-cols-12 bg-jet bg-cover pt-20 md:bg-spices'>
				<div className='h-7/8 col-start-2 col-end-12 md:col-start-3 md:col-end-11 lg:col-start-5 lg:col-end-9 mb-auto mt-auto rounded-3xl bg-white'>
					<div className=' mb-0 h-full w-full rounded-3xl '>
						<form
							action='#'
							className='lg:h-100 z-10 flex h-full flex-col  items-center justify-center rounded-3xl bg-white bg-opacity-80 pb-20'
							onSubmit={handleSubmit}
							encType='multipart/form-data'
						>
							<h2 className='mb-2 mt-4 font-Imprima text-5xl  font-medium'>Register</h2>
							<div className='mb-5 mt-4 w-[240px]'>
								<label htmlFor='username' className='w-1/5 text-left text-2xl'>
									Username
								</label>
								<input
									onChange={e => setName(e.target.value)}
									value={name}
									type='text'
									placeholder='Username'
									maxLength={30}
									name='username'
									id='username'
									className='h-12 w-full rounded bg-gray-200 p-3 text-lg'
								/>
							</div>
							<div className='mb-5  w-[240px]'>
								<label htmlFor='email' className='w-1/5 text-left text-2xl'>
									Email
								</label>
								<input
									onChange={e => setEmail(e.target.value)}
									value={email}
									type='email'
									placeholder='Email'
									name='email'
									id='email'
									className='h-12 w-full rounded bg-gray-200 p-3 text-lg'
								/>
							</div>
							<div className='mb-3 w-[240px]'>
								<label htmlFor='password' maxLength={30} className='w-1/5 text-left text-2xl'>
									{' '}
									Password
								</label>
								<input
									onChange={e => setPassword(e.target.value)}
									value={password}
									type='password'
									placeholder='Password'
									name='password'
									id='password'
									className='h-12 w-full rounded bg-gray-200 p-3 text-lg'
								/>
							</div>
							<div className='w[240px] mb-10'>
								<label htmlFor='bioTextArea' className='w-1/5 text-left text-2xl'>
									Bio
								</label>
								<textarea
									onChange={e => setBio(e.target.value)}
									value={bio}
									rows={3}
									maxLength={150}
									placeholder='Bio'
									name='bio'
									id='bioTextArea'
									className='h-12 w-full rounded bg-gray-200 p-3 text-lg'
								/>
							</div>
                            <div className='w-[240px] my-1'>

                            <label className='w-full text-left text-2xl' htmlFor="file">Profile picture</label>
							<input className='m-1 p-2' type='file' name='image' id='file' onChange={e => setImage(e.target.files[0])} />
                            </div>
							<input
								type='submit'
								className='mb-4 w-64 cursor-pointer rounded bg-sandybrown p-3.5 text-3xl font-bold text-jet'
                                value="Register"
							/>
							<p>Already have an account?</p>
							<a href='../login' className='w-36 p-2 text-center text-3xl text-sandybrown'>
								Log in
							</a>
						</form>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Registration;
