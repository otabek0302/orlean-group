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

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: 'website',
      url: 'https://orlean-group.com',
      siteName: 'Orlean Group',
    },
    twitter: {
      title: meta.title,
      description: meta.description,
      card: 'summary_large_image',
    },
  };
}
