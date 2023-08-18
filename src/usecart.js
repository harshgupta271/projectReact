import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [pastryCartItems, setPastryCartItems] = useState([]);
  const [cakeCartItems, setCakeCartItems] = useState([]);

  const addToPastryCart = (pastry) => {
    setPastryCartItems([...pastryCartItems, pastry]);
  };

  const addToCakeCart = (cake) => {
    setCakeCartItems([...cakeCartItems, cake]);
  };

  const removeFromCart = (itemId) => {
    const updatedPastryCart = pastryCartItems.filter(item => item.id !== itemId);
    const updatedCakeCart = cakeCartItems.filter(item => item.id !== itemId);

    setPastryCartItems(updatedPastryCart);
    setCakeCartItems(updatedCakeCart);
  };

  return (
    <CartContext.Provider value={{ pastryCartItems, cakeCartItems, addToPastryCart, addToCakeCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
