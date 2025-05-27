import React from "react";
import { useNavigate } from "react-router-dom";

const kategoriList = [
  "Berkuah",
  "Digoreng",
  "Dikukus",
  "Ditumis",
  "Dikecap",
  "Direbus",
];

export default function KategoriPage() {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Kategori Resep</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {kategoriList.map((kategori) => (
          <li key={kategori}>
            <button
              onClick={() => navigate(`/kategori/${kategori}`)}
              className="w-full text-left bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-6 py-4 rounded shadow transition"
            >
              {kategori}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
