import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain='dev-rq0hyv1n67murgjw.us.auth0.com'
    clientId='2uMaSG0pYWy4cvC2fHq5BIrNL0NWfL3a'
    cacheLocation='localstorage'
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);

// dev-rq0hyv1n67murgjw.us.auth0.com
// 2uMaSG0pYWy4cvC2fHq5BIrNL0NWfL3a
