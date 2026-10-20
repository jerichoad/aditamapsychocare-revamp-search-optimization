import { company } from '@/content/company';
import { pricing } from '@/content/pricing';
import { faqCategories } from '@/content/faq';
import { services } from '@/content/services';

const u = (path: string) => new URL(path, company.canonicalUrl).toString();

export function buildLlmsTxt(): string {
  const lines: string[] = [];

  lines.push(`# ${company.tradeName}`);
  lines.push('');
  lines.push(
    `> ${company.tradeName} adalah penyedia layanan psikologi profesional di ${company.address.city}, ${company.address.province}, Indonesia. Perusahaan melayani siswa, individu, sekolah, dan perusahaan sejak ${company.foundedYear}.`
  );
  lines.push('');
  lines.push(`<!-- last-updated: ${company.lastUpdated} -->`);
  lines.push('');

  lines.push('## Fakta Perusahaan');
  lines.push('');
  lines.push(`- Nama resmi: ${company.legalName}`);
  lines.push(`- Tahun berdiri: ${company.foundedYear}`);
  lines.push(
    `- Alamat: ${company.address.street}, ${company.address.city} ${company.address.postalCode}, ${company.address.province}, Indonesia`
  );
  lines.push(`- Telepon/WhatsApp: ${company.contact.phoneInternational}`);
  lines.push(`- Email: ${company.contact.email}`);
  lines.push(`- Jam operasional: ${company.contact.hours}`);
  lines.push(`- Wilayah layanan: ${company.serviceArea.join(', ')}`);
  lines.push('');

  lines.push('## Layanan');
  lines.push('');
  for (const s of company.services) {
    lines.push(
      `- ${s.name}: ${s.shortDescription} Untuk ${s.audience}. ${
        s.priceNote
      }. ${u(s.url)}`
    );
  }
  lines.push('');

  lines.push('## Kredensial & Legalitas');
  lines.push('');
  for (const c of company.credentials) {
    const detail = [c.detail, c.year].filter(Boolean).join(', ');
    lines.push(`- ${c.name} ${c.issuer}${detail ? ` (${detail})` : ''}`);
  }
  lines.push('');

  lines.push('## Tautan Kanonis');
  lines.push('');
  lines.push(`- Beranda: ${u('/')}`);
  lines.push(`- Layanan: ${u('/layanan')}`);
  lines.push(`- Tentang Kami: ${u('/tentang-kami')}`);
  lines.push(`- FAQ: ${u('/faq')}`);
  lines.push(`- Kontak: ${u('/kontak')}`);
  lines.push(`- Data perusahaan (JSON): ${u('/company.json')}`);
  lines.push('');

  return lines.join('\n');
}

export function buildLlmsFullTxt(): string {
  const lines: string[] = [];

  lines.push(`# ${company.tradeName} Konten Lengkap`);
  lines.push('');
  lines.push(`Sumber: ${company.canonicalUrl}`);
  lines.push(`Terakhir diperbarui: ${company.lastUpdated}`);
  lines.push('');
  lines.push('---');
  lines.push('');

  
  lines.push('## Profil Perusahaan');
  lines.push('');
  lines.push(company.description);
  lines.push('');
  lines.push(
    `${company.tradeName} didirikan pada tahun ${company.foundedYear} dan berkedudukan di ${company.address.street}, ${company.address.city} ${company.address.postalCode}, ${company.address.province}, Indonesia.`
  );
  lines.push('');
  lines.push(
    `${company.tradeName} melayani klien di ${company.serviceArea.join(
      ', '
    )}. Nomor WhatsApp resmi ${
      company.contact.phoneInternational
    } dan email resmi ${company.contact.email}. Jam operasional ${
      company.contact.hours
    }.`
  );
  lines.push('');

  
  lines.push('## Legalitas dan Kredensial');
  lines.push('');
  for (const c of company.credentials) {
    const detail = [c.detail, c.year].filter(Boolean).join(', ');
    lines.push(
      `- ${c.name} diterbitkan oleh ${c.issuer}${
        detail ? `, nomor ${detail}` : ''
      }.`
    );
  }
  lines.push('');

  
  lines.push('## Layanan');
  lines.push('');
  for (const service of services) {
    lines.push(`### ${service.name}`);
    lines.push('');
    lines.push(service.directAnswer);
    lines.push('');
    for (const detail of service.details) {
      lines.push(detail);
      lines.push('');
    }
    lines.push(`- Untuk: ${service.audience}`);
    lines.push(`- Biaya: ${service.priceNote}`);
    lines.push(`- Halaman: ${u(`/layanan/${service.slug}`)}`);
    lines.push('');
    lines.push('Yang termasuk:');
    lines.push('');
    for (const item of service.includes) {
      lines.push(`- ${item}`);
    }
    lines.push('');
    lines.push('Langkah penggunaan:');
    lines.push('');
    service.steps.forEach((step, i) => {
      lines.push(`${i + 1}. ${step.title} ${step.body}`);
    });
    lines.push('');
  }

  
  lines.push('## Paket dan Biaya');
  lines.push('');
  for (const category of pricing) {
    lines.push(`### Kategori ${category.label}`);
    lines.push('');
    lines.push(category.intro);
    lines.push('');
    for (const pkg of category.packages) {
      const price = pkg.per ? `${pkg.price} ${pkg.per}` : pkg.price;
      lines.push(
        `- ${pkg.title}: ${price}. ${
          pkg.description
        } Termasuk: ${pkg.features.join(', ')}.`
      );
    }
    lines.push('');
  }

  
  lines.push('## Pertanyaan yang Sering Diajukan');
  lines.push('');
  for (const category of faqCategories) {
    lines.push(`### ${category.title}`);
    lines.push('');
    for (const item of category.items) {
      lines.push(`**${item.question}**`);
      lines.push('');
      lines.push(item.answer);
      lines.push('');
    }
  }

  lines.push('---');
  lines.push('');
  lines.push(
    `Kontak resmi: WhatsApp ${company.contact.phoneInternational}, email ${company.contact.email}, alamat ${company.address.street}, ${company.address.city} ${company.address.postalCode}.`
  );
  lines.push('');

  return lines.join('\n');
}
