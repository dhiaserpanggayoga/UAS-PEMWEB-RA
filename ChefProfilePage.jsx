import React from "react";
import { useNavigate } from "react-router-dom";

export default function ChefProfilePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-green-400 flex flex-col items-center py-10 px-4">
      <h1 className="text-yellow-300 text-4xl font-extrabold mb-10 drop-shadow-lg">
        Biodata Sang Koki Yoga
      </h1>

      <div className="flex flex-col md:flex-row gap-12 justify-between items-start max-w-6xl w-full bg-[#4b2e05] p-8 rounded-xl shadow-lg">
        {/* Foto Koki di kiri */}
        <div className="flex-shrink-0 w-80 rounded-xl overflow-hidden shadow-2xl">
          <img
            src="/public/yoga.pn"
            alt="Chef Yoga"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>

        {/* Biodata dalam tabel di kanan */}
        <div className="flex-grow max-w-xl overflow-auto">
          <table className="w-full text-yellow-300 border-collapse">
            <tbody>
              <tr>
                <td className="border border-yellow-600 px-4 py-2 font-bold">Nama Lengkap</td>
                <td className="border border-yellow-600 px-4 py-2">Yoga Pratama</td>
              </tr>
              <tr>
                <td className="border border-yellow-600 px-4 py-2 font-bold">Tempat &amp; Tanggal Lahir</td>
                <td className="border border-yellow-600 px-4 py-2">Jakarta, 15 Mei 1985</td>
              </tr>
              <tr>
                <td className="border border-yellow-600 px-4 py-2 font-bold">Jenis Kelamin</td>
                <td className="border border-yellow-600 px-4 py-2">Laki-laki</td>
              </tr>
              <tr>
                <td className="border border-yellow-600 px-4 py-2 font-bold">Alamat Domisili</td>
                <td className="border border-yellow-600 px-4 py-2">Jakarta Selatan</td>
              </tr>
              <tr>
                <td className="border border-yellow-600 px-4 py-2 font-bold">Nomor Telepon / HP</td>
                <td className="border border-yellow-600 px-4 py-2">+62 812 3456 7890</td>
              </tr>
              <tr>
                <td className="border border-yellow-600 px-4 py-2 font-bold">Email</td>
                <td className="border border-yellow-600 px-4 py-2">yoga@example.com</td>
              </tr>
              <tr>
                <td className="border border-yellow-600 px-4 py-2 font-bold">Status Perkawinan</td>
                <td className="border border-yellow-600 px-4 py-2">Menikah</td>
              </tr>
              <tr>
                <td className="border border-yellow-600 px-4 py-2 font-bold">Kewarganegaraan</td>
                <td className="border border-yellow-600 px-4 py-2">Indonesia</td>
              </tr>
              <tr>
                <td className="border border-yellow-600 px-4 py-2 font-bold">Tinggi &amp; Berat Badan</td>
                <td className="border border-yellow-600 px-4 py-2">175 cm / 70 kg</td>
              </tr>
              <tr>
                <td className="border border-yellow-600 px-4 py-2 font-bold">Pendidikan Formal</td>
                <td className="border border-yellow-600 px-4 py-2">Diploma Kuliner, Universitas XYZ</td>
              </tr>
              <tr>
                <td className="border border-yellow-600 px-4 py-2 font-bold">Nama Sekolah/Kursus Kuliner</td>
                <td className="border border-yellow-600 px-4 py-2">Le Cordon Bleu Jakarta</td>
              </tr>
              <tr>
                <td className="border border-yellow-600 px-4 py-2 font-bold">Tahun Lulus</td>
                <td className="border border-yellow-600 px-4 py-2">2010</td>
              </tr>
              <tr>
                <td className="border border-yellow-600 px-4 py-2 font-bold">Sertifikasi Kuliner</td>
                <td className="border border-yellow-600 px-4 py-2">Certified Chef Professional (CCP)</td>
              </tr>
              <tr>
                <td className="border border-yellow-600 px-4 py-2 font-bold">Keahlian Memasak</td>
                <td className="border border-yellow-600 px-4 py-2">
                  Masakan Indonesia, Masakan Prancis, Teknik plating, Food safety
                </td>
              </tr>
              <tr>
                <td className="border border-yellow-600 px-4 py-2 font-bold">Bahasa yang Dikuasai</td>
                <td className="border border-yellow-600 px-4 py-2">Indonesia, Inggris, Prancis</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Tombol Kembali di bawah konten */}
      <button
        onClick={() => navigate(-1)}
        className="mt-8 px-6 py-2 bg-yellow-400 rounded-full font-semibold hover:bg-yellow-300 shadow-md transition"
      >
        ← Kembali
      </button>
    </div>
  );
}
