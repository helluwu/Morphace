
'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from "next/link"
import { useEffect, useState } from 'react'
import { usePathname } from "next/navigation"
import Head from 'next/head'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  const [currentPath, setCurrentPath] = useState<string>('')
  const pathname = usePathname();

  return (

    <html lang='en'>
      <Head>
        <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css" />
        <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </Head>

      <body>
        <nav className=" bg-slate-600 lg:bg-opacity-70 bg-opacity-95 w-full">
          <div className="flex flex-wrap">

            <div id="logoAndName" className="flex items-center pl-8 pr-0">
              <span className="self-center text-xl font-normal whitespace-nowrap text-white tracking-tight">Morphace</span>
            </div>

            <div className={`w-full lg:block lg:w-auto ml-auto flex`}>

              <ul className="flex lg:flex-row lg:text-lg lg:ml-auto
              md:flex-col md:mx-auto md:text-center md:text-sm md:mr-auto
              flex-col mx-auto text-center text-base mr-auto
              text-white font-normal whitespace-nowrap py-4 pr-8">
                <li>
                  <Link href="/" className={`${pathname === '/' ? ' text-lime-700' : 'text-white'} block py-2 px-4 hover:text-lime-700 transition`}>
                    PROJECT
                  </Link>
                </li>
                <li>
                  <Link href="/algorithm" className={`${pathname === '/examples' ? 'text-lime-700' : 'text-white'} block py-2 px-4 hover:text-lime-700 transition`}>
                    TRY IT
                  </Link>
                </li>
                <li>
                  <Link href="/build" className={`${pathname === '/build' ? 'text-lime-700' : 'text-white'} block py-2 px-4 hover:text-lime-700 transition`}>
                    ABOUT
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {children}

      </body>


    </html >
  )
}