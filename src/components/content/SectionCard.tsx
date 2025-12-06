import { cn } from '../../lib/utils'
import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'

interface SectionCardProps {
  title: string
  icon?: LucideIcon
  iconColor?: string
  children: ReactNode
  className?: string
}

export function SectionCard({ title, icon: Icon, iconColor, children, className }: SectionCardProps) {
  return (
    <div className={cn('card p-6', className)}>
      <div className="flex items-center gap-3 mb-4">
        {Icon && (
          <div className={cn('w-10 h-10 rounded-lg flex items-center justify-center', iconColor || 'bg-primary-100 dark:bg-primary-900/30')}>
            <Icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
          </div>
        )}
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{title}</h2>
      </div>
      {children}
    </div>
  )
}
