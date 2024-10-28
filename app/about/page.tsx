'use client'

import { StyledHeading } from '@/components/ui/styled-heading'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { sendContactEmailAction } from '@/app/_actions'
import data from '@/data/data.json'

export const contactFormSchema = z.object({
  name: z.string().min(1),
  email: z.string().email().min(1),
  phone: z.string(),
  message: z.string().min(1).max(500),
})

export type contactFormSchemaType = z.infer<typeof contactFormSchema>

const AboutUs = () => {
  const form = useForm<contactFormSchemaType>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  })

  const onSubmit = async (values: contactFormSchemaType) => {
    try {
      await sendContactEmailAction(values)
    } catch (error) {
      console.log(error)
    }
  }

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
      <div className="relative lg:py-20">
        <section className="z-50 mx-auto max-w-screen-xl px-6">
          <div className="flex w-full flex-col lg:flex-row">
            <div className="hidden lg:block lg:w-5/12" />
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-10 font-dmSans lg:w-7/12"
              >
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold lg:text-4xl">
                    Fill out the form below to get started
                  </h2>
                  <p className="w-full text-pretty lg:w-5/6 lg:text-xl">
                    Let us know about your project and we will get back to you
                    with our proposal and timeline.
                  </p>
                </div>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium">Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium">Email</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center justify-between pb-2">
                        <FormLabel className="font-medium">Phone</FormLabel>
                        <FormLabel className="text-sm font-light">
                          Optional
                        </FormLabel>
                      </div>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center justify-between pb-2">
                        <FormLabel className="font-medium">
                          How can we help you?
                        </FormLabel>
                        <FormLabel className="text-sm font-light">
                          Max 500 characters
                        </FormLabel>
                      </div>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us a little bit ..."
                          maxLength={500}
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button
                  className="w-full rounded-full bg-brand py-6 text-lg"
                  disabled={form.formState.isLoading}
                >
                  Submit
                </Button>
              </form>
            </Form>
          </div>
        </section>
        <div className="absolute left-0 top-0 hidden h-full w-2/6 rounded-e-full bg-blue-300 lg:block" />
      </div>
    </div>
  )
}

export default AboutUs
