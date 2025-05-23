import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  { id: "berkuah", label: "Masakan Berkuah", image: "/images/berkuah.jpg" },
  { id: "ditumis", label: "Masakan Ditumis", image: "/images/ditumis.jpg" },
  { id: "dikecap", label: "Masakan di Kecap", image: "/images/di-kecap.jpg" },
  { id: "digulai", label: "Masakan di Gulai", image: "/images/di-gulai.jpg" },
  { id: "digoreng", label: "Masakan Digoreng", image: "/images/di-goreng.jpg" },
];

export default function CategoryList() {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto px-8 my-10">
      <h2 className="text-3xl font-bold text-yellow-800 mb-6 text-center">Kategori Masakan</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="cursor-pointer rounded-xl shadow-lg overflow-hidden border-2 border-yellow-400 hover:border-yellow-600 transition"
            onClick={() => navigate(`/kategori/${cat.id}`)}
          >
            <img
              src={cat.image}
              alt={cat.label}
              className="w-full h-32 object-cover"
              loading="lazy"
            />
            <div className="bg-yellow-100 text-yellow-900 font-semibold p-3 text-center">
              {cat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
