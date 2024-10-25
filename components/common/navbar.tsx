'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowRight, FacebookIcon, MenuIcon, X } from 'lucide-react'
import AOS from 'aos'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import data from '@/data/data.json'

const Navbar = () => {
  const [isTransparent, setIsTransparent] = useState<boolean>(true)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const pathname = usePathname()

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
    })
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (pathname !== '/') return

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
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed z-30 w-screen border-b-[1px] border-black/10 bg-white px-2 text-black backdrop-blur-sm transition duration-200 ease-linear lg:justify-around lg:px-16',
        {
          'border-white/10 bg-transparent text-white':
            isTransparent && pathname === '/' && !isMenuOpen,
        }
      )}
    >
      <nav className="mx-auto flex max-w-screen-xl items-center justify-between">
        <div className="flex items-center gap-4 px-4 lg:w-[20%] lg:justify-start lg:p-4 xl:gap-16">
          <div className="block md:hidden">
            <Button
              variant="link"
              className={cn('p-0 text-black', {
                'text-white': isTransparent && pathname === '/' && !isMenuOpen,
              })}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              {isMenuOpen ? <X /> : <MenuIcon />}
            </Button>
          </div>

          <Link href="/" className="flex items-center justify-center gap-4">
            <Image
              src={data.BRAND?.logo}
              alt={data.BRAND?.name}
              width={800}
              height={800}
              className="hidden h-8 w-8 contrast-100 filter lg:block"
            />
            <h1 className="-mt-[4px] text-lg md:text-xl">{data.BRAND?.name}</h1>
          </Link>
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-3">
            {data.LINKS?.map((link) => (
              <li key={link.title}>
                <Button
                  variant="link"
                  className={cn('text-black', {
                    'hover:no-underline':
                      pathname === link.href ||
                      (link.href !== '/' && pathname.startsWith(link.href)),
                    'text-white': isTransparent && pathname === '/',
                  })}
                >
                  <Link href={link.href}>{link.title}</Link>
                </Button>
                {(pathname === link.href ||
                  (link.href !== '/' && pathname.startsWith(link.href))) && (
                  <div className="m-auto mt-[2px] h-[2px] w-[35%] rounded-full bg-brand-accent" />
                )}
              </li>
            ))}
          </ul>
        </div>
        <div
          className={cn(
            'flex items-center justify-end gap-1 p-4 text-black lg:w-[20%]',
            { 'text-white': isTransparent && pathname === '/' && !isMenuOpen }
          )}
        >
          <Button
            variant="ghost"
            className="h-10 w-10 rounded-full border-[1px] border-opacity-5 p-4"
            asChild
          >
            <Link href={data?.CONTACT?.fb} target="_blank">
              <FacebookIcon className="flex-shrink-0" strokeWidth={1.5} />
            </Link>
          </Button>
        </div>

        {isMenuOpen && (
          <div className="absolute inset-x-0 top-[4rem] h-screen w-screen border-t-[1px] bg-white p-6 text-black md:hidden">
            <ul className="flex h-full flex-col items-start justify-start gap-y-4">
              {data.LINKS?.map((link, index) => (
                <li
                  key={link.title}
                  className={cn(
                    'flex w-full border-b-[1px] border-neutral-400 py-4 text-black',
                    {
                      'border-brand-secondary':
                        pathname === link.href ||
                        (link.href !== '/' && pathname.startsWith(link.href)),
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
                        'font-bold text-brand-secondary':
                          pathname === link.href ||
                          (link.href !== '/' && pathname.startsWith(link.href)),
                      }
                    )}
                  >
                    {link.title}
                    <ArrowRight
                      color={
                        pathname === link.href ||
                        (link.href !== '/' && pathname.startsWith(link.href))
                          ? 'rgb(51, 106, 159)'
                          : 'rgb(115, 115, 115)'
                      }
                      size={16}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
