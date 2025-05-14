import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditRecipe() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: '',
    category: '',
    ingredients: '',
    steps: '',
    image: ''
  });

  useEffect(() => {
    const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    const target = recipes.find((r) => r.id === id);
    if (target) {
      setForm(target);
    } else {
      navigate('/'); // kalau tidak ditemukan, balik ke halaman utama
    }
  }, [id, navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    const updated = recipes.map((r) => (r.id === id ? form : r));
    localStorage.setItem('recipes', JSON.stringify(updated));
    navigate('/');
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">✏️ Edit Resep</h2>
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
          placeholder="Kategori"
          className="border p-2 rounded"
          value={form.category}
          onChange={handleChange}
          required
        />
        <textarea
          name="ingredients"
          placeholder="Bahan-bahan"
          className="border p-2 rounded"
          rows="3"
          value={form.ingredients}
          onChange={handleChange}
          required
        />
        <textarea
          name="steps"
          placeholder="Langkah-langkah memasak"
          className="border p-2 rounded"
          rows="4"
          value={form.steps}
          onChange={handleChange}
          required
        />
        <input
          type="url"
          name="image"
          placeholder="URL Gambar"
          className="border p-2 rounded"
          value={form.image}
          onChange={handleChange}
        />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Simpan Perubahan
        </button>
      </form>
    </div>
  );
}
