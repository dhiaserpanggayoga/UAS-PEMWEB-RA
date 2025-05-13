// src/pages/CategoryDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';  // Mengimpor useParams untuk mendapatkan parameter dari URL

const CategoryDetail = () => {
  const { categoryName } = useParams();  // Mengambil parameter kategori dari URL

  // Daftar rekomendasi berdasarkan kategori
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

  return (
    <div className="category-detail-container">
      <h2>Rekomendasi {categoryName}</h2>
      <ul>
        {recommendations[categoryName]?.map((recipe, index) => (
          <li key={index}>{recipe}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryDetail;
