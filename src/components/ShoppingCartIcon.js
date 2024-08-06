import React from 'react';
import './ShoppingCartIcon.css';

const ShoppingCartIcon = ({ count }) => {
  return (
    <div className="shopping-cart-icon">
      <i className="fas fa-shopping-cart"></i>
      {count > 0 && <span className="cart-count">{count}</span>}
    </div>
  );
};

export default ShoppingCartIcon;
