import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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

export default function AddRecipePage({ onAdd }) {
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
