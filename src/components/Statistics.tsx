import { yearsOfExperience } from '@/content/company';

const STATS = [
  {

    value: `${yearsOfExperience()}+`,
    label: 'Tahun Pengalaman',
    description: 'Mendedikasikan diri di bidang psikologi dengan integritas.',
  },
  {
    value: '50.000+',
    label: 'Siswa Didampingi',
    description: 'Membantu menemukan potensi dan jurusan yang tepat.',
  },
  {
    value: '150+',
    label: 'Instansi Bekerja Sama',
    description: 'Berbagai sekolah dan perusahaan swasta terkemuka.',
  },
] as const;

export default function Statistics() {
  return (
    <section
      aria-labelledby="statistik-heading"
      className="py-16 bg-white border-y border-gray-100"
    >
      <h2 id="statistik-heading" className="sr-only">
        Aditama Psychocare dalam Angka
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center px-4 py-6"
            >
              <dt className="text-xl font-bold text-gray-900 mb-2 order-2">
                {stat.label}
              </dt>
              <dd className="text-4xl md:text-5xl font-extrabold text-primary mb-2 tracking-tight order-1">
                {stat.value}
              </dd>
              <dd className="text-gray-600 leading-relaxed max-w-xs order-3">
                {stat.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
