import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { App } from './App';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
 <Auth0Provider
    domain="dev-522be8aoh7drc6g5.us.auth0.com"
    clientId="BlV0zsEyk8JTzCY3fTBdUnxzA8mkd0IZ"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
 <Provider store={store}>
  <App/>
  </Provider>
  </Auth0Provider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
