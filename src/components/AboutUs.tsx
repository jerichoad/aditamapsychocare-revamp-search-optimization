import { CheckCircle2 } from 'lucide-react';
import { company, yearsOfExperience } from '@/content/company';
import Gallery from './Gallery';

const highlights = [
  'Pendekatan psikometrik terstandar secara ilmiah dan relevan secara praktis.',
  'Melayani kebutuhan pendidikan, keluarga, hingga dunia kerja.',
  'Didukung tenaga profesional berpengalaman yang berdampak secara emosional.',
];

export default function AboutUs() {
  return (
    <section
      id="tentang"
      aria-labelledby="tentang-heading"
      className="py-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <Gallery />

          <div className="w-full lg:w-1/2">
            <p className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-primary font-medium text-sm mb-4">
              Tentang Kami
            </p>
            <h2
              id="tentang-heading"
              className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight"
            >
              Lahir dari Kepedulian yang Mendalam terhadap Generasi Muda
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {company.tradeName} hadir dari kegelisahan bahwa banyak individu
              khususnya siswa dan generasi muda menjalani proses pendidikan
              tanpa benar-benar memahami potensi dan arah masa depan mereka.
              Bukan sekadar penyedia layanan psikologi, kami hadir sebagai mitra
              yang membantu setiap individu menemukan makna, arah, dan versi
              terbaik dari dirinya.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Selama <strong>{yearsOfExperience()} tahun</strong> berdiri,{' '}
              {company.tradeName} telah mendampingi lebih dari{' '}
              <strong>50.000 siswa</strong> dan menjalin kerja sama dengan lebih
              dari <strong>150 instansi</strong> di berbagai wilayah, khususnya
              Jawa Timur dan Jawa Tengah bukan sekadar statistik, melainkan
              representasi dari individu-individu yang telah menemukan arah baru
              dalam hidup mereka.
            </p>

            <ul className="space-y-4 mb-8 text-gray-700">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <CheckCircle2
                    className="text-wa mt-0.5 shrink-0"
                    size={24}
                    aria-hidden="true"
                  />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
