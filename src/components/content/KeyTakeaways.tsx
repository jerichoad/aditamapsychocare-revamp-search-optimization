export default function KeyTakeaways({ items }: { items: string[] }) {
  return (
    <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-6 md:p-8">
      <h2 className="text-lg font-bold text-gray-900 mb-4">Ringkasan Singkat</h2>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-gray-700 leading-relaxed">
            <span aria-hidden="true" className="text-primary font-bold">
              •
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
