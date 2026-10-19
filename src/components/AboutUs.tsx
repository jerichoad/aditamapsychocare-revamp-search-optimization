'use client';
import { CheckCircle2 } from 'lucide-react';
import { useEffect, useState } from 'react';

const galleryImages = [
  '/gallery/1.jpeg',
  '/gallery/2.jpeg',
  '/gallery/3.jpeg',
  '/gallery/4.jpeg',
  '/gallery/5.jpeg',
  '/gallery/6.jpeg',
];

export default function AboutUs() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % galleryImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="tentang" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute inset-0 bg-blue-100 rounded-[2rem] transform translate-x-4 translate-y-4 -z-10"></div>
            <div
              className="relative rounded-[2rem] overflow-hidden aspect-[4/3] bg-gray-200 shadow-xl touch-pan-y"
              onTouchStart={(e) => {
                const touchDown = e.touches[0].clientX;
                e.currentTarget.setAttribute(
                  'data-touch-down',
                  touchDown.toString()
                );
              }}
              onTouchEnd={(e) => {
                const touchDownAttr =
                  e.currentTarget.getAttribute('data-touch-down');
                if (!touchDownAttr) return;

                const touchDown = parseFloat(touchDownAttr);
                const touchUp = e.changedTouches[0].clientX;
                const diff = touchDown - touchUp;

                if (diff > 50) {
                  // Swipe Left (Next)
                  setCurrent((prev) => (prev + 1) % galleryImages.length);
                } else if (diff < -50) {
                  // Swipe Right (Prev)
                  setCurrent((prev) =>
                    prev === 0 ? galleryImages.length - 1 : prev - 1
                  );
                }

                e.currentTarget.removeAttribute('data-touch-down');
              }}
            >
              {galleryImages.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`Aditama Psychocare Gallery ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                  style={{ opacity: i === current ? 1 : 0 }}
                  draggable="false"
                />
              ))}
              {/* Dot indicators */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
                {galleryImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className="w-2 h-2 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor:
                        i === current ? '#fff' : 'rgba(255,255,255,0.45)',
                      transform: i === current ? 'scale(1.4)' : 'scale(1)',
                    }}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-primary font-medium text-sm mb-4">
              Tentang Kami
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              Lahir dari Kepedulian yang Mendalam terhadap Generasi Muda
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Aditama Psychocare hadir dari kegelisahan bahwa banyak individu —
              khususnya siswa dan generasi muda — menjalani proses pendidikan
              tanpa benar-benar memahami potensi dan arah masa depan mereka.
              Bukan sekadar penyedia layanan psikologi, kami hadir sebagai mitra
              yang membantu setiap individu menemukan makna, arah, dan versi
              terbaik dari dirinya.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Selama hampir <strong>23 tahun</strong> berdiri, Aditama
              Psychocare telah mendampingi lebih dari{' '}
              <strong>50.000 siswa</strong> dan menjalin kerja sama dengan lebih
              dari <strong>150 instansi</strong> di berbagai wilayah, khususnya
              Jawa Timur dan Jawa Tengah — bukan sekadar statistik, melainkan
              representasi dari individu-individu yang telah menemukan arah baru
              dalam hidup mereka.
            </p>

            <div className="space-y-4 mb-8 text-gray-700">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-wa mt-0.5 shrink-0" size={24} />
                <p>
                  Pendekatan psikometrik terstandar secara ilmiah dan relevan
                  secara praktis.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-wa mt-0.5 shrink-0" size={24} />
                <p>
                  Melayani kebutuhan pendidikan, keluarga, hingga dunia kerja.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-wa mt-0.5 shrink-0" size={24} />
                <p>
                  Didukung tenaga profesional berpengalaman yang berdampak
                  secara emosional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
