'use client';

import Link from 'next/link';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { AnimatedHamburgerButton } from '@/components/ui/animated-hamburger-button';
import { usePathname } from 'next/navigation';
import { Button } from './button';
import { Mail, Phone } from 'lucide-react';

const menu = {
  open: {
    width: '270px',
    height: '320px',
    top: '-12px',
    right: '-12px',
    transition: { duration: 0.75, type: 'tween', ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: '20px',
    height: '20px',
    top: '10px',
    right: '10px',
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: 'tween',
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const MobileMenu = () => {
  const { t } = useTranslation('components.header');
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  return (
    <div className="relative flex items-center justify-center md:hidden">
      <AnimatedHamburgerButton active={open} setActive={setOpen} />

      <motion.div className="bg-background border absolute z-10 overflow-hidden rounded-xl" variants={menu} animate={open ? 'open' : 'closed'} initial="closed">
        {open && (
          <motion.ul className="flex h-full w-full flex-col justify-center gap-5 p-5">
            <motion.li className={`block cursor-pointer border-l-4 text-base font-bold text-copy-title capitalize ${pathname == '/' ? 'border-primary' : 'border-transparent'} text-start`} onClick={() => setOpen(false)}>
              <Link href="/" className="px-1">
                {t('home')}
              </Link>
            </motion.li>
            <motion.li className={`block cursor-pointer border-l-4 text-base font-bold text-copy-title capitalize ${pathname == '/about' ? 'border-primary' : 'border-transparent'} text-start`} onClick={() => setOpen(false)}>
              <Link href="/" className="px-1">
                {t('about')}
              </Link>
            </motion.li>
            <motion.li className={`block cursor-pointer border-l-4 text-base font-bold text-copy-title capitalize ${pathname == '/services' ? 'border-primary' : 'border-transparent'} text-start`} onClick={() => setOpen(false)}>
              <Link href="/" className="px-1">
                {t('services')}
              </Link>
            </motion.li>
            <motion.li className={`block cursor-pointer border-l-4 text-base font-bold text-copy-title capitalize ${pathname == '/contact' ? 'border-primary' : 'border-transparent'} text-start`} onClick={() => setOpen(false)}>
              <Link href="/" className="px-1">
                {t('contact')}
              </Link>
            </motion.li>
            <div className="mt-2 flex flex-col items-start justify-start gap-2 pl-2">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" className="group border-primary hover:bg-primary h-8 w-8 cursor-pointer rounded-md shadow-none lg:h-9 lg:w-9">
                  <Mail className="text-primary h-4 w-4 group-hover:text-primary lg:h-5 lg:w-5" />
                </Button>
                <span className="text-sm font-bold text-copy-title">info@orlean.uz</span>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" className="group border-primary hover:bg-primary h-8 w-8 cursor-pointer rounded-md shadow-none lg:h-9 lg:w-9">
                  <Phone className="text-primary h-4 w-4 group-hover:text-primary lg:h-5 lg:w-5" />
                </Button>
                <span className="text-sm font-bold text-copy-title">+998 90 123 45 67</span>
              </div>
            </div>
          </motion.ul>
        )}
      </motion.div>
    </div>
  );
};
