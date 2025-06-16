import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: {
            default: 'Orlean Group - Professional Business Solutions',
            template: '%s | Orlean',
        },
        description: "Orlean Group - Your trusted partner in IT & Professional Business Solutions",
        robots: 'index, follow',
        applicationName: 'Orlean',
        authors: [{ name: 'Orlean Group', url: 'https://orlean.uz' }],
        generator: 'Next.js',
        keywords: ['Orlean Group', 'IT Agency', 'Outsourcing', 'Web Development', 'Professional', 'Business', ' Solutions', 'Consulting', 'Uzbekistan'],
        creator: 'Orlean Group',
        publisher: 'Orlean Group',
        metadataBase: new URL('https://orlean.uz'),
        verification: {
            google: 'WMXOcvOCMnWJ6K4IE64ZYtNGhGvSXYznjkG2C5YV2-M',
        },
        alternates: {
            canonical: 'https://orlean.uz',
        },

        openGraph: {
            title: "Orlean Group - Professional Business Solutions",
            description: "Orlean Group - Your trusted partner in IT & Professional Business Solutions",
            type: 'website',
            url: 'https://orlean.uz/',
            siteName: 'Orlean',
            locale: 'en-US',
            images: [
                {
                    url: 'https://orlean.uz/og-image.png',
                    width: 1200,
                    height: 630,
                    alt: 'Orlean - Professional Business Solutions',
                },
            ],
        },

        twitter: {
            card: 'summary_large_image',
            title: "Orlean Group - Professional Business Solutions",
            description: "Orlean Group - Your trusted partner in IT & Professional Business Solutions",
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