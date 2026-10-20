'use client';

import { CONSENT_STORAGE_KEY, CONSENT_CHANGE_EVENT } from '@/lib/consent';

/**
 * Tombol "Cookie" di footer untuk meninjau ulang pilihan persetujuan.
 *
 * Kenapa reload penuh: jika GTM sudah dimuat, sekadar menghapus `localStorage`
 * tidak mematikan skrip yang sedang berjalan. Reload memastikan halaman
 * berikutnya boot tanpa GTM (banner muncul kembali) — pencabutan yang nyata,
 * bukan kosmetik. Aksi ini jarang dilakukan pengguna sehingga biaya reload
 * dapat diterima.
 */
export default function ConsentSettingsButton() {
  const reset = () => {
    try {
      window.localStorage.removeItem(CONSENT_STORAGE_KEY);
    } catch {
      // Storage tidak tersedia: tetap reload agar state sesi ter-reset.
    }
    window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
    window.location.reload();
  };

  return (
    <button
      type="button"
      onClick={reset}
      className="hover:text-white transition-colors underline underline-offset-4"
    >
      Cookie
    </button>
  );
}
