import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

export default function DirectAnswer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      data-aeo="direct-answer"
      className={cn(
        'text-lg leading-relaxed text-gray-800 border-l-4 border-primary pl-5 py-1',
        className
      )}
    >
      {children}
    </p>
  );
}
