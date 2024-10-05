import React, { useEffect, useState } from 'react';
import './Profile.css'; // Optional: Add styles for your profile page
import { useNavigate } from 'react-router-dom';

function Profile() {
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log('Token:', token);
        
        // Ensure token exists before making a request
        if (!token) {
          setErrorMessage('No token found, please log in.');
          return;
        }

        const response = await fetch('http://localhost:5050/api/', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const data = await response.json();
        setUser(data); // Assuming data includes username and EP
      } catch (error) {
        setErrorMessage(error.message);
      }
    };

    fetchUserData();
  }, []); 

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {user ? (
        <div className="profile-details">
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Experience Points (EP):</strong> {user.ep}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Profile;
