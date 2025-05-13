// src/pages/Home.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategories } from '../redux/slices/categorySlice';
import CategoryCard from '../components/CategoryCard';

const Home = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    const dummyCategories = [
      { id: 1, name: "Makanan Berkuah", description: "Resep makanan berkuah" },
      { id: 2, name: "Tumis", description: "Resep makanan yang ditumis" },
      { id: 3, name: "Makanan Goreng", description: "Resep makanan yang digoreng" },
      { id: 4, name: "Salad", description: "Resep salad sehat dan segar" },
      { id: 5, name: "Makanan Penutup", description: "Resep untuk makanan penutup (dessert)" },
      { id: 6, name: "Sup", description: "Resep sup hangat yang lezat" },
      { id: 7, name: "Pizza", description: "Resep pizza dengan topping pilihan" },
      { id: 8, name: "Pasta", description: "Resep pasta dengan saus spesial" },
      { id: 9, name: "Smoothies", description: "Resep smoothies sehat dan segar" },
      { id: 10, name: "Nasi Goreng", description: "Resep nasi goreng spesial" },
      { id: 11, name: "Kue", description: "Resep berbagai macam kue lezat" },
      { id: 12, name: "Sandwich", description: "Resep sandwich yang mudah dan cepat" },
    ];

    dispatch(setCategories(dummyCategories));  // Dispatch kategori dummy ke Redux
  }, [dispatch]);

  return (
    <div className="bg-gradient-to-r from-gray-700 via-gray-800 to-indigo-900 min-h-screen py-12">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header dengan gambar koki */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="text-center md:text-left">
            <h1 className="text-6xl font-extrabold text-white mb-4 animate__animated animate__fadeIn animate__delay-1s">
              Selamat datang di Dapur Resep Yoga
            </h1>
            <p className="text-lg text-white opacity-80">Mari temukan resep masakan bersama chef Yoga.</p>
          </div>
          <div className="mt-6 md:mt-0">
            <img 
              src="https://www.example.com/koki.jpg" 
              alt="Koki" 
              className="rounded-full w-48 h-48 object-cover shadow-lg" 
            />
          </div>
        </div>

        <h2 className="text-4xl font-semibold text-center text-gray-200 mb-12">Kategori Resep</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {categories.length > 0 ? (
            categories.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))
          ) : (
            <p className="text-center text-gray-400">Tidak ada kategori ditemukan.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
