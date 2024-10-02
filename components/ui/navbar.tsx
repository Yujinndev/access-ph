'use client'

import { useEffect, useState } from 'react'
import { BRAND, LINKS } from '@/app/constants'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  ArrowRight,
  FacebookIcon,
  InstagramIcon,
  MenuIcon,
  X,
} from 'lucide-react'
import AOS from 'aos'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const Navbar = () => {
  const [isTransparent, setIsTransparent] = useState<boolean>(true)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const pathname = usePathname()

  useEffect(() => {
    AOS.init()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const viewportHeight = document.querySelector('.hero')!.clientHeight - 100

      if (scrollY >= viewportHeight) {
        setIsTransparent(false)
      } else {
        setIsTransparent(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed z-30 w-screen bg-gray-900 px-2 text-white backdrop-blur-sm transition duration-200 ease-linear lg:justify-around lg:px-16',
        {
          'bg-transparent': isTransparent,
        }
      )}
    >
      <div className="mx-auto flex max-w-screen-xl items-center justify-between">
        <div className="flex items-center gap-4 px-4 lg:w-[20%] lg:justify-start lg:p-4 xl:gap-16">
          <div className="block md:hidden">
            <Button
              variant="link"
              className="p-0 text-white"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              {isMenuOpen ? <X /> : <MenuIcon />}
            </Button>
          </div>

          <Link href="/" className="flex items-center justify-center gap-4">
            <Image
              src={BRAND.logo}
              alt={BRAND.name}
              className="hidden h-8 w-8 contrast-100 filter lg:block"
            />
            <h1 className="-mt-[4px] text-lg md:text-xl">{BRAND.name}</h1>
          </Link>
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-3">
            {LINKS.map((link) => (
              <li key={link.title}>
                <Button
                  variant="link"
                  className={
                    pathname === link.href
                      ? 'text-white hover:no-underline'
                      : 'text-white'
                  }
                >
                  <Link href={link.href}>{link.title}</Link>
                </Button>
                {pathname === link.href && (
                  <div className="m-auto mt-[2px] h-[2px] w-[35%] rounded-full bg-brand" />
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-end gap-1 p-4 text-white lg:w-[20%]">
          <Button variant="ghost" className="h-8 w-8">
            <FacebookIcon className="flex-shrink-0" />
          </Button>
          <Button variant="ghost" className="h-8 w-8">
            <InstagramIcon className="flex-shrink-0" />
          </Button>
        </div>

        {isMenuOpen && (
          <div className="absolute inset-x-0 top-[4rem] h-screen w-screen border-t-[1px] bg-white p-6 text-black md:hidden">
            <ul className="flex h-full flex-col items-start justify-start gap-y-4">
              {LINKS.map((link, index) => (
                <li
                  key={link.title}
                  className={cn(
                    'flex w-full border-b-[1px] border-neutral-400 py-4 text-black',
                    {
                      'border-emerald-800': pathname === link.href,
                    }
                  )}
                >
                  <Link
                    href={link.href}
                    data-aos="fade"
                    data-aos-easing="ease-in-sine"
                    data-aos-delay={index * 250}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      'font-rubikMono flex w-full items-center justify-between text-start text-base text-neutral-600',
                      {
                        'font-bold text-emerald-800': pathname === link.href,
                      }
                    )}
                  >
                    {link.title}
                    <ArrowRight
                      color={
                        pathname === link.href
                          ? 'rgb(6,95,70)'
                          : 'rgb(115,115,115)'
                      }
                      size={16}
                    />
                  </Link>
                  {pathname === link.href && (
                    <div className="-mt-2 hidden h-[1px] w-full rounded-full bg-emerald-400 lg:block" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
