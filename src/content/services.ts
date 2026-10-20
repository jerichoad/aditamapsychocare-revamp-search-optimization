import type { ServiceContent } from '@/types/services';

export const services: ServiceContent[] = [
  {
    slug: 'tes-potensi-siswa',
    name: 'Tes Potensi Siswa & Assessment Sekolah',
    tagline:
      'Pemetaan minat, bakat, dan potensi kognitif siswa untuk sekolah di Jawa Timur dan Jawa Tengah.',
    directAnswer:
      'Tes potensi siswa di Aditama Psychocare adalah asesmen psikometri untuk memetakan minat, bakat, gaya belajar, dan kemampuan kognitif siswa. Hasilnya disajikan dalam laporan tertulis beserta rekomendasi penjurusan. Layanan ini juga mencakup pemetaan profil psikologis massal satu angkatan untuk kebutuhan sekolah.',
    details: [
      'Aditama Psychocare menggunakan alat tes psikologi yang terstandar untuk mengukur kemampuan kognitif (termasuk tes IQ), bakat-minat, pemetaan kelas, dan gaya belajar siswa.',
      'Paket asesmen sekolah tersedia dalam tiga tingkatan: Paket A untuk pemetaan dasar, Paket B yang ditambah sosialisasi hasil, dan Personal Session untuk pendalaman konsultasi karier satu per satu.',
      'Pelaksanaan asesmen massal dilakukan di sekolah dengan pengawasan psikolog dan asisten, lalu hasilnya dibahas bersama pihak sekolah sesuai kesepakatan.',
    ],
    includes: [
      'Observasi dan wawancara awal',
      'Tes bakat-minat dan tes IQ',
      'Pemetaan kelas dan gaya belajar siswa',
      'Laporan tertulis per peserta',
      'Sosialisasi hasil untuk Paket B',
      'Rekomendasi penjurusan dan karier',
    ],
    steps: [
      {
        title: 'Hubungi tim melalui WhatsApp',
        body: 'Sampaikan kebutuhan sekolah: jenjang, jumlah siswa, dan tujuan asesmen agar paket yang tepat dapat direkomendasikan.',
      },
      {
        title: 'Terima penawaran dan jadwal',
        body: 'Tim menyusun penawaran biaya, susunan alat tes, jumlah pengawas, dan jadwal pelaksanaan sesuai kalender akademik.',
      },
      {
        title: 'Laksanakan asesmen di sekolah',
        body: 'Siswa mengikuti rangkaian tes dengan pengawasan psikolog. Sekolah menyiapkan ruangan dan daftar hadir peserta.',
      },
      {
        title: 'Terima laporan dan sosialisasi',
        body: 'Laporan psikogram diserahkan sesuai tenggat yang disepakati, lalu hasil dibahas melalui sesi sosialisasi untuk Paket B.',
      },
    ],
    audience: 'Siswa, orang tua, dan sekolah',
    priceNote:
      'Paket A Rp75.000 per peserta, Paket B Rp80.000 per peserta, Personal Session Rp350.000 per peserta.',
    updatedAt: '2026-01-15',
  },
  {
    slug: 'konsultasi-psikologi-individu',
    name: 'Konsultasi Psikologi Individu',
    tagline:
      'Pendampingan profesional untuk persoalan emosional, karier, dan pengembangan diri.',
    directAnswer:
      'Konsultasi psikologi individu di Aditama Psychocare adalah sesi pendampingan bersama psikolog untuk memahami persoalan emosional, konflik, pilihan karier, atau rencana pengembangan diri. Sesi personal mencakup tes potensi kognitif, laporan psikogram lengkap, rekomendasi karier atau jurusan, dan kebebasan memilih jadwal.',
    details: [
      'Konsultasi dimulai dari wawancara kebutuhan untuk memetakan persoalan, dilanjutkan pengukuran bila diperlukan, lalu pembahasan hasil dalam sesi privat.',
      'Sesi tersedia secara tatap muka di Surabaya maupun daring melalui video call untuk klien di luar wilayah layanan.',
      'Seluruh isi konsultasi bersifat rahasia sesuai kode etik psikologi dan hanya disampaikan kepada klien yang bersangkutan.',
    ],
    includes: [
      'Tes potensi kognitif',
      'Laporan psikogram lengkap',
      'Rekomendasi karier atau jurusan',
      'Bebas memilih jadwal sesi',
      'Opsi sesi tatap muka atau daring',
    ],
    steps: [
      {
        title: 'Booking jadwal melalui formulir atau WhatsApp',
        body: 'Isi nama, tanggal yang diinginkan, dan jenis layanan agar tim dapat menyiapkan psikolog yang sesuai.',
      },
      {
        title: 'Jalani sesi asesmen dan wawancara',
        body: 'Sesi mencakup pengukuran potensi kognitif dan wawancara kebutuhan sesuai topik yang dibawa klien.',
      },
      {
        title: 'Terima laporan psikogram',
        body: 'Laporan tertulis disusun oleh psikolog dan diserahkan pada sesi pembahasan hasil.',
      },
      {
        title: 'Ikuti sesi konsultasi hasil',
        body: 'Psikolog menjelaskan hasil, menjawab pertanyaan, dan menyusun rekomendasi tindak lanjut bersama klien.',
      },
    ],
    audience: 'Individu, siswa, dan profesional',
    priceNote:
      'Rp350.000 per peserta untuk Personal Session, termasuk laporan psikogram lengkap.',
    updatedAt: '2026-01-15',
  },
  {
    slug: 'assessment-rekrutmen',
    name: 'Assessment Rekrutmen & Pemetaan Kompetensi',
    tagline:
      'Seleksi dan pemetaan kompetensi karyawan dari level staf hingga manajerial.',
    directAnswer:
      'Assessment rekrutmen di Aditama Psychocare adalah layanan seleksi dan pemetaan kompetensi karyawan untuk perusahaan dan instansi. Pengukuran mencakup kemampuan kognitif, kepribadian, sikap kerja, serta konsentrasi dan ketelitian kerja. Hasilnya berupa laporan psikogram per kandidat beserta rekomendasi kesesuaian terhadap posisi yang dilamar.',
    details: [
      'Cakupan asesmen disesuaikan dengan jenjang posisi, mulai dari level staf operasional hingga manajerial.',
      'Selain seleksi penerimaan karyawan baru, layanan ini juga digunakan untuk promosi jabatan dan pemetaan kebutuhan pengembangan karyawan.',
      'Penawaran biaya disusun berdasarkan jumlah peserta, jumlah posisi, dan kedalaman alat tes yang dipilih.',
    ],
    includes: [
      'Tes potensi kognitif',
      'Pengukuran kepribadian dan sikap kerja',
      'Pengukuran konsentrasi dan ketelitian',
      'Laporan psikogram lengkap per kandidat',
      'Rekomendasi kesesuaian terhadap posisi',
    ],
    steps: [
      {
        title: 'Sampaikan kebutuhan posisi',
        body: 'HRD menyampaikan jumlah kandidat, deskripsi posisi, dan kompetensi yang diutamakan.',
      },
      {
        title: 'Terima desain asesmen dan penawaran',
        body: 'Tim menyusun susunan alat tes, jadwal batch, dan penawaran biaya sesuai kebutuhan.',
      },
      {
        title: 'Laksanakan asesmen kandidat',
        body: 'Kandidat mengikuti rangkaian tes dengan pengawasan psikolog, di lokasi perusahaan atau kantor Aditama Psychocare.',
      },
      {
        title: 'Terima laporan dan rekomendasi',
        body: 'Laporan psikogram per kandidat beserta rekomendasi kelolosan diserahkan sesuai tenggat yang disepakati.',
      },
    ],
    audience: 'Perusahaan, instansi pemerintah, dan lembaga',
    priceNote:
      'Penawaran biaya menyesuaikan volume peserta dan kebutuhan posisi; hubungi tim untuk penawaran resmi.',
    updatedAt: '2026-01-15',
  },
];

export function getService(slug: string): ServiceContent | undefined {
  return services.find((s) => s.slug === slug);
}

export const serviceSlugs = services.map((s) => s.slug);
