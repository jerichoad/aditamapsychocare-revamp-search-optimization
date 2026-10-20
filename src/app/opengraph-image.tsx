import { ImageResponse } from 'next/og';
import { company } from '@/content/company';

export const alt = `${company.tradeName} Layanan Psikologi Profesional`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #1d4ed8 0%, #0a192f 100%)',
          padding: '72px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: 'rgba(255,255,255,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontSize: 34,
              fontWeight: 800,
            }}
          >
            A
          </div>
          <div
            style={{
              color: '#ffffff',
              fontSize: 32,
              fontWeight: 700,
              letterSpacing: -0.5,
            }}
          >
            {company.tradeName}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              color: '#ffffff',
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: -2,
              maxWidth: 950,
            }}
          >
            Layanan Psikologi Profesional
          </div>
          <div
            style={{
              color: '#bfdbfe',
              fontSize: 30,
              marginTop: 24,
              maxWidth: 900,
              lineHeight: 1.35,
            }}
          >
            Tes potensi siswa, konsultasi individu, dan assessment rekrutmen
            Jawa Timur &amp; Jawa Tengah
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            color: '#93c5fd',
            fontSize: 26,
          }}
        >
          <span>aditamapsychocare.com</span>
          <span>Sejak {company.foundedYear}</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
