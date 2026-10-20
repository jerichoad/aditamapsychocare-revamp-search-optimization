import Link from 'next/link';
import type { Crumb } from '@/components/seo/JsonLd';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-2">
                {i > 0 && (
                  <span aria-hidden="true" className="text-gray-300">
                    /
                  </span>
                )}
                {isLast ? (
                  <span aria-current="page" className="font-semibold text-gray-800">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className="hover:text-primary hover:underline">
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <BreadcrumbJsonLd items={items} />
    </>
  );
}
