import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Support - Orlean',
    description: 'Get the help you need with our comprehensive support services.',
    keywords: ['Support', 'Help', 'Customer Service', 'Technical Support', 'Orlean'],
    robots: 'index, follow',
    applicationName: 'Orlean',
    authors: [{ name: 'Orlean Group', url: 'https://orlean.uz' }],
    generator: 'Next.js',
    creator: 'Orlean Group',
    publisher: 'Orlean Group',
    metadataBase: new URL('https://orlean.uz'),

    openGraph: {
      title: "Support - Orlean",
      description: "Get the help you need with our comprehensive support services.",
      type: 'website',
      url: 'https://orlean.uz/support',
      siteName: 'Orlean',
      locale: 'en-US',
      images: [
        {
          url: 'https://orlean.uz/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Orlean - Support',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: "Support - Orlean",
      description: "Get the help you need with our comprehensive support services.",
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