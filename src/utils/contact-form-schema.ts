import { z } from 'zod'

export const contactFormSchema = z.object({
  email: z
    .string()
    .email({ message: 'Por favor, forneça um endereço de e-mail válido' }),
  name: z
    .string()
    .min(3, { message: 'Precisa ter mais de 3 caracteres' })
    .max(20, { message: 'Precisa ter menos de 20 caracteres' }),
  message: z
    .string()
    .max(500, { message: 'A mensagem precisa ter menos de 500 caracteres' }),
})

export type createContactFormData = z.infer<typeof contactFormSchema>
