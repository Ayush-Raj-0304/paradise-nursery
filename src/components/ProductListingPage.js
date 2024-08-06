import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from './ShoppingCartIcon';
import './ProductListingPage.css';

const ProductListingPage = ({ plants, cartItems, addToCart }) => {
  const groups = [
    { name: 'Air Purifying', plants: plants.filter(plant => plant.category === 'Air Purifying') },
    { name: 'Aromatic', plants: plants.filter(plant => plant.category === 'Aromatic') },
    { name: 'Succulents', plants: plants.filter(plant => plant.category === 'Succulents') },
    // Add more groups as needed
  ];

  const isAddedToCart = (plantId) => cartItems.some(item => item.id === plantId);

  return (
    <div className="product-listing-page">
      <header className="header">
        <Link to="/" className="logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-flower3" viewBox="0 0 16 16">
            <path d="M11.424 8c.437-.052.811-.136 1.04-.268a2 2 0 0 0-2-3.464c-.229.132-.489.414-.752.767C9.886 4.63 10 4.264 10 4a2 2 0 1 0-4 0c0 .264.114.63.288 1.035-.263-.353-.523-.635-.752-.767a2 2 0 0 0-2 3.464c.229.132.603.216 1.04.268-.437.052-.811.136-1.04.268a2 2 0 1 0 2 3.464c.229-.132.489-.414.752-.767C6.114 11.37 6 11.736 6 12a2 2 0 1 0 4 0c0-.264-.114-.63-.288-1.035.263.353.523.635.752.767a2 2 0 1 0 2-3.464c-.229-.132-.603-.216-1.04-.268M9 4a2 2 0 0 1-.045.205q-.059.2-.183.484a13 13 0 0 1-.637 1.223L8 6.142l-.135-.23a13 13 0 0 1-.637-1.223 4 4 0 0 1-.183-.484A2 2 0 0 1 7 4a1 1 0 1 1 2 0M3.67 5.5a1 1 0 0 1 1.366-.366 2 2 0 0 1 .156.142q.142.15.326.4c.245.333.502.747.742 1.163l.13.232-.265.002a13 13 0 0 1-1.379-.06 4 4 0 0 1-.51-.083 2 2 0 0 1-.2-.064A1 1 0 0 1 3.67 5.5m1.366 5.366a1 1 0 0 1-1-1.732l.047-.02q.055-.02.153-.044.202-.048.51-.083a13 13 0 0 1 1.379-.06q.135 0 .266.002l-.131.232c-.24.416-.497.83-.742 1.163a4 4 0 0 1-.327.4 2 2 0 0 1-.155.142M9 12a1 1 0 0 1-2 0 2 2 0 0 1 .045-.206q.058-.198.183-.483c.166-.378.396-.808.637-1.223L8 9.858l.135.23c.241.415.47.845.637 1.223q.124.285.183.484A1.3 1.3 0 0 1 9 12m3.33-6.5a1 1 0 0 1-.366 1.366 2 2 0 0 1-.2.064q-.202.048-.51.083c-.412.045-.898.061-1.379.06q-.135 0-.266-.002l.131-.232c.24-.416.497-.83.742-1.163a4 4 0 0 1 .327-.4q.07-.074.114-.11l.041-.032a1 1 0 0 1 1.366.366m-1.366 5.366a2 2 0 0 1-.155-.141 4 4 0 0 1-.327-.4A13 13 0 0 1 9.74 9.16l-.13-.232.265-.002c.48-.001.967.015 1.379.06q.308.035.51.083.098.024.153.044l.048.02a1 1 0 1 1-1 1.732zM8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
          </svg>
          <div className="logo-text">
            <h1 className='logo-name'>Paradise Nursery</h1>
            <p className="tagline">Your Green Haven</p>
          </div>
        </Link>
        
        <Link to="/cart" className="cart-icon">
          <svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart2" viewBox="0 0 16 16">
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
          </svg>
          <ShoppingCartIcon count={cartItems.length} />
        </Link>
      </header>
      
      <main className="main-section">
        {groups.map(group => (
          <section className="group-section" key={group.name}>
            <h2>{group.name}</h2>
            <div className="plant-cards">
              {group.plants.map(plant => (
                <div className="plant-card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} className="plant-image"/>
                  <h3>{plant.name}</h3>
                  <p className="price">${plant.price.toFixed(2)}</p>
                  <p className="description">{plant.description}</p>
                  <button
                    onClick={() => addToCart(plant)}
                    disabled={isAddedToCart(plant.id)}
                    className="add-to-cart-button"
                  >
                    {isAddedToCart(plant.id) ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      <footer className="footer">
        <p>Contact us: <a href="mailto:contact@paradisenursery.com">contact@paradisenursery.com</a></p>
        <div className="social-media-links">
          <a href="#" className="social-link">Facebook</a>
          <a href="#" className="social-link">Instagram</a>
          <a href="#" className="social-link">Twitter</a>
        </div>
      </footer>
    </div>
  );
};

export default ProductListingPage;
