import './globals.css'
import type { Metadata } from 'next'
import { Inter, Rubik } from 'next/font/google'
import NavBar from '@/components/navbar'
import Image from 'next/image'
import githublogo from "@/public/images/githubicon.png"
import linkedinlogo from "@/public/images/linkedinlogo.png"

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
        <footer>
          <div className='container m-auto grid grid-cols-5 lg:grid-cols-7 gap-10 bg-gray-600 border-t h-32 pt-8'>
            <div className='lg:col-span-2'></div>
            <a href="https://github.com/PhamjaminBen" className="">
              <Image  src = {githublogo} 
                      alt = "Github" 
                      width={64}
                      height={64}
                      className='m-auto'>
              </Image>
            </a>
            <a href="https://www.linkedin.com/in/ben-pham-307a22149/" className="">
              <Image  src = {linkedinlogo} 
                      alt = "Github" 
                      width={64}
                      height={64}
                      className='m-auto'>
              </Image>
            </a>
            <a href="https://github.com" className="">
              <Image  src = {githublogo} 
                      alt = "Github" 
                      width={64}
                      height={64}
                      className='m-auto'>
              </Image>
            </a>
            <div className='lg:col-span-2'></div>
          </div>
        </footer>
      </body>
    </html>
  )
}
