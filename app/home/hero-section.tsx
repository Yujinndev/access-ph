import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { ScrollingParticles } from '@/components/ui/scrolling-particles'
import Image from 'next/image'
import data from '@/data/data.json'
import { StyledHeading } from '@/components/ui/styled-heading'

const Hero = () => {
  return (
    <section className="hero gradient-bg relative z-20 flex h-screen flex-col items-center justify-center gap-4 gap-y-1 px-6 md:px-14 lg:gap-y-6 lg:px-20 xl:px-28">
      <Image
        src={data.BRAND.logo}
        alt={data.BRAND.name}
        width={800}
        height={800}
        className="absolute -z-10 w-[80%] opacity-5 lg:w-[40%]"
      />
      <div className="relative -mt-8 space-y-4 text-center text-white md:space-y-6 lg:-mt-16 lg:space-y-8">
        <StyledHeading
          className="text-[3.75rem] md:text-[4rem] lg:text-[4.5rem] lg:leading-normal xl:text-[5.75rem]"
          text={data.BRAND.heading.text}
          highlights={data.BRAND.heading.highlights}
        />
        <div
          data-aos="fade-up"
          data-aos-delay="250"
          className="flex justify-center gap-4 font-oswald text-[2rem] font-bold md:text-[2.75rem] lg:text-[3.5rem] xl:text-[4rem]"
        >
          {data.BRAND.subheading.split(' ').map((el, index) => {
            const last = data.BRAND.subheading.split(' ').length - 1

            return (
              <h2 key={index} className="flex items-center gap-4">
                {el}
                {last !== index && <ArrowRight />}
              </h2>
            )
          })}
        </div>
        <p
          className="font-dmSans text-lg font-light tracking-tight lg:text-xl xl:text-2xl"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          {data.BRAND.description}
        </p>
        <Button
          variant="ghost"
          className="group m-auto w-max space-x-3 rounded-full bg-background p-4 px-8 hover:drop-shadow-[0_0_7px_rgb(110,231,183,.75)] lg:m-0 lg:px-10 lg:py-6"
          data-aos="fade-up"
          data-aos-delay="750"
          asChild
        >
          <Link href="#more" scroll={true}>
            <span className="text-[14px] font-medium text-black">
              Explore more
            </span>
            <ArrowDown color="black" size={18} />
          </Link>
        </Button>
      </div>
      <div className="absolute bottom-0 z-50 flex w-full items-center justify-center gap-8 bg-gray-900 px-3 py-3 lg:py-6">
        <ScrollingParticles items={[...data.LOGOS, ...data.LOGOS]} />
      </div>
    </section>
  )
}

export default Hero
