import type { Metadata, Viewport } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

export const viewport: Viewport = {
  themeColor: '#09090b',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://piyushyadav.dev'),
  title: {
    default: 'Piyush Yadav | Data & Analytics Portfolio',
    template: '%s | Piyush Yadav',
  },
  description: 'Personal portfolio of Piyush Yadav, Software Engineering graduate from Delhi Technological University (DTU). Specializing in Data Analytics, Data Science, Data Engineering, Business Analytics, and Machine Learning using SQL, Python, Power BI, and predictive modeling.',
  keywords: [
    'Piyush Yadav',
    'Data Analyst Portfolio',
    'Data Scientist',
    'Data Engineer',
    'Business Analyst',
    'Product Analyst',
    'DTU Delhi Technological University',
    'SQL',
    'Python',
    'Power BI',
    'Machine Learning',
    'XGBoost',
    'DAX'
  ],
  authors: [{ name: 'Piyush Yadav' }],
  creator: 'Piyush Yadav',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Piyush Yadav | Data & Analytics Portfolio',
    description: 'Turning Data into Insights, Decisions, and Solutions. Explore verified projects in Fraud Analytics, Customer Churn, E-commerce BI, and Credit Risk.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Piyush Yadav Portfolio',
    images: [
      {
        url: '/images/Piyushformal.png',
        width: 1200,
        height: 1200,
        alt: 'Piyush Yadav - Software Engineering Graduate & Data Analyst',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Piyush Yadav | Data & Analytics Portfolio',
    description: 'Turning Data into Insights, Decisions, and Solutions.',
    images: ['/images/Piyushformal.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${plusJakartaSans.variable}`}>
      <body className={`${inter.className} min-h-screen bg-[#fafafa] text-neutral-900 antialiased selection:bg-blue-600 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
