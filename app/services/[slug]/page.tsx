import Image from 'next/image'
import data from '@/data/data.json'
import { StyledHeading } from '@/components/ui/styled-heading'
import { BadgeCheck, Quote } from 'lucide-react'
import { cn } from '@/lib/utils'

// Pre-generate paths for all services in the data.json
export async function generateStaticParams() {
  return data.SERVICES.items.map((service) => ({
    slug: service.id.toString(),
  }))
}

const ServiceDetails = ({ params }: { params: { slug: string } }) => {
  const id = parseInt(params.slug)
  const service = data.SERVICES.items.find((item) => item.id == id)

  return (
    <div className="relative z-20">
      <section className="gradient-bg relative z-20 flex h-max w-full flex-col items-center justify-center gap-4 gap-y-1 pb-12 pt-20">
        <Image
          src={data?.BRAND?.logo}
          alt={data?.BRAND?.name}
          width={800}
          height={800}
          loading="lazy"
          className="absolute -z-10 mx-auto mt-12 w-full opacity-5 sm:w-[60%] md:w-[40%] lg:w-[20%]"
        />
        <div className="relative mx-auto max-w-screen-xl p-6 pt-8">
          <div className="relative space-y-8 text-center text-white md:space-y-6">
            <StyledHeading
              className="mb-2 text-[1.75rem] leading-normal md:text-[2.5rem] lg:text-[3rem]"
              text={data?.SERVICES?.heading?.text}
              highlights={data?.SERVICES?.heading?.highlights}
            />
            <hr className="mt-4 border-white/10" />
            <h1 className="text-brand-accent" data-aos="fade-up">
              {service?.name}
            </h1>
            <p
              className="mx-auto font-dmSans text-lg font-light tracking-tight lg:w-5/6 lg:text-xl xl:text-2xl"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              {service?.description}
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-20 mx-auto max-w-screen-xl px-6">
        <div className="flex w-full flex-col py-8">
          {service?.details?.map((detail, index) => (
            <div key={index} data-aos="fade" className="w-full py-8">
              <div
                className={cn('space-y-4 text-justify sm:text-left lg:w-3/5', {
                  'ml-auto sm:text-right': index % 2 == 1,
                })}
              >
                <Quote className="inline-block" />
                <h2>{detail?.heading}</h2>
                <p className="text-lg">{detail?.subheading}</p>
              </div>
              <hr className="mt-4" />
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center py-8">
          {service?.features?.heading && (
            <h2
              className="rhombus-path font-play relative z-30 m-auto w-max break-words border-[3px] border-brand-accent px-9 py-3 text-2xl tracking-wide text-brand backdrop-blur-[1px] lg:py-5 lg:text-4xl"
              data-aos="fade"
            >
              {service?.features?.heading}
            </h2>
          )}
          <div className="mt-8 flex w-full flex-wrap gap-8 lg:mx-0 lg:mt-12 lg:pb-32">
            {service?.features?.items?.map((feature, index) => {
              const totalItems = service?.features?.items?.length
              const isLastRowSingle =
                totalItems % 3 === 1 && index === totalItems

              return (
                <div
                  key={index}
                  className={cn(
                    'min-h-96 w-full flex-initial overflow-hidden rounded-lg bg-gray-50 lg:flex-1 lg:basis-[calc(33.33%-2rem)]',
                    { 'lg:basis-full': isLastRowSingle }
                  )}
                  data-aos="fade"
                  data-aos-delay={100 * index}
                >
                  <Image
                    alt={feature.title}
                    src={feature.image}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="aspect-video h-44 w-full bg-brand-secondary object-cover"
                  />
                  <div className="space-y-1 px-5 py-3">
                    <h3 className="mb-3 h-12 text-center text-brand lg:h-20">
                      {feature.title}
                    </h3>

                    {feature.sub.map((el) => (
                      <p key={el} className="flex items-center gap-x-4">
                        <BadgeCheck className="h-4 w-4 flex-shrink-0 text-brand" />
                        {el}
                      </p>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServiceDetails
