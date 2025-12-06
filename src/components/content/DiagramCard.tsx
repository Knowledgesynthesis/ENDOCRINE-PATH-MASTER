import { cn } from '../../lib/utils'
import type { LucideIcon } from 'lucide-react'

interface DiagramCardProps {
  title: string
  description: string
  icon: LucideIcon
  iconColor?: string
  bgColor?: string
  className?: string
}

export function DiagramCard({
  title,
  description,
  icon: Icon,
  iconColor = 'text-primary-500',
  bgColor = 'bg-primary-50 dark:bg-primary-900/20',
  className
}: DiagramCardProps) {
  return (
    <div className={cn('rounded-xl border border-slate-200 dark:border-slate-700 p-6 text-center', bgColor, className)}>
      <div className="flex justify-center mb-4">
        <div className={cn('w-16 h-16 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm')}>
          <Icon className={cn('w-8 h-8', iconColor)} />
        </div>
      </div>
      <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-400">{description}</p>
    </div>
  )
}
