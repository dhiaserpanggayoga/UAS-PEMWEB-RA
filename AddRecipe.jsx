import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

export default function AddRecipe() {
  const [form, setForm] = useState({
    title: '',
    category: '',
    ingredients: '',
    steps: '',
    image: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = { ...form, id: uuidv4() };

    const saved = JSON.parse(localStorage.getItem('recipes')) || [];
    saved.push(newRecipe);
    localStorage.setItem('recipes', JSON.stringify(saved));

    navigate('/');
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">📝 Tambah Resep Baru</h2>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input
          type="text"
          name="title"
          placeholder="Judul Resep"
          className="border p-2 rounded"
          value={form.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Kategori (contoh: Sarapan, Camilan)"
          className="border p-2 rounded"
          value={form.category}
          onChange={handleChange}
          required
        />
        <textarea
          name="ingredients"
          placeholder="Bahan-bahan"
          rows="3"
          className="border p-2 rounded"
          value={form.ingredients}
          onChange={handleChange}
          required
        />
        <textarea
          name="steps"
          placeholder="Langkah-langkah memasak"
          rows="4"
          className="border p-2 rounded"
          value={form.steps}
          onChange={handleChange}
          required
        />
        <input
          type="url"
          name="image"
          placeholder="URL Gambar (opsional)"
          className="border p-2 rounded"
          value={form.image}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Simpan Resep
        </button>
      </form>
    </div>
  );
}
