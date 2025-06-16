import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Our Services - Orlean',
    description: 'Explore our comprehensive range of IT and business solutions.',
    keywords: ['Services', 'IT Solutions', 'Web Development', 'Business Solutions', 'Orlean'],
    robots: 'index, follow',
    applicationName: 'Orlean',
    authors: [{ name: 'Orlean Group', url: 'https://orlean.uz' }],
    generator: 'Next.js',
    creator: 'Orlean Group',
    publisher: 'Orlean Group',
    metadataBase: new URL('https://orlean.uz'),

    openGraph: {
      title: "Our Services - Orlean",
      description: "Explore our comprehensive range of IT and business solutions.",
      type: 'website',
      url: 'https://orlean.uz/services',
      siteName: 'Orlean',
      locale: 'en-US',
      images: [
        {
          url: 'https://orlean.uz/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Orlean - Our Services',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: "Our Services - Orlean",
      description: "Explore our comprehensive range of IT and business solutions.",
      creator: '@orlean_group',
      images: ['https://orlean.uz/og-image.png'],
    },

    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },

    manifest: '/site.webmanifest',
  };
} 