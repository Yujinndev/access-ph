import Image from 'next/image'
import { StyledHeading } from '@/components/ui/styled-heading'
import { Heading, Root } from '@/lib/schema'

const Hero = ({
  data,
  heading,
  subheading,
}: {
  data: Root
  heading: Heading
  subheading: string
}) => {
  return (
    <section className="gradient-bg relative z-20 flex h-[30rem] w-full flex-col items-center justify-center gap-4 gap-y-1 pt-20">
      <Image
        src={data?.BRAND?.logo}
        alt={data?.BRAND?.name}
        width={800}
        height={800}
        loading="lazy"
        className="absolute -z-10 mx-auto w-[20%] opacity-5"
      />
      <div className="relative mx-auto max-w-screen-xl">
        <div className="relative -mt-8 space-y-4 text-center text-white md:space-y-6 lg:-mt-16 lg:space-y-8">
          <StyledHeading
            className="text-[3.75rem] md:text-[4rem] lg:text-[4.5rem] lg:leading-normal"
            text={heading?.text}
            highlights={heading?.highlights}
          />
          <p
            className="mx-auto w-2/3 font-dmSans text-lg font-light tracking-tight lg:text-xl xl:text-2xl"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            {subheading}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
