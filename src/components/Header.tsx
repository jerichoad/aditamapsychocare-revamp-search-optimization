'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.webp"
              alt="Aditama Psychocare Logo"
              width={40}
              height={40}
              className="w-10 h-auto"
            />
            <span className="font-bold text-xl">
              <span className="text-primary">Aditama</span> Psychocare
            </span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link
              href="#"
              className="text-gray-600 hover:text-primary transition-colors font-medium"
            >
              Beranda
            </Link>
            <Link
              href="#layanan"
              className="text-gray-600 hover:text-primary transition-colors font-medium"
            >
              Layanan
            </Link>
            <Link
              href="#tentang"
              className="text-gray-600 hover:text-primary transition-colors font-medium"
            >
              Tentang Kami
            </Link>

            <Link
              href="#kontak"
              className="text-gray-600 hover:text-primary transition-colors font-medium"
            >
              Kontak
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="https://wa.me/6285190849041"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-wa text-white font-medium rounded-xl hover:bg-wa-hover hover:shadow-lg transition-all duration-300 active:scale-95"
            >
              Konsultasi
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-2 shadow-lg">
          <Link
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
          >
            Beranda
          </Link>
          <Link
            href="#layanan"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-primary"
          >
            Layanan
          </Link>
          <Link
            href="#tentang"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-primary"
          >
            Tentang Kami
          </Link>

          <Link
            href="#kontak"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-primary"
          >
            Kontak
          </Link>
          <div className="pt-4">
            <Link
              href="https://wa.me/6285190849041"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-6 py-3 bg-wa text-white font-medium rounded-xl hover:bg-wa-hover"
            >
              Konsultasi
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
