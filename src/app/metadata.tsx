import { Metadata } from 'next';
import { cookies } from 'next/headers';

import en from '@/locales/en.json';
import ru from '@/locales/ru.json';
import uz from '@/locales/uz.json';

type Language = 'en' | 'ru' | 'uz';

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const lng = (cookieStore.get('i18next')?.value || 'en') as Language;

  const resources = {
    en: en.pages.home,
    ru: ru.pages.home,
    uz: uz.pages.home,
  } as const;

  const meta = resources[lng].meta;

  const imageUrl = 'https://orlean.uz/og-image.png';

  return {
    title: meta.title,
    description: meta.description,
    applicationName: 'Orlean',
    authors: [{ name: 'Orlean Group', url: 'https://orlean.uz' }],
    generator: 'Next.js',
    keywords: ['Orlean Group', 'IT Agency', 'Outsourcing', 'Web Development', 'Marketing', 'Consulting', 'Uzbekistan'],
    themeColor: '#1B5FFE',
    colorScheme: 'light dark',
    creator: 'Orlean Group',
    publisher: 'Orlean Group',
    metadataBase: new URL('https://orlean.uz'),

    openGraph: {
      title: meta.title,
      description: meta.description,
      type: 'website',
      url: 'https://orlean.uz/',
      siteName: 'Orlean',
      locale: lng,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: 'Orlean - IT & Marketing Agency',
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      creator: '@orlean_group',
      images: [imageUrl],
    },

    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },

    manifest: '/site.webmanifest',
  };
}