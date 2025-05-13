// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Pastikan file CSS diimpor
import App from './App';
import { Provider } from 'react-redux';  // Mengimpor Provider dari react-redux
import store from './redux/store';  // Pastikan path ini benar

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>  {/* Membungkus aplikasi dengan Provider */}
    <App />
  </Provider>
);
