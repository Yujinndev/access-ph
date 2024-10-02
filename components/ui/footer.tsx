import { BRAND, LINKS } from '@/app/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="z-30 border-t-[1px] border-t-gray-200 text-black backdrop-blur-sm transition duration-200 ease-linear">
      <div className="mx-auto h-full max-w-screen-xl px-4 pb-20 pt-10 lg:px-16">
        <div className="grid h-full gap-4 lg:grid-cols-8">
          <div className="flex flex-col space-y-6 px-6 pt-12 lg:col-span-4">
            <Link href="/" className="flex items-center gap-4">
              <Image
                src={BRAND.logo}
                alt={BRAND.name}
                className="h-12 w-12 contrast-100 filter"
              />
              <h1 className="-mt-[4px] text-xl md:text-2xl">{BRAND.name}</h1>
            </Link>
            <p className="text-justify lg:w-3/4">
              ACCESS originated from the acronym: Academic Community
              Computerized Enrollment System & Solution. ACCESS Software
              Solutions was registered as an independent business entity and
              offer ACCESS School Management System to Philippine private
              schools.
            </p>
          </div>
          <div className="px-6 pt-12 lg:col-span-2">
            <h2 className="-mt-[4px] font-oswald text-lg font-bold md:text-xl">
              Navigation
            </h2>

            <ul className="mt-4 space-y-4">
              {LINKS.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="font-dmSans font-light underline-offset-8 hover:underline"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="px-6 pt-12 lg:col-span-2">
            <h2 className="-mt-[4px] font-oswald text-lg font-bold md:text-xl">
              Contact Us
            </h2>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center bg-[#03346E] p-4 text-white lg:flex-row">
        © 2016-2024 ACCESS Software Solutions:
        <a href="mailto:info@accessph.net">info@accessph.net</a>
      </div>
    </footer>
  )
}

export default Footer
