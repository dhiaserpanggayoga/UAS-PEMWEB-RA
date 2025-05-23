function RecipeCard({ recipe }) {
  return (
    <div className="bg-yellow-100 rounded-3xl shadow-[0_15px_30px_rgba(255,223,0,0.7)] p-8 transform hover:scale-110 transition duration-300 cursor-pointer border-4 border-yellow-400 hover:border-yellow-600">
      {recipe.image && (
        <img
          src={recipe.image}
          alt={recipe.name}
          className="rounded-2xl mb-6 shadow-lg border-2 border-yellow-300"
          style={{ width: "100%", maxHeight: "200px", objectFit: "cover" }}
        />
      )}
      <h3 className="text-3xl font-extrabold text-yellow-800 mb-4">{recipe.name}</h3>
      <p className="text-yellow-900 font-semibold whitespace-pre-line">{recipe.ingredients}</p>
      <p className="italic mt-3 text-yellow-700 whitespace-pre-line">{recipe.instructions}</p>
    </div>
  );
}
