import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

import Breadcrumbs from '@/components/seo/Breadcrumbs';
import JsonLd from '@/components/seo/JsonLd';
import DirectAnswer from '@/components/content/DirectAnswer';
import QuestionHeading from '@/components/content/QuestionHeading';
import ContactCTA from '@/components/ContactCTA';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schemas';
import { company, formattedAddress } from '@/content/company';

export const metadata: Metadata = buildMetadata({
  title: 'Kontak & Alamat: WhatsApp, Email, dan Lokasi Surabaya',
  description: `Hubungi Aditama Psychocare via WhatsApp ${company.contact.phoneDisplay} atau email ${company.contact.email}. Kantor di ${formattedAddress}. Jam kerja Senin–Jumat 08.00–17.00 WIB.`,
  path: '/kontak',
});

const crumbs = [
  { label: 'Beranda', href: '/' },
  { label: 'Kontak', href: '/kontak' },
];

export default function KontakPage() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <Breadcrumbs items={crumbs} />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
          Hubungi Aditama Psychocare
        </h1>

        <DirectAnswer>
          Aditama Psychocare dapat dihubungi melalui WhatsApp {company.contact.phoneDisplay},
          email {company.contact.email}, atau datang langsung ke kantor di{' '}
          {formattedAddress}. Tim merespons pada jam kerja Senin sampai Jumat,
          pukul 08.00 sampai 17.00 WIB. WhatsApp adalah kanal tercepat untuk
          konsultasi awal dan penjadwalan sesi.
        </DirectAnswer>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-gray-200 p-6">
            <Phone size={22} className="text-primary mb-3" aria-hidden="true" />
            <h2 className="text-lg font-bold text-gray-900 mb-1">
              WhatsApp &amp; Telepon
            </h2>
            <Link
              href={company.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline"
            >
              {company.contact.phoneDisplay}
            </Link>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <Mail size={22} className="text-primary mb-3" aria-hidden="true" />
            <h2 className="text-lg font-bold text-gray-900 mb-1">Email</h2>
            <Link
              href={`mailto:${company.contact.email}`}
              className="text-primary font-semibold hover:underline break-all"
            >
              {company.contact.email}
            </Link>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <MapPin size={22} className="text-primary mb-3" aria-hidden="true" />
            <h2 className="text-lg font-bold text-gray-900 mb-1">Alamat Kantor</h2>
            <address className="not-italic text-gray-600 leading-relaxed">
              {formattedAddress}
              <br />
              {company.address.province}, Indonesia
            </address>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <Clock size={22} className="text-primary mb-3" aria-hidden="true" />
            <h2 className="text-lg font-bold text-gray-900 mb-1">Jam Operasional</h2>
            <p className="text-gray-600 leading-relaxed">
              {company.contact.hours}
            </p>
          </div>
        </div>

        <div className="mt-16">
          <QuestionHeading level={2} className="mb-4">
            Bagaimana cara booking jadwal konsultasi?
          </QuestionHeading>
          <ol className="space-y-4 text-gray-700 leading-relaxed list-decimal pl-6">
            <li>
              Hubungi WhatsApp {company.contact.phoneDisplay} atau isi formulir
              booking di bawah.
            </li>
            <li>
              Sampaikan nama atau instansi, tanggal yang diinginkan, dan jenis
              layanan atau tes.
            </li>
            <li>
              Tim mengonfirmasi ketersediaan jadwal, kebutuhan persiapan, dan
              rincian biaya.
            </li>
            <li>
              Lakukan pembayaran sesuai penawaran, lalu sesi dijadwalkan pada
              tanggal yang disepakati.
            </li>
          </ol>
        </div>
      </div>

      <ContactCTA />

      <JsonLd
        data={breadcrumbSchema(crumbs.map((c) => ({ name: c.label, href: c.href })))}
      />
    </div>
  );
}
