// src/components/CategoryCard.js
import React from 'react';

const CategoryCard = ({ category }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl hover:bg-blue-50">
      <h3 className="text-3xl font-semibold text-gray-800 mb-4">{category.name}</h3>
      <p className="text-gray-600 text-lg mb-6">{category.description}</p>
      <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
        Lihat Resep
      </button>
    </div>
  );
};

export default CategoryCard;
