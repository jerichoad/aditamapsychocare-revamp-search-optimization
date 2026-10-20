'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { MessageCircle, CalendarDays, X } from 'lucide-react';
import { company } from '@/content/company';
import { analyticsEvent, trackContactClick, trackEvent } from '@/lib/analytics';

const JENIS_TES = [
  'Bakat Minat',
  'Intelegensi',
  'Tes untuk Instansi',
  'Kepribadian',
];

export default function BookingForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({ nama: '', tanggal: '', jenisTes: '' });
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        openButtonRef.current?.focus();
      }

      if (e.key === 'Tab' && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, input, select, a[href]'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener('keydown', onKey);
    document.getElementById(titleId)?.setAttribute('tabindex', '-1');
    document.getElementById(titleId)?.focus();
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, titleId]);

  const close = () => {
    setIsOpen(false);

    requestAnimationFrame(() => openButtonRef.current?.focus());
  };

  const isValid = form.nama && form.tanggal && form.jenisTes;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tanggal = form.tanggal
      ? new Date(`${form.tanggal}T00:00:00`).toLocaleDateString('id-ID', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      : '-';
    const pesan =
      `Halo Aditama Psychocare, saya ingin melakukan booking layanan:\n\n` +
      `*Nama/Instansi:* ${form.nama}\n` +
      `*Tanggal Konsultasi:* ${tanggal}\n` +
      `*Jenis Tes:* ${form.jenisTes}\n\n` +
      `Mohon konfirmasinya. Terima kasih!`;

    window.open(
      `${company.contact.whatsappUrl}?text=${encodeURIComponent(pesan)}`,
      '_blank',
      'noopener'
    );
    // Lead tercatat sebagai konversi utama. Hanya jenis tes yang dikirim —
    // nama & tanggal TIDAK ikut (data pribadi tidak boleh masuk analytics).
    trackEvent(analyticsEvent.generateLead, {
      jenis_tes: form.jenisTes,
      location: 'booking-form'
    });
    trackContactClick('whatsapp', 'booking-form', { jenis_tes: form.jenisTes });
    close();
    setForm({ nama: '', tanggal: '', jenisTes: '' });
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <a
          href={company.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackContactClick('whatsapp', 'booking-form-direct')}
          className="w-full sm:w-auto px-8 py-4 bg-wa text-white rounded-xl font-bold text-lg hover:bg-wa-hover hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
        >
          <MessageCircle size={22} aria-hidden="true" />
          Hubungi via WhatsApp
        </a>
        <button
          ref={openButtonRef}
          type="button"
          onClick={() => setIsOpen(true)}
          className="w-full sm:w-auto px-8 py-4 bg-white/10 border border-white/30 text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm cursor-pointer"
        >
          <CalendarDays size={22} aria-hidden="true" />
          Booking Layanan Sekarang
        </button>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          style={{
            backgroundColor: 'rgba(0,0,0,0.55)',
            backdropFilter: 'blur(4px)',
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 relative"
          >
            <button
              type="button"
              onClick={close}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer rounded-lg p-1"
              aria-label="Tutup form booking"
            >
              <X size={24} aria-hidden="true" />
            </button>

            <div className="mb-6 text-center">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CalendarDays
                  size={28}
                  className="text-primary"
                  aria-hidden="true"
                />
              </div>
              <h3
                id={titleId}
                className="text-2xl font-extrabold text-gray-900"
              >
                Booking Layanan
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                Isi form berikut dan kami akan konfirmasi via WhatsApp.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
              aria-label="Formulir booking layanan"
            >
              <div>
                <label
                  htmlFor="booking-nama"
                  className="block text-sm font-semibold text-gray-700 mb-1.5"
                >
                  Nama / Instansi{' '}
                  <span aria-hidden="true" className="text-red-500">
                    *
                  </span>
                </label>
                <input
                  id="booking-nama"
                  name="nama"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Contoh: Budi Santoso / SMA Negeri 1 Surabaya"
                  value={form.nama}
                  onChange={(e) => setForm({ ...form, nama: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="booking-tanggal"
                  className="block text-sm font-semibold text-gray-700 mb-1.5"
                >
                  Tanggal Konsultasi{' '}
                  <span aria-hidden="true" className="text-red-500">
                    *
                  </span>
                </label>
                <input
                  id="booking-tanggal"
                  name="tanggal"
                  type="date"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  value={form.tanggal}
                  onChange={(e) =>
                    setForm({ ...form, tanggal: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="booking-jenis"
                  className="block text-sm font-semibold text-gray-700 mb-1.5"
                >
                  Jenis Tes{' '}
                  <span aria-hidden="true" className="text-red-500">
                    *
                  </span>
                </label>
                <select
                  id="booking-jenis"
                  name="jenisTes"
                  required
                  value={form.jenisTes}
                  onChange={(e) =>
                    setForm({ ...form, jenisTes: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition text-sm appearance-none bg-white"
                >
                  <option value="" disabled>
                    Pilih jenis tes...
                  </option>
                  {JENIS_TES.map((jenis) => (
                    <option key={jenis} value={jenis}>
                      {jenis}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={!isValid}
                className="w-full py-3.5 bg-wa text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-wa-hover transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed active:scale-95 mt-2"
              >
                <MessageCircle size={20} aria-hidden="true" />
                Kirim via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
