import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr;
  align-items: center;
  height: calc(100vh - 128px);
`

export const Title = styled.h1`
  justify-self: center;
  margin-top: 120px;
  margin-bottom: 24px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-self: center;
  align-self: self-start;
  min-width: 350px;
  max-width: 800px;
`

export const ButtonForm = styled.button`
  padding: 8px 18px;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: bold;
  background-color: ${({ theme }) => theme.pallete.primary.contrastText};
  color: ${({ theme }) => theme.pallete.common.grey};
  border-radius: 8px;
  border: none;

  &:hover {
    filter: brightness(110%);
  }
`

export const TextArea = styled.textarea<{ error: boolean }>`
  width: 100%;
  min-width: 350px;
  max-width: 800px;
  height: 100px;
  padding: 8px;
  font-size: 16px;
  border: 1px solid black;
  border-radius: 8px;
  background-color: white;

  ${({ error }) =>
    error &&
    css`
      border-color: red;
      background-color: mistyrose;
    `}

  &:focus {
    border: none;
    outline: none;
  }
`

export const ErrorMessageTextArea = styled.span`
  position: absolute;
  bottom: -20px;
  color: red;
  font-size: 14px;
`
