import Link from 'next/link';
import { company } from '@/content/company';

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
        404
      </p>
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
        Halaman tidak ditemukan
      </h1>
      <p className="text-lg text-gray-600 mb-10">
        Halaman yang Anda cari mungkin sudah dipindahkan atau tidak pernah ada.
        Silakan kembali ke beranda atau lihat layanan yang tersedia.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link
          href="/"
          className="px-7 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-blue-800 transition-colors"
        >
          Kembali ke beranda
        </Link>
        <Link
          href="/layanan"
          className="px-7 py-3 rounded-xl border-2 border-gray-200 text-gray-700 font-semibold hover:border-primary hover:text-primary transition-colors"
        >
          Lihat layanan
        </Link>
      </div>
      <p className="mt-10 text-sm text-gray-500">
        Butuh bantuan? Hubungi {company.contact.phoneDisplay} atau{' '}
        {company.contact.email}.
      </p>
    </div>
  );
}
