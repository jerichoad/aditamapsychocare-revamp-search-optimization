'use client';

import Script from 'next/script';
import { useSyncExternalStore } from 'react';
import { GTM_ID } from '@/lib/analytics';
import { consentStore, gtagConsentUpdate } from '@/lib/consent';

/**
 * Pemuat Google Tag Manager, consent-gated.
 *
 * Kenapa Client Component:
 * - Harus tahu status consent dari `localStorage` (browser API) → tidak bisa
 *   dirender dari server.
 * - `onLoad`/`onReady` pada `Script` hanya bekerja di Client Component, dan
 *   pilihan consent berasal dari `localStorage` — keduanya browser-only,
 *   sehingga komponen ini tidak bisa dirender sepenuhnya dari server.
 *
 * Kenapa `afterInteractive`:
 * - Dokumentasi resmi Next.js menyebut "Tag managers" dan "Analytics" sebagai
 *   contoh tepat strategi ini; skrip tidak memblokir render (AIO §7.1).
 *
 * Perilaku tanpa env `NEXT_PUBLIC_GTM_ID`:
 * - Tidak merender apa pun. Build/deploy tetap hijau, dan tidak ada request
 *   ke Google. Ini mencegah developer atau staging tanpa ID mengotori properti
 *   analytics produksi.
 *
 * Urutan boot untuk pilihan yang sudah tersimpan:
 * 1. default consent `denied` (id `gtm-consent-default`) — didorong ke
 *    `dataLayer` sebelum `gtm.js` termuat, sehingga Consent Mode v2 sudah
 *    terdefinisi saat tag GA4 dievaluasi,
 * 2. snippet pemuat `gtm.js` (id `gtm-loader`),
 * 3. update ke `granted` (dieksekusi oleh `gtagConsentUpdate` setelah gtm.js
 *    ada, lihat `src/lib/consent.ts`).
 *
 * Event `consent_update` TIDAK dikirim di sini — itu milik `ConsentBanner`
 * (satu sumber, satu event) agar tidak muncul ganda di setiap page view.
 */
export default function GoogleTagManager() {
  const consent = useSyncExternalStore(
    consentStore.subscribe,
    consentStore.getSnapshot,
    consentStore.getServerSnapshot
  );

  // Belum memilih atau menolak → tanpa <Script>, tanpa request ke Google.
  if (!GTM_ID || consent !== 'granted') return null;

  return (
    <>
      {/* Deklarasi Consent Mode v2: default 'denied' wajib ada sebelum gtm.js
          agar tag GA4 yang mewajibkan consent tidak tertahan. State akhirnya
          di-`update` ke 'granted' oleh gtagConsentUpdate(). */}
      <Script id="gtm-consent-default" strategy="afterInteractive">
        {`window.gtag = window.gtag || function(){window.dataLayer.push(arguments)};
window.gtag('consent', 'default', { ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'denied' });`}
      </Script>
      <Script
        id="gtm-loader"
        strategy="afterInteractive"
        onReady={gtagConsentUpdate}
        dangerouslySetInnerHTML={{
          __html:
            "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':" +
            "new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0]," +
            "j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=" +
            "'https://www.googletagmanager.com/gtm.js?id='+i+dl;" +
            "f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','" +
            GTM_ID +
            "');"
        }}
      />
    </>
  );
}
