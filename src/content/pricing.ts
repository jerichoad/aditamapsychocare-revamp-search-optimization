import type { PricingCategory } from '@/types/pricing';

export const pricing: PricingCategory[] = [
  {
    id: 'sekolah',
    label: 'Sekolah',
    intro:
      'Paket asesmen untuk siswa dalam jumlah massal. Harga per peserta, sudah termasuk pelaksanaan tes dan laporan.',
    packages: [
      {
        title: 'Package A',
        price: 'Rp 75.000',
        per: '/pax',
        description:
          'Paket asesmen dasar untuk siswa: pemetaan bakat, minat, dan gaya belajar.',
        features: [
          'Observasi',
          'Wawancara',
          'Tes Bakat Minat',
          'Pemetaan Kelas',
          'Pemetaan Gaya Belajar Siswa',
          'Tes IQ',
        ],
        buttonText: 'Pilih Package A',
        tone: 'violet',
        popular: false,
      },
      {
        title: 'Package B',
        price: 'Rp 80.000',
        per: '/pax',
        description:
          'Paket asesmen lengkap untuk siswa: pemetaan bakat, minat, gaya belajar, sosialisasi, dan tes IQ.',
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
        tone: 'primary',
        popular: true,
      },
      {
        title: 'Personal Session',
        price: 'Rp 350.000',
        per: '/pax',
        description:
          'Untuk siswa atau individu yang butuh konsultasi karier, penjurusan, dan konseling mendalam.',
        features: [
          'Tes Potensi Kognitif',
          'Laporan Psikogram Lengkap',
          'Rekomendasi Karir/Jurusan',
          'Bebas Pilih Jadwal',
        ],
        buttonText: 'Pilih Personal',
        tone: 'light',
        popular: false,
      },
    ],
  },
  {
    id: 'corporate',
    label: 'Corporate',
    intro:
      'Layanan personal untuk perusahaan. Biaya menyesuaikan volume dan kebutuhan posisi.',
    packages: [
      {
        title: 'Personal Session',
        price: 'Penawaran via WhatsApp',
        per: '',
        description:
          'Pengukuran kemampuan kognitif, kepribadian, sikap kerja, serta konsentrasi dan ketelitian kerja untuk level staf hingga manajerial.',
        features: [
          'Tes Potensi Kognitif',
          'Laporan Psikogram Lengkap',
          'Bebas Pilih Jadwal',
        ],
        buttonText: 'Tanya via WhatsApp',
        tone: 'light',
        popular: false,
      },
    ],
  },
];
