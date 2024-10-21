import data from '@/data/data.json'
import Hero from '@/components/common/hero'
import { StyledHeading } from '@/components/ui/styled-heading'
import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Pricing = () => {
  return (
    <div className="relative z-20">
      <Hero
        heading={data?.PRICING?.heading}
        subheading={data?.PRICING?.subheading}
      />

      <section className="relative z-20 mx-auto max-w-screen-xl px-6">
        <div className="grid gap-x-12 py-20 pt-28 lg:grid-cols-2">
          {data?.PRICING?.plans?.map((plan) => (
            <div key={plan.name} data-aos="fade" data-aos-duration="1000">
              <h2 className="text-center text-xl text-brand lg:text-2xl">
                {plan.name}
              </h2>
              <div
                className="my-2 min-h-[32rem] space-y-6 rounded-lg border-[1px] px-12 py-8"
                style={{
                  background: plan?.styles?.['background-color'],
                }}
              >
                <p
                  className="text-base text-brand lg:text-lg"
                  style={{
                    color: plan?.styles?.['color'],
                  }}
                >
                  {plan.description}
                </p>
                <StyledHeading
                  text={plan?.price?.text}
                  highlights={plan?.price?.highlights}
                  animation="fade-right"
                  className="text-4xl tracking-normal xl:text-6xl"
                />
                <p
                  className="pt-4 text-base text-brand lg:text-lg"
                  style={{
                    color: plan?.styles?.['color'],
                  }}
                >
                  {plan?.price?.desc}
                </p>
                <Button
                  variant="secondary"
                  className="w-full py-6 text-lg font-bold"
                  asChild
                >
                  <Link href={plan?.cta?.link}>{plan?.cta?.text}</Link>
                </Button>

                <div className="space-y-1 py-2">
                  {plan?.perks?.map((obj, index) => (
                    <React.Fragment key={index}>
                      {Object.entries(obj).map(([key, value], i) => (
                        <div
                          key={i}
                          className="flex gap-1"
                          style={{
                            color: plan?.styles?.['color'],
                          }}
                        >
                          <h5 className="font-bold">{key}:</h5>{' '}
                          <span>{value}</span>
                        </div>
                      ))}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Pricing
