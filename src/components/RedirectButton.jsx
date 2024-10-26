// src/components/RedirectButton.jsx
import React from 'react';
import { useAuth } from '@clerk/clerk-react'; // Assuming you're using Clerk for authentication
import { useNavigate } from 'react-router-dom';

const RedirectButton = ({ children }) => {
  const { isSignedIn } = useAuth(); // Check if the user is signed in
  const navigate = useNavigate();

  const handleClick = () => {
    if (!isSignedIn) {
      navigate('/sign-in'); // Redirect to the sign-in page
    } else {
      // Handle the button action if signed in
      console.log('Button clicked!');
    }
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    >
      {children}
    </button>
  );
};

export default RedirectButton;
