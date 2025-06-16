'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { Button } from './button';
import { X } from 'lucide-react';

const CookieConsent = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const accepted = localStorage.getItem('cookie_consent');
    if (!accepted) setVisible(true);
  }, []);

  const acceptAll = () => {
    setPreferences({
      necessary: true,
      analytics: true,
      marketing: true,
    });
    savePreferences(true, true);
  };

  const savePreferences = (analytics: boolean, marketing: boolean) => {
    localStorage.setItem('cookie_consent', 'true');
    localStorage.setItem(
      'cookie_preferences',
      JSON.stringify({
        analytics,
        marketing,
      })
    );
    setVisible(false);

    if (analytics) {
      // Dynamically load Google Analytics script after consent
      const script = document.createElement('script');
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-WMXOcvOCMnWJ6K4IE64ZYtNGhGvSXYznjkG2C5YV2-M';
      script.async = true;
      document.head.appendChild(script);

      const inlineScript = document.createElement('script');
      inlineScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-WMXOcvOCMnWJ6K4IE64ZYtNGhGvSXYznjkG2C5YV2-M');
      `;
      document.head.appendChild(inlineScript);
    }
  };

  if (!visible) return null;

  return (
    <div className="bg-background border-border fixed bottom-0 left-0 z-50 w-full border-t p-4 shadow-lg">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <h3 className="text-foreground text-lg font-semibold">{t('components.cookie-consent.title')}</h3>
            </div>
            <p className="text-muted-foreground mt-2 text-sm">
              {t('components.cookie-consent.description')}
              <Link href="/privacy-policy" className="text-primary ml-1 hover:underline">
                {t('components.cookie-consent.privacy-policy')}
              </Link>
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <Button variant="outline" onClick={() => setShowDetails(!showDetails)} className="whitespace-nowrap">
              {showDetails ? t('components.cookie-consent.buttons.hide-details') : t('components.cookie-consent.buttons.show-details')}
            </Button>
            <Button variant="outline" onClick={acceptAll} className="whitespace-nowrap">
              {t('components.cookie-consent.buttons.accept-all')}
            </Button>
            <Button variant="outline" onClick={() => setVisible(false)} className="whitespace-nowrap">
              {t('components.cookie-consent.buttons.close')}
            </Button>
          </div>
        </div>

        {showDetails && (
          <div className="border-border bg-muted/50 mt-4 space-y-4 rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">{t('components.cookie-consent.cookies.necessary.title')}</h4>
                <p className="text-muted-foreground text-sm">{t('components.cookie-consent.cookies.necessary.description')}</p>
              </div>
              <input type="checkbox" checked={preferences.necessary} disabled className="h-4 w-4 rounded border-gray-300" />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">{t('components.cookie-consent.cookies.analytics.title')}</h4>
                <p className="text-muted-foreground text-sm">{t('components.cookie-consent.cookies.analytics.description')}</p>
              </div>
              <input type="checkbox" checked={preferences.analytics} onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })} className="h-4 w-4 rounded border-gray-300" />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">{t('components.cookie-consent.cookies.marketing.title')}</h4>
                <p className="text-muted-foreground text-sm">{t('components.cookie-consent.cookies.marketing.description')}</p>
              </div>
              <input type="checkbox" checked={preferences.marketing} onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })} className="h-4 w-4 rounded border-gray-300" />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <Button variant="outline" onClick={() => savePreferences(preferences.analytics, preferences.marketing)}>
                {t('components.cookie-consent.buttons.save-preferences')}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;
