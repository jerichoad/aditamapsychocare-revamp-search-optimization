import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://aditamapsychocare.com'),
  title:
    'Aditama Psychocare | Layanan Psikologi Profesional Jawa Timur & Tengah',
  description:
    'Aditama Psychocare menyediakan layanan psikologi profesional untuk siswa, individu, sekolah, dan perusahaan. Hampir 23 tahun mendampingi ribuan klien di Jawa Timur & Tengah. Konsultasi sekarang via WhatsApp.',
  keywords: [
    'psikologi profesional',
    'konsultasi psikologi',
    'psikologi surabaya',
    'psikologi jawa timur',
    'layanan psikologi',
    'assessment psikologi',
    'psikologi sekolah',
    'psikologi perusahaan',
    'konseling',
    'aditama psychocare',
    'psikologi surabaya',
    'psikologi sekolah',
  ],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'CfwAv_cph3ol6aM1rucfea4mYXdUQAY_CL8Xz4MvRkE',
  },
  icons: {
    icon: '/logo.webp',
    apple: '/logo.webp',
  },
  openGraph: {
    title: 'Aditama Psychocare | Layanan Psikologi Profesional',
    description:
      'Mitra terpercaya Anda untuk menemukan arah, makna, dan potensi terbaik melalui layanan psikologi profesional selama hampir 23 tahun.',
    url: 'https://aditamapsychocare.com',
    siteName: 'Aditama Psychocare',
    images: [
      {
        url: '/logo.webp',
        width: 800,
        height: 800,
        alt: 'Aditama Psychocare Logo',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
