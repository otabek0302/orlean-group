'use client';

import { useTheme } from 'next-themes';
import { Button } from './button';
import { Moon, Sun } from 'lucide-react';

export const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      className="group border-primary dark:border-primary hover:bg-primary h-9 w-9 cursor-pointer rounded-md lg:rounded-lg shadow-none"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <Sun className="text-primary h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 group-hover:text-white lg:h-5 lg:w-5 dark:text-white" />
      <Moon className="text-primary absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 group-hover:text-white lg:h-5 lg:w-5 dark:text-white" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
