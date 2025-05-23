import React from 'react';

export default function SearchBar({ value, onChange }) {
  return (
    <div className="max-w-md mx-auto p-4">
      <input
        type="text"
        placeholder="Cari resep berdasarkan judul..."
        value={value}
        onChange={e => onChange(e.target.value)}
        className="border p-2 rounded w-full"
      />
    </div>
  );
}
