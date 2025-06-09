'use client';

import Image from 'next/image';
import Link from 'next/link';
import Loading from './loading';

import { useTranslation } from 'react-i18next';
import { Box, Lock, Phone, Search, Settings, Sparkles } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { HeroImage } from '@/assets';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FAQS, TESTIMONIALS } from '@/lib/constants';
import { GridItem } from '@/components/ui/grid-item';
import { TestimonialsColumn } from '@/components/ui/testimonials-columns';
import { AboutImage } from '@/components/ui/about-image';
import { useEffect, useState } from 'react';
import { DIcons } from 'dicons';
import { SocialMedia } from '@/components/ui/social-media';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  const faqs = FAQS(t);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <section id="hero" className="min-[380px]:pb-5">
        <div className="container">
          <div className="bg-primary flex flex-col rounded-[24px] lg:rounded-[32px] md:flex-row md:justify-between">
            {/* Left Side: Text Content */}
            <div className="max-w-4xl flex-1 p-6 md:pr-0 lg:p-14 xl:px-20 xl:py-32">
              <h1 className="mb-4 text-xl min-[380px]:text-3xl lg:text-5xl leading-tight font-bold text-white capitalize">{t('pages.home.hero.title')}</h1>
              <p className="mb-6 text-sm lg:text-lg text-white/80">{t('pages.home.hero.description')}</p>
              <div className="flex gap-4">
                <Button variant="outline" asChild className="group border-primary relative h-fit cursor-pointer overflow-hidden rounded-lg lg:rounded-xl border-1 bg-white px-2.5 py-1.5 transition-all duration-300 hover:border-white hover:bg-transparent lg:px-3.5 lg:py-2.5">
                  <Link href="tel:">
                    <span className="text-primary text-base leading-normal font-normal group-hover:text-white">{t('pages.home.hero.button')}</span>
                    <Phone className="text-primary mr-1 h-5 w-5 rotate-45 transition-all duration-500 group-hover:rotate-80 group-hover:text-white" />
                  </Link>
                </Button>
              </div>
              <div className="mt-10 hidden lg:flex gap-4 lg:gap-6 xl:gap-16">
                <div>
                  <span className="text-3xl lg:text-5xl font-black text-white">20+</span>
                  <h2 className="text-xs lg:text-lg font-normal text-white/80 uppercase">{t('pages.home.hero.features.partners')}</h2>
                </div>
                <div>
                  <span className="text-3xl lg:text-5xl font-black text-white">11+</span>
                  <h2 className="text-xs lg:text-lg font-normal text-white/80 uppercase">{t('pages.home.hero.features.projects')}</h2>
                </div>
                <div>
                  <span className="text-3xl lg:text-5xl font-black text-white">22+</span>
                  <h2 className="text-xs lg:text-lg font-normal text-white/80 uppercase">{t('pages.home.hero.features.clients')}</h2>
                </div>
              </div>
            </div>

            {/* Right Side: Image */}
            <div className="max-w-xl flex-1 p-4">
              <div className="relative h-72 min-[380px]:h-96 md:h-full overflow-hidden rounded-[16px] lg:rounded-[22px]">
                <Image src={HeroImage} alt="hero-image" fill priority className="h-full w-full object-cover object-top" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="partners" className="xl:py-10">
        <div className="container">
          <div className="relative py-6">
            <InfiniteSlider durationOnHover={80} duration={60} gap={100} className="w-full min-[380px]:gap-16">
              <div className="relative flex h-10 min-[380px]:h-16 w-16 min-[380px]:w-20">
                <Image src="https://html.tailus.io/blocks/customers/nvidia.svg" alt="Nvidia Logo" fill priority className="mx-auto h-5 w-fit dark:invert" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
              <div className="relative flex h-10 min-[380px]:h-16 w-16 min-[380px]:w-20">
                <Image src="https://html.tailus.io/blocks/customers/column.svg" alt="Column Logo" fill priority className="mx-auto h-5 w-fit dark:invert" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
              <div className="relative flex h-10 min-[380px]:h-16 w-16 min-[380px]:w-20">
                <Image src="https://html.tailus.io/blocks/customers/github.svg" alt="GitHub Logo" fill priority className="mx-auto h-5 w-fit dark:invert" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
              <div className="relative flex h-10 min-[380px]:h-16 w-16 min-[380px]:w-20">
                <Image src="https://html.tailus.io/blocks/customers/nike.svg" alt="Nike Logo" fill priority className="mx-auto h-5 w-fit dark:invert" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
              <div className="relative flex h-10 min-[380px]:h-16 w-16 min-[380px]:w-20">
                <Image src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg" alt="Lemon Squeezy Logo" fill priority className="mx-auto h-5 w-fit dark:invert" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
              <div className="relative flex h-10 min-[380px]:h-16 w-16 min-[380px]:w-20">
                <Image src="https://html.tailus.io/blocks/customers/laravel.svg" alt="Laravel Logo" fill priority className="mx-auto h-5 w-fit dark:invert" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
              <div className="relative flex h-10 min-[380px]:h-16 w-16 min-[380px]:w-20">
                <Image src="https://html.tailus.io/blocks/customers/lilly.svg" alt="Lilly Logo" fill priority className="mx-auto h-5 w-fit dark:invert" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
              <div className="relative flex h-10 min-[380px]:h-16 w-16 min-[380px]:w-20">
                <Image src="https://html.tailus.io/blocks/customers/openai.svg" alt="OpenAI Logo" fill priority className="mx-auto h-5 w-fit dark:invert" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
            </InfiniteSlider>

            <div className="from-background absolute inset-y-0 left-0 w-20 bg-linear-to-r"></div>
            <div className="from-background absolute inset-y-0 right-0 w-20 bg-linear-to-l"></div>
            <ProgressiveBlur className="pointer-events-none absolute top-0 left-0 h-full w-20" direction="left" blurIntensity={1} />
            <ProgressiveBlur className="pointer-events-none absolute top-0 right-0 h-full w-20" direction="right" blurIntensity={1} />
          </div>
        </div>
      </section>
      <section id="about" className="py-20">
        <div className="container">
          <div className="flex flex-col md:flex-row">
            {/* Left Side: Text Content */}
            <div className="max-w-xl flex-1 p-4">
              <div className="relative h-full overflow-hidden rounded-[26px]">
                <AboutImage />
              </div>
            </div>

            {/* Right Side: Image */}
            <div className="flex-1 p-5">
              <div className="relative overflow-hidden px-20 py-32">
                <DIcons.Plus strokeWidth={4} className="text-ali absolute -top-5 -left-5 h-10 w-10" />
                <DIcons.Plus strokeWidth={4} className="text-ali absolute -bottom-5 -left-5 h-10 w-10" />
                <DIcons.Plus strokeWidth={4} className="text-ali absolute -top-5 -right-5 h-10 w-10" />
                <DIcons.Plus strokeWidth={4} className="text-ali absolute -right-5 -bottom-5 h-10 w-10" />
                <h2 className="text-copy-title mb-4 text-4xl leading-tight font-bold capitalize">{t('pages.home.about.title')}</h2>
                <p className="text-copy-text mb-8 text-lg">{t('pages.home.about.p-1')}</p>
                <p className="text-copy-text mb-8 text-lg">{t('pages.home.about.p-2')}</p>
                <div className="flex gap-4">
                  <Button variant="outline" asChild className="group border-primary hover:bg-primary relative h-fit cursor-pointer overflow-hidden rounded-lg border-1 bg-white px-2.5 py-1.5 transition-all duration-300 lg:px-3.5">
                    <Link href="tel:">
                      <span className="text-primary text-base leading-normal font-normal group-hover:text-white">{t('pages.home.hero.button')}</span>
                      <Phone className="text-primary mr-1 h-5 w-5 rotate-45 transition-all duration-500 group-hover:rotate-80 group-hover:text-white" />
                    </Link>
                  </Button>
                  <SocialMedia />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="py-20">
        <div className="container">
          <div className="mb-4 flex flex-col gap-2">
            <h2 className="text-copy-title text-4xl font-bold">{t('pages.home.services.title')}</h2>
            <p className="text-copy-text pl-1 text-base font-normal">{t('pages.home.services.description')}</p>
          </div>
          <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[38rem] xl:grid-rows-2">
            <GridItem area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]" icon={<Box className="h-5 w-5" />} title={t('pages.home.services.grid.business-consulting.title')} description={t('pages.home.services.grid.business-consulting.description')} />
            <GridItem area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]" icon={<Settings className="h-5 w-5" />} title={t('pages.home.services.grid.digital-solutions.title')} description={t('pages.home.services.grid.digital-solutions.description')} />
            <GridItem area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]" icon={<Lock className="h-5 w-5" />} title={t('pages.home.services.grid.process-optimization.title')} description={t('pages.home.services.grid.process-optimization.description')} />
            <GridItem area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]" icon={<Sparkles className="h-5 w-5" />} title={t('pages.home.services.grid.international-expansion.title')} description={t('pages.home.services.grid.international-expansion.description')} />
            <GridItem area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]" icon={<Search className="h-5 w-5" />} title={t('pages.home.services.grid.partnership-development.title')} description={t('pages.home.services.grid.partnership-development.description')} />
          </ul>
        </div>
      </section>
      <section id="testimonials" className="py-20">
        <div className="container">
          <div className="flex flex-col gap-4">
            <h2 className="text-copy-title text-4xl font-bold">{t('pages.home.testimonials.title')}</h2>
            <p className="text-copy-text pl-1 text-base font-normal">{t('pages.home.testimonials.description')}</p>
          </div>
          <div className="mt-10 flex max-h-[740px] justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] px-2 md:flex-row">
            <TestimonialsColumn testimonials={TESTIMONIALS.slice(0, 3)} duration={15} />
            <TestimonialsColumn testimonials={TESTIMONIALS.slice(3, 6)} className="hidden md:block" duration={19} />
            <TestimonialsColumn testimonials={TESTIMONIALS.slice(6, 9)} className="hidden lg:block" duration={17} />
          </div>
        </div>
      </section>
      <section id="contact" className="py-20">
        <div className="container">
          <div className="bg-primary flex flex-col gap-20 rounded-[32px] md:flex-row md:justify-between">
            {/* Left Side: Form Content */}
            <div className="max-w-2xl flex-1 px-20 py-32">
              <h2 className="mb-4 text-4xl font-bold text-white capitalize">{t('pages.home.contact.title')}</h2>
              <p className="mb-8 text-lg text-white/80">{t('pages.home.contact.description')}</p>

              <form className="mt-10 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Input type="text" placeholder={t('pages.home.contact.form.placeholder.first-name')} className="h-12 rounded-xl border-white/20 bg-white/10 text-white transition-all duration-200 placeholder:text-white/60 hover:border-white/30 focus:border-transparent focus:ring-2 focus:ring-white/40" />
                  <Input type="text" placeholder={t('pages.home.contact.form.placeholder.last-name')} className="h-12 rounded-xl border-white/20 bg-white/10 text-white transition-all duration-200 placeholder:text-white/60 hover:border-white/30 focus:border-transparent focus:ring-2 focus:ring-white/40" />
                </div>

                <Input type="email" placeholder={t('pages.home.contact.form.placeholder.email')} className="h-12 rounded-xl border-white/20 bg-white/10 text-white transition-all duration-200 placeholder:text-white/60 hover:border-white/30 focus:border-transparent focus:ring-2 focus:ring-white/40" />

                <Input type="tel" placeholder={t('pages.home.contact.form.placeholder.phone')} className="h-12 rounded-xl border-white/20 bg-white/10 text-white transition-all duration-200 placeholder:text-white/60 hover:border-white/30 focus:border-transparent focus:ring-2 focus:ring-white/40" />

                <Textarea placeholder={t('pages.home.contact.form.placeholder.message')} className="min-h-[120px] resize-none rounded-xl border-white/20 bg-white/10 text-white transition-all duration-200 placeholder:text-white/60 hover:border-white/30 focus:border-transparent focus:ring-2 focus:ring-white/40" />

                <Button type="submit" className="text-primary group h-12 w-full rounded-xl border-2 border-transparent bg-white font-semibold shadow-lg transition-all duration-300 hover:border-white/20 hover:bg-white/90 hover:shadow-xl">
                  <span className="mr-2">{t('pages.home.contact.form.send')}</span>
                  <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
              </form>
            </div>

            {/* Right Side: Image */}
            <div className="flex-1 p-4">
              <div className="relative h-full overflow-hidden rounded-[26px]">
                <Image src={HeroImage} alt="contact-image" fill priority className="h-full w-full object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="faqs" className="py-20">
        <div className="container">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex max-w-lg flex-1 flex-col items-start justify-start gap-4">
              <h2 className="text-copy-title text-4xl font-bold">{t('pages.home.faqs.title')}</h2>
              <p className="text-copy-text pl-1 text-base font-normal">{t('pages.home.faqs.description')}</p>
              <Button variant="outline" asChild className="group border-primary hover:bg-primary relative h-fit cursor-pointer overflow-hidden rounded-2xl border-1 bg-white px-2.5 py-2.5 transition-all duration-300 lg:px-3.5">
                <Link href="tel:">
                  <span className="text-primary text-base leading-normal font-normal group-hover:text-white">{t('pages.home.faqs.button')}</span>
                  <Phone className="text-primary mr-1 h-5 w-5 rotate-45 transition-all duration-500 group-hover:rotate-80 group-hover:text-white" />
                </Link>
              </Button>
            </div>
            <div className="flex-1">
              <Accordion type="single" collapsible className="w-full" defaultValue="3">
                {faqs.map((item, key) => (
                  <AccordionItem value={item.id + key} key={key} className="py-2 last:border-b-0">
                    <AccordionTrigger className="text-copy-title cursor-pointer py-4 text-lg font-normal hover:no-underline">{item.title}</AccordionTrigger>
                    <AccordionContent className="text-copy-text py-2 text-base font-normal">{item.content}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
