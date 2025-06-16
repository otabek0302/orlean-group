import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Contact Us - Orlean',
    description: 'Get in touch with our team for professional business solutions.',
    keywords: ['Contact', 'Orlean', 'Support', 'IT Services', 'Business Solutions'],
    robots: 'index, follow',
    applicationName: 'Orlean',
    authors: [{ name: 'Orlean Group', url: 'https://orlean.uz' }],
    generator: 'Next.js',
    creator: 'Orlean Group',
    publisher: 'Orlean Group',
    metadataBase: new URL('https://orlean.uz'),

    openGraph: {
      title: "Contact Us - Orlean",
      description: "Get in touch with our team for professional business solutions.",
      type: 'website',
      url: 'https://orlean.uz/contact',
      siteName: 'Orlean',
      locale: 'en-US',
      images: [
        {
          url: 'https://orlean.uz/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Orlean - Contact Us',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: "Contact Us - Orlean",
      description: "Get in touch with our team for professional business solutions.",
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