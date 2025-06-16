'use client';

import { useEffect, useState } from 'react';
import { Loading } from '@/components/ui/loading';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy = () => {
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
      <section id="privacy-policy" className="min-h-screen w-full overflow-y-auto bg-white dark:bg-neutral-950">
        <div className="container py-16 md:py-24">
          <h1 className="mb-6 text-3xl font-bold text-copy-title dark:text-white">{t('pages.privacyPolicy.title')}</h1>

          <div className="space-y-6 text-copy-text dark:text-neutral-300">
            <section>
              <h2 className="mb-3 text-2xl font-semibold text-copy-title dark:text-white">{t('pages.privacyPolicy.sections.introduction.title')}</h2>
              <p className="mb-4">{t('pages.privacyPolicy.sections.introduction.content')}</p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-copy-title dark:text-white">{t('pages.privacyPolicy.sections.information.title')}</h2>
              <p className="mb-4">{t('pages.privacyPolicy.sections.information.subtitle')}</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>{t('pages.privacyPolicy.sections.information.items.name')}</li>
                <li>{t('pages.privacyPolicy.sections.information.items.credentials')}</li>
                <li>{t('pages.privacyPolicy.sections.information.items.payment')}</li>
                <li>{t('pages.privacyPolicy.sections.information.items.preferences')}</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-copy-title dark:text-white">{t('pages.privacyPolicy.sections.usage.title')}</h2>
              <p className="mb-4">{t('pages.privacyPolicy.sections.usage.subtitle')}</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>{t('pages.privacyPolicy.sections.usage.items.services')}</li>
                <li>{t('pages.privacyPolicy.sections.usage.items.transactions')}</li>
                <li>{t('pages.privacyPolicy.sections.usage.items.notices')}</li>
                <li>{t('pages.privacyPolicy.sections.usage.items.communication')}</li>
                <li>{t('pages.privacyPolicy.sections.usage.items.improvement')}</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-copy-title dark:text-white">{t('pages.privacyPolicy.sections.security.title')}</h2>
              <p className="mb-4">{t('pages.privacyPolicy.sections.security.content')}</p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-copy-title dark:text-white">{t('pages.privacyPolicy.sections.rights.title')}</h2>
              <p className="mb-4">{t('pages.privacyPolicy.sections.rights.subtitle')}</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>{t('pages.privacyPolicy.sections.rights.items.access')}</li>
                <li>{t('pages.privacyPolicy.sections.rights.items.correct')}</li>
                <li>{t('pages.privacyPolicy.sections.rights.items.delete')}</li>
                <li>{t('pages.privacyPolicy.sections.rights.items.object')}</li>
                <li>{t('pages.privacyPolicy.sections.rights.items.portability')}</li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
