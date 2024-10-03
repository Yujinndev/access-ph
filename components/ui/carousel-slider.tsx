import { useState } from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image, { StaticImageData } from 'next/image'

type TCarouselSlider = {
  items: {
    id: number
    name: string
    description: string
    image: StaticImageData
  }[]
}

const CarouselSlider = ({ items }: TCarouselSlider) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handlePrev = () => {
    if (activeIndex === 0) return

    setActiveIndex((prevIndex) => prevIndex - 1)
  }

  const handleNext = () => {
    if (activeIndex === items.length - 1) return

    setActiveIndex((prevIndex) => prevIndex + 1)
  }

  return (
    <div className="relative h-full space-y-6">
      <div className="carousel relative flex h-[30rem] items-center justify-center gap-4">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={cn(
              'absolute h-full w-full flex-col gap-2 space-y-2 rounded-md bg-[#336A9F] p-4 text-white transition-all duration-300 ease-linear lg:relative lg:m-0 lg:flex lg:w-1/4',
              { 'z-30 bg-[#03346E] lg:w-1/2': index === activeIndex }
            )}
            // animate={{
            //   // width: index === activeIndex ? '50%' : '25%',
            //   opacity: index === activeIndex ? 1 : 0.75,
            //   zIndex: index === activeIndex ? 5 : 1,
            // }}
            // transition={{ duration: 0.3 }}
          >
            <Image
              src={item.image}
              alt={item.name}
              className={cn(
                'aspect-square h-[72.5%] w-full rounded-sm border-[1px] border-neutral-200 object-contain p-4 opacity-55',
                { 'opacity-100': index === activeIndex }
              )}
            />
            <div className="flex h-[22.5%] w-full items-center justify-between overflow-hidden rounded-md bg-[#D9D9D9]/10 p-4 py-4 text-left">
              <div className={cn('w-11/12 space-y-2 py-2')}>
                <h2 className="line-clamp-1 font-dmSans text-xl">
                  {item.name}
                </h2>
                {activeIndex === index && (
                  <p className={cn('line-clamp-1')}>{item.description}</p>
                )}
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: index === activeIndex ? 1 : 0,
                  scale: index === activeIndex ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <Button
                  variant="secondary"
                  className="h-12 w-12 rounded-full bg-[#E2E2B6] text-black"
                  size="icon"
                >
                  <ArrowRight className="mx-auto flex-shrink-0" />
                </Button>
              </motion.div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-4">
        <div className="space-x-2">
          <Button
            onClick={handlePrev}
            variant="outline"
            className="h-12 w-12 rounded-full"
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
            onClick={handleNext}
            variant="outline"
            className="h-12 w-12 rounded-full"
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
        <Button className="rounded-full px-12 py-6">View All</Button>
      </div>
    </div>
  )
}

export default CarouselSlider
