import ContactForm from '@/components/contact-form'
import { StyledHeading } from '@/components/ui/styled-heading'
import { getData } from '@/utils/get-data'

const AboutUs = async () => {
  const data = await getData()

  return (
    <div className="relative overflow-x-hidden">
      <div className="relative">
        <section className="z-20 mx-auto max-w-screen-xl">
          <div className="gap-4 lg:flex lg:w-7/12">
            <div className="space-y-8 px-6 pb-24 pt-28 lg:py-44">
              <StyledHeading
                text={data?.ABOUT?.heading?.text}
                highlights={data?.ABOUT?.heading?.highlights}
              />
              <p
                className="w-full text-lg leading-relaxed text-neutral-500 lg:text-xl"
                data-aos="fade-right"
                data-aos-delay="250"
                data-aos-duration="500"
              >
                {data?.ABOUT?.subheading}
              </p>
            </div>
            <div className="w-full bg-blue-300 object-cover lg:absolute lg:right-0 lg:h-full lg:w-5/12 lg:rounded-bl-full" />
          </div>
        </section>
      </div>

      <div id="contact" className="h-px lg:h-24" />
      <ContactForm />
    </div>
  )
}

export default AboutUs
