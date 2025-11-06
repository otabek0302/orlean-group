import { Poppins } from 'next/font/google';
import { Providers } from '@/app/providers';
import { Toaster } from '@/components/ui/sonner';
import { generateMetadata } from './metadata';
import Script from 'next/script';

import './globals.css';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import CookieConsent from '@/components/ui/cookie-consent';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export { generateMetadata };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#023E7D " />
        <meta name="google-site-verification" content="WMXOcvOCMnWJ6K4IE64ZYtNGhGvSXYznjkG2C5YV2-M" />

        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://orlean.uz",
              "@type": "Organization",
              "name": "Orlean Group",
              "url": "https://orlean.uz",
              "logo": "https://orlean.uz/logo.png",
              "sameAs": [
                "https://t.me/orlean.group",
                "https://instagram.com/orlean.group",
                "https://linkedin.com/company/orlean.group"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+998995945131",
                "contactType": "customer service",
                "availableLanguage": ["English", "Uzbek", "Russian"]
              }
            })
          }}
        />

        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-P382QZJ3');
            `,
          }}
        />

        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P382QZJ3" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} />
        </noscript>

        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

        <link rel="me" href="https://t.me/orlean.group" />
        <link rel="me" href="https://instagram.com/orlean.group" />
        <link rel="me" href="https://linkedin.com/company/orlean.group" />

        
      </head>
      <body className={`${poppins.variable} antialiased`}>
        <Providers>
          <Header />
          <main className="flex flex-col">
            {children}
            <Toaster richColors position="bottom-center" />
            <CookieConsent />
          </main>
          <Footer />
        </Providers>
      </body>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=G-WMXOcvOCMnWJ6K4IE64ZYtNGhGvSXYznjkG2C5YV2-M`} />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WMXOcvOCMnWJ6K4IE64ZYtNGhGvSXYznjkG2C5YV2-M');`,
        }}
      />
    </html>
  );
}
