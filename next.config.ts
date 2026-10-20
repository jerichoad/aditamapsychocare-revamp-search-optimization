import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Satu trailing-slash policy untuk seluruh environment (SEO §7.3).
  trailingSlash: false,
  poweredByHeader: false,

  images: {
    // Format modern diutamakan (AIO §8.6); remotePatterns kosong =
    // tidak ada gambar pihak ketiga yang boleh di-optimize.
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },

  // Mengurangi JavaScript klien dari ikon (AIO §8.8).
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },

  async redirects() {
    return [
      // Konsistensi anchor lama: konten section tetap ada di beranda,
      // halaman kanonis baru disiapkan sebagai rute mandiri.
      // Contoh bila di masa depan section dipindah ke halaman sendiri.
      {
        source: '/tentang.html',
        destination: '/tentang-kami',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
