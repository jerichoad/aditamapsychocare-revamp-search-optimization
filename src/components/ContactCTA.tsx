import BookingForm from './BookingForm';

export default function ContactCTA() {
  return (
    <section
      id="kontak"
      aria-labelledby="kontak-heading"
      className="py-24 bg-white"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-800 rounded-[2.5rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-white opacity-10 blur-3xl"
          />

          <div className="relative z-10">
            <h2
              id="kontak-heading"
              className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight"
            >
              Siap Memulai Perjalanan Psikologi Anda?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Hubungi tim kami hari ini untuk berdiskusi tentang bagaimana kami
              bisa membantu Anda, organisasi, atau institusi sekolah Anda.
            </p>

            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
}
