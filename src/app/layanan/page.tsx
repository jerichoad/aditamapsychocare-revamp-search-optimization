import type { Metadata } from 'next';
import Link from 'next/link';

import Breadcrumbs from '@/components/seo/Breadcrumbs';
import JsonLd from '@/components/seo/JsonLd';
import DirectAnswer from '@/components/content/DirectAnswer';
import QuestionHeading from '@/components/content/QuestionHeading';
import ComparisonTable from '@/components/content/ComparisonTable';
import KeyTakeaways from '@/components/content/KeyTakeaways';
import { FaqCategoryBlock } from '@/components/content/FaqAccordion';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, faqSchema } from '@/lib/schemas';
import { services } from '@/content/services';
import { faqLayanan } from '@/content/faq';
import { pricing } from '@/content/pricing';

export const metadata: Metadata = buildMetadata({
  title: 'Layanan Psikologi: Tes Potensi, Konsultasi & Assessment',
  description:
    'Tiga layanan Aditama Psychocare: tes potensi siswa dan assessment sekolah, konsultasi psikologi individu, serta assessment rekrutmen karyawan. Biaya asesmen sekolah mulai Rp75.000 per peserta.',
  path: '/layanan',
});

const crumbs = [
  { label: 'Beranda', href: '/' },
  { label: 'Layanan', href: '/layanan' },
];

export default function LayananPage() {
  const sekolah = pricing[0];

  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <Breadcrumbs items={crumbs} />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
          Layanan Psikologi Aditama Psychocare
        </h1>

        <DirectAnswer>
          Aditama Psychocare menyediakan tiga kelompok layanan psikologi: tes
          potensi siswa dan assessment sekolah untuk pemetaan bakat serta
          kemampuan kognitif, konsultasi psikologi individu untuk persoalan
          emosional dan perencanaan karier, serta assessment rekrutmen untuk
          seleksi dan pemetaan kompetensi karyawan perusahaan.
        </DirectAnswer>

        <div className="mt-10">
          <KeyTakeaways
            items={[
              'Tes potensi siswa dan assessment sekolah: mulai Rp75.000 per peserta.',
              'Konsultasi psikologi individu: Rp350.000 per sesi personal, termasuk psikogram.',
              'Assessment rekrutmen: penawaran menyesuaikan volume peserta dan level posisi.',
              'Pelaksanaan dapat dilakukan di lokasi sekolah atau perusahaan.',
            ]}
          />
        </div>

        <div className="mt-16 space-y-12">
          {services.map((service) => (
            <article
              key={service.slug}
              className="border-t border-gray-200 pt-10"
              aria-labelledby={`${service.slug}-heading`}
            >
              <QuestionHeading
                id={`${service.slug}-heading`}
                level={2}
                className="mb-4"
              >
                Apa itu {service.name}?
              </QuestionHeading>
              <p className="text-gray-700 leading-relaxed mb-4">
                {service.directAnswer}
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Untuk: {service.audience} · Biaya: {service.priceNote}
              </p>
              <Link
                href={`/layanan/${service.slug}`}
                className="inline-flex items-center gap-2 font-semibold text-primary hover:underline"
              >
                Detail {service.name}
                <span aria-hidden="true"> →</span>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <QuestionHeading level={2} className="mb-4">
            Berapa biaya asesmen sekolah di Aditama Psychocare?
          </QuestionHeading>
          <DirectAnswer>
            Biaya asesmen sekolah dimulai dari Rp75.000 per peserta untuk Paket
            A, Rp80.000 per peserta untuk Paket B yang mencakup sosialisasi
            hasil, dan Rp350.000 per peserta untuk Personal Session yang
            mencakup laporan psikogram lengkap serta rekomendasi karier.
          </DirectAnswer>
          <div className="mt-6">
            <ComparisonTable
              caption="Perbandingan paket asesmen sekolah Aditama Psychocare"
              headers={['Paket', 'Biaya', 'Cakupan', 'Cocok untuk']}
              rows={sekolah.packages.map((p) => [
                p.title,
                `${p.price}${p.per ? ` ${p.per}` : ''}`,
                p.features.join(', '),
                p.title === 'Personal Session'
                  ? 'Konsultasi karier dan penjurusan mendalam'
                  : 'Asesmen massal satu kelas atau satu angkatan',
              ])}
            />
          </div>
        </div>

        <div className="mt-16">
          <FaqCategoryBlock
            title="Pertanyaan tentang layanan"
            headingLevel={2}
            items={faqLayanan}
          />
        </div>
      </div>

      <JsonLd data={breadcrumbSchema(crumbs.map((c) => ({ name: c.label, href: c.href })))} />
      <JsonLd data={faqSchema(faqLayanan)} />
    </div>
  );
}
