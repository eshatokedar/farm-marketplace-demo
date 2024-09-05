// src/pages/Order.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Order.css';

const Order = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve orders from localStorage
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders);
  }, []);

  const handlePlaceOrder = () => {
    // Handle order placement logic (e.g., sending to server)
    alert('Order placed successfully!');

    // Clear the orders from localStorage
    localStorage.removeItem('orders');

    // Redirect to home or success page
    navigate('/');
  };

  return (
    <div className="order-page">
      <h1>Your Orders</h1>
      {orders.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        <>
          <ul>
            {orders.map((order, index) => (
              <li key={index}>
                {order.name} - ${order.price} per unit - {order.quantity} units from {order.farmer}
              </li>
            ))}
          </ul>
          <button onClick={handlePlaceOrder}>Place Order</button>
        </>
      )}
    </div>
  );
};

export default Order;


