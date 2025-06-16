import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Privacy Policy - Orlean Group",
    description: "Learn about how Orlean Group collects, uses, and protects your personal information in our comprehensive Privacy Policy.",
    keywords: ['Privacy Policy', 'Data Protection', 'Privacy', 'Orlean Group', 'Personal Information', 'Data Security'],
    robots: 'index, follow',
    applicationName: 'Orlean',
    authors: [{ name: 'Orlean Group', url: 'https://orlean.uz' }],
    generator: 'Next.js',
    creator: 'Orlean Group',
    publisher: 'Orlean Group',
    metadataBase: new URL('https://orlean.uz'),
    alternates: {
      canonical: 'https://orlean.uz/privacy-policy',
    },

    openGraph: {
      title: "Privacy Policy - Orlean Group",
      description: "Learn about how Orlean Group collects, uses, and protects your personal information in our comprehensive Privacy Policy.",
      type: 'website',
      url: 'https://orlean.uz/privacy-policy',
      siteName: 'Orlean',
      locale: 'en-US',
      images: [
        {
          url: 'https://orlean.uz/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Orlean - Privacy Policy',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: "Privacy Policy - Orlean Group",
      description: "Learn about how Orlean Group collects, uses, and protects your personal information in our comprehensive Privacy Policy.",
      creator: '@orlean_group',
      images: ['https://orlean.uz/og-image.png'],
    },
  };
} 