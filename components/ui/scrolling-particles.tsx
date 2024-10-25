'use client'

import Image, { StaticImageData } from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import Link from 'next/link'

type TScrollingParticles = {
  items: {
    name: string
    image: StaticImageData | string
    href: string
  }[]
}

export const ScrollingParticles = ({ items }: TScrollingParticles) => {
  return (
    <div className="relative z-50 mx-auto w-full max-w-screen-2xl">
      <div className="absolute inset-y-0 left-0 z-50 h-full w-1/6 bg-gradient-to-r from-brand-darken via-brand-darken via-40% to-transparent lg:w-1/5" />
      <div className="absolute inset-y-0 right-0 z-50 h-full w-1/6 bg-gradient-to-l from-brand-darken via-brand-darken via-40% to-transparent lg:w-1/5" />

      <Swiper
        modules={[Autoplay, EffectFade]}
        className="relative ease-linear"
        freeMode={true}
        loop={true}
        allowTouchMove={false}
        breakpoints={{
          640: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 8,
            spaceBetween: 40,
          },
        }}
        autoplay={{
          delay: 1,
        }}
        speed={4000}
        spaceBetween={20}
        slidesPerView={4}
      >
        {[...items, ...items].map((item, index) => (
          <SwiperSlide key={index} className="z-30 m-0">
            <Link
              href={item.href}
              target={item.href !== '#' ? '_blank' : '_parent'}
            >
              <Image
                src={item.image}
                alt={item.name}
                width={800}
                height={800}
                loading="lazy"
                className="h-12 w-12 brightness-200 filter transition-opacity duration-500 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
