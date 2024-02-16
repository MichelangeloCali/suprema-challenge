'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { BackButton } from '@/components'
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

  const onSubmit = (data: createContactFormData) => {
    console.log('Form value = ', data)
    // Envie os dados para a API ou faça o que desejar aqui
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
          error={!!errors.text}
          {...register('text')}
        />
        {errors.text && (
          <ErrorMessageTextArea>{errors.text?.message}</ErrorMessageTextArea>
        )}

        <ButtonForm type="submit">Enviar</ButtonForm>
      </Form>
    </Container>
  )
}
