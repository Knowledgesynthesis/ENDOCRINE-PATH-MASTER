import { cn } from '../../lib/utils'

interface ComparisonItem {
  name: string
  features: Record<string, string>
}

interface ComparisonCardProps {
  title: string
  items: ComparisonItem[]
  featureNames: string[]
  className?: string
}

export function ComparisonCard({ title, items, featureNames, className }: ComparisonCardProps) {
  return (
    <div className={cn('card overflow-hidden', className)}>
      <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700">
        <h3 className="font-semibold text-slate-900 dark:text-white">{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-100 dark:bg-slate-800">
              <th className="px-4 py-3 text-left font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700">
                Feature
              </th>
              {items.map((item, i) => (
                <th key={i} className="px-4 py-3 text-left font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700">
                  {item.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            {featureNames.map((feature, i) => (
              <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <td className="px-4 py-3 font-medium text-slate-700 dark:text-slate-300">
                  {feature}
                </td>
                {items.map((item, j) => (
                  <td key={j} className="px-4 py-3 text-slate-600 dark:text-slate-400">
                    {item.features[feature] || '-'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
