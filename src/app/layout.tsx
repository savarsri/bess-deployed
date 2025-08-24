import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BESS Strategies - Battery Energy Storage Systems Consulting',
  description: 'Expert consulting for battery energy storage systems (BESS). Independent guidance for businesses, EPCs, and developers navigating energy storage complexities.',
  keywords: 'battery energy storage, BESS consulting, energy storage systems, commercial energy storage, industrial battery systems, SGIP, ITC, energy consulting',
  authors: [{ name: 'BESS Strategies' }],
  creator: 'BESS Strategies',
  publisher: 'BESS Strategies',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://bessstrategies.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'BESS Strategies - Battery Energy Storage Systems Consulting',
    description: 'Expert consulting for battery energy storage systems. Independent guidance that saves time, reduces risks, and maximizes ROI.',
    url: 'https://bessstrategies.com',
    siteName: 'BESS Strategies',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BESS Strategies - Battery Energy Storage Consulting',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BESS Strategies - Battery Energy Storage Systems Consulting',
    description: 'Expert consulting for battery energy storage systems. Independent guidance that saves time, reduces risks, and maximizes ROI.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}