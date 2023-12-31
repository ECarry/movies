import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Disney+ | 电影和节目',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          className='
            fixed
            top-0
            h-screen
            w-full
            bg-[#1A1D29]
            -z-10
            after:bg-main-background
            after:fixed
            after:bg-cover
            after:bg-no-repeat
            after:inset-0
          '
        ></div>
        <Header />
        {children}
      </body>
    </html>
  )
}
