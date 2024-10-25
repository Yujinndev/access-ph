import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Scrollbar } from 'swiper/modules'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

type TCarouselSlider = {
  numItems: number
  items: {
    id: number
    name: string
    description: string
    image: StaticImageData | string
  }[]
}

export const CarouselSlider = ({ numItems, items }: TCarouselSlider) => {
  return (
    <div className="relative mt-8 lg:mt-24">
      <div className="relative mx-auto max-w-screen-xl px-5 sm:px-6 lg:flex lg:justify-center lg:px-8">
        <Swiper
          className="!overflow-visible"
          modules={[Navigation, Scrollbar]}
          scrollbar={{ draggable: true }}
          spaceBetween={16}
          slidesPerView="auto"
          navigation={{
            prevEl: '.carousel-prev',
            nextEl: '.carousel-next',
          }}
        >
          {items.slice(0, numItems).map((item, index) => (
            <SwiperSlide
              key={index}
              className="relative !h-auto !w-auto shrink-0 rounded-lg border-b border-l border-t border-gray-200 bg-brand text-white shadow-sm"
            >
              <div className="relative flex h-[28rem] max-w-[18rem] flex-col justify-between gap-4 p-3 sm:max-w-[22rem] md:max-w-[25rem] lg:max-w-[28rem] lg:p-4">
                <div className="relative h-[18rem] w-full overflow-hidden rounded-md bg-white">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={800}
                    height={800}
                    className="h-full w-[18rem] object-contain sm:w-[22rem] md:w-[25rem] lg:w-[28rem]"
                  />
                </div>
                <div className="relative h-[10rem] w-full overflow-clip text-clip rounded-md bg-[#D9D9D9]/10 px-3 py-3 lg:px-5">
                  <hr className="mb-1 h-px w-full bg-gray-200" />
                  <div className="flex h-full w-full items-center justify-between">
                    <div className="flex h-full w-9/12 flex-col justify-center gap-y-2 text-left lg:w-10/12">
                      <h4 className="group text-base font-semibold md:text-xl">
                        {item.name}
                      </h4>
                      <p className="line-clamp-3 max-h-16 overflow-hidden text-clip text-sm">
                        {item.description}
                      </p>
                    </div>
                    <Button
                      variant="secondary"
                      className="rounded-full bg-brand-accent p-4 text-black lg:h-12 lg:w-12"
                      size="icon"
                      asChild
                    >
                      <Link className="space-x-2" href={`/services/${item.id}`}>
                        <ArrowRight className="mx-auto flex-shrink-0" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="absolute inset-y-0 right-0 z-10 hidden bg-gradient-to-r from-gray-50/0 to-gray-50/90 2xl:block 2xl:w-64" />

      <div className="flex items-center justify-center gap-4 py-12">
        <div className="hidden space-x-2 lg:block">
          <Button
            variant="outline"
            className="carousel-prev h-12 w-12 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-6 w-6 text-black"
            >
              <path
                fillRule="evenodd"
                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Button>
          <Button
            variant="outline"
            className="carousel-next h-12 w-12 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-6 w-6 text-black"
            >
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Button>
        </div>
        <Button className="rounded-full px-12 py-6" asChild>
          <Link className="space-x-2" href="/services">
            View All
          </Link>
        </Button>
      </div>
    </div>
  )
}
