'use server'

import { contactFormSchemaType } from '@/lib/schema/contact-form'
import { sendEmail } from '@/lib/sendgrid'

export const sendContactEmailAction = async (data: contactFormSchemaType) => {
  const { name, email, phone, message } = data

  try {
    await sendEmail({
      to: 'contact@accessph.net',
      templateName: 'ContactSubmission',
      dynamicTemplateData: {
        name,
        email,
        phone,
        message,
      },
    })

    return { errorMessage: null }
  } catch (error) {
    console.log(error)
    return { errorMessage: 'Something went wrong' }
  }
}
