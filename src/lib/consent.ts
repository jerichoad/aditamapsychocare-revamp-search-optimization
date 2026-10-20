/**
 * Consent gate Google Tag Manager.
 *
 * Keputusan produk (docs/GOOGLE-ANALYTICS.md §1.2): GA tidak boleh memuat
 * apa pun sebelum pengunjung menyetujui. Strategi:
 *
 * - Pilihan disimpan di `localStorage` (bukan cookie) — tidak ada data yang
 *   dikirim ke pihak ketiga untuk menyimpan preferensi.
 * - Status dibedakan menjadi 3: belum memilih, diizinkan, ditolak. "Belum
 *   memilih" dan "ditolak" sama-sama berarti GTM tidak dimuat.
 * - `consentStore.subscribe` memakai `useSyncExternalStore` sehingga banner &
 *   skrip GTM membaca status yang sama tanpa hydration mismatch (server =
 *   "belum memilih", klien menyusul setelah mount).
 */

export type ConsentStatus = 'unknown' | 'granted' | 'denied';

export const CONSENT_STORAGE_KEY = 'aditama-consent';
export const CONSENT_CHANGE_EVENT = 'aditama-consent-change';

function readConsent(): ConsentStatus {
  // Dipakai juga sebagai getServerSnapshot: saat render server selalu "unknown"
  // agar HTML server tidak pernah memuat skrip pihak ketiga.
  if (typeof window === 'undefined') return 'unknown';

  try {
    const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (value === 'granted' || value === 'denied') return value;
    return 'unknown';
  } catch {
    // Mode privat / storage diblokir: perlakukan sebagai belum memilih.
    return 'unknown';
  }
}

function subscribe(onChange: () => void): () => void {
  if (typeof window === 'undefined') return () => {};

  window.addEventListener('storage', onChange);
  window.addEventListener(CONSENT_CHANGE_EVENT, onChange);
  return () => {
    window.removeEventListener('storage', onChange);
    window.removeEventListener(CONSENT_CHANGE_EVENT, onChange);
  };
}

export const consentStore = {
  getSnapshot: readConsent,
  getServerSnapshot: (): ConsentStatus => 'unknown',
  subscribe
};

export function setConsent(status: Exclude<ConsentStatus, 'unknown'>): void {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, status);
  } catch {
    // Gagal menyimpan tetap diproses: consent berlaku untuk sesi ini saja.
  }
  window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
}

/**
 * Naikkan Consent Mode v2 ke `granted`. Dipanggil dari `GoogleTagManager`
 * lewat `onReady` snippet `gtm.js` — jadi `gtag` (dari gtm.js) sudah ada.
 * Juga mengirim event `consent_update` (satu-satunya sumber event ini).
 */
export function gtagConsentUpdate(): void {
  if (typeof window.gtag !== 'function') return;
  window.gtag('consent', 'update', {
    ad_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted',
    analytics_storage: 'granted'
  });
  window.gtag('event', 'consent_update', { consent_action: 'granted' });
}
