// src/pages/BuyerDashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BuyerDashboard.css';

const BuyerDashboard = () => {
  const navigate = useNavigate();

  const products = [
    { id: 1, name: 'Fresh Apples', price: 20, farmer: 'Farmer Joe', quantity: 100 },
    { id: 2, name: 'Organic Tomatoes', price: 15, farmer: 'Farmer Anne', quantity: 50 },
    // Add more products from different farmers
  ];

  const handleOrder = (product) => {
    // Retrieve current orders from localStorage or initialize if none exist
    let orders = JSON.parse(localStorage.getItem('orders')) || [];

    // Add the selected product to the orders array
    orders.push(product);

    // Update localStorage with the new orders
    localStorage.setItem('orders', JSON.stringify(orders));

    // Redirect to Order page
    navigate('/order');
  };

  return (
    <div className="buyer-dashboard">
      <h1>Available Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price} per unit - {product.quantity} units available from {product.farmer}
            <button onClick={() => handleOrder(product)}>Order</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BuyerDashboard;
