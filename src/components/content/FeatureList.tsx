import { cn } from '../../lib/utils'
import { Check, X, Circle } from 'lucide-react'

type ListStyle = 'check' | 'bullet' | 'numbered' | 'contrast'

interface FeatureListProps {
  items: string[]
  style?: ListStyle
  className?: string
}

export function FeatureList({ items, style = 'bullet', className }: FeatureListProps) {
  return (
    <ul className={cn('space-y-2', className)}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-2">
          {style === 'check' && (
            <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
          )}
          {style === 'bullet' && (
            <Circle className="w-2 h-2 text-primary-500 fill-current flex-shrink-0 mt-2" />
          )}
          {style === 'numbered' && (
            <span className="w-5 h-5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-medium">
              {index + 1}
            </span>
          )}
          <span className="text-slate-700 dark:text-slate-300">{item}</span>
        </li>
      ))}
    </ul>
  )
}

interface ContrastListProps {
  positive: string[]
  negative: string[]
  positiveTitle?: string
  negativeTitle?: string
  className?: string
}

export function ContrastList({
  positive,
  negative,
  positiveTitle = 'Present',
  negativeTitle = 'Absent',
  className
}: ContrastListProps) {
  return (
    <div className={cn('grid md:grid-cols-2 gap-4', className)}>
      <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4">
        <h4 className="font-medium text-emerald-800 dark:text-emerald-300 mb-2">{positiveTitle}</h4>
        <ul className="space-y-1">
          {positive.map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
              <Check className="w-4 h-4 text-emerald-500" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
        <h4 className="font-medium text-red-800 dark:text-red-300 mb-2">{negativeTitle}</h4>
        <ul className="space-y-1">
          {negative.map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
              <X className="w-4 h-4 text-red-500" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
