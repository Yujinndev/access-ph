import type { Metadata } from 'next'
import { cn } from '@/lib/utils'
import localFont from 'next/font/local'
import Navbar from '@/components/ui/navbar'
import './globals.css'
import 'aos/dist/aos.css'
import Footer from '@/components/ui/footer'

const dmSans = localFont({
  src: './fonts/DMSans.ttf',
  variable: '--font-dmSans',
  weight: '100 900',
})
const oswald = localFont({
  src: './fonts/Oswald.ttf',
  variable: '--font-oswald',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'ACCESS.PH',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'relative min-h-screen antialiased',
          dmSans.variable,
          oswald.variable
        )}
      >
        <Navbar />
        <main className="pb-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
