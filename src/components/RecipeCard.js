// src/components/RecipeCard.js
import React from 'react';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white p-4 rounded shadow-lg">
      <img src={recipe.imageUrl} alt={recipe.name} className="w-full h-48 object-cover rounded" />
      <h3 className="text-xl font-semibold mt-4">{recipe.name}</h3>
      <p className="text-gray-600 mt-2">{recipe.description}</p>
    </div>
  );
};

export default RecipeCard;
