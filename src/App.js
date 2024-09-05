// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Order from './pages/Order';
import Profile from './pages/Profile';
// import ContactUs from './pages/ContactUs';
// import Footer from './components/Footer';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login-farmer" element={<Login userType="Farmer" />} />
            <Route path="/login-buyer" element={<Login userType="Buyer" />} />
            <Route path="/order" element={<Order />} />
            <Route path="/profile" element={<Profile />} />
            {/* <Route path="/contact-us" element={<ContactUs />} /> */}
          </Routes>
          {/* <Footer /> */}
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;

