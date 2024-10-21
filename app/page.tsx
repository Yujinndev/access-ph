'use client'

import Image from 'next/image'
import Hero from '@/app/home/hero-section'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { CarouselSlider } from '@/components/ui/carousel-slider'
import { StyledHeading } from '@/components/ui/styled-heading'
import data from '@/data/data.json'

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Hero />

      <section className="relative z-20 mx-auto max-w-screen-xl" id="more">
        <div className="grid place-content-center place-items-center pt-20 md:grid-cols-2">
          <div className="space-y-4 px-6">
            <StyledHeading
              text={data?.BRAND?.more?.heading?.text}
              highlights={data?.BRAND?.more?.heading?.highlights}
            />
            <p
              className="w-full md:text-xl lg:text-2xl"
              data-aos="fade-right"
              data-aos-delay="250"
              data-aos-duration="500"
            >
              {data?.BRAND?.more?.subheading}
            </p>
          </div>
          <Image
            src={data?.BRAND?.more?.exp}
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
              src={data?.BRAND?.more?.exp}
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
      </section>

      <div className="space-y-16 pb-40 pt-20 text-center lg:pt-40">
        <div className="relative flex w-full flex-col items-center space-y-6 px-6">
          <StyledHeading
            text={data?.SERVICES?.heading?.text}
            highlights={data?.SERVICES?.heading?.highlights}
          />
          <p
            className="mx-auto md:w-4/5 md:text-xl lg:w-2/5 lg:text-2xl"
            data-aos="fade-up"
            data-aos-delay="250"
            data-aos-duration="500"
          >
            {data?.SERVICES?.subheading}
          </p>
        </div>
        <CarouselSlider
          items={data?.SERVICES?.items}
          numItems={data?.SERVICES?.landingPageDisplay}
        />
      </div>

      <section className="relative mb-28 mt-12 overflow-hidden lg:h-[30rem]">
        <div className="gradient-bg polygon-path absolute hidden h-full w-5/12 lg:block lg:w-[46%]" />
        <div className="gradient-bg mb-polygon-path absolute block h-[40%] w-full lg:hidden" />

        <div className="relative m-auto grid h-full max-w-screen-xl flex-col items-center justify-center gap-20 px-6 lg:grid-cols-7">
          <div className="relative m-auto mt-8 w-full space-y-6 text-center text-white lg:col-span-3 lg:m-0 lg:w-4/5 lg:text-left">
            <StyledHeading
              text={data?.FAQs.heading?.text}
              highlights={data?.FAQs.heading?.highlights}
              className="text-4xl"
            />
            <p
              className="text-lg lg:text-xl"
              data-aos="fade-up"
              data-aos-delay="250"
              data-aos-duration="500"
            >
              {data?.FAQs?.subheading}
            </p>
          </div>

          <div className="mt-8 space-y-3 lg:col-span-4 lg:mt-0">
            {data?.FAQs?.items?.map((item, index) => (
              <Accordion
                key={index}
                type="single"
                collapsible
                data-aos-delay={250 * index}
                data-aos="fade-left"
                data-aos-offset="0"
                data-aos-duration="1000"
                defaultValue={index === 0 ? `item-${index}` : undefined}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
