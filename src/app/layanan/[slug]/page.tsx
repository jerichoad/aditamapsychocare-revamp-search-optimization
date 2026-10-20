import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import Breadcrumbs from '@/components/seo/Breadcrumbs';
import JsonLd from '@/components/seo/JsonLd';
import DirectAnswer from '@/components/content/DirectAnswer';
import QuestionHeading from '@/components/content/QuestionHeading';
import HowTo from '@/components/content/HowTo';
import KeyTakeaways from '@/components/content/KeyTakeaways';
import { FaqCategoryBlock } from '@/components/content/FaqAccordion';
import { buildMetadata } from '@/lib/seo';
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from '@/lib/schemas';
import { company } from '@/content/company';
import { getService, serviceSlugs } from '@/content/services';
import { faqLayanan } from '@/content/faq';

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return buildMetadata({
      title: 'Layanan Tidak Ditemukan',
      description: 'Halaman layanan yang Anda cari tidak tersedia.',
      path: '/layanan',
      index: false,
    });
  }

  return buildMetadata({
    title: `${service.name} di Surabaya & Jawa Timur`,
    description: `${service.tagline} ${service.priceNote} Hubungi WhatsApp ${company.contact.phoneDisplay}.`,
    path: `/layanan/${service.slug}`,
    type: 'article',
    publishedTime: `${service.updatedAt}T00:00:00+07:00`,
    modifiedTime: `${service.updatedAt}T00:00:00+07:00`,
  });
}

export default async function LayananDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const path = `/layanan/${service.slug}`;
  const crumbs = [
    { label: 'Beranda', href: '/' },
    { label: 'Layanan', href: '/layanan' },
    { label: service.name, href: path },
  ];
  const relatedFaqs = faqLayanan.slice(0, 3);

  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <Breadcrumbs items={crumbs} />

        <p className="text-sm font-semibold text-primary mb-3">
          {service.audience}
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
          {service.name}
        </h1>

        <DirectAnswer>{service.directAnswer}</DirectAnswer>

        <div className="mt-10">
          <KeyTakeaways
            items={[
              `Untuk: ${service.audience}.`,
              `Biaya: ${service.priceNote}`,
              `Kontak: WhatsApp ${company.contact.phoneDisplay} atau email ${company.contact.email}.`,
              `Terakhir diperbarui: ${service.updatedAt}.`,
            ]}
          />
        </div>

        <div className="mt-16 space-y-6">
          <QuestionHeading level={2}>
            Bagaimana {service.name.toLowerCase()} dilaksanakan?
          </QuestionHeading>
          {service.details.map((paragraph) => (
            <p key={paragraph} className="text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-16">
          <HowTo
            title={`Cara menggunakan layanan ${service.name.toLowerCase()}`}
            steps={service.steps}
          />
        </div>

        <div className="mt-16">
          <QuestionHeading level={2} className="mb-6">
            Apa saja yang termasuk dalam layanan ini?
          </QuestionHeading>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.includes.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-gray-200 bg-slate-50 px-5 py-4 text-gray-700"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 rounded-2xl bg-blue-50 border border-blue-100 p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Ingin memakai layanan ini?
          </h2>
          <p className="text-gray-600 mb-6">
            Hubungi tim kami untuk penawaran biaya dan penjadwalan.
          </p>
          <Link
            href={`${company.contact.whatsappUrl}?text=${encodeURIComponent(
              `Halo Aditama Psychocare, saya ingin bertanya tentang layanan ${service.name}.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3.5 bg-wa text-white rounded-xl font-semibold text-lg hover:bg-wa-hover hover:shadow-lg transition-all duration-300"
          >
            Konsultasi via WhatsApp
          </Link>
        </div>

        <div className="mt-16">
          <FaqCategoryBlock
            title="Pertanyaan tentang layanan"
            headingLevel={2}
            items={relatedFaqs}
          />
        </div>
      </div>

      <JsonLd data={serviceSchema(service, path)} />
      <JsonLd
        data={breadcrumbSchema(crumbs.map((c) => ({ name: c.label, href: c.href })))}
      />
      <JsonLd data={faqSchema(relatedFaqs)} />
    </div>
  );
}
