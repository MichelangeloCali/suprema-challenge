import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

export const InputContent = styled.input<{ error?: boolean }>`
  min-width: 100%;
  height: 40px;
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.pallete.common.black};
  background-color: ${({ error }) => (error ? 'mistyrose' : 'none')};
  border-color: ${({ error }) => (error ? 'mistyrose' : 'none')};
  border-radius: 8px;
  padding-left: 68px;

  &:hover {
    border: none;
  }

  &:focus {
    border: none;
    outline: none;
  }

  &:active {
    font-weight: bold;
    border: none;
  }

  &:disabled {
    color: ${({ theme }) => theme.pallete.common.grey};
    cursor: not-allowed;
  }

  ${({ error }) =>
    error &&
    css`
      border-color: red;
    `}
`

export const Label = styled.label<{ error?: boolean }>`
  position: absolute;
  bottom: 10px;
  z-index: 1;
  display: block;
  padding-left: 8px;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 500;
  color: ${({ theme }) => theme.textColor};
`

export const TextError = styled.span<{ error?: boolean }>`
  position: absolute;
  bottom: -20px;
  color: red;
  font-size: ${({ theme }) => theme.fontSize.sm};
  margin-top: 2px;
`
