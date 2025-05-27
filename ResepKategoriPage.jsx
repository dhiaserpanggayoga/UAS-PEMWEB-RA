import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import RecipeList from "./RecipeList"; // Jika RecipeList komponen terpisah, atau bisa copas kodenya

export default function ResepKategoriPage({ recipes, savedRecipes, onSave }) {
  const { kategori } = useParams();
  const navigate = useNavigate();

  // Filter resep berdasarkan kategori
  const filteredRecipes = recipes.filter(
    (recipe) => recipe.category.toLowerCase() === kategori.toLowerCase()
  );

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-6 py-2 bg-yellow-400 rounded-full font-semibold hover:bg-yellow-300 shadow-md transition"
      >
        ← Kembali
      </button>
      <h2 className="text-3xl font-extrabold mb-8 text-yellow-700 text-center">
        Resep Kategori: {kategori}
      </h2>
      {filteredRecipes.length === 0 ? (
        <p className="text-center text-yellow-700 text-xl">
          Tidak ada resep untuk kategori ini.
        </p>
      ) : (
        <RecipeList
          recipes={filteredRecipes}
          savedRecipes={savedRecipes}
          onSave={onSave}
        />
      )}
    </div>
  );
}
