import type { CompanyProfile } from '@/types/company';

export const company: CompanyProfile = {
  legalName: 'Aditama Psychocare',
  tradeName: 'Aditama Psychocare',
  foundedYear: 2002,
  experienceLabel: 'lebih dari dua dekade',
  description:
    'Aditama Psychocare adalah penyedia layanan psikologi profesional di Surabaya yang melayani siswa, individu, sekolah, dan perusahaan di Jawa Timur serta Jawa Tengah. Layanan mencakup tes potensi dan bakat siswa, assessment sekolah, konsultasi psikologi individu, serta assessment rekrutmen dan pemetaan kompetensi karyawan.',
  address: {
    street: 'Jl. Pagesangan IV.A No. 22',
    city: 'Surabaya',
    postalCode: '60233',
    province: 'Jawa Timur',
    country: 'ID',
  },
  contact: {
    phoneDisplay: '0851-9084-9041',
    phoneInternational: '+62 851-9084-9041',
    whatsappUrl: 'https://wa.me/6285190849041',
    email: 'halo@aditamapsychocare.com',
    hours: 'Senin–Jumat, 08.00–17.00 WIB (jadwal sesi dikonfirmasi via WhatsApp)',
  },
  serviceArea: ['Surabaya', 'Jawa Timur', 'Jawa Tengah'],
  services: [
    {
      slug: 'tes-potensi-siswa',
      name: 'Tes Potensi Siswa & Assessment Sekolah',
      shortDescription:
        'Pemetaan minat, bakat, gaya belajar, dan potensi kognitif siswa, termasuk pemetaan profil psikologis massal untuk sekolah.',
      url: '/layanan/tes-potensi-siswa',
      audience: 'Siswa, orang tua, dan sekolah',
      priceNote: 'Mulai Rp75.000 per peserta untuk paket asesmen sekolah',
    },
    {
      slug: 'konsultasi-psikologi-individu',
      name: 'Konsultasi Psikologi Individu',
      shortDescription:
        'Pendampingan profesional untuk masalah emosional, pengembangan diri, penjurusan, dan perencanaan karier.',
      url: '/layanan/konsultasi-psikologi-individu',
      audience: 'Individu, siswa, dan profesional',
      priceNote: 'Rp350.000 per sesi personal (termasuk laporan psikogram)',
    },
    {
      slug: 'assessment-rekrutmen',
      name: 'Assessment Rekrutmen & Pemetaan Kompetensi',
      shortDescription:
        'Seleksi dan pemetaan kompetensi karyawan dari level staf hingga manajerial untuk perusahaan dan instansi.',
      url: '/layanan/assessment-rekrutmen',
      audience: 'Perusahaan, instansi pemerintah, dan lembaga',
      priceNote: 'Penawaran menyesuaikan volume dan kebutuhan instansi',
    },
  ],
  credentials: [
    {
      name: 'SIIP (Surat Izin Praktik Psikolog)',
      issuer: 'Kementerian Kesehatan Republik Indonesia',
      detail: '20201072-2022-1-2812',
    },
    {
      name: 'STR (Surat Tanda Registrasi)',
      issuer: 'Konsil Tenaga Psikologi Klinis Indonesia',
      detail: 'OE0001608315433',
    },
    {
      name: 'Akta Notaris Pendirian',
      issuer: 'Notaris H. Achmad Salis, S.H.',
      detail: 'No. 18/06/2004 / No. C-1029.HT.0301.TH.2002',
      year: '2002',
    },
    {
      name: 'SK Menteri Kehakiman dan HAM RI',
      issuer: 'Departemen Kehakiman dan HAM Republik Indonesia',
      detail: 'No. C-1029.HT.0301.TH.2002',
      year: '2002',
    },
  ],
  officialProfiles: [
    { label: 'WhatsApp Resmi', url: 'https://wa.me/6285190849041' },
    { label: 'Email Resmi', url: 'mailto:halo@aditamapsychocare.com' },
  ],
  canonicalUrl: 'https://aditamapsychocare.com',
  lastUpdated: '2026-01-15',
};

export function yearsOfExperience(): number {
  return new Date().getFullYear() - company.foundedYear;
}

export const formattedAddress = [
  company.address.street,
  `${company.address.city} ${company.address.postalCode}`,
].join(', ');
