import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './redux/accountSlice';
import App from './App';

const container= document.getElementById('root')
// Create the Redux store
const store = configureStore({
   // ***TODO***
   reducer: {
    account: accountReducer 
   }
  
   // Set the accountReducer as the reducer for the 'account' state
  
});

// Render the App component inside the Provider component
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
