import Image from 'next/image'
import data from '@/data/data.json'
import { StyledHeading } from '@/components/ui/styled-heading'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'

const Services = () => {
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
              className="text-[3.75rem] md:text-[4rem] lg:text-[4.5rem] lg:leading-normal"
              text={data?.SERVICES?.heading?.text}
              highlights={data?.SERVICES?.heading?.highlights}
            />
            <p
              className="mx-auto w-2/3 font-dmSans text-lg font-light tracking-tight lg:text-xl xl:text-2xl"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              {data?.SERVICES?.subheading}
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-20 mx-auto max-w-screen-xl">
        <div className="grid place-content-center place-items-center pt-20 md:grid-cols-2">
          <div className="space-y-8 px-6">
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
            className="mx-auto hidden w-full object-cover md:block"
            data-aos="zoom-out-left"
            data-aos-delay="500"
            data-aos-duration="1000"
          />
          <div className="relative space-y-4 md:hidden">
            <div className="absolute inset-x-0 m-auto mt-8 h-80 w-80 rounded-full bg-neutral-200/80 lg:hidden" />
            <Image
              src={data?.SERVICES?.more?.exp}
              alt={data?.BRAND?.name}
              width={800}
              height={800}
              className="h-full w-full"
              data-aos="zoom-out-left"
              data-aos-delay="500"
              data-aos-duration="2000"
            />
          </div>
        </div>
        <hr />

        <div className="flex w-full flex-col items-center justify-center gap-y-8 py-20"></div>

        <div className="mx-auto mt-12 grid max-w-xl gap-12 sm:mt-16 lg:mx-0 lg:mt-24 lg:max-w-none lg:grid-cols-2 lg:gap-10 lg:pb-32 xl:gap-24">
          {data?.SERVICES?.items?.map((item, index) => (
            <div
              key={item.id}
              className={cn(
                'flex flex-col gap-12 rounded-3xl bg-gray-50 px-7 py-12 sm:gap-14 sm:p-16 lg:px-10 lg:py-14 xl:gap-16 xl:p-16',
                {
                  'lg:translate-y-24 xl:translate-y-32': index % 2 === 1,
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
                  alt={item.name}
                  loading="lazy"
                  className="aspect-video w-full rounded-xl bg-gray-100 object-cover object-top transition duration-300 group-hover:scale-105"
                  src={item.image}
                  width={3840}
                  height={2160}
                />
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/5"></div>
              </Link>
              <div className="flex flex-col items-center">
                <Badge
                  variant="secondary"
                  className="rounded-full bg-[#E2E2B6] px-4 py-[2px] text-sm"
                >
                  {item.type}
                </Badge>
                <h3 className="mt-2 text-center text-[28px] font-medium text-gray-900">
                  {item.name}
                </h3>
                <p className="mt-5 text-center text-base leading-8 text-gray-700">
                  {item.description}
                </p>
              </div>

              <Button
                variant="outline"
                className="mx-auto w-4/5 rounded-full py-6 shadow-none"
                asChild
              >
                <Link className="space-x-2" href={`/services/${item.id}`}>
                  <span>View service</span>
                  <ArrowUpRight />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Services
