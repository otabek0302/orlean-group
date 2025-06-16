'use client';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { setTranslation } from '@/lib/i18n';
import { Button } from './button';
import { Globe } from 'lucide-react';
import { useMobile } from '@/hooks/useMobile';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export const LanguagesButton = () => {
  const { isMobile } = useMobile();
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  useEffect(() => {
    setCurrentLang(i18n.language);
  }, [i18n.language]);

  const handleLanguageChange = (language: string) => {
    setTranslation(language);
    setCurrentLang(language);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" className="group border-primary dark:border-primary hover:bg-primary h-9 w-9 cursor-pointer rounded-md lg:rounded-lg shadow-none">
          <Globe className="text-primary h-4 w-4 group-hover:text-white lg:h-5 lg:w-5 dark:text-white" />
        </Button>
      </PopoverTrigger>
      <PopoverContent side={isMobile ? 'left' : 'bottom'} align="center" className="mr-1 flex w-fit gap-2 border-none bg-transparent p-0 shadow-none md:mt-1 md:flex-col">
        <Button 
          variant="outline" 
          size="icon" 
          className={`group border-primary dark:border-primary hover:bg-primary h-9 w-9 cursor-pointer rounded-md lg:rounded-lg shadow-none ${currentLang === 'en' ? 'bg-primary' : ''}`} 
          onClick={() => handleLanguageChange('en')}
        >
          <span className={`text-sm font-bold group-hover:text-white dark:text-white ${currentLang === 'en' ? 'text-white' : 'text-primary'}`}>EN</span>
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          className={`group border-primary dark:border-primary hover:bg-primary h-9 w-9 cursor-pointer rounded-md lg:rounded-lg shadow-none ${currentLang === 'uz' ? 'bg-primary' : ''}`} 
          onClick={() => handleLanguageChange('uz')}
        >
          <span className={`text-sm font-bold group-hover:text-white dark:text-white ${currentLang === 'uz' ? 'text-white' : 'text-primary'}`}>UZ</span>
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          className={`group border-primary dark:border-primary hover:bg-primary h-9 w-9 cursor-pointer rounded-md lg:rounded-lg shadow-none ${currentLang === 'ru' ? 'bg-primary' : ''}`} 
          onClick={() => handleLanguageChange('ru')}
        >
          <span className={`text-sm font-bold group-hover:text-white dark:text-white ${currentLang === 'ru' ? 'text-white' : 'text-primary'}`}>RU</span>
        </Button>
      </PopoverContent>
    </Popover>
  );
};
