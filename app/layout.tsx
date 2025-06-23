import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Swimply Clone - Rent Private Pools, Courts & More by the Hour',
  description: 'Discover and book private pools, tennis courts, basketball courts and more near you. Join over 4 million experiences hosted by verified hosts.',
  keywords: ['pool rental', 'private pools', 'tennis courts', 'basketball courts', 'hourly rentals', 'swimply'],
  authors: [{ name: 'Swimply Clone' }],
  openGraph: {
    title: 'Swimply Clone - Rent Private Pools by the Hour',
    description: 'Find and book private pools, courts & recreational spaces near you',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Swimply Clone - Private Pool Rentals',
    description: 'Discover amazing private pools and courts for rent by the hour',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full antialiased`}>
        {children}
      </body>
    </html>
  )
}