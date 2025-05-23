// CategoryPage.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function CategoryPage({ recipes }) {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const filteredRecipes = recipes.filter(r => r.category === categoryId);

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <div className="max-w-5xl mx-auto px-8 mt-10">
      <button
        className="mb-6 text-yellow-600 underline"
        onClick={() => navigate(-1)}
      >
        &larr; Kembali
      </button>
      <h2 className="text-4xl font-bold mb-6">{capitalize(categoryId)}</h2>

      {filteredRecipes.length === 0 ? (
        <p>Tidak ada resep untuk kategori ini.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredRecipes.map(recipe => (
            <div
              key={recipe.id}
              className="border p-4 rounded shadow hover:shadow-lg cursor-pointer"
              onClick={() => navigate("/")} // Bisa dikembangkan ke detail resep
            >
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="mt-4 text-2xl font-semibold text-yellow-700">{recipe.name}</h3>
              <p className="mt-2 text-yellow-800 italic">{recipe.ingredients}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
