import { cn } from '../../lib/utils'

interface TableProps {
  headers: string[]
  rows: string[][]
  className?: string
}

export function Table({ headers, rows, className }: TableProps) {
  return (
    <div className={cn('overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700', className)}>
      <table className="w-full text-sm">
        <thead className="bg-slate-100 dark:bg-slate-800">
          <tr>
            {headers.map((header, i) => (
              <th
                key={i}
                className="px-4 py-3 text-left font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
          {rows.map((row, i) => (
            <tr key={i} className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-slate-700 dark:text-slate-300">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
