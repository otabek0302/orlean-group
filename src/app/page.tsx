'use client';

import Image from 'next/image';
import Link from 'next/link';
import Loading from './loading';

import { useTranslation } from 'react-i18next';
import { Box, Lock, Phone, Search, Settings, Sparkles } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HeroImage, ContactImage } from '@/assets';
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
import { toast } from 'sonner';
import { PartnersLogo } from '@/components/ui/partners-logo';

export default function Home() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const faqs = FAQS(t);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const telegramToken = '7713185925:AAHL8IYZsZYFPUeRvRp6Xz8Lu2swm9AH0jQ';
      const chatId = '-1002577177185';
      const text = `Новый Лид для Orlean Group:\nФИО: ${formData.firstName} ${formData.lastName}\nТелефон: ${formData.phone}\nEmail: ${formData.email}\nСообщение: ${formData.message}`;

      const response = await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: text }),
      });

      if (response.ok) {
        toast.success(t('pages.home.contact.messages.success'));
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast.error(t('pages.home.contact.messages.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <section id="hero" className="min-[380px]:pb-5">
        <div className="container px-4">
          <div className="bg-primary dark:bg-input/30 flex flex-col-reverse rounded-[20px] md:justify-between lg:flex-row lg:rounded-[32px]">
            {/* Left Side: Text Content */}
            <div className="max-w-4xl flex-1 p-4 lg:p-14 xl:px-20 xl:py-32">
              <h1 className="mb-2 text-4xl leading-tight font-bold text-white md:text-5xl lg:text-6xl">{t('pages.home.hero.title')}</h1>
              <p className="mb-3 text-base text-white/80 md:text-lg lg:text-xl">{t('pages.home.hero.description')}</p>
              <div className="flex gap-2">
                <Button variant="outline" asChild className="group border-primary dark:border-primary hover:bg-primary dark:bg-primary relative h-fit cursor-pointer overflow-hidden rounded-lg border-1 bg-white px-3 py-2 transition-all duration-300 hover:border-white hover:bg-transparent lg:rounded-xl lg:px-4 lg:py-2.5">
                  <Link href="tel:+998933300444">
                    <span className="text-primary text-sm leading-normal font-normal group-hover:text-white lg:text-base dark:text-white">{t('pages.home.hero.button')}</span>
                    <Phone className="text-primary mr-1 h-4 w-4 rotate-45 transition-all duration-500 group-hover:rotate-80 group-hover:text-white lg:h-5 lg:w-5 dark:text-white" />
                  </Link>
                </Button>
              </div>
              {/* <div className="mt-6 hidden gap-4 lg:flex lg:gap-6 xl:gap-16">
                <div>
                  <span className="text-3xl font-black text-white lg:text-5xl">20+</span>
                  <h2 className="text-xs font-normal text-white/80 uppercase lg:text-lg">{t('pages.home.hero.features.partners')}</h2>
                </div>
                <div>
                  <span className="text-3xl font-black text-white lg:text-5xl">11+</span>
                  <h2 className="text-xs font-normal text-white/80 uppercase lg:text-lg">{t('pages.home.hero.features.projects')}</h2>
                </div>
                <div>
                  <span className="text-3xl font-black text-white lg:text-5xl">22+</span>
                  <h2 className="text-xs font-normal text-white/80 uppercase lg:text-lg">{t('pages.home.hero.features.clients')}</h2>
                </div>
              </div> */}
            </div>

            {/* Right Side: Image */}
            <div className="flex-1 p-4 lg:max-w-xl">
              <div className="relative h-64 overflow-hidden rounded-[16px] min-[380px]:h-80 lg:h-full lg:rounded-[22px]">
                <Image src={HeroImage} alt="hero-image" fill priority className="h-full w-full object-cover object-top" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="partners" className="py-6 md:py-10 lg:py-20">
        <div className="container px-4">
          <div className="relative py-4">
            <InfiniteSlider durationOnHover={400} duration={300} gap={10} className="w-full min-[380px]:gap-12">
              <PartnersLogo />
            </InfiniteSlider>

            <div className="from-background absolute inset-y-0 left-0 w-20 bg-linear-to-r"></div>
            <div className="from-background absolute inset-y-0 right-0 w-20 bg-linear-to-l"></div>
            <ProgressiveBlur className="pointer-events-none absolute top-0 left-0 h-full w-20" direction="left" blurIntensity={1} />
            <ProgressiveBlur className="pointer-events-none absolute top-0 right-0 h-full w-20" direction="right" blurIntensity={1} />
          </div>
        </div>
      </section>
      <section id="about" className="py-8 lg:py-20">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row">
            {/* Left Side: Text Content */}
            <div className="flex-1 p-3 lg:max-w-xl">
              <div className="relative h-80 overflow-hidden rounded-[20px] lg:h-full lg:rounded-[26px]">
                <AboutImage />
              </div>
            </div>

            {/* Right Side: Image */}
            <div className="flex-1 p-3">
              <div className="relative overflow-hidden p-4 lg:p-14 xl:px-20 xl:py-32">
                <DIcons.Plus strokeWidth={4} className="text-ali absolute -top-4 -left-4 h-8 w-8 lg:h-10 lg:w-10" />
                <DIcons.Plus strokeWidth={4} className="text-ali absolute -bottom-4 -left-4 h-8 w-8 lg:h-10 lg:w-10" />
                <DIcons.Plus strokeWidth={4} className="text-ali absolute -top-4 -right-4 h-8 w-8 lg:h-10 lg:w-10" />
                <DIcons.Plus strokeWidth={4} className="text-ali absolute -right-4 -bottom-4 h-8 w-8 lg:h-10 lg:w-10" />
                <h2 className="text-copy-title mb-4 text-4xl leading-tight font-bold capitalize">{t('pages.home.about.title')}</h2>
                <p className="text-copy-text mb-8 text-lg">{t('pages.home.about.p-1')}</p>
                <p className="text-copy-text mb-8 text-lg">{t('pages.home.about.p-2')}</p>
                <div className="flex gap-4">
                  <Button variant="outline" asChild className="group border-primary dark:border-primary hover:bg-primary dark:bg-primary relative h-fit cursor-pointer overflow-hidden rounded-lg border-1 bg-white px-3 py-2 transition-all duration-300 hover:border-white hover:bg-transparent lg:rounded-xl lg:px-4 lg:py-2.5">
                    <Link href="tel:+998933300444">
                      <span className="text-primary text-sm leading-normal font-normal group-hover:text-white lg:text-base dark:text-white">{t('pages.home.hero.button')}</span>
                      <Phone className="text-primary mr-1 h-4 w-4 rotate-45 transition-all duration-500 group-hover:rotate-80 group-hover:text-white lg:h-5 lg:w-5 dark:text-white" />
                    </Link>
                  </Button>
                  <SocialMedia />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="py-8 lg:py-20">
        <div className="container px-4">
          <div className="mb-4 flex flex-col gap-2">
            <h2 className="text-copy-title text-3xl font-bold min-[380px]:text-4xl lg:text-5xl">{t('pages.home.services.title')}</h2>
            <p className="text-copy-text pl-1 text-sm font-normal min-[380px]:text-base lg:text-lg">{t('pages.home.services.description')}</p>
          </div>
          <ul className="grid grid-cols-1 grid-rows-none gap-3 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[38rem] xl:grid-rows-2">
            <GridItem area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]" icon={<Box className="h-5 w-5" />} title={t('pages.home.services.grid.business-consulting.title')} description={t('pages.home.services.grid.business-consulting.description')} />
            <GridItem area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]" icon={<Settings className="h-5 w-5" />} title={t('pages.home.services.grid.digital-solutions.title')} description={t('pages.home.services.grid.digital-solutions.description')} />
            <GridItem area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]" icon={<Lock className="h-5 w-5" />} title={t('pages.home.services.grid.process-optimization.title')} description={t('pages.home.services.grid.process-optimization.description')} />
            <GridItem area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]" icon={<Sparkles className="h-5 w-5" />} title={t('pages.home.services.grid.international-expansion.title')} description={t('pages.home.services.grid.international-expansion.description')} />
            <GridItem area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]" icon={<Search className="h-5 w-5" />} title={t('pages.home.services.grid.partnership-development.title')} description={t('pages.home.services.grid.partnership-development.description')} />
          </ul>
        </div>
      </section>
      <section id="testimonials" className="py-10 lg:py-20">
        <div className="container px-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-copy-title text-3xl font-bold min-[380px]:text-4xl lg:text-5xl">{t('pages.home.testimonials.title')}</h2>
            <p className="text-copy-text pl-1 text-sm font-normal min-[380px]:text-base lg:text-lg">{t('pages.home.testimonials.description')}</p>
          </div>
          <div className="mt-6 flex max-h-[740px] justify-center gap-3 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] px-2 md:flex-row md:gap-6">
            <TestimonialsColumn testimonials={TESTIMONIALS.slice(0, 3)} duration={15} />
            <TestimonialsColumn testimonials={TESTIMONIALS.slice(3, 6)} className="hidden md:block" duration={19} />
            <TestimonialsColumn testimonials={TESTIMONIALS.slice(6, 9)} className="hidden lg:block" duration={17} />
          </div>
        </div>
      </section>
      <section id="contact" className="py-10 lg:py-20">
        <div className="container px-4">
          <div className="bg-primary dark:bg-input/30 flex flex-col gap-8 rounded-[24px] md:flex-row md:justify-between">
            {/* Left Side: Form Content */}
            <div className="max-w-2xl flex-1 px-4 py-8 lg:px-20 lg:py-32">
              <h2 className="mb-2 text-3xl font-bold text-white capitalize min-[380px]:text-4xl lg:text-5xl">{t('pages.home.contact.title')}</h2>
              <p className="mb-4 text-sm text-white/80 min-[380px]:text-base lg:text-lg">{t('pages.home.contact.description')}</p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-3">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <Input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder={t('pages.home.contact.form.placeholder.first-name')} className="h-11 rounded-xl border-white/20 bg-white/10 text-white transition-all duration-200 placeholder:text-white/60 hover:border-white/30 focus:border-transparent focus:ring-2 focus:ring-white/40 lg:h-12" />
                  <Input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder={t('pages.home.contact.form.placeholder.last-name')} className="h-11 rounded-xl border-white/20 bg-white/10 text-white transition-all duration-200 placeholder:text-white/60 hover:border-white/30 focus:border-transparent focus:ring-2 focus:ring-white/40 lg:h-12" />
                </div>

                <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder={t('pages.home.contact.form.placeholder.email')} className="h-11 rounded-xl border-white/20 bg-white/10 text-white transition-all duration-200 placeholder:text-white/60 hover:border-white/30 focus:border-transparent focus:ring-2 focus:ring-white/40 lg:h-12" />

                <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder={t('pages.home.contact.form.placeholder.phone')} className="h-11 rounded-xl border-white/20 bg-white/10 text-white transition-all duration-200 placeholder:text-white/60 hover:border-white/30 focus:border-transparent focus:ring-2 focus:ring-white/40 lg:h-12" />

                <Textarea name="message" value={formData.message} onChange={handleChange} placeholder={t('pages.home.contact.form.placeholder.message')} className="min-h-[100px] resize-none rounded-xl border-white/20 bg-white/10 text-white transition-all duration-200 placeholder:text-white/60 hover:border-white/30 focus:border-transparent focus:ring-2 focus:ring-white/40 lg:min-h-[120px]" />

                <Button type="submit" disabled={isSubmitting} className="text-primary group h-11 w-full rounded-xl border-2 border-transparent bg-white font-semibold shadow-lg transition-all duration-300 hover:border-white/20 hover:bg-white/90 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50 lg:h-12">
                  <span className="mr-2 text-sm lg:text-base">{isSubmitting ? 'Отправка...' : t('pages.home.contact.form.send')}</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 lg:h-5 lg:w-5" />
                </Button>
              </form>
            </div>

            {/* Right Side: Image */}
            <div className="flex-1 p-4">
              <div className="relative h-full overflow-hidden rounded-[26px]">
                <Image src={ContactImage} alt="contact-image" fill priority className="h-full w-full object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="faqs" className="py-10 lg:py-20">
        <div className="container px-4">
          <div className="flex flex-col gap-3 md:flex-row">
            <div className="flex max-w-lg flex-1 flex-col items-start justify-start gap-2">
              <h2 className="text-copy-title text-3xl font-bold min-[380px]:text-4xl lg:text-5xl">{t('pages.home.faqs.title')}</h2>
              <p className="text-copy-text pl-1 text-sm font-normal min-[380px]:text-base lg:text-lg">{t('pages.home.faqs.description')}</p>
              <Button variant="outline" asChild className="group border-primary dark:border-primary hover:bg-primary dark:bg-primary relative h-fit cursor-pointer overflow-hidden rounded-lg border-1 bg-white px-3 py-2 transition-all duration-300 hover:border-white hover:bg-transparent lg:rounded-xl lg:px-4 lg:py-2.5">
                <Link href="tel:+998933300444">
                  <span className="text-primary text-sm leading-normal font-normal group-hover:text-white lg:text-base dark:text-white">{t('pages.home.faqs.button')}</span>
                  <Phone className="text-primary mr-1 h-4 w-4 rotate-45 transition-all duration-500 group-hover:rotate-80 group-hover:text-white lg:h-5 lg:w-5 dark:text-white" />
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
