import type { Metadata } from 'next';
import Link from 'next/link';

import Breadcrumbs from '@/components/seo/Breadcrumbs';
import JsonLd from '@/components/seo/JsonLd';
import DirectAnswer from '@/components/content/DirectAnswer';
import { FaqCategoryBlock } from '@/components/content/FaqAccordion';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, faqSchema } from '@/lib/schemas';
import { company } from '@/content/company';
import { faqCategories } from '@/content/faq';

export const metadata: Metadata = buildMetadata({
  title: 'FAQ Layanan Psikologi: Biaya, Proses & Legalitas',
  description:
    'Pertanyaan yang sering diajukan tentang Aditama Psychocare: layanan yang tersedia, biaya asesmen sekolah, cara booking, legalitas SIIP dan STR, serta kerahasiaan hasil konsultasi.',
  path: '/faq',
});

const crumbs = [
  { label: 'Beranda', href: '/' },
  { label: 'FAQ', href: '/faq' },
];

export default function FaqPage() {
  const allItems = faqCategories.flatMap((c) => c.items);

  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <Breadcrumbs items={crumbs} />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
          Pertanyaan yang Sering Diajukan
        </h1>

        <DirectAnswer>
          Aditama Psychocare melayani tes potensi siswa, konsultasi psikologi
          individu, dan assessment rekrutmen di Surabaya serta wilayah Jawa
          Timur dan Jawa Tengah. Biaya asesmen sekolah mulai Rp75.000 per
          peserta, dan seluruh layanan dapat dimulai melalui WhatsApp{' '}
          {company.contact.phoneDisplay}.
        </DirectAnswer>

        <nav aria-label="Daftar kategori pertanyaan" className="mt-10">
          <h2 className="text-sm font-bold uppercase tracking-wide text-gray-500 mb-3">
            Kategori
          </h2>
          <ul className="flex flex-wrap gap-3">
            {faqCategories.map((category) => (
              <li key={category.id}>
                <Link
                  href={`#${category.id}`}
                  className="inline-block rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors"
                >
                  {category.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-14 space-y-14">
          {faqCategories.map((category) => (
            <div key={category.id} id={category.id} className="scroll-mt-28">
              <FaqCategoryBlock
                title={category.title}
                headingLevel={2}
                items={[...category.items]}
              />
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-slate-50 border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Pertanyaan Anda belum terjawab?
          </h2>
          <p className="text-gray-600 mb-6">
            Hubungi tim Aditama Psychocare melalui WhatsApp{' '}
            {company.contact.phoneDisplay} atau email {company.contact.email}.
            Kami merespons pada jam kerja Senin sampai Jumat, 08.00–17.00 WIB.
          </p>
          <Link
            href={company.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-7 py-3 bg-wa text-white rounded-xl font-semibold hover:bg-wa-hover transition-colors"
          >
            Tanya via WhatsApp
          </Link>
        </div>
      </div>

      <JsonLd data={faqSchema(allItems)} />
      <JsonLd
        data={breadcrumbSchema(
          crumbs.map((c) => ({ name: c.label, href: c.href }))
        )}
      />
    </div>
  );
}
