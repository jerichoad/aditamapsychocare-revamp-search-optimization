'use client';

import Link from 'next/link';
import { MessageCircle, CalendarDays, X } from 'lucide-react';
import { useState } from 'react';

const JENIS_TES = [
  'Bakat Minat',
  'Intelegensi',
  'Tes untuk Instansi',
  'Kepribadian',
];

export default function ContactCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    nama: '',
    tanggal: '',
    jenisTes: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const pesan =
      `Halo Aditama Psychocare, saya ingin melakukan booking layanan:\n\n` +
      `*Nama/Instansi:* ${form.nama}\n` +
      `*Tanggal Konsultasi:* ${new Date(form.tanggal).toLocaleDateString(
        'id-ID',
        { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
      )}\n` +
      `*Jenis Tes:* ${form.jenisTes}\n\n` +
      `Mohon konfirmasinya. Terima kasih!`;

    const url = `https://wa.me/6285190849041?text=${encodeURIComponent(pesan)}`;
    window.open(url, '_blank');
    setIsModalOpen(false);
    setForm({ nama: '', tanggal: '', jenisTes: '' });
  };

  const isValid = form.nama && form.tanggal && form.jenisTes;

  return (
    <>
      <section id="kontak" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-800 rounded-[2.5rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-white opacity-10 blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                Siap Memulai Perjalanan <br className="hidden md:block" />{' '}
                Psikologi Anda?
              </h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                Hubungi tim kami hari ini untuk berdiskusi tentang bagaimana
                kami bisa membantu Anda, organisasi, atau institusi sekolah
                Anda.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Link
                  href="https://wa.me/6285190849041"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-wa text-white rounded-xl font-bold text-lg hover:bg-wa-hover hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={22} />
                  Hubungi via WhatsApp
                </Link>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto px-8 py-4 bg-white/10 border border-white/30 text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm cursor-pointer"
                >
                  <CalendarDays size={22} />
                  Booking Layanan Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{
            backgroundColor: 'rgba(0,0,0,0.55)',
            backdropFilter: 'blur(4px)',
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsModalOpen(false);
          }}
        >
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 relative animate-fade-in">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
              aria-label="Tutup modal"
            >
              <X size={24} />
            </button>

            {/* Header */}
            <div className="mb-6 text-center">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CalendarDays size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900">
                Booking Layanan
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                Isi form berikut dan kami akan konfirmasi via WhatsApp.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Nama/Instansi */}
              <div>
                <label
                  htmlFor="booking-nama"
                  className="block text-sm font-semibold text-gray-700 mb-1.5"
                >
                  Nama / Instansi <span className="text-red-500">*</span>
                </label>
                <input
                  id="booking-nama"
                  name="nama"
                  type="text"
                  required
                  placeholder="Contoh: Budi Santoso / SMA Negeri 1 Surabaya"
                  value={form.nama}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition text-sm"
                />
              </div>

              {/* Tanggal */}
              <div>
                <label
                  htmlFor="booking-tanggal"
                  className="block text-sm font-semibold text-gray-700 mb-1.5"
                >
                  Tanggal Konsultasi <span className="text-red-500">*</span>
                </label>
                <input
                  id="booking-tanggal"
                  name="tanggal"
                  type="date"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  value={form.tanggal}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition text-sm"
                />
              </div>

              {/* Jenis Tes */}
              <div>
                <label
                  htmlFor="booking-jenis"
                  className="block text-sm font-semibold text-gray-700 mb-1.5"
                >
                  Jenis Tes <span className="text-red-500">*</span>
                </label>
                <select
                  id="booking-jenis"
                  name="jenisTes"
                  required
                  value={form.jenisTes}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition text-sm appearance-none bg-white"
                >
                  <option value="" disabled>
                    Pilih jenis tes...
                  </option>
                  {JENIS_TES.map((jenis) => (
                    <option key={jenis} value={jenis}>
                      {jenis}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit */}
              <button
                id="booking-submit"
                type="submit"
                disabled={!isValid}
                className="w-full py-3.5 bg-wa text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-wa-hover transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed active:scale-95 mt-2"
              >
                <MessageCircle size={20} />
                Kirim via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
