import type { ReactNode } from 'react';

export default function FadeInSection({ children }: { children: ReactNode }) {
  return <div className="reveal">{children}</div>;
}
