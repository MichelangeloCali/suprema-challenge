'use client'

import { InputHTMLAttributes, forwardRef } from 'react'
import { Container, InputContent, Label, TextError } from './Input.styles'

type InputPropsType = {
  label: string
  htmlFor: string
  error: boolean
  errorMessage: string
} & InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputPropsType>(
  function Input({ label, htmlFor, error, errorMessage, ...props }, ref) {
    return (
      <Container>
        <Label htmlFor={htmlFor} error={error}>
          {label}
        </Label>

        <InputContent
          type="text"
          id={htmlFor}
          name={htmlFor}
          ref={ref}
          error={error}
          {...props}
        />

        {error && <TextError>{errorMessage}</TextError>}
      </Container>
    )
  },
)
