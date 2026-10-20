import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle } from 'lucide-react';
import { company } from '@/content/company';
import MobileNav from './MobileNav';
import TrackedContactLink from '@/components/analytics/TrackedContactLink';

const NAV_ITEMS = [
  { label: 'Beranda', href: '/' },
  { label: 'Layanan', href: '/layanan' },
  { label: 'Tentang Kami', href: '/tentang-kami' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Kontak', href: '/kontak' },
];

const ANCHOR_ITEMS = [
  { label: 'Harga', href: '/#harga' },
  { label: 'Alur Layanan', href: '/#alur-layanan' },
];

export default function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-lg"
            aria-label={`${company.tradeName} kembali ke beranda`}
          >
            <Image
              src="/logo.webp"
              alt={`${company.tradeName} logo`}
              width={40}
              height={40}
              className="w-10 h-auto"
              priority
            />
            <span className="font-bold text-xl">
              <span className="text-primary">Aditama</span> Psychocare
            </span>
          </Link>

          <nav aria-label="Navigasi utama" className="hidden md:flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <nav
              aria-label="Navigasi cepat"
              className="flex items-center gap-5 mr-2"
            >
              {ANCHOR_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-500 hover:text-primary transition-colors text-sm font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <TrackedContactLink
              method="whatsapp"
              location="header"
              href={company.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-wa text-white font-medium rounded-xl hover:bg-wa-hover hover:shadow-lg transition-all duration-300 active:scale-95 inline-flex items-center gap-2"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Konsultasi
            </TrackedContactLink>
          </div>

          <MobileNav />
        </div>
      </div>
    </header>
  );
}
