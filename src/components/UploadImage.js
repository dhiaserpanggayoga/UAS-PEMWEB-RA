// src/components/UploadImage.js
import React, { useState } from 'react';

const UploadImage = () => {
  const [image, setImage] = useState(null); // Menyimpan gambar yang diunggah

  // Fungsi untuk menangani pemilihan file
  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Mengambil file pertama yang dipilih
    if (file) {
      setImage(URL.createObjectURL(file)); // Mengubah file menjadi URL yang dapat ditampilkan
    }
  };

  return (
    <div className="upload-container text-center py-6">
      <h2 className="text-2xl mb-4">Unggah Foto Anda</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-4 p-2 bg-gray-200 border border-gray-300 rounded"
      />
      {/* Menampilkan gambar jika sudah dipilih */}
      {image && <img src={image} alt="Uploaded" className="mt-4 w-64 h-64 object-cover rounded-lg" />}
    </div>
  );
};

export default UploadImage;
