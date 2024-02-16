'use client'

import styled from 'styled-components'

export const Main = styled.main`
  height: fit-content;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
  background-color: ${({ theme }) => theme.pallete.primary.main};
  color: ${({ theme }) => theme.textColor};
`
