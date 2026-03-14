import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'BrightForge — Websites Built for Local Businesses',
  description: 'We design, build, and manage professional websites so local businesses can focus on what they do best. Starting at $1,000.',
  keywords: 'website design for small businesses, local business website design, website management services, small business web design, contractor website design',
  openGraph: {
    title: 'BrightForge — Websites Built for Local Businesses',
    description: 'Modern websites. Built fast. Managed monthly.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
