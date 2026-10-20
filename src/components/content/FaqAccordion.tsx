import Link from 'next/link';
import type { FaqItem } from '@/types/content';
import QuestionHeading from './QuestionHeading';

export function FaqDetails({ item }: { item: FaqItem }) {
  return (
    <details
      id={item.id}
      className="group rounded-2xl border border-gray-200 bg-white scroll-mt-28"
    >
      <summary className="cursor-pointer list-none px-6 py-5 font-semibold text-gray-900 flex items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
        <span>{item.question}</span>
        <span
          aria-hidden="true"
          className="shrink-0 text-2xl leading-none text-primary font-light transition-transform group-open:rotate-45"
        >
          +
        </span>
      </summary>
      <div className="px-6 pb-6 text-gray-700 leading-relaxed">
        <p>{item.answer}</p>
        {item.relatedHref && (
          <p className="mt-3">
            <Link
              href={item.relatedHref}
              className="font-semibold text-primary hover:underline"
            >
              Pelajari lebih lanjut
              <span aria-hidden="true"> →</span>
            </Link>
          </p>
        )}
      </div>
    </details>
  );
}

export function FaqCategoryBlock({
  title,
  intro,
  items,
  headingLevel = 2,
}: {
  title: string;
  intro?: string;
  items: FaqItem[];
  headingLevel?: 2 | 3;
}) {
  return (
    <div className="mb-12">
      <QuestionHeading level={headingLevel} className="mb-3">
        {title}
      </QuestionHeading>
      {intro && <p className="text-gray-600 mb-6">{intro}</p>}
      <div className="space-y-4">
        {items.map((item) => (
          <FaqDetails key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
