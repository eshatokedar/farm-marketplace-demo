import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Header.css';

const Header = () => {
  const { user } = useAuth();

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Farm Marketplace</Link>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search for products..." />
      </div>
      <div className="hamburger-menu">
        <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <nav className="menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/order">Order</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
            {user ? (
              <li><Link to="/profile">Logout</Link></li>
            ) : (
              <>
                <li><Link to="/login-farmer">Farmer Login</Link></li>
                <li><Link to="/login-buyer">Buyer Login</Link></li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
