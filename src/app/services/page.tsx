'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { SERVICES } from '@/lib/constants';
import { useTranslation } from 'react-i18next';
import { Loading } from '@/components/ui/loading';
  
const Services = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const services = SERVICES(t);

  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen w-full overflow-y-auto bg-white dark:bg-neutral-950">
      <div className="relative w-full">
        <div className="container py-16 md:py-24">
          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-black md:text-4xl dark:text-white">{t('pages.services.title')}</h2>
            <p className="max-w-2xl text-base leading-relaxed text-neutral-700 md:text-lg dark:text-neutral-300">{t('pages.services.description')}</p>
          </div>

          <div className="w-full bg-white font-sans dark:bg-neutral-950" ref={containerRef}>
            <div ref={ref} className="relative pb-20">
              {services?.map((service, index) => (
                <div key={index} className="flex justify-start pt-10 md:gap-40 md:pt-40">
                  <div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
                    <div className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-white md:left-3 dark:bg-black">
                      <div className="h-4 w-4 rounded-full border border-neutral-300 bg-neutral-200 p-2 dark:border-neutral-700 dark:bg-neutral-800" />
                    </div>
                    <h3 className="hidden text-xl font-bold text-neutral-500 md:block md:pl-20 md:text-5xl dark:text-neutral-500">{service.title}</h3>
                  </div>

                  <div className="relative w-full pr-4 pl-20 md:pl-4">
                    <h3 className="mb-4 block text-left text-2xl font-bold text-neutral-500 md:hidden dark:text-neutral-500">{service.title}</h3>
                    <div className="space-y-6">
                      <p className="text-sm leading-relaxed font-normal text-neutral-800 md:text-base dark:text-neutral-200">{service.description}</p>
                      <div className="grid gap-3">
                        {service.features.map((feature: string, featureIndex: number) => (
                          <div key={featureIndex} className="flex items-center gap-3 text-sm text-neutral-700 md:text-base dark:text-neutral-300">
                            <span className="text-blue-500">✓</span>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div
                style={{
                  height: height + 'px',
                }}
                className="absolute top-0 left-8 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] md:left-8 dark:via-neutral-700">
                <motion.div
                  style={{
                    height: heightTransform,
                    opacity: opacityTransform,
                  }}
                  className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-purple-500 from-[0%] via-blue-500 via-[10%] to-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
