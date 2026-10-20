/**
 * Tipe window.dataLayer & window.gtag untuk Google Tag Manager / GA4.
 *
 * Satu-satunya tempat deklarasi global agar tidak ada `any` tersebar
 * (AIO §7.5 butir 6: jangan pakai `aria-*`/cast untuk menambal tipe).
 */

export type DataLayerObject = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: DataLayerObject[];
    gtag?: (...args: unknown[]) => void;
  }
}
