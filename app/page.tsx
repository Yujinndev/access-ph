import { Button } from '@/components/ui/button'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { BRAND, LOGOS, SERVICES } from './constants'
import Image from 'next/image'
import ScrollingParticles from '@/components/ui/scrolling-particles'
import HighlightText from '@/components/ui/highlight-text'
import Link from 'next/link'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <section className="hero gradient-bg relative z-20 flex h-screen flex-col items-center justify-center gap-4 gap-y-1 px-6 md:px-14 lg:gap-y-6 lg:px-20 xl:px-28">
        <Image
          src={BRAND.logo}
          alt={BRAND.name}
          className="absolute -z-10 w-[80%] opacity-5 lg:w-[40%]"
        />
        <div className="relative -mt-8 space-y-4 text-center text-white md:space-y-6 lg:-mt-16 lg:space-y-8">
          <h1
            data-aos="fade-up"
            className="m-auto text-[3.75rem] font-bold leading-snug sm:text-balance md:text-[4rem] lg:w-full lg:text-wrap lg:text-[4.5rem] lg:leading-normal xl:text-[5.75rem]"
          >
            Easily <br className="lg:hidden" />
            <HighlightText text="ACCESS" /> your{' '}
            <span className="text-amber-100">SOLUTION</span>
          </h1>
          <h1
            data-aos="fade-up"
            data-aos-delay="250"
            className="text-[2rem] font-bold md:text-[2.75rem] lg:text-[3.5rem] xl:text-[4.5rem]"
          >
            Plan. Build. Deliver.
          </h1>
          <p
            className="font-dmSans text-lg font-light tracking-tight lg:text-xl xl:text-2xl"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Trusted for years in providing reliable digital solutions.
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
          <ScrollingParticles items={[...LOGOS, ...LOGOS]} />
        </div>
      </section>
      <section className="relative z-20 mx-auto max-w-screen-xl" id="more">
        <div className="grid place-content-center place-items-center pt-20 md:grid-cols-2">
          <div className="space-y-4 px-6">
            <h1
              className="font-bold leading-snug"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              We will <HighlightText text="Build" hexColor="#03346E" /> you the
              perfect tools.
            </h1>
            <p
              className="w-full md:text-xl lg:text-2xl"
              data-aos="fade-right"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              We help you build and develop websites, web apps, mobile apps,
              custom software solutions, and more.
            </p>
          </div>
          <Image
            src={BRAND.exp}
            alt={BRAND.name}
            className="mx-auto hidden w-full object-cover md:block"
            data-aos-delay="500"
            data-aos="zoom-out-left"
            data-aos-duration="1000"
          />
          <div className="relative space-y-4 md:hidden">
            <div className="absolute inset-x-0 m-auto mt-8 h-80 w-80 rounded-full bg-neutral-200/80 lg:hidden" />
            <Image
              src={BRAND.exp}
              alt={BRAND.name}
              className="h-full w-full"
              data-aos-delay="500"
              data-aos="zoom-out-left"
              data-aos-duration="2000"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center space-y-16 px-6 pb-40 pt-20 text-center lg:pt-40">
          <div className="space-y-6">
            <h1
              className="font-bold leading-snug"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Check out our{' '}
              <HighlightText
                text="Services"
                hexColor="#03346E"
                className="-bottom-5 left-0 w-full md:-bottom-5 lg:-bottom-5"
              />
            </h1>
            <p
              className="mx-auto md:text-xl lg:w-[60%] lg:text-2xl"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              Partner with us to deliver innovative, scalable systems that
              empower your Institution to thrive in a rapidly changing world.
            </p>
          </div>
          <div className="space-y-6">
            <div className="relative flex flex-col gap-4 lg:flex-row">
              {SERVICES.slice(0, 3).map((service, index) => (
                <Card
                  key={index}
                  className={cn(
                    'flex h-[350px] flex-col rounded-md bg-[#336A9F] p-4 text-white transition-all duration-300 ease-linear lg:h-[500px] lg:w-[45%]',
                    { 'bg-[#03346E] lg:w-full': index === 0 }
                  )}
                  data-aos-delay={250 * (index + 1)}
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  <CardHeader className="h-4/5 w-full p-0 pb-4">
                    <Image
                      src={service.image}
                      alt={service.name}
                      className={cn(
                        'aspect-square h-full w-full rounded-sm border-[1px] object-contain p-4 opacity-5',
                        { 'opacity-100': index === 0 }
                      )}
                      priority
                    />
                  </CardHeader>
                  <CardContent className="flex h-1/5 w-full items-center justify-between overflow-hidden rounded-md bg-[#D9D9D9]/10 py-4 text-left">
                    <div className="w-5/6 space-y-2 py-2">
                      <h2 className="font-dmSans text-xl">{service.name}</h2>
                      <p
                        className={cn('line-clamp-1 hidden', {
                          'inline-block': index === 0,
                        })}
                      >
                        {service.description}
                      </p>
                    </div>
                    <Button
                      variant="secondary"
                      className={cn(
                        'hidden h-12 w-12 rounded-full bg-[#E2E2B6] text-black',
                        { block: index === 0 }
                      )}
                      size="icon"
                    >
                      <ArrowRight className="mx-auto flex-shrink-0" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Button
              variant="secondary"
              className="rounded-full bg-[#E2E2B6] px-16 py-4 text-base text-black"
            >
              View All
            </Button>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden lg:h-[50rem]">
        <div className="gradient-bg polygon-path absolute hidden h-full w-5/12 lg:block lg:w-[46%]" />
        <div className="gradient-bg mb-polygon-path absolute block h-[40%] w-full lg:hidden" />

        <div className="relative m-auto grid h-full max-w-screen-xl flex-col items-center justify-center gap-20 px-6 lg:grid-cols-7">
          <div className="relative m-auto mt-8 w-full space-y-6 text-center text-white lg:col-span-3 lg:m-0 lg:w-4/5 lg:text-left">
            <h2 className="font-oswald text-4xl font-bold text-white">
              FAQs about&nbsp;
              <span className="text-[#E2E2B6]">Access</span>
            </h2>
            <p className="text-lg lg:text-xl">
              Curious about Access? Find answers to Frequently Asked Questions
              about our platform and how we can help you.
            </p>
          </div>

          <div className="mt-8 space-y-3 lg:col-span-4 lg:mt-0">
            {Array.from({ length: 5 }).map((_, index) => (
              <Accordion
                type="single"
                collapsible
                data-aos-delay={250 * index}
                data-aos="fade-left"
                data-aos-offset="0"
                data-aos-duration="1000"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>FAQ #{index + 1}</AccordionTrigger>
                  <AccordionContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
