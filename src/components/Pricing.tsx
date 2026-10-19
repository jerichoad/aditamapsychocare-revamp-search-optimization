'use client';

import { Check } from 'lucide-react';
import { useState } from 'react';

const categories = {
  sekolah: {
    label: 'Sekolah',
    packages: [
      {
        title: 'Package A',
        price: 'Rp 75.000',
        per: '/pax',
        description:
          'Paket asesmen dasar untuk siswa — mencakup pemetaan bakat, minat, dan gaya belajar.',
        features: [
          'Observasi',
          'Wawancara',
          'Tes Bakat Minat',
          'Pemetaan Kelas',
          'Pemetaan Gaya Belajar Siswa',
          'Tes IQ',
        ],
        buttonText: 'Pilih Package A',
        bgClass: 'bg-violet-600',
        borderClass: 'border-violet-600',
        headerClasses: 'text-white',
        isPopular: false,
        isDark: true,
        btnClass: 'bg-white text-violet-700 hover:bg-gray-50',
      },
      {
        title: 'Package B',
        price: 'Rp 80.000',
        per: '/pax',
        description:
          'Paket asesmen lengkap untuk siswa — mencakup pemetaan bakat, minat, gaya belajar, sosialisasi, dan tes IQ.',
        features: [
          'Observasi',
          'Wawancara',
          'Tes Bakat Minat',
          'Pemetaan Kelas',
          'Pemetaan Gaya Belajar Siswa',
          'Tes IQ',
          'Sosialisasi',
        ],
        buttonText: 'Pilih Package B',
        bgClass: 'bg-primary',
        borderClass: 'border-primary',
        headerClasses: 'text-white',
        isPopular: true,
        isDark: true,
        btnClass: 'bg-white/10 text-white hover:bg-white/20',
      },
      {
        title: 'Personal Session',
        price: 'Rp 350.000',
        per: '/pax',
        description:
          'Untuk siswa/individu yang butuh konsultasi karir, penjurusan, dan konseling mendalam.',
        features: [
          'Tes Potensi Kognitif',
          'Laporan Psikogram Lengkap',
          'Rekomendasi Karir/Jurusan',
          'Bebas Pilih Jadwal',
        ],
        buttonText: 'Pilih Personal',
        bgClass: 'bg-white',
        borderClass: 'border-gray-200',
        headerClasses: 'text-gray-900',
        isPopular: false,
        isDark: false,
        btnClass: 'bg-blue-50 text-primary hover:bg-blue-100',
      },
    ],
  },
  corporate: {
    label: 'Corporate',
    packages: [
      {
        title: 'Personal Session',
        price: 'Pricelist Ask By Whatsapp',
        per: '',
        description:
          'Memenuhi kebutuhan perusahaan untuk mengukur Kemampuan Kognitif, Kepribadian, Sikap Kerja, Serta Konsentrasi dan Ketelitian Kerja anda Dari Level Staff Hingga Managerial dengan memberikan layanan terbaik dan terpadu sesuai dengan jargon aditama “Serve With Attitude”.',
        features: [
          'Tes Potensi Kognitif',
          'Laporan Psikogram Lengkap',
          'Bebas Pilih Jadwal',
        ],
        buttonText: 'Tanya via WhatsApp',
        bgClass: 'bg-white',
        borderClass: 'border-gray-200',
        headerClasses: 'text-gray-900',
        isPopular: false,
        isDark: false,
        btnClass: 'bg-blue-50 text-primary hover:bg-blue-100',
      },
    ],
  },
};

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<'sekolah' | 'corporate'>(
    'sekolah'
  );
  const { packages } = categories[activeTab];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Paket Layanan
          </h2>
          <p className="text-lg text-gray-600">
            Pilih paket yang paling sesuai dengan kebutuhan Anda. Hubungi kami
            jika butuh kustomisasi format.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white border border-gray-200 rounded-2xl p-1.5 shadow-sm gap-1">
            {(Object.keys(categories) as Array<keyof typeof categories>).map(
              (key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-7 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer ${
                    activeTab === key
                      ? 'bg-primary text-white shadow-md'
                      : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  {categories[key].label}
                </button>
              )
            )}
          </div>
        </div>

        {/* Package Cards */}
        <div
          className={`grid grid-cols-1 gap-8 ${
            packages.length === 1
              ? 'max-w-md mx-auto'
              : packages.length === 2
              ? 'md:grid-cols-2 max-w-3xl mx-auto'
              : 'md:grid-cols-3'
          }`}
        >
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col p-8 rounded-3xl border shadow-sm transition-transform hover:-translate-y-2 duration-300 ${pkg.bgClass} ${pkg.borderClass}`}
            >
              {pkg.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-bold shadow-md">
                  Paling Diminati
                </div>
              )}

              <div className={`mb-8 ${pkg.headerClasses}`}>
                <h3 className="text-2xl font-bold mb-4">{pkg.title}</h3>
                <div className="flex items-baseline mb-4 flex-wrap gap-x-2">
                  <span
                    className={`font-extrabold ${
                      pkg.per ? 'text-4xl' : 'text-xl'
                    }`}
                  >
                    {pkg.price}
                  </span>
                  {pkg.per && (
                    <span
                      className={`text-lg ${
                        pkg.isDark ? 'text-white/80' : 'text-gray-500'
                      }`}
                    >
                      {pkg.per}
                    </span>
                  )}
                </div>
                <p
                  className={`${
                    pkg.isDark ? 'text-white/80' : 'text-gray-600'
                  }`}
                >
                  {pkg.description}
                </p>
              </div>

              <div className="flex-grow mb-8">
                <ul className="space-y-4">
                  {pkg.features.map((feature, fIdx) => (
                    <li
                      key={fIdx}
                      className={`flex items-start gap-3 ${pkg.headerClasses}`}
                    >
                      <Check size={20} className="shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={`https://wa.me/6285190849041?text=${encodeURIComponent(
                  `Halo Aditama Psychocare, saya tertarik dengan layanan ${pkg.title} untuk kategori ${categories[activeTab].label}. Mohon informasi lebih lanjut.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center w-full py-3.5 px-6 rounded-xl font-bold transition-colors cursor-pointer ${pkg.btnClass}`}
              >
                {pkg.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
