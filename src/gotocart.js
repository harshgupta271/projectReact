import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from './usecart';
import { Button } from 'react-bootstrap';

function GoToCart() {
  const location = useLocation();
  const { pastryCartItems, cakeCartItems } = useCart();
  const totalItems = pastryCartItems.length + cakeCartItems.length;
  const totalCost =
    pastryCartItems.reduce((total, item) => total + item.price, 0) +
    cakeCartItems.reduce((total, item) => total + item.price, 0);
  const cartStyle = totalItems === 0 ? { display: 'none' } : {};

  // Hide the component when on the cart page
  if (location.pathname === '/cart') {
    return null;
  }

  return (
    <div className="go-to-cart" style={cartStyle}>
      <div className="d-flex justify-content-center">
        <Button variant="light" size="lg">
          <Link to="/cart" className="go-to-cart-link">
            Go to Cart
          </Link>
        </Button>
      </div>
      <div className="cart-summary">
        <span>Total Items: {totalItems}</span>&nbsp;&nbsp;&nbsp;
        <span>Total Cost: &#8377;{totalCost}</span>
      </div>
    </div>
  );
}

export default GoToCart;
