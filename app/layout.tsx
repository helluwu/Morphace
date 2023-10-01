
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
        <nav className="  bg-nav w-full">
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
                  <Link href="/" className={`${pathname === '/' ? ' text-hover' : 'text-white'} block py-2 px-4 hover:text-hover transition`}>
                    PROJECT
                  </Link>
                </li>
                <li>
                  <Link href="/algorithm" className={`${pathname === '/examples' ? 'text-hover' : 'text-white'} block py-2 px-4 hover:text-hover transition`}>
                    TRY IT
                  </Link>
                </li>
                <li>
                  <Link href="/build" className={`${pathname === '/build' ? 'text-hover' : 'text-white'} block py-2 px-4 hover:text-hover transition`}>
                    ABOUT
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        </body>

        {children}

<footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="/images/morph.png" className="flex items-center mb-4 sm:mb-0">
                <img src="/images/morph.png" className=" w-1/3" alt="Flowbite Logo" />
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="/build" className="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="/algorithm" className="hover:underline">Try it!</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline">MAIS Hackaton Project</a>. All Rights Reserved.</span>
    </div>
</footer>

    </html >
  )
}