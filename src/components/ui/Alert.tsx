import { cn } from '../../lib/utils'
import { AlertTriangle, Info, Lightbulb, AlertCircle, XCircle } from 'lucide-react'
import type { ReactNode } from 'react'

type AlertVariant = 'info' | 'warning' | 'pitfall' | 'tip' | 'danger'

interface AlertProps {
  children: ReactNode
  variant?: AlertVariant
  title?: string
  className?: string
}

const variantConfig = {
  info: {
    icon: Info,
    containerClass: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
    iconClass: 'text-blue-500',
    titleClass: 'text-blue-800 dark:text-blue-300',
  },
  warning: {
    icon: AlertCircle,
    containerClass: 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800',
    iconClass: 'text-amber-500',
    titleClass: 'text-amber-800 dark:text-amber-300',
  },
  pitfall: {
    icon: AlertTriangle,
    containerClass: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800',
    iconClass: 'text-red-500',
    titleClass: 'text-red-800 dark:text-red-300',
  },
  tip: {
    icon: Lightbulb,
    containerClass: 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800',
    iconClass: 'text-emerald-500',
    titleClass: 'text-emerald-800 dark:text-emerald-300',
  },
  danger: {
    icon: XCircle,
    containerClass: 'bg-rose-50 dark:bg-rose-900/20 border-rose-200 dark:border-rose-800',
    iconClass: 'text-rose-500',
    titleClass: 'text-rose-800 dark:text-rose-300',
  },
}

export function Alert({ children, variant = 'info', title, className }: AlertProps) {
  const config = variantConfig[variant]
  const Icon = config.icon

  return (
    <div className={cn('rounded-lg border p-4', config.containerClass, className)}>
      <div className="flex gap-3">
        <Icon className={cn('w-5 h-5 flex-shrink-0 mt-0.5', config.iconClass)} />
        <div className="flex-1">
          {title && (
            <h4 className={cn('font-semibold mb-1', config.titleClass)}>
              {title}
            </h4>
          )}
          <div className="text-sm text-slate-700 dark:text-slate-300">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
