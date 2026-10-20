'use client';

import type { MouseEventHandler, ReactNode } from 'react';
import { trackContactClick } from '@/lib/analytics';
import type { ContactMethod } from '@/lib/analytics';

/**
 * Pembungkus "leaf" untuk tautan kontak di dalam Server Component.
 *
 * Masalah: `SiteHeader` & `SiteFooter` adalah Server Component — tidak boleh
 * ada `onClick`. Solusi AIO: pindahkan SELURUH interaktivitas ke leaf klien
 * ini, sehingga header/footer tetap 0-JS dan tidak perlu diubah menjadi
 * `'use client'` utuh.
 */
export default function TrackedContactLink({
  method,
  location,
  href,
  target,
  rel,
  className,
  ariaLabel,
  children
}: {
  method: ContactMethod;
  location: string;
  href: string;
  target?: string;
  rel?: string;
  className?: string;
  ariaLabel?: string;
  children: ReactNode;
}) {
  const handleClick: MouseEventHandler = () => {
    trackContactClick(method, location);
  };

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={className}
      aria-label={ariaLabel}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
