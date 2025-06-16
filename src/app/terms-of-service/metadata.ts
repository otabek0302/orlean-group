import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Terms of Service - Orlean Group",
    description: "Read Orlean Group's Terms of Service to understand our policies, guidelines, and legal agreements for using our services.",
    keywords: ['Terms of Service', 'Legal', 'Agreement', 'Orlean Group', 'Policies', 'Guidelines'],
    robots: 'index, follow',
    applicationName: 'Orlean',
    authors: [{ name: 'Orlean Group', url: 'https://orlean.uz' }],
    generator: 'Next.js',
    creator: 'Orlean Group',
    publisher: 'Orlean Group',
    metadataBase: new URL('https://orlean.uz'),
    alternates: {
      canonical: 'https://orlean.uz/terms-of-service',
    },

    openGraph: {
      title: "Terms of Service - Orlean Group",
      description: "Read Orlean Group's Terms of Service to understand our policies, guidelines, and legal agreements for using our services.",
      type: 'website',
      url: 'https://orlean.uz/terms-of-service',
      siteName: 'Orlean',
      locale: 'en-US',
      images: [
        {
          url: 'https://orlean.uz/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Orlean - Terms of Service',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: "Terms of Service - Orlean Group",
      description: "Read Orlean Group's Terms of Service to understand our policies, guidelines, and legal agreements for using our services.",
      creator: '@orlean_group',
      images: ['https://orlean.uz/og-image.png'],
    },
  };
} 