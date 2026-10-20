'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const galleryImages = [
  {
    src: '/gallery/1.jpeg',
    alt: 'Kegiatan asesmen psikologi Aditama Psychocare bersama siswa',
  },
  {
    src: '/gallery/2.jpeg',
    alt: 'Suasana ruang konsultasi Aditama Psychocare',
  },
  {
    src: '/gallery/3.jpeg',
    alt: 'Tim psikolog Aditama Psychocare saat pelaksanaan psikotes massal',
  },
  {
    src: '/gallery/4.jpeg',
    alt: 'Sesi sosialisasi hasil asesmen kepada pihak sekolah',
  },
  {
    src: '/gallery/5.jpeg',
    alt: 'Peserta mengikuti tes potensi di kantor Aditama Psychocare',
  },
  {
    src: '/gallery/6.jpeg',
    alt: 'Dokumentasi kegiatan konsultasi dan pendampingan klien',
  },
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % galleryImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const go = (index: number) => setCurrent(index);

  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const start = e.currentTarget.getAttribute('data-touch-down');
    if (!start) return;
    const diff = parseFloat(start) - e.changedTouches[0].clientX;
    if (diff > 50) go((current + 1) % galleryImages.length);
    else if (diff < -50)
      go(current === 0 ? galleryImages.length - 1 : current - 1);
    e.currentTarget.removeAttribute('data-touch-down');
  };

  return (
    <div className="w-full lg:w-1/2">
      <div
        className="relative rounded-[2rem] overflow-hidden aspect-[4/3] bg-gray-200 shadow-xl touch-pan-y"
        role="group"
        aria-roledescription="carousel"
        aria-label="Galeri foto Aditama Psychocare"
        onTouchStart={(e) => {
          e.currentTarget.setAttribute(
            'data-touch-down',
            e.touches[0].clientX.toString()
          );
        }}
        onTouchEnd={onTouchEnd}
      >
        {galleryImages.map((image, i) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={i === 0}
            draggable={false}
            className="object-cover transition-opacity duration-1000 motion-reduce:transition-none"
            style={{ opacity: i === current ? 1 : 0 }}
            aria-hidden={i === current ? undefined : true}
          />
        ))}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
          {galleryImages.map((image, i) => (
            <button
              key={image.src}
              type="button"
              onClick={() => go(i)}
              aria-label={`Tampilkan foto ${i + 1} dari ${
                galleryImages.length
              }`}
              aria-current={i === current ? 'true' : undefined}
              className="h-2 w-2 rounded-full transition-all duration-300 motion-reduce:transition-none"
              style={{
                backgroundColor:
                  i === current ? '#fff' : 'rgba(255,255,255,0.45)',
                transform: i === current ? 'scale(1.4)' : 'scale(1)',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
