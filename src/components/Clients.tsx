'use client';

const clients = [
  { id: 1, src: '/clients/1.png', alt: 'Client 1', name: 'SMPN 1 Kediri' },
  {
    id: 2,
    src: '/clients/2.png',
    alt: 'Client 2',
    name: 'SMP Labschool UNESA',
  },
  {
    id: 3,
    src: '/clients/3.png',
    alt: 'Client 3',
    name: 'SMP Muhammadiyah 3 Waru',
  },
  {
    id: 4,
    src: '/clients/4.png',
    alt: 'Client 4',
    name: 'SD Muhammadiyah Taman',
  },
  {
    id: 5,
    src: '/clients/5.png',
    alt: 'Client 5',
    name: 'SMPN 1 Prambon Sidoajo',
  },
  { id: 6, src: '/clients/6.png', alt: 'Client 6', name: 'SMPN 2 Balongbendo' },
  { id: 7, src: '/clients/7.png', alt: 'Client 7', name: 'MAN 1 Kota Kediri' },
  { id: 8, src: '/clients/8.png', alt: 'Client 8', name: 'SMAN 8 Kediri' },
];

// Duplicate for seamless infinite marquee
const marqueeItems = [...clients, ...clients];

export default function Clients() {
  return (
    <section id="klien" className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-primary font-medium text-sm mb-4">
            Dipercaya oleh Banyak Instansi
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Klien &amp; Mitra Kami
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
            Kami telah dipercaya lebih dari <strong>150 instansi</strong> di
            berbagai wilayah — mulai dari sekolah, lembaga pendidikan, hingga
            perusahaan swasta dan pemerintah.
          </p>
        </div>

        {/* Marquee Track */}
        <div
          className="relative"
          style={{
            maskImage:
              'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
          }}
        >
          <div className="flex gap-10 w-max animate-[marquee_30s_linear_infinite]">
            {marqueeItems.map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="flex flex-col items-center justify-center flex-shrink-0 px-6 py-5 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all duration-300 group gap-3"
                style={{ minWidth: '180px', height: '120px' }}
              >
                <img
                  src={client.src}
                  alt={client.alt}
                  className="max-h-[67px] w-auto object-contain transition-all duration-300"
                  draggable={false}
                />
                <span className="text-[11px] font-semibold text-gray-400 group-hover:text-primary transition-colors duration-300 text-center leading-tight tracking-wide">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom divider decoration */}
        <div className="mt-14 flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-200 max-w-xs" />
          <span className="text-gray-400 text-sm font-medium tracking-wide">
            150+ Instansi Terpercaya
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-200 max-w-xs" />
        </div>
      </div>
    </section>
  );
}
