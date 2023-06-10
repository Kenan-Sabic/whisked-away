import React, { useRef, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import EditUserPageImageBanner from '../components/EditUserPageImageBanner';
import { TextInput, Label, Textarea } from 'flowbite-react';

const EditUserProfile = () => {
  const textareaRef = useRef(null);
  const likedFoodsTextareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    const likedFoodsTextarea = likedFoodsTextareaRef.current;

    const adjustTextareaHeight = (textareaElement) => {
      textareaElement.style.height = 'auto';
      textareaElement.style.height = `${textareaElement.scrollHeight}px`;
    };

    const handleTextareaInput = (event) => {
      adjustTextareaHeight(event.target);
    };

    textarea.addEventListener('input', handleTextareaInput);
    likedFoodsTextarea.addEventListener('input', handleTextareaInput);

    return () => {
      textarea.removeEventListener('input', handleTextareaInput);
      likedFoodsTextarea.removeEventListener('input', handleTextareaInput);
    };
  }, []);

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const handleNewPasswordChange = (e) => {
    const newPassword = e.target.value;
    setNewPassword(newPassword);
    checkPasswordMatch(newPassword, confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const confirmPassword = e.target.value;
    setConfirmPassword(confirmPassword);
    checkPasswordMatch(newPassword, confirmPassword);
  };

  const checkPasswordMatch = (newPassword, confirmPassword) => {
    if (newPassword !== confirmPassword) {
      setPasswordMatchError(true);
    } else {
      setPasswordMatchError(false);
    }
  };

  return (
    <div className="bg-neutral-100">
      <Navbar />
      <div className="bg-spices bg-cover pt-80">
        <EditUserPageImageBanner />
      </div>
      <div className="flex flex-col bg-neutral-100 w-full items-center gap-5">
        <form className="w-3/5 sm:w-1/2 md:w-2/5 lg:w-2/5 xl:w-1/3">
          <div className="mb-2">
            <Label
              htmlFor="username"
              value="New Username: "
              style={{ color: 'black', fontSize: '36px' }}
            />
          </div>
          <TextInput
            id="username"
            type="text"
            style={{
              backgroundColor: '#FF9E45',
              color: 'black',
              fontSize: '24px',
              height: '60px',
              marginBottom: '16px',
            }}
          />
          <div className="mb-2">
            <Label
              htmlFor="bio"
              value="New Bio: "
              style={{ color: 'black', fontSize: '36px' }}
            />
          </div>
          <Textarea
            id="bio"
            style={{
              backgroundColor: '#FF9E45',
              color: 'black',
              fontSize: '24px',
              resize: 'none',
              height: 'auto',
              minHeight: '60px',
              marginBottom: '16px',
            }}
            ref={textareaRef}
          />
          <div className="mb-2">
            <Label
              htmlFor="likedfoods"
              value="Foods you like: "
              style={{ color: 'black', fontSize: '36px' }}
            />
          </div>
          <Textarea
            id="likedfoods"
            style={{
              backgroundColor: '#FF9E45',
              color: 'black',
              fontSize: '24px',
              resize: 'none',
              height: 'auto',
              minHeight: '60px',
              marginBottom: '16px',
            }}
            ref={likedFoodsTextareaRef}
          />
          <div className="mb-2">
            <Label
              htmlFor="newPassword"
              value="New Password: "
              style={{ color: 'black', fontSize: '36px' }}
            />
          </div>
          <TextInput
            id="newPassword"
            type="password"
            value={newPassword}
            onChange={handleNewPasswordChange}
            style={{
              backgroundColor: '#FF9E45',
              color: 'black',
              fontSize: '24px',
              height: '60px',
              marginBottom: '16px',
            }}
          />
          <div className="mb-2">
            <Label
              htmlFor="confirmPassword"
              value="Confirm Password: "
              style={{ color: 'black', fontSize: '36px' }}
            />
          </div>
          <TextInput
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            style={{
              backgroundColor: '#FF9E45',
              color: 'black',
              fontSize: '24px',
              height: '60px',
              marginBottom: '16px',
            }}
          />
          {passwordMatchError && (
            <p className="text-red-500">Passwords do not match.</p>
          )}
          <button type="submit" className="btn btn-primary">
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUserProfile;
