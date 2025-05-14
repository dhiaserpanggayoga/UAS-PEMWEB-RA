import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [category, setCategory] = useState('Semua');
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Ambil data resep dari localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('recipes')) || [];
    setRecipes(saved);
    setFiltered(saved);

    // Ambil data favorit dari localStorage
    const fav = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(fav);
  }, []);

  // Fungsi untuk menyaring resep berdasarkan kategori
  useEffect(() => {
    let filteredData = recipes;

    if (category !== 'Semua') {
      filteredData = filteredData.filter((r) => r.category === category);
    }

    if (showFavorites) {
      filteredData = filteredData.filter((r) => favorites.includes(r.id)); // Saring favorit
    }

    // Filter berdasarkan pencarian
    if (searchQuery) {
      filteredData = filteredData.filter((r) =>
        r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFiltered(filteredData);
  }, [category, recipes, showFavorites, favorites, searchQuery]);

  // Fungsi untuk menghapus resep
  const handleDelete = (id) => {
    const updated = recipes.filter((r) => r.id !== id);
    setRecipes(updated);
    localStorage.setItem('recipes', JSON.stringify(updated));
  };

  // Fungsi untuk menambahkan / menghapus resep dari favorit
  const toggleFavorite = (id) => {
    let updatedFavs = [];

    if (favorites.includes(id)) {
      updatedFavs = favorites.filter(f => f !== id); // Hapus dari favorit
    } else {
      updatedFavs = [...favorites, id]; // Tambahkan ke favorit
    }

    setFavorites(updatedFavs);
    localStorage.setItem('favorites', JSON.stringify(updatedFavs));
  };

  // Daftar kategori resep (menambahkan 'Semua' sebagai kategori pertama)
  const categories = ['Semua', ...new Set(recipes.map(r => r.category))];

  // Fungsi Export Resep
  const exportRecipes = () => {
    const recipesData = JSON.stringify(recipes, null, 2); // Mengonversi data ke JSON
    const blob = new Blob([recipesData], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'resep-dapur-yoga.json'; // Nama file JSON yang diunduh
    link.click();
  };

  // Fungsi Import Resep
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/json') {
      const reader = new FileReader();
      reader.onload = () => {
        const importedData = JSON.parse(reader.result);
        const updatedRecipes = [...recipes, ...importedData];
        setRecipes(updatedRecipes);
        localStorage.setItem('recipes', JSON.stringify(updatedRecipes)); // Simpan ke localStorage
      };
      reader.readAsText(file);
    } else {
      alert('Harap pilih file JSON yang valid!');
    }
  };

  return (
    <div className="p-8 bg-[#F5F5F5] min-h-screen">
      <div className="max-w-5xl mx-auto bg-[#8B4513] text-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-8 text-center">📖 Resep Dapur Yoga</h1>

        {/* Input Pencarian */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Cari resep..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border-2 border-[#228B22] px-6 py-3 rounded-lg text-[#228B22] w-full md:w-1/2 mx-auto focus:outline-none focus:ring-2 focus:ring-[#228B22] transition duration-300"
          />
        </div>

        {/* Tambah, Filter, dan Tampilkan Favorit */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <Link
            to="/add"
            className="bg-[#228B22] text-white px-6 py-3 rounded-lg hover:bg-[#006400] transition-all duration-300"
          >
            + Tambah Resep
          </Link>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border-2 border-[#228B22] px-4 py-3 rounded-lg text-[#228B22] focus:outline-none focus:ring-2 focus:ring-[#228B22] transition-all duration-300"
          >
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <button
            onClick={() => setShowFavorites(!showFavorites)}
            className="bg-[#228B22] text-white px-6 py-3 rounded-lg hover:bg-[#006400] transition-all duration-300"
          >
            {showFavorites ? 'Tampilkan Semua Resep' : 'Tampilkan Favorit'}
          </button>
        </div>

        {/* Export dan Import */}
        <div className="flex gap-6 justify-center mb-8">
          <button
            onClick={exportRecipes}
            className="bg-[#228B22] text-white px-6 py-3 rounded-lg hover:bg-[#006400] transition-all duration-300"
          >
            Export Resep
          </button>

          <input
            type="file"
            accept=".json"
            onChange={handleFileUpload}
            className="hidden"
            id="importFile"
          />
          <label
            htmlFor="importFile"
            className="bg-[#228B22] text-white px-6 py-3 rounded-lg hover:bg-[#006400] cursor-pointer transition-all duration-300"
          >
            Import Resep
          </label>
        </div>

        {/* Menampilkan Resep */}
        {filtered.length === 0 ? (
          <p className="text-gray-500 italic text-center">Tidak ada resep dalam kategori ini.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((recipe) => (
              <div key={recipe.id} className="border-2 border-[#228B22] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 p-4">
                <img
                  src={recipe.image || 'https://via.placeholder.com/300'}
                  alt={recipe.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="p-4">
                  <h2 className="text-2xl font-semibold text-center mb-2">{recipe.title}</h2>
                  <p className="text-sm text-gray-100 text-center mb-3">Kategori: {recipe.category}</p>
                  <div className="flex gap-3 justify-center">
                    <Link to={`/edit/${recipe.id}`} className="bg-yellow-400 px-4 py-2 text-sm rounded-full hover:bg-yellow-500 transition-all duration-300">
                      Edit
                    </Link>
                    <button onClick={() => handleDelete(recipe.id)} className="bg-red-500 px-4 py-2 text-sm text-white rounded-full hover:bg-red-600 transition-all duration-300">
                      Hapus
                    </button>

                    <button
                      onClick={() => toggleFavorite(recipe.id)}
                      className={`text-sm px-4 py-2 rounded-full border-2 border-[#228B22] ${
                        favorites.includes(recipe.id)
                          ? 'bg-[#228B22] text-white'
                          : 'bg-white text-[#228B22]'
                      } hover:bg-[#006400] transition-all duration-300`}
                    >
                      {favorites.includes(recipe.id) ? '❤️ Favorit' : '🤍 Simpan'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
