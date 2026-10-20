import { GraduationCap, UserRound, UsersRound, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { company } from '@/content/company';

const ICONS = {
  'tes-potensi-siswa': {
    Icon: GraduationCap,
    bgClass: 'bg-yellow-100',
    iconClass: 'text-yellow-600',
  },
  'konsultasi-psikologi-individu': {
    Icon: UserRound,
    bgClass: 'bg-blue-100',
    iconClass: 'text-blue-600',
  },
  'assessment-rekrutmen': {
    Icon: UsersRound,
    bgClass: 'bg-purple-100',
    iconClass: 'text-purple-600',
  },
} as const;

export default function Services() {
  return (
    <section
      id="layanan"
      aria-labelledby="layanan-heading"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-primary font-medium text-sm mb-4">
            Layanan Kami
          </p>
          <h2
            id="layanan-heading"
            className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6"
          >
            Solusi Psikologi Tepat Guna
          </h2>
          <p className="text-lg text-gray-600">
            Tiga kelompok layanan untuk kebutuhan pendidikan, individu, dan
            dunia kerja.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {company.services.map((service) => {
            const { Icon, bgClass, iconClass } =
              ICONS[service.slug as keyof typeof ICONS];

            return (
              <li key={service.slug}>
                <article className="h-full bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col items-start group">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300 motion-reduce:transform-none ${bgClass}`}
                  >
                    <Icon size={32} className={iconClass} aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {service.shortDescription}
                  </p>
                  <p className="text-sm text-gray-500 mb-6">
                    Untuk: {service.audience}
                  </p>
                  <Link
                    href={service.url}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                  >
                    Detail layanan
                    <ArrowRight size={16} aria-hidden="true" />
                    <span className="sr-only">: {service.name}</span>
                  </Link>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
