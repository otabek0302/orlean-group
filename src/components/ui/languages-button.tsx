'use client';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { setTranslation } from '@/lib/i18n';
import { Button } from './button';
import { Globe } from 'lucide-react';

export const LanguagesButton = () => {
  const handleLanguageChange = (language: string) => {
    setTranslation(language);
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" className="group border-primary hover:bg-primary h-8 w-8 cursor-pointer rounded-md shadow-none">
          <Globe className="text-primary h-4 w-4 group-hover:text-white lg:h-5 lg:w-5 dark:text-white" />
        </Button>
      </PopoverTrigger>
      <PopoverContent side="bottom" align="center" className="mt-1 flex w-fit flex-col gap-2 border-none p-0 shadow-none">
        <Button variant="outline" size="icon" className="group border-primary hover:bg-primary h-8 w-8 cursor-pointer rounded-md shadow-none" onClick={() => handleLanguageChange('en')}>
          <span className="text-primary text-sm font-bold group-hover:text-white dark:text-white">EN</span>
        </Button>
        <Button variant="outline" size="icon" className="group border-primary hover:bg-primary h-8 w-8 cursor-pointer rounded-md shadow-none" onClick={() => handleLanguageChange('uz')}>
          <span className="text-primary text-sm font-bold group-hover:text-white dark:text-white">UZ</span>
        </Button>
        <Button variant="outline" size="icon" className="group border-primary hover:bg-primary h-8 w-8 cursor-pointer rounded-md shadow-none" onClick={() => handleLanguageChange('ru')}>
          <span className="text-primary text-sm font-bold group-hover:text-white dark:text-white">RU</span>
        </Button>
      </PopoverContent>
    </Popover>
  );
};
