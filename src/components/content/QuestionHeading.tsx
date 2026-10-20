import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

export default function QuestionHeading({
  id,
  level = 3,
  children,
  className,
}: {
  id?: string;
  level?: 2 | 3 | 4;
  children: ReactNode;
  className?: string;
}) {
  const Tag = `h${level}` as const;

  return (
    <Tag
      id={id}
      className={cn(
        level === 2
          ? 'text-2xl md:text-3xl font-extrabold text-gray-900'
          : 'text-xl font-bold text-gray-900',
        'scroll-mt-28',
        className
      )}
    >
      {children}
    </Tag>
  );
}
