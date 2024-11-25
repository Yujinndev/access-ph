import Image from 'next/image'
import ModuleTable from '@/components/module-table'
import { notFound } from 'next/navigation'
import { getData } from '@/utils/get-data'

const ServiceModules = async ({ params }: { params: { slug: string } }) => {
  const data = await getData()

  const id = params.slug
  const service = data.SERVICES.items.find((item) => item.id.toString() == id)

  if (!service?.modules) {
    notFound()
  }

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
            <h3 className="mb-2 text-[1.75rem] leading-normal md:text-[2.5rem] lg:text-[3rem]">
              Module-centric User Permissions
            </h3>
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
        {service?.modules?.map((module, index) => (
          <ModuleTable
            key={index}
            heading={module.heading}
            subModules={module.sub}
          />
        ))}
      </section>
    </div>
  )
}

export default ServiceModules
