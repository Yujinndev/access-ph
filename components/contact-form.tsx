'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
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
import {
  contactFormSchema,
  contactFormSchemaType,
} from '@/lib/schema/contact-form'

const ContactForm = () => {
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
  )
}

export default ContactForm
