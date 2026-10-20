import type { Metadata } from 'next';
import Link from 'next/link';

import Breadcrumbs from '@/components/seo/Breadcrumbs';
import JsonLd from '@/components/seo/JsonLd';
import DirectAnswer from '@/components/content/DirectAnswer';
import QuestionHeading from '@/components/content/QuestionHeading';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schemas';
import {
  company,
  formattedAddress,
  yearsOfExperience,
} from '@/content/company';

export const metadata: Metadata = buildMetadata({
  title: 'Tentang Kami: Profil & Legalitas Aditama Psychocare',
  description: `Profil Aditama Psychocare: penyedia layanan psikologi profesional sejak ${company.foundedYear} di Surabaya. Berizin SIIP dan STR, melayani 50.000+ siswa dan 150+ instansi di Jawa Timur dan Jawa Tengah.`,
  path: '/tentang-kami',
  type: 'article',
  publishedTime: '2026-01-15T00:00:00+07:00',
  modifiedTime: '2026-01-15T00:00:00+07:00',
});

const crumbs = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang Kami', href: '/tentang-kami' },
];

export default function TentangKamiPage() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <Breadcrumbs items={crumbs} />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
          Tentang Aditama Psychocare
        </h1>

        <DirectAnswer>
          Aditama Psychocare adalah perusahaan jasa layanan psikologi yang
          berkedudukan di {formattedAddress}. Berdiri sejak{' '}
          {company.foundedYear}, perusahaan menyediakan tes potensi dan bakat
          siswa, assessment sekolah, konsultasi psikologi individu, serta
          assessment rekrutmen dan promosi jabatan untuk perusahaan.
        </DirectAnswer>

        <div className="mt-12 space-y-10">
          <section aria-labelledby="sejarah-heading">
            <QuestionHeading id="sejarah-heading" level={2} className="mb-4">
              Sejarah singkat perusahaan
            </QuestionHeading>
            <p className="text-gray-700 leading-relaxed mb-4">
              Aditama Psychocare didirikan pada tahun {company.foundedYear} dan
              memperoleh pengesahan badan hukum melalui SK Menteri Kehakiman dan
              HAM RI Nomor C-1029.HT.0301.TH.2002 pada 14 Agustus 2002. Selama{' '}
              {yearsOfExperience()} tahun, perusahaan berkembang dari layanan
              asesmen pendidikan menjadi penyedia layanan psikologi terpadu
              untuk siswa, individu, sekolah, dan perusahaan.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Sampai saat ini perusahaan telah mendampingi lebih dari 50.000
              siswa dan menjalin kerja sama dengan lebih dari 150 instansi di
              Jawa Timur serta Jawa Tengah.
            </p>
          </section>

          <section aria-labelledby="kredensial-heading">
            <QuestionHeading id="kredensial-heading" level={2} className="mb-4">
              Legalitas dan kredensial
            </QuestionHeading>
            <p className="text-gray-700 leading-relaxed mb-6">
              Praktik psikologi Aditama Psychocare didukung izin dan dokumen
              hukum berikut. Dokumen yang sama juga tercantum di bagian footer
              seluruh halaman website.
            </p>
            <dl className="space-y-4">
              {company.credentials.map((c) => (
                <div
                  key={c.name}
                  className="rounded-xl border border-gray-200 bg-slate-50 px-5 py-4"
                >
                  <dt className="font-bold text-gray-900">{c.name}</dt>
                  <dd className="text-gray-600 mt-1">
                    {c.issuer}
                    {c.detail ? ` ${c.detail}` : ''}
                    {c.year ? ` (${c.year})` : ''}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section aria-labelledby="wilayah-heading">
            <QuestionHeading id="wilayah-heading" level={2} className="mb-4">
              Wilayah layanan
            </QuestionHeading>
            <p className="text-gray-700 leading-relaxed">
              Aditama Psychocare melayani klien di{' '}
              {company.serviceArea.join(', ')}. Asesmen massal untuk sekolah dan
              perusahaan dilaksanakan di lokasi klien, sedangkan konsultasi
              individu di luar Surabaya tersedia secara daring.
            </p>
          </section>

          <section aria-labelledby="kontak-perusahaan-heading">
            <QuestionHeading
              id="kontak-perusahaan-heading"
              level={2}
              className="mb-4"
            >
              Kontak resmi perusahaan
            </QuestionHeading>
            <address className="not-italic text-gray-700 leading-relaxed">
              <p>{formattedAddress}, Indonesia</p>
              <p>
                Telepon/WhatsApp:{' '}
                <Link
                  href={company.contact.whatsappUrl}
                  className="font-semibold text-primary hover:underline"
                >
                  {company.contact.phoneDisplay}
                </Link>
              </p>
              <p>
                Email:{' '}
                <Link
                  href={`mailto:${company.contact.email}`}
                  className="font-semibold text-primary hover:underline"
                >
                  {company.contact.email}
                </Link>
              </p>
              <p>{company.contact.hours}</p>
            </address>
            <p className="mt-6">
              <Link
                href="/kontak"
                className="inline-flex items-center gap-2 font-semibold text-primary hover:underline"
              >
                Buka halaman kontak
                <span aria-hidden="true"> →</span>
              </Link>
            </p>
          </section>
        </div>
      </div>

      <JsonLd
        data={breadcrumbSchema(
          crumbs.map((c) => ({ name: c.label, href: c.href }))
        )}
      />
    </div>
  );
}
