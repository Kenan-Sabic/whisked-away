import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PasswordReset = () => {
  const [email, setEmail] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/reset-password', { email });
      // Handle the response from the server
      console.log(response.data); // Example: display success message
    } catch (error) {
      // Handle errors
      console.error(error);
    }
  };

  return (
    <div>
      <div className='flex items-center justify-center bg-spices bg-cover w-full min-h-screen'>
        <div className='bg-white w-11/12 lg:w-1/3 min-h-[50vh] px-6 rounded-2xl'>
          <div className='flex flex-col items-center'>
            <h1 className='text-4xl font-bold text-center py-10'>Forgot your password?</h1>
            <p className='text-center text-lg mb-6'>Enter your email address and we will send you a link to reset your password.</p>
            
            <form onSubmit={handleFormSubmit} className='flex flex-col items-center w-full'>
            <div className='text-left w-4/6 flex flex-col'>
              <label className='font-Lato font-thin text-battleshipgrey text-sm m-1' htmlFor="email">Your email</label>
              <input
                type="email"
                id="email"
                className='h-12 w-full rounded bg-gray-200 p-3 text-lg'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
           
              <input
                type="submit"
                id='submit'
                value="Request password reset"
                className='p-2 bg-jet text-white mt-8 mb-6 h-16 text-xl font-Lato rounded'
              />
            </form>
            <Link to="/login" className='underline font-Imprima mb-6'>Back to login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
