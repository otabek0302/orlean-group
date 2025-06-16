import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'About Us - Orlean',
        description: 'Learn more about Orlean\'s mission and services.',
        applicationName: 'Orlean',
        authors: [{ name: 'Orlean Group', url: 'https://orlean.uz' }],
        generator: 'Next.js',
        keywords: ['Orlean', 'About', 'IT Services', 'Orlean Group', 'IT Agency', 'Outsourcing', 'Web Development', 'Marketing', 'Consulting', 'Uzbekistan'],
        creator: 'Orlean Group',
        publisher: 'Orlean Group',
        metadataBase: new URL('https://orlean.uz'),
        robots: 'index, follow',
        alternates: {
            canonical: 'https://orlean.uz/about',
        },

        openGraph: {
            title: "About Us - Orlean",
            description: "Discover more about our company.",
            type: 'website',
            url: 'https://orlean.uz/about',
            siteName: 'Orlean',
            locale: 'en-US',
            images: [
                {
                    url: 'https://orlean.uz/og-image.png',
                    width: 1200,
                    height: 630,
                    alt: 'Orlean Group - Professional Business Solutions',
                },
            ],
        },

        twitter: {
            card: 'summary_large_image',
            title: "About Us - Orlean",
            description: "Discover more about our company.",
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