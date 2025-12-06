import { cn } from '../../lib/utils'
import { ChevronDown } from 'lucide-react'
import { useState, createContext, useContext, type ReactNode } from 'react'

interface AccordionContextType {
  openItems: Set<string>
  toggle: (value: string) => void
}

const AccordionContext = createContext<AccordionContextType | null>(null)

interface AccordionProps {
  children: ReactNode
  type?: 'single' | 'multiple'
  defaultValue?: string[]
  className?: string
}

export function Accordion({ children, type = 'single', defaultValue = [], className }: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set(defaultValue))

  const toggle = (value: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev)
      if (next.has(value)) {
        next.delete(value)
      } else {
        if (type === 'single') {
          next.clear()
        }
        next.add(value)
      }
      return next
    })
  }

  return (
    <AccordionContext.Provider value={{ openItems, toggle }}>
      <div className={cn('divide-y divide-slate-200 dark:divide-slate-700', className)}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

interface AccordionItemProps {
  children: ReactNode
  value: string
  className?: string
}

export function AccordionItem({ children, value, className }: AccordionItemProps) {
  const context = useContext(AccordionContext)
  if (!context) throw new Error('AccordionItem must be used within Accordion')

  return (
    <div className={className} data-state={context.openItems.has(value) ? 'open' : 'closed'}>
      {children}
    </div>
  )
}

interface AccordionTriggerProps {
  children: ReactNode
  value: string
  className?: string
}

export function AccordionTrigger({ children, value, className }: AccordionTriggerProps) {
  const context = useContext(AccordionContext)
  if (!context) throw new Error('AccordionTrigger must be used within Accordion')

  const isOpen = context.openItems.has(value)

  return (
    <button
      onClick={() => context.toggle(value)}
      className={cn(
        'flex items-center justify-between w-full py-4 text-left font-medium text-slate-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors',
        className
      )}
    >
      {children}
      <ChevronDown
        className={cn(
          'w-5 h-5 text-slate-500 transition-transform duration-200',
          isOpen && 'transform rotate-180'
        )}
      />
    </button>
  )
}

interface AccordionContentProps {
  children: ReactNode
  value: string
  className?: string
}

export function AccordionContent({ children, value, className }: AccordionContentProps) {
  const context = useContext(AccordionContext)
  if (!context) throw new Error('AccordionContent must be used within Accordion')

  if (!context.openItems.has(value)) return null

  return (
    <div className={cn('pb-4 text-slate-600 dark:text-slate-400', className)}>
      {children}
    </div>
  )
}
