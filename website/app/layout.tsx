import './globals.css'
import type { Metadata } from 'next'
import { Inter, Rubik } from 'next/font/google'
import NavBar from '@/components/navbar'
import Footer from '@/components/footer'


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const rubik = Rubik({
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
     <html lang="en" className={rubik.className}>
      <body  className="bg-slate-800 flex flex-col min-h-screen text-slate-400">
        <header className='sticky'>
          <NavBar/>
        </header>
        <main className="grow py-3">
          {children}
        </main>
        <footer className=' bg-indigo-500'>
          <Footer/>
        </footer>
      </body>
    </html>
  )
}
