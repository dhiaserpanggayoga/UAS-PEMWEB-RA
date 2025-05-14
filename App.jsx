import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import AddRecipe from './pages/AddRecipe.jsx';
import EditRecipe from './pages/EditRecipe.jsx';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddRecipe />} />
        <Route path="/edit/:id" element={<EditRecipe />} />

      </Routes>
    </BrowserRouter>
  );
}
