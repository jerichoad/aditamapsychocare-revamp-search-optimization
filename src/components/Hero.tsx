import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden glow-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-primary font-medium text-sm mb-8 border border-blue-100 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          Layanan Psikologi Terpercaya di Jawa Timur & Tengah
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
          Bantu Anda Menemukan Arah, Makna, dan{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-primary">
            Potensi Terbaik
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Layanan psikologi profesional untuk siswa, individu, sekolah, dan
          perusahaan. Hampir 23 tahun mendampingi ribuan klien mengembangkan
          diri.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
          <Link
            href="https://wa.me/6285190849041"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 bg-wa text-white rounded-xl font-semibold text-lg hover:bg-wa-hover hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 shadow-md flex items-center justify-center gap-2 active:scale-95"
          >
            Konsultasi WhatsApp
          </Link>
          <Link
            href="#layanan"
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-gray-700 border-2 border-gray-200 rounded-xl font-semibold text-lg hover:border-primary hover:text-primary transition-all duration-300 flex items-center justify-center gap-2 active:scale-95"
          >
            Lihat Layanan Kami <ArrowRight size={20} />
          </Link>
        </div>

        {/* <div className="flex flex-col sm:flex-row justify-center items-center gap-8 md:gap-16 pt-8 border-t border-gray-100 max-w-3xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="flex -space-x-3 mb-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i}`} alt="Client" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p className="text-sm font-semibold text-gray-900">Dipercaya oleh 15,000+ Klien</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex space-x-1 mb-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={24} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-sm font-semibold text-gray-900">Rating Klien 4.9/5.0</p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
