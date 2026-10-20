import Link from 'next/link';
import { Check } from 'lucide-react';
import { pricing } from '@/content/pricing';
import type { PackageTone } from '@/types/pricing';

const TONE: Record<
  PackageTone,
  { bg: string; border: string; header: string; btn: string }
> = {
  violet: {
    bg: 'bg-violet-600',
    border: 'border-violet-600',
    header: 'text-white',
    btn: 'bg-white text-violet-700 hover:bg-gray-50',
  },
  primary: {
    bg: 'bg-primary',
    border: 'border-primary',
    header: 'text-white',
    btn: 'bg-white/10 text-white hover:bg-white/20',
  },
  light: {
    bg: 'bg-white',
    border: 'border-gray-200',
    header: 'text-gray-900',
    btn: 'bg-blue-50 text-primary hover:bg-blue-100',
  },
};

export default function Pricing() {
  return (
    <section
      id="harga"
      aria-labelledby="harga-heading"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2
            id="harga-heading"
            className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6"
          >
            Paket &amp; Biaya Layanan
          </h2>
          <p className="text-lg text-gray-600">
            Biaya asesmen sekolah dihitung per peserta. Untuk kebutuhan
            perusahaan dan instansi, penawaran disusun menyesuaikan volume
            peserta dan level posisi.
          </p>
        </div>

        {pricing.map((category) => (
          <div key={category.id} className="mb-16 last:mb-0">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Paket {category.label}
            </h3>
            <p className="text-gray-600 mb-8 max-w-3xl">{category.intro}</p>

            <ul
              className={`grid grid-cols-1 gap-8 list-none p-0 ${
                category.packages.length === 1
                  ? 'max-w-md'
                  : category.packages.length === 2
                  ? 'md:grid-cols-2 max-w-3xl'
                  : 'md:grid-cols-3'
              }`}
            >
              {category.packages.map((pkg) => {
                const tone = TONE[pkg.tone];
                return (
                  <li key={`${category.id}-${pkg.title}`} className="h-full">
                    <article
                      className={`relative flex h-full flex-col p-8 rounded-3xl border shadow-sm transition-transform hover:-translate-y-2 duration-300 motion-reduce:transform-none motion-reduce:transition-none ${tone.bg} ${tone.border}`}
                    >
                      {pkg.popular && (
                        <p className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-bold shadow-md whitespace-nowrap">
                          Paling Diminati
                        </p>
                      )}

                      <div className={`mb-8 ${tone.header}`}>
                        <h4 className="text-2xl font-bold mb-4">{pkg.title}</h4>
                        <p className="flex items-baseline mb-4 flex-wrap gap-x-2">
                          <span
                            className={`font-extrabold ${
                              pkg.per ? 'text-4xl' : 'text-xl'
                            }`}
                          >
                            {pkg.price}
                          </span>
                          {pkg.per && (
                            <span className="text-lg opacity-80">
                              {pkg.per}
                            </span>
                          )}
                        </p>
                        <p className="opacity-90 leading-relaxed">
                          {pkg.description}
                        </p>
                      </div>

                      <div className="flex-grow mb-8">
                        <p
                          className={`text-sm font-semibold mb-3 ${tone.header}`}
                        >
                          Yang termasuk:
                        </p>
                        <ul className="space-y-3">
                          {pkg.features.map((feature) => (
                            <li
                              key={feature}
                              className={`flex items-start gap-3 ${tone.header}`}
                            >
                              <Check
                                size={20}
                                className="shrink-0 mt-0.5"
                                aria-hidden="true"
                              />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        href={`https://wa.me/6285190849041?text=${encodeURIComponent(
                          `Halo Aditama Psychocare, saya tertarik dengan ${pkg.title} untuk kategori ${category.label}. Mohon informasi lebih lanjut.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block text-center w-full py-3.5 px-6 rounded-xl font-bold transition-colors ${tone.btn}`}
                      >
                        {pkg.buttonText}
                        <span className="sr-only">
                          {' '}
                          {pkg.title} ({category.label})
                        </span>
                      </Link>
                    </article>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
