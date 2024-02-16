'use client'

import styled from 'styled-components'

export const ButtonContainer = styled.button`
  display: flex;
  flex-direction: column;
  grid-row: 1;
  background-color: ${({ theme }) => theme.pallete.primary.main};
  color: ${({ theme }) => theme.pallete.common.white};
  border: none;
`
