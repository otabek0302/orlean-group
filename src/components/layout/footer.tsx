'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useTranslation } from 'react-i18next';
import { Phone } from 'lucide-react';
import { SocialMedia } from '@/components/ui/social-media';
import { Logo } from '@/assets';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer__section">
      <div className="container">
        <div className="space-y-8">
          <div className="flex flex-col items-start justify-between space-y-3 rounded-3xl border px-8 py-8 sm:px-10 md:flex-row md:items-center md:space-y-0">
            <h3 className="text-copy-title flex-1 text-2xl leading-normal font-normal">{t('components.footer.title')}</h3>
            <Button variant="outline" asChild className="group bg-primary border-primary h-fit cursor-pointer rounded-xl border-1 px-2.5 py-2.5 transition-all duration-300 hover:bg-transparent lg:px-3.5">
              <Link href="tel:+998933300444">
                <Phone className="group-hover:text-primary mr-1 h-4 w-4 text-white" />
                <span className="group-hover:text-primary text-base leading-normal font-normal text-white">{t('components.footer.button')}</span>
              </Link>
            </Button>
          </div>
          <div className="flex flex-col justify-between gap-8 md:flex-row">
            <div className="md:w-2/5">
              <div className="bg-primary overflow-hidden rounded-3xl px-4 py-8 sm:p-8 md:px-8 md:py-20">
                <div className="relative h-52 overflow-hidden md:h-72">
                  <Image src={Logo} alt="logo" fill priority className="absolute inset-0 object-cover object-center" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>
              </div>
            </div>
            <div className="md:w-3/5">
              <div className="border-primary flex h-full w-full flex-col justify-end gap-4 overflow-hidden rounded-3xl border px-4 py-8 sm:p-8">
                <SocialMedia />
                <ul className="flex w-full max-w-sm flex-wrap items-center justify-center gap-7 md:justify-start">
                  <li className="text-copy-title hover:text-primary cursor-pointer text-base leading-normal font-normal transition-all duration-300 md:text-lg">
                    <Link href={`/`}>{t('components.footer.links.home')}</Link>
                  </li>
                  <li className="text-copy-title hover:text-primary cursor-pointer text-base leading-normal font-normal transition-all duration-300 md:text-lg">
                    <Link href={`/about-us`}>{t('components.footer.links.about')}</Link>
                  </li>
                  <li className="text-copy-title hover:text-primary cursor-pointer text-base leading-normal font-normal transition-all duration-300 md:text-lg">
                    <Link href={`/services`}>{t('components.footer.links.services')}</Link>
                  </li>
                  <li className="text-copy-title hover:text-primary cursor-pointer text-base leading-normal font-normal transition-all duration-300 md:text-lg">
                    <Link href={`/contact`}>{t('components.footer.links.contact')}</Link>
                  </li>
                  <li className="text-copy-title hover:text-primary cursor-pointer text-base leading-normal font-normal transition-all duration-300 md:text-lg">
                    <Link href={`/support`}>{t('components.footer.links.support')}</Link>
                  </li>
                  <li className="text-copy-title hover:text-primary cursor-pointer text-base leading-normal font-normal transition-all duration-300 md:text-lg">
                    <Link href={`mailto:info@orlean.uz`}>info@orlean.uz</Link>
                  </li>
                </ul>
                <div className="border-primary border-t py-4">
                  <div className="items-top flex flex-wrap justify-center gap-4 sm:gap-0 md:justify-between">
                    <p className="text-copy-text text-sm leading-tight font-normal">
                      {t('components.footer.copyright')}
                      <span className="text-copy-text hover:text-primary mt-1 block cursor-pointer text-xs leading-normal font-normal">
                        <span>{t('components.footer.supported')} </span>
                        <Link href={`https://www.github.com/otabek0302`} className="text-primary">
                          Amonov Otabek
                        </Link>
                      </span>
                    </p>

                    <ul className="items-top flex flex-wrap justify-center gap-4 lg:justify-start">
                      <li className="text-copy-text hover:text-primary cursor-pointer text-xs leading-normal font-normal transition-all duration-300 md:text-sm">
                        <Link href={`/terms-of-service`}>{t('components.footer.links.terms-of-service')}</Link>
                      </li>
                      <li className="text-copy-text hover:text-primary cursor-pointer text-xs leading-normal font-normal transition-all duration-300 md:text-sm">
                        <Link href={`/privacy-policy`}>{t('components.footer.links.privacy-policy')}</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
