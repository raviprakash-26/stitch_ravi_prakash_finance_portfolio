import React from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = ({ theme, onToggle }) => {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="group relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300/70 bg-white/80 text-slate-700 shadow-sm backdrop-blur transition-all duration-300 hover:scale-105 hover:border-blue-500 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/40 dark:border-slate-600/70 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:text-blue-300"
    >
      <Sun
        size={18}
        className={`absolute transition-all duration-300 ${isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}
      />
      <Moon
        size={18}
        className={`absolute transition-all duration-300 ${isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`}
      />
    </button>
  );
};

export default ThemeToggle;
