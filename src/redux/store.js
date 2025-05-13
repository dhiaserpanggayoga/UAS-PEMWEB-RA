// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './slices/categorySlice';  // Pastikan path ini benar

const store = configureStore({
  reducer: {
    categories: categoryReducer,
    // Tambahkan reducer lain jika diperlukan
  }
});

export default store;
