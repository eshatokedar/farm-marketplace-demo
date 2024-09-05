// src/pages/Profile.js
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import FarmerDashboard from './FarmerDashboard';
import BuyerDashboard from './BuyerDashboard';
import './Profile.css';

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user) {
    return (
      <div className="profile-page">
        <h1>Not Logged In</h1>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <h1>{user.type} Profile</h1>
      <p>Email: {user.email}</p>

      {user.type === 'Farmer' ? (
        <FarmerDashboard />
      ) : (
        <BuyerDashboard />
      )}

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
