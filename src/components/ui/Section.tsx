import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

export default function Section({
  id,
  eyebrow,
  title,
  intro,
  dark = false,
  children,
  headingLevel = 2,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  dark?: boolean;
  children: ReactNode;
  headingLevel?: 2 | 3;
}) {
  const HeadingTag = headingLevel === 2 ? 'h2' : 'h3';

  return (
    <section
      id={id}
      aria-labelledby={id ? `${id}-heading` : undefined}
      className={cn(
        'py-24',
        dark ? 'bg-slate-950 text-white' : 'bg-white'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {eyebrow && (
            <p className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-primary font-medium text-sm mb-4">
              {eyebrow}
            </p>
          )}
          <HeadingTag
            id={id ? `${id}-heading` : undefined}
            className={cn(
              'text-3xl md:text-4xl font-extrabold mb-6',
              dark ? 'text-white' : 'text-gray-900'
            )}
          >
            {title}
          </HeadingTag>
          {intro && (
            <p
              className={cn(
                'text-lg',
                dark ? 'text-slate-300' : 'text-gray-600'
              )}
            >
              {intro}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
