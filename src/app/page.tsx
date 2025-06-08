'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useTranslation } from 'react-i18next';
import { Phone } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { HeroImage } from '@/assets';

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <section id="hero" className="mb-4">
        <div className="container">
          <div className="bg-primary flex flex-col rounded-[32px] md:flex-row">
            {/* Left Side: Text Content */}
            <div className="flex-1 px-20 py-32">
              <h1 className="mb-4 text-5xl leading-tight font-bold text-white capitalize">{t('pages.home.hero.title')}</h1>
              <p className="mb-8 text-lg text-white/80">{t('pages.home.hero.description')}</p>
              <div className="flex gap-4">
                <Button variant="outline" asChild className="group relative bg-white border-primary hover:border-white h-fit cursor-pointer rounded-2xl border-1 px-2.5 py-2.5 transition-all duration-300 hover:bg-transparent lg:px-3.5 overflow-hidden">
                  <Link href="tel:">
                    <span className="group-hover:text-white text-base leading-normal font-normal text-primary">{t('pages.home.hero.button')}</span>
                    <Phone className="mr-1 h-5 w-5 text-primary group-hover:text-white rotate-45 group-hover:-rotate-40 group-hover:translate-x-100 transition-all duration-500" />
                  </Link>
                </Button>
              </div>
              <div className='mt-10 flex gap-20'>
                <div>
                  <span className='text-white text-5xl font-black'>20+</span>
                  <h2 className='text-white/80 text-lg font-normal uppercase'>Partners</h2>
                </div>
                <div>
                  <span className='text-white text-5xl font-black'>8</span>
                  <h2 className='text-white/80 text-lg font-normal uppercase'>Projects Complete</h2>
                </div>
                <div>
                  <span className='text-white text-5xl font-black'>20</span>
                  <h2 className='text-white/80 text-lg font-normal uppercase'>Happy Clients</h2>
                </div>
              </div>
            </div>

            {/* Right Side: Image */}
            <div className="max-w-xl flex-1 p-4">
              <div className="relative h-[calc(100vh-130px)] xl:max-h-[calc(100vh-130px)] overflow-hidden rounded-[32px]">
                <Image src={HeroImage} alt="hero-image" fill priority className="h-full w-full object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
