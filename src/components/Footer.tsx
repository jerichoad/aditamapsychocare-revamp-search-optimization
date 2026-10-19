import Link from 'next/link';
import Image from 'next/image';
import { Globe, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 justify-items-stretch md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.webp"
                alt="Aditama Psychocare Logo"
                width={40}
                height={40}
                className="w-10 h-auto"
              />
              <span className="font-bold text-2xl text-white">
                Aditama Psychocare
              </span>
            </div>
            <p className="text-slate-400 mb-6 max-w-sm leading-relaxed">
              Mitra terpercaya Anda untuk menemukan arah, makna, dan potensi
              terbaik melalui layanan psikologi profesional.
            </p>
            {/* <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors text-white"
              >
                <Globe size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors text-white"
              >
                <Globe size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors text-white"
              >
                <Globe size={20} />
              </a>
            </div> */}
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 pt-2">
              Tautan Cepat
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="#layanan"
                  className="hover:text-primary transition-colors"
                >
                  Layanan
                </Link>
              </li>
              <li>
                <Link
                  href="#tentang"
                  className="hover:text-primary transition-colors"
                >
                  Tentang Kami
                </Link>
              </li>

              <li>
                <Link
                  href="#kontak"
                  className="hover:text-primary transition-colors"
                >
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 pt-2">
              Layanan Kami
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Psikologi Siswa
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Konsultasi Individu
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Assessment Sekolah
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Assessment Rekrutmen
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 pt-2">
              Hubungi Kami
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary mt-1 shrink-0" />
                <span className="leading-relaxed">
                  Jln. Pagesangan IV. A No. 22 Surabaya, 60233
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary shrink-0" />
                <span>0851-9084-9041</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary shrink-0" />
                <span>halo@aditamapsychocare.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legalitas Usaha */}
        <div className="pt-10 pb-20 border-t border-slate-800/50">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="shrink-0 flex items-center gap-2 mt-0.5">
              <ShieldCheck size={20} className="text-primary" />
              <span className="text-white font-semibold text-sm tracking-wide uppercase whitespace-nowrap">
                Legalitas Usaha
              </span>
            </div>
            <div className="flex-1 border-l border-slate-700 pl-4">
              <p className="text-slate-400 text-xs leading-relaxed mb-3">
                <span className="text-slate-200 font-medium">
                  Layanan Psikologi Terpadu
                </span>{' '}
                — Psikotes, Konseling &amp; Terapi, Konsultasi Masalah Anak,
                Remaja, Dewasa, Keluarga, Seleksi PPDB, Seleksi Karyawan,
                Promosi Jabatan.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-1.5 text-xs text-slate-500">
                <div>
                  <span className="text-slate-400 font-medium">SIIP</span>
                  <span className="ml-2">20201072-2022-1-2812</span>
                </div>
                <div>
                  <span className="text-slate-400 font-medium">STR</span>
                  <span className="ml-2">OE0001608315433</span>
                </div>
                <div>
                  <span className="text-slate-400 font-medium">
                    Badan Hukum
                  </span>
                  <span className="ml-2">H. Achmad Salis, SH</span>
                </div>
                <div>
                  <span className="text-slate-400 font-medium">
                    Akta Notaris
                  </span>
                  <span className="ml-2">
                    No. 18/06/2004 / No. C-1029.HT.0301TH.2002
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 font-medium">
                    SK Menhukham RI
                  </span>
                  <span className="ml-2">
                    No. C-1029.HT.0301 TH.2002, Tgl. 14 Agustus 2002
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 font-medium">Alamat</span>
                  <span className="ml-2">
                    Jl. Pagesangan IV.A No. 22, Surabaya 60233 — Telp.
                    085190849041
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>
            Hak Cipta &copy; 2026 Aditama Psychocare. Seluruh Hak Dilindungi.
          </p>

          <div className="flex gap-6">
            <p>
              Design Web by{' '}
              <a
                href="https://jerichoad.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                @jerichoad
              </a>
            </p>
            {/* <Link href="#" className="hover:text-white transition-colors">
              Kebijakan Privasi
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Syarat & Ketentuan
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
