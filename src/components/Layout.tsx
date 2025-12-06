import { Outlet, Link, useLocation } from 'react-router-dom'
import {
  Home,
  CircleDot,
  Layers,
  Activity,
  Brain,
  Grid3X3,
  Dna,
  Microscope,
  FlaskConical,
  AlertTriangle,
  FolderOpen,
  ClipboardList,
  Settings,
  Menu,
  X,
  ChevronLeft
} from 'lucide-react'
import { useState } from 'react'
import { cn } from '../lib/utils'

const navItems = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'Thyroid', path: '/thyroid', icon: CircleDot },
  { name: 'Parathyroid', path: '/parathyroid', icon: Layers },
  { name: 'Adrenal', path: '/adrenal', icon: Activity },
  { name: 'Pituitary', path: '/pituitary', icon: Brain },
  { name: 'NETs', path: '/net', icon: Grid3X3 },
  { name: 'MEN Syndromes', path: '/men', icon: Dna },
  { name: 'IHC', path: '/ihc', icon: Microscope },
  { name: 'Molecular', path: '/molecular', icon: FlaskConical },
  { name: 'Pitfalls', path: '/pitfalls', icon: AlertTriangle },
  { name: 'Cases', path: '/cases', icon: FolderOpen },
  { name: 'Assessment', path: '/assessment', icon: ClipboardList },
  { name: 'Settings', path: '/settings', icon: Settings },
]

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="flex items-center justify-between px-4 h-14">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 -ml-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-lg font-bold text-primary-600 dark:text-primary-400">
            Endocrine Path Master
          </h1>
          <div className="w-10" /> {/* Spacer for centering */}
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 bg-black/50"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-full w-72 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700",
          "transform transition-transform duration-300 ease-in-out",
          "lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700">
            <Link to="/" className="flex items-center gap-2" onClick={() => setSidebarOpen(false)}>
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <Microscope className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-slate-900 dark:text-white">
                EndoPath
              </span>
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto scrollbar-thin p-4 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300"
                      : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700/50 hover:text-slate-900 dark:hover:text-slate-100"
                  )}
                >
                  <Icon className={cn("w-5 h-5", isActive && "text-primary-500")} />
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* Disclaimer Footer */}
          <div className="p-4 border-t border-slate-200 dark:border-slate-700">
            <p className="text-xs text-slate-500 dark:text-slate-500 text-center">
              Educational only - not for diagnosis or patient care
            </p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-72 pt-14 lg:pt-0">
        {/* Back Button for non-home pages on mobile */}
        {!isHome && (
          <div className="lg:hidden px-4 py-3 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
            <Link
              to="/"
              className="inline-flex items-center gap-1 text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        )}
        <div className="p-4 lg:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
