// src/pages/Home.js
import React from 'react';
import ProductCard from '../components/ProductCard';
import './Home.css';
import dragonfruitImage from '../assets/dragonfruit.jpg';
import kiwiImage from '../assets/kiwi.jpg';
import litchiImage from '../assets/litchi-3.jpg';
import mangoImage from '../assets/mango.jpg';
import makhanaImage from '../assets/makhana.jpg';

const Home = () => {
  const products = [
    { id: 1, name: 'Dragonfruits', price: 20, image: dragonfruitImage },
    { id: 2, name: 'Kiwi', price: 15, image: kiwiImage },
    { id: 3, name: 'Litchi', price: 10, image: litchiImage },
    { id: 4, name: 'Mango', price: 5, image: mangoImage  },
    { id: 5, name: 'Makhana', price: 8, image: makhanaImage },
  ];

  return (
    <div className="home-page">
      <div className="banner">
        <div className="banner-content">
          <h1>Welcome to the Farm Marketplace</h1>
          <p>This app connects farmers directly with buyers for seamless transactions. Farmers list and manage products effortlessly, while buyers access fresh produce at competitive prices. Experience a simpler, transparent marketplace.</p>
          <div className="banner-search-bar">
            <input type="text" placeholder="Search for fresh produce..." />
            <button>Search</button>
          </div>
        </div>
      </div>

      <h2 style={{display:'flex', textAlign:'center', justifyContent: 'center',color:'#45a049'}}>Available Products</h2>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
