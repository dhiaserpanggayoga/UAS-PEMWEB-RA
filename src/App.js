// src/App.js
import React, { useState } from 'react';
import './App.css';  // Mengimpor file App.css

const App = () => {
  // State untuk kategori yang dipilih
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Daftar kategori dan rekomendasi resep untuk setiap kategori
  const categories = [
    { id: 1, name: 'Makanan Berkuah', description: 'Resep makanan berkuah ala chef yoga' },
    { id: 2, name: 'Tumis', description: 'Resep tumis yang cepat dan mudah' },
    { id: 3, name: 'Makanan Goreng', description: 'Resep makanan goreng yang gurih dan renyah' },
    { id: 4, name: 'Salad', description: 'Resep salad sehat dan segar' },
    { id: 5, name: 'Pizza', description: 'Resep pizza dengan berbagai topping lezat' },
    { id: 6, name: 'Dessert', description: 'Resep makanan penutup yang manis dan menggugah selera' },
    { id: 7, name: 'Sup', description: 'Resep sup hangat yang cocok untuk cuaca dingin' },
    { id: 8, name: 'Sandwich', description: 'Resep sandwich praktis dan nikmat' },
    { id: 9, name: 'Kue', description: 'Resep kue manis dan lezat untuk menemani hari-harimu' },
    { id: 10, name: 'Smoothies', description: 'Resep smoothies sehat dengan berbagai rasa segar' },
  ];

  const recommendations = {
    'Makanan Berkuah': ['Sop Buntut', 'Soto Ayam', 'Mie Kuah'],
    'Tumis': ['Tumis Kangkung', 'Tumis Tahu Tempe', 'Tumis Daging'],
    'Makanan Goreng': ['Nasi Goreng', 'Kentang Goreng', 'Ayam Goreng Crispy'],
    'Salad': ['Salad Buah', 'Caesar Salad', 'Salad Sayur'],
    'Pizza': ['Pizza Margherita', 'Pizza Pepperoni', 'Pizza Veggie'],
    'Dessert': ['Kue Cubir', 'Puding Coklat', 'Es Krim'],
    'Sup': ['Sup Bening', 'Sup Jagung', 'Sup Tom Yam'],
    'Sandwich': ['Sandwich Ayam', 'Grilled Cheese', 'Club Sandwich'],
    'Kue': ['Kue Lapis', 'Brownies', 'Kue Cubir'],
    'Smoothies': ['Smoothies Mangga', 'Smoothies Pisang', 'Smoothies Berry'],
  };

  // Fungsi untuk menangani klik kategori
  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Selamat datang di Dapur Resep Yoga</h1>
        <p>Mari temukan resep masakan bersama chef Yoga.</p>
      </header>

      {/* Menampilkan daftar kategori */}
      <div className="app-content">
        {categories.map((category) => (
          <div className="card" key={category.id}>
            <h3>{category.name}</h3>
            <p>{category.description}</p>
            <button onClick={() => handleCategoryClick(category.name)}>
              Kepoin yuk
            </button>
          </div>
        ))}
      </div>

      {/* Menampilkan rekomendasi makanan untuk kategori yang dipilih */}
      {selectedCategory && (
        <div className="recommendations-container">
          <h2>Rekomendasi {selectedCategory}</h2>
          <ul>
            {recommendations[selectedCategory].map((recipe, index) => (
              <li key={index}>{recipe}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};


export default App;
