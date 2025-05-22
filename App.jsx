import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import CategoryList from "./components/CategoryList"; // Pastikan buat file ini
import CategoryPage from "./components/CategoryPage"; // Pastikan buat file ini

// Dummy resep dengan kategori
const dummyRecipes = [
  {
    id: 1,
    name: "Nasi Goreng",
    category: "digoreng",
    ingredients: "Nasi, telur, kecap manis, bawang putih",
    instructions: "Tumis bawang putih, masukkan nasi, aduk rata, tambahkan kecap.",
    image: "/images/nasi-goreng.jpg",
  },
  {
    id: 2,
    name: "Sayur Asem",
    category: "berkuah",
    ingredients: "Sayur-sayuran, asam jawa, bawang merah",
    instructions: "Rebus sayur dan asam jawa hingga matang.",
    image: "/images/sayur-asem.jpg",
  },
  {
    id: 3,
    name: "Tumis Kangkung",
    category: "ditumis",
    ingredients: "Kangkung, bawang putih, cabai",
    instructions: "Tumis bawang putih dan cabai, masukkan kangkung, aduk hingga layu.",
    image: "/images/tumis-kangkung.jpg",
  },
  // Tambah resep lain sesuai kebutuhan
];

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "yoga" && password === "12345") {
      setError("");
      onLogin(username);
    } else {
      setError("Username atau password salah!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-20 p-6 border rounded shadow-lg bg-white"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full p-3 mb-4 border rounded"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-3 mb-6 border rounded"
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
      >
        Login
      </button>
    </form>
  );
}

function Header({ searchTerm, onSearch, onAddClick, onLogout }) {
  return (
    <header className="bg-gradient-to-r from-purple-700 via-pink-700 to-red-700 text-yellow-300 p-8 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col items-center sm:items-start">
        <h1
          className="relative text-6xl font-extrabold font-poppins flex items-center gap-3 mb-8
          text-yellow-400 border-4 border-double border-yellow-500 rounded-3xl shadow-[0_0_15px_5px_rgba(255,255,0,0.7)]
          bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-400 px-8 py-5
          before:absolute before:-inset-1 before:border-2 before:border-yellow-600 before:rounded-3xl before:z-[-1]"
        >
          <span role="img" aria-label="book" className="drop-shadow-lg">
            📖
          </span>{" "}
          Resep Dapur Yoga
        </h1>
        <input
          type="text"
          placeholder="Mau masak apa hari ini..."
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}
          className="w-full sm:w-96 p-4 rounded-xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-yellow-400 transition mb-8 shadow-lg"
        />
        <div className="flex gap-4">
          <button
            onClick={onAddClick}
            className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-10 py-4 rounded-full shadow-xl transition transform hover:scale-110"
          >
            <FaPlus /> Tambah Resep
          </button>
          <button
            onClick={onLogout}
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-4 rounded-full shadow-xl transition transform hover:scale-110"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}

function RecipeCard({ recipe }) {
  return (
    <div className="bg-yellow-100 rounded-3xl shadow-[0_15px_30px_rgba(255,223,0,0.7)] p-8 transform hover:scale-110 transition duration-300 cursor-pointer border-4 border-yellow-400 hover:border-yellow-600">
      {recipe.image && (
        <img
          src={recipe.image}
          alt={recipe.name}
          className="rounded-2xl mb-6 w-full h-52 object-cover shadow-lg border-2 border-yellow-300"
        />
      )}
      <h3 className="text-3xl font-extrabold text-yellow-800 mb-4">{recipe.name}</h3>
      <p className="text-yellow-900 font-semibold whitespace-pre-line">{recipe.ingredients}</p>
      <p className="italic mt-3 text-yellow-700 whitespace-pre-line">{recipe.instructions}</p>
    </div>
  );
}

function RecipeList({ recipes }) {
  if (recipes.length === 0) {
    return (
      <p className="text-center text-yellow-700 mt-20 text-2xl font-semibold">
        Tidak ada resep ditemukan.
      </p>
    );
  }
  return (
    <main className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-8 mt-10">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </main>
  );
}

function ChefImage() {
  return (
    <div className="bg-green-600 p-6 rounded-xl my-10 flex justify-center">
      <img
        src="/chef.png"
        alt="Foto Koki"
        className="rounded-3xl shadow-2xl"
        style={{ width: "80%", maxWidth: "400px", height: "auto", objectFit: "contain" }}
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-gray-900 text-center py-8 mt-20 font-bold tracking-wide shadow-inner">
      <p>&copy; 2025 Resep Dapur Yoga. Semua hak cipta dilindungi.</p>
    </footer>
  );
}

function Home({ recipes, searchTerm, setSearchTerm, onAddClick, onLogout }) {
  const filteredRecipes = recipes.filter((r) =>
    r.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header
        searchTerm={searchTerm}
        onSearch={setSearchTerm}
        onAddClick={onAddClick}
        onLogout={onLogout}
      />
      <ChefImage />
      <CategoryList />
      <RecipeList recipes={filteredRecipes} />
      <Footer />
    </>
  );
}

function AddRecipePage({ onAdd }) {
  const navigate = useNavigate();

  const handleAdd = (recipe) => {
    onAdd(recipe);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-50 flex flex-col p-8">
      <h2 className="text-4xl font-extrabold mb-8 text-yellow-700 text-center drop-shadow-md">
        Tambah Resep Baru
      </h2>
      <AddRecipe onAdd={handleAdd} onClose={() => navigate("/")} />
    </div>
  );
}

function AddRecipe({ onAdd, onClose }) {
  const [form, setForm] = useState({
    name: "",
    ingredients: "",
    instructions: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) {
      alert("Nama resep wajib diisi!");
      return;
    }
    onAdd({ ...form, id: Date.now() });
    setForm({ name: "", ingredients: "", instructions: "", image: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white rounded-2xl p-8 shadow-2xl mt-12"
    >
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Nama Resep"
        className="border border-yellow-400 p-3 rounded-lg w-full mb-5 focus:outline-none focus:ring-4 focus:ring-yellow-300"
        required
      />
      <input
        name="image"
        value={form.image}
        onChange={handleChange}
        placeholder="URL Gambar (contoh: /images/nama-file.jpg)"
        className="border border-yellow-400 p-3 rounded-lg w-full mb-5 focus:outline-none focus:ring-4 focus:ring-yellow-300"
      />
      <textarea
        name="ingredients"
        value={form.ingredients}
        onChange={handleChange}
        placeholder="Bahan-bahan"
        rows={4}
        className="border border-yellow-400 p-3 rounded-lg w-full mb-5 focus:outline-none focus:ring-4 focus:ring-yellow-300"
      />
      <textarea
        name="instructions"
        value={form.instructions}
        onChange={handleChange}
        placeholder="Langkah-langkah"
        rows={5}
        className="border border-yellow-400 p-3 rounded-lg w-full mb-7 focus:outline-none focus:ring-4 focus:ring-yellow-300"
      />
      <div className="flex justify-between">
        <button
          type="button"
          onClick={onClose}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold px-6 py-3 rounded-lg transition"
        >
          Batal
        </button>
        <button
          type="submit"
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-3 rounded-lg transition"
        >
          Simpan
        </button>
      </div>
    </form>
  );
}

export default function App() {
  const [user, setUser] = useState(null);
  const [recipes, setRecipes] = useState(dummyRecipes);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleLogin = (username) => {
    setUser(username);
    navigate("/");
  };

  const handleLogout = () => {
    setUser(null);
    navigate("/login");
  };

  const addNewRecipe = (recipe) => {
    setRecipes((prev) => [...prev, recipe]);
  };

  const handleAddClick = () => {
    navigate("/tambah-resep");
  };

  return (
    <Routes>
      <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
      <Route
        path="/"
        element={
          user ? (
            <Home
              recipes={recipes}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              onAddClick={handleAddClick}
              onLogout={handleLogout}
            />
          ) : (
            <div className="text-center mt-20">
              <p>
                Silakan{" "}
                <button
                  onClick={() => navigate("/login")}
                  className="text-blue-600 underline"
                >
                  login
                </button>{" "}
                terlebih dahulu
              </p>
            </div>
          )
        }
      />
      <Route
        path="/kategori/:categoryId"
        element={<CategoryPage recipes={recipes} />}
      />
      <Route
        path="/tambah-resep"
        element={
          user ? (
            <AddRecipePage onAdd={addNewRecipe} />
          ) : (
            <div className="text-center mt-20">
              <p>
                Silakan{" "}
                <button
                  onClick={() => navigate("/login")}
                  className="text-blue-600 underline"
                >
                  login
                </button>{" "}
                terlebih dahulu
              </p>
            </div>
          )
        }
      />
    </Routes>
  );
}
