import { cn } from '../../lib/utils'
import type { ReactNode } from 'react'

type BadgeVariant = 'default' | 'primary' | 'accent' | 'warning' | 'success' | 'danger'

interface BadgeProps {
  children: ReactNode
  variant?: BadgeVariant
  className?: string
}

const variantClasses: Record<BadgeVariant, string> = {
  default: 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-200',
  primary: 'badge-primary',
  accent: 'badge-accent',
  warning: 'badge-warning',
  success: 'badge-success',
  danger: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span className={cn('badge', variantClasses[variant], className)}>
      {children}
    </span>
  )
}
