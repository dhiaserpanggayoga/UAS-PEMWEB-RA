import React from "react";
import { useNavigate } from "react-router-dom";

export default function ChefProfilePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-green-400 flex flex-col items-center p-10">
      <h1 className="text-yellow-400 text-5xl font-extrabold mb-10 drop-shadow-lg">
        Biodata Sang Koki Yoga
      </h1>
      <div className="bg-[#4b2e05] rounded-xl p-8 max-w-5xl w-full flex gap-12 shadow-lg">
        {/* Foto koki */}
        <div className="flex-shrink-0">
          <img
            src="/public/koki.png"
            alt="Chef Yoga"
            className="rounded-3xl shadow-2xl"
            style={{ width: "300px", height: "auto", objectFit: "cover" }}
          />
        </div>

        {/* Biodata tabel */}
        <div className="flex-grow overflow-auto max-h-[600px] text-yellow-300">
          <table className="w-full border-collapse text-lg">
            <tbody>
              <tr>
                <td className="border border-yellow-600 px-4 py-2 font-semibold">Nama Lengkap</td>
                <td className="border border-yellow-600 px-4 py-2">Yoga Pratama</td>
              </tr>
              <tr>
                <td className="border border-yellow-600 px-4 py-2 font-semibold">Tempat &amp; Tanggal Lahir</td>
                <td className="border border-yellow-600 px-4 py-2">Jakarta, 15 Mei 1985</td>
              </tr>
              <tr>
                <td className="border border-yellow-600 px-4 py-2 font-semibold">Jenis Kelamin</td>
                <td className="border border-yellow-600 px-4 py-2">Laki-laki</td>
              </tr>
              <tr>
                <td className="border border-yellow-600 px-4 py-2 font-semibold">Alamat Domisili</td>
                <td className="border border-yellow-600 px-4 py-2">Jakarta Selatan</td>
              </tr>
              <tr>
                <td className="border border-yellow-600 px-4 py-2 font-semibold">Nomor Telepon / HP</td>
                <td className="border border-yellow-600 px-4 py-2">+62 812 3456 7890</td>
              </tr>
              <tr>
                <td className="border border-yellow-600 px-4 py-2 font-semibold">Email</td>
                <td className="border border-yellow-600 px-4 py-2">yoga@example.com</td>
              </tr>
              <tr>
                <td className="border border-yellow-600 px-4 py-2 font-semibold">Status Perkawinan</td>
                <td className="border border-yellow-600 px-4 py-2">Menikah</td>
              </tr>
              <tr>
                <td className="border border-yellow-600 px-4 py-2 font-semibold">Kewarganegaraan</td>
                <td className="border border-yellow-600 px-4 py-2">Indonesia</td>
              </tr>
              <tr>
                <td className="border border-yellow-600 px-4 py-2 font-semibold">Tinggi &amp; Berat Badan</td>
                <td className="border border-yellow-600 px-4 py-2">175 cm / 70 kg</td>
              </tr>
              <tr>
                <td className="border border-yellow-600 px-4 py-2 font-semibold">Pendidikan Formal</td>
                <td className="border border-yellow-600 px-4 py-2">Diploma Kuliner, Universitas XYZ</td>
              </tr>
              <tr>
                <td className="border border-yellow-600 px-4 py-2 font-semibold">Nama Sekolah/Kursus Kuliner</td>
                <td className="border border-yellow-600 px-4 py-2">Le Cordon Bleu Jakarta</td>
              </tr>
              <tr>
                <td className="border border-yellow-600 px-4 py-2 font-semibold">Tahun Lulus</td>
                <td className="border border-yellow-600 px-4 py-2">2010</td>
              </tr>
              <tr>
                <td className="border border-yellow-600 px-4 py-2 font-semibold">Sertifikasi Kuliner</td>
                <td className="border border-yellow-600 px-4 py-2">Certified Chef Professional (CCP)</td>
              </tr>
              <tr>
                <td className="border border-yellow-600 px-4 py-2 font-semibold">Keahlian Memasak</td>
                <td className="border border-yellow-600 px-4 py-2">
                  Masakan Indonesia, Masakan Prancis, Teknik plating, Food safety
                </td>
              </tr>
              <tr>
                <td className="border border-yellow-600 px-4 py-2 font-semibold">Bahasa yang Dikuasai</td>
                <td className="border border-yellow-600 px-4 py-2">Indonesia, Inggris, Prancis</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <button
        onClick={() => navigate(-1)}
        className="mt-10 px-6 py-2 bg-yellow-400 rounded-full font-semibold hover:bg-yellow-300 shadow-md transition"
      >
        ← Kembali
      </button>
    </div>
  );
}
