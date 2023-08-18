import React from 'react';
import Bar from "./bar";
import Intro from "./intro";
import CakeCard from "./cakecards";
import PastryCard from "./pastrycard";
import Foot from "./footer";
import './index.css';
import { CartProvider, useCart } from "./usecart";

const Home = () => {
  const { addToCakeCart, addToPastryCart,pastryCartItems,cakeCartItems } = useCart();
  const totalCartItems = pastryCartItems.length + cakeCartItems.length;
  return ( 
    <div>
      <CartProvider>
      <Bar cartItemCount={totalCartItems}/>
        <Intro />
        <CakeCard addToCart={addToCakeCart} />
        <img
          src="hampers.png"
          alt="hamper"
          style={{
            width: '90%',
            marginLeft: '5%',
            marginTop: '20px',
            height: '320px',
          }}
        />
        <PastryCard addToCart={addToPastryCart} />
        <Foot />
      </CartProvider>
    </div>
  );
};

export default Home;
