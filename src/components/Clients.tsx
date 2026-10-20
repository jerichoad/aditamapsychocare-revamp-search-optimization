import Image from 'next/image';

const clients = [
  { id: 1, src: '/clients/1.png', name: 'SMPN 1 Kediri' },
  { id: 2, src: '/clients/2.png', name: 'SMP Labschool UNESA' },
  { id: 3, src: '/clients/3.png', name: 'SMP Muhammadiyah 3 Waru' },
  { id: 4, src: '/clients/4.png', name: 'SD Muhammadiyah Taman' },
  { id: 5, src: '/clients/5.png', name: 'SMPN 1 Prambon Sidoarjo' },
  { id: 6, src: '/clients/6.png', name: 'SMPN 2 Balongbendo' },
  { id: 7, src: '/clients/7.png', name: 'MAN 1 Kota Kediri' },
  { id: 8, src: '/clients/8.png', name: 'SMAN 8 Kediri' },
];

export default function Clients() {
  return (
    <section
      id="klien"
      aria-labelledby="klien-heading"
      className="py-20 bg-slate-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-primary font-medium text-sm mb-4">
            Dipercaya oleh Banyak Instansi
          </p>
          <h2
            id="klien-heading"
            className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight"
          >
            Klien &amp; Mitra Kami
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
            Kami telah dipercaya lebih dari <strong>150 instansi</strong> di
            berbagai wilayah mulai dari sekolah, lembaga pendidikan, hingga
            perusahaan swasta dan pemerintah.
          </p>
        </div>

        <div
          className="relative motion-reduce:overflow-x-auto"
          style={{
            maskImage:
              'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
          }}
        >
          <ul className="flex gap-10 w-max animate-[marquee_30s_linear_infinite] motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:animate-none motion-reduce:justify-center">
            {clients.map((client) => (
              <li
                key={client.id}
                className="flex flex-col items-center justify-center flex-shrink-0 px-6 py-5 bg-white rounded-2xl shadow-sm border border-gray-100 gap-3"
                style={{ minWidth: '180px' }}
              >
                <Image
                  src={client.src}
                  alt={`Logo ${client.name}`}
                  width={140}
                  height={67}
                  className="max-h-[67px] w-auto object-contain"
                  sizes="180px"
                />
                <span className="text-[11px] font-semibold text-gray-500 text-center leading-tight tracking-wide">
                  {client.name}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-14 text-center text-gray-500 text-sm font-medium tracking-wide">
          150+ Instansi Terpercaya
        </p>
      </div>
    </section>
  );
}
