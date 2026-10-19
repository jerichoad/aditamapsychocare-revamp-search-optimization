import { UserRound, GraduationCap, UsersRound } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 'potensi-assessment',
      icon: <GraduationCap size={32} className="text-yellow-600" />,
      bgClass: 'bg-yellow-100',
      title: 'Tes Potensi Siswa & Assessment Sekolah',
      description:
        'Menggali minat, bakat, dan potensi kognitif siswa sekaligus pemetaan profil psikologis massal untuk optimalisasi sistem pendidikan di sekolah.',
    },
    {
      id: 'konsultasi-individu',
      icon: <UserRound size={32} className="text-blue-600" />,
      bgClass: 'bg-blue-100',
      title: 'Konsultasi Psikologi Individu',
      description:
        'Dukungan profesional untuk menangani masalah emosional, karir, dan pengembangan diri.',
    },
    {
      id: 'assessment-rekrutmen',
      icon: <UsersRound size={32} className="text-purple-600" />,
      bgClass: 'bg-purple-100',
      title: 'Assessment Rekrutmen',
      description:
        'Seleksi dan pemetaan kompetensi karyawan untuk perusahaan dan instansi.',
    },
  ];

  return (
    <section id="layanan" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-primary font-medium text-sm mb-4">
            Layanan Kami
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Solusi Psikologi Tepat Guna
          </h2>
          <p className="text-lg text-gray-600">
            Kami menyediakan layanan menyeluruh yang dirancang secara spesifik.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col items-start group"
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300 ${service.bgClass}`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-8 flex-grow">
                {service.description}
              </p>
              <a
                href={`https://wa.me/6285190849041?text=${encodeURIComponent(
                  `Halo Aditama Psychocare, saya ingin bertanya lebih lanjut mengenai layanan ${service.title}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center w-full py-2.5 px-4 rounded-xl border border-gray-200 font-semibold text-gray-700 hover:text-primary hover:border-primary transition-colors bg-white"
              >
                Tanya Lebih Lanjut
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
