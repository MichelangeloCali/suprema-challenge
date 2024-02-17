'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { v4 as uuidv4 } from 'uuid'

import { BackButton } from '@/components'
import { sendFormData } from '@/app/actions'
import { contactFormSchema, createContactFormData } from '@/utils'

import { Input } from '@/components/Input'
import {
  Container,
  Title,
  Form,
  ButtonForm,
  TextArea,
  ErrorMessageTextArea,
} from './ContactForm.styles'

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (formData: createContactFormData) => {
    try {
      const formDataWithId = {
        ...formData,
        id: uuidv4(),
      }
      const response = await sendFormData(formDataWithId)
      console.log('Formulário enviado com sucesso:', response)
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error)
    }
  }

  return (
    <Container>
      <BackButton />

      <Title>Formulário de Contato</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Nome"
          htmlFor="name"
          error={!!errors.name}
          errorMessage={errors.name?.message || ''}
          {...register('name')}
        />
        <Input
          label="E-mail"
          htmlFor="email"
          error={!!errors.email}
          errorMessage={errors.email?.message || ''}
          {...register('email')}
        />
        <TextArea
          placeholder="mensagem"
          error={!!errors.message}
          {...register('message')}
          name="message"
        />
        {errors.message && (
          <ErrorMessageTextArea>{errors.message?.message}</ErrorMessageTextArea>
        )}

        <ButtonForm type="submit">Enviar</ButtonForm>
      </Form>
    </Container>
  )
}
