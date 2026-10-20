import type { HowToStep } from '@/types/content';
import QuestionHeading from './QuestionHeading';

export default function HowTo({
  title = 'Cara Memulai',
  steps,
}: {
  title?: string;
  steps: HowToStep[];
}) {
  return (
    <div>
      <QuestionHeading level={3} className="mb-6">
        {title}
      </QuestionHeading>
      <ol className="space-y-6">
        {steps.map((step, i) => (
          <li
            key={step.title}
            className="relative pl-16 pb-6 border-b border-gray-100 last:border-0 last:pb-0"
          >
            <span
              aria-hidden="true"
              className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-primary font-extrabold"
            >
              {i + 1}
            </span>
            <h4 className="text-lg font-bold text-gray-900 mb-1">
              {step.title}
            </h4>
            <p className="text-gray-600 leading-relaxed">{step.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
