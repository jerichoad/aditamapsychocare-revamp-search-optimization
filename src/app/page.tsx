import type { Metadata } from 'next';
import Link from 'next/link';

import Hero from '@/components/Hero';
import Statistics from '@/components/Statistics';
import Clients from '@/components/Clients';
import Services from '@/components/Services';
import AboutUs from '@/components/AboutUs';
import WhyUs from '@/components/WhyUs';
import Pricing from '@/components/Pricing';
import Process from '@/components/Process';
import ContactCTA from '@/components/ContactCTA';
import FadeInSection from '@/components/FadeInSection';
import JsonLd from '@/components/seo/JsonLd';
import DirectAnswer from '@/components/content/DirectAnswer';
import QuestionHeading from '@/components/content/QuestionHeading';
import KeyTakeaways from '@/components/content/KeyTakeaways';
import { FaqCategoryBlock } from '@/components/content/FaqAccordion';
import { faqSchema, serviceSchema } from '@/lib/schemas';
import { buildMetadata } from '@/lib/seo';
import { company } from '@/content/company';
import { faqLayanan, faqProses } from '@/content/faq';
import { getService } from '@/content/services';

export const metadata: Metadata = buildMetadata({
  title:
    'Aditama Psychocare | Layanan Psikologi Profesional Jawa Timur & Jawa Tengah',
  description:
    'Aditama Psychocare menyediakan layanan psikologi profesional untuk siswa, individu, sekolah, dan perusahaan. Berdiri sejak 2002 di Surabaya, mendampingi 50.000+ siswa dan 150+ instansi. Konsultasi via WhatsApp.',
  path: '/',
});

const homeFaqs = [...faqLayanan.slice(0, 3), ...faqProses.slice(0, 2)];

export default function Home() {
  return (
    <>
      <FadeInSection>
        <Hero />
      </FadeInSection>

      <FadeInSection>
        <Statistics />
      </FadeInSection>

      <FadeInSection>
        <Clients />
      </FadeInSection>

      <FadeInSection>
        <Services />
      </FadeInSection>

      <section
        id="ringkasan"
        aria-labelledby="ringkasan-heading"
        className="py-24 bg-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuestionHeading id="ringkasan-heading" level={2} className="mb-8">
            Mengapa memilih Aditama Psychocare?
          </QuestionHeading>
          <DirectAnswer>
            Aditama Psychocare adalah pilihan tepat karena berpengalaman sejak
            2002, berizin resmi dengan SIIP dan STR, melayani tiga segmen
            lengkap yaitu siswa, individu, dan perusahaan, serta telah dipercaya
            lebih dari 150 instansi di Jawa Timur dan Jawa Tengah dengan biaya
            asesmen sekolah yang transparan mulai Rp75.000 per peserta.
          </DirectAnswer>
          <div className="mt-8">
            <KeyTakeaways
              items={[
                'Berizin resmi: SIIP 20201072-2022-1-2812 dan STR OE0001608315433.',
                'Layanan: tes potensi siswa, konsultasi individu, dan assessment rekrutmen.',
                'Jangkauan: Surabaya, Jawa Timur, Jawa Tengah, plus sesi daring.',
                `Kontak: WhatsApp ${company.contact.phoneDisplay}, email ${company.contact.email}.`,
              ]}
            />
          </div>
        </div>
      </section>

      <FadeInSection>
        <AboutUs />
      </FadeInSection>

      <FadeInSection>
        <WhyUs />
      </FadeInSection>

      <FadeInSection>
        <Pricing />
      </FadeInSection>

      <FadeInSection>
        <Process />
      </FadeInSection>

      <section
        id="faq"
        aria-labelledby="faq-heading"
        className="py-24 bg-slate-50"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuestionHeading
            id="faq-heading"
            level={2}
            className="mb-8 text-center"
          >
            Pertanyaan yang Sering Diajukan
          </QuestionHeading>
          <FaqCategoryBlock
            title="Layanan & Asesmen"
            headingLevel={3}
            items={faqLayanan.slice(0, 3)}
          />
          <FaqCategoryBlock
            title="Proses & Jadwal"
            headingLevel={3}
            items={faqProses.slice(0, 2)}
          />
          <p className="mt-8 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 font-semibold text-primary hover:underline"
            >
              Lihat semua pertanyaan
              <span aria-hidden="true"> →</span>
            </Link>
          </p>
        </div>
      </section>

      <FadeInSection>
        <ContactCTA />
      </FadeInSection>

      {company.services.map((s) => {
        const content = getService(s.slug);
        return content ? (
          <JsonLd key={s.slug} data={serviceSchema(content, s.url)} />
        ) : null;
      })}
      <JsonLd data={faqSchema(homeFaqs)} />
    </>
  );
}
