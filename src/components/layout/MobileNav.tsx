'use client';

import Link from 'next/link';
import { useEffect, useId, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { company } from '@/content/company';
import { trackContactClick } from '@/lib/analytics';

const NAV_ITEMS = [
  { label: 'Beranda', href: '/' },
  { label: 'Layanan', href: '/layanan' },
  { label: 'Tentang Kami', href: '/tentang-kami' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Kontak', href: '/kontak' },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', onKey);

    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  return (
    <div className="md:hidden flex items-center">
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-label={isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
        className="p-2 rounded-lg text-gray-600 hover:text-primary hover:bg-gray-100"
      >
        {isOpen ? (
          <X size={24} aria-hidden="true" />
        ) : (
          <Menu size={24} aria-hidden="true" />
        )}
      </button>

      {isOpen && (
        <div
          id={menuId}
          role="dialog"
          aria-modal="true"
          aria-label="Menu navigasi"
          className="fixed inset-x-0 top-20 z-50 bg-white border-b border-gray-100 px-4 pt-2 pb-6 shadow-lg max-h-[calc(100dvh-5rem)] overflow-y-auto"
        >
          <nav aria-label="Navigasi mobile" className="space-y-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="pt-4">
            <Link
              href={company.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                setIsOpen(false);
                trackContactClick('whatsapp', 'mobile-nav');
              }}
              className="block w-full text-center px-6 py-3 bg-wa text-white font-medium rounded-xl hover:bg-wa-hover"
            >
              Konsultasi
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
