'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { MoveRight, Phone } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { AboutImage, AboutImage1, AboutImage2, AboutImage3 } from '@/assets';
import { motion } from 'framer-motion';

const About = () => {
  const { t } = useTranslation();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <>
      <section id="about-hero" className="min-[380px]:pb-5">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full py-20 lg:py-20">
              <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-4">
                    <h2 className="text-copy-title max-w-2xl text-left text-4xl font-bold tracking-normal min-[380px]:text-5xl lg:text-6xl dark:text-white">{t('pages.about.title')}</h2>
                    <p className="text-copy-text max-w-md text-left text-base leading-relaxed tracking-tight min-[380px]:text-lg md:pl-1 lg:text-xl dark:text-neutral-300">{t('pages.about.description')}</p>
                  </div>
                  <div className="flex flex-row gap-4">
                    <Button size="lg" className="group border-primary dark:border-primary hover:bg-primary relative h-fit cursor-pointer overflow-hidden rounded-lg lg:rounded-xl border-1 bg-white dark:bg-primary px-3 py-2 transition-all duration-300 hover:border-primary hover:bg-transparent lg:px-4 lg:py-2.5" variant="outline">
                      <Link href="/contact" className="inline-flex items-center">
                        <span className="text-primary dark:text-white text-sm lg:text-base leading-normal font-normal group-hover:text-primary">{t('pages.about.buttons.contact')}</span>
                        <Phone className="text-primary dark:text-white mr-1 h-4 w-4 lg:h-5 lg:w-5 rotate-45 transition-all duration-500 group-hover:rotate-80 group-hover:text-primary" />
                      </Link>
                    </Button>
                    <Button size="lg" className="group bg-primary hover:bg-primary/90 relative h-fit cursor-pointer overflow-hidden rounded-lg lg:rounded-xl border-1 px-3 py-2 transition-all duration-300 lg:px-4 lg:py-2.5">
                      <Link href="/services" className="inline-flex items-center group-hover:text-white">
                        <span className="text-sm lg:text-base leading-normal font-normal text-white">{t('pages.about.buttons.services')}</span>
                        <MoveRight className="mr-1 h-4 w-4 lg:h-5 lg:w-5 text-white transition-transform duration-200 group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="grid grid-cols-2 gap-4">
                  <div className="bg-muted relative aspect-square overflow-hidden rounded-xl transition-transform duration-300 hover:scale-105 dark:bg-neutral-800">
                    <Image src={AboutImage1} alt="about-1" fill priority className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                  </div>
                  <div className="bg-muted relative row-span-2 overflow-hidden rounded-xl transition-transform duration-300 hover:scale-105 dark:bg-neutral-800">
                    <Image src={AboutImage2} alt="about-2" fill priority className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                  </div>
                  <div className="bg-muted relative aspect-square overflow-hidden rounded-xl transition-transform duration-300 hover:scale-105 dark:bg-neutral-800">
                    <Image src={AboutImage3} alt="about-3" fill priority className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about-content" className="py-6 md:py-10 lg:py-20">
        <div className="container px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="relative col-span-2 h-full">
                <div className="relative h-full w-full overflow-hidden rounded-[32px] transition-all duration-300">
                  <Image src={AboutImage} alt="about" fill priority className="object-cover object-center" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="space-y-6 py-20">
                <div className="space-y-4">
                  <p className="text-copy-text text-base leading-relaxed min-[380px]:text-lg lg:text-xl dark:text-neutral-300">{t('pages.about.content.text')}</p>
                </div>

                <div className="space-y-4">
                  <Accordion type="single" collapsible className="w-full">
                    {/* Our Story */}
                    <AccordionItem value="story" className="border-b border-gray-200 dark:border-neutral-800">
                      <AccordionTrigger className="text-copy-title cursor-pointer py-4 text-lg font-normal hover:no-underline dark:text-white">{t('pages.about.content.story.title')}</AccordionTrigger>
                      <AccordionContent className="text-copy-text py-2 text-base font-normal dark:text-neutral-300">
                        <div className="bg-white py-4 dark:border-neutral-800 dark:bg-neutral-900">
                          <p className="leading-relaxed">{t('pages.about.content.story.description')}</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    {/* Our Mission */}
                    <AccordionItem value="mission" className="border-b border-gray-200 dark:border-neutral-800">
                      <AccordionTrigger className="text-copy-title cursor-pointer py-4 text-lg font-normal hover:no-underline dark:text-white">{t('pages.about.content.mission.title')}</AccordionTrigger>
                      <AccordionContent className="text-copy-text py-2 text-base font-normal dark:text-neutral-300">
                        <div className="bg-white py-4 dark:border-neutral-800 dark:bg-neutral-900">
                          <p className="leading-relaxed">{t('pages.about.content.mission.description')}</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    {/* Our Vision */}
                    <AccordionItem value="vision" className="border-b border-gray-200 dark:border-neutral-800">
                      <AccordionTrigger className="text-copy-title cursor-pointer py-4 text-lg font-normal hover:no-underline dark:text-white">{t('pages.about.content.vision.title')}</AccordionTrigger>
                      <AccordionContent className="text-copy-text py-2 text-base font-normal dark:text-neutral-300">
                        <div className="bg-white py-4 dark:border-neutral-800 dark:bg-neutral-900">
                          <p className="leading-relaxed">{t('pages.about.content.vision.description')}</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
