import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { ArrowUpRight } from 'lucide-react'
import Hero from '@/components/common/hero'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { StyledHeading } from '@/components/ui/styled-heading'
import { getData } from '@/utils/get-data'

const Services = async () => {
  const data = await getData()

  return (
    <div className="relative z-20">
      <Hero
        data={data}
        heading={data?.SERVICES?.heading}
        subheading={data?.SERVICES?.subheading}
      />

      <section className="relative z-20 mx-auto max-w-screen-xl px-6">
        <div className="grid place-content-center place-items-center pt-20 md:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h3
                className="font-oswald text-3xl font-bold"
                data-aos="fade-right"
              >
                {data?.SERVICES?.more?.title}
              </h3>
              <StyledHeading
                text={data?.SERVICES?.more?.heading?.text}
                highlights={data?.SERVICES?.more?.heading?.highlights}
                animation="fade-right"
              />
            </div>
            <p className="w-full md:text-xl lg:text-2xl" data-aos="fade-right">
              {data?.SERVICES?.more?.subheading}
            </p>
          </div>
          <Image
            src={data?.SERVICES?.more?.exp}
            alt={data?.BRAND?.name}
            width={800}
            height={800}
            loading="lazy"
            className="mx-auto hidden w-full object-cover md:block"
            data-aos="zoom-out-left"
            data-aos-delay="500"
            data-aos-duration="1000"
          />
          <div className="relative space-y-4 md:hidden">
            <div className="absolute inset-x-0 m-auto mt-8 h-80 w-80 rounded-full bg-brand-accent lg:hidden" />
            <Image
              src={data?.SERVICES?.more?.exp}
              alt={data?.BRAND?.name}
              width={800}
              height={800}
              loading="lazy"
              className="h-full w-full"
              data-aos="zoom-out-left"
              data-aos-delay="500"
              data-aos-duration="2000"
            />
          </div>
        </div>
        <hr />

        <div className="mx-auto mt-12 grid max-w-xl gap-12 sm:mt-16 lg:mx-0 lg:mt-24 lg:max-w-none lg:grid-cols-2 lg:gap-10 lg:pb-32 xl:gap-24">
          {data?.SERVICES?.items?.map((item, index) => (
            <div
              key={item.id}
              className={cn(
                'flex flex-col gap-12 rounded-3xl bg-gray-50 px-7 py-12 sm:gap-14 sm:p-16 lg:px-10 lg:py-14 xl:gap-16 xl:p-16',
                {
                  'flex-col-reverse lg:translate-y-48 xl:translate-y-72':
                    index % 2 === 1,
                  'rounded-tl-[64px]': index === 0,
                  'rounded-br-[64px]':
                    index === data?.SERVICES?.items?.length - 1,
                }
              )}
            >
              <Link
                href={`/services/${item.id}`}
                className="aspect-w-16 aspect-h-9 md:aspect-w-3 md:aspect-h-2 group relative block w-full overflow-hidden rounded-xl"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="aspect-video w-full rounded-xl bg-gray-100 object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/5"></div>
              </Link>
              <div className="flex flex-col items-center space-y-5">
                <Badge
                  variant="secondary"
                  className="rounded-full bg-brand-accent px-4 py-[2px] text-sm"
                >
                  {item.type}
                </Badge>
                <h3 className="mt-2 text-center text-[28px] font-medium text-gray-900">
                  {item.name}
                </h3>
                <p className="mt-5 text-center text-base leading-8 text-gray-700">
                  {item.description}
                </p>
                <Button
                  className="mx-auto w-4/5 rounded-full bg-brand py-6 shadow-none"
                  asChild
                >
                  <Link className="space-x-2" href={`/services/${item.id}`}>
                    <span>View service</span>
                    <ArrowUpRight />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Services
