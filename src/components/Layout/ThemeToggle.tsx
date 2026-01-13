// src/components/ThemeToggle.tsx
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full border border-[var(--border)] hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
    >
      {theme === 'dark' ? (
        <Sun className="w-3 h-3 text-light-300" />
      ) : (
        <Moon className="w-3 h-3 text-zinc-400" />
      )}
    </button>
  );
}