export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Pendaftaran',
      description: 'Hubungi admin kami via WhatsApp atau form website.',
    },
    {
      number: '02',
      title: 'Asesmen Khusus',
      description: 'Proses tes secara langsung sesuai kebutuhan.',
    },
    {
      number: '03',
      title: 'Analisis Mendalam',
      description: 'Sistem dan pakar kami menyusun laporan yang komprehensif.',
    },
    {
      number: '04',
      title: 'Sesi Konsultasi',
      description:
        'Penyampaian hasil dan sesi konseling privat dengan psikolog.',
    },
  ];

  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-primary font-medium text-sm mb-4">
            Alur Layanan
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Proses Mudah & Transparan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Kami memastikan perjalanan Anda bersama Aditama berjalan nyaman dari awal sesi hingga akhir.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-[4.5rem] left-0 w-full h-[2px] bg-gray-100"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-start bg-white p-6 rounded-2xl lg:p-0 lg:bg-transparent lg:rounded-none shadow-sm lg:shadow-none border lg:border-transparent border-gray-100">
                <div className="text-6xl font-black text-blue-100 mb-6 lg:bg-white lg:pr-6 tracking-tighter">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed pr-4">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
