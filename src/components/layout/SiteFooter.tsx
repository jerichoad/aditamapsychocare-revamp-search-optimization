import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { company, formattedAddress } from '@/content/company';
import { officeAddressLine } from '@/lib/schemas';
import TrackedContactLink from '@/components/analytics/TrackedContactLink';
import ConsentSettingsButton from '@/components/analytics/ConsentSettingsButton';

export default function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 justify-items-stretch md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.webp"
                alt={`${company.tradeName} logo`}
                width={40}
                height={40}
                className="w-10 h-auto"
              />
              <span className="font-bold text-2xl text-white">
                {company.tradeName}
              </span>
            </div>
            <p className="text-slate-400 mb-6 max-w-sm leading-relaxed">
              Mitra terpercaya Anda untuk menemukan arah, makna, dan potensi
              terbaik melalui layanan psikologi profesional.
            </p>
          </div>

          <nav aria-label="Tautan cepat">
            <h2 className="text-white font-bold text-lg mb-6 pt-2">
              Tautan Cepat
            </h2>
            <ul className="space-y-4">
              {[
                { label: 'Beranda', href: '/' },
                { label: 'Layanan', href: '/layanan' },
                { label: 'Tentang Kami', href: '/tentang-kami' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Kontak', href: '/kontak' },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Layanan kami">
            <h2 className="text-white font-bold text-lg mb-6 pt-2">
              Layanan Kami
            </h2>
            <ul className="space-y-4">
              {company.services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={s.url}
                    className="hover:text-primary transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-white font-bold text-lg mb-6 pt-2">
              Hubungi Kami
            </h2>
            <address className="not-italic">
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <MapPin
                    size={20}
                    className="text-primary mt-1 shrink-0"
                    aria-hidden="true"
                  />
                  <span className="leading-relaxed">{officeAddressLine()}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone
                    size={20}
                    className="text-primary shrink-0"
                    aria-hidden="true"
                  />
                  <TrackedContactLink
                    method="telepon"
                    location="footer"
                    href={`tel:${company.contact.phoneInternational.replace(
                      /[^+\d]/g,
                      ''
                    )}`}
                    className="hover:text-primary transition-colors"
                  >
                    {company.contact.phoneDisplay}
                  </TrackedContactLink>
                </li>
                <li className="flex items-center gap-3">
                  <Mail
                    size={20}
                    className="text-primary shrink-0"
                    aria-hidden="true"
                  />
                  <TrackedContactLink
                    method="email"
                    location="footer"
                    href={`mailto:${company.contact.email}`}
                    className="hover:text-primary transition-colors"
                  >
                    {company.contact.email}
                  </TrackedContactLink>
                </li>
              </ul>
            </address>
          </div>
        </div>

        <div className="pt-10 pb-20 border-t border-slate-800/50">
          <section aria-labelledby="legalitas-heading">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="shrink-0 flex items-center gap-2 mt-0.5">
                <ShieldCheck
                  size={20}
                  className="text-primary"
                  aria-hidden="true"
                />
                <h2
                  id="legalitas-heading"
                  className="text-white font-semibold text-sm tracking-wide uppercase whitespace-nowrap"
                >
                  Legalitas Usaha
                </h2>
              </div>
              <div className="flex-1 border-l border-slate-700 pl-4">
                <p className="text-slate-400 text-xs leading-relaxed mb-3">
                  <span className="text-slate-200 font-medium">
                    Layanan Psikologi Terpadu
                  </span>{' '}
                  Psikotes, Konseling &amp; Terapi, Konsultasi Masalah Anak,
                  Remaja, Dewasa, Keluarga, Seleksi PPDB, Seleksi Karyawan,
                  Promosi Jabatan.
                </p>
                <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-1.5 text-xs text-slate-500">
                  {company.credentials.map((c) => (
                    <div key={c.name}>
                      <dt className="inline text-slate-400 font-medium">
                        {c.name}
                      </dt>{' '}
                      <dd className="inline ml-2">
                        {c.detail}
                        {c.year ? ` ${c.year}` : ''}
                      </dd>
                    </div>
                  ))}
                  <div>
                    <dt className="inline text-slate-400 font-medium">
                      Alamat
                    </dt>{' '}
                    <dd className="inline ml-2">{formattedAddress}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>
        </div>

        <div className="pt-10 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>
            Hak Cipta &copy; {new Date().getFullYear()} {company.tradeName}.
            Seluruh Hak Dilindungi.
          </p>
          <p>
            Design Web by{' '}
            <a
              href="https://jerichoad.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              @jerichoad
            </a>{' '}
            · <ConsentSettingsButton />
          </p>
        </div>
      </div>
    </footer>
  );
}
