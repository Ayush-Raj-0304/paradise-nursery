import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="overlay">
        <div className="company-name">Paradise Nursery</div>
        <div className="separator"></div>
        <div className="company-description">
          Welcome to Paradise Nursery, your ultimate destination for exquisite house plants and greenery. At Paradise Nursery, we believe in transforming your living spaces into lush, vibrant sanctuaries with our carefully curated selection of house plants. Whether you're a seasoned plant enthusiast or just beginning your green journey, our diverse collection, including air-purifying plants, aromatic herbs, and decorative foliage, is designed to cater to all your botanical needs. Our commitment to quality and customer satisfaction ensures that every plant you bring home will thrive and add a touch of natural elegance to your environment. Explore the beauty of nature with us and let Paradise Nursery bring the joy of greenery into your home.
        </div>
        <Link to="/products" className="get-started-button">Get Started</Link>
      </div>
    </div>
  );
};

export default LandingPage;
