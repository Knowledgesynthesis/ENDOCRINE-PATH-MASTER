import { create } from 'zustand'

type Theme = 'dark' | 'light'

interface ThemeState {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const getInitialTheme = (): Theme => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('endopath-theme')
    if (stored === 'light' || stored === 'dark') {
      return stored
    }
  }
  return 'dark' // Default to dark mode as per spec
}

export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: getInitialTheme(),
  setTheme: (theme) => {
    localStorage.setItem('endopath-theme', theme)
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(theme)
    set({ theme })
  },
  toggleTheme: () => {
    const newTheme = get().theme === 'dark' ? 'light' : 'dark'
    get().setTheme(newTheme)
  },
}))

// Initialize theme on load
if (typeof window !== 'undefined') {
  const theme = getInitialTheme()
  document.documentElement.classList.remove('light', 'dark')
  document.documentElement.classList.add(theme)
}
