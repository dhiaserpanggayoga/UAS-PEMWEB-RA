import React, { useState } from 'react';

export default function AddRecipe({ onAdd }) {
  const [form, setForm] = useState({
    name: '',
    ingredients: '',
    instructions: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) {
      alert('Nama resep wajib diisi!');
      return;
    }
    onAdd(form);
    setForm({ name: '', ingredients: '', instructions: '', image: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Tambah Resep</h2>
      <input
        type="text"
        name="name"
        placeholder="Nama Resep"
        value={form.name}
        onChange={handleChange}
        className="border p-2 rounded w-full"
        required
      />
      <textarea
        name="ingredients"
        placeholder="Bahan-bahan"
        value={form.ingredients}
        onChange={handleChange}
        className="border p-2 rounded w-full"
        rows={3}
      />
      <textarea
        name="instructions"
        placeholder="Langkah-langkah"
        value={form.instructions}
        onChange={handleChange}
        className="border p-2 rounded w-full"
        rows={4}
      />
      <input
        type="text"
        name="image"
        placeholder="URL Gambar (Opsional)"
        value={form.image}
        onChange={handleChange}
        className="border p-2 rounded w-full"
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
      >
        Simpan Resep
      </button>
    </form>
  );
}
