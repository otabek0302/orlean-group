import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button variant="outline" size="icon" className="group border-primary hover:bg-primary h-8 w-8 cursor-pointer rounded-md shadow-none" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? <Sun className="text-primary h-4 w-4 group-hover:text-white lg:h-5 lg:w-5 dark:text-white" /> : <Moon className="text-primary h-4 w-4 group-hover:text-white lg:h-5 lg:w-5 dark:text-white" />}
    </Button>
  );
};
