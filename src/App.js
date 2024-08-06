import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ProductListingPage from './components/ProductListingPage';
import ShoppingCartPage from './components/ShoppingCartPage';
import { plants } from './data/plants';

const App = () => {
  const [cartItems, setCartItems] = React.useState([]);

  const addToCart = (plant) => {
    setCartItems([...cartItems, { ...plant, quantity: 1 }]);
  };

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductListingPage plants={plants} cartItems={cartItems} addToCart={addToCart} />} />
      <Route path="/cart" element={<ShoppingCartPage cartItems={cartItems} setCartItems={setCartItems} />} />
    </Routes>
  );
};

export default App;

