import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import CartPage from './cartpage';
import About from './about';
import Contact from './contact';
import Home from './home';
import { CartProvider } from './usecart';
import GoToCart from './gotocart';
import Account from './account';
const App = () => {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/aboutus" element={<About />} />
          <Route path='/contactus' element={<Contact />} />
          <Route path='/account' element={<Account/>}/>
        </Routes>
        <GoToCart/>
      </CartProvider>
    </Router>
  );
};

export default App;
