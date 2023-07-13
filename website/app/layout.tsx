import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from '@/components/navbar'
import Image from 'next/image'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ben Pham | Developer',
  description: 'Home page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
     <html lang="en" className={inter.className}>
      <body  className="bg-black flex flex-col min-h-screen text-white">
        <header className='sticky'>
          <NavBar/>
        </header>
        <main className="grow py-3">
          {children}
        </main>
        <footer className="bg-gray-600 border-t py-3 text-white text-center text-xs h-32 pt-16">
          <a href="https://github.com" className="place-content-center">
            GITHUB
          </a>
        </footer>
      </body>
    </html>
  )
}
