import {Sun, Moon} from 'lucide-react';

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'
  const isLight = theme === 'light'
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      
   >
      <span aria-hidden="true">{isDark ? <Moon /> : <Sun />}</span>
    </button>
  )
}
