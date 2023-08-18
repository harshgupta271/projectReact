import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './app';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from './usecart';

const root = document.getElementById('root');

const rootElement = ReactDOM.createRoot(root);

rootElement.render(
  <React.StrictMode>
    <CartProvider>
    <App />
    </CartProvider>
  </React.StrictMode>
);

reportWebVitals();
