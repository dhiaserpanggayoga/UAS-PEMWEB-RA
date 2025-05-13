// src/pages/CategoryPage.js
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setRecipes } from '../redux/slices/recipeSlice';
import RecipeCard from '../components/RecipeCard';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  const recipes = useSelector(state => state.recipes);

  useEffect(() => {
    // Mengambil resep berdasarkan kategori
    axios.get(`http://localhost:5000/api/recipes/category/${categoryId}`)
      .then(response => {
        // Menyimpan resep ke dalam Redux
        dispatch(setRecipes(response.data));
      })
      .catch(error => console.error('Error fetching recipes:', error));
  }, [categoryId, dispatch]);

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-4">
      {recipes.length > 0 ? (
        recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))
      ) : (
        <p>No recipes found in this category.</p>
      )}
    </div>
  );
};

export default CategoryPage;
