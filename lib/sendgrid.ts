import sgMail, { MailDataRequired } from '@sendgrid/mail'

type Props = {
  to: string
  templateName: keyof typeof templates
  dynamicTemplateData?: Record<string, string>
}

const templates = {
  ContactSubmission: '',
} as const

export const sendEmail = async ({
  to,
  templateName,
  dynamicTemplateData,
}: Props) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

  const msg: MailDataRequired = {
    to,
    from: {
      email: 'contact@accessph.net',
      name: 'Website Contact Form',
    },
    templateId: templates[templateName],
    dynamicTemplateData,
  }

  try {
    await sgMail.send(msg)
  } catch (error) {
    console.log(error)
  }
}
