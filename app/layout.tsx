import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Nebula Launcher — The Modern Minecraft Launcher',
  description:
    'Nebula Launcher is a sleek, modern Minecraft launcher with instant mod loader selection, Microsoft & offline accounts, built-in server hosting and a beautiful interface. Download for Windows.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'Nebula Launcher — The Modern Minecraft Launcher',
    description:
      'Nebula Launcher is a sleek, modern Minecraft launcher with instant mod loader selection, Microsoft & offline accounts, built-in server hosting and a beautiful interface.',
    url: 'https://nebulapp.duckdns.org',
    siteName: 'Nebula Launcher',
    images: [
      {
        url: '/og-image.png', // تأكد أن اسم الصورة يطابق صورتك المرفوعة في مجلد public
        width: 1200,
        height: 630,
        alt: 'Nebula Launcher Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#070b14',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="bg-background antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
