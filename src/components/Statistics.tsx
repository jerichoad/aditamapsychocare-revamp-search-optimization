'use client';

import { useEffect, useState, useRef } from 'react';

function Counter({
  endValue,
  suffix = '',
}: {
  endValue: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver;
    let startTimestamp: number | null = null;
    const duration = 2000; // 2 seconds

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setCount(Math.floor(easeProgress * endValue));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(endValue);
      }
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        window.requestAnimationFrame(step);
        if (observer && ref.current) observer.unobserve(ref.current);
      }
    };

    observer = new IntersectionObserver(handleIntersect, { threshold: 0.1 });
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (observer && ref.current) observer.unobserve(ref.current);
    };
  }, [endValue]);

  return (
    <h3
      ref={ref}
      className="text-4xl md:text-5xl font-extrabold text-primary mb-2 tracking-tight"
    >
      {count.toLocaleString('id-ID')}
      {suffix}
    </h3>
  );
}

export default function Statistics() {
  const stats = [
    {
      numericValue: 23,
      suffix: '+',
      label: 'Tahun Pengalaman',
      description: 'Mendedikasikan diri di bidang psikologi dengan integritas.',
    },
    {
      numericValue: 50000,
      suffix: '+',
      label: 'Siswa Didampingi',
      description: 'Membantu menemukan potensi dan jurusan yang tepat.',
    },
    {
      numericValue: 150,
      suffix: '+',
      label: 'Instansi Bekerja Sama',
      description: 'Berbagai sekolah dan perusahaan swasta terkemuka.',
    },
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-4 py-6"
            >
              <Counter endValue={stat.numericValue} suffix={stat.suffix} />
              <p className="text-xl font-bold text-gray-900 mb-2">
                {stat.label}
              </p>
              <p className="text-gray-600 leading-relaxed max-w-xs">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
