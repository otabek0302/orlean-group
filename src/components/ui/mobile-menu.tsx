'use client';

import Link from 'next/link';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { AnimatedHamburgerButton } from '@/components/ui/animated-hamburger-button';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from './button';
import { Mail, Phone } from 'lucide-react';

const menu = {
  open: {
    width: '270px',
    height: '320px',
    top: '-12px',
    right: '-12px',
    transition: { duration: 0.75, type: 'tween' as const, ease: [0.76, 0, 0.24, 1] as const },
  },
  closed: {
    width: '20px',
    height: '20px',
    top: '10px',
    right: '10px',
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: 'tween' as const,
      ease: [0.76, 0, 0.24, 1] as const,
    },
  },
};

export const MobileMenu = () => {
  const { t } = useTranslation('');
  const [open, setOpen] = useState(false);
  
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (path: string) => {
    setOpen(false);
    router.push(path);
  };

  return (
    <div className="relative flex items-center justify-center md:hidden">
      <AnimatedHamburgerButton active={open} setActive={setOpen} />

      <motion.div className={`bg-background border dark:border-input ${!open && 'dark:border-none'} absolute z-10 overflow-hidden rounded-xl ${open ? 'bg-primary dark:bg-background' : ''}`} variants={menu} animate={open ? 'open' : 'closed'} initial="closed">
        {open && (
          <motion.ul className="flex h-full w-full flex-col justify-center gap-5 p-5">
            <motion.li className={`block cursor-pointer border-l-4 text-base font-bold text-white capitalize ${pathname == '/' ? 'border-white' : 'border-transparent'} text-start`} onClick={() => handleClick('/')}>
              <Link href="/" className="px-1">
                {t('components.header.home')}
              </Link>
            </motion.li>
            <motion.li className={`block cursor-pointer border-l-4 text-base font-bold text-white capitalize ${pathname == '/about' ? 'border-white' : 'border-transparent'} text-start`} onClick={() => handleClick('/about')}>
              <Link href="/about" className="px-1">
                {t('components.header.about')}
              </Link>
            </motion.li>
            <motion.li className={`block cursor-pointer border-l-4 text-base font-bold text-white capitalize ${pathname == '/services' ? 'border-white' : 'border-transparent'} text-start`} onClick={() => handleClick('/services')}>
              <Link href="/" className="px-1">
                {t('components.header.services')}
              </Link>
            </motion.li>
            <motion.li className={`block cursor-pointer border-l-4 text-base font-bold text-white capitalize ${pathname == '/contact' ? 'border-white' : 'border-transparent'} text-start`} onClick={() => handleClick('/contact')}>
              <Link href="/" className="px-1">
                {t('components.header.contact')}
              </Link>
            </motion.li>
            <div className="mt-2 flex flex-col items-start justify-start gap-2 pl-2">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" className="group border-primary dark:border-primary hover:bg-primary h-9 w-9 cursor-pointer rounded-lg lg:rounded-xl lg:h-10 lg:w-10 shadow-none">
                  <Mail className="text-primary dark:text-white h-4 w-4 lg:h-5 lg:w-5 group-hover:text-white" />
                </Button>
                <span className="text-sm font-bold text-white">info@orlean.uz</span>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" className="group border-primary dark:border-primary hover:bg-primary h-9 w-9 cursor-pointer rounded-lg lg:rounded-xl lg:h-10 lg:w-10 shadow-none">
                  <Phone className="text-primary dark:text-white h-4 w-4 lg:h-5 lg:w-5 group-hover:text-white" />
                </Button>
                <span className="text-sm font-bold text-white">+998995945131</span>
              </div>
            </div>
          </motion.ul>
        )}
      </motion.div>
    </div>
  );
};
