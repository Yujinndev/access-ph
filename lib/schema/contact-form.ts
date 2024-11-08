import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(1),
  email: z.string().email().min(1),
  phone: z.string(),
  message: z.string().min(1).max(500),
})

export type contactFormSchemaType = z.infer<typeof contactFormSchema>
