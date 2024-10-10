import Image from 'next/image'
import data from '@/data/data.json'
import { StyledHeading } from '@/components/ui/styled-heading'

export default function Page({ params }: { params: { slug: number } }) {
  const id = params.slug
  const service = data.SERVICES.items.find((item) => item.id == id)

  return (
    <div className="relative z-20">
      <section className="gradient-bg relative z-20 flex h-[30rem] w-full flex-col items-center justify-center gap-4 gap-y-1 pt-20">
        <Image
          src={data?.BRAND?.logo}
          alt={data?.BRAND?.name}
          width={400}
          height={400}
          className="absolute -z-10 mx-auto w-[20%] opacity-5"
        />
        <div className="relative mx-auto max-w-screen-2xl">
          <div className="relative -mt-8 space-y-4 text-center text-white md:space-y-6 lg:-mt-16 lg:space-y-8">
            <StyledHeading
              className="text-[2.75rem] md:text-[3rem] lg:text-[3.5rem] lg:leading-normal"
              text={data?.SERVICES?.heading?.text}
              highlights={data?.SERVICES?.heading?.highlights}
            />
            <h1 className="text-[#E2E2B6]" data-aos="fade-up">
              {service?.name}
            </h1>
            <p
              className="mx-auto w-2/3 font-dmSans text-lg font-light tracking-tight lg:text-xl xl:text-2xl"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              {service?.description}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
