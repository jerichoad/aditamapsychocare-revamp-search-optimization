import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { company, yearsOfExperience } from '@/content/company';

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden glow-effect"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-primary font-medium text-sm mb-8 border border-blue-100 shadow-sm">
          <span
            className="w-2 h-2 rounded-full bg-primary animate-pulse motion-reduce:animate-none"
            aria-hidden="true"
          />
          Layanan Psikologi Terpercaya di Jawa Timur &amp; Tengah
        </p>

        <h1
          id="hero-heading"
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6 max-w-4xl mx-auto leading-tight"
        >
          Bantu Anda Menemukan Arah, Makna, dan{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-primary">
            Potensi Terbaik
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          <strong>{company.tradeName}</strong> menyediakan layanan psikologi
          profesional untuk siswa, individu, sekolah, dan perusahaan di Jawa
          Timur serta Jawa Tengah. Berdiri sejak {company.foundedYear},
          perusahaan telah mendampingi lebih dari 50.000 siswa dan 150 instansi.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            href={company.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 bg-wa text-white rounded-xl font-semibold text-lg hover:bg-wa-hover hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 shadow-md flex items-center justify-center gap-2 active:scale-95"
          >
            <MessageCircle size={20} aria-hidden="true" />
            Konsultasi WhatsApp
          </Link>
          <Link
            href="/layanan"
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-gray-700 border-2 border-gray-200 rounded-xl font-semibold text-lg hover:border-primary hover:text-primary transition-all duration-300 flex items-center justify-center gap-2 active:scale-95"
          >
            Lihat Layanan Kami
            <ArrowRight size={20} aria-hidden="true" />
          </Link>
        </div>

        <p className="mt-8 text-sm text-gray-500">
          {yearsOfExperience()} tahun pengalaman · {company.contact.hours}
        </p>
      </div>
    </section>
  );
}
