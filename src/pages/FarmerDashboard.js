// src/pages/FarmerDashboard.js
import React, { useState } from 'react';
import './FarmerDashboard.css';

const FarmerDashboard = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Fresh Apples', price: 20, quantity: 100 },
    { id: 2, name: 'Organic Tomatoes', price: 15, quantity: 50 },
  ]);

  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    quantity: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const handleAddProduct = () => {
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
    setNewProduct({ name: '', price: '', quantity: '' });
  };

  return (
    <div className="farmer-dashboard">
      <h1>Farmer Dashboard</h1>
      <h2>Your Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price} per unit - {product.quantity} units available
          </li>
        ))}
      </ul>

      <h2>Add New Product</h2>
      <div className="add-product-form">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price per Unit"
          value={newProduct.price}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity Available"
          value={newProduct.quantity}
          onChange={handleInputChange}
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
    </div>
  );
};

export default FarmerDashboard;
