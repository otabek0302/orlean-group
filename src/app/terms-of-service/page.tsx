'use client';

import { useEffect, useState } from 'react';
import { Loading } from '@/components/ui/loading';
import { useTranslation } from 'react-i18next';

const TermsOfService = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

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
      <section id="terms-of-service" className="min-h-screen w-full overflow-y-auto bg-white dark:bg-neutral-950">
        <div className="container py-16 md:py-24">
          <h1 className="mb-6 text-3xl font-bold text-copy-title dark:text-white">{t('pages.termsOfService.title')}</h1>

          <div className="space-y-6 text-copy-text dark:text-neutral-300">
            <section>
              <h2 className="mb-3 text-2xl font-semibold text-copy-title dark:text-white">{t('pages.termsOfService.sections.agreement.title')}</h2>
              <p className="mb-4">{t('pages.termsOfService.sections.agreement.content')}</p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-copy-title dark:text-white">{t('pages.termsOfService.sections.license.title')}</h2>
              <p className="mb-4">{t('pages.termsOfService.sections.license.content')}</p>
              <p className="mb-4">{t('pages.termsOfService.sections.license.subtitle')}</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>{t('pages.termsOfService.sections.license.items.modify')}</li>
                <li>{t('pages.termsOfService.sections.license.items.commercial')}</li>
                <li>{t('pages.termsOfService.sections.license.items.reverse')}</li>
                <li>{t('pages.termsOfService.sections.license.items.copyright')}</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-copy-title dark:text-white">{t('pages.termsOfService.sections.account.title')}</h2>
              <p className="mb-4">{t('pages.termsOfService.sections.account.content')}</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>{t('pages.termsOfService.sections.account.items.security')}</li>
                <li>{t('pages.termsOfService.sections.account.items.accuracy')}</li>
                <li>{t('pages.termsOfService.sections.account.items.notify')}</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-copy-title dark:text-white">{t('pages.termsOfService.sections.disclaimer.title')}</h2>
              <p className="mb-4">{t('pages.termsOfService.sections.disclaimer.content')}</p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-copy-title dark:text-white">{t('pages.termsOfService.sections.limitations.title')}</h2>
              <p className="mb-4">{t('pages.termsOfService.sections.limitations.content')}</p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-copy-title dark:text-white">{t('pages.termsOfService.sections.revisions.title')}</h2>
              <p className="mb-4">{t('pages.termsOfService.sections.revisions.content')}</p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-copy-title dark:text-white">{t('pages.termsOfService.sections.links.title')}</h2>
              <p className="mb-4">{t('pages.termsOfService.sections.links.content')}</p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-copy-title dark:text-white">{t('pages.termsOfService.sections.modifications.title')}</h2>
              <p className="mb-4">{t('pages.termsOfService.sections.modifications.content')}</p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-copy-title dark:text-white">{t('pages.termsOfService.sections.law.title')}</h2>
              <p className="mb-4">{t('pages.termsOfService.sections.law.content')}</p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsOfService;
