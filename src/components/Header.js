// src/components/Header.js
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Call the logout function from context
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <header className="header">
      <div className="logo">Farmers Market</div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/contact-us">Contact Us</Link>
        <Link to="/order">Orders</Link>
        <Link to="/login-farmer">Farmer's Login</Link>
        <Link to="/login-buyer">Buyer's Login</Link>
        {user && (
          <button onClick={handleLogout} className="logout-button">
            Log Out
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;

