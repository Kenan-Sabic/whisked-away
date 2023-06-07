import React, { useState } from 'react';
import axios from 'axios';

const ResetPasswordForm = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [resetError, setResetError] = useState('');
  const [resetSuccess, setResetSuccess] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setResetError('Passwords do not match');
      return;
    }

    try {
      // Make a request to your backend to reset the password
      // Replace '/api/reset-password' with your actual reset password endpoint
      const response = await axios.post('/api/reset-password', { password });
      setResetSuccess(response.data.message);
    } catch (error) {
      setResetError('An error occurred while resetting the password');
      console.error(error);
    }
  };

  return (
    <div className='w-full min-h-screen flex flex-col bg-jet items-center justify-center gap-2'>
        <div className='p-4 border-sandybrown border-2 min-h-fit min-w-1/2 rounded' >
      <h1 className=' font-Imprima text-4xl text-white mb-1'>Reset Password</h1>
      {resetError && <p className='font-Imprima text-xl text-white'>{resetError}</p>}
      {resetSuccess && <p className='font-Imprima text-xl text-white'>{resetSuccess}</p>}
      <form onSubmit={handleFormSubmit} className='bg-white rounded p-2'>
        <div className='border border-b-black mb-2'>
          <label htmlFor="password"
          className='font-Imprima text-lg mr-1'
          >New Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='h-full'
          />
        </div>
        <div className='mb-2 border border-b-black text-lg'>
          <label htmlFor="confirmPassword"
          className='font-Imprima text-lg mr-1'
          >Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className='h-full'
          />
        </div>
        <button type="submit"
        className='p-1 bg-jet text-white font-Imprima text-xl rounded'
        >Reset Password</button>
      </form>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
