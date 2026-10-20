import {
  ShieldCheck,
  HeartHandshake,
  FileCheck2,
  Lightbulb,
  Fingerprint,
} from 'lucide-react';
import { yearsOfExperience } from '@/content/company';

const features = [
  {
    icon: ShieldCheck,
    title: 'Pengalaman Teruji',
    description: `${yearsOfExperience()} tahun mendampingi klien di berbagai institusi.`,
  },
  {
    icon: HeartHandshake,
    title: 'Pendekatan Holistik',
    description:
      'Kami melihat potensi secara menyeluruh, kognitif, emosional, dan kepribadian.',
  },
  {
    icon: FileCheck2,
    title: 'Alat Tes Terstandard',
    description: 'Menggunakan instrumen psikologi yang valid dan reliabel.',
  },
  {
    icon: Lightbulb,
    title: 'Laporan Mendalam',
    description: 'Hasil yang mudah dipahami lengkap dengan saran pengembangan.',
  },
  {
    icon: Fingerprint,
    title: 'Sangat Fleksibel',
    description: 'Tersedia secara langsung untuk menyesuaikan semua kebutuhan.',
  },
] as const;

export default function WhyUs() {
  return (
    <section
      aria-labelledby="mengapa-kami-heading"
      className="py-24 bg-slate-950 text-white overflow-hidden relative"
    >
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent pointer-events-none"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            id="mengapa-kami-heading"
            className="text-3xl md:text-4xl font-extrabold mb-6"
          >
            Mengapa Memilih Kami?
          </h2>
          <p className="text-lg text-slate-300">
            Aditama Psychocare menjadi pilihan utama bagi sekolah, industri,
            maupun individu karena komitmen kami pada kualitas dan etika
            profesi.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <li
              key={feature.title}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 motion-reduce:transition-none backdrop-blur-sm"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-900/50 flex items-center justify-center mb-6 border border-blue-800/50">
                <feature.icon
                  size={28}
                  className="text-blue-400"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
