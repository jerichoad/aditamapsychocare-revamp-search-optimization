'use client';

import { useId, useSyncExternalStore } from 'react';
import { consentStore, setConsent } from '@/lib/consent';

/**
 * Banner persetujuan cookie/statistik.
 *
 * Desain (mengikuti AIO §8.5 — aksesibilitas operasional):
 * - `<section role="region" aria-label>` agar dikenali screen reader sebagai
 *   wilayah khusus, bukan konten halaman.
 * - `aria-describedby` menautkan wilayah ke teks penjelasannya, sehingga
 *   pengguna screen reader mendengar konteks sebelum mencapai tombol.
 * - Tombol adalah `<button>` native → otomatis bisa Tab/Enter/Space.
 * - Tak dianimasikan: tidak ada transisi/animasi masuk (0 KB visual effect),
 *   dan jika nanti dianimasikan wajib tunduk pada `prefers-reduced-motion`
 *   (AIO §6 FR-4). Warna memakai token situs (`bg-navy`, `bg-primary`).
 *
 * Logika:
 * - Hanya tampil saat `consent === 'unknown'` (belum pernah memilih).
 * - "Terima" / "Tolak" hanya menyimpan pilihan lalu mengumumkan via store.
 *   `GoogleTagManager` yang berlangganan store yang sama akan memuat GTM.
 * - Event `consent_update` sengaja TIDAK dikirim di sini: satu-satunya
 *   pengirim adalah `GoogleTagManager` (saat GTM benar-benar aktif), agar
 *   tidak ada event ganda dan tidak ada event "ditolak" yang sempat diantrekan.
 */
export default function ConsentBanner() {
  const consent = useSyncExternalStore(
    consentStore.subscribe,
    consentStore.getSnapshot,
    consentStore.getServerSnapshot
  );
  const descriptionId = useId();

  if (consent !== 'unknown') return null;

  return (
    <section
      role="region"
      aria-label="Persetujuan penggunaan cookie statistik"
      aria-describedby={descriptionId}
      className="fixed inset-x-0 bottom-0 z-40 px-4 pb-4 sm:px-6 sm:pb-6"
    >
      <div className="mx-auto max-w-3xl rounded-2xl bg-navy p-5 text-white shadow-2xl sm:p-6">
        <p id={descriptionId} className="text-sm leading-relaxed sm:text-base">
          <strong className="font-bold">Kami menghargai privasi Anda.</strong>{' '}
          Kami menggunakan Google Tag Manager untuk statistik kunjungan anonim
          (halaman dikunjungi, tombol diklik). Data hanya dikirim setelah Anda
          menekan Terima.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={() => setConsent('denied')}
            className="rounded-xl border border-white/30 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Tolak
          </button>
          <button
            type="button"
            onClick={() => setConsent('granted')}
            className="rounded-xl bg-primary px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-primary/90"
          >
            Terima Statistik
          </button>
        </div>
      </div>
    </section>
  );
}
