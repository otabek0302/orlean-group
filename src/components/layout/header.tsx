'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Logo, LogoColored, LogoWhite } from '@/assets';
import { useTranslation } from 'react-i18next';
import { LanguagesButton } from '@/components/ui/languages-button';
import { ThemeButton } from '@/components/ui/theme-button';
import { MobileMenu } from '@/components/ui/mobile-menu';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useMobile } from '@/hooks/useMobile';

const Header = () => {
  const { t } = useTranslation();
  const { isMobile } = useMobile();
  const { theme } = useTheme();
  const pathname = usePathname();

  return (
    <header>
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 py-4">
            <div className="relative h-10 w-10 lg:h-14 lg:w-14">
              <Link href="/">
              {
                isMobile ? (
                  <Image src={theme === 'dark' ? LogoWhite : LogoColored} alt="logo" fill priority className="h-full w-full object-contain" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                ) : (
                  <Image src={Logo} alt="logo" fill priority className="h-full w-full object-contain" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                )
              }
              </Link>
            </div>
            <p className="hidden flex-col md:flex">
              <span className="text-primary text-xl leading-none font-black uppercase lg:text-2xl lg:leading-tight dark:text-white">Orlean Group</span>
              <small className="text-copy-text pl-0.5 text-[10px] lg:text-xs">Professional Business Solutions</small>
            </p>
          </div>
          <div className="flex items-center gap-4 lg:gap-6">
            <ul className="hidden items-center gap-4 md:flex lg:gap-6">
              <li className={`text-copy-title hover:text-primary cursor-pointer text-sm leading-normal font-medium transition-all duration-300 lg:text-lg ${pathname == '/' ? 'border-primary' : 'border-transparent'} text-start`}>
                <Link href="/">{t('components.header.home')}</Link>
              </li>
              <li className={`text-copy-title hover:text-primary cursor-pointer text-sm leading-normal font-medium transition-all duration-300 lg:text-lg ${pathname == '/about' ? 'border-primary' : 'border-transparent'} text-start`}>
                <Link href="/about">{t('components.header.about')}</Link>
              </li>
              <li className={`text-copy-title hover:text-primary cursor-pointer text-sm leading-normal font-medium transition-all duration-300 lg:text-lg ${pathname == '/services' ? 'border-primary' : 'border-transparent'} text-start`}>
                <Link href="/services">{t('components.header.services')}</Link>
              </li>
              <li className={`text-copy-title hover:text-primary cursor-pointer text-sm leading-normal font-medium transition-all duration-300 lg:text-lg ${pathname == '/contact' ? 'border-primary' : 'border-transparent'} text-start`}>
                <Link href="/contact">{t('components.header.contact')}</Link>
              </li>
            </ul>
            <div className="flex items-center gap-2">
              <LanguagesButton />
              <ThemeButton />
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
