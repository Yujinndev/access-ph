import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'
import { getData } from '@/utils/get-data'

const Footer = async () => {
  const data = await getData()

  return (
    <footer className="z-30 border-t-[1px] border-t-gray-200 text-black backdrop-blur-sm transition duration-200 ease-linear">
      <div className="mx-auto h-full max-w-screen-xl py-10">
        <div className="grid h-full gap-x-4 lg:grid-cols-9">
          <div className="flex flex-col space-y-6 px-6 pt-12 lg:col-span-4">
            <Link href="/" className="flex items-center gap-4">
              <Image
                src={data.BRAND.logo}
                alt={data.BRAND.name}
                width={800}
                height={800}
                className="h-12 w-12 contrast-100 filter"
                priority
              />
              <h1 className="-mt-[4px] text-xl md:text-2xl">
                {data.BRAND.name}
              </h1>
            </Link>
            <p className="text-justify lg:w-3/4">
              ACCESS originated from the acronym: Academic Community
              Computerized Enrollment System & Solution. ACCESS Software
              Solutions was registered as an independent business entity and
              offer ACCESS School Management System to Philippine private
              schools.
            </p>
          </div>
          <div className="hidden px-6 pt-12 lg:col-span-2 lg:block">
            <h2 className="-mt-[4px] font-oswald text-lg font-bold md:text-xl">
              Navigation
            </h2>

            <ul className="mt-6 space-y-4">
              {data.LINKS?.map((link) => (
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
          <div className="space-y-2 px-6 pt-12 lg:col-span-3">
            <h2 className="-mt-[4px] font-oswald text-lg font-bold md:text-xl">
              Contact Us
            </h2>

            <div className="grid grid-cols-2 gap-3 py-4">
              <Button
                variant="ghost"
                className="w-full gap-2 rounded-full border-[1px] border-opacity-5 px-8 py-5"
                asChild
              >
                <Link href={data?.CONTACT?.fb} target="_blank">
                  <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="h-4 w-4 shrink-0 text-gray-800 duration-200 ease-in-out group-hover:fill-gray-800"
                  >
                    <g>
                      <path d="M24,12.072A12,12,0,1,0,10.125,23.926V15.541H7.078V12.072h3.047V9.428c0-3.007,1.792-4.669,4.532-4.669a18.611,18.611,0,0,1,2.687.234V7.947H15.83a1.734,1.734,0,0,0-1.947,1.49,1.71,1.71,0,0,0-.008.385v2.25H17.2l-.532,3.469h-2.8v8.385A12,12,0,0,0,24,12.072Z"></path>
                    </g>
                  </svg>
                  <span>Facebook</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                className="w-full gap-2 rounded-full border-[1px] border-opacity-5 px-8 py-5"
                asChild
              >
                <Link href={data?.CONTACT?.linkedIn} target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    fill="currentColor"
                    className="h-4 w-4 shrink-0 text-gray-800 duration-200 ease-in-out group-hover:fill-gray-800"
                  >
                    <path d="M16.5128 0H0.717949C0.287179 0 0 0.266667 0 0.666667V15.3333C0 15.7333 0.287179 16 0.717949 16H16.5128C16.9436 16 17.2308 15.7333 17.2308 15.3333V0.666667C17.2308 0.266667 16.9436 0 16.5128 0ZM5.09744 13.6667H2.58462V6H5.16923V13.6667H5.09744ZM3.80513 4.93333C3.01538 4.93333 2.29744 4.33333 2.29744 3.53333C2.29744 2.8 2.94359 2.13333 3.80513 2.13333C4.59487 2.13333 5.31282 2.73333 5.31282 3.53333C5.31282 4.33333 4.66667 4.93333 3.80513 4.93333ZM14.7179 13.6667H12.1333V9.93333C12.1333 9.06667 12.1333 7.93333 10.841 7.93333C9.47692 7.93333 9.33333 8.86667 9.33333 9.86667V13.6667H6.74872V6H9.18974V7.06667C9.54872 6.46667 10.3385 5.86667 11.6308 5.86667C14.2154 5.86667 14.7179 7.46667 14.7179 9.53333V13.6667Z" />
                  </svg>
                  <span>LinkedIn</span>
                </Link>
              </Button>
            </div>

            <hr />

            <div className="flex justify-center gap-4 rounded-full px-5 py-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.75"
                stroke="currentColor"
                className="h-6 w-6 shrink-0 text-brand"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <div>
                <a
                  className="inline-block text-brand duration-200 ease-in-out hover:text-brand-secondary"
                  href={`mailto:${data?.CONTACT?.email}`}
                >
                  {data?.CONTACT?.email}
                </a>
                <p className="text-base text-gray-600">
                  We usually email you back within the day
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-1 bg-brand p-4 text-white lg:flex-row">
        © 2016-2024 ACCESS Software Solutions
      </div>
    </footer>
  )
}

export default Footer
