# Google Analytics, SEO, AEO, GEO, AIO — Ringkasan Teknis

| Area    | Fungsi                                                    | Status         |
| ------- | --------------------------------------------------------- | -------------- |
| **GA**  | Ukur perilaku pengunjung via Google Tag Manager           | ✅ butuh `env` |
| **SEO** | Google/Bing bisa crawl → index → ranking                  | ✅             |
| **AEO** | Konten terpilih sebagai jawaban langsung (snippet/voice)  | ✅             |
| **GEO** | ChatGPT/Claude/Gemini/Perplexity membaca & mengutip fakta | ✅             |
| **AIO** | Markup semantik, aksesibel, cepat, deterministik          | ✅             |

---

## 1. Google Analytics (GTM)

**Aktifkan:** isi `NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX` di `.env.local` atau dashboard hosting.

**File:**

| File                                                   | Peran                                                                                        |
| ------------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| `lib/analytics.ts`                                     | Satu pintu event: `trackEvent`, `trackContactClick`, `GTM_ID`                                |
| `lib/consent.ts`                                       | Store 3-state (`unknown`/`granted`/`denied`) via `useSyncExternalStore`; `gtagConsentUpdate` |
| `components/analytics/GoogleTagManager.tsx`            | Pemuat `gtm.js` + Consent Mode v2; render `null` tanpa consent                               |
| `components/analytics/ConsentBanner.tsx`               | Banner accessible, hanya menyimpan pilihan                                                   |
| `ConsentSettingsButton.tsx` / `TrackedContactLink.tsx` | Tombol cabut consent / leaf `onClick` di Server Component                                    |

**Event:**

| Event            | Pemicu                      | Parameter                                                  |
| ---------------- | --------------------------- | ---------------------------------------------------------- |
| `generate_lead`  | Submit booking              | `jenis_tes`, `location` (nama & tanggal **tidak** dikirim) |
| `contact_click`  | Klik WA/tel/mail            | `method`, `location`                                       |
| `consent_update` | Otomatis saat `gtm.js` siap | `consent_action`                                           |

Di GTM: buat **Trigger → Custom Event** per nama di atas, tandai `generate_lead` sebagai Key Event.

---

## 2. SEO

Root layout (`app/layout.tsx`) memakai Metadata API bawaan: `metadataBase`, title template,
`robots`/`googleBot`, verifikasi Search Console, OG + Twitter, `viewport` terpisah.
Semua nilai site-wide di `lib/seo.ts` (`siteConfig`), tiap halaman lewat `buildMetadata()`.

- **Sitemap** (`app/sitemap.ts`): diturunkan dari `serviceSlugs` (sama dengan `generateStaticParams`), `lastModified` dari `company.lastUpdated` bukan `new Date()`.
- **Robots** (`app/robots.ts`): grup umum, search engine, dan AI crawler (`GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`); blokir `/api/`, `/admin/`.
- **JSON-LD** (`lib/schemas.ts`): `ProfessionalService` + `WebSite` (global), `Service`, `FAQPage`, `BreadcrumbList` (props sama dengan breadcrumb UI). Tag `<script type="application/ld+json">` native, disanitasi `.replace(/</g, '\u003c')`, hanya info yang visible.
- **OG image** 1200×630 via `ImageResponse` saat build; **404** mengembalikan status HTTP asli.

---

## 3. AEO

**Pattern:** `h1` → `<DirectAnswer>` (40–60 kata) → `<KeyTakeaways>` → elaborasi → HowTo/tabel → FAQ → CTA.

**Rules:** heading pertanyaan dan jawaban harus **bersebelahan di DOM** — tanpa badge/gambar/CTA di antaranya (memutus ekstraktabilitas).

- Komponen di `components/content/`: `DirectAnswer`, `QuestionHeading` (level via prop, bukan ukuran font), `KeyTakeaways`, `HowTo` (`<ol>`), `ComparisonTable` (`<table>` + `<caption>` + `<th scope>`).
- **FAQ** pakai `<details>`/`<summary>` native: jawaban tetap di HTML walau tertutup, 0 byte JS, teks schema identik dengan teks terlihat. Sumber tunggal `content/faq.ts` (16 item) dipakai beranda + `/faq`.
- **Format per tipe:** definisi → paragraf "X adalah…"; syarat → daftar berbutir; cara → daftar bernomor (verba aksi); beda → tabel; biaya → kalimat + tabel.
- Setiap jawaban **self-contained**, lolos baca-lisan ≤ 30 detik, tanpa rujukan visual.

---

## 4. GEO — Generative Engine Optimization

**Source:** semua di `content/company.ts` → dipakai halaman HTML, `llms.txt`, `llms-full.txt`, `company.json`, dan JSON-LD. Ubah sekali, konsisten di semua tempat.

| Endpoint         | Isi (per bagian file)                                                                                                                                                                                                                                  | Cache  |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------ |
| `/llms.txt`      | Deskripsi 1–2 kalimat (siapa, apa, untuk siapa, sejak kapan) → Fakta Perusahaan (nama resmi, tahun berdiri, alamat, WA, email, jam operasional, wilayah layanan) → Layanan (nama + deskripsi 1 kalimat + harga + URL kanonis) → Kredensial & Legalitas | 24 jam |
| `/llms-full.txt` | Profil Perusahaan (narasi lengkap) → Legalitas & Kredensial (penerbit + nomor) → Layanan per layanan (jawaban langsung, detail, audiens, biaya, isi paket, langkah) → Paket & Biaya → seluruh FAQ → kontak penutup                                     | 1 jam  |
| `/company.json`  | Key terstruktur: `name`, `legalName`, `foundedYear`, `address`, `contact` (email/telepon/jam), `serviceArea`, `services`, `credentials`, `officialProfiles` + `canonicalUrl` dan `lastUpdated`                                                         | 1 jam  |

Builder di `lib/llms.ts` menyusun dari `company.ts` + `pricing.ts` + `faq.ts` + `services.ts` — bukan salinan yang bisa basi. Route memakai `Content-Type: text/plain; charset=utf-8` + `s-maxage`.

**Gaya penulisan:** kalimat fakta mandiri (subjek eksplisit, bukan "kami"), angka berkonteks penuh ("Rp75.000 per peserta"), tanggal ISO + human-readable. Tanpa superlatif tanpa sumber — diganti kredensial terverifikasi (SIIP, STR, akta).

**Metrik:** uji kuartalan tanya 2–3 AI assistant → catat hallucination = fakta yang belum AI-readable.

---

## 5. AIO

**Place:** `<header>`/`<nav aria-label>`/`<main id="main-content">`/`<footer>` di layout (tepat satu `<main>`); skip link sebagai fokus pertama; 0 heading melompat level.

**Server-first:** `'use client'` hanya di leaf (state/event/browser API).

| Komponen        | Perbaikan                                                                                                                                           |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `FadeInSection` | Dulu `opacity-0` + observer → halaman tak terlihat bila JS gagal. Kini 0-JS, animasi via CSS `animation-timeline`, mati di `prefers-reduced-motion` |
| `Statistics`    | Counter animasi → `<dl>` statis; tahun turunan `foundedYear` ("24+" otomatis)                                                                       |
| `Pricing`       | Tab klien → kedua kategori selalu di DOM                                                                                                            |
| Header/Footer   | `'use client'` besar → server + `MobileNav` kecil                                                                                                   |

Sisa JS aplikasi ±6 KB/halaman (`BookingForm`).

**Aset & config:** `next/image` (AVIF/WebP, `remotePatterns: []`, alt deskriptif), `next/font` Inter `display: swap`, `trailingSlash: false`, `poweredByHeader: false`, `optimizePackageImports: ['lucide-react']`, `:focus-visible` global, baris 68ch.

---
