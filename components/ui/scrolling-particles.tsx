'use client'

import Image, { StaticImageData } from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'

type TScrollingParticles = {
  items: {
    name: string
    image: StaticImageData | string
  }[]
}

export const ScrollingParticles = ({ items }: TScrollingParticles) => {
  return (
    <div className="relative z-50 mx-auto w-full max-w-screen-2xl">
      <div className="absolute inset-y-0 left-0 z-50 h-full w-1/6 bg-gradient-to-r from-gray-900 via-gray-900 via-40% to-transparent lg:w-1/5" />
      <div className="absolute inset-y-0 right-0 z-50 h-full w-1/6 bg-gradient-to-l from-gray-900 via-gray-900 via-40% to-transparent lg:w-1/5" />
      <div className="absolute inset-y-0 right-0 z-50 w-full bg-transparent" />

      <Swiper
        modules={[Autoplay, EffectFade]}
        className="relative ease-linear"
        freeMode={true}
        loop={true}
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
        speed={4000} // Adjust this value to control the speed of the animation
        spaceBetween={20}
        slidesPerView={4}
      >
        {[...items, ...items].map((item, index) => (
          <SwiperSlide key={index} className="z-30 m-0">
            <Image
              src={item.image}
              alt={item.name}
              width={80}
              height={80}
              className="rounded-full brightness-200 filter transition-opacity duration-500 lg:h-20 lg:w-20"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
