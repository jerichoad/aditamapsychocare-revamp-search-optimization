export default function ComparisonTable({
  caption,
  headers,
  rows,
}: {
  caption: string;
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200">
      <table className="w-full text-left text-sm md:text-base">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="bg-slate-50">
            {headers.map((h) => (
              <th
                key={h}
                scope="col"
                className="px-5 py-4 font-bold text-gray-900"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-gray-100">
              {row.map((cell, j) =>
                j === 0 ? (
                  <th
                    key={j}
                    scope="row"
                    className="px-5 py-4 font-semibold text-gray-900 align-top"
                  >
                    {cell}
                  </th>
                ) : (
                  <td key={j} className="px-5 py-4 text-gray-600 align-top">
                    {cell}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
