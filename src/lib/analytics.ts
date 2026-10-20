import type { DataLayerObject } from '@/types/analytics';

/**
 * Lapisan pengiriman event ke Google Tag Manager.
 *
 * Konsep yang diterapkan (lihat docs/GOOGLE-ANALYTICS.md §1.3):
 * - Satu pintu masuk untuk semua event (`trackEvent`) — halaman/komponen tidak
 *   menyentuh `window.dataLayer` langsung.
 * - Tanpa consent, `GoogleTagManager` tidak dirender sama sekali: 0 request ke
 *   Google (consent-gated, bukan sekadar ditandai).
 * - Aman dipanggil kapan pun: event yang dikirim sebelum GTM termuat akan
 *   mengantre di `dataLayer` dan diteruskan GTM saat siap — tidak ada event
 *   hilang, dan tidak pernah melempar error ke UI pengguna.
 */

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID?.trim() || undefined;

/**
 * Nama event yang dipakai di GTM. Nilainya stabil dan versi-kontrol:
 * mengganti nama di sini berarti trigger di GTM harus diperbarui juga.
 */
export const analyticsEvent = {
  /** Form booking terkirim (generate lead). */
  generateLead: 'generate_lead',
  /** Klik tautan WhatsApp / telepon / email (contact intent). */
  contactClick: 'contact_click',
  /** Pengunjung mengirim pilihan consent. */
  consentUpdate: 'consent_update',
  /** Halaman dibaca sampai 90%. */
  readComplete: 'read_complete'
} as const;

export type ContactMethod = 'whatsapp' | 'telepon' | 'email';

export function pushToDataLayer(payload: DataLayerObject): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(payload);
}

/**
 * Kirim event ke GTM. `event` sengaja berada di key pertama agar menjadi field
 * `event` yang dibaca trigger Custom Event di GTM; `params` menyusul setelahnya
 * sehingga tidak bisa menimpa nama event.
 */
export function trackEvent(event: string, params: DataLayerObject = {}): void {
  pushToDataLayer({ event, ...params });
}

/**
 * Kontak intent. Dipakai tombol WhatsApp, `tel:`, dan `mailto:`.
 * `location` = asal klik (mis. 'header', 'footer', 'hero', 'layanan-detail')
 * agar bisa dibedakan di GA4 tanpa menduplikasi komponen.
 */
export function trackContactClick(
  method: ContactMethod,
  location: string,
  extra: DataLayerObject = {}
): void {
  trackEvent(analyticsEvent.contactClick, { method, location, ...extra });
}
