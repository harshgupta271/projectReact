import React from 'react';
import { Button } from 'react-bootstrap';
import Bar from './bar';
import { useCart } from './usecart';
import Foot from './footer';

const CartPage = () => {
  const { pastryCartItems, cakeCartItems, removeFromCart } = useCart();
  const allCartItems = [...pastryCartItems, ...cakeCartItems];
  const getTotalCost = () => {
    return allCartItems.reduce((total, item) => total + item.price, 0);
  };

  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
  };

  return (
    <div>
      <Bar cartitemcount={allCartItems.length} />
      <div className='mt-5 pt-1'>
        <h2 className='text-center mt-4'>Your Cart</h2>
        <div className="d-flex justify-content-center">
          <div className="cart-container">
            <div className="cart-component">
              {allCartItems.length === 0 ? (
                <p className='text-center'>Your cart is empty.</p>
              ) : (
                <div>
                  <ul className="cart-items-list">
                    {allCartItems.map((item, index) => (
                      <li key={index} className="cart-item">
                        <div className="item-container d-flex justify-content-between">
                          <div className="item-details">
                            <p>{item.name}-&#8377;{item.price}</p>
                          </div>
                          <Button
                            variant='danger'className='ms-2 mb-1' size='xs'
                            onClick={() => handleRemoveItem(item.id)}
                          >
                            Remove
                          </Button>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <p className="total m-5">Total: &#8377;{getTotalCost()}</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-center'>
          <Button variant='light'>Place your order</Button>
        </div>
      </div>
      <Foot />
    </div>
  );
};

export default CartPage;
