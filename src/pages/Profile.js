import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
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
        <div>
          <h2>Manage Your Products</h2>
          <p>List and manage your farm products here.</p>
          {/* Add more farmer-specific functionality */}
        </div>
      ) : (
        <div>
          <h2>Buyer Dashboard</h2>
          <p>View your orders and browse products.</p>
          {/* Add more buyer-specific functionality */}
        </div>
      )}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;

